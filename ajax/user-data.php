<?
  require_once("../lib/public.php");

  $id = isset($_GET["id"]) ? $_GET["id"] : exit;
  $data = array();
  
  $sql = "select `cname`, `jobtitleid`, `phone`, `wechat`, `isdel` as dismission from `users` where id={$id}";
  $data = $db->get_row($sql, ARRAY_A);
  
  $sql = "select `name` from `jobtitle` where `id`='{$data["jobtitleid"]}'";
  $data["jobtitle"] = $db->get_var($sql);
  
  $data["avatar"] = 0;
  if (file_exists('avatar/1.png')) {
    $data["avatar"] = 1;
  }
  
  exit(json_encode($data));
?>