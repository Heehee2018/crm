<?
function del_contracts() {
  global $db, $get_id, $jobtitleid, $userid, $msg, $php_path;
  
  $t = "`customer_module_contracts`";
  
  $id = $get_id;
  $get_id = $db->get_var("select `customerid` from {$t} where `id`='{$get_id}'");
  
  chk_customer_detail_auth();
  
  $sql = "delete from {$t} where `id`='{$id}'";
  $db->query($sql);
  
  echo json_encode("删除ID {$get_id} 完成");
  exit;
}

function save_contracts() {
  global $db, $get_id, $jobtitleid, $userid, $msg, $php_path, $html;
  
  $t = "`customer_module_contracts`";
  $upath = 'module/upload/contracts/';
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

  $ipt["code"] = get_post("ipt-code");
  $ipt["feilv"] = get_post("ipt-feilv");
  $ipt["zllxing"] = get_post("ipt-zllxing", 0);
  setcookie('contract_last_code', $ipt["code"], time() + 86400 * 4);
  setcookie('contract_last_feilv', $ipt["feilv"], time() + 86400 * 4);
  
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
    initContractsData();
    $array = json_decode($html["json"]["contracts"], true);
    $array["last_code"] = $ipt["code"];
    $array["last_feilv"] = $ipt["feilv"];
    exit(json_encode($array));
  } else {
    exit(json_encode(array(0, "文件保存失败！")));
  }
}
// save_contracts() end

function add_contracts() {
  global $db, $get_id, $jobtitleid, $userid, $msg, $php_path, $html;
  
  $t = "`customer_module_contracts`";
  $upath = 'module/upload/contracts/';
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
  
  $ipt["code"] = get_post("ipt-code");
  $ipt["feilv"] = get_post("ipt-feilv");
  $ipt["zllxing"] = get_post("ipt-zllxing", 0);
  setcookie('contract_last_code', $ipt["code"], time() + 86400 * 4);
  setcookie('contract_last_feilv', $ipt["feilv"], time() + 86400 * 4);
  
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
    initContractsData();
    $array = json_decode($html["json"]["contracts"], true);
    $array["last_code"] = $ipt["code"];
    $array["last_feilv"] = $ipt["feilv"];
    exit(json_encode($array));
  } else {
    exit(json_encode(array(0, "文件添加失败！")));
  }
}
// add_contracts() end

function json_contracts() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_contracts`";
  
  $sql = "select * from $t where `id`='$get_id' limit 1";
  $rs = $db->get_row($sql);
  
  echo json_encode($rs);
  exit;
}

function initContractsData() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_contracts`";
  $html["m"]["contracts"]["last_code"] = isset($_COOKIE["contract_last_code"]) ? $_COOKIE["contract_last_code"] : "";
  $html["m"]["contracts"]["last_feilv"] = isset($_COOKIE["contract_last_feilv"]) ? $_COOKIE["contract_last_feilv"] : "";
  $html["m"]["contracts"]["codelist"] = array();
  $html["m"]["contracts"]['list'] = array();
  
  $sql = "select `code`, `feilv` from (select * from {$t} order by `update` desc) as a where `customerid`='{$get_id}' group by `code`";
  $rs = $db->get_results($sql);
  if ($rs) {
    foreach ($rs as $item) {
      if ($item->code == "") continue;
      $obj = array();
      $obj["code"] = $item->code;
      $obj["feilv"] = $item->feilv;
      $html["m"]["contracts"]["codelist"][] = $obj;
    }
  }
  
  $sql = "select * from $t where `customerid`='$get_id' order by `update`";
  $rs = $db->get_results($sql);
  if ($rs == null) $rs = array();
  
  foreach ($rs as $item) {
    $obj = array();
    $obj["id"] = $item->id;
    $obj["code"] = $item->code;
    $obj["feilv"] = $item->feilv;
    $obj["zllxing"] = $item->zllxing;
    $obj["wjian"] = $item->wjian;
    $obj["title"] = $item->title;
    $obj["update"] = date("Y-m-d", strtotime($item->update));
    
    $html["m"]["contracts"]['list'][] = $obj;
  }

  $html["json"]["contracts"] = json_encode($html["m"]["contracts"]);
  //print_r($html["json"]["contracts"]);exit;
  // 工作信息 end
}
?>