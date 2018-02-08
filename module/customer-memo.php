<?
function add_memo() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_memo`";
  
  chk_customer_detail_auth();

  $ipt["memo"] = get_post("ipt-memo");
  
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
    exit("<script>alert('备注添加成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('备注添加失败！');history.go(-1);</script>");
  }
}

function save_memo() {
  global $db, $get_id, $jobtitleid, $userid, $msg;
  
  $t = "`customer_module_memo`";
  
  chk_customer_detail_auth();

  $ipt["memo"] = get_post("ipt-memo");
  
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
    exit("<script>alert('备注保存成功！');history.go(-1);</script>");
  } else {
    exit("<script>alert('备注保存失败！');history.go(-1);</script>");
  }
}
// save_memo() end

function json_memo() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_memo`";
  
  $sql = "select * from $t where `id`='$get_id' limit 1";
  $rs = $db->get_row($sql);
  
  echo json_encode($rs);
  exit;
}

function initMemoData() {
  global $db, $html, $input, $get_id;
  
  $t = "`customer_module_memo`";
  $html["m"]["memo"] = array();
  
  $sql = "select * from $t where `customerid`='$get_id' order by `update` desc";
  $rs = $db->get_results($sql);
  if ($rs == null) $rs = array();
  
  foreach ($rs as $item) {
    $obj = array();
    $obj["id"] = $item->id;
    $obj["memo"] = strip_tags($item->memo);
    $obj["update"] = date("Y-m-d", strtotime($item->update));
    
    $html["m"]["memo"][] = $obj;
  }

  $html["json"]["memo"] = json_encode($html["m"]["memo"]);
  //print_r($html["json"]["income"]);exit;
  // 工作信息 end
}
?>