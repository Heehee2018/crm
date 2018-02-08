<?
function add_job1() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_job`";
  
  chk_customer_detail_auth();
  
  //自雇
  $ipt["jobkind"] = 1;
  $ipt["yyzzhao"] = get_post("ipt-yyzzhao");
  $ipt["gsming"] = get_post("ipt-gsming");
  $ipt["zcdate"] = get_post("ipt-zcdate");
  $ipt["gsdzsheng"] = get_post("ipt-gsdzsheng");
  $ipt["gsdzshi"] = get_post("ipt-gsdzshi");
  $ipt["gsdzqu"] = get_post("ipt-gsdzqu");
  $ipt["gsdzhi"] = get_post("ipt-gsdzhi");
  $ipt["gslxing"] = get_post("ipt-gslxing");
  $ipt["gslxings"] = get_post("ipt-gslxings");
  $ipt["fren"] = get_post("ipt-fren");
  $ipt["yfrgxi"] = get_post("ipt-yfrgxi");
  $ipt["yfrgxid"] = get_post("ipt-yfrgxid");
  $ipt["zgbli"] = get_post("ipt-zgbli");
  $ipt["zgblid"] = get_post("ipt-zgblid");
  $ipt["gflxing"] = get_post("ipt-gflxing");
  $ipt["gwei"] = "";
  $ipt["gwmcheng"] = "";
  $ipt["ldgxi"] = "";
  $ipt["lwpqgsszdsheng"] = "";
  $ipt["lwpqgsszdshi"] = "";
  $ipt["lwpqgsming"] = "";
  $ipt["rzdate"] = "";
  
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
    exit("<script>alert('工作信息添加成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('工作信息添加失败！');history.go(-1);</script>");
  }
}

function add_job2() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_job`";
  
  chk_customer_detail_auth();
  
  //受薪
  $ipt["jobkind"] = 2;
  $ipt["yyzzhao"] = 0;
  $ipt["gsming"] = get_post("ipt-gsming");
  $ipt["zcdate"] = "";
  $ipt["gsdzsheng"] = get_post("ipt-gsdzsheng");
  $ipt["gsdzshi"] = get_post("ipt-gsdzshi");
  $ipt["gsdzqu"] = get_post("ipt-gsdzqu");
  $ipt["gsdzhi"] = get_post("ipt-gsdzhi");
  $ipt["gslxing"] = get_post("ipt-gslxing");
  $ipt["gslxings"] = get_post("ipt-gslxings");
  $ipt["fren"] = "";
  $ipt["yfrgxi"] = "";
  $ipt["yfrgxid"] = "";
  $ipt["zgbli"] = "";
  $ipt["zgblid"] = "";
  $ipt["gflxing"] = "";
  $ipt["gwei"] = get_post("ipt-gwei");
  $ipt["gwmcheng"] = get_post("ipt-gwmcheng");
  $ipt["ldgxi"] = get_post("ipt-ldgxi");
  $ipt["lwpqgsszdsheng"] = get_post("ipt-lwpqgsszdsheng");
  $ipt["lwpqgsszdshi"] = get_post("ipt-lwpqgsszdshi");
  $ipt["lwpqgsming"] = get_post("ipt-lwpqgsming");
  $ipt["rzdate"] = get_post("ipt-rzdate");
  
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
    exit("<script>alert('工作信息添加成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('工作信息添加失败！');history.go(-1);</script>");
  }
}

function save_job1() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  chk_customer_detail_auth();

  $t = '`customer_module_job`';
  
  //自雇
  $ipt["jobkind"] = 1;
  $ipt["yyzzhao"] = get_post("ipt-yyzzhao");
  $ipt["gsming"] = get_post("ipt-gsming");
  $ipt["zcdate"] = get_post("ipt-zcdate");
  $ipt["gsdzsheng"] = get_post("ipt-gsdzsheng");
  $ipt["gsdzshi"] = get_post("ipt-gsdzshi");
  $ipt["gsdzqu"] = get_post("ipt-gsdzqu");
  $ipt["gsdzhi"] = get_post("ipt-gsdzhi");
  $ipt["gslxing"] = get_post("ipt-gslxing");
  $ipt["gslxings"] = get_post("ipt-gslxings");
  $ipt["fren"] = get_post("ipt-fren");
  $ipt["yfrgxi"] = get_post("ipt-yfrgxi");
  $ipt["yfrgxid"] = get_post("ipt-yfrgxid");
  $ipt["zgbli"] = get_post("ipt-zgbli");
  $ipt["zgblid"] = get_post("ipt-zgblid");
  $ipt["gflxing"] = get_post("ipt-gflxing");
  $ipt["gwei"] = "";
  $ipt["gwmcheng"] = "";
  $ipt["ldgxi"] = "";
  $ipt["lwpqgsszdsheng"] = "";
  $ipt["lwpqgsszdshi"] = "";
  $ipt["lwpqgsming"] = "";
  $ipt["rzdate"] = "";
  
  $ipt_id = get_post("ipt-id", 0);
  $sql = "update $t set ";
  foreach (array_keys($ipt) as $item) {
    $sql .= "`$item` = '" .$ipt["$item"]. "', ";
  }
  $sql .= "`userid` = '" .$userid. "', ";
  $sql .= "`update` = '" .date("Y-m-d H:i:s"). "' ";
  $sql .= "where `id`='$ipt_id' and `customerid`='$get_id'";
  
  if ($db->query($sql)) {
    exit("<script>alert('工作信息保存成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('工作信息保存失败！');history.go(-1);</script>");
  }
}
// save_job1() end

function save_job2() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  chk_customer_detail_auth();

  $t = '`customer_module_job`';
  
  //受薪
  $ipt["jobkind"] = 2;
  $ipt["yyzzhao"] = 0;
  $ipt["gsming"] = get_post("ipt-gsming");
  $ipt["zcdate"] = "";
  $ipt["gsdzsheng"] = get_post("ipt-gsdzsheng");
  $ipt["gsdzshi"] = get_post("ipt-gsdzshi");
  $ipt["gsdzqu"] = get_post("ipt-gsdzqu");
  $ipt["gsdzhi"] = get_post("ipt-gsdzhi");
  $ipt["gslxing"] = get_post("ipt-gslxing");
  $ipt["gslxings"] = get_post("ipt-gslxings");
  $ipt["fren"] = "";
  $ipt["yfrgxi"] = "";
  $ipt["yfrgxid"] = "";
  $ipt["zgbli"] = "";
  $ipt["zgblid"] = "";
  $ipt["gflxing"] = "";
  $ipt["gwei"] = get_post("ipt-gwei");
  $ipt["gwmcheng"] = get_post("ipt-gwmcheng");
  $ipt["ldgxi"] = get_post("ipt-ldgxi");
  $ipt["lwpqgsszdsheng"] = get_post("ipt-lwpqgsszdsheng");
  $ipt["lwpqgsszdshi"] = get_post("ipt-lwpqgsszdshi");
  $ipt["lwpqgsming"] = get_post("ipt-lwpqgsming");
  $ipt["rzdate"] = get_post("ipt-rzdate");
  
  $ipt_id = get_post("ipt-id", 0);
  $sql = "update $t set ";
  foreach (array_keys($ipt) as $item) {
    $sql .= "`$item` = '" .$ipt["$item"]. "', ";
  }
  $sql .= "`userid` = '" .$userid. "', ";
  $sql .= "`update` = '" .date("Y-m-d H:i:s"). "' ";
  $sql .= "where `id`='$ipt_id' and `customerid`='$get_id'";
  
  if ($db->query($sql)) {
    exit("<script>alert('工作信息保存成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('工作信息保存失败！');history.go(-1);</script>");
  }
}
// save_job2() end

function json_job() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_job`";
  
  $sql = "select * from $t where `id`='$get_id' limit 1";
  $rs = $db->get_row($sql);
  
  echo json_encode($rs);
  exit;
}

function initJobData() {
  global $db, $html, $input, $get_id;
  // 工作信息
  $t = "`customer_module_job`";
  $html["m"]["job"] = array();
  
  $sql = "select * from $t where `customerid`='$get_id' order by `update` desc";
  $rs = $db->get_results($sql);
  if ($rs == null) $rs = array();
  
  foreach ($rs as $item) {
    $obj = array();
    $obj["id"] = $item->id;
    $obj["jobkind"] = $item->jobkind;
    $obj["yyzzhao"] = $item->yyzzhao;
    $obj["gsming"] = $item->gsming;
    $obj["zcdate"] = $item->zcdate=="0000-00-00" ? "" : $item->zcdate;
    $obj["gsdzsheng"] = $item->gsdzsheng;
    $obj["gsdzshi"] = $item->gsdzshi;
    $obj["gsdzqu"] = $item->gsdzqu;
    $obj["gsdzhi"] = $item->gsdzhi;
    $obj["gslxing"] = $item->gslxing;
    $obj["gslxings"] = $item->gslxings;
    $obj["fren"] = $item->fren;
    $obj["yfrgxi"] = $item->yfrgxi;
    $obj["yfrgxid"] = $item->yfrgxid;
    $obj["zgbli"] = $item->zgbli;
    $obj["zgblid"] = $item->zgblid;
    $obj["gflxing"] = $item->gflxing;
    $obj["gwei"] = $item->gwei;
    $obj["gwmcheng"] = $item->gwmcheng;
    $obj["ldgxi"] = $item->ldgxi;
    $obj["lwpqgsszdsheng"] = $item->lwpqgsszdsheng;
    $obj["lwpqgsszdshi"] = $item->lwpqgsszdshi;
    $obj["lwpqgsming"] = $item->lwpqgsming;
    $obj["rzdate"] = $item->rzdate=="0000-00-00" ? "" : $item->rzdate;
    $obj["update"] = date("Y-m-d", strtotime($item->update));
    
    $html["m"]["job"][] = $obj;
  }
  
  $html["json"]["job"] = json_encode($html["m"]["job"]);
  //print_r($html["json"]["job"]);exit;
  // 工作信息 end
}
?>