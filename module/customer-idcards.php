<?
function del_idcards() {
  global $db, $get_id, $jobtitleid, $userid, $msg, $php_path;
  
  $t = "`customer_module_idcards`";
  
  $id = $get_id;
  $get_id = $db->get_var("select `customerid` from {$t} where `id`='{$get_id}'");
  
  chk_customer_detail_auth();
  
  $sql = "delete from {$t} where `id`='{$id}'";
  $db->query($sql);
  
  echo json_encode("删除ID {$get_id} 完成");
  exit;
}

function save_idcards() {
  global $db, $get_id, $jobtitleid, $userid, $msg, $php_path, $html;
  
  $t = "`customer_module_idcards`";
  $upath = 'module/upload/idcards/';
  $fpath = dirname($php_path) . '/' . $upath;
  
  chk_customer_detail_auth();

  $up = new upload("gif|jpg|jpeg|png|pdf|doc|docx|xls|xlsx", 1024, "ipt-wjian");
  $up->set_dir($fpath);
  $fs = $up->execute();
  
  if ($fs) {
    if ($fs[0]["flag"] == 1) {
      $ipt["wjian"] = $upath . $fs[0]["name"];
      $ipt["title"] = $upath . $fs[0]["title"];
    } else {
      if ($fs[0]["flag"] == -1) {
        exit(json_encode(array(0, "文件类型不允许，上传失败")));
      } else if ($fs[0]["flag"] == -2) {
        exit(json_encode(array(0, "文件大小超出，上传失败")));
      }
    }
  }

  $ipt["zllxing"] = get_post("ipt-zllxing", 0);
  
  $ipt_id = get_post("ipt-id", 0);
  $sql = "update $t set ";
  foreach (array_keys($ipt) as $item) {
    $sql .= "`$item` = '" .$ipt["$item"]. "', ";
  }
  $sql .= "`userid` = '" .$userid. "', ";
  $sql .= "`update` = '" .date("Y-m-d H:i:s"). "' ";
  $sql .= "where `id`='$ipt_id' and `customerid`='$get_id'";
  //echo $sql;exit;
  
  if ($db->query($sql)) {
    initIdcardsData();
    exit($html["json"]["idcards"]);
  } else {
    //$msg .= gen_alert("身份证文件保存失败！");
    exit(json_encode(array(0, "身份证文件保存失败！")));
  }
}
// save_idcards() end

function add_idcards() {
  global $db, $get_id, $jobtitleid, $userid, $msg, $php_path, $html;
  
  $t = "`customer_module_idcards`";
  $upath = 'module/upload/idcards/';
  $fpath = dirname($php_path) . '/' . $upath;
  
  chk_customer_detail_auth();

  $up = new upload("gif|jpg|jpeg|png|pdf|doc|docx|xls|xlsx", 1024, "ipt-wjian");
  $up->set_dir($fpath);
  $fs = $up->execute();
  
  if ($fs) {
    if ($fs[0]["flag"] == 1) {
      $ipt["wjian"] = $upath . $fs[0]["name"];
      $ipt["title"] = $upath . $fs[0]["title"];
    } else {
      if ($fs[0]["flag"] == -1) {
        exit(json_encode(array(0, "文件类型不允许，上传失败")));
      } else if ($fs[0]["flag"] == -2) {
        exit(json_encode(array(0, "文件大小超出，上传失败")));
      }
    }
  } else {
    exit(json_encode(array(0, "身份证文件上传失败！")));
  }
  
  $ipt["zllxing"] = get_post("ipt-zllxing", 0);
  
  $sql = "insert into $t (";
  $sql_item = "";
  foreach (array_keys($ipt) as $item) {
    $sql_item .= "`$item`, ";
  }
  $sql .= $sql_item . "`customerid`, `userid`, `update`) values (";
  $sql_item = "";
  foreach (array_keys($ipt) as $item) {
    $sql_item .= "'" .$ipt["$item"]. "', ";
  }
  $sql .= $sql_item. "'" .$get_id. "', '" .$userid. "', '" .date("Y-m-d H:i:s"). "')";
  //echo $sql;exit;
  
  if ($db->query($sql)) {
    initIdcardsData();
    exit($html["json"]["idcards"]);
  } else {
    //$msg .= gen_alert("身份证文件添加失败！");
    exit(json_encode(array(0, "身份证文件添加失败！")));
  }
}
// add_idcards() end

function json_idcards() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_idcards`";
  
  $sql = "select * from $t where `id`='$get_id' limit 1";
  $rs = $db->get_row($sql);
  
  echo json_encode($rs);
  exit;
}

function initIdcardsData() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_idcards`";
  $html["m"]["idcards"] = array();
  
  $sql = "select * from $t where `customerid`='$get_id' order by `update`";
  $rs = $db->get_results($sql);
  if ($rs == null) $rs = array();
  
  foreach ($rs as $item) {
    $obj = array();
    $obj["id"] = $item->id;
    $obj["zllxing"] = $item->zllxing;
    $obj["wjian"] = $item->wjian;
    $obj["title"] = $item->title;
    $obj["update"] = date("Y-m-d", strtotime($item->update));
    
    $html["m"]["idcards"][] = $obj;
  }

  $html["json"]["idcards"] = json_encode($html["m"]["idcards"]);
  //print_r($html["json"]["idcards"]);exit;
  // 工作信息 end
}
?>