<?
require_once("../lib/public.php");

chk_login();

$max_name = 10;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $val_id       = $_POST["doc-ipt-id"];
  $val_name     = trim($_POST["doc-ipt-name"]);
  $val_sex      = isset($_POST["doc-ipt-sex"])?$_POST["doc-ipt-sex"]:-1;
  $val_age      = $_POST["doc-ipt-age"];
  //$val_status   = $_POST["doc-ipt-status"];
  $val_certcode = trim($_POST["doc-ipt-certcode"]);
  $val_city     = trim($_POST["doc-ipt-city"]);
  $val_jobkind  = $_POST["doc-ipt-jobkind"];
  $val_xdkuan   = $_POST["doc-ipt-xdkuan"];
  $val_fang     = $_POST["doc-ipt-fang"];
  $val_che      = $_POST["doc-ipt-che"];
  $val_company  = $_POST["doc-ipt-company"];
  $val_gongzi   = $_POST["doc-ipt-gongzi"];
  $val_sbgjjin  = $_POST["doc-ipt-sbgjjin"];
  $val_baodan   = $_POST["doc-ipt-baodan"];
  $val_fuzhai   = $_POST["doc-ipt-fuzhai"];
  $val_zhengxin = $_POST["doc-ipt-zhengxin"];
  $val_qita     = trim($_POST["doc-ipt-qita"]);
  $val_attachid_dl = get_post("doc-ipt-attachid-dl", "0");
  
  //检索姓名是否更改
  $sql = "select name, certcode from `customer` where `id`='$val_id' limit 1";
  $rs = $db->get_row($sql);
  $name = trim($rs->name);
  $certcode = trim($rs->certcode);
  //姓名修改了，并且是客户部同事
  if ($name!=$val_name && chk_login_dept(2) && $jobtitleid!=1) {
    //检索今天这条7头修改客户名称的数量
    $sql = "select count(*) from `logs` where `param1`='5' and `param3`='$userid' and `param4`='' and `update`>'".Date("Y-m-d")."'";
    $cid = $db->get_var($sql);
    if ($cid > $max_name-1) {
      echo "今天修改姓名的数量已经超出了 $max_name 个，修改失败！";
      exit;
    }
    //检索这个客户是否已经修改过名称
    $sql = "select count(*) from `logs` where `param1`='5' and `param2`='$val_id' and `param4`=''";
    $cid = $db->get_var($sql);
    if ($cid > 0) {
      if ($certcode!=$val_certcode && $cid>1) {
        echo "该客户已经修改过姓名，不能再修改了";
        exit;
      } else {
        echo "该客户已经修改过姓名，不能再修改了";
        exit;
      }
    }
    
    $sql = "insert into `logs` (`param1`, `param2`, `param3`, `message`, `update`) values
                               ('5', '$val_id', '$userid', '$name -> $val_name', '".Date("Y-m-d H:i:s")."')";
    $db->query($sql);
  }
  //姓名修改了，并且是渠道部同事
  if ($name!=$val_name && chk_login_dept(3) && $jobtitleid!=1) {
    //检索这个客户是否已经修改过名称
    $sql = "select count(*) from `logs` where `param1`='5' and `param2`='$val_id' and `param4`='3'";
    $cid = $db->get_var($sql);
    if ($cid > 0) {
      echo "该客户已经修改过姓名，不能再修改了";
      exit;
    }
    
    $sql = "insert into `logs` (`param1`, `param2`, `param3`, `param4`, `message`, `update`) values
                               ('5', '$val_id', '$userid', '3', '$name -> $val_name', '".Date("Y-m-d H:i:s")."')";
    $db->query($sql);
  }
  
  $sql = "update `customer` set ";
  if ($name != $val_name)
    $sql = $sql." `name`='$val_name',";
  if ($val_sex>-1)
    $sql = $sql." `sex`='$val_sex',";
  $sql = $sql." `age`='$val_age',";
  //$sql = $sql." `status`='$val_status',";
  if ($val_certcode!="" && !strpos($val_certcode, "*"))
    $sql = $sql." `certcode`='$val_certcode',";
  $sql = $sql." `city`='$val_city',";
  $sql = $sql." `jobkind`='$val_jobkind',";
  $sql = $sql." `xdkuan`='$val_xdkuan',";
  $sql = $sql." `fang`='$val_fang',";
  $sql = $sql." `che`='$val_che',";
  $sql = $sql." `company`='$val_company',";
  $sql = $sql." `gongzi`='$val_gongzi',";
  $sql = $sql." `sbgjjin`='$val_sbgjjin',";
  $sql = $sql." `baodan`='$val_baodan',";
  $sql = $sql." `fuzhai`='$val_fuzhai',";
  $sql = $sql." `zhengxin`='$val_zhengxin',";
  if (chk_auth_jobtitle(2))
    $sql = $sql ."`attachid_dl`='$val_attachid_dl',";
  $sql = $sql." `qita`='$val_qita'";
  $sql = $sql." where `id`='$val_id'";
  $rs = $db->query($sql);
  
  //echo "保存成功！";
}
?>