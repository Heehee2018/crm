<?
  require_once("../lib/public.php");

  $id = $_GET['id'];
  $pid = $_GET['pid'];
  $t = isset($_GET['t'])?$_GET['t']:'';
  
  if ($t != '') {
    echo '<option value="0">'.$t.'</option>';
  }
  
  if ($pid==0 && $id<1) exit;
  
  $sql = "select `id`,`name` from `product` where `pid`=".$pid." and `isdel`='0'";
  $rs = $db->get_results($sql);
  foreach ($rs as $item) {
    echo '<option value="'.$item->id.'"';
    if ($item->id == $id) echo " selected";
    echo '>';
    
    echo $item->name;
    
    echo '</option>';
  }
?>