<?
function save_need() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  chk_customer_detail_auth();

  $t = "`customer_module_need`";
  
  $ipt["fkdate"] = get_post("ipt-fkdate");
  $ipt["dkmoney"] = get_post("ipt-dkmoney");
  $ipt["hkqxian"] = get_post("ipt-hkqxian");
  $ipt["dklxing"] = get_post("ipt-dklxing");
  $ipt["hkfshi"] = get_post("ipt-hkfshi");
  $ipt["jpxing"] = get_post("ipt-jpxing");
  
  $ipt_id = get_post("ipt-id", 0);
  $sql = "update $t set ";
  foreach (array_keys($ipt) as $item) {
    $sql .= "`$item` = '" .$ipt["$item"]. "', ";
  }
  $sql .= "`userid` = '" .$userid. "', ";
  $sql .= "`update` = '" .date("Y-m-d H:i:s"). "' ";
  $sql .= "where `id`='$ipt_id' and `customerid`='$get_id'";
  
  if ($db->query($sql)) {
    exit("<script>alert('客户需求保存成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('客户需求保存失败！');history.go(-1);</script>");
  }
}
// save_need() end

function add_need() {
  global $db, $get_id, $jobtitleid, $userid, $msg, $php_path;

  $t = "`customer_module_need`";
  
  chk_customer_detail_auth();

  $ipt["fkdate"] = get_post("ipt-fkdate");
  $ipt["dkmoney"] = get_post("ipt-dkmoney");
  $ipt["hkqxian"] = get_post("ipt-hkqxian");
  $ipt["dklxing"] = get_post("ipt-dklxing");
  $ipt["hkfshi"] = get_post("ipt-hkfshi");
  $ipt["jpxing"] = get_post("ipt-jpxing");
  
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
    exit("<script>alert('客户需求添加成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('客户需求添加失败！');history.go(-1);</script>");
  }
}
// add_need() end

function json_need() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_need`";
  
  $sql = "select * from $t where `id`='$get_id' limit 1";
  $rs = $db->get_row($sql);
  
  echo json_encode($rs);
  exit;
}

function initNeedData() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_need`";
  $html["m"]["need"] = array();
  
  $sql = "select * from $t where `customerid`='$get_id' order by `update` desc";
  $rs = $db->get_results($sql);
  if ($rs == null) $rs = array();
  
  foreach ($rs as $item) {
    $obj = array();
    $obj["fkdate"] = $item->fkdate=="0000-00-00" ? "" : $item->fkdate;
    $obj["id"] = $item->id;
    $obj["dkmoney"] = $item->dkmoney;
    $obj["hkqxian"] = $item->hkqxian;
    $obj["dklxing"] = $item->dklxing;
    $obj["hkfshi"] = $item->hkfshi;
    $obj["jpxing"] = $item->jpxing;
    $obj["update"] = date("Y-m-d", strtotime($item->update));
    
    $html["m"]["need"][] = $obj;
  }

  $html["json"]["need"] = json_encode($html["m"]["need"]);
  //print_r($html["json"]["need"]);exit;
  // 工作信息 end
}
?>