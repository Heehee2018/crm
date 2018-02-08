<?
require_once ("lib/public.php");
require_once ("lib/class.upload.php");
require_once ("module/customer-need.php");
require_once ("module/customer-job.php");
require_once ("module/customer-income.php");
require_once ("module/customer-house.php");
require_once ("module/customer-car.php");
require_once ("module/customer-park.php");
require_once ("module/customer-policy.php");
require_once ("module/customer-debt.php");
require_once ("module/customer-credit.php");
require_once ("module/customer-case.php");
require_once ("module/customer-memo.php");
require_once ("module/customer-banks.php");
require_once ("module/customer-contracts.php");
require_once ("module/customer-assets.php");
require_once ("module/customer-credits.php");

chk_login();

$msg = "";
$html = array();
$input = array();
$get_id = isset($_GET["id"]) ? $_GET["id"] : 1;

if ($get_id != "") {
    $get_action = get_get("action");
    if ($get_action != "") {
        if ($get_action == "jsonneed") {
            json_need();
        } elseif ($get_action == "jsonjob") {
            json_job();
        } elseif ($get_action == "jsonincome1") {
            json_income1();
        } elseif ($get_action == "jsonincome2") {
            json_income2();
        } elseif ($get_action == "jsonincome3") {
            json_income3();
        } elseif ($get_action == "jsonincome4") {
            json_income4();
        } elseif ($get_action == "jsonincome5") {
            json_income5();
        } elseif ($get_action == "jsonhouse") {
            json_house();
        } elseif ($get_action == "jsoncar") {
            json_car();
        } elseif ($get_action == "jsonpark") {
            json_park();
        } elseif ($get_action == "jsonpolicy") {
            json_policy();
        } elseif ($get_action == "jsondebt") {
            json_debt();
        } elseif ($get_action == "jsoncredit") {
            json_credit();
        } elseif ($get_action == "jsoncase") {
            json_case();
        } elseif ($get_action == "jsonmemo") {
            json_memo();
        } elseif ($get_action == "jsonbanks") {
            json_banks();
        } elseif ($get_action == "jsoncontracts") {
            json_contracts();
        } elseif ($get_action == "jsonassets") {
            json_assets();
        } elseif ($get_action == "jsoncredits") {
            json_credits();
        }
    }
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $get_action = get_post("action");
        
        if ($get_action == "base") {
            save_base();
        } elseif ($get_action == "saveneed") {
            save_need();
        } elseif ($get_action == "savejob1") {
            save_job1();
        } elseif ($get_action == "savejob2") {
            save_job2();
        } elseif ($get_action == "saveincome1") {
            save_income1();
        } elseif ($get_action == "saveincome2") {
            save_income2();
        } elseif ($get_action == "saveincome3") {
            save_income3();
        } elseif ($get_action == "saveincome4") {
            save_income4();
        } elseif ($get_action == "saveincome5") {
            save_income5();
        } elseif ($get_action == "savehouse") {
            save_house();
        } elseif ($get_action == "savecar") {
            save_car();
        } elseif ($get_action == "savepark") {
            save_park();
        } elseif ($get_action == "savepolicy") {
            save_policy();
        } elseif ($get_action == "savedebt") {
            save_debt();
        } elseif ($get_action == "savecredit") {
            save_credit();
        } elseif ($get_action == "savecase") {
            save_case();
        } elseif ($get_action == "savememo") {
            save_memo();
        } elseif ($get_action == "savebanks") {
            save_banks();
        } elseif ($get_action == "savecontracts") {
            save_contracts();
        } elseif ($get_action == "saveassets") {
            save_assets();
        } elseif ($get_action == "savecredits") {
            save_credits();
        }
        
        if ($get_action == "addneed") {
            add_need();
        } elseif ($get_action == "addjob1") {
            add_job1();
        } elseif ($get_action == "addjob2") {
            add_job2();
        } elseif ($get_action == "addincome1") {
            add_income1();
        } elseif ($get_action == "addincome2") {
            add_income2();
        } elseif ($get_action == "addincome3") {
            add_income3();
        } elseif ($get_action == "addincome4") {
            add_income4();
        } elseif ($get_action == "addincome5") {
            add_income5();
        } elseif ($get_action == "addhouse") {
            add_house();
        } elseif ($get_action == "addcar") {
            add_car();
        } elseif ($get_action == "addpark") {
            add_park();
        } elseif ($get_action == "addpolicy") {
            add_policy();
        } elseif ($get_action == "adddebt") {
            add_debt();
        } elseif ($get_action == "addcredit") {
            add_credit();
        } elseif ($get_action == "addcase") {
            add_case();
        } elseif ($get_action == "addmemo") {
            add_memo();
        } elseif ($get_action == "addbanks") {
            add_banks();
        } elseif ($get_action == "addcontracts") {
            add_contracts();
        } elseif ($get_action == "addassets") {
            add_assets();
        } elseif ($get_action == "addcredits") {
            add_credits();
        } elseif ($get_action == "addservice") {
            add_service();
        } elseif ($get_action == "addfollow") {
            add_follow();
        } elseif ($get_action == "status") {
            cha_status();
        }
    }
    
    // 初始化数据
    initData();
    // 右侧模块
    initNeedData();
    initJobData();
    initIncomeData();
    initHouseData();
    initCarData();
    initParkData();
    initPolicyData();
    initDebtData();
    initCreditData();
    initCaseData();
    initMemoData();
    // 左侧模块
    initBanksData();
    initContractsData();
    initAssetsData();
    initCreditsData();
}

function cha_status()
{
    // 更改客户状态事件
    global $jobtitleid, $db, $get_id;
    
    $val_statusid = "";
    $val_id = $get_id;
    
    if (isset($_GET["statusid"])) {
        $val_statusid = $_GET["statusid"];
    } else {
        echo "你想干什么？";
        exit();
    }
    
    // 如果是总经理
    if ($jobtitleid == 1) {
        $sql = "update `customer` set `status`='$val_statusid'";
        if ($val_statusid == 0) {
            $sql = $sql . ",`attachid`='0', `attachid_dl`='0'";
        }
        $sql = $sql . " where `id`='$val_id'";
        $db->query($sql);
        
        updateStatusLog($val_id, $val_statusid, 0);
        
        if ($val_statusid == 0) {
            echo "<script>history.go(-1);window.close();</script>";
            exit();
        }
    }
    
    // 如果是客户部同事
    if (chk_login_dept(2) && $jobtitleid != 1) {
        $sql = "select `status`,`quality`,`certcode` from `customer` where `id`='$val_id' and `isdel`=0";
        $row = $db->get_row($sql);
        $val_status = $row->status;
        $val_quality = $row->quality;
        $val_certcode = $row->certcode;
        
        $sql = "update `customer` set `status`='$val_statusid'";
        if ($val_statusid == 0) {
            // 是否普通质量的客户
            if ($val_quality < 2) {
                // 该客户当天是否已有跟进记录
                $rs_date = $db->get_var("select `date` from `customer-follow` where `customerid`='$val_id' and `userid`='$userid' order by `id` desc limit 1");
                if ($rs_date != Date("Y-m-d")) {
                    echo "<script>alert('当天没有跟进记录，不能OPEN客户。');</script>";
                    echo "<script>location.replace('customer-detail.php?id=$val_id');</script>";
                    exit();
                }
            }
            
            $sql = $sql . ",`attachid`='0'";
            
            // 日志
            $logsSql = "insert into `logs` (`param1`,`param2`,`param3`,`message`,`update`) values ('2','$val_id','$userid','转出时间：" . Date("Y-m-d H:i:s") . "','" . Date("Y-m-d H:i:s") . "')";
            $db->query($logsSql);
            
            updateStatusLog($val_id, $val_statusid, $val_status);
        }
        
        // 转B类客户
        if ($val_statusid == 6) {
            if (strlen($val_certcode) != 18 && strlen($val_certcode) != 10) {
                echo "<script>alert('身份证未录入，客户状态不能转为B类');</script>";
                echo "<script>location.replace('customer-detail.php?id=$val_id');</script>";
                exit();
            }
        }
        
        if (($val_status <= 6 && $val_statusid <= 6) || ($val_status == 11 && $val_statusid == 12) || ($val_status == 12 && $val_statusid == 6) || (($val_status == 7 || $val_status == 9 || $val_status == 10) && $val_statusid == 2)) {
            $sql = $sql . " where `id`='$val_id'";
            $db->query($sql);
            
            updateStatusLog($val_id, $val_statusid, $val_status);
            
            if ($val_statusid == 0) {
                echo "<script>window.close();history.go(-1);</script>";
                exit();
            }
        } else {
            $msg = $msg . gen_alert("你选择的客户状态超出了客户部权限！");
        }
    }
    
    // 如果是渠道部同事
    if (chk_login_dept(3) && $jobtitleid != 1) {
        $nextstep = false;
        
        // 可直接转QX1
        if ($val_statusid == 7) {
            $sql = "update `customer` set `status`='$val_statusid' where `id`='$val_id'";
            $db->query($sql);
            updateStatusLog($val_id, $val_statusid, - 3);
        } else {
            // 判断是否有服务记录
            $sql = "select count(*) from `customer-service` where `customerid`='$val_id'";
            $rs1 = $db->get_var($sql);
            if ($rs1 > 0)
                $nextstep = true;
            
            if ($nextstep) {
                // $sql = "select `status` from `customer` where `id`='$val_id'";
                // $val_status = $db->get_var($sql);
                
                $sql = "update `customer` set `status`='$val_statusid' where `id`='$val_id'";
                
                if ($val_statusid >= 6 && $val_statusid <= 11) {
                    $db->query($sql);
                    updateStatusLog($val_id, $val_statusid, - 3);
                } else {
                    $msg = $msg . gen_alert("你选择的客户状态超出了渠道权限！");
                }
            } else {
                $msg = $msg . gen_alert("需要先添加至少 1 条服务记录才能更改客户状态！");
            }
        }
    }
}

function save_base()
{
    global $db, $get_id, $jobtitleid, $userid, $msg;
    
    chk_customer_detail_auth();
    
    $max_name = 10;
    
    // print_r($_POST);exit;
    $ipt["name"] = get_post("ipt-name");
    $ipt["sex"] = get_post("ipt-sex");
    $ipt["age"] = get_post("ipt-age");
    $ipt["hyin"] = get_post("ipt-hyin");
    $ipt["poxxi"] = get_post("ipt-poxxi");
    $ipt["baomi"] = get_post("ipt-baomi");
    $ipt["certcode"] = get_post("ipt-certcode");
    $ipt["sfzdzsheng"] = get_post("ipt-sfzdzsheng");
    $ipt["sfzdzshi"] = get_post("ipt-sfzdzshi");
    $ipt["sfzdzqu"] = get_post("ipt-sfzdzqu");
    $ipt["sfzdzhi"] = get_post("ipt-sfzdzhi");
    $ipt["sfzyxqi"] = get_post("ipt-sfzyxqi");
    $ipt["hxsheng"] = get_post("ipt-hxsheng");
    $ipt["hxshi"] = get_post("ipt-hxshi");
    $ipt["xzsheng"] = get_post("ipt-xzsheng");
    $ipt["xzshi"] = get_post("ipt-xzshi");
    $ipt["xzqu"] = get_post("ipt-xzqu");
    $ipt["znv"] = get_post("ipt-znv");
    $ipt["phone1"] = get_post("ipt-phone1");
    $ipt["phone2"] = get_post("ipt-phone2");
    $ipt["phone3"] = get_post("ipt-phone3");
    $ipt["phone4"] = get_post("ipt-phone4");
    $ipt["telq1"] = get_post("ipt-telq1");
    $ipt["telq2"] = get_post("ipt-telq2");
    $ipt["telq3"] = get_post("ipt-telq3");
    $ipt["telq4"] = get_post("ipt-telq4");
    $ipt["tel1"] = get_post("ipt-tel1");
    $ipt["tel2"] = get_post("ipt-tel2");
    $ipt["tel3"] = get_post("ipt-tel3");
    $ipt["tel4"] = get_post("ipt-tel4");
    
    // 检索姓名是否更改
    $sql = "select name, certcode from `customer` where `id`='$get_id' limit 1";
    $rs = $db->get_row($sql);
    $name = trim($rs->name);
    $certcode = trim($rs->certcode);
    // 姓名修改了，并且是客户部同事
    if ($name != $ipt["name"] && chk_login_dept(2) && $jobtitleid != 1) {
        // 检索今天这条7头修改客户名称的数量
        $sql = "select count(*) from `logs` where `param1`='5' and `param3`='$userid' and `param4`='' and `update`>'" . Date("Y-m-d") . "'";
        $cid = $db->get_var($sql);
        if ($cid > $max_name - 1) {
            echo "今天修改姓名的数量已经超出了 $max_name 个，修改失败！";
            exit();
        }
        // 检索这个客户是否已经修改过名称
        $sql = "select count(*) from `logs` where `param1`='5' and `param2`='$val_id' and `param4`=''";
        $cid = $db->get_var($sql);
        if ($cid > 0) {
            if ($certcode != $ipt["certcode"] && $cid > 1) {
                echo "该客户已经修改过姓名，不能再修改了";
                exit();
            } else {
                echo "该客户已经修改过姓名，不能再修改了";
                exit();
            }
        }
        
        $sql = "insert into `logs` (`param1`, `param2`, `param3`, `message`, `update`) values
                               ('5', '$val_id', '$userid', '$name -> $val_name', '" . Date("Y-m-d H:i:s") . "')";
        $db->query($sql);
    }
    // 姓名修改了，并且是渠道部同事
    if ($name != $ipt["name"] && chk_login_dept(3) && $jobtitleid != 1) {
        // 检索这个客户是否已经修改过名称
        $sql = "select count(*) from `logs` where `param1`='5' and `param2`='$val_id' and `param4`='3'";
        $cid = $db->get_var($sql);
        if ($cid > 0) {
            echo "该客户已经修改过姓名，不能再修改了";
            exit();
        }
        
        $sql = "insert into `logs` (`param1`, `param2`, `param3`, `param4`, `message`, `update`) values
                               ('5', '$val_id', '$userid', '3', '$name -> $val_name', '" . Date("Y-m-d H:i:s") . "')";
        $db->query($sql);
    }
    
    $sql = "update `customer` set ";
    $sql .= "`name` = '" . $ipt["name"] . "',";
    $sql .= "`sex` = '" . $ipt["sex"] . "',";
    $sql .= "`age` = '" . $ipt["age"] . "',";
    $sql .= "`hyin` = '" . $ipt["hyin"] . "',";
    $sql .= "`poxxi` = '" . $ipt["poxxi"] . "',";
    $sql .= "`baomi` = '" . $ipt["baomi"] . "',";
    if ($ipt["certcode"] != "" && ! strpos($ipt["certcode"], "*"))
        $sql .= "`certcode` = '" . $ipt["certcode"] . "',";
    $sql .= "`sfzdzsheng` = '" . $ipt["sfzdzsheng"] . "',";
    $sql .= "`sfzdzshi` = '" . $ipt["sfzdzshi"] . "',";
    $sql .= "`sfzdzqu` = '" . $ipt["sfzdzqu"] . "',";
    $sql .= "`sfzdzhi` = '" . $ipt["sfzdzhi"] . "',";
    $sql .= "`sfzyxqi` = '" . $ipt["sfzyxqi"] . "',";
    $sql .= "`hxsheng` = '" . $ipt["hxsheng"] . "',";
    $sql .= "`hxshi` = '" . $ipt["hxshi"] . "',";
    $sql .= "`xzsheng` = '" . $ipt["xzsheng"] . "',";
    $sql .= "`xzshi` = '" . $ipt["xzshi"] . "',";
    $sql .= "`xzqu` = '" . $ipt["xzqu"] . "',";
    $sql .= "`znv` = '" . $ipt["znv"] . "',";
    $sql .= "`phone1` = '" . $ipt["phone1"] . "',";
    $sql .= "`phone2` = '" . $ipt["phone2"] . "',";
    $sql .= "`phone3` = '" . $ipt["phone3"] . "',";
    $sql .= "`phone4` = '" . $ipt["phone4"] . "',";
    $sql .= "`telq1` = '" . $ipt["telq1"] . "',";
    $sql .= "`telq2` = '" . $ipt["telq2"] . "',";
    $sql .= "`telq3` = '" . $ipt["telq3"] . "',";
    $sql .= "`telq4` = '" . $ipt["telq4"] . "',";
    $sql .= "`tel1` = '" . $ipt["tel1"] . "',";
    $sql .= "`tel2` = '" . $ipt["tel2"] . "',";
    $sql .= "`tel3` = '" . $ipt["tel3"] . "',";
    // if (chk_auth_jobtitle(2)) $sql .= "`attachid_dl`='$val_attachid_dl',";
    $sql .= "`tel4` = '" . $ipt["tel4"] . "'";
    $sql .= "where `id`='$get_id'";
    
    if ($db->query($sql)) {
        $msg .= gen_alert("保存成功！");
    } else {
        $msg .= gen_alert("保存失败！");
    }
}
// save_base() end
function add_service()
{
    global $db, $get_id, $jobtitleid, $userid, $msg;
    
    chk_customer_detail_auth();
    
    $ipt["cdate"] = date("Y-m-d");
    $ipt["jigou"] = get_post("ipt-jigou");
    $ipt["gongsi"] = get_post("ipt-gongsi");
    $ipt["fangkuan"] = get_post("ipt-fangkuan");
    $ipt["caozuochanpin"] = get_post("ipt-caozuochanpin");
    $ipt["sqmoney"] = get_post("ipt-sqmoney");
    $ipt["sqdate"] = get_post("ipt-sqdate");
    
    // 查询该客户的attachid
    $sql = "select * from `customer` where `id`='$get_id' limit 1";
    $rs = $db->get_row($sql);
    $ipt["attach"] = $rs->attachid;
    $ipt["attach_dl"] = $rs->attachid_dl;
    
    // 检查身份证内地或香港
    if (strlen($rs->certcode) != 18 && strlen($rs->certcode) != 10) {
        echo "<script>alert('身份证号未填写，请先补充，再添加服务');</script>";
        echo "<script>history.go(-1);</script>";
        exit();
    }
    
    $sql = "insert into `customer-service` (`customerid`, `attachid`, `attachid_dl`, `cdate`, `jigou`, `gongsi`, `fangkuan`, `caozuochanpin`, `sqmoney`, `sqdate`, `userid`) values ";
    $sql = $sql . "('$get_id','" . $ipt["attach"] . "','" . $ipt["attach_dl"] . "','" . $ipt["cdate"] . "','" . $ipt["jigou"] . "','" . $ipt["gongsi"] . "','" . $ipt["fangkuan"] . "','" . $ipt["caozuochanpin"] . "','" . $ipt["sqmoney"] . "','" . $ipt["sqdate"] . "','$userid')";
    // echo $sql;exit;
    $rs = $db->query($sql);
    
    if ($rs) {} else {
        echo "杯具拉！";
        exit();
    }
}
// add_service() end
function add_follow()
{
    global $db, $get_id, $jobtitleid, $userid, $msg;
    
    chk_customer_detail_auth();
    
    $ipt["type"] = get_post("ipt-type", 1);
    $ipt["way"] = get_post("ipt-way");
    $ipt["date"] = get_post("ipt-date") == "" ? date("Y-m-d") : get_post("ipt-date");
    $ipt["time"] = get_post("ipt-time") == "" ? date("H:i:s") : get_post("ipt-time");
    $ipt["userid"] = $userid;
    $ipt["memo"] = get_post("ipt-memo");
    
    if ($ipt["memo"] == "") {
        echo "<script>alert('填写内容不完整！');</script>";
        echo "<script>history.go(-1);</script>";
        exit();
    }
    
    // 查询该客户的attachid_dl
    $sql = "select * from `customer` where `id`='$get_id' limit 1";
    $rs = $db->get_row($sql);
    $ipt["attachid_dl"] = $rs->attachid_dl;
    
    $sql = "update `customer` set `lastfllow`='" . Date("Y-m-d") . "', `isfollow`=true where `id`='$get_id'";
    $db->query($sql);
    
    $sql = "insert into `customer-follow` (`customerid`,`date`,`time`,`userid`,`attachid_dl`,`way`,`type`,`memo`) values ";
    $sql .= "('$get_id','" . $ipt["date"] . "','" . $ipt["time"] . "','" . $ipt["userid"] . "','" . $ipt["attachid_dl"] . "','" . $ipt["way"] . "','" . $ipt["type"] . "','" . $ipt["memo"] . "')";
    // echo $sql;exit;
    $rs = $db->query($sql);
    
    if ($rs) {} else {
        echo "杯具拉！";
    }
}

function initData()
{
    global $db, $jobtitleid, $userid, $html, $input, $get_id, $cu_type, $cu_quality, $cu_jobkind;
    
    $where = "";
    if ($jobtitleid == 1) {
        // 总经理
        $where = $where . " and `attachid`>0 and `status`>0";
    } else 
        if (chk_login_dept(2)) {
            // 销售
            $where = $where . " and `attachid` in (" . get_user_rel($jobtitleid) . ")";
        } else 
            if (chk_login_dept(3)) {
                // 渠道
                $where = $where . " and `status` in (6,7,8,9,10,11,12)";
            }
    
    $sql = "select * from `customer` where isdel=0 and `id`='$get_id'" . $where . " limit 1";
    $rs = $db->get_row($sql);
    if (! $rs) {
        echo "你想干什么？";
        exit();
    }
    
    // 是否代理人的客户
    $html["attachid_dl"] = "";
    if (chk_auth_jobtitle(2) && $rs->attachid_dl > 0) {
        $html["attachid_dl"] = echo_byid($rs->attachid_dl, "users-dl", "cname");
    }
    
    // 套搜索条件
    $search_name = isset($_SESSION["search-name"]) ? $_SESSION["search-name"] : "";
    $search_phone = isset($_SESSION["search-phone"]) ? $_SESSION["search-phone"] : "";
    $search_certcode = isset($_SESSION["search-certcode"]) ? $_SESSION["search-certcode"] : "";
    $search_status = isset($_SESSION["search-status"]) ? $_SESSION["search-status"] : "";
    $search_keyword = isset($_SESSION["search-keyword"]) ? $_SESSION["search-keyword"] : "";
    
    // 有关键字
    $keyword = "";
    if (strlen($search_keyword) > 1) {
        $sql = "select `customerid` from `customer-follow`
            join `customer` on `customer`.`id` = `customer-follow`.`customerid`
            where `customer-follow`.`memo` like '%$search_keyword%'";
        if ($jobtitleid != 1) {
            $sql = $sql . " and `customer`.`attachid`='$userid'";
        }
        $sql = $sql . " group by `customerid`";
        $rstmp = $db->get_results($sql);
        
        $where = $where . " and (`fang` like '%$search_keyword%'
                      or `che` like '%$search_keyword%'
                      or `company` like '%$search_keyword%'
                      or `gongzi` like '%$search_keyword%'
                      or `sbgjjin` like '%$search_keyword%'
                      or `baodan` like '%$search_keyword%'
                      or `fuzhai` like '%$search_keyword%'
                      or `zhengxin` like '%$search_keyword%'
                      or `qita` like '%$search_keyword%'";
        if ($rstmp) {
            foreach ($rstmp as $item) {
                $keyword = "," . $item->customerid;
            }
            $keyword = substr($keyword, 1);
            $where = $where . " or `id` in ($keyword)";
        }
        $where = $where . ")";
    }
    
    if (strlen($search_name) >= 2) {
        $where = $where . " and `name` like '$search_name%'";
    }
    $where = $search_phone === "" ? $where : $where . " and `phone` like '$search_phone%'";
    $where = $search_certcode === "" ? $where : $where . " and `certcode` like '$search_certcode%'";
    $where = $search_status === "" ? $where : $where . " and `status` = '$search_status'";
    
    if ($jobtitleid == 1) {
        $search_attach = isset($_SESSION["search-attach"]) ? $_SESSION["search-attach"] : array();
        $search_attachs = "-1";
        if (count($search_attach) > 0) {
            foreach ($search_attach as $item) {
                $search_attachs = $search_attachs . "," . $item;
            }
            $where = $where . " and `attachid` in ($search_attachs)";
        }
    }
    // 有关键字 end
    
    // 计算上一条数据
    $html["pervid"] = 0;
    $html["nextid"] = 0;
    $sql = "select * from customer where `isdel`=0" . $where . " order by `lastfllow`";
    
    // echo $sql;
    // $tmpRs = $db->get_results($sql);
    // for ($n=0; $n<count($tmpRs)-1; $n++) {
    // if ($tmpRs[$n]->id == $get_id)
    // break;
    // $html["pervid"] = $tmpRs[$n]->id;
    // }
    // //计算下一条数据
    // for ($n=count($tmpRs)-1; $n>=0; $n--) {
    // if ($tmpRs[$n]->id == $get_id)
    // break;
    // $html["nextid"] = $tmpRs[$n]->id;
    // }
    
    $sql = "select (
              select id from customer where `isdel`=0" . $where . " and id<'$get_id' and
              lastfllow <= (select lastfllow from customer where id = '$get_id') limit 1) as previd,
              (select id from customer where `isdel`=0" . $where . " and id>'$get_id' and
              lastfllow >= (select lastfllow from customer where id = '$get_id') limit 1) as nextid";
    $ret = $db->get_row($sql);
    
    if (! empty($ret->previd)) {
        $html['previd'] = $ret->previd;
    }
    if (! empty($ret->nextid)) {
        $html['nextid'] = $ret->nextid;
    }
    
    if ($rs->jobkind == "")
        $rs->jobkind = 0;
    
    if ($rs->sex > 0 && $jobtitleid != 1)
        $readonly_sex = "disabled";
    
    if ((strlen($rs->certcode) == 18 || strlen($rs->certcode) == 10) && $jobtitleid != 1) {
        $readonly_certcode = "readonly";
    }
    
    // 销售必填字段齐了么？
    if (chk_login_dept(2) && $jobtitleid != 1) {
        if ($rs->sex != 0 && $rs->jobkind != 0 && $rs->fang != "" && $rs->che != "" && $rs->gongzi != "" && $rs->sbgjjin != "" && $rs->baodan != "" && ($rs->age != "" || strlen($rs->certcode) == 18 || strlen($rs->certcode) == 10)) {
            $hidden_fllow = "";
        }
    }
    
    // 销售功能激活
    if (chk_login_dept(2) && $jobtitleid != 1) {
        // 是本人的客户
        if ($rs->attachid == $userid) {
            $hidden_edit = "";
        }
    }
    
    // 渠道功能激活
    if (chk_login_dept(3) && $jobtitleid != 1) {
        $hidden_fllow = "";
        $hidden_fuwu = "";
    }
    
    if (chk_auth_jobtitle(2)) {
        $hidden_dlren = "";
    }
    
    // 总经理功能激活
    if ($jobtitleid == 1) {
        $hidden_edit = "";
        $hidden_fuwu = "";
        $hidden_fllow = "";
    }
    
    // 转入转出日志
    $sql = "select * from `logs` where `param2`='$rs->id' and `param1` in ('1','2','3') order by `id` desc limit 1";
    $rs1 = $db->get_results($sql);
    $logsMsg = "";
    if ($rs1) {
        foreach ($rs1 as $item) {
            $logsMsg = str_replace("转入时间：", "", $item->message);
        }
    }
    
    $html["attach"] = echo_byid($rs->attachid, "users", "cname"); // 销售名称
    $html["opt_status"] = gen_opt_byarray($rs->status, $cu_type); // 客户状态
    $html["quality"] = $cu_quality[$rs->quality]; // 客户质量
    $html["from"] = $rs->from; // 数据来源
    $html["inputdate"] = date("Y-m-d", strtotime($logsMsg)); // 转入日期
    $html["inputtime"] = date("H:i:s", strtotime($logsMsg)); // 转入时间
    $html["cdate"] = date("Y年n月j日", strtotime($rs->cdate)); // 创建日期
    $html["name"] = $rs->name; // 客户名称
    $html["sex"] = $rs->sex == 1 ? "women-icon" : "man-icon"; // 性别
    $input["sex"] = $rs->sex;
    $html["phone"] = $rs->phone; // 电话
    $html["phone_dict"] = echo_phone_dict($rs->phone); // 电话区域
    $html["age"] = strlen($rs->certcode) != 18 ? $rs->age : echo_agebyid($rs->certcode); // 年龄
    $html["hyin"] = $rs->hyin; // 婚姻状况
    $html["poxxi"] = $rs->poxxi; // 配偶ID
    $html["baomi"] = $rs->baomi; // 保密
    $html["xzinfo"] = $rs->xzsheng . $rs->xzshi . $rs->xzqu; // 现居住地
    $input["xzsheng"] = $rs->xzsheng;
    $input["xzshi"] = $rs->xzshi;
    $input["xzqu"] = $rs->xzqu;
    $html["znv"] = $rs->znv == 1 ? "有" : "无"; // 有否子女
    $input["znv"] = $rs->znv;
    $html["hxinfo"] = $rs->hxsheng . $rs->hxshi; // 户籍地
    $input["hxsheng"] = $rs->hxsheng;
    $input["hxshi"] = $rs->hxshi;
    $html["certcode"] = $rs->certcode; // 身份证
    $input["sfzyxqi"] = $rs->sfzyxqi == "0000-00-00" ? "" : $rs->sfzyxqi; // 身份证有效期
    $html["sfzyxqi"] = $input["sfzyxqi"] == "" ? "" : date("Y年n月j日", strtotime($rs->sfzyxqi));
    $html["sfzdzinfo"] = $rs->sfzdzsheng . $rs->sfzdzshi . $rs->sfzdzqu . $rs->sfzdzhi; // 身份证地址
    $input["sfzdzsheng"] = $rs->sfzdzsheng;
    $input["sfzdzshi"] = $rs->sfzdzshi;
    $input["sfzdzqu"] = $rs->sfzdzqu;
    $input["sfzdzhi"] = $rs->sfzdzhi;
    // 副手机号
    $input["phone1"] = $rs->phone1;
    $input["phone2"] = $rs->phone2;
    $input["phone3"] = $rs->phone3;
    $input["phone4"] = $rs->phone4;
    $html["phone1"] = echo_phone($rs->phone1);
    $html["phone2"] = echo_phone($rs->phone2);
    $html["phone3"] = echo_phone($rs->phone3);
    $html["phone4"] = echo_phone($rs->phone4);
    $html["phone1_dict"] = echo_phone_dict($rs->phone1);
    $html["phone2_dict"] = echo_phone_dict($rs->phone2);
    $html["phone3_dict"] = echo_phone_dict($rs->phone3);
    $html["phone4_dict"] = echo_phone_dict($rs->phone4);
    // 固定电话
    $input["telq1"] = $rs->telq1;
    $input["telq2"] = $rs->telq2;
    $input["telq3"] = $rs->telq3;
    $input["telq4"] = $rs->telq4;
    $input["tel1"] = $rs->tel1;
    $input["tel2"] = $rs->tel2;
    $input["tel3"] = $rs->tel3;
    $input["tel4"] = $rs->tel4;
    $html["tel1"] = $rs->telq1 . "-" . $rs->tel1;
    $html["tel2"] = $rs->telq2 . "-" . $rs->tel2;
    $html["tel3"] = $rs->telq3 . "-" . $rs->tel3;
    $html["tel4"] = $rs->telq4 . "-" . $rs->tel4;
    
    // 如果是销售且不是本人，手机号加星
    if (chk_login_dept(2) && $rs->attachid != $userid) {
        $html["phone"] = echo_phone($html["phone"]);
    } else {
        $html["phone"] = echo_phone2($html["phone"]);
    }
    // 如果是渠道部，手机号身份证加星
    if (chk_login_dept(3) && $jobtitleid != 1) {
        if ($rs->status == 12) {
            // 客户状态是V
            $html["phone"] = "***";
            $html["certcode"] = "***";
        } elseif ($rs->status >= 6) {
            $sql = "select count(*) from `customer-service` where `isdel`='0' and `customerid`='$rs->id' and `userid`='$userid'";
            $rs_count = $db->get_var($sql);
            if ($rs_count == 0) {
                // 客户状态是B类之后，本人未添加服务
                $html["phone"] = "***";
                $html["certcode"] = "***";
            } else {
                // 超出1个月没跟进记录
                $sql = "select `date` from `customer-follow` where `customerid`='$rs->id' and `userid`='$userid' order by `id` desc limit 1";
                $rs_date = strtotime($db->get_var($sql));
                if ($rs_date != "") {
                    $today = strtotime(Date("Y-m-d"));
                    $day30 = 24 * 60 * 60 * 30;
                    if ($today - $rs_date > $day30) {
                        $html["phone"] = "***";
                        $html["certcode"] = "***";
                    }
                }
            }
        }
    }
     $html["json"]["allphone"] = json_encode(array(
           "phone" => array($html["phone"],$html["phone_dict"]),
           "phone1" => array($html["phone1"],$html["phone1_dict"]),
           "phone2" => array($html["phone2"],$html["phone2_dict"]),
           "phone3" => array($html["phone3"],$html["phone3_dict"]),
           "phone4" => array($html["phone4"],$html["phone4_dict"]),
           "tel1" => $html["tel1"],
           "tel2" => $html["tel2"],
           "tel3" => $html["tel3"],
           "tel4" => $html["tel4"]
       ));

    
    // 跟进记录
    $html["datalist2"] = array();
    
    $sql = "select * from `customer-follow` where `customerid`='$rs->id' order by `id` desc limit 20";
    $rs1 = $db->get_results($sql);
    if ($rs1) {
        foreach ($rs1 as $item) {
            $obj = array();
            
            $obj["type"] = $item->type;
            $obj["way"] = $item->way;
            $obj["date"] = $item->date;
            $obj["time"] = $item->time;
            // 是否代理人跟进
            if (chk_auth_jobtitle(2) && $item->attachid_dl > 0 && isXXjobtitle($item->userid, 2)) {
                $obj["attach"] = "代理人-" . echo_byid($item->attachid_dl, "users-dl", "cname");
            } else {
                $obj["attach"] = echo_byid($item->userid, "users", "cname");
            }
            // 是否渠道部跟进
            if (chk_user_dept($item->userid, 3)) {
                $obj["type"] = 4;
            }
            $obj["memo"] = $item->memo;
            $html["datalist2"][] = $obj;
        }
        $html["datalist2"] = json_encode($html["datalist2"]);
        // print_r($html["datalist2"]);exit;
    } else {
        $html["datalist2"] = '[]';
    }
    // 跟进记录结束
    
    // 服务记录
    $html["datalist1"] = array();
    
    $sql = "select * from `customer-service` where `isdel`='0' and `customerid`='$rs->id'";
    $rs1 = $db->get_results($sql);
    if ($rs1) {
        foreach ($rs1 as $item) {
            $obj = array();
            
            // $cstabledata = $cstabledata."<td><div style=\"position:relative;cursor:pointer;\" onclick=\"window.open('customer-mod-service.php?id=$item->id','popup')\">";
            $obj["id"] = $item->id;
            $obj["status"] = $item->status;
            if ($item->status == 1) {
                // $cstabledata = $cstabledata."<div class=\"divFk divFkRed\">不</div>";
            } elseif ($item->status == 2) {
                // $cstabledata = $cstabledata."<div class=\"divFk divFkRed\">弃</div>";
            } elseif ($item->status == 3) {
                // $cstabledata = $cstabledata."<div class=\"divFk divFkRed\">拒</div>";
            } elseif ($item->status == 4) {
                // $cstabledata = $cstabledata."<div class=\"divFk\">批</div>";
            } elseif ($item->status == 5) {
                // $cstabledata = $cstabledata."<div class=\"divFk\">放</div>";
            } elseif ($item->fkmoney > 0) {
                // $cstabledata = $cstabledata."<div class=\"divFk\">放</div>";
                $obj["status"] = 5;
            } elseif ($item->fkdate != "0000-00-00") {
                // $cstabledata = $cstabledata."<div class=\"divFk divFkRed\">拒</div>";
                $obj["status"] = 3;
            } else {
                // $cstabledata = $cstabledata."<div class=\"divFk\">审</div>";
                $obj["status"] = 0;
            }
            
            $obj["user"] = echo_byid($item->userid, 'users', 'cname');
            if ($item->jigou == 1) {
                if (chk_login_dept(3)) {
                    $obj["gongsi"] = echo_byid($item->gongsi, 'product', 'name');
                    $obj["fangkuan"] = echo_byid($item->fangkuan, 'product', 'name');
                    $obj["caozuochanpin"] = echo_byid($item->caozuochanpin, 'product', 'name');
                    if ($item->sqmoney > 0) {
                        $obj["sqmoney"] = $item->sqmoney;
                        $obj["sqdate"] = Date("Y年m月d日", strtotime($item->sqdate));
                    }
                    if ($item->fkmoney > 0) {
                        $obj["fkmoney"] = $item->fkmoney;
                        $obj["fkdate"] = Date("Y年m月d日", strtotime($item->fkdate));
                    }
                    if ($item->fwmoney > 0) {
                        $obj["fwmoney"] = $item->fwmoney;
                        $obj["dkdate"] = Date("Y年m月d日", strtotime($item->dkdate));
                    }
                    if ($item->fdmoney > 0) {
                        $obj["fdmoney"] = $item->fdmoney;
                        $obj["fddate"] = Date("Y年m月d日", strtotime($item->fddate));
                    }
                    if ($item->txmoney > 0) {
                        $obj["txmoney"] = $item->txmoney;
                        $obj["txdate_start"] = Date("Y年m月d日", strtotime($item->txdate_start));
                        $obj["txdate_end"] = Date("Y年m月d日", strtotime($item->txdate_end));
                    }
                } elseif (chk_login_dept(2)) {
                    $obj["gongsi"] = echo_byid($item->gongsi, 'product', 'name');
                    $obj["fangkuan"] = echo_byid($item->fangkuan, 'product', 'name');
                    $obj["caozuochanpin"] = echo_byid($item->caozuochanpin, 'product', 'name');
                    if ($item->sqmoney > 0) {
                        $obj["sqmoney"] = $item->sqmoney;
                        $obj["sqdate"] = Date("Y年m月d日", strtotime($item->sqdate));
                    }
                    if ($item->fkmoney > 0) {
                        $obj["fkmoney"] = $item->fkmoney;
                        $obj["fkdate"] = Date("Y年m月d日", strtotime($item->fkdate));
                    }
                    if ($item->fwmoney > 0) {
                        $obj["fwmoney"] = $item->fwmoney;
                        $obj["dkdate"] = Date("Y年m月d日", strtotime($item->dkdate));
                    }
                    if ($item->txmoney > 0) {
                        $obj["txmoney"] = $item->txmoney;
                        $obj["txdate_start"] = Date("Y年m月d日", strtotime($item->txdate_start));
                        $obj["txdate_end"] = Date("Y年m月d日", strtotime($item->txdate_end));
                    }
                }
            } elseif ($item->jigou == 2 || $item->jigou == 318) { // 小贷或私贷
                if (chk_login_dept(3)) {
                    $obj["jigou"] = echo_byid($item->jigou, 'product', 'name');
                    $obj["fangkuan"] = echo_byid($item->fangkuan, 'product', 'name');
                    $obj["caozuochanpin"] = echo_byid($item->caozuochanpin, 'product', 'name');
                    if ($item->sqmoney > 0) {
                        $obj["sqmoney"] = $item->sqmoney;
                        $obj["sqdate"] = Date("Y年m月d日", strtotime($item->sqdate));
                    }
                    if ($item->fkmoney > 0) {
                        $obj["fkmoney"] = $item->fkmoney;
                        $obj["fkdate"] = Date("Y年m月d日", strtotime($item->fkdate));
                    }
                    if ($item->fwmoney > 0) {
                        $obj["fwmoney"] = $item->fwmoney;
                        $obj["dkdate"] = Date("Y年m月d日", strtotime($item->dkdate));
                    }
                    if ($item->fdmoney > 0) {
                        $obj["fdmoney"] = $item->fdmoney;
                        $obj["fddate"] = Date("Y年m月d日", strtotime($item->fddate));
                    }
                } elseif (chk_login_dept(2)) {
                    $obj["jigou"] = echo_byid($item->jigou, 'product', 'name');
                    $obj["caozuochanpin"] = echo_byid($item->caozuochanpin, 'product', 'name');
                    if ($item->sqmoney > 0) {
                        $obj["sqmoney"] = $item->sqmoney;
                        $obj["sqdate"] = Date("Y年m月d日", strtotime($item->sqdate));
                    }
                    if ($item->fkmoney > 0) {
                        $obj["fkmoney"] = $item->fkmoney;
                        $obj["fkdate"] = Date("Y年m月d日", strtotime($item->fkdate));
                    }
                    if ($item->fwmoney > 0) {
                        $obj["fwmoney"] = $item->fwmoney;
                        $obj["dkdate"] = Date("Y年m月d日", strtotime($item->dkdate));
                    }
                }
            }
            
            $html["datalist1"][] = $obj;
        }
        $html["datalist1"] = json_encode($html["datalist1"]);
        // echo $html["datalist1"];exit;
    }
    // 服务记录结束
    
    // 模块数据开始
    $html["m"] = array();
}
// initdate() end
function chk_customer_detail_auth()
{
    global $db, $jobtitleid, $userid, $get_id;
    
    $where = "";
    if ($jobtitleid == 1) {
        // 总经理
        $where = $where . " and `attachid`>0 and `status`>0";
    } else 
        if (chk_login_dept(2)) {
            // 销售
            $where = $where . " and `attachid` in (" . get_user_rel($jobtitleid) . ")";
        } else 
            if (chk_login_dept(3)) {
                // 渠道
                $where = $where . " and `status` in (6,7,8,9,10,11,12)";
            }
    
    $sql = "select * from `customer` where isdel=0 and `id`='$get_id'" . $where . " limit 1";
    $rs = $db->get_row($sql);
    if (! $rs) {
        echo "你想干什么？";
        exit();
    }
}

function updateStatusLog($id, $newStatus, $oldStatus)
{
    // 更新客户状态日志
    global $db;
    
    $sql = "insert into `logs` (`param1`, `param2`, `param3`, `param4`, `update`) values ";
    $sql = $sql . "('7', '$id', '$newStatus', '$oldStatus', '" . Date("Y-m-d H:i:s") . "')";
    $db->query($sql);
}

if ($jobtitleid == 31 || $jobtitleid == 32) {
    include ('html/customer-detail-sales-assistant.html');
} else {
    include ('html/customer-detail.html');
}
?>