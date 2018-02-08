<?
function add_debt() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_debt`";
  
  chk_customer_detail_auth();

  $ipt["xyka"] = get_post("ipt-xyka");
  $ipt["zshu"] = get_post("ipt-zshu");
  $ipt["zsxe"] = get_post("ipt-zsxe");
  $ipt["dzzgsxe"] = get_post("ipt-dzzgsxe");
  $ipt["dqyyong"] = get_post("ipt-dqyyong");
  $ipt["j6gyjyong"] = get_post("ipt-j6gyjyong");
  $ipt["dzhang"] = get_post("ipt-dzhang");
  $ipt["djie"] = get_post("ipt-djie");
  $ipt["zfu"] = get_post("ipt-zfu");
  $ipt["jgou"] = get_post("ipt-jgou");
  $ipt["gsi"] = get_post("ipt-gsi");
  $ipt["fkuan"] = get_post("ipt-fkuan");
  $ipt["dkje"] = get_post("ipt-dkje");
  $ipt["sybjin"] = get_post("ipt-sybjin");
  $ipt["fksjian"] = get_post("ipt-fksjian")=="" ? "" : get_post("ipt-fksjian") . "-1";
  $ipt["dkqxian"] = get_post("ipt-dkqxian");
  $ipt["hkfshi"] = get_post("ipt-hkfshi");
  $ipt["ygje"] = get_post("ipt-ygje");
  $ipt["dbje"] = get_post("ipt-dbje");
  $ipt["dblxing"] = get_post("ipt-dblxing");
  $ipt["dbztai"] = get_post("ipt-dbztai");
  
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
    exit("<script>alert('债务信息保存成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('债务信息保存失败！');history.go(-1);</script>");
  }
}

function save_debt() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_debt`";
  
  chk_customer_detail_auth();

  $ipt["xyka"] = get_post("ipt-xyka");
  $ipt["zshu"] = get_post("ipt-zshu");
  $ipt["zsxe"] = get_post("ipt-zsxe");
  $ipt["dzzgsxe"] = get_post("ipt-dzzgsxe");
  $ipt["dqyyong"] = get_post("ipt-dqyyong");
  $ipt["j6gyjyong"] = get_post("ipt-j6gyjyong");
  $ipt["dzhang"] = get_post("ipt-dzhang");
  $ipt["djie"] = get_post("ipt-djie");
  $ipt["zfu"] = get_post("ipt-zfu");
  $ipt["jgou"] = get_post("ipt-jgou");
  $ipt["gsi"] = get_post("ipt-gsi");
  $ipt["fkuan"] = get_post("ipt-fkuan");
  $ipt["dkje"] = get_post("ipt-dkje");
  $ipt["sybjin"] = get_post("ipt-sybjin");
  $ipt["fksjian"] = get_post("ipt-fksjian")=="" ? "" : get_post("ipt-fksjian") . "-1";
  $ipt["dkqxian"] = get_post("ipt-dkqxian");
  $ipt["hkfshi"] = get_post("ipt-hkfshi");
  $ipt["ygje"] = get_post("ipt-ygje");
  $ipt["dbje"] = get_post("ipt-dbje");
  $ipt["dblxing"] = get_post("ipt-dblxing");
  $ipt["dbztai"] = get_post("ipt-dbztai");
  
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
    exit("<script>alert('债务信息保存成功！');history.go(-1);</script>");
  } else {
    $msg .= gen_alert("债务信息保存失败！");
  }
}
// save_debt() end

function json_debt() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_debt`";
  
  $sql = "select * from $t where `id`='$get_id' limit 1";
  $rs = $db->get_row($sql);
  
  echo json_encode($rs);
  exit;
}

function initDebtData() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_debt`";
  $html["m"]["debt"] = array();
  
  $sql = "select * from $t where `customerid`='$get_id' order by `update` desc";
  $rs = $db->get_results($sql);
  if ($rs == null) $rs = array();
  
  foreach ($rs as $item) {
    $obj = array();

    $obj["id"] = $item->id;
    $obj["xyka"] = $item->xyka;
    $obj["zshu"] = $item->zshu;
    $obj["zsxe"] = $item->zsxe;
    $obj["dzzgsxe"] = $item->dzzgsxe;
    $obj["dqyyong"] = $item->dqyyong;
    $obj["j6gyjyong"] = $item->j6gyjyong;
    $obj["dzhang"] = $item->dzhang;
    $obj["djie"] = $item->djie;
    $obj["zfu"] = $item->zfu;
    $obj["jgou"] = $item->jgou;
    $obj["jgou_c"] = echo_byid($item->jgou, "product", "name");
    $obj["gsi"] = $item->gsi;
    $obj["gsi_c"] = echo_byid($item->gsi, "product", "name");
    $obj["fkuan"] = $item->fkuan;
    $obj["fkuan_c"] = echo_byid($item->fkuan, "product", "name");
    $obj["dkje"] = $item->dkje;
    $obj["sybjin"] = $item->sybjin;
    $obj["fksjian"] = $item->fksjian=="0000-00-00" ? "" : date("Y-m", strtotime($item->fksjian));
    $obj["dkqxian"] = $item->dkqxian;
    $obj["hkfshi"] = $item->hkfshi;
    $obj["ygje"] = $item->ygje;
    $obj["dbje"] = $item->dbje;
    $obj["dblxing"] = $item->dblxing;
    $obj["dbztai"] = $item->dbztai;
    $obj["update"] = date("Y-m-d", strtotime($item->update));
    
    $html["m"]["debt"][] = $obj;
  }
    
  $html["json"]["debt"] = json_encode($html["m"]["debt"]);
  //print_r($html["json"]["income"]);exit;
  // 工作信息 end
}
?>