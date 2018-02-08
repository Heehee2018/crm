<?
function add_credit() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_credit`";
  
  chk_customer_detail_auth();

  $ipt_zxcxcshu = array();
  $ipt_zxyqi = array();
  $ipt_zxcxcshu_a = $_POST["ipt-zxcxcshu-a"];
  $ipt_zxcxcshu_b = $_POST["ipt-zxcxcshu-b"];
  $ipt_zxcxcshu_c = $_POST["ipt-zxcxcshu-c"];
  $ipt_zxyqi_a = $_POST["ipt-zxyqi-a"];
  $ipt_zxyqi_b = $_POST["ipt-zxyqi-b"];
  $ipt_zxyqi_c = $_POST["ipt-zxyqi-c"];
  $ipt_zxyqi_d = $_POST["ipt-zxyqi-d"];
  
  for ($n=0; $n<count($ipt_zxcxcshu_c); $n++) {
    $obj = array();
    $obj["a"] = $ipt_zxcxcshu_a[$n];
    $obj["b"] = $ipt_zxcxcshu_b[$n];
    $obj["c"] = $ipt_zxcxcshu_c[$n];
    if ($obj["c"] != "") {
      $ipt_zxcxcshu[] = $obj;
    }
  }
  for ($n=0; $n<count($ipt_zxyqi_d); $n++) {
    $obj = array();
    $obj["a"] = $ipt_zxyqi_a[$n];
    $obj["b"] = $ipt_zxyqi_b[$n];
    $obj["c"] = $ipt_zxyqi_c[$n];
    $obj["d"] = $ipt_zxyqi_d[$n];
    if ($obj["d"] != "") {
      $ipt_zxyqi[] = $obj;
    }
  }
  
  $ipt["zxcxsjian"] = get_post("ipt-zxcxsjian")=="" ? "" : get_post("ipt-zxcxsjian");
  $ipt["zxcxcshu"] = json_encode($ipt_zxcxcshu);
  $ipt["zxyqi"] = json_encode($ipt_zxyqi);
  
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
    exit("<script>alert('征信信息保存成功！');history.go(-1);</script>");
  } else {
    $msg .= gen_alert("征信信息添加失败！");
  }
}

function save_credit() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_credit`";
  
  chk_customer_detail_auth();

  $ipt_zxcxcshu = array();
  $ipt_zxyqi = array();
  $ipt_zxcxcshu_a = $_POST["ipt-zxcxcshu-a"];
  $ipt_zxcxcshu_b = $_POST["ipt-zxcxcshu-b"];
  $ipt_zxcxcshu_c = $_POST["ipt-zxcxcshu-c"];
  $ipt_zxyqi_a = $_POST["ipt-zxyqi-a"];
  $ipt_zxyqi_b = $_POST["ipt-zxyqi-b"];
  $ipt_zxyqi_c = $_POST["ipt-zxyqi-c"];
  $ipt_zxyqi_d = $_POST["ipt-zxyqi-d"];
  
  for ($n=0; $n<count($ipt_zxcxcshu_c); $n++) {
    $obj = array();
    $obj["a"] = $ipt_zxcxcshu_a[$n];
    $obj["b"] = $ipt_zxcxcshu_b[$n];
    $obj["c"] = $ipt_zxcxcshu_c[$n];
    if ($obj["c"] != "") {
      $ipt_zxcxcshu[] = $obj;
    }
  }
  for ($n=0; $n<count($ipt_zxyqi_d); $n++) {
    $obj = array();
    $obj["a"] = $ipt_zxyqi_a[$n];
    $obj["b"] = $ipt_zxyqi_b[$n];
    $obj["c"] = $ipt_zxyqi_c[$n];
    $obj["d"] = $ipt_zxyqi_d[$n];
    if ($obj["d"] != "") {
      $ipt_zxyqi[] = $obj;
    }
  }
  
  $ipt["zxcxsjian"] = get_post("ipt-zxcxsjian")=="" ? "" : get_post("ipt-zxcxsjian");
  $ipt["zxcxcshu"] = json_encode($ipt_zxcxcshu);
  $ipt["zxyqi"] = json_encode($ipt_zxyqi);
  
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
    exit("<script>alert('征信信息保存成功！');history.go(-1);</script>");
  } else {
    $msg .= gen_alert("征信信息保存失败！");
  }
}
// save_credit() end

function json_credit() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_credit`";
  
  $sql = "select * from $t where `id`='$get_id' limit 1";
  $rs = $db->get_row($sql);
  $rs->zxcxcshu = json_decode($rs->zxcxcshu);
  $rs->zxyqi = json_decode($rs->zxyqi);
  
  echo json_encode($rs);
  exit;
}

function initCreditData() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_credit`";
  $html["m"]["credit"] = array();
  
  $sql = "select * from $t where `customerid`='$get_id' order by `update` desc";
  $rs = $db->get_results($sql);
  if ($rs == null) $rs = array();
  
  foreach ($rs as $item) {
    $obj = array();
    $obj["id"] = $item->id;
    $obj["zxcxsjian"] = $item->zxcxsjian=="0000-00-00" ? "" : date("Y-m-d", strtotime($item->zxcxsjian));
    $obj["zxcxcshu"] = json_decode($item->zxcxcshu);
    $obj["zxyqi"] = json_decode($item->zxyqi);
    $obj["update"] = date("Y-m-d", strtotime($item->update));
    
    $html["m"]["credit"][] = $obj;
  }

  $html["json"]["credit"] = json_encode($html["m"]["credit"]);
  //print_r($html["json"]["credit"]);exit;
  // 工作信息 end
}
?>