<?
function del_banks() {
  global $db, $get_id, $jobtitleid, $userid, $msg, $php_path;
  
  $t = "`customer_module_banks`";
  
  $id = $get_id;
  $get_id = $db->get_var("select `customerid` from {$t} where `id`='{$get_id}'");
  
  chk_customer_detail_auth();
  
  $sql = "delete from {$t} where `id`='{$id}'";
  $db->query($sql);
  
  echo json_encode("删除ID {$get_id} 完成");
  exit;
}

function add_banks() {
  global $db, $get_id, $jobtitleid, $userid, $msg, $html;
  
  $t = "`customer_module_banks`";
  
  chk_customer_detail_auth();

  $ipt["yhkgshu"] = get_post("ipt-yhkgshu", 0);
  $ipt["dsfxming"] = get_post("ipt-dsfxming");
  $ipt["dsfsfzhma"] = get_post("ipt-dsfsfzhma");
  $ipt["zhlxing"] = get_post("ipt-zhlxing", 0);
  $ipt["yhang"] = get_post("ipt-yhang");
  $ipt["hhao"] = get_post("ipt-hhao");
  $ipt["yhzhao"] = get_post("ipt-yhzhao", 0);
  $ipt["xykyxqi"] = get_post("ipt-xykyxqi")=="" ? "" : get_post("ipt-xykyxqi") . "-1";
  $ipt["cvcma"] = get_post("ipt-cvcma", 0);
  
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
    initBanksData();
    exit($html["json"]["banks"]);
  } else {
    exit(json_encode(array(0, "文件保存失败！")));
  }
}

function save_banks() {
  global $db, $get_id, $jobtitleid, $userid, $msg, $html;
  
  $t = "`customer_module_banks`";
  
  chk_customer_detail_auth();

  $ipt["yhkgshu"] = get_post("ipt-yhkgshu", 0);
  $ipt["dsfxming"] = get_post("ipt-dsfxming");
  $ipt["dsfsfzhma"] = get_post("ipt-dsfsfzhma");
  $ipt["zhlxing"] = get_post("ipt-zhlxing", 0);
  $ipt["yhang"] = get_post("ipt-yhang");
  $ipt["hhao"] = get_post("ipt-hhao");
  $ipt["yhzhao"] = get_post("ipt-yhzhao", 0);
  $ipt["xykyxqi"] = get_post("ipt-xykyxqi")=="" ? "" : get_post("ipt-xykyxqi") . "-1";
  $ipt["cvcma"] = get_post("ipt-cvcma", 0);
  
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
    initBanksData();
    exit($html["json"]["banks"]);
  } else {
    exit(json_encode(array(0, "文件保存失败！")));
  }
}
// save_banks() end

function json_banks() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_banks`";
  
  $sql = "select * from $t where `id`='$get_id' limit 1";
  $rs = $db->get_row($sql);
  
  echo json_encode($rs);
  exit;
}

function initBanksData() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_banks`";
  $html["m"]["banks"] = array();
  
  $sql = "select * from $t where `customerid`='$get_id' order by `update` desc";
  $rs = $db->get_results($sql);
  if ($rs == null) $rs = array();
  
  foreach ($rs as $item) {
    $obj = array();
  
    $obj["id"] = $item->id;
    $obj["customerid"] = $item->customerid;
    $obj["yhkgshu"] = $item->yhkgshu;
    $obj["dsfxming"] = $item->dsfxming;
    $obj["dsfsfzhma"] = $item->dsfsfzhma;
    $obj["zhlxing"] = $item->zhlxing;
    $obj["yhang"] = $item->yhang;
    $obj["hhao"] = $item->hhao;
    $obj["yhzhao"] = $item->yhzhao;
    $obj["xykyxqi"] = $item->xykyxqi=="0000-00-00" ? "" : date("Y-m", strtotime($item->xykyxqi));
    $obj["cvcma"] = $item->cvcma;
    $obj["update"] = date("Y-m-d", strtotime($item->update));
    
    $html["m"]["banks"][] = $obj;
  }
  
  $html["json"]["banks"] = json_encode($html["m"]["banks"]);
  //print_r($html["json"]["income"]);exit;
  // 工作信息 end
}
?>