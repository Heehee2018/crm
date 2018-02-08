/*
* 绑定分机号
* */
var etPsLoginBool=false;
var etPaTimer=null,etPaTimers=1,etPaTimers_=1,etPtFlashObj=null;

var etPsIP='192.168.1.9',etPsPort='9099';

//启动LazyPhone服务
//Timer 轮循处理
function etFsLoginServer(){
    etPaTimers_=2;etPtFlashObj=setInterval(function(){getFlashMsg()},1500);
    if (etPaTimers>=30)if (etPtFlashObj!=null)clearInterval(etPtFlashObj);
}

function getFlashMsg(){
    if (etPsFlashObj==null){
        etPsFlashObj=etFsThisMovie("etEsSocketFlash");
        if (etPaTimers>=30)clearInterval(etPtFlashObj);
        etPaTimers++;
        return
    }
    clearInterval(etPtFlashObj);
    if (etPoIsFlash)setTimeout(function(){etFopen()},50);
}
/*打开服务端链接*/
function etFopen(){
    if (!etPoIsFlash){
        try{
            etPaTimers=1;clearInterval(etPtFlashObj);
        }catch(ex){}
        if (etPaTimers_==1)etFsLoginServer();//启用轮循

        console.log("接口初始化失败");

        return;
    };
    if (!$.isNumeric(etPsPort))etPsPort='9099';
    if (etPsIP.split('.').length!=3&&(!$.isNumeric(etPsIP.replace(/\./g,''))))etPsIP='127.0.0.1';
    etOlazyPhonePost.onConnect([etPsPort,etPsIP]);
}


/*链接成功回调事件*/
function etFsSocketOnConnect(i){
    switch (i){
        case true:
            console.log('已链接服务器,等待分配注册');
            etPsLoginBool=true;
            etOlazyPhonePost.setPBX([etPmyPort,etPmyExt]);
            //$("#etEsStateShow img:eq(0)").attr({'src':'Img/ooopic_1374023714.png','title':'服务链接状态：链接'});
            break;
        default:
            console.log('链接失败');
            alert('链接服务器失败,目前尚无法拨通电话，请通知后台人员查看端口是否断开');
            etPsLoginBool=false;
            //$("#etEsStateShow img:eq(0)").attr({'src':'Img/ooopic_1374023734.png','title':'服务链接状态：断开'});
            break;
    }
}

//拨号
//@Param  电话号码
function etFsDialNo(i){
    /*if (!etPsLoginBool||!etPoIsFlash){
        console.log("服务未注册");
        alert('拨号服务尚未初始化成功，请稍候重试');
        return
    }*/
    //if (!$.isNumeric(i)){alert('号码有误');return}
    //if(etOlazyPhonePost.portState(etPmyPort)==){}
    etOlazyPhonePost.hangOn(); //摘机
    etOlazyPhonePost.dial(i);
}
//进入通话连接  回调事件
function etFcOnPBXConnected(obj){
    /*switch(obj[0]){
        case 0:
            console.log("通话中,关联端口："+obj[2]+" 号码："+obj[1]+",呼入");
            break;
        default:
            console.log("通话中,关联端口："+obj[2]+" 号码:"+obj[1]+",呼出");
            break;
    }*/
    console.log(obj);
}

/*function etFsSocketOnData(etKsT){
    console.log('etKsT',etKsT);
}*/

function etFcOnPBXDivertUpdate(obj){
    console.log('话机当前：振铃');

}

function etFcOnPBXIdle(){
    console.log('话机当前：挂断');


}

function etFcOnPBXHurryup(){
    console.log('话机当前：线路忙');

}

function etFcOnPBXDial(){
    console.log('话机当前：摘机');
}







