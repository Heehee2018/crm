<?
function add_house() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_house`";
  
  chk_customer_detail_auth();

  $ipt["fwlxing1"] = get_post("ipt-fwlxing1", 0);
  $ipt["fwlxing2"] = get_post("ipt-fwlxing2", 0);
  $ipt["fwlxing3"] = get_post("ipt-fwlxing3", 0);
  $ipt["fwsyquan"] = get_post("ipt-fwsyquan", 0);
  $ipt["fwsyquan2"] = get_post("ipt-fwsyquan2", 0);
  $ipt["fwsyquan3"] = get_post("ipt-fwsyquan3", 0);
  $ipt["fwjcri"] = get_post("ipt-fwjcri")=="" ? "" : get_post("ipt-fwjcri") . "-1";
  $ipt["gfri"] = get_post("ipt-gfri")=="" ? "" : get_post("ipt-gfri") . "-1";
  $ipt["fwjzmji"] = get_post("ipt-fwjzmji", 0);
  $ipt["fwsymji"] = get_post("ipt-fwsymji", 0);
  $ipt["fczdzsheng"] = get_post("ipt-fczdzsheng");
  $ipt["fczdzshi"] = get_post("ipt-fczdzshi");
  $ipt["fczdzqu"] = get_post("ipt-fczdzqu");
  $ipt["fczdzhi"] = get_post("ipt-fczdzhi");
  $ipt["yjdzsheng"] = get_post("ipt-yjdzsheng");
  $ipt["yjdzshi"] = get_post("ipt-yjdzshi");
  $ipt["yjdzqu"] = get_post("ipt-yjdzqu");
  $ipt["yjdzhi"] = get_post("ipt-yjdzhi");
  $ipt["fwxjia"] = get_post("ipt-fwxjia", 0);
  $ipt["fczheng"] = get_post("ipt-fczheng", 0);
  $ipt["fwdkuan"] = get_post("ipt-fwdkuan", 0);
  $ipt["dkrqi"] = get_post("ipt-dkrqi")=="" ? "" : get_post("ipt-dkrqi") . "-1";;
  $ipt["dkbli"] = get_post("ipt-dkbli", 0);
  $ipt["zgsxin"] = get_post("ipt-zgsxin", 0);
  $ipt["dkbjin"] = get_post("ipt-dkbjin", 0);
  $ipt["fkyhang"] = get_post("ipt-fkyhang", 0);
  $ipt["dkschang"] = get_post("ipt-dkschang", 0);
  $ipt["ygje"] = get_post("ipt-ygje", 0);
  $ipt["hkfshi"] = get_post("ipt-hkfshi", 0);
  $ipt["hkfshid"] = get_post("ipt-hkfshid");
  
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
    exit("<script>alert('房产信息添加成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('房产信息添加失败！');history.go(-1);</script>");
  }
}

function save_house() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_house`";
  
  chk_customer_detail_auth();

  $ipt["fwlxing1"] = get_post("ipt-fwlxing1", 0);
  $ipt["fwlxing2"] = get_post("ipt-fwlxing2", 0);
  $ipt["fwlxing3"] = get_post("ipt-fwlxing3", 0);
  $ipt["fwsyquan"] = get_post("ipt-fwsyquan", 0);
  $ipt["fwsyquan2"] = get_post("ipt-fwsyquan2", 0);
  $ipt["fwsyquan3"] = get_post("ipt-fwsyquan3", 0);
  $ipt["fwjcri"] = get_post("ipt-fwjcri")=="" ? "" : get_post("ipt-fwjcri") . "-1";
  $ipt["gfri"] = get_post("ipt-gfri")=="" ? "" : get_post("ipt-gfri") . "-1";
  $ipt["fwjzmji"] = get_post("ipt-fwjzmji", 0);
  $ipt["fwsymji"] = get_post("ipt-fwsymji", 0);
  $ipt["fczdzsheng"] = get_post("ipt-fczdzsheng");
  $ipt["fczdzshi"] = get_post("ipt-fczdzshi");
  $ipt["fczdzqu"] = get_post("ipt-fczdzqu");
  $ipt["fczdzhi"] = get_post("ipt-fczdzhi");
  $ipt["yjdzsheng"] = get_post("ipt-yjdzsheng");
  $ipt["yjdzshi"] = get_post("ipt-yjdzshi");
  $ipt["yjdzqu"] = get_post("ipt-yjdzqu");
  $ipt["yjdzhi"] = get_post("ipt-yjdzhi");
  $ipt["fwxjia"] = get_post("ipt-fwxjia", 0);
  $ipt["fczheng"] = get_post("ipt-fczheng", 0);
  $ipt["fwdkuan"] = get_post("ipt-fwdkuan", 0);
  $ipt["dkrqi"] = get_post("ipt-dkrqi")=="" ? "" : get_post("ipt-dkrqi") . "-1";;
  $ipt["dkbli"] = get_post("ipt-dkbli", 0);
  $ipt["zgsxin"] = get_post("ipt-zgsxin", 0);
  $ipt["dkbjin"] = get_post("ipt-dkbjin", 0);
  $ipt["fkyhang"] = get_post("ipt-fkyhang", 0);
  $ipt["dkschang"] = get_post("ipt-dkschang", 0);
  $ipt["ygje"] = get_post("ipt-ygje", 0);
  $ipt["hkfshi"] = get_post("ipt-hkfshi", 0);
  $ipt["hkfshid"] = get_post("ipt-hkfshid");
  
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
    exit("<script>alert('房产信息保存成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('房产信息保存失败！');history.go(-1);</script>");
  }
}
// save_house() end

function json_house() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_house`";
  
  $sql = "select * from $t where `id`='$get_id' limit 1";
  $rs = $db->get_row($sql);
  
  echo json_encode($rs);
  exit;
}

function initHouseData() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_house`";
  $html["m"]["house"] = array();
  
  $sql = "select * from $t where `customerid`='$get_id' order by `update` desc";
  $rs = $db->get_results($sql);
  if ($rs == null) $rs = array();
  
  foreach ($rs as $item) {
    $obj = array();
    $obj["id"] = $item->id;
    $obj["fwlxing1"] = $item->fwlxing1;
    $obj["fwlxing2"] = $item->fwlxing2;
    $obj["fwlxing3"] = $item->fwlxing3;
    $obj["fwsyquan"] = $item->fwsyquan;
    $obj["fwsyquan2"] = $item->fwsyquan2;
    $obj["fwsyquan3"] = $item->fwsyquan3;
    $obj["fwjcri"] = $item->fwjcri=="0000-00-00" ? "" : date("Y-m", strtotime($item->fwjcri));
    $obj["gfri"] = $item->gfri=="0000-00-00" ? "" : date("Y-m", strtotime($item->gfri));
    $obj["fwjzmji"] = $item->fwjzmji;
    $obj["fwsymji"] = $item->fwsymji;
    $obj["fczdzsheng"] = $item->fczdzsheng;
    $obj["fczdzshi"] = $item->fczdzshi;
    $obj["fczdzqu"] = $item->fczdzqu;
    $obj["fczdzhi"] = $item->fczdzhi;
    $obj["yjdzsheng"] = $item->yjdzsheng;
    $obj["yjdzshi"] = $item->yjdzshi;
    $obj["yjdzqu"] = $item->yjdzqu;
    $obj["yjdzhi"] = $item->yjdzhi;
    $obj["fwxjia"] = $item->fwxjia;
    $obj["fczheng"] = $item->fczheng;
    $obj["fwdkuan"] = $item->fwdkuan;
    $obj["dkrqi"] = $item->dkrqi=="0000-00-00" ? "" : date("Y-m", strtotime($item->dkrqi));
    $obj["dkbli"] = $item->dkbli;
    $obj["zgsxin"] = $item->zgsxin;
    $obj["dkbjin"] = $item->dkbjin;
    $obj["fkyhang"] = $item->fkyhang;
    $obj["dkschang"] = $item->dkschang;
    $obj["ygje"] = $item->ygje;
    $obj["hkfshi"] = $item->hkfshi;
    $obj["hkfshid"] = $item->hkfshid;
    $obj["update"] = date("Y-m-d", strtotime($item->update));
    
    $html["m"]["house"][] = $obj;
  }
  
  $html["json"]["house"] = json_encode($html["m"]["house"]);
  //print_r($html["json"]["income"]);exit;
  // 工作信息 end
}
?>