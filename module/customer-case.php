<?
function add_case() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_case`";
  
  chk_customer_detail_auth();

  $ipt["jllxing"] = get_post("ipt-jllxing", 0);
  $ipt["ajsjian"] = get_post("ipt-ajsjian")=="" ? "" : get_post("ipt-ajsjian");
  $ipt["sfkwcha"] = get_post("ipt-sfkwcha", 0);
  
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
    exit("<script>alert('司法案件保存成功！');history.go(-1);</script>");
  } else {
    $msg .= gen_alert("司法案件信息保存失败！");
  }
}

function save_case() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_case`";
  
  chk_customer_detail_auth();

  $ipt["jllxing"] = get_post("ipt-jllxing", 0);
  $ipt["ajsjian"] = get_post("ipt-ajsjian")=="" ? "" : get_post("ipt-ajsjian");
  $ipt["sfkwcha"] = get_post("ipt-sfkwcha", 0);
  
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
    exit("<script>alert('司法案件保存成功！');history.go(-1);</script>");
  } else {
    $msg .= gen_alert("司法案件信息保存失败！");
  }
}
// save_case() end

function json_case() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_case`";
  
  $sql = "select * from $t where `id`='$get_id' limit 1";
  $rs = $db->get_row($sql);
  
  echo json_encode($rs);
  exit;
}

function initCaseData() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_case`";
  $html["m"]["case"] = array();
  
  $sql = "select * from $t where `customerid`='$get_id' order by `update` desc";
  $rs = $db->get_results($sql);
  if ($rs == null) $rs = array();
  
  foreach ($rs as $item) {
    $obj = array();
    $obj["id"] = $item->id;
    $obj["jllxing"] = $item->jllxing;
    $obj["ajsjian"] = $item->ajsjian=="0000-00-00" ? "" : date("Y-m-d", strtotime($item->ajsjian));
    $obj["sfkwcha"] = $item->sfkwcha;
    $obj["update"] = date("Y-m-d", strtotime($item->update));
    
    $html["m"]["case"][] = $obj;
  }

  $html["json"]["case"] = json_encode($html["m"]["case"]);
  //print_r($html["json"]["income"]);exit;
}
?>