<?
function add_income1() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_income1`";
  
  chk_customer_detail_auth();

  $ipt["gz_gzffxshi"] = get_post("ipt-gz_gzffxshi");
  $ipt["gz_gzmoney"] = get_post("ipt-gz_gzmoney");
  
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

function save_income1() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  chk_customer_detail_auth();

  $ipt_id = get_post("ipt-id", 0);
  $ipt["gz_gzffxshi"] = get_post("ipt-gz_gzffxshi");
  $ipt["gz_gzmoney"] = get_post("ipt-gz_gzmoney");
  
  $sql = "update `customer_module_income1` set ";
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
// save_income1() end

function add_income2() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_income2`";
  
  chk_customer_detail_auth();

  $ipt["sb_sbjnztai"] = get_post("ipt-sb_sbjnztai");
  $ipt["sb_sbxxyfen"] = get_post("ipt-sb_sbxxyfen")=="" ? "" : get_post("ipt-sb_sbxxyfen")."-1";
  $ipt["sb_gs_yljs"] = get_post("ipt-sb_gs_yljs");
  $ipt["sb_gs_sbjnbli"] = get_post("ipt-sb_gs_sbjnbli");
  $ipt["sb_gs_sbjnmoney"] = get_post("ipt-sb_gs_sbjnmoney");
  $ipt["sb_gr_yljs"] = get_post("ipt-sb_gr_yljs");
  $ipt["sb_gr_sbjnbli"] = get_post("ipt-sb_gr_sbjnbli");
  $ipt["sb_gr_sbjnmoney"] = get_post("ipt-sb_gr_sbjnmoney");
  $ipt["sb_sbjndsheng"] = get_post("ipt-sb_sbjndsheng");
  $ipt["sb_sbjndshi"] = get_post("ipt-sb_sbjndshi");
  $ipt["sb_sbjndwei"] = get_post("ipt-sb_sbjndwei");
  $ipt["sb_dsfgsming"] = get_post("ipt-sb_dsfgsming");
  
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
    exit("<script>alert('社会保险信息添加成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('社会保险信息添加失败！');history.go(-1);</script>");
  }
}

function save_income2() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  chk_customer_detail_auth();

  $ipt_id = get_post("ipt-id", 0);
  $ipt["sb_sbjnztai"] = get_post("ipt-sb_sbjnztai");
  $ipt["sb_sbxxyfen"] = get_post("ipt-sb_sbxxyfen")=="" ? "" : get_post("ipt-sb_sbxxyfen")."-1";
  $ipt["sb_gs_yljs"] = get_post("ipt-sb_gs_yljs");
  $ipt["sb_gs_sbjnbli"] = get_post("ipt-sb_gs_sbjnbli");
  $ipt["sb_gs_sbjnmoney"] = get_post("ipt-sb_gs_sbjnmoney");
  $ipt["sb_gr_yljs"] = get_post("ipt-sb_gr_yljs");
  $ipt["sb_gr_sbjnbli"] = get_post("ipt-sb_gr_sbjnbli");
  $ipt["sb_gr_sbjnmoney"] = get_post("ipt-sb_gr_sbjnmoney");
  $ipt["sb_sbjndsheng"] = get_post("ipt-sb_sbjndsheng");
  $ipt["sb_sbjndshi"] = get_post("ipt-sb_sbjndshi");
  $ipt["sb_sbjndwei"] = get_post("ipt-sb_sbjndwei");
  $ipt["sb_dsfgsming"] = get_post("ipt-sb_dsfgsming");
  
  $sql = "update `customer_module_income2` set ";
  foreach (array_keys($ipt) as $item) {
    $sql .= "`$item` = '" .$ipt["$item"]. "', ";
  }
  $sql .= "`userid` = '" .$userid. "', ";
  $sql .= "`update` = '" .date("Y-m-d H:i:s"). "' ";
  $sql .= "where `id`='$ipt_id' and `customerid`='$get_id'";
  //echo $sql;exit;
  
  if ($db->query($sql)) {
    exit("<script>alert('社会保险信息保存成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('社会保险信息保存失败！');history.go(-1);</script>");
  }
}
// save_income2() end

function add_income3() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_income3`";
  
  chk_customer_detail_auth();

  $ipt["gjj_gjjjnztai"] = get_post("ipt-gjj_gjjjnztai");
  $ipt["gjj_gjjxxyfen"] = get_post("ipt-gjj_gjjxxyfen")=="" ? "" : get_post("ipt-gjj_gjjxxyfen")."-1";
  $ipt["gjj_gs_gjjjs"] = get_post("ipt-gjj_gs_gjjjs");
  $ipt["gjj_gs_gjjjnbli"] = get_post("ipt-gjj_gs_gjjjnbli");
  $ipt["gjj_gs_gjjjnmoney"] = get_post("ipt-gjj_gs_gjjjnmoney");
  $ipt["gjj_gr_gjjjs"] = get_post("ipt-gjj_gr_gjjjs");
  $ipt["gjj_gr_gjjjnbli"] = get_post("ipt-gjj_gr_gjjjnbli");
  $ipt["gjj_gr_gjjjnmoney"] = get_post("ipt-gjj_gr_gjjjnmoney");
  $ipt["gjj_gjjjndsheng"] = get_post("ipt-gjj_gjjjndsheng");
  $ipt["gjj_gjjjndshi"] = get_post("ipt-gjj_gjjjndshi");
  $ipt["gjj_gjjjndwei"] = get_post("ipt-gjj_gjjjndwei");
  $ipt["gjj_dsfgsming"] = get_post("ipt-gjj_dsfgsming");
  
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
    exit("<script>alert('公积金信息添加成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('公积金信息添加失败！');history.go(-1);</script>");
  }
}

function save_income3() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  chk_customer_detail_auth();

  $ipt_id = get_post("ipt-id", 0);
  $ipt["gjj_gjjjnztai"] = get_post("ipt-gjj_gjjjnztai");
  $ipt["gjj_gjjxxyfen"] = get_post("ipt-gjj_gjjxxyfen")=="" ? "" : get_post("ipt-gjj_gjjxxyfen")."-1";
  $ipt["gjj_gs_gjjjs"] = get_post("ipt-gjj_gs_gjjjs");
  $ipt["gjj_gs_gjjjnbli"] = get_post("ipt-gjj_gs_gjjjnbli");
  $ipt["gjj_gs_gjjjnmoney"] = get_post("ipt-gjj_gs_gjjjnmoney");
  $ipt["gjj_gr_gjjjs"] = get_post("ipt-gjj_gr_gjjjs");
  $ipt["gjj_gr_gjjjnbli"] = get_post("ipt-gjj_gr_gjjjnbli");
  $ipt["gjj_gr_gjjjnmoney"] = get_post("ipt-gjj_gr_gjjjnmoney");
  $ipt["gjj_gjjjndsheng"] = get_post("ipt-gjj_gjjjndsheng");
  $ipt["gjj_gjjjndshi"] = get_post("ipt-gjj_gjjjndshi");
  $ipt["gjj_gjjjndwei"] = get_post("ipt-gjj_gjjjndwei");
  $ipt["gjj_dsfgsming"] = get_post("ipt-gjj_dsfgsming");
  
  $sql = "update `customer_module_income3` set ";
  foreach (array_keys($ipt) as $item) {
    $sql .= "`$item` = '" .$ipt["$item"]. "', ";
  }
  $sql .= "`userid` = '" .$userid. "', ";
  $sql .= "`update` = '" .date("Y-m-d H:i:s"). "' ";
  $sql .= "where `id`='$ipt_id' and `customerid`='$get_id'";
  //echo $sql;exit;
  
  if ($db->query($sql)) {
    exit("<script>alert('公积金信息保存成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('公积金信息保存失败！');history.go(-1);</script>");
  }
}
// save_income3() end

function add_income4() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_income4`";
  
  chk_customer_detail_auth();

  $ipt["sds_jnztai"] = get_post("ipt-sds_jnztai");
  $ipt["sds_xxyfen"] = get_post("ipt-sds_xxyfen")=="" ? "" : get_post("ipt-sds_xxyfen")."-1";
  $ipt["sds_sqgzi"] = get_post("ipt-sds_sqgzi");
  $ipt["sds_gsmoney"] = get_post("ipt-sds_gsmoney");
  $ipt["sds_jndsheng"] = get_post("ipt-sds_jndsheng");
  $ipt["sds_jndshi"] = get_post("ipt-sds_jndshi");
  $ipt["sds_jndwei"] = get_post("ipt-sds_jndwei");
  $ipt["sds_dsfgsming"] = get_post("ipt-sds_dsfgsming");
  
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
    exit("<script>alert('个人所得税信息添加成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('个人所得税信息添加失败！');history.go(-1);</script>");
  }
}

function save_income4() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  chk_customer_detail_auth();

  $ipt_id = get_post("ipt-id", 0);
  $ipt["sds_jnztai"] = get_post("ipt-sds_jnztai");
  $ipt["sds_xxyfen"] = get_post("ipt-sds_xxyfen")=="" ? "" : get_post("ipt-sds_xxyfen")."-1";
  $ipt["sds_sqgzi"] = get_post("ipt-sds_sqgzi");
  $ipt["sds_gsmoney"] = get_post("ipt-sds_gsmoney");
  $ipt["sds_jndsheng"] = get_post("ipt-sds_jndsheng");
  $ipt["sds_jndshi"] = get_post("ipt-sds_jndshi");
  $ipt["sds_jndwei"] = get_post("ipt-sds_jndwei");
  $ipt["sds_dsfgsming"] = get_post("ipt-sds_dsfgsming");
  
  $sql = "update `customer_module_income4` set ";
  foreach (array_keys($ipt) as $item) {
    $sql .= "`$item` = '" .$ipt["$item"]. "', ";
  }
  $sql .= "`userid` = '" .$userid. "', ";
  $sql .= "`update` = '" .date("Y-m-d H:i:s"). "' ";
  $sql .= "where `id`='$ipt_id' and `customerid`='$get_id'";
  //echo $sql;exit;
  
  if ($db->query($sql)) {
    exit("<script>alert('个人所得税信息保存成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('个人所得税信息保存失败！');history.go(-1);</script>");
  }
}
// save_income4() end

function add_income5() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_income5`";
  
  chk_customer_detail_auth();

  $ipt["ls_gz_yjlshui"] = get_post("ipt-ls_gz_yjlshui");
  $ipt["ls_gz_jxdate1"] = get_post("ipt-ls_gz_jxdate1");
  $ipt["ls_gz_jxdate2"] = get_post("ipt-ls_gz_jxdate2");
  $ipt["ls_gz_jxmoney1"] = get_post("ipt-ls_gz_jxmoney1");
  $ipt["ls_gz_jxmoney2"] = get_post("ipt-ls_gz_jxmoney2");
  $ipt["ls_kp_yjlshui"] = get_post("ipt-ls_kp_yjlshui");
  $ipt["ls_kp_jxdate1"] = get_post("ipt-ls_kp_jxdate1");
  $ipt["ls_kp_jxdate2"] = get_post("ipt-ls_kp_jxdate2");
  $ipt["ls_kp_jxmoney1"] = get_post("ipt-ls_kp_jxmoney1");
  $ipt["ls_kp_jxmoney2"] = get_post("ipt-ls_kp_jxmoney2");
  $ipt["ls_sz_yjlshui"] = get_post("ipt-ls_sz_yjlshui");
  $ipt["ls_sz_jxdate1"] = get_post("ipt-ls_sz_jxdate1");
  $ipt["ls_sz_jxdate2"] = get_post("ipt-ls_sz_jxdate2");
  $ipt["ls_sz_jxmoney1"] = get_post("ipt-ls_sz_jxmoney1");
  $ipt["ls_sz_jxmoney2"] = get_post("ipt-ls_sz_jxmoney2");
  $ipt["ls_pos_yjlshui"] = get_post("ipt-ls_pos_yjlshui");
  
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
    exit("<script>alert('流水信息添加成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('流水信息保存失败！');history.go(-1);</script>");
  }
}

function save_income5() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  chk_customer_detail_auth();

  $ipt_id = get_post("ipt-id", 0);
  $ipt["ls_gz_yjlshui"] = get_post("ipt-ls_gz_yjlshui");
  $ipt["ls_gz_jxdate1"] = get_post("ipt-ls_gz_jxdate1");
  $ipt["ls_gz_jxdate2"] = get_post("ipt-ls_gz_jxdate2");
  $ipt["ls_gz_jxmoney1"] = get_post("ipt-ls_gz_jxmoney1");
  $ipt["ls_gz_jxmoney2"] = get_post("ipt-ls_gz_jxmoney2");
  $ipt["ls_kp_yjlshui"] = get_post("ipt-ls_kp_yjlshui");
  $ipt["ls_kp_jxdate1"] = get_post("ipt-ls_kp_jxdate1");
  $ipt["ls_kp_jxdate2"] = get_post("ipt-ls_kp_jxdate2");
  $ipt["ls_kp_jxmoney1"] = get_post("ipt-ls_kp_jxmoney1");
  $ipt["ls_kp_jxmoney2"] = get_post("ipt-ls_kp_jxmoney2");
  $ipt["ls_sz_yjlshui"] = get_post("ipt-ls_sz_yjlshui");
  $ipt["ls_sz_jxdate1"] = get_post("ipt-ls_sz_jxdate1");
  $ipt["ls_sz_jxdate2"] = get_post("ipt-ls_sz_jxdate2");
  $ipt["ls_sz_jxmoney1"] = get_post("ipt-ls_sz_jxmoney1");
  $ipt["ls_sz_jxmoney2"] = get_post("ipt-ls_sz_jxmoney2");
  $ipt["ls_pos_yjlshui"] = get_post("ipt-ls_pos_yjlshui");
  
  $sql = "update `customer_module_income5` set ";
  foreach (array_keys($ipt) as $item) {
    $sql .= "`$item` = '" .$ipt["$item"]. "', ";
  }
  $sql .= "`userid` = '" .$userid. "', ";
  $sql .= "`update` = '" .date("Y-m-d H:i:s"). "' ";
  $sql .= "where `id`='$ipt_id' and `customerid`='$get_id'";
  //echo $sql;exit;
  
  if ($db->query($sql)) {
    exit("<script>alert('流水信息保存成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('流水信息保存失败！');history.go(-1);</script>");
  }
}
// save_income5() end

function json_income1() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_income1`";
  
  $sql = "select * from $t where `id`='$get_id' limit 1";
  $rs = $db->get_row($sql);
  
  echo json_encode($rs);
  exit;
}

function json_income2() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_income2`";
  
  $sql = "select * from $t where `id`='$get_id' limit 1";
  $rs = $db->get_row($sql);
  
  echo json_encode($rs);
  exit;
}

function json_income3() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_income3`";
  
  $sql = "select * from $t where `id`='$get_id' limit 1";
  $rs = $db->get_row($sql);
  
  echo json_encode($rs);
  exit;
}

function json_income4() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_income4`";
  
  $sql = "select * from $t where `id`='$get_id' limit 1";
  $rs = $db->get_row($sql);
  
  echo json_encode($rs);
  exit;
}

function json_income5() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_income5`";
  
  $sql = "select * from $t where `id`='$get_id' limit 1";
  $rs = $db->get_row($sql);
  
  echo json_encode($rs);
  exit;
}

function initIncomeData() {
  global $db, $html, $input, $get_id;
  // 工作信息
  $t = "`customer_module_income1`";
  $html["m"]["income1"] = array();
  $sql = "select * from $t where `customerid`='$get_id' order by `update` desc";
  $rs = $db->get_results($sql);
  if ($rs == null) $rs = array();
  foreach ($rs as $item) {
    $obj = array();
    $obj["id"] = $item->id;
    $obj["gz_gzffxshi"] = $item->gz_gzffxshi;
    $obj["gz_gzmoney"] = $item->gz_gzmoney>0 ? $item->gz_gzmoney : "";
    $obj["update"] = date("Y-m-d", strtotime($item->update));
    
    $html["m"]["income1"][] = $obj;
  }
  $html["json"]["income1"] = json_encode($html["m"]["income1"]);
  //
  
  // 社保
  $t = "`customer_module_income2`";
  $html["m"]["income2"] = array();
  $sql = "select * from $t where `customerid`='$get_id' order by `update` desc";
  $rs = $db->get_results($sql);
  if ($rs == null) $rs = array();
  foreach ($rs as $item) {
    $obj = array();
    $obj["id"] = $item->id;
    $obj["sb_sbjnztai"] = $item->sb_sbjnztai;
    $obj["sb_sbxxyfen"] = $item->sb_sbxxyfen=="0000-00-00" ? "" : date("Y-m", strtotime($item->sb_sbxxyfen));
    $obj["sb_gs_yljs"] = $item->sb_gs_yljs>0 ? $item->sb_gs_yljs : "";
    $obj["sb_gs_sbjnbli"] = $item->sb_gs_sbjnbli>0 ? $item->sb_gs_sbjnbli : "";
    $obj["sb_gs_sbjnmoney"] = $item->sb_gs_sbjnmoney>0 ? $item->sb_gs_sbjnmoney : "";
    $obj["sb_gr_yljs"] = $item->sb_gr_yljs>0 ? $item->sb_gr_yljs : "";
    $obj["sb_gr_sbjnbli"] = $item->sb_gr_sbjnbli>0 ? $item->sb_gr_sbjnbli : "";
    $obj["sb_gr_sbjnmoney"] = $item->sb_gr_sbjnmoney>0 ? $item->sb_gr_sbjnmoney : "";
    $obj["sb_sbjndsheng"] = $item->sb_sbjndsheng;
    $obj["sb_sbjndshi"] = $item->sb_sbjndshi;
    $obj["sb_sbjndwei"] = $item->sb_sbjndwei;
    $obj["sb_dsfgsming"] = $item->sb_dsfgsming;
    $obj["update"] = date("Y-m-d", strtotime($item->update));
    
    $html["m"]["income2"][] = $obj;
  }
  $html["json"]["income2"] = json_encode($html["m"]["income2"]);
  //
  
  // 公积金
  $t = "`customer_module_income3`";
  $html["m"]["income3"] = array();
  $sql = "select * from $t where `customerid`='$get_id' order by `update` desc";
  $rs = $db->get_results($sql);
  if ($rs == null) $rs = array();
  foreach ($rs as $item) {
    $obj = array();
    $obj["id"] = $item->id;
    $obj["gjj_gjjjnztai"] = $item->gjj_gjjjnztai;
    $obj["gjj_gjjxxyfen"] = $item->gjj_gjjxxyfen=="0000-00-00" ? "" : date("Y-m", strtotime($item->gjj_gjjxxyfen));
    $obj["gjj_gs_gjjjs"] = $item->gjj_gs_gjjjs>0 ? $item->gjj_gs_gjjjs : "";
    $obj["gjj_gs_gjjjnbli"] = $item->gjj_gs_gjjjnbli>0 ? $item->gjj_gs_gjjjnbli : "";
    $obj["gjj_gs_gjjjnmoney"] = $item->gjj_gs_gjjjnmoney>0 ? $item->gjj_gs_gjjjnmoney : "";
    $obj["gjj_gr_gjjjs"] = $item->gjj_gr_gjjjs>0 ? $item->gjj_gr_gjjjs : "";
    $obj["gjj_gr_gjjjnbli"] = $item->gjj_gr_gjjjnbli>0 ? $item->gjj_gr_gjjjnbli : "";
    $obj["gjj_gr_gjjjnmoney"] = $item->gjj_gr_gjjjnmoney>0 ? $item->gjj_gr_gjjjnmoney : "";
    $obj["gjj_gjjjndsheng"] = $item->gjj_gjjjndsheng;
    $obj["gjj_gjjjndshi"] = $item->gjj_gjjjndshi;
    $obj["gjj_gjjjndwei"] = $item->gjj_gjjjndwei;
    $obj["gjj_dsfgsming"] = $item->gjj_dsfgsming;
    $obj["update"] = date("Y-m-d", strtotime($item->update));
    
    $html["m"]["income3"][] = $obj;
  }
  $html["json"]["income3"] = json_encode($html["m"]["income3"]);
  //
  
  // 个人所得税
  $t = "`customer_module_income4`";
  $html["m"]["income4"] = array();
  $sql = "select * from $t where `customerid`='$get_id' order by `update` desc";
  $rs = $db->get_results($sql);
  if ($rs == null) $rs = array();
  foreach ($rs as $item) {
    $obj = array();
    $obj["id"] = $item->id;
    $obj["sds_jnztai"] = $item->sds_jnztai;
    $obj["sds_xxyfen"] = $item->sds_xxyfen=="0000-00-00" ? "" : date("Y-m", strtotime($item->sds_xxyfen));
    $obj["sds_sqgzi"] = $item->sds_sqgzi>0 ? $item->sds_sqgzi : "";
    $obj["sds_gsmoney"] = $item->sds_gsmoney>0 ? $item->sds_gsmoney : "";
    $obj["sds_jndsheng"] = $item->sds_jndsheng;
    $obj["sds_jndshi"] = $item->sds_jndshi;
    $obj["sds_jndwei"] = $item->sds_jndwei;
    $obj["sds_dsfgsming"] = $item->sds_dsfgsming;
    $obj["update"] = date("Y-m-d", strtotime($item->update));
    
    $html["m"]["income4"][] = $obj;
  }
  $html["json"]["income4"] = json_encode($html["m"]["income4"]);
  //
  
  // 流水
  $t = "`customer_module_income5`";
  $html["m"]["income5"] = array();
  $sql = "select * from $t where `customerid`='$get_id' order by `update` desc";
  $rs = $db->get_results($sql);
  if ($rs == null) $rs = array();
  foreach ($rs as $item) {
    $obj = array();
    $obj["id"] = $item->id;
    $obj["ls_gz_yjlshui"] = $item->ls_gz_yjlshui > 0 ? $item->ls_gz_yjlshui : "";
    $obj["ls_gz_jxdate1"] = $item->ls_gz_jxdate1 == "0000-00-00" ? "" : date("Y-m", strtotime($item->ls_gz_jxdate1));
    $obj["ls_gz_jxmoney1"] = $item->ls_gz_jxmoney1 > 0 ? $item->ls_gz_jxmoney1 : "";
    $obj["ls_gz_jxdate2"] = $item->ls_gz_jxdate2 == "0000-00-00" ? "" : date("Y-m", strtotime($item->ls_gz_jxdate2));
    $obj["ls_gz_jxmoney2"] = $item->ls_gz_jxmoney2 > 0 ? $item->ls_gz_jxmoney2 : "";
    $obj["ls_kp_yjlshui"] = $item->ls_kp_yjlshui > 0 ? $item->ls_kp_yjlshui : "";
    $obj["ls_kp_jxdate1"] = $item->ls_kp_jxdate1 == "0000-00-00" ? "" : date("Y-m", strtotime($item->ls_kp_jxdate1));
    $obj["ls_kp_jxmoney1"] = $item->ls_kp_jxmoney1 > 0 ? $item->ls_kp_jxmoney1 : "";
    $obj["ls_kp_jxdate2"] = $item->ls_kp_jxdate2 == "0000-00-00" ? "" : date("Y-m", strtotime($item->ls_kp_jxdate2));
    $obj["ls_kp_jxmoney2"] = $item->ls_kp_jxmoney2 > 0 ? $item->ls_kp_jxmoney2 : "";
    $obj["ls_sz_yjlshui"] = $item->ls_sz_yjlshui > 0 ? $item->ls_sz_yjlshui : "";
    $obj["ls_sz_jxdate1"] = $item->ls_sz_jxdate1 == "0000-00-00" ? "" : date("Y-m", strtotime($item->ls_sz_jxdate1));
    $obj["ls_sz_jxmoney1"] = $item->ls_sz_jxmoney1 > 0 ? $item->ls_sz_jxmoney1 : "";
    $obj["ls_sz_jxdate2"] = $item->ls_sz_jxdate2 == "0000-00-00" ? "" : date("Y-m", strtotime($item->ls_sz_jxdate2));
    $obj["ls_sz_jxmoney2"] = $item->ls_sz_jxmoney2 > 0 ? $item->ls_sz_jxmoney2 : "";
    $obj["ls_pos_yjlshui"] = $item->ls_pos_yjlshui > 0 ? $item->ls_pos_yjlshui : "";
    $obj["update"] = date("Y-m-d", strtotime($item->update));
    
    $html["m"]["income5"][] = $obj;
  }
  $html["json"]["income5"] = json_encode($html["m"]["income5"]);
  //

  $html["m"]["income"]["this_year"] = date("Y") . "年";
  $html["m"]["income"]["prev_year"] = $html["m"]["income"]["this_year"] - 1 . "年";
  $html["json"]["income"] = json_encode($html["m"]["income"]);
  //print_r($html["json"]["income"]);exit;
  // 工作信息 end
}
?>