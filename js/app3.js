(function(doc, win) {
	if (!serviceData)
		var serviceData = [];

	if (!needData) {
		var needData = [];
	}
	if (!jobData) {
		var jobData = [];
	}
	if (!followData) {
		var followData = [];
	}
	if (!shouruData) {
		var shouruData = [];
	}
	if (!houseData) {
		var houseData = [];
	}
	if (!carData) {
		var carData = [];
	}
	if (!cheweiData) {
		var cheweiData = [];
	}
	if (!baodanData) {
		var baodanData = [];
	}
	if (!zhengxinData) {
		var zhengxinData = [];
	}
    if (!sifaData) {
    	var sifaData = [];
    }
    if (!qtsfeiDataService) {
    	var qtsfeiDataService = [];
    }
    if (!beizhuData) {
    	var beizhuData = [];
    }
    if (!zhaiwuData) {
    	var zhaiwuData = [];
    }
    if (!contractData) {
    	var contractData = [];
    }
    if (!zichanData) {
    	var zichanData = [];
    }
    if (!zhengxinDataL) {
    	var zhengxinDataL = [];
    }
    if (!bankCardData) {
    	var bankCardData = [];
    }
    
    //
    var refreshTimepicker = function(){
        $('.form_datetime2').datetimepicker({
            format: 'yyyy-mm-dd',
            autoclose: true,
            todayBtn: true,
            startView: 'year',
            startDate: "2017年02月",
            minView: 'month',
            maxView: 'decade',
            language: 'zh-CN'
        });
    }
    refreshTimepicker();

  //
  var selectChangeItem = function(selectId, obj){

      $(selectId).change(function(){
          var val = $(selectId).val();
          console.log(val)
          if (val == 0) {
              $(obj +" .item01").show();
              $(obj +" .item02").hide();
              $(obj +" .item03").hide();
          }
          if (val == 1) {
              $(obj +" .item01").hide();
              $(obj +" .item02").show();
              $(obj +" .item03").hide();
          }
          if (val == 2) {
              $(obj +" .item01").hide();
              $(obj +" .item02").hide();
              $(obj +" .item03").show();
          }
      })
  }

  selectChangeItem("#carLoanWay", "#carMsgModal");

//跟进记录跟进电话切换
  var followTel = $(".followWaySel .gjin-tel").val();
  $(".followWaySel .tel-number").text(followTel);

  var followPhone = $(".followWaySel .gjin-phone").val();
  $(".followWaySel .phone-number").text(followPhone);

  var changePhone = function(a, b){
    $(a).change(function(){
        var val = $(a).val();
        $(b).text(val);
    })
  }

  changePhone(".followWaySel .gjin-tel", ".followWaySel .tel-number");
  changePhone(".followWaySel .gjin-phone", ".followWaySel .phone-number");



  /* 下拉列表数据 */
  var baoxianArr = ["中国人寿保险", "中国人民保险", "平安保险", "太平洋保险", "太平洋保险",
  "阳光人寿保险", "中宏人寿保险", "信诚人寿保险", "中意人寿保险", "友邦保险", "中英人寿","招商信诺", "中美大都会", "中法人寿", "华泰人寿", "国泰人寿", "新华保险", "泰康人寿保险", "太平人寿保险", "生命人寿保险"];

  var payWayArr = ["月缴", "季缴", "半年缴", "年缴", "趸缴"];

  var qishuArr = ["3期", "6期", "12期", "24期", "36期", "48期", "60期"];

  var bankArr = ["中国工商银行", "中国银行", "中国建设银行", "中国农业银行", "中国交通银行",
  "中国邮政储蓄银行", "招商银行", "兴业银行", "中信银行", "光大银行", "民生银行","广发银行",
  "华夏银行", "上海浦东发展银行", "平安银行", "北京银行", "浙商银行", "渤海银行", "宁波银行",
  "广东华兴银行", "珠海华润银行", "广东南粤银行", "江西银行", "九江银行", "广州银行",
  "廊坊银行", "广州农商银行", "汇丰银行", "东亚银行", "恒生银行", "永亨银行", "花旗银行", "渣打银行"];

  var carTypeArr = ["小型汽车", "大型汽车", "牵引车", "城市公交车", "中型客车", "大型货车", "小型自动挡汽车"];

  var chepaiArr = ["京", "津", "沪", "渝", "冀", "豫", "云",
                   "辽", "黑", "湘", "皖", "鲁", "新", "苏",
                   "浙", "赣", "鄂", "桂", "甘", "晋", "蒙",
                   "陕", "吉", "闽", "贵", "粤", "青", "藏", "川", "宁", "琼"];

  var zimuArr = ["A", "B", "C", "D", "E", "F", "G",
                   "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
                   "R", "S", "T", "U", "V", "W", "X",
                   "Y", "Z"];

  var cpmTypeArr = ["公务机关", "事业单位", "国有企业", "外资企业", "上市公司", "私营企业", "个体户"];
  var cpmTypeArr02 = ["国有企业", "外资企业", "上市公司", "私营企业", "个体户"];

  var dataTypeArr = ["身份证", "房产证", "按揭／抵押合同", "车辆登记", "社保缴纳流水", "公积金缴纳流水", "个税缴纳流水", "收入证明", "工作证明", "保单扫描件", "银行流水"];

  var qishuArr2 = ["3期", "6期", "12期", "24期", "36期", "48期", "60期", "120期", "240期", "360期"];

  var loanTypeArr = ["个人信用贷款", "个人抵押贷款", "个人私贷", "企业信用贷款", "企业抵押贷款"];

  var repayWayArr = ["等额本息", "等额本金", "随借随还", "先息后本", "到期还本付息"];

  var urgencyArr = ["十万火急", "有点急", "一般", "无所谓"];

  var contactTypeArr = ["委托服务合同", "客户需求", "银行机构确认书", "代扣款协议", "委托支付协议", "借款登记服务表"];

  var clientManageArr = ["W-无需求", "L-长期跟进", "QX2-银行拒放款", "N-未联系", "M-已上门", "QX3-客户弃贷", "Y-有需求", "B-已签约申办中", "F-已放款", "S-最近联系", "QX1-跟进条件不足", "V-已完成"];

  var publicHasArr = ["与父母共有", "与子女共有", "与兄妹共有", "与朋友共有"];

  var houseTypeArr01 = ["商品房", "公寓", "商铺", "写字楼", "别墅", "宅基地"];
  var houseTypeArr02 = ["普通商品房", "经济适用房", "房改房", "限价房", "解困房"];
  var houseTypeArr03 = ["赠与", "出让", "继承"];

  var timeArr01 = ["近1个月", "近2个月", "近3个月", "近4个月", "近5个月", "近6个月"];
  var timeArr02 = ["当前", "半年内", "1年内", "2年内", "近2～5年"];

  var loanTypeArr02 = ["无", "按揭贷款", "抵押贷款", "抵押及二押贷款"];

  var zxcxcshuArr01 = ["贷款审批", "信用卡审批", "人行查询", "个人网查"];
  var zxyqiArr01 = ["信用卡", "贷款", "准贷记卡"];

  var zxinArr02 = ["银行征信", "人行征信", "网查简版征信"];

  var followDateArr = ["3月21日", "6月21日", "9月21日", "12月21日"];

  var serviceArr01 = ["固话", "查征信", "挂单位", "办资料"];
  var serviceArr02 = ["增收", "返利"];

  // 赋值select
  var optionVal = function(arr, obj){
      $(obj).empty();
      $(obj).append('<option value=""></option>');
      $.each(arr, function(idx, val){
          index = idx + 1;
          html = "<option value=" + index + ">"+ val +"</option>";
          $(obj).append(html);
      })
  }

  //模块
  optionVal(baoxianArr, "#baoxianCpm");
  optionVal(payWayArr, "#jiaofeiWay");
  optionVal(qishuArr, "#loanTimeSel01");
  optionVal(qishuArr, "#loanTimeSel02");
  optionVal(qishuArr, "#loanTimeSel03");
  optionVal(qishuArr2, "#loanTimeSel04");
  optionVal(qishuArr, "#qixianSel");
  optionVal(qishuArr2, "#qixianSel02");
  optionVal(bankArr, "#bank01");
  optionVal(bankArr, "#bank02");
  optionVal(bankArr, "#bank03");
  optionVal(bankArr, "#bank04");
  optionVal(bankArr, "#bank05");
  optionVal(bankArr, "#bank06");
  optionVal(bankArr, "#bankSel02");
  optionVal(carTypeArr, "#carTypeSel");
  optionVal(chepaiArr, "#chepaiSel");
  optionVal(zimuArr, "#zimuSel");
  optionVal(loanTypeArr, "#loanTypeSel01");
  optionVal(repayWayArr, "#repayWaySel01");
  optionVal(urgencyArr, "#urgencySel");
  optionVal(contactTypeArr, "#contactTypeSel");
  optionVal(dataTypeArr, "#dataTypeSel01");
  optionVal(cpmTypeArr02, "#cpmTypeSel01");
  optionVal(cpmTypeArr, "#cpmTypeSel02");
  optionVal(clientManageArr, "#clientManageSel");
  optionVal(houseTypeArr01, "#houseType01");
  optionVal(houseTypeArr02, "#houseType02");
  optionVal(houseTypeArr03, "#houseType03");
  optionVal(publicHasArr, "#houseHasSel");
  optionVal(timeArr01, ".time-sel01");
  optionVal(timeArr02, ".time-sel02");
  optionVal(loanTypeArr02, "#houseLoanSel01");
  //optionVal(followDateArr, ".follow-date");

  var followYear = function(){
    var mydate = new Date();
    var year = mydate.getFullYear();
    var year01 = year-1;

    var html0 = '<option value=""></option>';
    var html1 = '<option value="'+1+'">'+ year +'年</option>';
    var html2 = '<option value="'+2+'">'+ year01 +'年</option>';
    var htmlSum = '' + html0 + html1 + html2;

    $(".year-sel").html(htmlSum);

  }
  //followYear();


  var num = function(obj){
    obj.value = obj.value.replace(/[^\d.]/g,""); //清除"数字"和"."以外的字符
    obj.value = obj.value.replace(/^\./g,""); //验证第一个字符是数字
    obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个, 清除多余的
    obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3'); //只能输入两个小数
  }

  $("body").on('keyup', '.control-num2', function(){
    num(this);
  })
  
  //shouxin,ziguqiehuan
  var listedCmpSelect = function(selectId, obj){

    $(selectId).change(function(){
      var val = $(selectId).val();
      console.log(val)
      if (val == 5) {
        $(obj +" .item02").show();
      }else{
        $(obj +" .item02").hide();
      }
    })
  }

  listedCmpSelect("#cpmTypeSel01", "#job-own");
  listedCmpSelect("#cpmTypeSel02", "#job-other");




  //baodanfeiyong
  var policyBaseNum = $("#policyBaseNum").val();
  var policyYearNum = 0;

  var policyNum = function(selectId){

    $(selectId).change(function(){
      var val = $(selectId).val();
      var policyBaseNum = $("#policyBaseNum").val();
      console.log(val)
      if(policyBaseNum){
        if(val == 1){
          policyYearNum = policyBaseNum * 12;
        }
        if(val == 2){
          policyYearNum = policyBaseNum * 4;
        }
        if(val == 3){
          policyYearNum = policyBaseNum * 2;
        }
        if(val == 4){
          policyYearNum = policyBaseNum;
        }
        if(val == 5){
          policyYearNum = policyBaseNum;
        }
      }
      console.log(policyBaseNum)
      console.log(policyYearNum)
      $("#policyYearNum").text(policyYearNum);
    })
  }

  $("#policyBaseNum").keyup(function(){
    policyBaseNum = $("#policyBaseNum").val();
    var val = $("#jiaofeiWay").val();
    console.log(val)
    console.log(policyBaseNum);
    if(val == 1){
      policyYearNum = policyBaseNum * 12;
    }
    if(val == 2){
      policyYearNum = policyBaseNum * 4;
    }
    if(val == 3){
      policyYearNum = policyBaseNum * 2;
    }
    if(val == 4){
      policyYearNum = policyBaseNum;
    }
    if(val == 5){
      policyYearNum = policyBaseNum;
    }
    $("#policyYearNum").text(policyYearNum);
  })

  policyNum("#jiaofeiWay");





  //xinyongkayouwu
  $("input:radio[name='ipt-xyka']").change(function(){
    var val = $(this).val();
    if (val == 1) {
      $(".has-credit-content").show();
    } else {
      $(".has-credit-content").hide();
    }
  });

  //派遣地
  $("input:radio[name='ipt-ldgxi']").change(function(){
    var val = $(this).val();
    if (val == 1) {
      $(".paiqian").hide();
    } else {
      $(".paiqian").show();
    }
  });


  //征信添加查询次数
  var zxChaxunHtml = '<li class="row"><div class="col-xs-3 pr10"><select name="ipt-zxcxcshu-a[]" id="" class="form-control"><option value=""></option><option value="1">贷款审批</option><option value="2">信用卡审批</option><option value="3">人行查询</option><option value="4">个人网查</option></select></div><div class="col-xs-3 pr10"><select name="ipt-zxcxcshu-b[]" id="" class="form-control time-sel01"></select></div><div class="col-xs-1"><input type="text" class="form-control" name="ipt-zxcxcshu-c[]"></div><div class="col-xs-1 pl10">次</div><div class="col-xs-2"><div class="btn-add-yellow">+</div></div></li>'
  var zxYuqiHtml = '<li class="row"><div class="col-xs-2 pr10"><select name="ipt-zxyqi-a[]" id="" class="form-control"><option value=""></option><option value="1">信用卡</option><option value="2">贷款</option><option value="3">准贷记卡</option></select></div><div class="col-xs-2 pr10"><select name="ipt-zxyqi-b[]" id="" class="form-control time-sel02"></select></div><div class="col-xs-1 text-center">有</div><div class="col-xs-1"><select name="ipt-zxyqi-c[]" id=""class="form-control"><option value=""></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option></select></div><div class="col-xs-1 text-center">逾期</div><div class="col-xs-2 pr10"><input type="text" class="form-control" name="ipt-zxyqi-d[]"></div><div class="col-xs-1 text-left pl10">元</div><div class="col-xs-1"><div class="btn-add-yellow">+</div></div></li>';

  var addList = function(obj, msg){
    $(obj).append(msg)
  }

  $('body').on('click', "#zxChaxunList .btn-add-yellow", function(){
    addList("#zxChaxunList", zxChaxunHtml);
    optionVal(timeArr01, ".time-sel01");
  })
  $('body').on('click', "#zxYuqiList .btn-add-yellow", function(){
    addList("#zxYuqiList", zxYuqiHtml);
    optionVal(timeArr02, ".time-sel02");
  })



  //
  var fwshoufeiHtml = '<li class="row"><div class="col-xs-3"><select name="ipt_qtsfei_a[]" id="" class="form-control"><option value=""></option><option value="1">固话</option><option value="2">查征信</option><option value="3">挂单位</option><option value="4">办资料</option></select></div><div class="col-xs-3 pl10"><input type="text" class="form-control" name="ipt_qtsfei_b[]"></div><div class="col-xs-1 pl5">元</div><div class="col-xs-2 pl5"><div class="add-btn">+</div></div></li>'
  var qitashoufeiHtml = '<li class="row mt10"><div class="col-xs-2"><select name="ipt_qtfyong_a[]"id=""class="form-control"><option value=""></option><option value="1">增收</option><option value="2">返利</option></select></div><div class="col-xs-2 pl5"><input type="text"class="form-control"name="ipt_qtfyong_b[]"></div><div class="col-xs-1 pl5">元</div><div class="col-xs-2 pl5">返点日期</div><div class="col-xs-3"><input class="form-control form_datetime2"type="text"value=""size="16"name="ipt_qtfyong_c[]"></div><div class="col-xs-1 pl5"><div class="add-btn">+</div></div></li>'
  var messageTipHtml4 = '<li class="rule-list1"><div class="tip-date-checked"><div class="row"><div class="col-xs-2 text-right start-date mt10">提醒日</div><div class="col-xs-3 pl10 mt10"><input class="form-control form_datetime2"type="text"name="ipt-hkgze-a[]"value=""size="16"readonly="true"></div><div class="col-xs-1 pl10 tip-number mt10"><input type="checkbox"data-rulecount="1"/></div><div class="tip-time"><div class="col-xs-2 pl10 end-start mt10 text-right pr10">结束日</div><div class="col-xs-3 pl5 mt10"><input type="text"class="form-control form_datetime2"name="ipt-hkgze-b[]"readonly="true"/></div><div class="col-xs-2 text-right mt10">每</div><div class="col-xs-3 pl10 mt10"><select class="form-control"name="ipt-hkgze-c[]"><option value=""></option><option value="1">月</option><option value="2">季</option><option value="3">年</option></select></div><div class="col-xs-1"></div></div><div class="col-xs-2 pr10 mt10 text-right">提醒金额</div><div class="col-xs-3 pl5 mt10"><input type="text"class="form-control"name="ipt-hkgze-d[]"/></div><div class="col-xs-1 pl10 mt10">元</div></div></div></li>';
  
  $("#serverChargeList").append(fwshoufeiHtml);
  $("#otherChargeList").append(qitashoufeiHtml);
  refreshTimepicker();

  var hkgzCount = $("#messageTipList li").length;
  if (!hkgzCount) {
    $("#messageTipList").append(messageTipHtml4);
    refreshTimepicker();
  };
  console.log(hkgzCount);

  $('body').on('click', "#serverChargeList .add-btn", function(){
    addList("#serverChargeList", fwshoufeiHtml);
    refreshTimepicker();
  })
  $('body').on('click', "#otherChargeList .add-btn", function(){
    addList("#otherChargeList", qitashoufeiHtml);
    refreshTimepicker();
  })

  //服务修改添加还款规则
  $('body').on('click', ".back-rule .add-btn", function(){
    var hkgzCount = $("#messageTipList li").length + 1;
    var messageTipHtml2 = '<li class="rule-list'+ hkgzCount +'"><div class="tip-date-checked"><div class="row"><div class="col-xs-2 text-right start-date mt10">提醒日</div><div class="col-xs-3 pl10 mt10"><input class="form-control form_datetime2"type="text"name="ipt-hkgze-a[]"value=""size="16"readonly="true"></div><div class="col-xs-1 pl10 tip-number mt10"><input type="checkbox"data-rulecount="'+ hkgzCount +'"/></div><div class="tip-time"><div class="col-xs-2 pl10 end-start mt10 text-right pr10">结束日</div><div class="col-xs-3 pl5 mt10"><input type="text"class="form-control form_datetime2"name="ipt-hkgze-b[]"readonly="true"/></div><div class="col-xs-2 text-right mt10">每</div><div class="col-xs-3 pl10 mt10"><select class="form-control"name="ipt-hkgze-c[]"><option value=""></option><option value="1">月</option><option value="2">季</option><option value="3">年</option></select></div><div class="col-xs-1"></div></div><div class="col-xs-2 pr10 mt10 text-right">提醒金额</div><div class="col-xs-3 pl5 mt10"><input type="text"class="form-control"name="ipt-hkgze-d[]"/></div><div class="col-xs-1 pl10 mt10">元</div></div></div></li>';

    addList("#messageTipList", messageTipHtml2);
    refreshTimepicker();
  })

  $('body').on('click', ".tip-number>input[type='checkbox']", function(){
    var listNum = $(this).data('rulecount');
    console.log(listNum)
    var tipDate = $(".rule-list"+ listNum +" .tip-number input[type='checkbox']").is(':checked');
    if (tipDate) {
        $(".rule-list"+ listNum +" .start-date").text('起始日');
        $(".rule-list"+ listNum +" .tip-time").show();
    }else{
        $(".rule-list"+ listNum +" .tip-time").hide();
        $(".rule-list"+ listNum +" .start-date").text('提醒日');
    };
  });

  //服务修改

  //其它收费
  
  /*var qtsfeiDataService = [
    {
      "qtsfei_a" : "1",
      "qtsfei_b" : "2000",
    },
    {
      "qtsfei_a" : "2",
      "qtsfei_b" : "3000"
    }
  ]*/
  

  if (qtsfeiDataService.length > 0) {
    $(".modal-body #serverChargeList").html('');
    for(i in qtsfeiDataService){
      var num01 = qtsfeiDataService[i].a;
      console.log(num01)
      var qtsfeiHtml = '<li class="row"><div class="col-xs-3"><select name="ipt_qtsfei_a[]" id="" class="form-control qtsf-select"><option value=""></option><option value="1">固话</option><option value="2">查征信</option><option value="3">挂单位</option><option value="4">办资料</option></select></div><div class="col-xs-3 pl10"><input type="text" class="form-control" value="'+ qtsfeiDataService[i].b +'" name="ipt_qtsfei_b[]"></div><div class="col-xs-1 pl5">元</div><div class="col-xs-2 pl5"><div class="add-btn">+</div></div></li>';
      $(".modal-body #serverChargeList").append(qtsfeiHtml);
      //$("body select[name='ipt_qtsfei_a["+ i +"]']").val(num01);
      $("body .qtsf-select").eq(i).val(num01);
      refreshTimepicker();
    }
  };

  //其它费用
  
  /*var qtfyongDataService = [
    {
      "qtfyong_a" : "1",
      "qtfyong_b" : "2000",
      "qtfyong_c" : "2017-05-03"
    },
    {
      "qtfyong_a" : "2",
      "qtfyong_b" : "3000",
      "qtfyong_c" : "2017-05-01"
    }
  ];*/
  
  if (qtfyongDataService.length > 0) {
    $(".modal-body #otherChargeList").html('');
    for(i in qtfyongDataService){
      var num02 = qtfyongDataService[i].a;
      console.log(num02);
      var qtfyongHtml = '<li class="row mt10"><div class="col-xs-2"><select name="ipt_qtfyong_a[]"id=""class="form-control ipt_qtfyong_a"><option value=""></option><option value="1">增收</option><option value="2">返利</option></select></div><div class="col-xs-2 pl5"><input type="text"class="form-control"value="'+ qtfyongDataService[i].b +'" name="ipt_qtfyong_b[]"></div><div class="col-xs-1 pl5">元</div><div class="col-xs-2 pl5">返点日期</div><div class="col-xs-3"><input class="form-control form_datetime2"type="text"name="ipt_qtfyong_c[]"value="'+ qtfyongDataService[i].c +'"size="16"></div><div class="col-xs-1 pl5"><div class="add-btn">+</div></div></li>';
      $(".modal-body #otherChargeList").append(qtfyongHtml);
      //$("body select[name='ipt_qtfyong_a["+ i +"]']").val(num02);
      $("body .ipt_qtfyong_a").eq(i).val(num02);
      refreshTimepicker();
    }
  };

  //还款规则
  /*
  var hkgzeDataService = [
    {
      "hkgze_a" : "2017-05-03",
      "hkgze_b" : "2017-05-03",
      "hkgze_c" : "2",
      "hkgze_d" : "20000",
      "hkgze_e" : true
    },
    {
      "hkgze_a" : "2017-05-01",
      "hkgze_b" : "2017-05-01",
      "hkgze_c" : "1",
      "hkgze_d" : "3000",
      "hkgze_e" : false
    }
  ]
  */

  if (typeof(hkgzeDataService) != "undefined") {
    console.log(hkgzeDataService);
    $(".modal-body #messageTipList").html('');
    for(i in hkgzeDataService){
      var num3 = hkgzeDataService[i].c;
      var isChecked = hkgzeDataService[i].e;
      var hkgzeHtml2 = '<li class="rule-list'+ i +'"><div class="tip-date-checked"><div class="row"><div class="col-xs-2 text-right start-date mt10">提醒日</div><div class="col-xs-3 pl10 mt10"><input class="form-control form_datetime2"type="text"name="ipt-hkgze-a[]"value="'+ hkgzeDataService[i].a +'"size="16"readonly="true"></div><div class="col-xs-1 pl10 tip-number mt10"><input class="input-checkbox" type="checkbox"data-rulecount="'+ i + '"/></div><div class="tip-time"><div class="col-xs-2 pl10 end-start mt10 text-right pr10">结束日</div><div class="col-xs-3 pl5 mt10"><input type="text"class="form-control form_datetime2"name="ipt-hkgze-b[]"value="'+ hkgzeDataService[i].b +'"readonly="true"/></div><div class="col-xs-2 text-right mt10">每</div><div class="col-xs-3 pl10 mt10"><select class="form-control"name="ipt-hkgze-c[]"><option value=""></option><option value="1">月</option><option value="2">季</option><option value="3">年</option></select></div><div class="col-xs-1"></div></div><div class="col-xs-2 pr10 mt10 text-right">提醒金额</div><div class="col-xs-3 pl5 mt10"><input type="text"class="form-control"name="ipt-hkgze-d[]"value="'+ hkgzeDataService[i].d +'"/></div><div class="col-xs-1 pl10 mt10">元</div></div></div></li>';

      $(".modal-body #messageTipList").append(hkgzeHtml2);
      $(".modal-body #messageTipList li").eq(i).find('select').val(num3);
      if (isChecked) {
        $(".modal-body #messageTipList li").eq(i).find('.input-checkbox').attr('checked',true);
        $(".modal-body #messageTipList li").eq(i).find('.tip-time').show();
        $(".modal-body #messageTipList li").eq(i).find('.start-date').text('起始日');
      }
      refreshTimepicker();
    }
  };
  
  //有无房屋贷款
  $("#houseLoanSel01").change(function(){
    var val = $("#houseLoanSel01").val();
    console.log(val)
    if (val == 1) {
      $("#houseModal .noHasLoan").hide();
    }else{
      $("#houseModal .noHasLoan").show();
    }
  })

  //工作信息自雇营业执照是否有
  $("input:radio[name='ipt-yyzzhao']").change(function(){
    var val = $(this).val();
    if (val == 1) {
      $(".zggsming").show();
    }
    if (val == 2) {
      $(".zggsming").hide();
    }
  });

  //法人是否
  var sffren = $("input:radio[name='ipt-fren']").val();
  if (sffren == 1) {
    $(".yfrgxi-list").hide();
  };
  $("input:radio[name='ipt-fren']").change(function(){
    var val = $(this).val();
    if (val == 2) {
      $(".yfrgxi-list").show();
    }
    if (val == 1) {
      $(".yfrgxi-list").hide();
    }
  });

  $("input:radio[name='ipt-yhkgshu']").change(function(){
    var val = $(this).val();
    if (val == 2) {
      $(".yhkgshu-dsf").show();
    }
    if (val == 1) {
      $(".yhkgshu-dsf").hide();
    }
  });

  //跟进记录联系方式
  $("#addFollowModal input:radio[name='ipt-type']").change(function(){
    var val = $(this).val();
    if (val == 1) {
      $("#addFollowModal .item1").show();
      $("#addFollowModal .item2").hide();
    }
    if (val == 2) {
      $("#addFollowModal .item1").hide();
      $("#addFollowModal .item2").show();
    }
    if (val == 3) {
      $("#addFollowModal .item1").hide();
      $("#addFollowModal .item2").hide();
    };
  });

  $("body").on('click', '#addFollowModal .add-follow-btn', function(){
    var followWayVal = $("#addFollowModal input[name='ipt-type']").val();
    if (!followWayVal) {
      alert('请选择跟进方式');
      return false;
    }
    $("#followForm").submit();
  })

  $("input:radio[name='ipt-zhlxing']").change(function(){
    var val = $(this).val();
    if (val == 3) {
      $(".xyk-hide").show();
    }
    if (val == 1 || val == 2) {
      $(".xyk-hide").hide();
    }
  });
  var yhkDsfHide = function(isDsf){
    if (isDsf == 1) {
      $(".yhkgshu-dsf").hide();
    };
  }

  var cardxykShow = function(isXyk){
    if (isXyk != 3) {
      $(".xyk-hide").hide();
    };
  }




//服务json
  //传值到serviceData
  var serverListHtml = "";
  
  var hideElement = function(obj, i){
      $("body .record ul li").eq(i).find(obj).hide();
  }
  for(i in serviceData){
    serverListHtml = '<li class="swiper-slide" data-id="'+serviceData[i].id+'"><div class="inner"><div class="line"></div><div class="client-icon"></div><div class="pt22"></div><div class="content-list user"><span>渠道：</span><span>' + serviceData[i].user + '</span></div><div class="content-list jigou"><span>机构：</span><span>' + serviceData[i].jigou + '</span></div><div class="content-list gongsi"><span>公司：</span><span>' + serviceData[i].gongsi + '</span></div><div class="content-list fangkuan"><span>放款：</span><span>' + serviceData[i].fangkuan + '</span></div><div class="content-list caozuochanpin"><span>产品：</span><span>' + serviceData[i].caozuochanpin + '</span></div><div class="content-list sqmoney"><span>申贷：</span><span>' + serviceData[i].sqmoney + '</span></div><div class="content-list sqdate"><span>申日：</span><span>' + serviceData[i].sqdate + '</span></div><div class="content-list fkmoney"><span>放贷：</span><span>' + serviceData[i].fkmoney + '</span></div><div class="content-list fkdate"><span>放日：</span><span>' + serviceData[i].fkdate + '</span></div><div class="content-list fwmoney"><span>收款：</span><span>' + serviceData[i].fwmoney + '</span></div><div class="content-list dkdate"><span>到日：</span><span>' + serviceData[i].dkdate + '</span></div><div class="content-list fdmoney"><span>返点：</span><span>' + serviceData[i].fdmoney + '</span></div><div class="content-list fddate"><span>返日：</span><span>' + serviceData[i].fddate + '</span></div><div class="content-list txmoney"><span>月还：</span><span>' + serviceData[i].txmoney + '</span></div><div class="content-list txdate_start"><span>起日：</span><span>' + serviceData[i].txdate_start + '</span></div><div class="content-list txdate_end"><span>终日：</span><span>' + serviceData[i].txdate_end + '</span></div></div></li>'

    $("body .record .swiper-wrapper").append(serverListHtml);

    if (serviceData[i].status == 0) {
      $("body .record ul li").eq(i).find(".client-icon").addClass("shen");
    };
    if (serviceData[i].status == 1) {
      $("body .record ul li").eq(i).find(".client-icon").addClass("bu");
    };
    if (serviceData[i].status == 2) {
      $("body .record ul li").eq(i).find(".client-icon").addClass("qi1");
    }
    if (serviceData[i].status == 3) {
      $("body .record ul li").eq(i).find(".client-icon").addClass("ju");
    }
    if (serviceData[i].status == 4) {
      $("body .record ul li").eq(i).find(".client-icon").addClass("pi");
    }
    if (serviceData[i].status == 5) {
      $("body .record ul li").eq(i).find(".client-icon").addClass("fang1");
    };
    if (!serviceData[i].jigou) {
      hideElement(".jigou", i)
    };
    if (!serviceData[i].gongsi) {
      hideElement(".gongsi", i)
    };
    if (!serviceData[i].sqmoney) {
      hideElement(".sqmoney", i)
    };
    if (!serviceData[i].sqdate) {
      hideElement(".sqdate", i)
    };
    if (!serviceData[i].fkmoney) {
      hideElement(".fkmoney", i)
    };
    if (!serviceData[i].fkdate) {
      hideElement(".fkdate", i)
    };
    if (!serviceData[i].fwmoney) {
      hideElement(".fwmoney", i)
    };
    if (!serviceData[i].dkdate) {
      hideElement(".dkdate", i)
    };
    if (!serviceData[i].fdmoney) {
      hideElement(".fdmoney", i)
    };
    if (!serviceData[i].fddate) {
      hideElement(".fddate", i)
    };
    if (!serviceData[i].txmoney) {
      hideElement(".txmoney", i)
    };
    if (!serviceData[i].txdate_start) {
      hideElement(".txdate_start", i)
    };
    if (!serviceData[i].txdate_end) {
      hideElement(".txdate_end", i)
    };
  }


  //信息json

  var needhtml = '';
  var jobhtml = '';
  for(i in needData){

      var hkqxian = qishuArr2[needData[i].hkqxian - 1];
      var dklxing = loanTypeArr[needData[i].dklxing - 1];
      var hkfshi = repayWayArr[needData[i].hkfshi - 1];
      var jpxing = urgencyArr[needData[i].jpxing - 1];

      needDataHtml = '<div class="swiper-slide needhtml"><div class="msg-content lh50 f14"><div class="row"><div class="col-xs-5 text-right">放款时间</div><div class="col-xs-5 pl20 color-gray">'+ needData[i].fkdate +'</div></div><div class="row"><div class="col-xs-5 text-right">贷款金额</div><div class="col-xs-5 pl20 color-gray">'+ needData[i].dkmoney +'</div></div><div class="row"><div class="col-xs-5 text-right">还款期限</div><div class="col-xs-5 pl20 color-gray">'+ hkqxian +'</div></div><div class="row"><div class="col-xs-5 text-right">贷款类型</div><div class="col-xs-5 pl20 color-gray">'+ dklxing +'</div></div><div class="row"><div class="col-xs-5 text-right">还款方式</div><div class="col-xs-5 pl20 color-gray">'+ hkfshi +'</div></div><div class="row"><div class="col-xs-5 text-right">急迫性</div><div class="col-xs-5 pl20 color-gray">'+ jpxing +'</div></div></div><button class="client-icon edit btn-edit" data-itemid="'+ needData[i].id +'" data-toggle="modal" data-target="#needModal"></button></div>'
      //needhtml = needhtml + needDataHtml;
      $("body .msg-container.xuqiu .swiper-wrapper").append(needDataHtml);
  }

  for(i in jobData){
    var gzxzhi = '';
    var yyzzhao = '';
    var fren = '';
    var gflxing = '';
    var gslxing = '';
    var yfrgxi = '';
    var zgbli = '';

    if (jobData[i].jobkind == 0) {
      gzxzhi = '自雇';
      gslxing = cpmTypeArr[jobData[i].gslxing - 1];
    }else{
      gzxzhi = '受薪';
      gslxing = cpmTypeArr[jobData[i].gslxing - 1];
    };

    if (jobData[i].yyzzhao == 0) {
      yyzzhao = '否';
    }else{
      yyzzhao = '是';
    };

    if (jobData[i].fren == 1) {
      fren = '是';
    }else{
      fren = '否';
    };

    if (jobData[i].gflxing == 1) {
      gflxing = '明股';
    }else{
      gflxing = '暗股';
    };

    console.log(jobData[i].yfrgxi)
    switch (jobData[i].yfrgxi){
      case '1':
        yfrgxi = "法人是父母";
        break;
      case '2':
        yfrgxi = "法人是子女";
        break;
      case '3':
        yfrgxi = "法人是配偶";
        break;
      case '4':
        yfrgxi = "法人是兄妹";
        break;
      case '5':
        yfrgxi = '法人是'+jobData[i].yfrgxid;
        break;
    };

    switch (jobData[i].zgbli){
      case '1':
        zgbli = "100%";
        break;
      case '2':
        zgbli = "10%以下";
        break;
      case '3':
        zgbli = jobData[i].zgblid+'%';
        break;
    };

    jobDataHtml = '<div class="swiper-slide jobhtml"><div class="msg-content lh26 f14"><div class="row"><div class="col-xs-5 text-right">工作性质</div><div class="col-xs-5 pl20 color-gray">'+ gzxzhi +'</div></div><div class="row"><div class="col-xs-5 text-right">营业执照</div><div class="col-xs-5 pl20 color-gray">'+ yyzzhao +'</div></div><div class="row"><div class="col-xs-5 text-right">公司名</div><div class="col-xs-5 pl20 color-gray">'+ jobData[i].gsming +'</div></div><div class="row"><div class="col-xs-5 text-right">注册时间</div><div class="col-xs-5 pl20 color-gray">'+ jobData[i].zcdate +'</div></div><div class="row"><div class="col-xs-5 text-right">公司地址</div><div class="col-xs-5 pl20 color-gray"><div class="row"><div class="col-xs-12">'+ jobData[i].gsdzsheng + jobData[i].gsdzshi + jobData[i].gsdzqu +'</div><div class="col-xs-12 lh0">'+ jobData[i].gsdzhi +'</div></div></div></div><div class="row pt10"><div class="col-xs-5 text-right">公司类型</div><div class="col-xs-3 pl20 color-gray">'+ gslxing +'</div></div><div class="row"><div class="col-xs-5 text-right">法人</div><div class="col-xs-5 pl20 color-gray">'+ fren +'</div></div><div class="row"><div class="col-xs-5 text-right">与法人关系</div><div class="col-xs-5 pl20 color-gray">'+ yfrgxi +'</div></div><div class="row"><div class="col-xs-5 text-right">占股比例</div><div class="col-xs-5 pl20 color-gray">'+ zgbli +'</div></div><div class="row"><div class="col-xs-5 text-right">股份类型</div><div class="col-xs-5 pl20 color-gray">'+ gflxing +'</div></div></div><button class="client-icon edit btn-edit" data-itemid="'+ jobData[i].id +'" data-toggle="modal" data-target="#jobModal"></button></div>'
    //jobhtml = jobhtml + jobDataHtml;
    $("body .msg-container.gongzuo .swiper-wrapper").append(jobDataHtml)
  }

  /*$(".item-need").click(function(){
    $("body .msg-container .swiper-wrapper").html('');
    setTimeout(function(){
      $("body .msg-container .swiper-wrapper").append(needhtml);
    }, 100)
  })

  $(".item-job").click(function(){
    $("body .msg-container .swiper-wrapper").html('');
    setTimeout(function(){
      $("body .msg-container .swiper-wrapper").append(jobhtml);
    }, 100)
  })*/




//跟进记录json

/*var followData = [
  {
    'type': '1',
    "way": "138-2501-8316",
    "date": "2017-03-29",
    "time":"20:02:07",
    "attach":"\u60e0\u671b",
    "memo":"121212"
  },
  {
    'type': '2',
    "way": "138-2501-8316",
    "date": "2017-03-29",
    "time":"20:02:07",
    "attach":"\u60e0\u671b",
    "memo":"121212"
  },
  {
    'type': '3',
    "way": "138-2501-8316",
    "date": "2017-03-29",
    "time":"20:02:07",
    "attach":"\u60e0\u671b",
    "memo":"121212"
  },
  {
    'type': '4',
    "way": "138-2501-8316",
    "date": "2017-03-29",
    "time":"20:02:07",
    "attach":"\u60e0\u671b",
    "memo":"121212"
  }
];*/

for(i in followData){
  var listIcon = '';

  if (followData[i].type == 1 || followData[i].type == 2) {
    listIcon = 'tel-small';
  }
  if (followData[i].type == 3) {
    listIcon = 'face';
  }

  var followDataHtml = '<li><div class="clearfix"><div class="pull-left">'+ followData[i].date +'</div><div class="pull-left name">'+ followData[i].attach +'</div><div class="pull-right client-icon'+ ' ' + listIcon +'"></div></div><p class="text">'+ followData[i].memo +'</p></li>'
  
  if (followData[i].type == 1 || followData[i].type == 2) {
    $(".contact-list .contact-tel ul").append(followDataHtml)
  }
  if (followData[i].type == 3) {
    $(".contact-list .contact-face ul").append(followDataHtml)
  };
  if(followData[i].type != 1 && followData[i].type != 2 && followData[i].type != 3){
    $(".contact-list .contact-unknow ul").append(followDataHtml)
  }
}


//收入信息json
/*var shouruData = [
  {
    "gz_gzffxshi" : "1",
    "gz_gzmoney" : "10001",
    "sb_sbjnztai" : "1",
    "sb_sbqjyfen" : "2017-03-30",
    "sb_gs_yljs" : "1000",
    "sb_gs_sbjnbli" : "12%",
    "sb_gs_sbjnmoney" : "1000",
    "sb_gr_yljs" : "1020",
    "sb_gr_sbjnbli" : "15%",
    "sb_gr_sbjnmoney" : "2000",
    "sb_sbjndsheng" : "广东",
    "sb_sbjndshi" : "广州",
    "sb_sbjndwei" : "1",
    "sb_dsfgsming" : "嘻嘻金融",
    "gjj_gjjjnztai" : "1",
    "gjj_gjjqjyfen" : "2017年5月",
    "gjj_gs_gjjjs" : "2000",
    "gjj_gs_gjjjnbli" : "13%",
    "gjj_gs_gjjjnmoney" : "2999",
    "gjj_gr_gjjjs" : "2888",
    "gjj_gr_gjjjnbli" : "21%",
    "gjj_gr_gjjjnmoney" : "1111",
    "gjj_gjjjndsheng" : "广东省",
    "gjj_gjjjndshi" : "广州市",
    "gjj_gjjjndwei" : "1",
    "gjj_dsfgsming" : "嘻嘻金融",
    "sds_jnztai" : "1",
    "sds_qjyfen" : "2017－05",
    "sds_sqgzi" : "10000",
    "sds_gsmoney" : "1222",
    "sds_jndsheng" : "广东省",
    "sds_jndshi" : "广州市",
    "sds_jndwei" : "1",
    "sds_dsfgsming" : "嘻嘻金融",
    "ls_gz_yjlshui" : "100万",
    "ls_gz_jxdate1" : "2017/03/30",
    "ls_gz_jxmoney1" : "200",
    "ls_gz_jxdate2" : "2017-01-10",
    "ls_gz_jxmoney2" : "199",
    "ls_kp_yjlshui" : "300万", 
    "ls_kp_jxdate1" : "2017-11-05",
    "ls_kp_jxmoney1" : "199",
    "ls_kp_jxdate2" : "2017-11-05",
    "ls_kp_jxmoney2" : "199",
    "ls_sz_yjlshui" : "199万",
    "ls_sz_jxdate1" : "2017-11-05",
    "ls_sz_jxmoney1" : "199",
    "ls_sz_jxdate2" : "2017-11-05",
    "ls_sz_jxmoney2" : "199",
    "ls_pos_yjlshui" : "500万"
  },
  {
    "gz_gzffxshi" : "1",
    "gz_gzmoney" : "10001",
    "sb_sbjnztai" : "1",
    "sb_sbqjyfen" : "2017-03-30",
    "sb_gs_yljs" : "1000",
    "sb_gs_sbjnbli" : "12%",
    "sb_gs_sbjnmoney" : "1000",
    "sb_gr_yljs" : "1020",
    "sb_gr_sbjnbli" : "15%",
    "sb_gr_sbjnmoney" : "2000",
    "sb_sbjndsheng" : "广东",
    "sb_sbjndshi" : "广州",
    "sb_sbjndwei" : "1",
    "sb_dsfgsming" : "嘻嘻金融",
    "gjj_gjjjnztai" : "1",
    "gjj_gjjqjyfen" : "2017年5月",
    "gjj_gs_gjjjs" : "2000",
    "gjj_gs_gjjjnbli" : "13%",
    "gjj_gs_gjjjnmoney" : "2999",
    "gjj_gr_gjjjs" : "2888",
    "gjj_gr_gjjjnbli" : "21%",
    "gjj_gr_gjjjnmoney" : "1111",
    "gjj_gjjjndsheng" : "广东省",
    "gjj_gjjjndshi" : "广州市",
    "gjj_gjjjndwei" : "1",
    "gjj_dsfgsming" : "嘻嘻金融",
    "sds_jnztai" : "1",
    "sds_qjyfen" : "2017－05",
    "sds_sqgzi" : "10000",
    "sds_gsmoney" : "1222",
    "sds_jndsheng" : "广东省",
    "sds_jndshi" : "广州市",
    "sds_jndwei" : "1",
    "sds_dsfgsming" : "嘻嘻金融",
    "ls_gz_yjlshui" : "100万",
    "ls_gz_jxdate1" : "2017/03/30",
    "ls_gz_jxmoney1" : "200",
    "ls_gz_jxdate2" : "2017-01-10",
    "ls_gz_jxmoney2" : "199",
    "ls_kp_yjlshui" : "300万", 
    "ls_kp_jxdate1" : "2017-11-05",
    "ls_kp_jxmoney1" : "199",
    "ls_kp_jxdate2" : "2017-11-05",
    "ls_kp_jxmoney2" : "199",
    "ls_sz_yjlshui" : "199万",
    "ls_sz_jxdate1" : "2017-11-05",
    "ls_sz_jxmoney1" : "199",
    "ls_sz_jxdate2" : "2017-11-05",
    "ls_sz_jxmoney2" : "199",
    "ls_pos_yjlshui" : "500万"
  },
  {
    "gz_gzffxshi" : "1",
    "gz_gzmoney" : "10001",
    "sb_sbjnztai" : "1",
    "sb_sbqjyfen" : "2017-03-30",
    "sb_gs_yljs" : "1000",
    "sb_gs_sbjnbli" : "12%",
    "sb_gs_sbjnmoney" : "1000",
    "sb_gr_yljs" : "1020",
    "sb_gr_sbjnbli" : "15%",
    "sb_gr_sbjnmoney" : "2000",
    "sb_sbjndsheng" : "广东",
    "sb_sbjndshi" : "广州",
    "sb_sbjndwei" : "1",
    "sb_dsfgsming" : "嘻嘻金融",
    "gjj_gjjjnztai" : "1",
    "gjj_gjjqjyfen" : "2017年5月",
    "gjj_gs_gjjjs" : "2000",
    "gjj_gs_gjjjnbli" : "13%",
    "gjj_gs_gjjjnmoney" : "2999",
    "gjj_gr_gjjjs" : "2888",
    "gjj_gr_gjjjnbli" : "21%",
    "gjj_gr_gjjjnmoney" : "1111",
    "gjj_gjjjndsheng" : "广东省",
    "gjj_gjjjndshi" : "广州市",
    "gjj_gjjjndwei" : "1",
    "gjj_dsfgsming" : "嘻嘻金融",
    "sds_jnztai" : "1",
    "sds_qjyfen" : "2017－05",
    "sds_sqgzi" : "10000",
    "sds_gsmoney" : "1222",
    "sds_jndsheng" : "广东省",
    "sds_jndshi" : "广州市",
    "sds_jndwei" : "1",
    "sds_dsfgsming" : "嘻嘻金融",
    "ls_gz_yjlshui" : "100万",
    "ls_gz_jxdate1" : "2017/03/30",
    "ls_gz_jxmoney1" : "200",
    "ls_gz_jxdate2" : "2017-01-10",
    "ls_gz_jxmoney2" : "199",
    "ls_kp_yjlshui" : "300万", 
    "ls_kp_jxdate1" : "2017-11-05",
    "ls_kp_jxmoney1" : "199",
    "ls_kp_jxdate2" : "2017-11-05",
    "ls_kp_jxmoney2" : "199",
    "ls_sz_yjlshui" : "199万",
    "ls_sz_jxdate1" : "2017-11-05",
    "ls_sz_jxmoney1" : "199",
    "ls_sz_jxdate2" : "2017-11-05",
    "ls_sz_jxmoney2" : "199",
    "ls_pos_yjlshui" : "500万"
  }
];*/
for(i in shouruData){
    var gzffxshi = '';
    var sbztai_text = '';
    var sb_sbjnztai = '';
    var sds_jnztai = '';
    var gsztai_text = ''; //个税状态文字
    var gjjztai_text = ''; //公积金
    var gjj_gjjjnztai = '';
    var sb_sbjndwei = '';
    var sds_jndwei = '';
    var gjj_gjjjndwei = '';
    var unshow = '';

    switch (shouruData[i].gz_gzffxshi){
      case '1':
        gzffxshi = "银行代发";
        break;
      case '2':
        gzffxshi = "公司转账";
        break;
      case '3':
        gzffxshi = "现金";
        break;
    };
    switch (shouruData[i].sb_sbjnztai){
      case '1':
        sb_sbjnztai = "缴纳中";
        sbztai_text = "起缴";
        break;
      case '2':
        sb_sbjnztai = "中断后续缴";
        sbztai_text = "续缴";
        break;
      case '3':
        sb_sbjnztai = "已中断一个月以上";
        sbztai_text = "中断";
        break;
    };
    switch (shouruData[i].gjj_gjjjnztai){
      case '1':
        gjj_gjjjnztai = "缴纳中";
        gjjztai_text = "起缴";
        break;
      case '2':
        gjj_gjjjnztai = "中断后续缴";
        gjjztai_text = "续缴";
        break;
      case '3':
        gjj_gjjjnztai = "已中断一个月以上";
        gjjztai_text = "中断";
        break;
    };
    switch (shouruData[i].sds_jnztai){
      case '1':
        sds_jnztai = "缴纳中";
        gsztai_text = "起缴";
        break;
      case '2':
        sds_jnztai = "中断后续缴";
        gsztai_text = "续缴";
        break;
      case '3':
        sds_jnztai = "已中断一个月以上";
        gsztai_text = "中断";
        break;
    };

    if (shouruData[i].sb_sbjndwei == 1) {
      sb_sbjndwei = '本公司';
    }else{
      sb_sbjndwei = '第三方';
    };

    if (shouruData[i].sds_jndwei == 1) {
      sds_jndwei = '本公司';
    }else{
      sds_jndwei = '第三方';
    };

    if (shouruData[i].gjj_gjjjndwei == 1) {
      gjj_gjjjndwei = '本公司';
    }else{
      gjj_gjjjndwei = '第三方';
    };



    shouruDataHtml = '<div class="swiper-slide"><div class="msg-content lh26 f14"><div class="row"><div class="col-xs-5 text-right">工资发放形式</div><div class="col-xs-5 pl20 color-gray">'+ gzffxshi +'</div></div><div class="row"><div class="col-xs-5 text-right">工资金额</div><div class="col-xs-5 pl20 color-gray">'+ shouruData[i].gz_gzmoney +'</div></div><div class="row"><div class="col-xs-5 text-right">社保缴纳状态</div><div class="col-xs-5 pl20 color-gray">'+ sb_sbjnztai +'</div></div><div class="row"><div class="col-xs-5 text-right">社保'+ sbztai_text +'月份</div><div class="col-xs-5 pl20 color-gray">'+ shouruData[i].sb_sbxxyfen +'</div></div><div class="row"><div class="col-xs-5 text-right"></div><div class="col-xs-2 pl20 color-gray">公司</div><div class="col-xs-2 pl20 color-gray">个人</div></div><div class="row"><div class="col-xs-5 text-right">养老基数</div><div class="col-xs-2 pl20 color-gray">'+ shouruData[i].sb_gs_yljs +'</div><div class="col-xs-2 pl20 color-gray">'+ shouruData[i].sb_gr_yljs +'</div></div><div class="row"><div class="col-xs-5 text-right">社保缴纳比例</div><div class="col-xs-2 pl20 color-gray">'+ shouruData[i].sb_gs_sbjnbli +'</div><div class="col-xs-2 pl20 color-gray">'+ shouruData[i].sb_gr_sbjnbli +'</div></div><div class="row"><div class="col-xs-5 text-right">社保缴纳金额</div><div class="col-xs-2 pl20 color-gray">'+ shouruData[i].sb_gs_sbjnmoney +'</div><div class="col-xs-2 pl20 color-gray">'+ shouruData[i].sb_gr_sbjnmoney +'</div></div><div class="row"><div class="col-xs-5 text-right">社保缴纳地</div><div class="col-xs-5 pl20 color-gray">'+ shouruData[i].sb_sbjndsheng+shouruData[i].sb_sbjndshi +'</div></div><div class="row"><div class="col-xs-5 text-right">社保缴纳单位</div><div class="col-xs-5 pl20 color-gray">'+ sb_sbjndwei +'</div></div><div class="row"><div class="col-xs-5 text-right">第三方公司名</div><div class="col-xs-5 pl20 color-gray">'+ shouruData[i].sb_dsfgsming +'</div></div><div class="row"><div class="col-xs-5 text-right">公积金缴纳状态</div><div class="col-xs-5 pl20 color-gray">'+ gjj_gjjjnztai +'</div></div><div class="row"><div class="col-xs-5 text-right">公积金'+ gjjztai_text +'月份</div><div class="col-xs-5 pl20 color-gray">'+ shouruData[i].gjj_gjjxxyfen +'</div></div><div class="row"><div class="col-xs-5 text-right"></div><div class="col-xs-2 pl20 color-gray">公司</div><div class="col-xs-2 pl20 color-gray">个人</div></div><div class="row"><div class="col-xs-5 text-right">公积金基数</div><div class="col-xs-2 pl20 color-gray">'+ shouruData[i].gjj_gs_gjjjs +'</div><div class="col-xs-2 pl20 color-gray">'+ shouruData[i].gjj_gr_gjjjs +'</div></div><div class="row"><div class="col-xs-5 text-right">公积金缴纳比例</div><div class="col-xs-2 pl20 color-gray">'+ shouruData[i].gjj_gs_gjjjnbli +'</div><div class="col-xs-2 pl20 color-gray">'+ shouruData[i].gjj_gr_gjjjnbli +'</div></div><div class="row"><div class="col-xs-5 text-right">公积金缴纳金额</div><div class="col-xs-2 pl20 color-gray">'+ shouruData[i].gjj_gs_gjjjnmoney +'</div><div class="col-xs-2 pl20 color-gray">'+ shouruData[i].gjj_gr_gjjjnmoney +'</div></div><div class="row"><div class="col-xs-5 text-right">公积金缴纳地</div><div class="col-xs-5 pl20 color-gray">'+ shouruData[i].gjj_gjjjndsheng+shouruData[i].gjj_gjjjndshi +'</div></div><div class="row"><div class="col-xs-5 text-right">公积金缴纳单位</div><div class="col-xs-5 pl20 color-gray">'+ gjj_gjjjndwei +'</div></div><div class="row"><div class="col-xs-5 text-right">第三方公司名</div><div class="col-xs-5 pl20 color-gray'+ '' + unshow +'">'+ shouruData[i].gjj_dsfgsming +'</div></div><div class="row"><div class="col-xs-5 text-right">个税缴纳状态</div><div class="col-xs-5 pl20 color-gray">'+ sds_jnztai +'</div></div><div class="row"><div class="col-xs-5 text-right">个税'+ gsztai_text +'月份</div><div class="col-xs-5 pl20 color-gray">'+ shouruData[i].sds_xxyfen +'</div></div><div class="row"><div class="col-xs-5 text-right">税前工资</div><div class="col-xs-5 pl20 color-gray">'+ shouruData[i].sds_sqgzi +'</div></div><div class="row"><div class="col-xs-5 text-right">个税金额</div><div class="col-xs-5 pl20 color-gray">'+ shouruData[i].sds_gsmoney +'</div></div><div class="row"><div class="col-xs-5 text-right">个税缴纳地</div><div class="col-xs-5 pl20 color-gray">'+ shouruData[i].sds_jndsheng + shouruData[i].sds_jndshi +'</div></div><div class="row"><div class="col-xs-5 text-right">个税缴纳单位</div><div class="col-xs-5 pl20 color-gray">'+ sds_jndwei +'</div></div><div class="row"><div class="col-xs-5 text-right">第三方公司名</div><div class="col-xs-5 pl20 color-gray">'+ shouruData[i].sds_dsfgsming +'</div></div><div class="row"><div class="col-xs-5 text-right">公帐月均流水</div><div class="col-xs-5 pl20 color-gray">'+ shouruData[i].ls_gz_yjlshui +'</div></div><div class="row"><div class="col-xs-5 text-right">结息</div><div class="col-xs-3 pl20 color-gray">'+ shouruData[i].ls_gz_jxdate1 + shouruData[i].ls_gz_jxdate2 +'</div><div class="col-xs-2 pl20 color-gray">'+ shouruData[i].ls_gz_jxmoney1 +'</div></div><div class="row"><div class="col-xs-5 text-right">开票月均流水</div><div class="col-xs-5 pl20 color-gray">'+ shouruData[i].ls_kp_yjlshui +'</div></div><div class="row"><div class="col-xs-5 text-right">结息</div><div class="col-xs-3 pl20 color-gray">'+ shouruData[i].ls_kp_jxdate1 + shouruData[i].ls_kp_jxdate2 +'</div><div class="col-xs-2 pl20 color-gray">'+ shouruData[i].ls_kp_jxmoney1 +'</div></div><div class="row"><div class="col-xs-5 text-right">私帐月均流水</div><div class="col-xs-5 pl20 color-gray">'+ shouruData[i].ls_sz_yjlshui +'</div></div><div class="row"><div class="col-xs-5 text-right">结息</div><div class="col-xs-3 pl20 color-gray">'+ shouruData[i].ls_sz_jxdate1 + shouruData[i].ls_sz_jxdate2 +'</div><div class="col-xs-2 pl20 color-gray">'+ shouruData[i].ls_sz_jxmoney1 +'</div></div><div class="row"><div class="col-xs-5 text-right">POS机月均流水</div><div class="col-xs-5 pl20 color-gray">'+ shouruData[i].ls_pos_yjlshui +'</div></div></div><button class="client-icon edit btn-edit"data-itemid="'+ shouruData[i].id +'"></button></div>'
    $("body .msg-container.shouru .swiper-wrapper").append(shouruDataHtml);
};


//房产信息
/*
var houseData = [
  {
    "fwlxing1" : "1",
    "fwlxing2" : "2",
    "fwlxing3" : "2",
    "fwsyquan" : "3",
    "fwsyquan2" : "1",
    "fwsyquan3" : "2",
    "fwjcri" : "2017-03-31",
    "gfri" : "2016-09",
    "fwjzmji" : "100",
    "fwsymji" : "200",
    "fczdzsheng" : "广东",
    "fczdzshi" : "广州",
    "fczdzqu" : "天河",
    "fczdzhi" : "体育西路",
    "yjdzsheng" : "广东",
    "yjdzshi" : "广州",
    "yjdzqu" : "海珠",
    "yjdzhi" : "车陂",
    "fwxjia" : "40000",
    "fczheng" : "1",
    "fwdkuan" : "1",
    "dkrqi" : "2017",
    "dkbli" : "40%",
    "zgsxin" : "1",
    "dkbjin" : "111",
    "fkyhang" : "2",
    "dkschang" : "3",
    "ygje" : "22222",
    "hkfshi" : "2",
    "hkfshid" : "现金"
  }
];
*/
for(i in houseData){
    var fwlxing1 = houseTypeArr01[houseData[i].fwlxing1 - 1];
    var fwlxing2 = houseTypeArr02[houseData[i].fwlxing2 - 1];
    var fwlxing3 = houseTypeArr03[houseData[i].fwlxing3 - 1];
    var fwsyquan = '';
    var fwsyquan2 = '';
    var fwsyquan3 = publicHasArr[houseData[i].fwsyquan3 - 1];
    var fczheng = '';
    var zgsxin = '';
    var hkfshi = '';
    var fwdkuan = loanTypeArr02[houseData[i].fwdkuan - 1];
    var fkyhang = bankArr[houseData[i].fkyhang - 1];
    var dkschang = qishuArr2[houseData[i].dkschang - 1];

    if (houseData[i].fwsyquan2 == 1) {
      fwsyquan2 = '婚前购买';
    };
    if (houseData[i].fwsyquan2 == 2) {
      fwsyquan2 = '婚后购买';
    };

    switch (houseData[i].fwsyquan){
      case '1':
        fwsyquan = '独有';
        break;
      case '2':
        if (houseData[i].fwsyquan2 == 1) {
          fwsyquan = '夫妻共有：婚前购买';
        } else if (houseData[i].fwsyquan2 == 2) {
          fwsyquan = '夫妻共有：婚后购买';
        }
        break;
      case '3':
        fwsyquan = '与其它两人共有：' + publicHasArr[houseData[i].fwsyquan3 - 1];
        break;
      case '4':
        fwsyquan = '3人以上共有';
        break;
    };

    switch (houseData[i].fczheng){
      case '1':
        fczheng = '未办理';
        break;
      case '2':
        fczheng = '在银行抵押';
        break;
      case '3':
        fczheng = '在自己手上';
        break;
    };

    switch (houseData[i].zgsxin){
      case '1':
        zgsxin = '是';
        break;
      case '2':
        zgsxin = '否';
        break;
    };
    
    switch (houseData[i].hkfshi){
      case '1':
        hkfshi = '等额本息';
        break;
      case '2':
        hkfshi = '等额本金';
        break;
      case '3':
        hkfshi = '先息后本';
        break;
      case '4':
        hkfshi = '气球贷';
        break;
      case '5':
        hkfshi = houseData[i].hkfshid;
        break;
    };
    
    houseDataHtml = '<div class="swiper-slide needhtml"><div class="msg-content lh14 f14"><div class="row"><div class="col-xs-5 text-right">房屋类型</div><div class="col-xs-5 pl20 color-gray">'+ fwlxing1 + fwlxing2 + fwlxing3 +'</div></div><div class="row"><div class="col-xs-5 text-right">房屋所有权</div><div class="col-xs-6 pl20 color-gray">'+ fwsyquan +'</div></div><div class="row"><div class="col-xs-5 text-right">房屋建成日</div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].fwjcri +'</div></div><div class="row"><div class="col-xs-5 text-right">购房日</div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].gfri +'</div></div><div class="row"><div class="col-xs-5 text-right">房屋建筑面积</div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].fwjzmji + 'm<sup>2</sup>' +'</div></div><div class="row"><div class="col-xs-5 text-right">房屋使用面积</div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].fwsymji + 'm<sup>2</sup>' +'</div></div><div class="row"><div class="col-xs-5 text-right">房产证地址</div><div class="col-xs-6 pl20 color-gray">'+ houseData[i].fczdzsheng + houseData[i].fczdzshi + houseData[i].fczdzqu +'</div></div><div class="row"><div class="col-xs-5 text-right"></div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].fczdzhi +'</div></div><div class="row"><div class="col-xs-5 text-right">邮寄地址</div><div class="col-xs-6 pl20 color-gray">'+ houseData[i].yjdzsheng + houseData[i].yjdzshi + houseData[i].yjdzqu +'</div></div><div class="row"><div class="col-xs-5 text-right"></div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].yjdzhi +'</div></div><div class="row"><div class="col-xs-5 text-right">房屋现价</div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].fwxjia +'元</div></div><div class="row"><div class="col-xs-5 text-right">房产证</div><div class="col-xs-5 pl20 color-gray">'+ fczheng +'</div></div><div class="row"><div class="col-xs-5 text-right">房屋贷款</div><div class="col-xs-5 pl20 color-gray">'+ fwdkuan +'</div></div><div class="row"><div class="col-xs-5 text-right">贷款日期</div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].dkrqi +'</div></div><div class="row"><div class="col-xs-5 text-right">贷款比例</div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].dkbli +'%</div></div><div class="row"><div class="col-xs-5 text-right">最高授信</div><div class="col-xs-5 pl20 color-gray">'+ zgsxin +'</div></div><div class="row"><div class="col-xs-5 text-right">贷款本金</div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].dkbjin +'万元</div></div><div class="row"><div class="col-xs-5 text-right">放款银行</div><div class="col-xs-5 pl20 color-gray">'+ fkyhang +'</div></div><div class="row"><div class="col-xs-5 text-right">贷款时长</div><div class="col-xs-5 pl20 color-gray">'+ dkschang +'</div></div><div class="row"><div class="col-xs-5 text-right">月供金额</div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].ygje +'元</div></div><div class="row"><div class="col-xs-5 text-right">还款方式</div><div class="col-xs-5 pl20 color-gray">'+ hkfshi +'</div></div></div><button class="client-icon edit btn-edit" data-itemid="'+ houseData[i].id +'" data-toggle="modal" data-target="#houseModal"></button></div>';
    $("body .msg-container.fangchan .swiper-wrapper").append(houseDataHtml);
}


/*
var carData = [
  {
    "cllxing" : "2",
    "cpsheng" : "3",
    "cpshi" : "2",
    "cphao" : "9999",
    "clppai" : "奥拓",
    "clxhao" : "A200",
    "gcrqi" : "2017-01-02",
    "lcjia" : "200",
    "cldkuan" : "3",
    "dkxs_fkjg" : "3",
    "fkyhang" : "3",
    "dkrqi" : "2017-02-03",
    "dkbjin" : "100",
    "dkschang" : "5",
    "ygje" : "20"
  }
]
*/
//车产json
for(i in carData){
  
  var cllxing = carTypeArr[carData[i].cllxing - 1];
  var cpsheng = chepaiArr[carData[i].cpsheng - 1];
  var cpshi = zimuArr[carData[i].cpshi - 1];
  var cllxing = carTypeArr[carData[i].cllxing - 1];
  var fkyhang = bankArr[carData[i].fkyhang - 1];
  var dkschang = qishuArr[carData[i].dkschang - 1];
  var dkxs_fkjg = '';
  var cldkuan = '';
  

  switch (carData[i].dkxs_fkjg){
    case '1':
      dkxs_fkjg = '银行车贷';
      break;
    case '2':
      dkxs_fkjg = '银行信用卡车贷';
      break;
    case '3':
      dkxs_fkjg = '汽车金融';
      break;
    case '4':
      dkxs_fkjg = '其它金融';
      break;
    case '5':
      dkxs_fkjg = '以租代购';
      break;
  };

  switch (carData[i].cldkuan){
    case '1':
      cldkuan = '按揭贷款';
      break;
    case '2':
      cldkuan = '押证贷款';
      break;
    case '3':
      cldkuan = '押车贷款';
      break;
  };


    carDataHtml = '<div class="swiper-slide"><div class="msg-content lh26 f14"><div class="row"><div class="col-xs-5 text-right">车辆类型</div><div class="col-xs-5 pl20 color-gray">'+ cllxing +'</div></div><div class="row"><div class="col-xs-5 text-right">车牌号</div><div class="col-xs-5 pl20 color-gray">'+ cpsheng + cpshi + carData[i].cphao +'</div></div><div class="row"><div class="col-xs-5 text-right">车辆品牌</div><div class="col-xs-5 pl20 color-gray">'+ carData[i].clppai +'</div></div><div class="row"><div class="col-xs-5 text-right">车辆型号</div><div class="col-xs-5 pl20 color-gray">'+ carData[i].clxhao +'</div></div><div class="row"><div class="col-xs-5 text-right">购车日期</div><div class="col-xs-5 pl20 color-gray">'+ carData[i].gcrqi +'</div></div><div class="row"><div class="col-xs-5 text-right">祼车价</div><div class="col-xs-5 pl20 color-gray">'+ carData[i].lcjia  +'万元</div></div><div class="row"><div class="col-xs-5 text-right">车辆贷款类型</div><div class="col-xs-5 pl20 color-gray">'+ cldkuan +'</div></div><div class="row"><div class="col-xs-5 text-right">贷款形式</div><div class="col-xs-5 pl20 color-gray">'+ dkxs_fkjg +'</div></div><div class="row"><div class="col-xs-5 text-right">放款银行</div><div class="col-xs-5 pl20 color-gray">'+ fkyhang  +'</div></div><div class="row"><div class="col-xs-5 text-right">贷款日期</div><div class="col-xs-5 pl20 color-gray">'+ carData[i].dkrqi +'</div></div><div class="row"><div class="col-xs-5 text-right">贷款本金</div><div class="col-xs-5 pl20 color-gray">'+ carData[i].dkbjin +'万元</div></div><div class="row"><div class="col-xs-5 text-right">贷款时长</div><div class="col-xs-5 pl20 color-gray">'+ dkschang +'</div></div><div class="row"><div class="col-xs-5 text-right">月供金额</div><div class="col-xs-5 pl20 color-gray">'+ carData[i].ygje +'</div></div></div><<button class="client-icon edit btn-edit" data-itemid="'+ carData[i].id +'" data-toggle="modal" data-target="#carMsgModal"></button>/div>';
    $("body .msg-container.chechan .swiper-wrapper").append(carDataHtml);
}


//车位json
/*
var cheweiData = [
  {
    "gmrqi" : "2017-04-01",
    "cwjzmji" : "200",
    "cwsymji" : "150",
    "gmjge" : "100",
    "xjge" : "10",
    "cwdzsheng" : "广东省",
    "cwdzshi" : "广州市",
    "cwdzqu" : "天河区",
    "cwdzhi" : "体育西路",
    "cwzheng" : "2",
    "cwdkuan" : "3"
  }
];
*/

for(i in cheweiData){

  var cwzheng = '';
  var cwdkuan = '';

  switch (cheweiData[i].cwzheng){
    case '1':
      cwzheng = '未办理';
      break;
    case '2':
      cwzheng = '在银行抵押';
      break;
    case '3':
      cwzheng = '在自己手上';
      break;
  };

  switch (cheweiData[i].cwdkuan){
    case '1':
      cwdkuan = '无';
      break;
    case '2':
      cwdkuan = ' 银行按揭抵押';
      break;
    case '3':
      cwdkuan = '银行抵押贷款';
      break;
    case '4':
      cwdkuan = '私押抵押贷款';
      break;
  };

  cheweiDataHtml = '<div class="swiper-slide"><div class="msg-content lh26 f14"><div class="row"><div class="col-xs-5 text-right">购买日期</div><div class="col-xs-5 pl20 color-gray">'+ cheweiData[i].gmrqi +'</div></div><div class="row"><div class="col-xs-5 text-right">车位建筑面积</div><div class="col-xs-5 pl20 color-gray">'+ cheweiData[i].cwjzmji +'m<sup>2</sup></div></div><div class="row"><div class="col-xs-5 text-right">车位使用面积</div><div class="col-xs-5 pl20 color-gray">'+ cheweiData[i].cwsymji  +'m<sup>2</sup></div></div><div class="row"><div class="col-xs-5 text-right">购买价格</div><div class="col-xs-5 pl20 color-gray">'+ cheweiData[i].gmjge +'万元</div></div><div class="row"><div class="col-xs-5 text-right">现价格</div><div class="col-xs-5 pl20 color-gray">'+ cheweiData[i].xjge +'万元</div></div><div class="row"><div class="col-xs-5 text-right">车位地址</div><div class="col-xs-6 pl20"><div class="row"><div class="col-xs-12">'+ cheweiData[i].cwdzsheng + cheweiData[i].cwdzshi + cheweiData[i].cwdzqu +'</div><div class="col-xs-12">'+ cheweiData[i].cwdzhi +'</div></div></div></div><div class="row"><div class="col-xs-5 text-right">车位证</div><div class="col-xs-5 pl20 color-gray">'+ cwzheng +'</div></div><div class="row"><div class="col-xs-5 text-right">车位贷款</div><div class="col-xs-5 pl20 color-gray">'+ cwdkuan +'</div></div></div><button class="client-icon edit btn-edit" data-itemid="'+ cheweiData[i].id +'" data-toggle="modal" data-target="#carPosModal"></button></div>'

  $("body .msg-container.chewei .swiper-wrapper").append(cheweiDataHtml);
}



//保单json
/*
var baodanData = [
  {
    "bxgsi" : "2",
    "bdlxing" : "2",
    "bdsxri" : "2017-04-01",
    "bdsxnxian" : "3",
    "jffshi" : "1",
    "jffsyuan" : "1000",
    "yjfcshu" : "20",
    "xjjzhi" : "2",
    "fxjl_fxsqi" : "2017-02-05",
    "fxjl_yjnrqi" : "2017-04-01"
  },
  {
    "bxgsi" : "2",
    "bdlxing" : "2",
    "bdsxri" : "2017-04-01",
    "bdsxnxian" : "3",
    "jffshi" : "1",
    "jffsyuan" : "1000",
    "yjfcshu" : "20",
    "xjjzhi" : "2",
    "fxjl_fxsqi" : "2017-02-05",
    "fxjl_yjnrqi" : "2017-04-01"
  }
];
*/

for(i in baodanData){

  var bxgsi = baoxianArr[baodanData[i].bxgsi - 1];
  var jffshi = payWayArr[baodanData[i].jffshi - 1];

  var bdlxing = '';
  var xjjzhi = '';

  switch (baodanData[i].bdlxing){
    case '1':
      bdlxing = '人寿险';
      break;
    case '2':
      bdlxing = ' 意外险';
      break;
    case '3':
      bdlxing = '重大疾病';
      break;
    case '4':
      bdlxing = '车险';
      break;
  };
  

  if (baodanData[i].xjjzhi == 1) {
    xjjzhi = '未取'
  };
  if (baodanData[i].xjjzhi == 2) {
    xjjzhi = '已领取'
  }

  baodanDataHtml = '<div class="swiper-slide"><div class="msg-content lh26 f14"><div class="row"><div class="col-xs-5 text-right">保险公司</div><div class="col-xs-5 pl20 color-gray">'+ bxgsi +'</div></div><div class="row"><div class="col-xs-5 text-right">保单类型</div><div class="col-xs-5 pl20 color-gray">'+ bdlxing +'</div></div><div class="row"><div class="col-xs-5 text-right">保单生效日</div><div class="col-xs-5 pl20 color-gray">'+ baodanData[i].bdsxri +'</div></div><div class="row"><div class="col-xs-5 text-right">保单生效年限</div><div class="col-xs-5 pl20 color-gray">'+ baodanData[i].bdsxnxian +'年</div></div><div class="row"><div class="col-xs-5 text-right">缴费方式</div><div class="col-xs-5 pl20 color-gray">'+ jffshi + baodanData[i].jffsyuan +'元</div></div><div class="row"><div class="col-xs-5 text-right">已邀费次数</div><div class="col-xs-5 pl20 color-gray">'+ baodanData[i].yjfcshu +'次</div></div><div class="row"><div class="col-xs-5 text-right">现金价值</div><div class="col-xs-5 pl20 color-gray">'+ xjjzhi +'</div></div><div class="row"><div class="col-xs-5 text-right">复效记录</div><div class="col-xs-6 pl20"><div class="row"><div class="col-xs-12">复效时期'+ baodanData[i].fxjl_fxsqi +'</div><div class="col-xs-12">应缴纳时期'+ baodanData[i].fxjl_yjnrqi +'</div></div></div></div></div><button class="client-icon edit btn-edit" data-itemid="'+ baodanData[i].id +'" data-toggle="modal" data-target="#policyMsgModal"></button></div>'
  $("body .msg-container.baodan .swiper-wrapper").append(baodanDataHtml);
}



//征信json
/*
var zhengxinData = [
  {
    "zxcxsjian" : "2017-04-01",
    "zxcxcshu" : [{"a": "1", "b": "1", "c": "20"}, {"a": "2", "b": "2", "c": "30"}],
    "zxyqi" : [{"a": "1", "b": "1", "c": "2", "d": "2000"}, {"a": "2", "b": "2", "c": "3", "d": "2888"}]
  },
  {
    "zxcxsjian" : "2017-04-01",
    "zxcxcshu" : [{"a": "1", "b": "1", "c": "20"}, {"a": "2", "b": "2", "c": "30"}],
    "zxyqi" : [{"a": "1", "b": "1", "c": "2", "d": "2000"}, {"a": "2", "b": "2", "c": "3", "d": "2888"}]
  }
];
*/

for(i in zhengxinData){

  var yqiData = zhengxinData[i].zxyqi;
  var yuqiHtml = '';
  for(n in yqiData){
    var a = zxyqiArr01[yqiData[n].a - 1];
    var b = timeArr02[yqiData[n].b - 1];
    yuqiHtml = yuqiHtml + '<div class="row"><div class="col-xs-3">'+ a +'</div><div class="col-xs-2 pl20">'+ b +'</div><div class="col-xs-1 text-center">有</div><div class="col-xs-1 text-center">'+ yqiData[n].c +'</div><div class="col-xs-1 text-center">逾期</div><div class="col-xs-3">'+ yqiData[n].d +'元</div></div>'
  }

  var cxcshuData = zhengxinData[i].zxcxcshu;
  var cxcshuHtml = '';
  for(m in cxcshuData){
    var a = zxcxcshuArr01[cxcshuData[m].a - 1];
    var b = timeArr01[cxcshuData[m].b - 1];
    cxcshuHtml = cxcshuHtml + '<div class="row"><div class="col-xs-3">'+ a +'</div><div class="col-xs-3 pl20">'+ b +'</div><div class="col-xs-1 text-center">'+ cxcshuData[m].c +'</div><div class="col-xs-1">次</div></div>';
  }

  zhengxinHtml = '<div class="swiper-slide"><div class="msg-content lh26 f14 pl50"><div class="row"><div class="col-xs-3 font-bold">征信查询时间</div><div class="col-xs-6 pl20 color-gray">'+ zhengxinData[i].zxcxsjian +'</div></div><div class="row mt20"><div class="col-xs-3 font-bold">征信查询次数</div></div>'+ cxcshuHtml +'<div class="row mt20"><div class="col-xs-3 font-bold">征信逾期</div></div>'+ yuqiHtml +'</div><button class="client-icon edit btn-edit" data-itemid="'+ zhengxinData[i].id +'" data-toggle="modal" data-target="#creditMsgModal"></button></div>';
  $("body .msg-container.zhengxin .swiper-wrapper").append(zhengxinHtml);
}



//司法案件json
/*
var sifaData = [
  {
    "jllxing" : "1",
    "ajsjian" : "2017-12-12",
    "sfkwcha" : "1"
  },
  {
    "jllxing" : "1",
    "ajsjian" : "2017-12-12",
    "sfkwcha" : "2"
  }
]
*/
for(i in sifaData){

  var jllxing = '';
  var sfkwcha = '';

  switch (sifaData[i].jllxing){
    case '1':
      jllxing = '原告';
      break;
    case '2':
      jllxing = '被执行人';
      break;
  };

  switch (sifaData[i].sfkwcha){
    case '1':
      sfkwcha = '是';
      break;
    case '2':
      sfkwcha = '否';
      break;
  };

  sifaDataHtml = '<div class="swiper-slide"><div class="msg-content lh26 f14"><div class="row"><div class="col-xs-5 text-right">纪录类型</div><div class="col-xs-5 pl20 color-gray">'+ jllxing +'</div></div><div class="row"><div class="col-xs-5 text-right">案件时间</div><div class="col-xs-5 pl20 color-gray">'+ sifaData[i].ajsjian +'</div></div><div class="row"><div class="col-xs-5 text-right">是否可网查</div><div class="col-xs-5 pl20 color-gray">'+ sfkwcha +'</div></div></div><button class="client-icon edit btn-edit" data-itemid="'+ sifaData[i].id +'" data-toggle="modal" data-target="#judicialModal"></button></div>'
  $("body .msg-container.sifa .swiper-wrapper").append(sifaDataHtml);
}


// 备注json
/*
var beizhuData = [
  {
    "update" : "2017-12-04",
    "memo" : "明天签约"
  },
  {
    "update" : "2017-12-05",
    "memo" : "明天签约"
  }
]
*/
for(i in beizhuData){
  beizhuDataHtml = '<div class="swiper-slide"><div class="msg-content lh26 f14"><div class="row"><div class="col-xs-5 text-right">日期</div><div class="col-xs-5 pl20 color-gray">'+ beizhuData[i].update +'</div></div><div class="row"><div class="col-xs-5 text-right">备注</div><div class="col-xs-5 pl20 color-gray">'+ beizhuData[i].memo +'</div></div></div><button class="client-icon edit btn-edit" data-itemid="'+ beizhuData[i].id +'" data-toggle="modal" data-target="#remarkModal"></button></div>'
  $("body .msg-container.beizhu .swiper-wrapper").append(beizhuDataHtml);
}


//债务信息json
/*
var zhaiwuData = [
  {
    "id" : "1",
    "xyka" : "1",
    "zshu" : "5",
    "zsxe" : "30",
    "dzzgsxe" : "20",
    "dqyyong" : "10",
    "j6gyjyong" : "11",
    "dzhang" : "3",
    "djie" : "3",
    "zfu" : "3",
    "jgou" : "4",
    "gsi" : "3",
    "fkuan" : "2",
    "dkje" : "22",
    "sybjin" : "11",
    "fksjian" : "2017-04-12",
    "dkqxian" : "3",
    "hkfshi" : "2",
    "ygje" : "12",
    "dbje" : "11",
    "dblxing" : "2",
    "dbztai" : "1"
  }
]
*/
for(i in zhaiwuData){

  zhaiwuDataHtml = '<div class="swiper-slide"><div class="msg-content lh26 f14"><div class="xinyongka-msg"><div class="row"><div class="col-xs-5 font-bold">信用卡</div></div><div class="row"><div class="col-xs-5 text-right">张数</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].zshu +'</div></div><div class="row"><div class="col-xs-5 text-right">总授信额</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].zsxe +'万元</div></div><div class="row"><div class="col-xs-5 text-right">单张最高授信额</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].dzzgsxe +'万元</div></div><div class="row"><div class="col-xs-5 text-right">当前已用</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].dqyyong +'元</div></div><div class="row"><div class="col-xs-5 text-right">近6个月均用</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].j6gyjyong +'万元</div></div><div class="row"><div class="col-xs-5 text-right">特殊状态</div><div class="col-xs-5 pl20 color-gray"><div class="row"><div class="col-xs-12">呆帐'+ zhaiwuData[i].dzhang +'张</div><div class="col-xs-12">冻结'+ zhaiwuData[i].djie +'张</div><div class="col-xs-12">止付'+ zhaiwuData[i].zfu +'张</div></div></div></div></div><div class="xinyongdaikuan-msg"><div class="row"><div class="col-xs-5 font-bold">信用贷款贷款</div></div><div class="row"><div class="col-xs-5 text-right">机构</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].jgou_c +'</div></div><div class="row"><div class="col-xs-5 text-right">公司</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].gsi_c +'</div></div><div class="row"><div class="col-xs-5 text-right">放款</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].fkuan_c +'</div></div><div class="row"><div class="col-xs-5 text-right">贷款金额</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].dkje +'万元</div></div><div class="row"><div class="col-xs-5 text-right">剩余本金</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].sybjin +'万元</div></div><div class="row"><div class="col-xs-5 text-right">放款时间</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].fksjian +'</div></div><div class="row"><div class="col-xs-5 text-right">贷款期限</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].dkqxian +'</div></div><div class="row"><div class="col-xs-5 text-right">还款方式</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].hkfshi +'</div></div><div class="row"><div class="col-xs-5 text-right">月供金额</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].ygje +'元</div></div></div><div class="xinyongdaikuan-msg"><div class="row"><div class="col-xs-5 font-bold">对外担保</div></div><div class="row"><div class="col-xs-5 text-right">担保金额</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].dbje +'万元</div></div><div class="row"><div class="col-xs-5 text-right">担保类型</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].dblxing +'</div></div><div class="row"><div class="col-xs-5 text-right">担保状态</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].dbztai +'</div></div></div></div><button class="client-icon edit btn-edit" data-itemid="'+ zhaiwuData[i].id +'" data-toggle="modal" data-target="#debtMsgModal"></button></div>'
  $("body .msg-container.zhaiwu .swiper-wrapper").append(zhaiwuDataHtml);
}



/* 点击信息弹窗 */
  setTimeout(function () {
    $(".msg-container").css('opacity', 1).hide();
  }, 50)

  $(".item-need").click(function () {
    $(".msg-container.xuqiu").show();

    var swiper = new Swiper('.xuqiu .swiper-container', {
      pagination: '.swiper-p2',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 1
    });
  });

  $(".item-gongzuo").click(function () {
    $(".msg-container.gongzuo").show();

    var swiper2 = new Swiper('.gongzuo .swiper-container', {
      pagination: '.swiper-m2',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 1
    });
  });

  $(".item-shouru").click(function () {
    $(".msg-container.shouru").show();

    var swiper3 = new Swiper('.shouru .swiper-container', {
      pagination: '.swiper-m3',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 1
    });
  });

  $(".item-fangchan").click(function () {
    $(".msg-container.fangchan").show();

    var swiper4 = new Swiper('.fangchan .swiper-container', {
      pagination: '.swiper-m4',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 1
    });
  });

  $(".item-chechan").click(function () {
    $(".msg-container.chechan").show();

    var swiper5 = new Swiper('.chechan .swiper-container', {
      pagination: '.swiper-m5',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 1
    });
  });

  $(".item-chewei").click(function () {
    $(".msg-container.chewei").show();

    var swiper6 = new Swiper('.chewei .swiper-container', {
      pagination: '.swiper-m6',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 1
    });
  });

  $(".item-baodan").click(function () {
    $(".msg-container.baodan").show();

    var swiper7 = new Swiper('.baodan .swiper-container', {
      pagination: '.swiper-m7',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 1
    });
  });

  $(".item-zhaiwu").click(function () {
    $(".msg-container.zhaiwu").show();

    var swiper8 = new Swiper('.zhaiwu .swiper-container', {
      pagination: '.swiper-m8',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 1
    });
  });

  $(".item-zhengxin").click(function () {
    $(".msg-container.zhengxin").show();

    var swiper9 = new Swiper('.zhengxin .swiper-container', {
      pagination: '.swiper-m7',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 1
    });
  });

  $(".item-sifa").click(function () {
    $(".msg-container.sifa").show();

    var swiper10 = new Swiper('.sifa .swiper-container', {
      pagination: '.swiper-m10',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 1
    });

  });

  $(".item-beizhu").click(function () {
    $(".msg-container.beizhu").show();

    var swiper11 = new Swiper('.beizhu .swiper-container', {
      pagination: '.swiper-m11',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 1
    });
  });

  $(".information-list .btn-close").click(function () {
    $(".msg-container").hide();
  })



//合同json
/*
var contractData = [
  {
    "id" : "11",
    "update" : "2017-12-12",
    "customerid" : "1",
    "wjian" : "/images/logo.png",
    "zllxing" : "1"
  },
  {
    "id" : "12",
    "update" : "2017-12-12",
    "customerid" : "3",
    "wjian" : "/images/logo.png",
    "zllxing" : "2"
  }
]
*/
var contractDataHtml = '';
for(i in contractData){

  var zllxing = contactTypeArr[contractData[i].zllxing - 1];
  
  contractDataHtml = contractDataHtml + '<li data-contactid="'+ contractData[i].id +'"><div class="row mt15 lh34"><div class="col-xs-6 text-right">合同类型：</div><div class="col-xs-6 pl10">'+ zllxing +'</div></div><div class="row mt5 lh34"><div class="col-xs-6 text-right">上传日期：</div><div class="col-xs-6 pl10">'+ contractData[i].update +'</div></div><div class="row mt5 lh34"><div class="col-xs-6 text-right">文件：</div><div class="col-xs-3 pl10"><a class="btn-orange" target="view_window" href="'+ contractData[i].wjian +'" data-imgurl="'+ contractData[i].wjian +'">预览</a></div><div class="col-xs-2"><span class="change-btn" style="color: #337ab7; cursor: pointer" data-contactid="'+ contractData[i].id +'">修改</span></div></div><div class="card-type">'+ contractData[i].id +'</div><div class="bottom-line"></div></li> '
  //console.log(contractDataHtml)
}

$(".client-icon.zhang").click(function(){

  $(".modal-body .contract-content").html('');
  $(".hetong-form").attr('value', "addcontracts");
  $("#contractModal .btn-add").text('添加');
  $("#contractModal .filename").text('');

  setTimeout(function(){
    $(".modal-body .contract-content").append(contractDataHtml);
    $(".modal-body .change-btn").hide();
  }, 300);
})


function getFileName(path){
    var pos = path.lastIndexOf("\\");
    return path.substring(pos+1);  
}

$('#contractUpload').change(function(){
  console.log(2222222)
  var filePath = $("#contractUpload").val();
  var fileName = getFileName(filePath);
  /*function getFileName(path){
    var pos = path.lastIndexOf("\\");
    return path.substring(pos+1);  
  }*/
  console.log(fileName)
  $("#contractModal .filename").text(fileName);
})

$('body').on('click', ".contract-content .change-btn", function(){

  var contractId = $(this).data("contactid");
  console.log(contractId);
  $(".hetong-form").attr('value', "savecontracts");
  $(".ipt-id").val(contractId);
  $("#contractModal .btn-add").text('保存');
  // $("#contactTypeSel").val(3);
  //console.log($("#contractUpload").val());
  //$("#contractModal .filename").text('aaaa.jpg');

  $.ajax({
      'type': 'GET',
      'url': 'customer-detail.php?id='+ contractId +'&action=jsoncontracts',
      'dataType': 'json',
      'success': function (response) {
          var data = response;
          console.log(data);
          $("#contactTypeSel").val(data.zllxing);

          //var filePath = data.wjian;
          //console.log(filePath)
          //var fileName = filePath.substring(filePath.lastIndexOf("\\")+1);
          //$("#contractModal .filename").text(fileName);
      },
      'error' : function(){
          alert("合同信息修改请求出错")
      }
  });
})

//合同---end


//左侧资产json
/*
var zichanData = [
  {
    "id" : "18",
    "update" : "2017-12-12",
    "customerid" : "1",
    "wjian" : "/images/logo.png",
    "zllxing" : "1"
  },
  {
    "id" : "13",
    "update" : "2017-12-12",
    "customerid" : "3",
    "wjian" : "/images/logo.png",
    "zllxing" : "2"
  }
]
*/
var zichanDataHtml = '';
for(i in zichanData){

  var zllxing = dataTypeArr[zichanData[i].zllxing - 1];
  
  zichanDataHtml = zichanDataHtml + '<li data-zichanid="'+ zichanData[i].id +'"><div class="row mt15 lh34"><div class="col-xs-6 text-right">资料类型：</div><div class="col-xs-6 pl10">'+ zllxing +'</div></div><div class="row mt5 lh34"><div class="col-xs-6 text-right">上传日期：</div><div class="col-xs-6 pl10">'+ zichanData[i].update +'</div></div><div class="row mt5 lh34"><div class="col-xs-6 text-right">文件：</div><div class="col-xs-3 pl10"><a class="btn-orange" target="view_window" href="'+ zichanData[i].wjian +'" data-imgurl="'+ zichanData[i].wjian +'">预览</a></div><div class="col-xs-2"><span class="change-btn" style="color: #337ab7; cursor: pointer" data-zichanid="'+ zichanData[i].id +'">修改</span></div></div><div class="card-type">'+ zichanData[i].id +'</div><div class="bottom-line"></div></li> '
  //console.log(contractDataHtml)
}

$(".client-icon.wu").click(function(){

  $(".modal-body .zichan-content").html('');
  $(".zichan-form").attr('value', "addassets");
  $("#assetsMsgModal .btn-add").text('添加');
  $("#assetsMsgModal .filename").text('');

  setTimeout(function(){
    $(".modal-body .zichan-content").append(zichanDataHtml);
    $(".modal-body .change-btn").hide();
  }, 300);
})

$('#zichanUpload').change(function(){
  console.log(2222222)
  var filePath = $("#zichanUpload").val();
  var fileName = getFileName(filePath);
  /*function getFileName(path){
    var pos = path.lastIndexOf("\\");
    return path.substring(pos+1);  
  }*/
  console.log(fileName)
  $("#assetsMsgModal .filename").text(fileName);
})

$('body').on('click', ".zichan-content .change-btn", function(){

  var zichanId = $(this).data("zichanid");
  console.log(zichanId);
  $(".zichan-form").attr('value', "saveassets");
  $(".ipt-id").val(zichanId);
  $("#assetsMsgModal .btn-add").text('保存');
  //$("#dataTypeSel01").val(3);
  //console.log($("#contractUpload").val());
  //$("#assetsMsgModal .filename").text('aaaa.jpg');

  $.ajax({
      'type': 'GET',
      'url': 'customer-detail.php?id='+ zichanId +'&action=jsonassets',
      'dataType': 'json',
      'success': function (response) {
          var data = response;
          console.log(data);
          $("#dataTypeSel01").val(data.zllxing);
      },
      'error' : function(){
          alert("资产信息修改请求出错")
      }
  });
})



//左侧征信json
/*
var zhengxinLData = [
  {
    "id" : "18",
    "update" : "2017-12-12",
    "customerid" : "1",
    "wjian" : "/images/logo.png",
    "zllxing" : "1"
  },
  {
    "id" : "13",
    "update" : "2017-12-12",
    "customerid" : "3",
    "wjian" : "/images/logo.png",
    "zllxing" : "2"
  }
]
*/
var zhengxinDataLHtml = '';
for(i in zhengxinDataL){

  var zllxing = zxinArr02[zhengxinDataL[i].zllxing - 1];
  
  zhengxinDataLHtml = zhengxinDataLHtml + '<li data-zhengxinid="'+ zhengxinDataL[i].id +'"><div class="row mt15 lh34"><div class="col-xs-6 text-right">征信类型：</div><div class="col-xs-6 pl10">'+ zllxing +'</div></div><div class="row mt5 lh34"><div class="col-xs-6 text-right">上传日期：</div><div class="col-xs-6 pl10">'+ zhengxinDataL[i].update +'</div></div><div class="row mt5 lh34"><div class="col-xs-6 text-right">文件：</div><div class="col-xs-3 pl10"><a class="btn-orange" target="view_window" href="'+ zhengxinDataL[i].wjian +'" data-imgurl="'+ zhengxinDataL[i].wjian +'">预览</a></div><div class="col-xs-2"><span class="change-btn" style="color: #337ab7; cursor: pointer" data-zhengxinid="'+ zhengxinDataL[i].id +'">修改</span></div></div><div class="card-type">'+ zhengxinDataL[i].id +'</div><div class="bottom-line"></div></li> '
  //console.log(contractDataHtml)
}

$(".client-icon.zheng1").click(function(){

  $(".modal-body .zhengxin-content").html('');
  $(".zhengxin-form").attr('value', "addcredits");
  $("#creditModal .btn-add").text('添加');
  $("#creditModal .filename").text('');

  setTimeout(function(){
    $(".modal-body .zhengxin-content").append(zhengxinDataLHtml);
    $(".modal-body .change-btn").hide();
  }, 300);
})

$('#zhengxinUpload').change(function(){
  console.log(2222222)
  var filePath = $("#zhengxinUpload").val();
  var fileName = getFileName(filePath);
  /*function getFileName(path){
    var pos = path.lastIndexOf("\\");
    return path.substring(pos+1);  
  }*/
  console.log(fileName)
  $("#creditModal .filename").text(fileName);
})

$('body').on('click', ".zhengxin-content .change-btn", function(){

  var zhengxinId = $(this).data("zhengxinid");
  console.log(zhengxinId);
  $(".zhengxin-form").attr('value', "savecredits");
  $(".ipt-id").val(zhengxinId);
  $("#creditModal .btn-add").text('保存');
  //$("#zxinTypeSel").val(3);
  //console.log($("#contractUpload").val());
  //$("#creditModal .filename").text('aaaa.jpg');

  $.ajax({
      'type': 'GET',
      'url': 'customer-detail.php?id='+ zhengxinId +'&action=jsoncredits',
      'dataType': 'json',
      'success': function (response) {
          var data = response;
          console.log(data);
          $("#zxinTypeSel").val(data.zllxing);
      },
      'error' : function(){
          alert("征信信息修改请求出错")
      }
  });
})




//左侧银行卡json
/*
var bankCardData = [
  {
    "id" : "22",
    "yhkgshu" : "2",
    "dsfxming" : "乔帮主",
    "dsfsfzhma" : "123123451526456715",
    "zhlxing" : "2",
    "yhang" : "3",
    "hhao" : "56778",
    "yhzhao" : "232323",
    "xykyxqi" : "2017-04-13",
    "cvcma" : "690"
  },
  {
    "id" : "32",
    "yhkgshu" : "1",
    "dsfxming" : "乔帮主",
    "dsfsfzhma" : "123123451526456715",
    "zhlxing" : "3",
    "yhang" : "6",
    "hhao" : "5677899",
    "yhzhao" : "232323",
    "xykyxqi" : "2017-04-13",
    "cvcma" : "690"
  }
]
*/
var bankCardDataHtml = '';
for(i in bankCardData){
  bankCardData[i].yhkgshu
  var yhkgshu = '';
  var unshow = '';
  var unshow2 = '';
  var zhlxing = '';
  if (bankCardData[i].yhkgshu == 1) {
    yhkgshu = '本人';
    unshow = 'unshow';
  }
  if (bankCardData[i].yhkgshu == 2) {
    yhkgshu = '第三方';
  };

  switch (bankCardData[i].zhlxing){
    case '1':
      zhlxing = '储蓄卡';
      unshow2 = 'unshow';
      break;
    case '2':
      zhlxing = '存折';
      unshow2 = 'unshow';
      break;
    case '3':
      zhlxing = '信用卡';
      break;
  };

  var yhang = bankArr[bankCardData[i].yhang - 1];
  
  bankCardDataHtml = bankCardDataHtml + '<li><div class="row mt15"><div class="col-xs-4 text-right">银行卡归属：</div><div class="col-xs-8 pl10">'+ yhkgshu +'</div></div><div class="dsf-card '+ unshow +'"><div class="row mt5"><div class="col-xs-4 text-right">第三方姓名：</div><div class="col-xs-8 pl10">'+ bankCardData[i].dsfxming +'</div></div><div class="row mt5"><div class="col-xs-4 text-right">第三方身份证：</div><div class="col-xs-8 pl10">'+ bankCardData[i].dsfsfzhma +'</div></div></div><div class="row mt5"><div class="col-xs-4 text-right">账户类型：</div><div class="col-xs-8 pl10">'+ zhlxing +'</div></div><div class="row mt5"><div class="col-xs-4 text-right">银行：</div><div class="col-xs-8 pl10">'+ yhang +'</div></div><div class="row mt5"><div class="col-xs-4 text-right">行号：</div><div class="col-xs-8 pl10">'+ bankCardData[i].hhao +'</div></div><div class="row mt5"><div class="col-xs-4 text-right">银行帐号：</div><div class="col-xs-8 pl10">'+ bankCardData[i].yhzhao +'</div></div><div class="xyka-model '+ unshow2 +'"><div class="row mt5"><div class="col-xs-4 text-right">信用卡有效期：</div><div class="col-xs-8 pl10">'+ bankCardData[i].xykyxqi +'</div></div><div class="row mt5"><div class="col-xs-4 text-right">CVC码：</div><div class="col-xs-8 pl10">'+ bankCardData[i].cvcma +'</div></div></div><div class="change-btn btn-change" data-cardid="'+ bankCardData[i].id +'" style="cursor: pointer">修改</div><div class="card-type">'+ bankCardData[i].id +'</div><div class="bottom-line"></div></li>'
};

$(".client-icon.card").click(function(){

  $(".modal-body .bankcard-content").html('');
  $(".bankcard-form").attr('value', "addbanks");
  $("#cardMsgModal .btn-add").text('添加');

  setTimeout(function(){
    $(".modal-body .bankcard-content").append(bankCardDataHtml);
    $(".modal-body .change-btn").hide();
  }, 300);
});

$("input[name='radioName'][checked]").val();


$('body').on('click', ".bankcard-content .change-btn", function(){

  var bankcardId = $(this).data("cardid");
  console.log(bankcardId);
  $(".bankcard-form").attr('value', "savebanks");
  $(".ipt-id").val(bankcardId);
  $("#cardMsgModal .btn-add").text('保存');
  /*$("input[name='ipt-yhkgshu'][value=2]").attr("checked",true);
  
  $("#cardMsgModal input[name='ipt-dsfxming']").val('乔帮主');
  $("#cardMsgModal input[name='ipt-dsfsfzhma']").val('3456789345678567');
  $("input[name='ipt-zhlxing'][value=3]").attr("checked",true);
  
  $("#cardMsgModal select[name='ipt-yhang']").val(2);
  $("#cardMsgModal input[name='ipt-hhao']").val('123123');
  $("#cardMsgModal input[name='ipt-yhzhao']").val('12312387567865675');

  $("#cardMsgModal input[name='ipt-xykyxqi']").val('2017-04');
  $("#cardMsgModal input[name='ipt-cvcma']").val('123');

  yhkDsfHide(2)
  cardxykShow(3)*/
  
  //$("#zxinTypeSel").val(3);
  //console.log($("#contractUpload").val());
  //$("#creditModal .filename").text('aaaa.jpg');

  $.ajax({
      'type': 'GET',
      'url': 'customer-detail.php?id='+ bankcardId +'&action=jsonbanks',
      'dataType': 'json',
      'success': function (response) {
          var data = response;
          console.log(data);
          $('input[name="ipt-yhkgshu"][value='+ data.yhkgshu +']').attr("checked",true);
  
          $("#cardMsgModal input[name='ipt-dsfxming']").val(data.dsfxming);
          $("#cardMsgModal input[name='ipt-dsfsfzhma']").val(data.dsfsfzhma);
          $('input[name="ipt-zhlxing"][value='+ data.zhlxing +']').attr("checked",true);
          
          $("#cardMsgModal select[name='ipt-yhang']").val(data.yhang);
          $("#cardMsgModal input[name='ipt-hhao']").val(data.hhao);
          $("#cardMsgModal input[name='ipt-yhzhao']").val(data.yhzhao);

          $("#cardMsgModal input[name='ipt-xykyxqi']").val(data.xykyxqi);
          $("#cardMsgModal input[name='ipt-cvcma']").val(data.cvcma);

          yhkDsfHide(data.yhkgshu);
          cardxykShow(data.zhlxing);
      },
      'error' : function(){
          alert("银行卡信息修改请求出错")
      }
  });
})


//信息模块修改信息

var addMessage = function(formName, addBtn, formVal){
  $(formName).attr('value', formVal);
  $(addBtn).text('添加');
}

var changeMessage = function(formName, addBtn, formVal){
  $(formName).attr('value', formVal);
  $(addBtn).text('保存');
}

//需求信息修改
$(".xuqiu-add").click(function(){
  addMessage("#needModal .need-form", "#needModal .btn-add", 'addneed');
});


$("body").on('click', '.xuqiu .btn-edit', function(){

  var dataid = $(this).data('itemid');
  $(".ipt-id").val(dataid);
  console.log(dataid);

  changeMessage("#needModal .need-form", "#needModal .btn-add", 'saveneed');

  /*$("#needModal input[name='ipt-fkdate']").val('2017-04');
  $("#needModal input[name='ipt-dkmoney']").val('50');
  $("#needModal select[name='ipt-hkqxian']").val(2);
  $("#needModal select[name='ipt-dklxing']").val(2);
  $("#needModal select[name='ipt-hkfshi']").val(2);
  $("#needModal select[name='ipt-jpxing']").val(2);*/

  $.ajax({
      'type': 'GET',
      'url': 'customer-detail.php?id='+ dataid +'&action=jsonneed',
      'dataType': 'json',
      'success': function (response) {
          var data = response;
          console.log(data);
          $("#needModal input[name='ipt-fkdate']").val(data.fkdate);
          $("#needModal input[name='ipt-dkmoney']").val(data.dkmoney);
          $("#needModal select[name='ipt-hkqxian']").val(data.hkqxian);
          $("#needModal select[name='ipt-dklxing']").val(data.dklxing);
          $("#needModal select[name='ipt-hkfshi']").val(data.hkfshi);
          $("#needModal select[name='ipt-jpxing']").val(data.jpxing);
      },
      'error' : function(){
          alert("需求信息修改请求出错")
      }
  });
})


//工作信息修改
$(".gongzuo-add").click(function(){
  addMessage("#jobModal .job01-form", "#jobModal .btn-add", 'addjob');
});


$("body").on('click', '.gongzuo .btn-edit', function(){

  var dataid = $(this).data('itemid');
  $(".ipt-id").val(dataid);
  console.log(dataid);
  /*var a = 1;
  if (a == 0) {
    $('#job-other').hide();
    $('#job-own').show();
    changeMessage("#jobModal .job01-form", "#jobModal .btn-add", 'saveneed');
    $('input[name="ipt-jobkind"][value='+ 0 +']').attr("checked",true);
    $('input[name="ipt-yyzzhao"][value='+ 1 +']').attr("checked",true);
    $("#jobModal input[name='ipt-gsming']").val('50');
    $("#jobModal input[name='ipt-zcdate']").val('2017-06');
    $("#jobModal select[name='ipt-gsdzsheng']").val('广东省');
    $("#jobModal select[name='ipt-gsdzshi']").val('广州市');
    $("#jobModal select[name='ipt-gsdzqu']").val('天河区');
    $("#jobModal input[name='ipt-gsdzhi']").val('体育西路');
    $("#jobModal select[name='ipt-gslxing']").val(3);
    $('input[name="ipt-fren"][value='+ 2 +']').attr("checked",true);
    $('input[name="ipt-zgbli"][value='+ 1 +']').attr("checked",true);
    $("#jobModal input[name='ipt-zgblid']").val('11');
    $('input[name="ipt-gflxing"][value='+ 2 +']').attr("checked",true);

  }
  if (a == 1) {
    $('#job-other').show();
    $('#job-own').hide();
    changeMessage("#jobModal .job02-form", "#jobModal .btn-add", 'saveneed');
    $('input[name="ipt-jobkind"][value='+ 1 +']').attr("checked",true);
    $("#jobModal input[name='ipt-gsming']").val('嘻嘻金融');
    $("#jobModal select[name='ipt-gsdzsheng']").val('广东省');
    $("#jobModal select[name='ipt-gsdzshi']").val('广州市');
    $("#jobModal select[name='ipt-gsdzqu']").val('天河区');
    $("#jobModal input[name='ipt-gsdzhi']").val('体育西路');
    $("#jobModal select[name='ipt-gslxing']").val(3);
    $('input[name="ipt-gwei"][value='+ 2 +']').attr("checked",true);
    $("#jobModal input[name='ipt-gwmcheng']").val('11111');
    $('input[name="ipt-ldgxi"][value='+ 2 +']').attr("checked",true);
    $("#jobModal select[name='ipt-lwpqgsszdsheng']").val('广东省');
    $("#jobModal select[name='ipt-lwpqgsszdshi']").val('广州市');
    $("#jobModal input[name='ipt-lwpqgsming']").val('嘻嘻金融');
    $("#jobModal input[name='ipt-rzdate']").val('2017-06');
  };*/


  $.ajax({
      'type': 'GET',
      'url': 'customer-detail.php?id='+ dataid +'&action=jsonjob',
      'dataType': 'json',
      'success': function (response) {
          var data = response;
          console.log(data);
          var jobType = data.jobkind;
          if (jobType == 0) {
            $('#job-other').hide();
            $('#job-own').show();
            changeMessage("#jobModal .job01-form", "#jobModal .btn-add", 'savejob');
            $('input[name="ipt-jobkind"][value='+ data.jobkind +']').attr("checked",true);
            $('input[name="ipt-yyzzhao"][value='+ data.yyzzhao +']').attr("checked",true);
            $("#jobModal input[name='ipt-gsming']").val(data.gsming);
            $("#jobModal input[name='ipt-zcdate']").val(data.zcdate);
            $("#jobModal select[name='ipt-gsdzsheng']").val(data.gsdzsheng);
            $("#jobModal select[name='ipt-gsdzshi']").val(data.gsdzshi);
            $("#jobModal select[name='ipt-gsdzqu']").val(data.gsdzqu);
            $("#jobModal input[name='ipt-gsdzhi']").val(data.gsdzhi);
            $("#jobModal select[name='ipt-gslxing']").val(data.gslxing);
            $('input[name="ipt-fren"][value='+ data.fren +']').attr("checked",true);
            $('input[name="ipt-zgbli"][value='+ data.zgbli +']').attr("checked",true);
            $("#jobModal input[name='ipt-zgblid']").val(data.zgblid);
            $('input[name="ipt-gflxing"][value='+ data.gflxing +']').attr("checked",true);

          }
          if (jobType == 1) {
            $('#job-other').show();
            $('#job-own').hide();
            changeMessage("#jobModal .job02-form", "#jobModal .btn-add", 'savejob');
            $('input[name="ipt-jobkind"][value='+ data.jobkind +']').attr("checked",true);
            $("#jobModal input[name='ipt-gsming']").val(data.gsming);
            $("#jobModal select[name='ipt-gsdzsheng']").val(data.gsdzsheng);
            $("#jobModal select[name='ipt-gsdzshi']").val(data.gsdzshi);
            $("#jobModal select[name='ipt-gsdzqu']").val(data.gsdzqu);
            $("#jobModal input[name='ipt-gsdzhi']").val(data.gsdzhi);
            $("#jobModal select[name='ipt-gslxing']").val(data.gslxing);
            $('input[name="ipt-gwei"][value='+ data.gwei +']').attr("checked",true);
            $("#jobModal input[name='ipt-gwmcheng']").val(data.gwmcheng);
            $('input[name="ipt-ldgxi"][value='+ data.ldgxi +']').attr("checked",true);
            $("#jobModal select[name='ipt-lwpqgsszdsheng']").val(data.lwpqgsszdsheng);
            $("#jobModal select[name='ipt-lwpqgsszdshi']").val(data.lwpqgsszdshi);
            $("#jobModal input[name='ipt-lwpqgsming']").val(data.lwpqgsming);
            $("#jobModal input[name='ipt-rzdate']").val(data.rzdate);
          };
      },
      'error' : function(){
          alert("工作信息修改请求出错")
      }
  });
})


//房产信息修改

$(".fangchan-add").click(function(){
  addMessage("#houseModal .house-form", "#houseModal .btn-add", 'addhouse');
});


$("body").on('click', '.fangchan .btn-edit', function(){

  var dataid = $(this).data('itemid');
  $(".ipt-id").val(dataid);
  console.log(dataid);

  changeMessage("#houseModal .house-form", "#houseModal .btn-add", 'savehouse');

  /*$("#houseModal select[name='ipt-fwlxing1']").val(2);
  $("#houseModal select[name='ipt-fwlxing2']").val(2);
  $("#houseModal select[name='ipt-fwlxing3']").val(2);
  $('#houseModal input[name="ipt-fwsyquan"][value='+ 1 +']').attr("checked",true);
  $("#houseModal select[name='ipt-fwsyquan2']").val(2);
  $("#houseModal select[name='ipt-fwsyquan3']").val(2);
  $("#houseModal input[name='ipt-fwjcri']").val('2017-04');
  $("#houseModal input[name='ipt-gfri']").val('2017-04');
  $("#houseModal input[name='ipt-fwjzmji']").val('2017-04');
  $("#houseModal input[name='ipt-fwsymji']").val('2017-04');
  $("#houseModal select[name='ipt-fczdzsheng']").val('广东省');
  $("#houseModal select[name='ipt-fczdzshi']").val('广州市');
  $("#houseModal select[name='ipt-fczdzqu']").val('天河区');
  $("#houseModal input[name='ipt-fczdzhi']").val('2017-04');
  $("#houseModal select[name='ipt-yjdzsheng']").val('广东省');
  $("#houseModal select[name='ipt-yjdzshi']").val('广州市');
  $("#houseModal select[name='ipt-yjdzqu']").val('天河区');
  $("#houseModal input[name='ipt-yjdzhi']").val('2017-04');
  $("#houseModal input[name='ipt-fwxjia']").val('2017-04');
  $('#houseModal input[name="ipt-fczheng"][value='+ 1 +']').attr("checked",true);
  $("#houseModal select[name='ipt-fwdkuan']").val(2);*/


  $.ajax({
      'type': 'GET',
      'url': 'customer-detail.php?id='+ dataid +'&action=jsonhouse',
      'dataType': 'json',
      'success': function (response) {
          var data = response;
          console.log(data);
          $("#houseModal select[name='ipt-fwlxing1']").val(data.fwlxing1);
          $("#houseModal select[name='ipt-fwlxing2']").val(data.fwlxing2);
          $("#houseModal select[name='ipt-fwlxing3']").val(data.fwlxing3);
          $('#houseModal input[name="ipt-fwsyquan"][value='+ data.fwsyquan +']').attr("checked",true);
          $("#houseModal select[name='ipt-fwsyquan2']").val(data.fwsyquan2);
          $("#houseModal select[name='ipt-fwsyquan3']").val(data.fwsyquan3);
          $("#houseModal input[name='ipt-fwjcri']").val(data.fwjcri);
          $("#houseModal input[name='ipt-gfri']").val(data.gfri);
          $("#houseModal input[name='ipt-fwjzmji']").val(data.fwjzmji);
          $("#houseModal input[name='ipt-fwsymji']").val(data.fwsymji);
          $("#houseModal select[name='ipt-fczdzsheng']").val(data.fczdzsheng);
          $("#houseModal select[name='ipt-fczdzshi']").val(data.fczdzshi);
          $("#houseModal select[name='ipt-fczdzqu']").val(data.fczdzqu);
          $("#houseModal input[name='ipt-fczdzhi']").val(data.fczdzhi);
          $("#houseModal select[name='ipt-yjdzsheng']").val(data.yjdzsheng);
          $("#houseModal select[name='ipt-yjdzshi']").val(data.yjdzshi);
          $("#houseModal select[name='ipt-yjdzqu']").val(data.yjdzqu);
          $("#houseModal input[name='ipt-yjdzhi']").val(data.yjdzhi);
          $("#houseModal input[name='ipt-fwxjia']").val(data.fwxjia);
          $('#houseModal input[name="ipt-fczheng"][value='+ data.fczheng +']').attr("checked",true);
          $("#houseModal select[name='ipt-fwdkuan']").val(data.fwdkuan);
      },
      'error' : function(){
          alert("房产信息修改请求出错")
      }
  });
})


//车产信息修改

$(".chechan-add").click(function(){
  addMessage("#carMsgModal .car-form", "#carMsgModal .btn-add", 'addcar');
});


$("body").on('click', '.chechan .btn-edit', function(){

  var dataid = $(this).data('itemid');
  $(".ipt-id").val(dataid);
  console.log(dataid);

  changeMessage("#carMsgModal .car-form", "#carMsgModal .btn-add", 'savecar');

  
  /*$("#carMsgModal select[name='ipt-cllxing']").val(2);
  $("#carMsgModal select[name='ipt-cpsheng']").val(2);
  $("#carMsgModal select[name='ipt-cpshi']").val(2);
  $("#carMsgModal input[name='ipt-cphao']").val('5566');
  $("#carMsgModal select[name='ipt-clppai']").val(2);
  $("#carMsgModal select[name='ipt-clxhao']").val(2);
  $("#carMsgModal input[name='ipt-gcrqi']").val('2017-03');
  $("#carMsgModal input[name='ipt-lcjia']").val('5566');
  $("#carMsgModal select[name='ipt-cldkuan']").val(2);
  $('#carMsgModal input[name="ipt-dkxs_fkjg0"][value='+ 1 +']').attr("checked",true);
  $("#carMsgModal select[name='ipt-fkyhang']").val(2);
  $("#carMsgModal input[name='ipt-dkrqi']").val('2017-03');
  $("#carMsgModal input[name='ipt-dkbjin']").val('5566');
  $("#carMsgModal select[name='ipt-dkschang']").val(2);
  $("#carMsgModal input[name='ipt-ygje']").val('5566');*/


  $.ajax({
      'type': 'GET',
      'url': 'customer-detail.php?id='+ dataid +'&action=jsoncar',
      'dataType': 'json',
      'success': function (response) {
          var data = response;
          console.log(data);
          $("#carMsgModal select[name='ipt-cllxing']").val(data.cllxing);
          $("#carMsgModal select[name='ipt-cpsheng']").val(data.cpsheng);
          $("#carMsgModal select[name='ipt-cpshi']").val(data.cpshi);
          $("#carMsgModal input[name='ipt-cphao']").val(data.cphao);
          $("#carMsgModal select[name='ipt-clppai']").val(data.clppai);
          $("#carMsgModal select[name='ipt-clxhao']").val(data.clxhao);
          $("#carMsgModal input[name='ipt-gcrqi']").val(data.gcrqi);
          $("#carMsgModal input[name='ipt-lcjia']").val(data.lcjia);
          $("#carMsgModal select[name='ipt-cldkuan']").val(data.cldkuan);
          $('#carMsgModal input[name="ipt-dkxs_fkjg0"][value='+ data.dkxs_fkjg +']').attr("checked",true);
          $("#carMsgModal select[name='ipt-fkyhang']").val(data.fkyhang);
          $("#carMsgModal input[name='ipt-dkrqi']").val(data.dkrqi);
          $("#carMsgModal input[name='ipt-dkbjin']").val(data.dkbjin);
          $("#carMsgModal select[name='ipt-dkschang']").val(data.dkschang);
          $("#carMsgModal input[name='ipt-ygje']").val(data.ygje);
      },
      'error' : function(){
          alert("车产信息修改请求出错")
      }
  });
})


//车位信息修改

$(".chewei-add").click(function(){
  addMessage("#carPosModal .park-form", "#carPosModal .btn-add", 'addpark');
});


$("body").on('click', '.chewei .btn-edit', function(){

  var dataid = $(this).data('itemid');
  $(".ipt-id").val(dataid);
  console.log(dataid);

  changeMessage("#carPosModal .park-form", "#carPosModal .btn-add", 'savepark');

  $("#carPosModal input[name='ipt-gmrqi']").val('2017-04');
  $("#carPosModal input[name='ipt-cwjzmji']").val('55');
  $("#carPosModal input[name='ipt-cwsymji']").val('55');
  $("#carPosModal input[name='ipt-gmjge']").val('55');
  $("#carPosModal input[name='ipt-xjge']").val('55');
  $("#carPosModal select[name='ipt-cwdzsheng']").val('广东省');
  $("#carPosModal select[name='ipt-cwdzshi']").val('广州市');
  $("#carPosModal select[name='ipt-cwdzqu']").val('天河区');
  $("#carPosModal input[name='ipt-cwdzhi']").val('55');
  $('#carPosModal input[name="ipt-cwzheng"][value='+ 1 +']').attr("checked",true);
  $('#carPosModal input[name="ipt-cwdkuan"][value='+ 1 +']').attr("checked",true);

  $.ajax({
      'type': 'GET',
      'url': 'customer-detail.php?id='+ dataid +'&action=jsonpark',
      'dataType': 'json',
      'success': function (response) {
          var data = response;
          console.log(data);
          $("#carPosModal input[name='ipt-gmrqi']").val(data.gmrqi);
          $("#carPosModal input[name='ipt-cwjzmji']").val(data.cwjzmji);
          $("#carPosModal input[name='ipt-cwsymji']").val(data.cwsymji);
          $("#carPosModal input[name='ipt-gmjge']").val(data.gmjge);
          $("#carPosModal input[name='ipt-xjge']").val(data.xjge);
          $("#carPosModal select[name='ipt-cwdzsheng']").val(data.cwdzsheng);
          $("#carPosModal select[name='ipt-cwdzshi']").val(data.cwdzshi);
          $("#carPosModal select[name='ipt-cwdzqu']").val(data.cwdzqu);
          $("#carPosModal input[name='ipt-cwdzhi']").val(data.cwdzhi);
          $('#carPosModal input[name="ipt-cwzheng"][value='+ data.cwzheng +']').attr("checked",true);
          $('#carPosModal input[name="ipt-cwdkuan"][value='+ data.cwdkuan +']').attr("checked",true);
      },
      'error' : function(){
          alert("车位信息修改请求出错")
      }
  });
})



//保单信息修改

$(".baodan-add").click(function(){
  addMessage("#policyMsgModal .policy-form", "#policyMsgModal .btn-add", 'addpolicy');
});

$("body").on('click', '.baodan .btn-edit', function(){

  var dataid = $(this).data('itemid');
  $(".ipt-id").val(dataid);
  console.log(dataid);

  changeMessage("#policyMsgModal .policy-form", "#policyMsgModal .btn-add", 'savepolicy');

  /*$("#policyMsgModal select[name='ipt-bxgsi']").val(2);
  $('#policyMsgModal input[name="ipt-bdlxing"][value='+ 1 +']').attr("checked",true);
  $("#policyMsgModal input[name='ipt-bdsxri']").val('2017-04');
  $("#policyMsgModal input[name='ipt-bdsxnxian']").val('55');
  $("#policyMsgModal select[name='ipt-jffshi']").val(2);
  $("#policyMsgModal input[name='ipt-jffsyuan']").val('55');
  $("#policyMsgModal input[name='ipt-yjfcshu']").val('55');
  $('#policyMsgModal input[name="ipt-xjjzhi"][value='+ 1 +']').attr("checked",true);
  $("#policyMsgModal input[name='ipt-fxjl_fxsqi']").val('2017-04');
  $("#policyMsgModal input[name='ipt-fxjl_yjnrqi']").val('2017-04');*/

  $.ajax({
      'type': 'GET',
      'url': 'customer-detail.php?id='+ dataid +'&action=jsonpolicy',
      'dataType': 'json',
      'success': function (response) {
          var data = response;
          console.log(data);
          $("#policyMsgModal select[name='ipt-bxgsi']").val(data.bxgsi);
          $('#policyMsgModal input[name="ipt-bdlxing"][value='+ data.bdlxing +']').attr("checked",true);
          $("#policyMsgModal input[name='ipt-bdsxri']").val(data.bdsxri);
          $("#policyMsgModal input[name='ipt-bdsxnxian']").val(data.bdsxnxian);
          $("#policyMsgModal select[name='ipt-jffshi']").val(data.jffshi);
          $("#policyMsgModal input[name='ipt-jffsyuan']").val(data.jffsyuan);
          $("#policyMsgModal input[name='ipt-yjfcshu']").val(data.yjfcshu);
          $('#policyMsgModal input[name="ipt-xjjzhi"][value='+ data.xjjzhi +']').attr("checked",true);
          $("#policyMsgModal input[name='ipt-fxjl_fxsqi']").val(data.fxjl_fxsqi);
          $("#policyMsgModal input[name='ipt-fxjl_yjnrqi']").val(data.fxjl_yjnrqi);
          var nbfei = 0;
          switch (data.jffshi){
            case '1':
              nbfei = 12 * data.jffsyuan;
              break;
            case '2':
              nbfei = 4 * data.jffsyuan;
              break;
            case '3':
              nbfei = 2 * data.jffsyuan;
              break;
            case '4':
              nbfei = 1 * data.jffsyuan;
              break;
            case '5':
              nbfei = 1 * data.jffsyuan;
              break;
          };
          $(".modal-body #policyYearNum").text(nbfei);

      },
      'error' : function(){
          alert("保单信息修改请求出错")
      }
  });
})


//债务信息修改

$(".zhaiwu-add").click(function(){
  addMessage("#debtMsgModal .debt-form", "#debtMsgModal .btn-add", 'adddebt');
});

$("body").on('click', '.zhaiwu .btn-edit', function(){

  var dataid = $(this).data('itemid');
  $(".ipt-id").val(dataid);
  console.log(dataid);

  changeMessage("#debtMsgModal .debt-form", "#debtMsgModal .btn-add", 'savedebt');

  /*$('#debtMsgModal input[name="ipt-xyka"][value='+ 1 +']').attr("checked",true);
  $("#debtMsgModal input[name='ipt-zshu']").val('55');
  $("#debtMsgModal input[name='ipt-zsxe']").val('55');
  $("#debtMsgModal input[name='ipt-dzzgsxe']").val('55');
  $("#debtMsgModal input[name='ipt-dqyyong']").val('55');
  $("#debtMsgModal input[name='ipt-j6gyjyong']").val('55');
  $("#debtMsgModal input[name='ipt-dzhang']").val('55');
  $("#debtMsgModal input[name='ipt-djie']").val('55');
  $("#debtMsgModal input[name='ipt-zfu']").val('55');
  $("#debtMsgModal select[name='ipt-jgou1']").val(2);
  $("#debtMsgModal select[name='ipt-gsi1']").val(2);
  $("#debtMsgModal select[name='ipt-fkuan1']").val(2);
  $("#debtMsgModal input[name='ipt-dkje']").val('55');
  $("#debtMsgModal input[name='ipt-sybjin']").val('55');
  $("#debtMsgModal input[name='ipt-fksjian']").val('55');
  $("#debtMsgModal select[name='ipt-dkqxian']").val(2);
  $('#debtMsgModal input[name="ipt-hkfshi"][value='+ 1 +']').attr("checked",true);
  $("#debtMsgModal input[name='ipt-ygje']").val('55');
  $("#debtMsgModal input[name='ipt-dbje']").val('55');
  $('#debtMsgModal input[name="ipt-dblxing"][value='+ 1 +']').attr("checked",true);
  $('#debtMsgModal input[name="ipt-dbztai"][value='+ 1 +']').attr("checked",true);*/

  $.ajax({
      'type': 'GET',
      'url': 'customer-detail.php?id='+ dataid +'&action=jsondebt',
      'dataType': 'json',
      'success': function (response) {
          var data = response;
          console.log(data);
          $('#debtMsgModal input[name="ipt-xyka"][value='+ data.xyka +']').attr("checked",true);
          $("#debtMsgModal input[name='ipt-zshu']").val(data.zshu);
          $("#debtMsgModal input[name='ipt-zsxe']").val(data.zsxe);
          $("#debtMsgModal input[name='ipt-dzzgsxe']").val(data.dzzgsxe);
          $("#debtMsgModal input[name='ipt-dqyyong']").val(data.dqyyong);
          $("#debtMsgModal input[name='ipt-j6gyjyong']").val(data.j6gyjyong);
          $("#debtMsgModal input[name='ipt-dzhang']").val(data.dzhang);
          $("#debtMsgModal input[name='ipt-djie']").val(data.djie);
          $("#debtMsgModal input[name='ipt-zfu']").val(data.zfu);
          $("#debtMsgModal select[name='ipt-jgou1']").val(data.jgou1);
          $("#debtMsgModal select[name='ipt-gsi1']").val(data.gsi1);
          $("#debtMsgModal select[name='ipt-fkuan1']").val(data.fkuan1);
          $("#debtMsgModal input[name='ipt-dkje']").val(data.dkje);
          $("#debtMsgModal input[name='ipt-sybjin']").val(data.sybjin);
          $("#debtMsgModal input[name='ipt-fksjian']").val(data.fksjian);
          $("#debtMsgModal select[name='ipt-dkqxian']").val(data.dkqxian);
          $('#debtMsgModal input[name="ipt-hkfshi"][value='+ data.hkfshi +']').attr("checked",true);
          $("#debtMsgModal input[name='ipt-ygje']").val(data.ygje);
          $("#debtMsgModal input[name='ipt-dbje']").val(data.dbje);
          $('#debtMsgModal input[name="ipt-dblxing"][value='+ data.dblxing +']').attr("checked",true);
          $('#debtMsgModal input[name="ipt-dbztai"][value='+ data.dbztai +']').attr("checked",true);

          if (data.xyka == 1) {
            $(".modal-body .has-credit-content").show();
          }else{
            $(".modal-body .has-credit-content").hide();
          };

      },
      'error' : function(){
          alert("债务信息修改请求出错")
      }
  });
})


//征信信息修改

$(".zhengxin-add").click(function(){
  addMessage("#creditMsgModal .credit-form", "#creditMsgModal .btn-add", 'addcredit');
});

$("body").on('click', '.zhengxin .btn-edit', function(){

  var dataid = $(this).data('itemid');
  $(".ipt-id").val(dataid);
  console.log(dataid);
  $(".modal-body #zxChaxunList").html('');
  $(".modal-body #zxYuqiList").html('');

  changeMessage("#creditMsgModal .credit-form", "#creditMsgModal .btn-add", 'savecredit');

  /*$("#creditMsgModal input[name='ipt-zxcxsjian']").val('55');
  $("#creditMsgModal select[name='ipt-zxcxcshu-a[]']").val(2);
  $("#creditMsgModal select[name='ipt-zxcxcshu-b[]']").val(2);
  $("#creditMsgModal input[name='ipt-zxcxcshu-c[]']").val('55');
  $("#creditMsgModal select[name='ipt-zxyqi-a[]']").val(2);
  $("#creditMsgModal select[name='ipt-zxyqi-b[]']").val(2);
  $("#creditMsgModal select[name='ipt-zxyqi-c[]']").val(2);
  $("#creditMsgModal input[name='ipt-zxyqi-d[]']").val('55');*/

  $.ajax({
      'type': 'GET',
      'url': 'customer-detail.php?id='+ dataid +'&action=jsoncredit',
      'dataType': 'json',
      'success': function (response) {
          var data = response;
          console.log(data);
          $("#creditMsgModal input[name='ipt-zxcxsjian']").val(data.zxcxsjian);
          var cxcshuData2 = data.zxcxcshu;

          // console.log(cxcshuData2);
          // console.log(typeof cxcshuData2);
          // console.log(data.zxcxcshu.length);
          // console.log(cxcshuData2.length);
          
          for(var i = 0; i<cxcshuData2.length; i++){
            var aa = cxcshuData2[i].a;
            var bb = cxcshuData2[i].b;
            var idx = i;
            /*var a = zxcxcshuArr01[cxcshuData2[i].a - 1];


            var b = timeArr01[cxcshuData2[i].b - 1];*/
            var cxcshuHtml2 = '<li class="row"><div class="col-xs-3 pr10"><select name="ipt-zxcxcshu-a['+ i +']" id="" class="form-control" value=""><option value=""></option><option value="1">贷款审批</option><option value="2">信用卡审批</option><option value="3">人行查询</option><option value="4">个人网查</option></select></div><div class="col-xs-3 pr10"><select name="ipt-zxcxcshu-b['+ i +']" id="" class="form-control time-sel03" value="'+ cxcshuData2[i].b +'"><option value=""></option><option value="1">近1个月</option><option value="2">近2个月</option><option value="3">近3个月</option><option value="4">近4个月</option><option value="5">近5个月</option><option value="6">近6个月</option></select></div><div class="col-xs-1"><input type="text" class="form-control" name="ipt-zxcxcshu-c[]" value="'+ cxcshuData2[i].c +'"></div><div class="col-xs-1 pl10">次</div><div class="col-xs-2"><div class="btn-add-yellow">+</div></div></li>'
            $(".modal-body #zxChaxunList").append(cxcshuHtml2);
              console.log(aa, bb);
              $("body select[name='ipt-zxcxcshu-a["+ idx +"]']").val(aa);
              $("body select[name='ipt-zxcxcshu-b["+ idx +"]']").val(bb);
          }

          if (!cxcshuData2.length) {
            var nullHtml2 = '<li class="row"><div class="col-xs-3 pr10"><select name="ipt-zxcxcshu-a0"id=""class="form-control"value=""><option value=""></option><option value="1">贷款审批</option><option value="2">信用卡审批</option><option value="3">人行查询</option><option value="4">个人网查</option></select></div><div class="col-xs-3 pr10"><select name="ipt-zxcxcshu-b0"id=""class="form-control time-sel03"value=""><option value=""></option><option value="1">近1个月</option><option value="2">近2个月</option><option value="3">近3个月</option><option value="4">近4个月</option><option value="5">近5个月</option><option value="6">近6个月</option></select></div><div class="col-xs-1"><input type="text"class="form-control"name="ipt-zxcxcshu-c[]"value=""></div><div class="col-xs-1 pl10">次</div><div class="col-xs-2"><div class="btn-add-yellow">+</div></div></li>';
            $(".modal-body #zxChaxunList").append(nullHtml2);
          };

          var yqiData2 = data.zxyqi;
          console.log(yqiData2.length);
          
          
          for(var i = 0; i<yqiData2.length; i++){
          
            var aa = yqiData2[i].a;
            var bb = yqiData2[i].b;
            var cc = yqiData2[i].c;
            var dd = yqiData2[i].d;
            var idx = i;
            var yuqiHtml2 = '<li class="row"><div class="col-xs-2 pr10"><select name="ipt-zxyqi-a['+ i +']" id="" class="form-control" value=""><option value=""></option><option value="1">信用卡</option><option value="2">贷款</option><option value="3">准贷记卡</option></select></div><div class="col-xs-2 pr10"><select name="ipt-zxyqi-b['+ i +']" id="" class="form-control time-sel03" value=""><option value=""></option><option value="1">当前</option><option value="2">半年内</option><option value="3">1年内</option><option value="4">2年内</option><option value="5">近2～5年</option></select></div><div class="col-xs-1 text-center">有</div><div class="col-xs-1"><select name="ipt-zxyqi-c['+ i +']" id=""class="form-control" value=""><option value=""></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option></select></div><div class="col-xs-1 text-center">逾期</div><div class="col-xs-2 pr10"><input type="text" class="form-control" name="ipt-zxyqi-d[]" value="'+ dd +'"></div><div class="col-xs-1 text-left pl10">元</div><div class="col-xs-1"><div class="btn-add-yellow">+</div></div></li>';
            $(".modal-body #zxYuqiList").append(yuqiHtml2);
            $("body select[name='ipt-zxyqi-a["+ idx +"]']").val(aa);
            $("body select[name='ipt-zxyqi-b["+ idx +"]']").val(bb);
            $("body select[name='ipt-zxyqi-c["+ idx +"]']").val(cc);
          }

          console.log(yqiData2.length);
          if (!yqiData2.length) {
            var nullHtml = '<li class="row"><div class="col-xs-2 pr10"><select name="ipt-zxyqi-a0"id=""class="form-control"value=""><option value=""></option><option value="1">信用卡</option><option value="2">贷款</option><option value="3">准贷记卡</option></select></div><div class="col-xs-2 pr10"><select name="ipt-zxyqi-b0"id=""class="form-control time-sel03"value=""><option value=""></option><option value="1">当前</option><option value="2">半年内</option><option value="3">1年内</option><option value="4">2年内</option><option value="5">近2～5年</option></select></div><div class="col-xs-1 text-center">有</div><div class="col-xs-1"><select name="ipt-zxyqi-c0"id=""class="form-control"value=""><option value=""></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option></select></div><div class="col-xs-1 text-center">逾期</div><div class="col-xs-2 pr10"><input type="text"class="form-control"name="ipt-zxyqi-d[]"value=""></div><div class="col-xs-1 text-left pl10">元</div><div class="col-xs-1"><div class="btn-add-yellow">+</div></div></li>';
            $(".modal-body #zxYuqiList").append(nullHtml);
          };
      },
      'error' : function(){
          alert("征信信息修改请求出错")
      }
  });
})


//司法案件信息修改

$(".sifa-add").click(function(){
  addMessage("#judicialModal .case-form", "#judicialModal .btn-add", 'addcase');
});

$("body").on('click', '.sifa .btn-edit', function(){

  var dataid = $(this).data('itemid');
  $(".ipt-id").val(dataid);
  console.log(dataid);

  changeMessage("#judicialModal .case-form", "#judicialModal .btn-add", 'savecase');

  /*$("#judicialModal select[name='ipt-jllxing']").val(2);
  $("#judicialModal input[name='ipt-ajsjian']").val('2017-04');
  $('#judicialModal input[name="ipt-sfkwcha"][value='+ 1 +']').attr("checked",true);*/

  $.ajax({
      'type': 'GET',
      'url': 'customer-detail.php?id='+ dataid +'&action=jsoncase',
      'dataType': 'json',
      'success': function (response) {
          var data = response;
          console.log(data);
          $("#judicialModal select[name='ipt-jllxing']").val(data.jllxing);
          $("#judicialModal input[name='ipt-ajsjian']").val(data.ajsjian);
          $('#judicialModal input[name="ipt-sfkwcha"][value='+ data.sfkwcha +']').attr("checked",true);
      },
      'error' : function(){
          alert("司法案件信息修改请求出错")
      }
  });
})


//备注信息修改

$(".beizhu-add").click(function(){
  addMessage("#remarkModal .memo-form", "#remarkModal .btn-add", 'addmemo');
});

$("body").on('click', '.beizhu .btn-edit', function(){

  var dataid = $(this).data('itemid');
  $(".ipt-id").val(dataid);
  console.log(dataid);

  changeMessage("#remarkModal .memo-form", "#remarkModal .btn-add", 'savememo');

  // $("#remarkModal textarea[name='ipt-memo']").val('2017-04');

  $.ajax({
      'type': 'GET',
      'url': 'customer-detail.php?id='+ dataid +'&action=jsonmemo',
      'dataType': 'json',
      'success': function (response) {
          var data = response;
          console.log(data);
          $("#remarkModal textarea[name='ipt-memo']").val(data.memo);
      },
      'error' : function(){
          alert("备注信息修改请求出错")
      }
  });
})

//银行卡表单验证
$("body").on('click', "#cardMsgModal .yhca-add-btn", function(){
    var yhc_yhcgshu = $("#cardMsgModal input:radio[name='ipt-yhkgshu']:checked").val();
    var yhc_dsfxming = $("#cardMsgModal input[name='ipt-dsfxming']").val();
    var yhc_dsfsfzhma = $("#cardMsgModal input[name='ipt-ipt-dsfsfzhma']").val();
    var yhc_zhlxing = $("#cardMsgModal input:radio[name='ipt-zhlxing']:checked").val();
    var yhc_yhang = $("#cardMsgModal select[name='ipt-yhang']").val();
    var yhc_hhao = $("#cardMsgModal input[name='ipt-hhao']").val();
    var yhc_yhzhao = $("#cardMsgModal input[name='ipt-yhzhao']").val();
    var yhc_xykyxqi = $("#cardMsgModal input[name='ipt-xykyxqi']").val();
    var yhc_cvcma = $("#cardMsgModal input[name='ipt-cvcma']").val();

    if (!yhc_yhcgshu) {
      alert('请选择银行卡归属者');
      return false;
    };
    if (yhc_yhcgshu == 2){
      if (!yhc_dsfxming){
          alert('请输入第三方姓名');
          return false;
      };
      if (!yhc_dsfxming){
          alert('请输入第三方身份证号码');
          return false;
      };
    }
    if (!yhc_zhlxing) {
      alert('请选择账户类型');
      return false;
    };
    if (!yhc_yhang) {
      alert('请选择银行');
      return false;
    };
    if (!yhc_hhao) {
      alert('请输入开户行号');
      return false;
    };
    if (!yhc_yhzhao) {
      alert('请输入银行账号');
      return false;
    };
    if (yhc_zhlxing == 3) {
      if (!yhc_xykyxqi) {
        alert('请输入信用卡有效期');
        return false;
      };
      if (!yhc_cvcma) {
        alert('请输入CVC码');
        return false;
      };
    };

    $("form[name='yhca']").submit();
})

//社保验证
$("body").on('click', "#insuranceModal .sbao-add-btn", function(){

    var sb_sbjndwei = $("#insuranceModal input:radio[name='ipt-sb_sbjndwei']:checked").val();
    var sb_dsfgsming = $("#insuranceModal input[name='ipt-sb_dsfgsming']").val();

    if (sb_sbjndwei == 2 && !sb_dsfgsming){
          alert('请输入第三方公司名');
          return false;
    }

    $("form[name='sbao']").submit();
});

//公积金验证
$("body").on('click', "#demand .gjjin-add-btn", function(){
  
    var gjj_gjjjndwei = $("#demand input:radio[name='ipt-gjj_gjjjndwei']:checked").val();
    var gjj_dsfgsming = $("#demand input[name='ipt-gjj_dsfgsming']").val();

    if (gjj_gjjjndwei == 2 && !gjj_dsfgsming){
          alert('请输入第三方公司名');
          return false;
    }

    $("form[name='gjjin']").submit();
});

//个税验证
$("body").on('click', "#taxModal .sds-add-btn", function(){
  
    var sds_jndwei = $("#taxModal input:radio[name='ipt-sds_jndwei']:checked").val();
    var sds_dsfgsming = $("#taxModal input[name='ipt-sds_dsfgsming']").val();

    if (sds_jndwei == 2 && !sds_dsfgsming){
          alert('请输入第三方公司名');
          return false;
    }

    $("form[name='grsdshui']").submit();
})






 })(document, window);
