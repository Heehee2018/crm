<?
function add_policy() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_policy`";
  
  chk_customer_detail_auth();

  $ipt["bxgsi"] = get_post("ipt-bxgsi", 0);
  $ipt["bdlxing"] = get_post("ipt-bdlxing", 0);
  $ipt["bdsxri"] = get_post("ipt-bdsxri")=="" ? "" : get_post("ipt-bdsxri") . "-1";
  $ipt["bdsxnxian"] = get_post("ipt-bdsxnxian", 0);
  $ipt["jffshi"] = get_post("ipt-jffshi", 0);
  $ipt["jffsyuan"] = get_post("ipt-jffsyuan", 0);
  $ipt["yjfcshu"] = get_post("ipt-yjfcshu", 0);
  $ipt["xjjzhi"] = get_post("ipt-xjjzhi", 0);
  $ipt["fxjl_fxsqi"] = get_post("ipt-fxjl_fxsqi");
  $ipt["fxjl_yjnrqi"] = get_post("ipt-fxjl_yjnrqi");
  
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
    exit("<script>alert('保单信息添加成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('保单信息添加失败！');history.go(-1);</script>");
  }
}

function save_policy() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_policy`";
  
  chk_customer_detail_auth();

  $ipt["bxgsi"] = get_post("ipt-bxgsi", 0);
  $ipt["bdlxing"] = get_post("ipt-bdlxing", 0);
  $ipt["bdsxri"] = get_post("ipt-bdsxri")=="" ? "" : get_post("ipt-bdsxri") . "-1";
  $ipt["bdsxnxian"] = get_post("ipt-bdsxnxian", 0);
  $ipt["jffshi"] = get_post("ipt-jffshi", 0);
  $ipt["jffsyuan"] = get_post("ipt-jffsyuan", 0);
  $ipt["yjfcshu"] = get_post("ipt-yjfcshu", 0);
  $ipt["xjjzhi"] = get_post("ipt-xjjzhi", 0);
  $ipt["fxjl_fxsqi"] = get_post("ipt-fxjl_fxsqi");
  $ipt["fxjl_yjnrqi"] = get_post("ipt-fxjl_yjnrqi");
  
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
    exit("<script>alert('保单信息保存成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('保单信息保存失败！');history.go(-1);</script>");
  }
}
// save_policy() end

function json_policy() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_policy`";
  
  $sql = "select * from $t where `id`='$get_id' limit 1";
  $rs = $db->get_row($sql);
  
  echo json_encode($rs);
  exit;
}

function initPolicyData() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_policy`";
  $html["m"]["policy"] = array();
  
  $sql = "select * from $t where `customerid`='$get_id' order by `update` desc";
  $rs = $db->get_results($sql);
  if ($rs == null) $rs = array();
  
  foreach ($rs as $item) {
    $obj = array();
    $obj["id"] = $item->id;
    $obj["bxgsi"] = $item->bxgsi;
    $obj["bdlxing"] = $item->bdlxing;
    $obj["bdsxri"] = $item->bdsxri=="0000-00-00" ? "" : date("Y-m", strtotime($item->bdsxri));
    $obj["bdsxnxian"] = $item->bdsxnxian;
    $obj["jffshi"] = $item->jffshi;
    $obj["jffsyuan"] = $item->jffsyuan;
    $obj["yjfcshu"] = $item->yjfcshu;
    $obj["xjjzhi"] = $item->xjjzhi;
    $obj["fxjl_fxsqi"] = $item->fxjl_fxsqi=="0000-00-00" ? "" : date("Y-m-d", strtotime($item->fxjl_fxsqi));
    $obj["fxjl_yjnrqi"] = $item->fxjl_yjnrqi=="0000-00-00" ? "" : date("Y-m-d", strtotime($item->fxjl_yjnrqi));
    $obj["update"] = date("Y-m-d", strtotime($item->update));
    
    $html["m"]["policy"][] = $obj;
  }

  $html["json"]["policy"] = json_encode($html["m"]["policy"]);
  //print_r($html["json"]["income"]);exit;
  // 工作信息 end
}
?>