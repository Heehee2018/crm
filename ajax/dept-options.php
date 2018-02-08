<?
  require_once("../lib/public.php");

  $data = array();
  
  $data["dept"] = array(
    array('id'=>1, 'name'=>'总经办'),
    array('id'=>2, 'name'=>'销售部'),
    array('id'=>3, 'name'=>'渠道部'),
    array('id'=>4, 'name'=>'财务部'),
    array('id'=>21, 'name'=>'外拓部'),
  );
  
  $sql = "select `id`,`deptid` as pid,`name` from `jobtitle` order by `name`";
  $data["job"] = $db->get_results($sql, ARRAY_A);
  for ($n=0; $n<count($data["job"]); $n++) {
    if (chk_auth_jobtitle(2, $data["job"][$n]["id"]) && $data["job"][$n]["id"]!=1) {
      $data["job"][$n]["pid"] = 21;
    }
  }
  
  exit(json_encode($data));
?>