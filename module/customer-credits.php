<?
function del_credits() {
  global $db, $get_id, $jobtitleid, $userid, $msg, $php_path;
  
  $t = "`customer_module_credits`";
  
  $id = $get_id;
  $get_id = $db->get_var("select `customerid` from {$t} where `id`='{$get_id}'");
  
  chk_customer_detail_auth();
  
  $sql = "delete from {$t} where `id`='{$id}'";
  $db->query($sql);
  
  echo json_encode("删除ID {$get_id} 完成");
  exit;
}

function save_credits() {
  global $db, $get_id, $jobtitleid, $userid, $msg, $php_path, $html;
  
  $t = "`customer_module_credits`";
  $upath = 'module/upload/credits/';
  $fpath = dirname($php_path) . '/' . $upath;
  
  chk_customer_detail_auth();

  $up = new upload("gif|jpg|jpeg|png|pdf|doc|docx|xls|xlsx", 1024, "ipt-wjian");
  $up->set_dir($fpath);
  $fs = $up->execute();
  
  if ($fs) {
    if ($fs[0]["flag"] == 1) {
      $ipt["wjian"] = $upath . $fs[0]["name"];
      $ipt["title"] = $fs[0]["title"];
    } else {
      if ($fs[0]["flag"] == -1) {
        exit(json_encode(array(0, "文件类型不允许，上传失败")));
      } else if ($fs[0]["flag"] == -2) {
        exit(json_encode(array(0, "文件大小超出，上传失败")));
      }
      exit;
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
    initCreditsData();
    exit($html["json"]["credits"]);
  } else {
    exit(json_encode(array(0, "文件保存失败！")));
  }
}
// save_credits() end

function add_credits() {
  global $db, $get_id, $jobtitleid, $userid, $msg, $php_path, $html;
  
  $t = "`customer_module_credits`";
  $upath = 'module/upload/credits/';
  $fpath = dirname($php_path) . '/' . $upath;
  
  chk_customer_detail_auth();

  $up = new upload("gif|jpg|jpeg|png|pdf|doc|docx|xls|xlsx", 1024, "ipt-wjian");
  $up->set_dir($fpath);
  $fs = $up->execute();
  
  if ($fs) {
    if ($fs[0]["flag"] == 1) {
      $ipt["wjian"] = $upath . $fs[0]["name"];
      $ipt["title"] = $fs[0]["title"];
    } else {
      if ($fs[0]["flag"] == -1) {
        exit(json_encode(array(0, "文件类型不允许，上传失败")));
      } else if ($fs[0]["flag"] == -2) {
        exit(json_encode(array(0, "文件大小超出，上传失败")));
      }
      exit;
    }
  } else {
    exit(json_encode(array(0, "文件上传失败")));
    exit;
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
    initCreditsData();
    exit($html["json"]["credits"]);
  } else {
    exit(json_encode(array(0, "文件添加失败！")));
  }
}
// add_credits() end

function json_credits() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_credits`";
  
  $sql = "select * from $t where `id`='$get_id' limit 1";
  $rs = $db->get_row($sql);
  
  echo json_encode($rs);
  exit;
}

function initCreditsData() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_credits`";
  $html["m"]["credits"] = array();
  
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
    
    $html["m"]["credits"][] = $obj;
  }

  $html["json"]["credits"] = json_encode($html["m"]["credits"]);
  //print_r($html["json"]["credits"]);exit;
  // 工作信息 end
}
?>