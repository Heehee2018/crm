<?
function add_car() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_car`";
  
  chk_customer_detail_auth();

  $ipt["cllxing"] = get_post("ipt-cllxing", 0);
  $ipt["cpsheng"] = get_post("ipt-cpsheng", 0);
  $ipt["cpshi"] = get_post("ipt-cpshi", 0);
  $ipt["cphao"] = get_post("ipt-cphao");
  $ipt["clppai"] = get_post("ipt-clppai");
  $ipt["clxhao"] = get_post("ipt-clxhao");
  $ipt["gcrqi"] = get_post("ipt-gcrqi")=="" ? "" : get_post("ipt-gcrqi") . "-1";
  $ipt["lcjia"] = get_post("ipt-lcjia", 0);
  $ipt["cldkuan"] = get_post("ipt-cldkuan", 0);
  $ipt["dkxs_fkjg"] = get_post("ipt-dkxs_fkjg".$ipt["cldkuan"], 0);
  $ipt["fkyhang"] = get_post("ipt-fkyhang", 0);
  $ipt["dkrqi"] = get_post("ipt-dkrqi")=="" ? "" : get_post("ipt-dkrqi") . "-1";
  $ipt["dkbjin"] = get_post("ipt-dkbjin", 0);
  $ipt["dkschang"] = get_post("ipt-dkschang", 0);
  $ipt["ygje"] = get_post("ipt-ygje", 0);
  
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
    exit("<script>alert('车产信息保存成功！');history.go(-1);</script>");
  } else {
    $msg .= gen_alert("车产信息添加失败！");
  }
}

function save_car() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_car`";
  
  chk_customer_detail_auth();

  $ipt["cllxing"] = get_post("ipt-cllxing", 0);
  $ipt["cpsheng"] = get_post("ipt-cpsheng", 0);
  $ipt["cpshi"] = get_post("ipt-cpshi", 0);
  $ipt["cphao"] = get_post("ipt-cphao");
  $ipt["clppai"] = get_post("ipt-clppai");
  $ipt["clxhao"] = get_post("ipt-clxhao");
  $ipt["gcrqi"] = get_post("ipt-gcrqi")=="" ? "" : get_post("ipt-gcrqi") . "-1";
  $ipt["lcjia"] = get_post("ipt-lcjia", 0);
  $ipt["cldkuan"] = get_post("ipt-cldkuan", 0);
  $ipt["dkxs_fkjg"] = get_post("ipt-dkxs_fkjg".$ipt["cldkuan"], 0);
  $ipt["fkyhang"] = get_post("ipt-fkyhang", 0);
  $ipt["dkrqi"] = get_post("ipt-dkrqi")=="" ? "" : get_post("ipt-dkrqi") . "-1";
  $ipt["dkbjin"] = get_post("ipt-dkbjin", 0);
  $ipt["dkschang"] = get_post("ipt-dkschang", 0);
  $ipt["ygje"] = get_post("ipt-ygje", 0);
  
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
    exit("<script>alert('车产信息保存成功！');history.go(-1);</script>");
  } else {
    $msg .= gen_alert("车产信息保存失败！");
  }
}
// save_car() end

function json_car() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_car`";
  
  $sql = "select * from $t where `id`='$get_id' limit 1";
  $rs = $db->get_row($sql);
  
  echo json_encode($rs);
  exit;
}

function initCarData() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_car`";
  $html["m"]["car"] = array();
  
  $sql = "select * from $t where `customerid`='$get_id' order by `update` desc";
  $rs = $db->get_results($sql);
  if ($rs == null) $rs = array();
  
  foreach ($rs as $item) {
    $obj = array();
    $obj["id"] = $item->id;
    $obj["cllxing"] = $item->cllxing;
    $obj["cpsheng"] = $item->cpsheng;
    $obj["cpshi"] = $item->cpshi;
    $obj["cphao"] = $item->cphao;
    $obj["clppai"] = $item->clppai;
    $obj["clxhao"] = $item->clxhao;
    $obj["gcrqi"] = $item->gcrqi=="0000-00-00" ? "" : date("Y-m", strtotime($item->gcrqi));
    $obj["lcjia"] = $item->lcjia;
    $obj["cldkuan"] = $item->cldkuan;
    $obj["dkxs_fkjg"] = $item->dkxs_fkjg;
    $obj["fkyhang"] = $item->fkyhang;
    $obj["dkrqi"] = $item->dkrqi=="0000-00-00" ? "" : date("Y-m", strtotime($item->dkrqi));
    $obj["dkbjin"] = $item->dkbjin;
    $obj["dkschang"] = $item->dkschang;
    $obj["ygje"] = $item->ygje;
    $obj["update"] = date("Y-m-d", strtotime($item->update));
    
    $html["m"]["car"][] = $obj;
  }

  $html["json"]["car"] = json_encode($html["m"]["car"]);
  //print_r($html["json"]["income"]);exit;
  // 工作信息 end
}
?>