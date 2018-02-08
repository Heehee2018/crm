<?
function add_park() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_park`";
  
  chk_customer_detail_auth();

  $ipt["gmrqi"] = get_post("ipt-gmrqi")=="" ? "" : get_post("ipt-gmrqi") . "-1";
  $ipt["cwjzmji"] = get_post("ipt-cwjzmji");
  $ipt["cwsymji"] = get_post("ipt-cwsymji");
  $ipt["gmjge"] = get_post("ipt-gmjge");
  $ipt["xjge"] = get_post("ipt-xjge");
  $ipt["cwdzsheng"] = get_post("ipt-cwdzsheng");
  $ipt["cwdzshi"] = get_post("ipt-cwdzshi");
  $ipt["cwdzqu"] = get_post("ipt-cwdzqu");
  $ipt["cwdzhi"] = get_post("ipt-cwdzhi");
  $ipt["cwzheng"] = get_post("ipt-cwzheng");
  $ipt["cwdkuan"] = get_post("ipt-cwdkuan");
  
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
    exit("<script>alert('车位信息添加成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('车位信息添加失败！');history.go(-1);</script>");
  }
}

function save_park() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_park`";
  
  chk_customer_detail_auth();

  $ipt["gmrqi"] = get_post("ipt-gmrqi")=="" ? "" : get_post("ipt-gmrqi") . "-1";
  $ipt["cwjzmji"] = get_post("ipt-cwjzmji");
  $ipt["cwsymji"] = get_post("ipt-cwsymji");
  $ipt["gmjge"] = get_post("ipt-gmjge");
  $ipt["xjge"] = get_post("ipt-xjge");
  $ipt["cwdzsheng"] = get_post("ipt-cwdzsheng");
  $ipt["cwdzshi"] = get_post("ipt-cwdzshi");
  $ipt["cwdzqu"] = get_post("ipt-cwdzqu");
  $ipt["cwdzhi"] = get_post("ipt-cwdzhi");
  $ipt["cwzheng"] = get_post("ipt-cwzheng");
  $ipt["cwdkuan"] = get_post("ipt-cwdkuan");
  
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
    exit("<script>alert('车位信息保存成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('车位信息保存失败！');history.go(-1);</script>");
  }
}
// save_park() end

function json_park() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_park`";
  
  $sql = "select * from $t where `id`='$get_id' limit 1";
  $rs = $db->get_row($sql);
  
  echo json_encode($rs);
  exit;
}

function initParkData() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_park`";
  $html["m"]["park"] = array();
  
  $sql = "select * from $t where `customerid`='$get_id' order by `update` desc";
  $rs = $db->get_results($sql);
  if ($rs == null) $rs = array();
  
  foreach ($rs as $item) {
    $obj = array();
  
    $obj["id"] = $item->id;
    $obj["gmrqi"] = $item->gmrqi=="0000-00-00" ? "" : date("Y-m", strtotime($item->gmrqi));
    $obj["cwjzmji"] = $item->cwjzmji;
    $obj["cwsymji"] = $item->cwsymji;
    $obj["gmjge"] = $item->gmjge;
    $obj["xjge"] = $item->xjge;
    $obj["cwdzsheng"] = $item->cwdzsheng;
    $obj["cwdzshi"] = $item->cwdzshi;
    $obj["cwdzqu"] = $item->cwdzqu;
    $obj["cwdzhi"] = $item->cwdzhi;
    $obj["cwzheng"] = $item->cwzheng;
    $obj["cwdkuan"] = $item->cwdkuan;
    $obj["update"] = date("Y-m-d", strtotime($item->update));
    
    $html["m"]["park"][] = $obj;
  }
  
  $html["json"]["park"] = json_encode($html["m"]["park"]);
  //print_r($html["json"]["income"]);exit;
  // 工作信息 end
}
?>