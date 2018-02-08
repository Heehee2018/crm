$(function(){
	$("body").has("#etEhideVal_com") .length?"":$("body").append('<input type="hidden" id="etEhideVal_com" value=""/>');
	$("body").has("#etEflashContent").length?"":$("body").append('<div id="etEflashContent"></div>');
	etFcreateFlash();
	setTimeout(function(){etPsFlashObj = etFsThisMovie("etEsSocketFlash")},50)
});
var etPoIsFlash=false,etOlazyPhonePost={
	sendSMS:function(i)
	{
	var etKoJ='{"MsgName":"sendSMS","TelNos":"'+i[0]+'","Body":"'+i[1]+'"}';
	etFsendMsg_Event(etKoJ);
	},
	setPBX:function(i)
	{
	if (i.length<3)i.push(0);
	var etKoJ='{"MsgName":"PBX_Ctrl","Command":"SetPBX","PBXID":'+i[0]+',"Ext":"'+i[1]+'","isAllPhoneStates":'+i[2]+'}';
	etFsendMsg_Event(etKoJ);
	},
	getPortDatas : function(i) {
		var etKoJ = '{"MsgName":"PBX_Ctrl","Command":"getPortDatas","vPorts":"' + i + '"}';
		etFsendMsg_Event(etKoJ);
	},
	portState:function(i)
	{
	var etKoJ='{"MsgName":"PBX_Ctrl","Command":"getPortStates","vPorts":"'+i+'"}';
	etFsendMsg_Event(etKoJ);
	},
	loginInfo:function()
	{
	var etKoJ='{"MsgName":"PBX_Ctrl","Command":"getLoginInfo"}';
	etFsendMsg_Event(etKoJ);
	},
	dial:function(i)
	{
	if(!$.isArray(i))i=[i,1,1];
	if(i.lenght<3)return;
	var etKoJ='{"MsgName":"PBX_Ctrl","Command":"Dial","isShowWindow":'+($.isNumeric(i[1])?i[1]:0)+',"isHangOff":'+($.isNumeric(i[2])?i[2]:0)+',"TelNos":"'+i[0]+'"}';
	etFsendMsg_Event(etKoJ);
	},
	shifts:function(i)
	{
	this.holdOn();
	setTimeout(this.dial("**"+i),500);
	},
	pickup:function(i)
	{
	this.dial("*1");
	setTimeout(this.dial(i),50);
	},
	override:function(i)
	{
	this.dial(i)
	setTimeout(this.dial("*6"),500);
	},
	demolitions:function(i)
	{
	this.dial(i)
	setTimeout(this.dial("*7"),500);
	},
	monitor:function(i)
	{
	this.dial(i)
	setTimeout(this.dial("#6"),500);
	},
	hangOff:function()
	{
	var etKoJ='{"MsgName":"PBX_Ctrl","Command":"HangOn"}';
	etFsendMsg_Event(etKoJ);
	},
	hangOn:function()
	{
	var etKoJ='{"MsgName":"PBX_Ctrl","Command":"HangOff"}';
	etFsendMsg_Event(etKoJ);
	},
	holdOn:function()
	{
	var etKoJ='{"MsgName":"PBX_Ctrl","Command":"Hold"}';
	etFsendMsg_Event(etKoJ);
	},
	noDisturb:function(i)
	{
	var etKoJ='{"MsgName":"PBX_Ctrl","Command":"NoDisturb","Flag":'+($.isNumeric(i)?i:0)+'}';
	etFsendMsg_Event(etKoJ);
	},
	saveExt:function(i){
	if(!$.isArray(i))return;
	etPsFlashObj.SetVariable('etKsExtPort', i[0]);
	etPsFlashObj.SetVariable('etKsExtNumber', i[1]);
	try{setTimeout(function(){etPsFlashObj.etFsSaveExtSetting()},100)}catch(ex){if (console)console.info("本地分机保存失败,"+ex)};
	},
	onConnect:function(i){
	if(!$.isArray(i))return;
	etPsFlashObj.SetVariable('etKsHost', i[1]);
	etPsFlashObj.SetVariable('etKsPort', i[0]);
	try{setTimeout(function(){etPsFlashObj.etFsOpen()},1000)}catch(ex){if (console)console.info("链接失败,"+ex)};
	},
	onClose:function(){
	try{etPsFlashObj.etFsClose()}catch(ex){if (console)console.info("链接关闭失败,"+ex)};
	}
}

function etFsSocketOnInit(){
	etPoIsFlash=true;
	setTimeout(function(){etFopen()},2000);
	etPsFlashObj.SetVariable('etKisReadLocalExtSetting', true);
}

function etFsSocketOnData(obj){
	if (typeof(obj)!='string'){if ($.isFunction(etFlazyAllMessage))etFlazyAllMessage(obj.toString());return false}
	try{
	  var etKbool=false,items;
	  try{
		  if(obj.indexOf('"[') >= 0) {
			obj = obj.replace('"[', '[').replace(']"', ']');
		  }
		  items=$.parseJSON(obj);
	  }
	  catch(e){
		  etKbool=true
	  }
	  
	  var t=parent.frames.length>0?parent.frames:[0],etKa=[];
	  
	  for(var i = 0; i <= t.length; i++) {
		var f = i == 0 ? window : t[i - 1];
	 	if (f.etFlazyAllMessage) f.etFlazyAllMessage(obj);
	  
	  	switch(items["MsgName"].toLowerCase()){
		  case "onconnect":
		  if (f.etFcOnConnect)f.etFcOnConnect();
		  break;
		  case "onstate":
		  etKa=etFsetStateName([items["ID"],items["State"]]);
		  etKa.push(items["assTelNos"]);
		  if (f.etFcOnExtState)f.etFcOnExtState(etKa);
		  break;
		  case "onpulsemsg":
		  if (f.etFcOnPulseMsg)f.etFcOnPulseMsg();
		  break;
		  case "onpbxidle":
		  if (f.etFcOnPBXIdle)f.etFcOnPBXIdle();
		  break;
		  case "onpbxdial":
		  if (f.etFcOnPBXDial)f.etFcOnPBXDial();
		  break;
		  case "ondisconnect":
		  if (f.etFcOnDisConnect)f.etFcOnDisConnect();
		  break;
		  case "onpbxhurryup":
		  if (f.etFcOnPBXHurryup)f.etFcOnPBXHurryup();
		  break;
		  case "onpbxnodisturbon":
		  if (f.etFcOnPBXNoDisturbOn)f.etFcOnPBXNoDisturbOn();
		  break;
		  case "onpbxnodisturboff":
		  if (f.etFcOnPBXNoDisturbOff)f.etFcOnPBXNoDisturbOff();
		  break;
		  case "ongetportdatas":
		  if (f.etFcOnGetPortDatas){
		  var v=items['vPortDatas'];
		  	$.each(v,function(s,p){
			 var a = etFsetStateName([p["ID"], p["State"]]);
			  a.push('');a.push(p['NoDisturb']);
			  if (f.etFcOnGetPortDatas)f.etFcOnGetPortDatas(a);
		 	 });
		  }
		  break;
		  case "ongetportstates":
		  if (f.etFcOnGetPortStates){
		  var a=[];
		  $.each(items["vPortStates"].split(","),function(i,item){
			var v=item.split("=");
			a.push(etFsetStateName(v));
		  });
		  f.etFcOnGetPortStates(a);
		  }
		  break;
		  case "onpbxring":
		  if (f.etFcOnPBXRing)f.etFcOnPBXRing([items["vAssID"],items["vTelNos"]]);
		  break;
		  case "onpbxdivertupdate":
		  if (f.etFcOnPBXDivertUpdate)f.etFcOnPBXDivertUpdate([items["vAssID"],items["vTelNos"]]);
		  break;
		  case "onpbxconnected":
		  if (f.etFcOnPBXConnected)f.etFcOnPBXConnected([items["vDirect"],items["vTelNos"],items["vAssID"]]);
		  break;
		  case "on_callrecordguid":
		  if (f.etFcReturnRecordID)f.etFcReturnRecordID(items["GUID"]);
		  break;
		  case "event_login_offline":
		  if (f.etFcReturnOffline)f.etFcReturnOffline(items["ID"]);
		  break;
		  case "event_login_online":
		  if (f.etFcReturnOnline)f.etFcReturnOnline(items["ID"]);
		  break;
		  case "ongetlogininfo":
		  if (f.etFcReturnOlineList)f.etFcReturnOlineList(items["vMsg"]);
		  break;
		  default:
		  break;
		}
	}	 
	}catch(e){
		if ($.isFunction(etFlazyAllMessage))etFlazyAllMessage(e)
}
function etFsetStateName(etKsV){
		var etKsSubArr=["维护忙","空闲","被叫振铃","回叫振铃","拨号","回铃","催挂","通话","等待","同步，用于冗余控制"];
		$.each(etKsSubArr,function(j,items){
			if (parseInt(etKsV[1])==j){
				etKsV.push(j);etKsV[1]=items;
				return false
				}
		 });return etKsV
	}
}

function etFsThisMovie(i){
  if (ck_browser.browser.msie)return document.getElementById(i);
  return document[i];
}
function etFsExtSettingNull(){
  if (console)console.info("本地分机配置不存在")
}
function etFsendMsg_Event(obj){
	if (typeof(obj)!="string")return;
	if (etPoIsFlash){
		etPsFlashObj.SetVariable("etKsData",obj);
		try{etPsFlashObj.etFsSendData()}catch(ex){/*if (console)console.info(ex)*/};
		return;
	}
}
function etFcreateFlash(){
	  var val = "pagekitInitData=";
	  var url = "js/FlashSocket.swf";
	  if(this["pagekitInitData"] != undefined) {
		  val += this["pagekitInitData"];
	  }
	  var etKid="etEsSocketFlash";
	  var ieID = ck_browser.browser.msie ? etKid : etKid + "_ie";
	  var ffID = ck_browser.browser.msie  ? etKid + "_ff" : etKid;
	  
	  var str = '';
		  str += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" style="position:absolute"';
		  str += '        id="' + ieID +'" name="'+ieID+'" width="0" height="0"';
		  str += '        codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab">';
		  str += '        <param name="movie" value="' + url +'" />';
		  str += '        <param name="quality" value="high" />';
		  str += '        <param name="wmode" value="transparent"/>';
		  str += '        <param name="allowScriptAccess" value="always" />';
		  str += '        <param name="FlashVars" value="' + val + '" />';
		  str += '        <embed src="' + url +'" quality="high"';
		  str += '            width="6" height="0" id="' + ffID +'" name="'+ffID+'" align="middle"';
		  str += '            quality="high"';
		  str += '            wmode="transparent"';
		  str += '            FlashVars="' + val + '"';
		  str += '            allowScriptAccess="always"';
		  str += '            type="application/x-shockwave-flash"';
		  str += '            pluginspage="http://www.adobe.com/go/getflashplayer">';
		  str += '        </embed>';
		  str += '</object>';
	  
	  $("#etEflashContent").append(str);
}

ck_browser = function() {  
    function uaMatch(ua) {  
        ua = ua.toLowerCase();  
  
        var match = rwebkit.exec(ua)  
                    || ropera.exec(ua)  
                    || rmsie.exec(ua)  
                    || ua.indexOf("compatible") < 0 && rmozilla.exec(ua)  
                    || [];  
  
        return {  
            browser : match[1] || "",  
            version : match[2] || "0"  
        };  
    }  
  
    var  
    rwebkit = /(webkit)\/([\w.]+)/,  
    ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,  
    rmsie = /(msie) ([\w.]+)/,  
    rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,      
    browser = {},  
    ua = window.navigator.userAgent,  
    browserMatch = uaMatch(ua);  
  
    if (browserMatch.browser) {  
        browser[browserMatch.browser] = true;  
        browser.version = browserMatch.version;  
    }  
  
    return { browser: browser }  
}();