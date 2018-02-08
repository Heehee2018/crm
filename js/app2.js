
(function(doc, win) {

    // 定义一个全局变量，用来监听打电话的状态
    var _call_phone_state=false;
    // 定义一个全局变量，用来监听拨号的元素
    var _call_phone_ele;


  //
    var refreshTimepicker = function(){
        $('.form_datetime2').datetimepicker({
            format: 'YYYY-MM-DD',
            locale: moment.locale('zh-cn'),
            showClear: true,
            showClose: true,
        });
    }
    refreshTimepicker();

  //
  var selectChangeItem = function(selectId, obj){

      $(selectId).change(function(){
          var val = $(selectId).val();
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
  var followTel = $(".followWaySel .gjin-tel option").eq(0).data('text');
  $(".followWaySel .tel-number").text(followTel);

  var followPhone = $(".followWaySel .gjin-phone option").eq(0).data('text');
  $(".followWaySel .phone-number").text(followPhone);

  var changePhone = function(a, b){
    $(a).change(function(){
        var val = $(a+' option:selected').data('text');
        $(b).text(val);
        $('#selectWay').val(val);
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
  "廊坊银行", "广州农商银行", "汇丰银行", "东亚银行", "恒生银行", "永亨银行", "花旗银行", "渣打银行", "石嘴山银行", "微众银行"];

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

  var dataTypeArr = [ "房产证", "按揭／抵押合同", "车辆登记", "社保缴纳流水", "公积金缴纳流水", "个税缴纳流水", "收入证明", "工作证明", "保单扫描件", "结婚证", "营业执照", "离婚证", "离婚协议", "户口本"];

  var qishuArr2 = ["3期", "6期", "12期", "24期", "36期", "48期", "60期", "120期", "240期", "360期"];

  var loanTypeArr = ["个人信用贷款", "个人抵押贷款", "个人私贷", "企业信用贷款", "企业抵押贷款"];

  var repayWayArr = ["等额本息", "等额本金", "随借随还", "先息后本", "到期还本付息"];

  var urgencyArr = ["十万火急", "有点急", "一般", "无所谓"];

  var contactTypeArr = ["委托服务合同", "客户需求", "银行机构确认书", "代扣款协议", "委托支付协议", "借款登记服务表"];

  var clientManageArr = ["W-无需求", "L-长期跟进", "QX2-银行拒放款", "N-未联系", "M-已上门", "QX3-客户弃贷", "Y-有需求", "B-已签约申办中", "F-已放款", "S-最近联系", "QX1-跟进条件不足", "V-已完成"];

  var publicHasArr = ["与父母共有", "与子女共有", "与兄妹共有", "与朋友共有"];

  var houseTypeArr01 = ["商品房", "公寓", "商铺", "写字楼", "别墅", "宅基地","商住两用房"];
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

  // 赋值select  下拉选项
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
      if ( (selectId=="#cpmTypeSel01" && val == 3) || (selectId=="#cpmTypeSel02" && val==5)) {
        $(obj +" .item02").show();
      }else{
        $(obj +" .item02").hide();
        $('#ipt-gslxings01').val('');
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

      $("#policyYearNum").text(policyYearNum);
    })
  }

  $("#policyBaseNum").keyup(function(){
    policyBaseNum = $("#policyBaseNum").val();
    var val = $("#jiaofeiWay").val();

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
  var zxChaxunHtml = '<li class="row"><div class="col-xs-3 pr10"><select name="ipt-zxcxcshu-a[]" id="" class="form-control"><option value=""></option><option value="1">贷款审批</option><option value="2">信用卡审批</option><option value="3">人行查询</option><option value="4">个人网查</option></select></div><div class="col-xs-3 pr10"><select name="ipt-zxcxcshu-b[]" id="" class="form-control time-sel01"><option value=""></option><option value="1">近1个月</option><option value="2">近2个月</option> <option value="3">近3个月</option> <option value="4">近4个月</option> <option value="5">近5个月</option> <option value="6">近6个月</option></select></div><div class="col-xs-1"><input type="text" class="form-control" name="ipt-zxcxcshu-c[]"></div><div class="col-xs-1 pl10">次</div><div class="col-xs-2"><div class="sru_add"></div></div></li>'
  var zxYuqiHtml = '<li class="row"><div class="col-xs-2 pr10"><select name="ipt-zxyqi-a[]" id="" class="form-control"><option value=""></option><option value="1">信用卡</option><option value="2">贷款</option><option value="3">准贷记卡</option></select></div><div class="col-xs-2 pr10"><select name="ipt-zxyqi-b[]" id="" class="form-control time-sel02"><option value=""></option><option value="1">当前</option><option value="2">半年内</option> <option value="3">1年内</option> <option value="4">2年内</option> <option value="5">近2-5年</option></select></div><div class="col-xs-1 text-center">有</div><div class="col-xs-1"><select name="ipt-zxyqi-c[]" id=""class="form-control"><option value=""></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option></select></div><div class="col-xs-1 text-center">逾期</div><div class="col-xs-2 pr10"><input type="text" class="form-control" name="ipt-zxyqi-d[]"></div><div class="col-xs-1 text-left pl10">元</div><div class="col-xs-1"><div class="sru_add"></div></div></li>';

  var addList = function(obj, msg){
    $(obj).append(msg)
  }

  $('body').on('click', "#zxChaxunList .sru_add", function(){
    addList("#zxChaxunList", zxChaxunHtml);
    $('#zxChaxunList .sru_add').not(':last').hide();

    //optionVal(timeArr01, ".time-sel01");
  })
  $('body').on('click', "#zxYuqiList .sru_add", function(){
    addList("#zxYuqiList", zxYuqiHtml);
      $('#zxYuqiList .sru_add').not(':last').hide();
    //optionVal(timeArr02, ".time-sel02");
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
  if (qtsfeiDataService.length > 0) {
    $(".modal-body #serverChargeList").html('');
    for(i in qtsfeiDataService){
      var num01 = qtsfeiDataService[i].a;

      var qtsfeiHtml = '<li class="row"><div class="col-xs-3"><select name="ipt_qtsfei_a[]" id="" class="form-control qtsf-select"><option value=""></option><option value="1">固话</option><option value="2">查征信</option><option value="3">挂单位</option><option value="4">办资料</option></select></div><div class="col-xs-3 pl10"><input type="text" class="form-control" value="'+ qtsfeiDataService[i].b +'" name="ipt_qtsfei_b[]"></div><div class="col-xs-1 pl5">元</div><div class="col-xs-2 pl5"><div class="add-btn">+</div></div></li>';
      $(".modal-body #serverChargeList").append(qtsfeiHtml);
      //$("body select[name='ipt_qtsfei_a["+ i +"]']").val(num01);
      $("body .qtsf-select").eq(i).val(num01);
      refreshTimepicker();
    }
  };

  //其它费用
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
    //console.log(hkgzeDataService);
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
  $('#addFollowModal').on('show.bs.modal', function () {
      var today = new Date(),
          year = today.getFullYear(),
          month = today.getMonth()+1,
          day = today.getDate(),
          hour = today.getHours()<10?'0'+today.getHours():today.getHours(),
          minute = today.getMinutes()<10?'0'+today.getMinutes():today.getMinutes(),
          second = today.getSeconds()<10?'0'+today.getSeconds():today.getSeconds();

      $('#follow-date').val(year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second);
      if(allPhone.tel1=='-'){
        $('.follow-tel').hide()
      }
      //$('#follow-time').val(hour+':'+minute+':'+second);
  });

  $("#addFollowModal input:radio[name='ipt-type']").change(function(){
    var val = $(this).val();
    if (val == 1) {
      $("#addFollowModal .gjin-phone").show();
      //$("#addFollowModal .gjin-tel").hide();
      $("#addFollowModal .phone-number").show();
      $("#addFollowModal .tel-number").hide();

    }
    if (val == 2) {
      $("#addFollowModal .gjin-phone").hide();
      //$("#addFollowModal .gjin-tel").show();
      $("#addFollowModal .phone-number").hide();
      $("#addFollowModal .tel-number").show();
    }
    if (val == 3) {
      $("#addFollowModal .gjin-phone").hide();
      //$("#addFollowModal .gjin-tel").hide();
      $("#addFollowModal .phone-number").hide();
      $("#addFollowModal .tel-number").hide();
    };
  });
  
  $('#addFollowModal .follow-choise li').click(function () {
      $('#addFollowModal .follow-choise li').removeClass('active');
      $(this).addClass('active');
      $('#addFollowModal [name="ipt-memo"]').val($(this).text()).css('color','#c8c8c8');
  })

  $("body").on('click', '#addFollowModal .add-follow-btn', function(){
    var followWayVal = $("#addFollowModal input[name='ipt-type']:checked").val();
    if (!followWayVal && deptid!=3) {
      alert('请选择跟进方式');
      return;
    }
    console.log($("#followForm").serialize());
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

//服务合同
var serviceContractHtml = '';
if(serviceContractData !=null) {

    for(var i in serviceContractData){
        var qtfyHtml = '';
        if(serviceContractData[i].qtfy!=""){
            serviceContractData[i].qtfy = eval('(' + serviceContractData[i].qtfy + ')');
            serviceContractData[i].qtfy.forEach(function(t){
                qtfyHtml += '<div class="content-list"><span>'+ t.type +'：</span><span>' + t.value + '</span></div>'
            })
        }

        serviceContractHtml = '<li class="swiper-slide"><div class="inner"><div class="line bg--grey"></div><div class="client-icon yni"></div><div class="pt22"></div><div class="content-list"><span>合同编号：</span><span>' + serviceContractData[i].code + '</span></div><div class="content-list"><span>服务类型：</span><span>' + serviceContractData[i].fwlxing_name + '</span></div><div class="content-list"><span>服务费率：</span><span>' + serviceContractData[i].fwflv + '%</span></div><div class="content-list"><span>诚意金：</span><span>' + serviceContractData[i].cyjin + '元</span></div>'+ qtfyHtml +'<div class="content-list"><span>签约日期：</span><span>' + serviceContractData[i].qdate + '</span></div></div></li>';
        $("body .record .swiper-wrapper").append(serviceContractHtml);
    }


}




//服务json
  //传值到serviceData
  var serverListHtml = "";
  
  var hideElement = function(obj, i){
    //console.log(obj)

      $("body .record ul li[data-id]").eq(i).find(obj).hide();
    //console.log($("body .record ul li").eq(i).find(obj).hide());
  }
  for(i in serviceData){
    var contractCodeHtml=serviceData[i].contract_id!=0?'<div class="content-list"><span>合同编号：</span><span>' + serviceData[i].contract_code + '</span></div>' : '';
    serverListHtml = '<li class="swiper-slide" data-id="'+serviceData[i].id+'"><div class="inner"><div class="line"></div><div class="client-icon"></div><div class="pt22"></div>'+ contractCodeHtml +'<div class="content-list user"><span>渠道：</span><span>' + serviceData[i].user + '</span></div><div class="content-list jigou"><span>机构：</span><span>' + serviceData[i].jigou + '</span></div><div class="content-list gongsi"><span>公司：</span><span>' + serviceData[i].gongsi + '</span></div><div class="content-list fangkuan"><span>放款：</span><span>' + serviceData[i].fangkuan + '</span></div><div class="content-list caozuochanpin"><span>产品：</span><span>' + serviceData[i].caozuochanpin + '</span></div><div class="content-list sqmoney"><span>申贷：</span><span>' + serviceData[i].sqmoney + '万元</span></div><div class="content-list sqdate"><span>申日：</span><span>' + serviceData[i].sqdate + '</span></div><div class="content-list fkmoney"><span>放贷：</span><span>' + serviceData[i].fkmoney + '万元</span></div><div class="content-list fkdate"><span>放日：</span><span>' + serviceData[i].fkdate + '</span></div><div class="content-list fwmoney"><span>收款：</span><span>' + serviceData[i].fwmoney + '元</span></div><div class="content-list dkdate"><span>到日：</span><span>' + serviceData[i].dkdate + '</span></div><div class="content-list fdmoney"><span>返点：</span><span>' + serviceData[i].fdmoney + '</span></div><div class="content-list fddate"><span>返日：</span><span>' + serviceData[i].fddate + '</span></div><div class="content-list txmoney"><span>月还：</span><span>' + serviceData[i].txmoney + '</span></div><div class="content-list txdate_start"><span>起日：</span><span>' + serviceData[i].txdate_start + '</span></div><div class="content-list txdate_end"><span>终日：</span><span>' + serviceData[i].txdate_end + '</span></div></div></li>'


      //console.log(i);
    $("body .record .swiper-wrapper").append(serverListHtml);
    var swiper = new Swiper('.swiper-container', {
      pagination: 'null',
      slidesPerView: 3,
      paginationClickable: false,
      spaceBetween: 30,
      freeMode: true,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    })

    // 判断是否弃贷
    if(serviceData[i]["dkjdu"]==0){
        $("body .record ul li[data-id]").eq(i).find(".client-icon").addClass("sen");
    }
    if(serviceData[i]["dkjdu"] == 3 || serviceData[i]["dkjdu_fk"] == 3 || serviceData[i]["dkjdu_qd"]!=0){
        $("body .record ul li[data-id]").eq(i).find(".client-icon").addClass("qi1");
    }
    if(serviceData[i]["dkjdu_fk"] == 2){
        $("body .record ul li[data-id]").eq(i).find(".client-icon").addClass("ju");
    }
    if(serviceData[i]["dkjdu_fk"] == 4){
      $("body .record ul li[data-id]").eq(i).find(".client-icon").addClass("fang1");
    }
    if(serviceData[i]["dkjdu_fk"] == 1){
        $("body .record ul li[data-id]").eq(i).find(".client-icon").addClass("pi");
    }
    if(serviceData[i]["dkjdu_fk"] == 0 && serviceData[i]["dkjdu"] == 1){

        if((serviceData[i]["dkjdu_ds"] == 3 && serviceData[i]["dkjdu_mq"] ==3  && serviceData[i]["dkjdu_sm"] ==3) || (serviceData[i]["dkjdu_ds"] == 3 && serviceData[i]["dkjdu_mq"] ==0  && serviceData[i]["dkjdu_sm"] ==0) || (serviceData[i]["dkjdu_ds"] == 0 && serviceData[i]["dkjdu_mq"] ==3  && serviceData[i]["dkjdu_sm"] ==0) || (serviceData[i]["dkjdu_ds"] == 0 && serviceData[i]["dkjdu_mq"] ==0  && serviceData[i]["dkjdu_sm"] ==3)){
            $("body .record ul li[data-id]").eq(i).find(".client-icon").addClass("bu");
        }else{
            $("body .record ul li[data-id]").eq(i).find(".client-icon").addClass("shen");
        }
    }


    /*if (serviceData[i].status == 0) {
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
    };*/
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
    if (!serviceData[i].fangkuan) {
      hideElement(".fangkuan", i)
    };
  }


  //信息json
  $(window).ready(function(){
    $("html body").css("overflow-x","hidden")
  })




/*按钮测试*/

  /*改变动画样式*/
  $(".transitionhovertree").each(function(index,data){
    $(this).click(function(e){
      e.preventDefault();
      if(this){
        var pitch = '<div class="pitch"></div>';
        $(this).addClass("ceshi").siblings(".transitionhovertree").removeClass("ceshi");
        $(this).append(pitch);
        $(this).siblings("div").children(".pitch").removeClass("pitch");
        $($(this).children(".pitch")[0]).show().siblings(".pitch").remove();
        $(this).css("background-color","#ebebeb").siblings(".transitionhovertree").css("background-color","#FFFFFF");
      }
    });
  });
  $("._Income_icon").each(function(index,data){
    /*         console.log(index)
     console.log(data)*/
    $(this).click(function(e){
      e.preventDefault();
      if(this){
        var pitch = '<div class="pitch"></div>';
        //$(this).addClass("ceshi").siblings("._Income_icon").removeClass("ceshi");
        $(this).append(pitch);
        $(this).siblings("div").children(".pitch").removeClass("pitch");
        $($(this).children(".pitch")[0]).show().siblings(".pitch").remove();
        $(this).css("background-color","#ebebeb").siblings("._Income_icon").css("background-color","#FFFFFF");
      }
    });
  });

  /*客户收入查询弹框弹框*/
  $("._shouru_btn").click(function(e){
    e.preventDefault();
    var ok = $("._shouru_btn").siblings("div");
    $('._shouru_btn_left').show();
    ok.click(function(e){
      e.preventDefault();
      $('._shouru_btn_left').hide();
    });
  });

  $(".transitionhovertree").each(function(index,data){
    $(this).mouseover(function(e){
      e.preventDefault();
      if(this){
        $(".transitionhovertree").css("z-index","1");
      }
    });
    $(this).mouseout(function(e){
      e.preventDefault();
      if(this){
        $(".transitionhovertree").css("z-index","1");
      }
    });
  });





  $(window).ready(function(){
    var phone_text = "";
    if(allPhone){
        phone_text = `
        <div class="clearfix _left_tankuang_bot _division hide_1">
              <div class="_num2"></div>
              <div class="">
                <div class="_phone_call" >${allPhone.phone1[0]}</div>
                <div class="_region">${allPhone.phone1[1]}</div>
              </div>
              <div class="_bohao _zhuxian1"></div>
              <div class="_duanx1"></div>
        </div>
        <div class="clearfix _left_tankuang_bot _division hide_2">
              <div class="_num3"></div>
              <div class="">
                <div class="_phone_call" >${allPhone.phone2[0]}</div>
                <div class="_region">${allPhone.phone2[1]}</div>
              </div>
              <div class="_bohao _zhuxian2"></div>
              <div class="_duanx2"></div>
         </div>
         <div class="clearfix _left_tankuang_bot _division hide_3">
              <div class="_num4"></div>
              <div class="">
                <div class="_phone_call" >${allPhone.tel1}</div>
                <div class="_region"></div>
              </div>
              <div class="_bohao _zhuxian3"></div>
              <div class=""></div>
          </div>
        `;
        $(".extra_calls").append(phone_text)
      }
    if(allPhone.phone1[0] === "" ){
      $(".hide_1").remove()
    }
    if(allPhone.phone2[0] === ""){
      $(".hide_2").remove()
    }
    if(allPhone.tel1 === "-"){
      $(".hide_3").remove();
    }
    if( allPhone.phone1[0] === "" && allPhone.phone2[0] === "" && allPhone.tel1 === "-"){
      $(".extra_calls").hide();
    }
    //主线号码1拨号
    $("._zhuxian1").on("click",function(e){
      e.stopPropagation();
      $(".Prepare_exhaled").html("");
      var calling_zhuxian = '';
      calling_zhuxian = `
            <div>
              <div class="_call_num">
                  <div class="_call_number">${allPhone.phone1[0]}</div>
                  <div class="_call_site">${allPhone.phone1[1]}</div>
                </div>
                <div class="_call_ProGress">呼叫状态(无)</div>
                <div class="on_call">
                  <div class="zhu1 call_btn">手机-1呼出</div>
                  <div class="zhu1 call_btn_2">座机-1呼出</div>
                  <div class="call_up">取消</div>
                  <div class="guaji_1">挂机</div>
                </div>
            </div>
            <div class="zhuxian1 loading" style="display:none"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>  
      `;
      $(".Prepare_exhaled").append(calling_zhuxian);
      $(".Prepare_exhaled").show();
      $(".call_up").on("click",function(){
        $(".Prepare_exhaled").hide();
        //$("._zhuxian").css("background-position","0px 0px");
      });
      //$("._zhuxian").css("background-position","0px -34px");

      /*  $("._zhuxian").on("mouseup",function(){
       $("._zhuxian").css("background-position","0px 0px");
       })*/
      $(".call_btn").on("click",function(){
          if (!window.opener.window.parent.etPsLoginBool||!window.opener.window.parent.etPoIsFlash){
              //alert('拨号服务尚未初始化成功，请稍候重试');
              //return;
              $('.zhuxian1.loading').show().prev().hide();
              var timer = setInterval(function() {
                  if (window.opener.window.parent.etPsLoginBool||window.opener.window.parent.etPoIsFlash) {
                      $('.zhuxian1.loading').hide().prev().show();
                      clearInterval(timer);
                      var phoneNum = Number('9'+allPhone.phone1[0].replace(/-/g,''));
                      window.opener.window.parent.searchPageCall = false;
                      window.opener.window.parent.etFsDialNo(phoneNum);
                      $("._call_ProGress").html("")
                      $("._call_ProGress").html("手机呼出")
                      $(".call_btn").hide();
                      $(".call_btn_2").hide();
                      $(".call_up").hide();
                      $(".guaji_1").show();
                      $(".guaji_1").on("click",function(){
                          window.opener.window.parent.etOlazyPhonePost.hangOff();
                          $("._call_ProGress").html("呼叫状态（无）")
                          $(".call_btn").show();
                          $(".call_btn_2").show();
                          $(".call_up").show();
                          $(".guaji_1").hide();
                      })
                  }
              },2000)
          }else{
              var phoneNum = Number('9'+allPhone.phone1[0].replace(/-/g,''));
              window.opener.window.parent.searchPageCall = false;
              window.opener.window.parent.etFsDialNo(phoneNum);
              $("._call_ProGress").html("")
              $("._call_ProGress").html("手机呼出")
              $(".call_btn").hide();
              $(".call_btn_2").hide();
              $(".call_up").hide();
              $(".guaji_1").show();
              $(".guaji_1").on("click",function(){
                  window.opener.window.parent.etOlazyPhonePost.hangOff();
                  $("._call_ProGress").html("呼叫状态（无）")
                  $(".call_btn").show();
                  $(".call_btn_2").show();
                  $(".call_up").show();
                  $(".guaji_1").hide();
              })

          }

      })

      $(".call_btn_2").on("click",function(){
          if (!window.opener.window.parent.etPsLoginBool||!window.opener.window.parent.etPoIsFlash){
              //alert('拨号服务尚未初始化成功，请稍候重试');
              //return;
              $('.zhuxian1.loading').show().prev().hide();
              var timer = setInterval(function(){
                  if(window.opener.window.parent.etPsLoginBool||window.opener.window.parent.etPoIsFlash) {
                      $('.zhuxian1.loading').hide().prev().show();
                      clearInterval(timer);
                      if(allPhone.phone[1]=='广东 广州'){
                          var phoneNum = '8'+allPhone.phone1[0].replace(/-/g,'')//Number('8'+allPhone.phone[0].replace(/-/g,'')); //广州号码+8


                      }else{
                          var phoneNum = '0'+allPhone.phone1[0].replace(/-/g,''); //非广州号码+0
                      }
                      console.log('phone',phoneNum);
                      window.opener.window.parent.searchPageCall = false;
                      window.opener.window.parent.etFsDialNo(phoneNum);

                      $("._call_ProGress").html("")
                      $("._call_ProGress").html("固话呼出")
                      $(".call_btn").hide();
                      $(".call_btn_2").hide();
                      $(".call_up").hide();
                      $(".guaji_1").show();
                      $(".guaji_1").on("click",function(){
                          window.opener.window.parent.etOlazyPhonePost.hangOff();
                          $("._call_ProGress").html("呼叫状态（无）")
                          $(".call_btn").show();
                          $(".call_btn_2").show();
                          $(".call_up").show();
                          $(".guaji_1").hide();
                      })
                  }
              },2000)
          }else{
              if(allPhone.phone1[1]=='广东 广州'){
                  var phoneNum = Number('8'+allPhone.phone1[0].replace(/-/g,'')); //广州号码+8
              }else{
                  var phoneNum = '0'+allPhone.phone1[0].replace(/-/g,''); //非广州号码+0
              }
              console.log('phone',phoneNum);
              window.opener.window.parent.searchPageCall = false;
              window.opener.window.parent.etFsDialNo(phoneNum);
              $("._call_ProGress").html("")
              $("._call_ProGress").html("固话呼出")
              $(".call_btn").hide();
              $(".call_btn_2").hide();
              $(".call_up").hide();
              $(".guaji_1").show();
              $(".guaji_1").on("click",function(){
                  window.opener.window.parent.etOlazyPhonePost.hangOff();
                  $("._call_ProGress").html("呼叫状态（无）")
                  $(".call_btn").show();
                  $(".call_btn_2").show();
                  $(".call_up").show();
                  $(".guaji_1").hide();
              })

          }

      })
    })

    //主线号码2拨号
    $("._zhuxian2").on("click",function(e){
          e.stopPropagation();
          $(".Prepare_exhaled").html("");
          var calling_zhuxian = '';
          calling_zhuxian = `
                <div>
                    <div class="_call_num">
                    <div class="_call_number">${allPhone.phone2[0]}</div>
                    <div class="_call_site">${allPhone.phone2[1]}</div>
                  </div>
                  <div class="_call_ProGress">呼叫状态(无)</div>
                  <div class="on_call">
                    <div class="zhu2 call_btn">手机-1呼出</div>
                    <div class="zhu2 call_btn_2">座机-1呼出</div>
                    <div class="call_up">取消</div>
                    <div class="guaji_1">挂机</div>
                  </div>
                </div>
                <div class="zhuxian2 loading" style="display:none"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>
              
      `;
          $(".Prepare_exhaled").append(calling_zhuxian);
          $(".Prepare_exhaled").show();
          $(".call_up").on("click",function(){
              $(".Prepare_exhaled").hide();
              //$("._zhuxian").css("background-position","0px 0px");
          });
          //$("._zhuxian").css("background-position","0px -34px");

          /*  $("._zhuxian").on("mouseup",function(){
           $("._zhuxian").css("background-position","0px 0px");
           })*/
          $(".call_btn").on("click",function(){
              if (!window.opener.window.parent.etPsLoginBool||!window.opener.window.parent.etPoIsFlash){
                  //alert('拨号服务尚未初始化成功，请稍候重试');
                  //return;
                  $('.zhuxian2.loading').show().prev().hide();
                  var timer = setInterval(function(){
                      if(window.opener.window.parent.etPsLoginBool||window.opener.window.parent.etPoIsFlash){
                          $('.zhuxian2.loading').hide().prev().show();
                          clearInterval(timer);
                          var phoneNum = Number('9'+allPhone.phone2[0].replace(/-/g,''));
                          window.opener.window.parent.searchPageCall = false;
                          window.opener.window.parent.etFsDialNo(phoneNum);

                          $("._call_ProGress").html("")
                          $("._call_ProGress").html("手机呼出")
                          $(".call_btn").hide();
                          $(".call_btn_2").hide();
                          $(".call_up").hide();
                          $(".guaji_1").show();
                          $(".guaji_1").on("click",function(){
                              $("._call_ProGress").html("呼叫状态（无）")
                              $(".call_btn").show();
                              $(".call_btn_2").show();
                              $(".call_up").show();
                              $(".guaji_1").hide();
                          })

                      }

                  },2000)
              }else{
                  var phoneNum = Number('9'+allPhone.phone2[0].replace(/-/g,''));
                  window.opener.window.parent.searchPageCall = false;
                  window.opener.window.parent.etFsDialNo(phoneNum);

                  $("._call_ProGress").html("")
                  $("._call_ProGress").html("手机呼出")
                  $(".call_btn").hide();
                  $(".call_btn_2").hide();
                  $(".call_up").hide();
                  $(".guaji_1").show();
                  $(".guaji_1").on("click",function(){
                      $("._call_ProGress").html("呼叫状态（无）")
                      $(".call_btn").show();
                      $(".call_btn_2").show();
                      $(".call_up").show();
                      $(".guaji_1").hide();
                  })
              }

          })

          $(".call_btn_2").on("click",function(){
              if (!window.opener.window.parent.etPsLoginBool||!window.opener.window.parent.etPoIsFlash){
                  //alert('拨号服务尚未初始化成功，请稍候重试');
                  //return;
                  $('.zhuxian2.loading').show().prev().hide();
                  var timer = setInterval(function(){
                      if(window.opener.window.parent.etPsLoginBool||window.opener.window.parent.etPoIsFlash){
                          $('.zhuxian2.loading').hide().prev().show();
                          clearInterval(timer);
                          if(allPhone.phone2[1]=='广东 广州'){
                              var phoneNum = Number('8'+allPhone.phone2[0].replace(/-/g,'')); //广州号码+8
                          }else{
                              var phoneNum = '0'+allPhone.phone2[0].replace(/-/g,''); //非广州号码+0
                          }
                          window.opener.window.parent.searchPageCall = false;
                          window.opener.window.parent.etFsDialNo(phoneNum);

                          $("._call_ProGress").html("")
                          $("._call_ProGress").html("手机呼出")
                          $(".call_btn").hide();
                          $(".call_btn_2").hide();
                          $(".call_up").hide();
                          $(".guaji_1").show();
                          $(".guaji_1").on("click",function(){
                              $("._call_ProGress").html("呼叫状态（无）")
                              $(".call_btn").show();
                              $(".call_btn_2").show();
                              $(".call_up").show();
                              $(".guaji_1").hide();
                          })

                      }

                  },2000)
              }else{
                  if(allPhone.phone2[1]=='广东 广州'){
                      var phoneNum = Number('8'+allPhone.phone2[0].replace(/-/g,'')); //广州号码+8
                  }else{
                      var phoneNum = '0'+allPhone.phone2[0].replace(/-/g,''); //非广州号码+0
                  }
                  console.log('phone',phoneNum);
                  window.opener.window.parent.searchPageCall = false;
                  window.opener.window.parent.etFsDialNo(phoneNum);
                  $("._call_ProGress").html("")
                  $("._call_ProGress").html("固话呼出")
                  $(".call_btn").hide();
                  $(".call_btn_2").hide();
                  $(".call_up").hide();
                  $(".guaji_1").show();
                  $(".guaji_1").on("click",function(){
                      window.opener.window.parent.etOlazyPhonePost.hangOff();
                      $("._call_ProGress").html("呼叫状态（无）")
                      $(".call_btn").show();
                      $(".call_btn_2").show();
                      $(".call_up").show();
                      $(".guaji_1").hide();
                  })
              }

          })
      })

    //主线号码3拨号
    $("._zhuxian3").on("click",function(e){
          e.stopPropagation();
          $(".Prepare_exhaled").html("");
          var calling_zhuxian = '';
          calling_zhuxian = `
            <div>
            <div class="_call_num">
                <div class="_call_number">${allPhone.tel1}</div>
                
              </div>
              <div class="_call_ProGress">呼叫状态(无)</div>
              <div class="on_call">
                <div class="zhu3 call_btn">手机-1呼出</div>
                <div class="zhu3 call_btn_2">座机-1呼出</div>
                <div class="call_up">取消</div>
                <div class="guaji_1">挂机</div>
              </div>
            </div>
            <div class="zhuxian3 loading" style="display:none"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>  
      `;
          $(".Prepare_exhaled").append(calling_zhuxian);
          $(".Prepare_exhaled").show();
          $(".call_up").on("click",function(){
              $(".Prepare_exhaled").hide();
              //$("._zhuxian").css("background-position","0px 0px");
          });
          //$("._zhuxian").css("background-position","0px -34px");

          /*  $("._zhuxian").on("mouseup",function(){
           $("._zhuxian").css("background-position","0px 0px");
           })*/
          $(".call_btn").on("click",function(){
              if (!window.opener.window.parent.etPoIsFlash){
                  //alert('拨号服务尚未初始化成功，请稍候重试');
                  //return;
                  $('.zhuxian3.loading').show().prev().hide();
                  var timer = setInterval(function() {
                      if (window.opener.window.parent.etPsLoginBool||window.opener.window.parent.etPoIsFlash) {
                          $('.zhuxian3.loading').hide().prev().show();
                          clearInterval(timer);
                          var phoneNum = Number('9'+allPhone.tel1.replace(/-/g,''));
                          window.opener.window.parent.searchPageCall = false;
                          window.opener.window.parent.etFsDialNo(phoneNum);
                          $("._call_ProGress").html("")
                          $("._call_ProGress").html("手机呼出")
                          $(".call_btn").hide();
                          $(".call_btn_2").hide();
                          $(".call_up").hide();
                          $(".guaji_1").show();
                          $(".guaji_1").on("click",function(){
                              $("._call_ProGress").html("呼叫状态（无）")
                              $(".call_btn").show();
                              $(".call_btn_2").show();
                              $(".call_up").show();
                              $(".guaji_1").hide();
                          })
                      }
                  },2000)
              }else{
                  var phoneNum = Number('9'+allPhone.tel1.replace(/-/g,''));
                  window.opener.window.parent.searchPageCall = false;
                  window.opener.window.parent.etFsDialNo(phoneNum);
                  $("._call_ProGress").html("")
                  $("._call_ProGress").html("手机呼出")
                  $(".call_btn").hide();
                  $(".call_btn_2").hide();
                  $(".call_up").hide();
                  $(".guaji_1").show();
                  $(".guaji_1").on("click",function(){
                      $("._call_ProGress").html("呼叫状态（无）")
                      $(".call_btn").show();
                      $(".call_btn_2").show();
                      $(".call_up").show();
                      $(".guaji_1").hide();
                  })
              }

          })

          $(".call_btn_2").on("click",function(){
              if (!window.opener.window.parent.etPsLoginBool||!window.opener.window.parent.etPoIsFlash){
                  //alert('拨号服务尚未初始化成功，请稍候重试');
                  //return;
              }
              if(allPhone.tel1.split('-')[0]=='020'){
                  var phoneNum = Number('8'+allPhone.tel1.replace(/-/g,'')); //广州号码+8
              }else{
                  var phoneNum = '0'+allPhone.tel1.replace(/-/g,''); //非广州号码+0
              }
              console.log('phone',phoneNum);
              window.opener.window.parent.searchPageCall = false;
              window.opener.window.parent.etFsDialNo(phoneNum);
              $("._call_ProGress").html("")
              $("._call_ProGress").html("固话呼出")
              $(".call_btn").hide();
              $(".call_btn_2").hide();
              $(".call_up").hide();
              $(".guaji_1").show();
              $(".guaji_1").on("click",function(){
                  $("._call_ProGress").html("呼叫状态（无）")
                  $(".call_btn").show();
                  $(".call_btn_2").show();
                  $(".call_up").show();
                  $(".guaji_1").hide();
              })
          })
      })
    //主号码短信1发送
    $("._duanx1").on("click",function(){
        if(smsinfo["mobile"]==""){
            alert('系统未录入手机号，请先录入手机号。');
            return;
        }
        if(hasSendMsg){
            alert('您已经发送过短信，请在10分钟后重试');
            return;
        }
        $('#message_phone').val(1);
        $(".Boxedart").show();
        $(".message_main").show();
    });

    $("._duanx2").on("click",function(){
        if(smsinfo["mobile"]==""){
            alert('系统未录入手机号，请先录入手机号。');
            return;
        }
        if(hasSendMsg){
            alert('您已经发送过短信，请在10分钟后重试');
            return;
        }
        $('#message_phone').val(2);
        $(".Boxedart").show();
        $(".message_main").show();
    });
  })

  //拨号各个按钮(主号码)
  $("._tel ").on("click",function(){
      if (!window.opener.window.parent.etPsLoginBool||!window.opener.window.parent.etPoIsFlash){
          $('._stav-hovoru').html('<div class="' +
              '_ loading_sm" style="display:none"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>')
          $('._tel_.loading_sm').show();
          var timer = setInterval(function() {
              if (window.opener.window.parent.etPsLoginBool||window.opener.window.parent.etPoIsFlash) {
                  $('._tel_.loading_sm').hide();
                  clearInterval(timer);
                  if(allPhone){
                      if(allPhone.phone[1]=='广东 广州'){
                          var phoneNum = Number('8'+allPhone.phone[0].replace(/-/g,'')); //广州号码+8
                      }else{
                          var phoneNum = '0'+allPhone.phone[0].replace(/-/g,''); //非广州号码+0
                      }
                      console.log('phone',phoneNum);
                      window.opener.window.parent.searchPageCall = false;
                      window.opener.window.parent.etFsDialNo(phoneNum);
                  }
                  $("._stav-hovoru").html("");
                  var calling_1 = `
         <div class="_zhuantai">&nbsp;主号码</div> <div class="_zhuantai">&nbsp;呼叫中</div><div class="_zhuantai"> &nbsp; &nbsp;&nbsp;. . .</div>
         
      `;
                  $("._stav-hovoru").append(calling_1);
                  $("._on-hook").show();
                  $("._on-hook").on("click",function(){
                      $("._stav-hovoru").html("");
                      var callingoff='<div class="_zhuantai">&nbsp;主号码</div><div class="_zhuantai">&nbsp;无呼叫</div><div class="_zhuantai"> &nbsp; &nbsp;&nbsp;. . .</div>';
                      $("._stav-hovoru").append(callingoff);
                      $("._on-hook").hide();
                      window.opener.window.parent.etOlazyPhonePost.hangOff();
                  })
              }
          },2000)
          //alert('拨号服务尚未初始化成功，请稍候重试');
          //return;

      }else{
          if(allPhone){
              if(allPhone.phone[1]=='广东 广州'){
                  var phoneNum = Number('8'+allPhone.phone[0].replace(/-/g,'')); //广州号码+8
              }else{
                  var phoneNum = '0'+allPhone.phone[0].replace(/-/g,''); //非广州号码+0
              }
              console.log('phone',phoneNum);
              window.opener.window.parent.searchPageCall = false;
              window.opener.window.parent.etFsDialNo(phoneNum);
          }
          $("._stav-hovoru").html("");
          var calling_1 = `
         <div class="_zhuantai">&nbsp;主号码</div> <div class="_zhuantai">&nbsp;呼叫中</div><div class="_zhuantai"> &nbsp; &nbsp;&nbsp;. . .</div>
         
      `;
          $("._stav-hovoru").append(calling_1);
          $("._on-hook").show();
          $("._on-hook").on("click",function(){
              $("._stav-hovoru").html("");
              var callingoff='<div class="_zhuantai">&nbsp;主号码</div><div class="_zhuantai">&nbsp;无呼叫</div><div class="_zhuantai"> &nbsp; &nbsp;&nbsp;. . .</div>';
              $("._stav-hovoru").append(callingoff);
              $("._on-hook").hide();
              window.opener.window.parent.etOlazyPhonePost.hangOff();
          })
      }

  })
  //拨号各个按钮(2号码)
  $("._tel_two ").on("click",function(){
      if (!window.opener.window.parent.etPsLoginBool||!window.opener.window.parent.etPoIsFlash){
          //alert('拨号服务尚未初始化成功，请稍候重试');
          //return;
          $('._stav-hovoru').html('<div class="_tel_ loading_sm" style="display:none"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>')
          $('._tel_.loading_sm').show();
          var timer = setInterval(function() {
              if (window.opener.window.parent.etPsLoginBool||window.opener.window.parent.etPoIsFlash) {
                  $('._tel_.loading_sm').hide();
                  clearInterval(timer);
                  if(allPhone && allPhone.phone1[0]!='--'){
                      if(allPhone.phone1[1]=='广东 广州'){
                          var phoneNum = Number('8'+allPhone.phone1[0].replace(/-/g,'')); //广州号码+8
                      }else{
                          var phoneNum = '0'+allPhone.phone1[0].replace(/-/g,''); //非广州号码+0
                      }
                      console.log('phone',phoneNum);
                      window.opener.window.parent.searchPageCall = false;
                      window.opener.window.parent.etFsDialNo(phoneNum);
                  }else{
                      alert('当前用户尚未记录号码2');
                      return;
                  }
                  $("._stav-hovoru").html("");
                  var calling_1 = `
         <div class="_zhuantai">&nbsp;号码-2</div> <div class="_zhuantai">&nbsp;呼叫中</div><div class="_zhuantai"> &nbsp; &nbsp;&nbsp;. . .</div>
      `;
                  $("._stav-hovoru").append(calling_1);
                  $("._on-hook").show();
                  $("._on-hook").on("click",function(){
                      $("._stav-hovoru").html("");
                      var callingoff='<div class="_zhuantai">&nbsp;号码2</div><div class="_zhuantai">&nbsp;无呼叫</div><div class="_zhuantai"> &nbsp; &nbsp;&nbsp;. . .</div>';
                      $("._stav-hovoru").append(callingoff);
                      $("._on-hook").hide();
                      window.opener.window.parent.etOlazyPhonePost.hangOff();
                  })
              }
          },2000);
      }else{
          if(allPhone && allPhone.phone1[0]!='--'){
              if(allPhone.phone1[1]=='广东 广州'){
                  var phoneNum = Number('8'+allPhone.phone1[0].replace(/-/g,'')); //广州号码+8
              }else{
                  var phoneNum = '0'+allPhone.phone1[0].replace(/-/g,''); //非广州号码+0
              }
              console.log('phone',phoneNum);
              window.opener.window.parent.searchPageCall = false;
              window.opener.window.parent.etFsDialNo(phoneNum);
          }else{
              alert('当前用户尚未记录号码2');
              return;
          }
          $("._stav-hovoru").html("");
          var calling_1 = `
         <div class="_zhuantai">&nbsp;号码-2</div> <div class="_zhuantai">&nbsp;呼叫中</div><div class="_zhuantai"> &nbsp; &nbsp;&nbsp;. . .</div>
      `;
          $("._stav-hovoru").append(calling_1);
          $("._on-hook").show();
          $("._on-hook").on("click",function(){
              $("._stav-hovoru").html("");
              var callingoff='<div class="_zhuantai">&nbsp;号码2</div><div class="_zhuantai">&nbsp;无呼叫</div><div class="_zhuantai"> &nbsp; &nbsp;&nbsp;. . .</div>';
              $("._stav-hovoru").append(callingoff);
              $("._on-hook").hide();
              window.opener.window.parent.etOlazyPhonePost.hangOff();
          })


      }

  })
  //拨号各个按钮(3号码)
  $("._tel_three ").on("click",function(){
      if (!window.opener.window.parent.etPsLoginBool||!window.opener.window.parent.etPoIsFlash){
          //alert('拨号服务尚未初始化成功，请稍候重试');
          //return;
          $('._stav-hovoru').html('<div class="_tel_ loading_sm" style="display:none"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>')
          $('._tel_.loading_sm').show();
          var timer = setInterval(function() {
              if (window.opener.window.parent.etPsLoginBool||window.opener.window.parent.etPoIsFlash) {
                  $('._tel_.loading_sm').hide();
                  clearInterval(timer);
                  if(allPhone && allPhone.phone2[0]!='--'){
                      if(allPhone.phone2[1]=='广东 广州'){
                          var phoneNum = Number('8'+allPhone.phone2[0].replace(/-/g,'')); //广州号码+8
                      }else{
                          var phoneNum = '0'+allPhone.phone2[0].replace(/-/g,''); //非广州号码+0
                      }
                      console.log('phone',phoneNum);
                      window.opener.window.parent.searchPageCall = false;
                      window.opener.window.parent.etFsDialNo(phoneNum);
                  }else{
                      alert('当前用户尚未记录号码3');
                      return;
                  }
                  $("._stav-hovoru").html("");
                  var calling_1 = `
         <div class="_zhuantai">&nbsp;号码-3</div> <div class="_zhuantai">&nbsp;呼叫中</div><div class="_zhuantai"> &nbsp; &nbsp;&nbsp;. . .</div>
      `;
                  $("._stav-hovoru").append(calling_1);
                  $("._on-hook").show();
                  $("._on-hook").on("click",function(){
                      $("._stav-hovoru").html("");
                      var callingoff='<div class="_zhuantai">&nbsp;号码3</div><div class="_zhuantai">&nbsp;无呼叫</div><div class="_zhuantai"> &nbsp; &nbsp;&nbsp;. . .</div>';
                      $("._stav-hovoru").append(callingoff);
                      $("._on-hook").hide();
                      window.opener.window.parent.etOlazyPhonePost.hangOff();
                  })
              }
          },2000)
      }else{
          if(allPhone && allPhone.phone2[0]!='--'){
              if(allPhone.phone2[1]=='广东 广州'){
                  var phoneNum = Number('8'+allPhone.phone2[0].replace(/-/g,'')); //广州号码+8
              }else{
                  var phoneNum = '0'+allPhone.phone2[0].replace(/-/g,''); //非广州号码+0
              }
              console.log('phone',phoneNum);
              window.opener.window.parent.searchPageCall = false;
              window.opener.window.parent.etFsDialNo(phoneNum);
          }else{
              alert('当前用户尚未记录号码3');
              return;
          }
          $("._stav-hovoru").html("");
          var calling_1 = `
         <div class="_zhuantai">&nbsp;号码-3</div> <div class="_zhuantai">&nbsp;呼叫中</div><div class="_zhuantai"> &nbsp; &nbsp;&nbsp;. . .</div>
      `;
          $("._stav-hovoru").append(calling_1);
          $("._on-hook").show();
          $("._on-hook").on("click",function(){
              $("._stav-hovoru").html("");
              var callingoff='<div class="_zhuantai">&nbsp;号码3</div><div class="_zhuantai">&nbsp;无呼叫</div><div class="_zhuantai"> &nbsp; &nbsp;&nbsp;. . .</div>';
              $("._stav-hovoru").append(callingoff);
              $("._on-hook").hide();
              window.opener.window.parent.etOlazyPhonePost.hangOff();
          })

      }

  })
  //固话拨号按钮
  $("._fix_phone ").on("click",function(){
      if (!window.opener.window.parent.etPsLoginBool||!window.opener.window.parent.etPoIsFlash){
          //alert('拨号服务尚未初始化成功，请稍候重试');
          //return;
          $('._stav-hovoru').html('<div class="_tel_ loading_sm" style="display:none"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>')
          $('._tel_.loading_sm').show();
          var timer = setInterval(function() {
              if (window.opener.window.parent.etPsLoginBool || window.opener.window.parent.etPoIsFlash) {
                  $('._tel_.loading_sm').hide();
                  clearInterval(timer);
                  if(allPhone && allPhone.tel1!='-'){

                      var phoneNum = Number('9'+allPhone.tel1.replace(/-/g,''));
                      console.log('phone',phoneNum);
                      window.opener.window.parent.searchPageCall = false;
                      window.opener.window.parent.etFsDialNo(phoneNum);
                  }else{
                      alert('当前用户尚未记录固话号码');
                      return;
                  }
                  $("._stav-hovoru").html("");
                  var calling_1 = `
         <div class="_zhuantai">&nbsp;固-话</div> <div class="_zhuantai">&nbsp;呼叫中</div><div class="_zhuantai"> &nbsp; &nbsp;&nbsp;. . .</div>
      `;
                  $("._stav-hovoru").append(calling_1);
                  $("._on-hook").show();
                  $("._on-hook").on("click",function(){
                      $("._stav-hovoru").html("");
                      var callingoff='<div class="_zhuantai">&nbsp;固话</div><div class="_zhuantai">&nbsp;无呼叫</div><div class="_zhuantai"> &nbsp; &nbsp;&nbsp;. . .</div>';
                      $("._stav-hovoru").append(callingoff);
                      $("._on-hook").hide();
                      window.opener.window.parent.etOlazyPhonePost.hangOff();
                  })
              }
          },2000)
      }else{
          if(allPhone && allPhone.tel1!='-'){

              var phoneNum = Number('9'+allPhone.tel1.replace(/-/g,''));
              console.log('phone',phoneNum);
              window.opener.window.parent.searchPageCall = false;
              window.opener.window.parent.etFsDialNo(phoneNum);
          }else{
              alert('当前用户尚未记录固话号码');
              return;
          }
          $("._stav-hovoru").html("");
          var calling_1 = `
         <div class="_zhuantai">&nbsp;固-话</div> <div class="_zhuantai">&nbsp;呼叫中</div><div class="_zhuantai"> &nbsp; &nbsp;&nbsp;. . .</div>
      `;
          $("._stav-hovoru").append(calling_1);
          $("._on-hook").show();
          $("._on-hook").on("click",function(){
              $("._stav-hovoru").html("");
              var callingoff='<div class="_zhuantai">&nbsp;固话</div><div class="_zhuantai">&nbsp;无呼叫</div><div class="_zhuantai"> &nbsp; &nbsp;&nbsp;. . .</div>';
              $("._stav-hovoru").append(callingoff);
              $("._on-hook").hide();
              window.opener.window.opener.window.parent.etOlazyPhonePost.hangOff();
          })
      }

  })
  //主号码短信发送
  /*$("._duanx").on("click",function(e){
    e.stopPropagation();
    $(".e-massage").show();
    //$(".e-massage").attr("z-index","2")
    $(".e-massage").css("z-index","1")
    $("._duanx").css("background-position","-94px -34px");
    $(".send_massage_btn").on("click",function(e){
      e.preventDefault();
      var text = $(".massage_text").val();
    })
    $(".send_massage_btn").on("mousedown",function(){
      $(".send_massage_btn").css("background-color","#58B431");
    })
    $(".send_massage_btn").on("mouseup",function(){
      $(".send_massage_btn").css("background-color","#8DE7B8");
    })
    $(".Exit_massage").on("click",function(){
      $(".e-massage").hide();
      $("._duanx").css("background-position","-94px 0px");
    })
  })*/
 //主线号码拨号
  $("._zhuxian").on("click",function(e){
    e.stopPropagation();
    $(".e-massage").css("z-index","0")
    $(".Prepare_exhaled").html("");
      var calling_zhuxian = '';
      calling_zhuxian = `
            <div>
              <div class="_call_num">
                <div class="_call_number">${allPhone.phone[0]}</div>
                <div class="_call_site">${allPhone.phone[1]}</div>
              </div>
              <div class="_call_ProGress">呼叫状态(无)</div>
              <div class="on_call">
                <div class="call_btn">手机呼出</div>
                <div class="call_btn_2">座机呼出</div>
                <div class="call_up">取消</div>
                <div class="guaji_1">挂机</div>
              </div>
            </div>
            <div class="zhuxian loading" style="display:none"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>
      `;
    $(".Prepare_exhaled").append(calling_zhuxian);
    $(".Prepare_exhaled").show();
    $(".call_up").on("click",function(){
      $(".Prepare_exhaled").hide();
      $("._zhuxian").css("background-position","0px 0px");
    });
    $("._zhuxian").css("background-position","0px -34px");

  /*  $("._zhuxian").on("mouseup",function(){
      $("._zhuxian").css("background-position","0px 0px");
    })*/
    $(".call_btn").on("click",function(){
        if (!window.opener.window.parent.etPsLoginBool||!window.opener.window.parent.etPoIsFlash){
          $('.zhuxian.loading').show().prev().hide();
            //alert('拨号服务尚未初始化成功，请稍候重试');
            //return;
            var timer = setInterval(function(){
              if(window.opener.window.parent.etPsLoginBool||window.opener.window.parent.etPoIsFlash){
                  $('.zhuxian.loading').hide().prev().show();
                clearInterval(timer);
                  var phoneNum =Number('9'+allPhone.phone[0].replace(/-/g,''));
                  window.opener.window.parent.searchPageCall = false;
                  window.opener.window.parent.etFsDialNo(phoneNum);
                  $("._call_ProGress").html("")
                  $("._call_ProGress").html("手机呼出")
                  $(".call_btn").hide();
                  $(".call_btn_2").hide();
                  $(".call_up").hide();
                  $(".guaji_1").show();
                  $(".guaji_1").on("click",function(){
                      window.opener.window.parent.etOlazyPhonePost.hangOff();
                      $("._call_ProGress").html("呼叫状态（无）")
                      $(".call_btn").show();
                      $(".call_btn_2").show();
                      $(".call_up").show();
                      $(".guaji_1").hide();
                  })
              }
            },2000)
        }else{
            var phoneNum =Number('9'+allPhone.phone[0].replace(/-/g,''));
            window.opener.window.parent.searchPageCall = false;
            window.opener.window.parent.etFsDialNo(phoneNum);
            $("._call_ProGress").html("")
            $("._call_ProGress").html("手机呼出")
            $(".call_btn").hide();
            $(".call_btn_2").hide();
            $(".call_up").hide();
            $(".guaji_1").show();
            $(".guaji_1").on("click",function(){
                window.opener.window.parent.etOlazyPhonePost.hangOff();
                $("._call_ProGress").html("呼叫状态（无）")
                $(".call_btn").show();
                $(".call_btn_2").show();
                $(".call_up").show();
                $(".guaji_1").hide();
            })
        }

    })

    $(".call_btn_2").on("click",function(){

        if(!window.opener.window.parent.etPsLoginBool||!window.opener.window.parent.etPoIsFlash){
            $('.zhuxian.loading').show().prev().hide();
            var timer = setInterval(function(){
                if(window.opener.window.parent.etPsLoginBool||window.opener.window.parent.etPoIsFlash) {
                    $('.zhuxian.loading').hide().prev().show();
                    clearInterval(timer);
                    if(allPhone.phone[1]=='广东 广州'){
                        var phoneNum = '8'+allPhone.phone[0].replace(/-/g,'')//Number('8'+allPhone.phone[0].replace(/-/g,'')); //广州号码+8

                    }else{
                        var phoneNum = '0'+allPhone.phone[0].replace(/-/g,''); //非广州号码+0
                    }
                    console.log('phone',phoneNum);
                    window.opener.window.parent.searchPageCall = false;
                    window.opener.window.parent.etFsDialNo(phoneNum);

                    $("._call_ProGress").html("")
                    $("._call_ProGress").html("固话呼出");
                    $(".call_btn").hide();
                    $(".call_btn_2").hide();
                    $(".call_up").hide();
                    $(".guaji_1").show();
                    $(".guaji_1").on("click",function(){
                        window.opener.window.parent.etOlazyPhonePost.hangOff();
                        $("._call_ProGress").html("呼叫状态（无）")
                        $(".call_btn").show();
                        $(".call_btn_2").show();
                        $(".call_up").show();
                        $(".guaji_1").hide();
                    })
                }
            },2000)
        }else{

            if(allPhone.phone[1]=='广东 广州'){
                var phoneNum = '8'+allPhone.phone[0].replace(/-/g,'')//Number('8'+allPhone.phone[0].replace(/-/g,'')); //广州号码+8


            }else{
                var phoneNum = '0'+allPhone.phone[0].replace(/-/g,''); //非广州号码+0
            }
            console.log('phone',phoneNum);
            window.opener.window.parent.searchPageCall = false;
            window.opener.window.parent.etFsDialNo(phoneNum);


            $("._call_ProGress").html("")
            $("._call_ProGress").html("固话呼出")
            $(".call_btn").hide();
            $(".call_btn_2").hide();
            $(".call_up").hide();
            $(".guaji_1").show();
            $(".guaji_1").on("click",function(){
                window.opener.window.parent.etOlazyPhonePost.hangOff();
                $("._call_ProGress").html("呼叫状态（无）")
                $(".call_btn").show();
                $(".call_btn_2").show();
                $(".call_up").show();
                $(".guaji_1").hide();
            })

        }

    })
  })
  /*电话呼出和挂断状态*/
  $(".call_phone_btn").on("click",function(){
      if (!window.opener.window.parent.etPsLoginBool||!window.opener.window.parent.etPoIsFlash){
          $('.call_phone_.loading').show().prev().hide();
        //alert('拨号服务尚未初始化成功，请稍候重试');
        //return;
          var timer = setInterval(function(){
              if(window.opener.window.parent.etPsLoginBool||window.opener.window.parent.etPoIsFlash) {
                  $('.call_phone_.loading').hide().prev().show();
                  clearInterval(timer);
                  if(allPhone){
                      var phoneNum = Number('9'+allPhone.phone[0].replace(/-/g,''));
                      console.log('phone',phoneNum);
                      window.opener.window.parent.searchPageCall = false;
                      window.opener.window.parent.etFsDialNo(phoneNum);
                  }

                  $("._call_ProGress").html("");

                  $("._call_ProGress").append("手机呼出...");
                  $(".call_phone_btn").hide();
                  $(".call_fixed_btn").hide();
                  $(".call_break").show();
              }
          },2000)
      }else{
          if(allPhone){
              var phoneNum = Number('9'+allPhone.phone[0].replace(/-/g,''));
              console.log('phone',phoneNum);
              window.opener.window.parent.searchPageCall = false;
              window.opener.window.parent.etFsDialNo(phoneNum);
          }

          $("._call_ProGress").html("");

          $("._call_ProGress").append("手机呼出...");
          $(".call_phone_btn").hide();
          $(".call_fixed_btn").hide();
          $(".call_break").show();
      }

      console.info('allphone',allPhone)


  })
  $(".call_phone_btn").on("mousedown",function(){
    $(".call_phone_btn").css("background-color","#58B431");
  })
  $(".call_phone_btn").on("mouseup",function(){
    $(".call_phone_btn").css("background-color","#8DE7B8");
  })


  //固话呼出
  $(".call_fixed_btn").on("click",function(){
      if (!window.opener.window.parent.etPsLoginBool||!window.opener.window.parent.etPoIsFlash){
          //alert('拨号服务尚未初始化成功，请稍候重试');
          //return;
          $('.call_phone_.loading').show().prev().hide();
          var timer = setInterval(function(){
              if(window.opener.window.parent.etPsLoginBool||window.opener.window.parent.etPoIsFlash) {
                  $('.call_phone_.loading').hide().prev().show();
                  clearInterval(timer);
                  if(allPhone){
                      if(allPhone.phone[1]=='广东 广州'){
                          var phoneNum = Number('8'+allPhone.phone[0].replace(/-/g,'')); //广州号码+8
                      }else{
                          var phoneNum = '0'+allPhone.phone[0].replace(/-/g,''); //非广州号码+0
                      }
                      console.log('phone',phoneNum);
                      window.opener.window.parent.searchPageCall = false;
                      window.opener.window.parent.etFsDialNo(phoneNum);
                  }
                  $("._call_ProGress").html("");
                  $("._call_ProGress").append("固话呼出...");
                  $(".call_fixed_btn").hide();
                  $(".call_phone_btn").hide();
                  $(".call_break").show();
              }
          },2000)
      }else{
          if(allPhone){
              if(allPhone.phone[1]=='广东 广州'){
                  var phoneNum = Number('8'+allPhone.phone[0].replace(/-/g,'')); //广州号码+8
              }else{
                  var phoneNum = '0'+allPhone.phone[0].replace(/-/g,''); //非广州号码+0
              }
              console.log('phone',phoneNum);
              window.opener.window.parent.searchPageCall = false;
              window.opener.window.parent.etFsDialNo(phoneNum);
          }
          $("._call_ProGress").html("");
          $("._call_ProGress").append("固话呼出...");
          $(".call_fixed_btn").hide();
          $(".call_phone_btn").hide();
          $(".call_break").show();

      }


  })
  $(".call_fixed_btn").on("mousedown",function(){
    $(".call_fixed_btn").css("background-color","#58B431");
  })
  $(".call_fixed_btn").on("mouseup",function(){
    $(".call_fixed_btn").css("background-color","#8DE7B8");
  })
  //电话挂断
  $(".call_break").on("click",function(){
    $("._call_ProGress").html("");
    $("._call_ProGress").append("呼叫状态(无)");
    $(".call_phone_btn").show()
    $(".call_fixed_btn").show();
    $(".call_break").hide();
    window.opener.window.parent.etOlazyPhonePost.hangOff();
  })

  /*var Gray_icon = [needData,jobData,shouruData,houseData,carData,cheweiData,baodanData,zhaiwuData,zhengxinData,sifaData,beizhuData,];
  $(Gray_icon).each(function(i){
    console.log($(Gray_icon[i]).find().prevObject.length == 0);
    if($(Gray_icon[i]).find().prevObject.length == 0){
      console.log($(Gray_icon[i]));
      console.log($(this));
    }
  })*/



/*  for(i in needData){

    var hkqxian = qishuArr2[needData[i].hkqxian - 1];
    var dklxing = loanTypeArr[needData[i].dklxing - 1];
    var hkfshi = repayWayArr[needData[i].hkfshi - 1];
    var jpxing = urgencyArr[needData[i].jpxing - 1];

    needDataHtml = '<div class="swiper-slide needhtml"><div class="msg-content lh50 f14"><div class="row">' +
        '<div class="col-xs-5 text-right">放款时间</div><div class="col-xs-5 pl20 color-gray">'+ needData[i].fkdate +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">贷款金额</div><div class="col-xs-5 pl20 color-gray">'+ needData[i].dkmoney +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">还款期限</div><div class="col-xs-5 pl20 color-gray">'+ hkqxian +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">贷款类型</div><div class="col-xs-5 pl20 color-gray">'+ dklxing +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">还款方式</div><div class="col-xs-5 pl20 color-gray">'+ hkfshi +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">急迫性</div><div class="col-xs-5 pl20 color-gray">'+ jpxing +'</div></div>' +
        '</div><button class="client-icon edit btn-edit" data-itemid="'+ needData[i].id +'" data-toggle="modal" data-target="#needModal"></button>' +
        '</div>'
    //needhtml = needhtml + needDataHtml;
    /!*    console.log(needDataHtml);
     console.log(needData[i].fkdate);*!/


    $("body .msg-container.xuqiu .swiper-wrapper").append(needDataHtml);
  }*/
  $(window).ready(function(){
    return;
    //console.log(123)
    var str = "客户需求";
    var update = [];
    $("._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
   $("._remove").html("")

    var _add = '<div class="msg-icon icon06 xuqiu-add" data-toggle="modal" data-target="#needModal"><img src="images/increased.png" alt="">添加</div>';

    $("body ._col_1").append(str);
    $("._add").append(_add);
    for( var i in needData){

      //console.log(needData[i].update);
      var dataHtml = "";//？？？？？？
      var compile = "";
      var hkqxian = qishuArr2[needData[i].hkqxian - 1];
      var dklxing = loanTypeArr[needData[i].dklxing - 1];
      var hkfshi = repayWayArr[needData[i].hkfshi - 1];
      var jpxing = urgencyArr[needData[i].jpxing - 1];
      if(needData[i].update ){
        //console.log(needData[i].update);
        update = `<div class=" swiper-slide" data-id="${needData[i].id}">${needData[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: 4,//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0 //默认边距
        });

      }

      dataHtml = `<div class="needHtml">
          <div class="row _xuqiu_h">
            <div class="col-xs-5 text-right">放款时间</div><div class="col-xs-5 pl20">${needData[i].fkdate}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">贷款金额</div><div class="col-xs-5 pl20">${needData[i].dkmoney}万元</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">还款期限</div><div class="col-xs-5 pl20">${hkqxian}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">贷款类型</div><div class="col-xs-5 pl20">${dklxing}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">还款方式</div><div class="col-xs-5 pl20">${hkfshi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">急迫性</div><div class="col-xs-5 pl20">${jpxing}</div>
           </div>
      </div>`;
      compile = `<button class="edit btn-edit  needHtml-compile" data-itemid="${needData[i].id}" data-toggle="modal" data-target="#needModal"><img src="images/compile.png" alt="">编辑</button>`;
      $("._customer_data").append(dataHtml);
      $("._remove").append(compile);
      //$("._remove").hide();

      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".needHtml");
      $(_first[0]).show().siblings().hide();
      var bbb=$(this).parents("._nav_right").siblings("._client_information").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()==="" || $(bbb[i]).find(".pl20").html() === "undefined"){
          $(bbb[i]).remove();
        }
      })
      var length8 = $(_first[0]).children("._xuqiu_h");//获取当前子元素
      //console.log(length8);
      var arrBox = [];
      for(var j = 0; j < length8.length; j+=8){//循环分组数据
        arrBox.push(length8.slice(j,j+8));

        $(".needHtml").append($("<div class='grouping'></div>"));

      }
      //console.log(arrBox);//点解一开始就触发做三次
      for(var k = 0; k < $(".grouping").length; k++){//遍历总div，在每个DIV追加元素
        $($(".grouping")[k]).html(arrBox[k]);
      }
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){//这里是按钮触发
        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){
          if($(arr[i]).find(".pl20").html() === "" || $(arr[i]).find(".pl20").html() === "undefined"){
            $(arr[i]).hide();
          }
        })
        for(var i in needData){
          var arrBox_1 = [];
          if(needData[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作
            $(this).addClass('_data').siblings().removeClass('_data');
            $("._customer_data").show();
            $("._remove").show();
            $('.needHtml:eq('+$(this).index()+')').show().siblings().hide();
           //console.log($('.needHtml-compile:eq(' + $(this).index() + ')'));
            $('.needHtml-compile:eq('+$(this).index()+')').show().siblings().hide();
            var length8_1= $('.needHtml:eq('+$(this).index()+')').children("._xuqiu_h");//第二次点击没有这个子元素为_xuqiu_h的东西
            //console.log(length8_1);
            for(var j = 0; j < length8_1.length; j+=8){//循环分组数据
              arrBox_1.push(length8_1.slice(j,j+8));
              $(".needHtml").append($("<div class='grouping'></div>"));
            }
            var grouping = [];
            for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
              $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              var _grouping = $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              grouping.push(_grouping);
              grouping[0].show().siblings().remove();
            }
          }
        }
      })
    }

  });
  for(var i=0;i<needData.length;i++){
    if(needData.length !==0){
      var  arr_length = needData[0];

      var arr_no = [];
     for(var j in arr_length){
       if(arr_length[j]==="0" || arr_length[j]==="")
       arr_no.push(arr_length[j])
     }
     /* for(let  [k,v] of Object.entries(arr_length)){
        //console.log(k+" "+v);
        if(v==="0" || v===""){
          arr_no.push(v);
        }
      }*/
      var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
      var Empty  = parseFloat(arr_no.length);
      var baifenbi = (zongshu-Empty-2)/(zongshu-2);
      var baifenbi_ = baifenbi.toFixed(2);
      var baifenbi_xuqiu = (baifenbi_*100+""+"%");
      $("._kehuxuqiu > ._Finish_rate > p").html(baifenbi_xuqiu);
    }
  }
  $("#_kehuxuqiu").on("click",function(){
    var str = "客户需求";
    var update = [];
    $("body ._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
    $("._remove").html("")

    var _add = '<div class="msg-icon icon06 xuqiu-add" data-toggle="modal" data-target="#needModal"><img src="images/increased.png" alt="">添加</div>';

    $("body ._col_1").append(str);
    $("._add").append(_add);
    for( var i in needData){

      var dataHtml = "";//？？？？？？
      var compile = "";
      var hkqxian = qishuArr2[needData[i].hkqxian - 1];
      var dklxing = loanTypeArr[needData[i].dklxing - 1];
      var hkfshi = repayWayArr[needData[i].hkfshi - 1];
      var jpxing = urgencyArr[needData[i].jpxing - 1];
      if(needData[i].update ){
        update = `<div class=" swiper-slide" data-id="${needData[i].id}">${needData[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: 4,//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0 //默认边距
        });
        if($(".swiper-slide").css("width","222px")){
          $(".swiper-slide").css("width","100px")
        }
      }

      dataHtml = `<div class="needHtml">
          <div class="row _xuqiu_h">
            <div class="col-xs-5 text-right">放款时间</div><div class="col-xs-5 pl20">${needData[i].fkdate}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">贷款金额</div><div class="col-xs-5 pl20">${needData[i].dkmoney}万元</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">还款期限</div><div class="col-xs-5 pl20">${hkqxian}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">贷款类型</div><div class="col-xs-5 pl20">${dklxing}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">还款方式</div><div class="col-xs-5 pl20">${hkfshi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">急迫性</div><div class="col-xs-5 pl20">${jpxing}</div>
           </div>
      </div>`;
      compile = `<div class="kk"><button class="edit btn-edit  needHtml-compile" data-itemid="${needData[i].id}" data-toggle="modal" data-target="#needModal"><img src="images/compile.png" alt="">编辑</button></div>`;
      $("._customer_data").append(dataHtml);
      $("._remove").append(compile);
      var compile_one = $("._remove").find(".kk");
      //console.log(compile_one);
      $(compile_one[0]).show().siblings().hide()
      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".needHtml");
      $(_first[0]).show().siblings().hide();

      var bbb=$(this).parents("._nav_right").siblings("._client_information").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()==="" || $(bbb[i]).find(".pl20").html() === "undefined" || $(bbb[i]).find(".pl20").html() === "0" ){
          $(bbb[i]).remove();
        }
      })
      var length8 = $(_first[0]).children("._xuqiu_h");//获取当前子元素
      var arrBox = [];
      for(var j = 0; j < length8.length; j+=8){//循环分组数据
        arrBox.push(length8.slice(j,j+8));
        $(".needHtml").append($("<div class='grouping'></div>"));

      }
      for(var k = 0; k < $(".grouping").length; k++){//遍历总div，在每个DIV追加元素
        $($(".grouping")[k]).html(arrBox[k])
      }
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){//这里是按钮触发
        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){
          if($(arr[i]).find(".pl20").html() === "" || $(arr[i]).find(".pl20").html() === "undefined"|| $(arr[i]).find(".pl20").html() === "0"){
            $(arr[i]).hide();
          }
        })
        for(var i in needData){
          var arrBox_1 = [];
          if(needData[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作
            var  arr_length = needData[i];
            var arr_no = [];
            for(var j in arr_length){
              // console.log(arr_length[j]);
              if(arr_length[j]==="0"||arr_length[j]==="")
                arr_no.push(arr_length[j])
            }
            var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
            var Empty  = parseFloat(arr_no.length);
            var baifenbi = (zongshu-Empty-2)/(zongshu-2);
            var baifenbi_ = baifenbi.toFixed(2);
            var baifenbi_xuqiu = (baifenbi_*100+""+"%");
            $("._kehuxuqiu > ._Finish_rate > p").html(baifenbi_xuqiu);
            $(this).addClass('_data').siblings().removeClass('_data');
            $("._customer_data").show();
            $("._remove").show();
            $('.needHtml:eq('+$(this).index()+')').show().siblings().hide();
            $('.kk:eq('+$(this).index()+')').show().siblings().hide();
            var length8_1= $('.needHtml:eq('+$(this).index()+')').children("._xuqiu_h");//第二次点击没有这个子元素为_xuqiu_h的东西
            for(var j = 0; j < length8_1.length; j+=8){//循环分组数据
              arrBox_1.push(length8_1.slice(j,j+8));
              $(".needHtml").append($("<div class='grouping'></div>"));
            }
            var grouping = [];
            for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
              $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              var _grouping = $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              grouping.push(_grouping);
              var grouping_hide = $(grouping).find(".grouping");
              grouping_hide =grouping_hide.prevObject;
              for(var i = 0; i < grouping_hide.length; i++ ){
                if(grouping_hide[i].html()===""){
                  $(grouping_hide[i]).remove();
                }
              }
            }
          }
        }
      })
    }
  });
  if(needData.length === 0){
    $("._kehuxuqiu > ._Finish_rate > p").html("0%");
    $("._kehuxuqiu").css("background-position","-41px 0px");
  }


 /* for(i in jobData){
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

    //console.log(jobData[i].yfrgxi)
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

    jobDataHtml = '<div class="swiper-slide jobhtml">' +
        '<div class="msg-content lh26 f14">' +
        '<div class="row"><div class="col-xs-5 text-right">工作性质</div><div class="col-xs-5 pl20 color-gray">'+ gzxzhi +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">营业执照</div><div class="col-xs-5 pl20 color-gray">'+ yyzzhao +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">公司名</div><div class="col-xs-5 pl20 color-gray">'+ jobData[i].gsming +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">注册时间</div><div class="col-xs-5 pl20 color-gray">'+ jobData[i].zcdate +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">公司地址</div><div class="col-xs-5 pl20 color-gray"><div class="row">' + '<div class="col-xs-12">'+ jobData[i].gsdzsheng + jobData[i].gsdzshi + jobData[i].gsdzqu +'</div>' + '<div class="col-xs-12 lh0">'+ jobData[i].gsdzhi +'</div></div></div>' +
        '</div><div class="row pt10"><div class="col-xs-5 text-right">公司类型</div><div class="col-xs-3 pl20 color-gray">'+ gslxing +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">法人</div><div class="col-xs-5 pl20 color-gray">'+ fren +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">与法人关系</div><div class="col-xs-5 pl20 color-gray">'+ yfrgxi +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">占股比例</div><div class="col-xs-5 pl20 color-gray">'+ zgbli +'</div></div><div class="row">' +
        '<div class="col-xs-5 text-right">股份类型</div><div class="col-xs-5 pl20 color-gray">'+ gflxing +'</div></div>' +
        '</div><button class="client-icon edit btn-edit" data-itemid="'+ jobData[i].id +'" data-toggle="modal" data-target="#jobModal"></button></div>'
    //jobhtml = jobhtml + jobDataHtml;
    $("body .msg-container.gongzuo .swiper-wrapper").append(jobDataHtml)
  }*/
  for(var i=0;i<jobData.length;i++){
    if(jobData.length !==0){
      if (jobData[i].jobkind == 1) {
        //jobData[i].jobkind++;
        gzxzhi = '自雇';
        gslxing = cpmTypeArr02[jobData[i].gslxing - 1];
      }else if(jobData[i].jobkind == 2){
        //jobData[i].jobkind++;
        gzxzhi = '受薪';
        gslxing = cpmTypeArr[jobData[i].gslxing - 1];
      };
      if (jobData[i].yyzzhao == 2) {
        //jobData[i].yyzzhao++
        yyzzhao = '否';
      }else if(jobData[i].yyzzhao == 1){
        //jobData[i].yyzzhao++
        yyzzhao = '是';
      };

      if (jobData[i].fren == 1) {
        fren = '是';
      }else if(jobData[i].fren == 2){
        //jobData[i].fren++
        fren = '否';
      };

      if (jobData[i].gflxing == 1) {
        gflxing = '明股';
      }else if (jobData[i].gflxing == 2){
        //jobData[i].gflxing++
        gflxing = '暗股';
      };
      var  arr_length = jobData[0];
      //console.log(arr_length);
      var arr_no = [];
      for(var j in arr_length){
        // console.log(arr_length[j]);
        if(arr_length[j]==="0" || arr_length[j]==="")
          arr_no.push(arr_length[j])
        //console.log(arr_no);
      }
/*      console.log(arr_length)*/
     /* for(let [k,v] of Object.entries(arr_length)){
        console.log(k+"---"+v)
      }*/
      var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
      var Empty  = parseFloat(arr_no.length);
      var baifenbi = (zongshu-Empty-2)/(zongshu-2);
      var baifenbi_ = baifenbi.toFixed(2);
      var baifenbi_xuqiu = (baifenbi_*100+""+"%");
      $("._gongzuoxuqiu > ._Finish_rate > p").html(baifenbi_xuqiu);
    }
  }
  $("#_gongzuoxuqiu").on("click",function(){
    var str = "工作信息";
    var update = [];

    $("body ._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
    $("._remove").html("")
    var _add = '<div class="msg-icon icon06 gongzuo-add" data-toggle="modal" data-target="#jobModal"><img src="images/increased.png" alt="">添加</div>';




    $("body ._col_1").append(str);
    $("._add").append(_add);

    for( var i in jobData){
      var gzxzhi = '',
          yyzzhao = '',
          fren = '',
          gflxing = '',
          gslxing = '',
          gslxings = jobData[i].gslxings,
          yfrgxi = '',
          zgbli = '',
          gwmcheng = jobData[i].gwmcheng,
          gsming = jobData[i].gsming,
          rzdate = jobData[i].rzdate,
          gwei = '',
          ldgxi = '',
          lwpqgsszd = '',
          lwpqgsming = '',
          hide='';


        switch (jobData[i].gwei){
            case 1:
              gwei = '保安司机';
              break;
            case 2:
              gwei = '一线工人';
              break;
            case 3:
              gwei = '销售人员';
              break;
            case 4:
              gwei = '后勤／技术';
              break;
            case 5:
              gwei = '管理人员';
              break;
            case 6:
              gwei = '高层管理';
              break;

        }

        if(jobData[i].ldgxi == 1){
          ldgxi = '本公司正式员工'
        }else if(jobData[i].ldgxi == 2){
          ldgxi = '劳务派遣员工';
          lwpqgsszd = jobData[i].lwpqgsszdsheng + jobData[i].lwpqgsszdshi;
          $('.paiqian').show();
        }

      if (jobData[i].jobkind == 1) {
        gzxzhi = '自雇';
        gslxing = cpmTypeArr02[jobData[i].gslxing - 1];
        hide = jobData[i].gslxing == 3?'':'hidden';
      }else if(jobData[i].jobkind == 2){
        gzxzhi = '受薪';
        gslxing = cpmTypeArr[jobData[i].gslxing - 1];
        hide = jobData[i].gslxing == 5?'':'hidden';
      };
        if (jobData[i].yyzzhao == 2) {
            //jobData[i].yyzzhao++
            yyzzhao = '否';
        }else if(jobData[i].yyzzhao == 1){
            //jobData[i].yyzzhao++
            yyzzhao = '是';
        };

      if (jobData[i].fren == 1) {
        fren = '是';
      }else if(jobData[i].fren == 2){
        //jobData[i].fren++
        fren = '否';
      };

        if (jobData[i].gflxing == 1) {
            gflxing = '明股';
        }else if (jobData[i].gflxing == 2){
            //jobData[i].gflxing++
            gflxing = '暗股';
        };

      //console.log(jobData[i].yfrgxi)
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
      if(jobData[i].update ){
        //console.log(jobData[i].update.length);
        update = `<div class=" swiper-slide" data-id="${jobData[i].id}">${jobData[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: 4,//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0 //默认边距
        });
        if($(".swiper-slide").css("width","222px")){
          $(".swiper-slide").css("width","100px")
        }
      }
      console.log(gzxzhi);
      dataHtml = `<div class="needHtml">
          <div class="row _xuqiu_h">
            <div class="col-xs-4 text-right">工作性质</div><div class="col-xs-8 pl20">${gzxzhi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">营业执照</div><div class="col-xs-8 pl20">${yyzzhao}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">注册时间</div><div class="col-xs-8 pl20">${jobData[i].zcdate}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">公司名</div><div class="col-xs-8 pl20">${gsming}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">公司地址</div><div class="col-xs-8 pl20">${jobData[i].gsdzsheng }${jobData[i].gsdzshi}${jobData[i].gsdzqu} ${jobData[i].gsdzhi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">公司类型</div><div class="col-xs-8 pl20">${gslxing} <span class="${hide}">${gslxings}</span></div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">岗位</div><div class="col-xs-8 pl20">${gwei}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">岗位名称</div><div class="col-xs-8 pl20">${gwmcheng}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">劳动关系</div><div class="col-xs-8 pl20">${ldgxi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">派遣公司所在地</div><div class="col-xs-8 pl20">${lwpqgsszd}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">派遣公司名</div><div class="col-xs-8 pl20">${lwpqgsming}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">入职时间</div><div class="col-xs-8 pl20">${rzdate}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">法人</div><div class="col-xs-8 pl20">${fren}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">与法人关系</div><div class="col-xs-8 pl20">${yfrgxi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">占股比例</div><div class="col-xs-8 pl20">${zgbli}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">股份类型</div><div class="col-xs-8 pl20">${gflxing}</div>
           </div>
           <div>
         </div>
      </div>`;
      compile = `<div class="gongzuo"><button class="edit btn-edit needHtml-compile" data-itemid="${jobData[i].id}" data-toggle="modal" data-target="#jobModal"><img src="images/compile.png" alt="">编辑</button></div>`;
      $("._customer_data").append(dataHtml);
      $("._remove").append(compile);
      console.log($("._remove"));
      // $("._remove").hide();
      var compile_one = $("._remove").find(".gongzuo");
      $(compile_one[0]).show().siblings().hide()
      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".needHtml");
      $(_first[0]).show().siblings().hide();
      var bbb=$(this).parents("._nav_right").siblings("._client_information").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()===" " || $(bbb[i]).find(".pl20").html() === "undefined"|| $(bbb[i]).find(".pl20").html() === ""  ){
          $(bbb[i]).remove();
        }
      })
      var length8 = $(_first[0]).children("._xuqiu_h");//获取当前子元素
      //console.log(length8);
      var arrBox = [];
      for(var j = 0; j < length8.length; j+=8){//循环分组数据
        arrBox.push(length8.slice(j,j+8));

        $(".needHtml").append($("<div class='grouping'></div>"));

      }
      //console.log(arrBox);//点解一开始就触发做三次
      for(var k = 0; k < $(".grouping").length; k++){//遍历总div，在每个DIV追加元素
        $($(".grouping")[k]).html(arrBox[k]);
      }
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){//这里是按钮触发
        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){
          if($(arr[i]).find(".pl20").html() === " " || $(arr[i]).find(".pl20").html() === "undefined"|| $(arr[i]).find(".pl20").html() === "" ){
            $(arr[i]).remove();
          }
        })
        for(var i in jobData){
          console.log(jobData[i]);
          var arrBox_1 = [];
          if(jobData[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作
            var  arr_length = jobData[i];
            var arr_no = [];
            for(var j in arr_length){
              console.log(arr_length[j]);
              if(arr_length[j]==="0"||arr_length[j]==="")
                arr_no.push(arr_length[j])
            }
            var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
            var Empty  = parseFloat(arr_no.length);
            var baifenbi = (zongshu-Empty-2)/(zongshu-2);
            var baifenbi_ = baifenbi.toFixed(2);
            var baifenbi_xuqiu = (baifenbi_*100+""+"%");
            $("._gongzuoxuqiu > ._Finish_rate > p").html(baifenbi_xuqiu);
            $(this).addClass('_data').siblings().removeClass('_data');
            $("._customer_data").show();
            $("._remove").show();
            $('.needHtml:eq('+$(this).index()+')').show().siblings().hide();
            $('.gongzuo:eq('+$(this).index()+')').show().siblings().hide();
            var length8_1= $('.needHtml:eq('+$(this).index()+')').children("._xuqiu_h");//第二次点击没有这个子元素为_xuqiu_h的东西
            //console.log(length8_1);
            for(var j = 0; j < length8_1.length; j+=8){//循环分组数据
              arrBox_1.push(length8_1.slice(j,j+8));
              $(".needHtml").append($("<div class='grouping'></div>"));
            }
            var grouping = [];
            for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
              $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              var _grouping = $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              grouping.push(_grouping);
              var grouping_hide = $(grouping).find(".grouping");
              grouping_hide =grouping_hide.prevObject;
              for(var i = 0; i < grouping_hide.length; i++ ){
                if(grouping_hide[i].html()===""){
                  $(grouping_hide[i]).hide();
                }
              }
            }

          }
        }
      })
    }

  });

  if(jobData.length === 0){
    $("._gongzuoxuqiu > ._Finish_rate > p").html("0%");
    $("._gongzuoxuqiu").css("background-position","-41px -43px");
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
  var listIcon = '',alarmIcon='',alarmHtml='';
  var order = '';

  if (followData[i].type == 1 ) {
    listIcon = 'icon-follow-phone';
  }
  if(followData[i].type == 2){
    listIcon = 'tel-small';
  }
  if (followData[i].type == 3) {
    listIcon = 'face';
  }
  if(followData[i].wayid!=0){
    order = followData[i].wayid;
  }

  if(followData[i].memo2!=""){
    alarmIcon = 'icon_alarm';
    alarmHtml = '<p>提醒时间：'+ followData[i].memo2_tx +'</p><p>'+ followData[i].attach +'：'+ followData[i].memo2 +'</p>'
  }


  var followDataHtml = '<li data-toggle="tooltip" data-placement="top" title="'+ alarmHtml +'"><div class="clearfix"><div class="pull-left">'+ followData[i].date+' '+ followData[i].time +'</div><div class="pull-left name">'+ followData[i].attach +'</div><div class="pull-right"><div class="client-icon'+ ' ' + alarmIcon +'"></div><div class="client-icon'+ ' ' + listIcon +'"></div><div style="width:10px">'+order+'</div></div></div><p class="text">'+ followData[i].memo +'</p></li>'

  if (followData[i].type == 1 || followData[i].type == 2 || followData[i].type == 0) {
    $(".contact-list .contact-tel ul").append(followDataHtml)
  }
  if (followData[i].type == 3) {
    $(".contact-list .contact-face ul").append(followDataHtml)
  }
  if(followData[i].type != 1 && followData[i].type != 2 && followData[i].type != 3 && followData[i].type != 0){
    $(".contact-list .contact-unknow ul").append(followDataHtml)
  }
}

    $('[data-toggle="tooltip"]').tooltip({html:true});

$("#_shouruxinxi").on("click",function(){
  var _str = "收入信息";
  $("body ._col_1").html("");
  $("body ._col_1").append(_str);
  $("._add").html("");
  $("._main > .swiper-wrapper").html('');
  $("._customer_data").html("");
  $("._remove").html("");
  var init_1=function(){
    income1_baifenbi();
    if (income1_Data.length === 0){
      $("._shouruxinxi > ._Finish_rate > p").html("0%");
    }
    var str = "收入信息（工资）";
    var update = [];

    $("body ._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
    $("._remove").html("")

    var _add = '<div class="msg-icon icon06 income1-add" data-toggle="modal" data-target="#wagesModal"><img src="images/increased.png" alt="">添加</div>';

    $("body ._col_1").append(str);
    $("._add").append(_add);
    for( var i in income1_Data){
      var dataHtml = "";//？？？？？？
      var compile = "";
      var gzffxshi = '';//工资发放形式
      var unshow='';
      switch (income1_Data[i].gz_gzffxshi){
        case '1':
          gzffxshi = "银行代发";
          break;
        case '2':
          gzffxshi = "公司转账";
          break;
        case '3':
          gzffxshi = "现金";
          break;
          default:
            unshow = 'hide';
      };
      if(income1_Data[i].update ){
        update = `<div class=" swiper-slide" data-id="${income1_Data[i].id}">${income1_Data[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: 4,//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0 //默认边距
        });
        if($(".swiper-slide").css("width","222px")){
          $(".swiper-slide").css("width","100px")
        }
      }

      dataHtml +=`<div class="needHtml">
        <div class="row _xuqiu_h ${unshow}">
            <div class="col-xs-4 text-right">工资发放形式</div><div class="col-xs-8 pl20">${gzffxshi}</div>
        </div>
        <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">工资金额</div><div class="col-xs-8 pl20">${income1_Data[i].gz_gzmoney}元/月</div>
        </div>
      </div>`;
      compile = `<div class="income1_compole"><button class=" edit btn-edit needHtml-compile" data-itemid="${income1_Data[i].id}" data-toggle="modal" data-target="#wagesModal"><img src="images/compile.png" alt="">编辑</button></div>`;
      $("._customer_data").append(dataHtml);
      $("._remove").append(compile);
      //$("._remove").hide();
      var compile_one = $("._remove").find(".income1_compole");
      $(compile_one[0]).show().siblings().hide()
      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".needHtml");
      $(_first[0]).show().siblings().hide();
      var bbb=$(this).parents("._shouru_btn_left").siblings("._customer_data").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      console.log($(this));
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()==="" || $(bbb[i]).find(".pl20").html() === "undefined"|| $(bbb[i]).find(".pl20").html() === "undefinedundefinedundefined"){
          $(bbb[i]).remove();
        }
      })
      var length8 = $(_first[0]).children("._xuqiu_h");//获取当前子元素
      var arrBox = [];
      for(var j = 0; j < length8.length; j+=8){//循环分组数据
        arrBox.push(length8.slice(j,j+8));
        $(".needHtml").append($("<div class='grouping'></div>"));

      }
      for(var k = 0; k < $(".grouping").length; k++){//遍历总div，在每个DIV追加元素
        $($(".grouping")[k]).html(arrBox[k]);
      }
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){//这里是按钮触发
        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){
          if($(arr[i]).find(".pl20").html() === "" || $(arr[i]).find(".pl20").html() === "undefined"){
            $(arr[i]).hide();
          }
        })
        for(var i in income1_Data){
          var arrBox_1 = [];
          if(income1_Data[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作
            var  arr_length = income1_Data[i];
            var arr_no = [];
            for(var j in arr_length){
              // console.log(arr_length[j]);
              if(arr_length[j]==="0"||arr_length[j]==="")
                arr_no.push(arr_length[j])
            }
            var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
            var Empty  = parseFloat(arr_no.length);
            var baifenbi = (zongshu-Empty-2)/(zongshu-2);
            var baifenbi_ = baifenbi.toFixed(2);
            var baifenbi_xuqiu = (baifenbi_*100+""+"%");
            $("._shouruxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
            $(this).addClass('_data').siblings().removeClass('_data');
            $("._customer_data").show();
            $("._remove").show();
            $('.needHtml:eq('+$(this).index()+')').show().siblings().hide();
            $('.income1_compole:eq('+$(this).index()+')').show().siblings().hide();
            var length8_1= $('.needHtml:eq('+$(this).index()+')').children("._xuqiu_h");//第二次点击没有这个子元素为_xuqiu_h的东西
            for(var j = 0; j < length8_1.length; j+=8){//循环分组数据
              arrBox_1.push(length8_1.slice(j,j+8));
              $(".needHtml").append($("<div class='grouping'></div>"));
            }
            var grouping = [];
            for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
              $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              var _grouping = $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              grouping.push(_grouping);
              var grouping_hide = $(grouping).find(".grouping");
              grouping_hide =grouping_hide.prevObject;
              for(var i = 0; i < grouping_hide.length; i++ ){
                if(grouping_hide[i].html()===""){
                  $(grouping_hide[i]).remove();
                }
              }
            }
          }
        }
      })
    }

  }
  init_1();
  $("._Income_icon").each(function(index,data) {
    var pitch = `<div class="pitch"></div>`;
    //$(this).addClass("ceshi").siblings("._Income_icon").removeClass("ceshi");
    $("._gongzixinxi").append(pitch);
    $("._gongzixinxi").siblings("div").children(".pitch").removeClass("pitch");
    $($("._gongzixinxi").children(".pitch")[0]).show().siblings(".pitch").remove();
    $("._gongzixinxi").css("background-color", "#ebebeb").siblings("._Income_icon").css("background-color", "#FFFFFF");
  });

});
 /*   var init1 = function(){
  var str = "收入信息";
  var update = [];
  $("body ._col_1").html("");
  $("._add").html("");
  $("._main > .swiper-wrapper").html("");
  $("._customer_data").html("");
  $("._remove").html("")

  var _add = ' <div class="msg-icon icon06 chechan-add" data-toggle="modal" data-target="#wagesModal"><img src="images/increased.png" alt="">添加</div>';
  //$("body ._col_1").append(str);
  $("._add").append(_add);
  for(i in income1_Data){
    //console.log(income1_Data[i]);
    var dataHtml = "";//？？？？？？
    var compile = "";
    var gzffxshi = '';//工资发放形式
    switch (income1_Data[i].gz_gzffxshi){
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

    if(income1_Data[i].update ){
      var dataHtml = "";
      var compile = "";
      //console.log(income1_Data[i].update.length);
      update = `<div class=" swiper-slide" data-id="${income1_Data[i].id}">${income1_Data[i].update}</div>`;
      $("._main > .swiper-wrapper").append(update);
      var swiper1 = new Swiper('._main ', {
        //pagination: '.swiper-pagination',//哪里设置分页器
        slidesPerView: 4,//当前显示几个
        centeredSlides: true,//默认第一块居中
        paginationClickable: true,//点击小点可以滑动
        spaceBetween:0 //默认边距
      });
      if($(".swiper-slide").css("width","222px")){
        $(".swiper-slide").css("width","100px")
      }
    }
    dataHtml +=`<div class="needHtml">
        <div class="row _xuqiu_h">
            <div class="col-xs-4 text-right">工资发放形式</div><div class="col-xs-8 pl20">${gzffxshi}</div>
        </div>
        <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">工资金额</div><div class="col-xs-8 pl20">${income1_Data[i].gz_gzmoney}</div>
        </div>
      </div>`;
    compile = `<div class="income1_compile"><button class="client-icon edit btn-edit  needHtml-compile" data-itemid="${income1_Data[i].id}" data-toggle="modal" data-target="#wagesModal"><img src="images/compile.png" alt="">编辑</button></div>`;
    $("._customer_data").append(dataHtml);
    //console.log($("._customer_data"));
    $("._remove").append(compile);
    //$("._remove").hide();
    var compile_one = $("._remove").find(".income1_compile");
    console.log(compile_one);
    $(compile_one[0]).show().siblings().hide();
    var gaoliang = $("._client_top > ._main > div").find("div");
    $(gaoliang[0]).addClass("_data");
    var _first = $("._customer_data").find(".needHtml");
    $(_first[0]).show().siblings().hide();

    var bbb=$(this).parents("._nav_right").siblings("._client_information").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
    bbb.each(function(i){//循环当前的样式
      if($(bbb[i]).find(".pl20").html()==="" || $(bbb[i]).find(".pl20").html() === "undefined"){
        $(bbb[i]).remove();
      }
    })
    var length8 = $(_first[0]).children("._xuqiu_h");//获取当前子元素
    //console.log(length8);
    var arrBox = [];
    for(var j = 0; j < length8.length; j+=8){//循环分组数据
      arrBox.push(length8.slice(j,j+8));

      $(".needHtml").append($("<div class='grouping'></div>"));

    }
    //console.log(arrBox);//点解一开始就触发做三次
    for(var k = 0; k < $(".grouping").length; k++){//遍历总div，在每个DIV追加元素
      $($(".grouping")[k]).html(arrBox[k]);
      //console.log($($(".grouping")[k]).html(arrBox[k]));
    }
    $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){//这里是按钮触发
      var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
      arr.each(function(i){
        if($(arr[i]).find(".pl20").html() === "" || $(arr[i]).find(".pl20").html() === "undefined"){
          $(arr[i]).hide();
        }
      })
      for(var i in income1_Data){
        var arrBox_1 = [];
        if(income1_Data[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作
          $(this).addClass('_data').siblings().removeClass('_data');
          $("._customer_data").show();
          $("._remove").show();
          $('.needHtml:eq('+$(this).index()+')').show().siblings().hide();
          //console.log($('.needHtml-compile:eq(' + $(this).index() + ')'));
          $('.needHtml-compile:eq('+$(this).index()+')').show().siblings().hide();
          var length8_1= $('.needHtml:eq('+$(this).index()+')').children("._xuqiu_h");//第二次点击没有这个子元素为_xuqiu_h的东西
          // console.log(length8_1);
          for(var j = 0; j < length8_1.length; j+=8){//循环分组数据
            arrBox_1.push(length8_1.slice(j,j+8));
            $(".needHtml").append($("<div class='grouping'></div>"));
          }
          var grouping = [];
          for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
            $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
            var _grouping = $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
            grouping.push(_grouping);
            var grouping_hide = $(grouping).find(".grouping");
            grouping_hide =grouping_hide.prevObject;
            for(var i = 0; i < grouping_hide.length; i++ ){
              if(grouping_hide[i].html()===""){
                $(grouping_hide[i]).remove();
              }
            }
          }
        }
      }
    })
  }
}*/

  var income1_baifenbi = function(){
    for(var i=0;i<income1_Data.length;i++){
      if(income1_Data.length !==0){
        var  arr_length = income1_Data[0];
        var arr_no = [];
        for(var j in arr_length){
          // console.log(arr_length[j]);
          if(arr_length[j]==="0" || arr_length[j]==="")
            arr_no.push(arr_length[j])
         // console.log(arr_no);
        }
        var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
        var Empty  = parseFloat(arr_no.length);
        var baifenbi = (zongshu-Empty-2)/(zongshu-2);
        var baifenbi_ = baifenbi.toFixed(2);
        var baifenbi_xuqiu = (baifenbi_*100+""+"%");
        $("._shouruxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
      }
    }
  }
  var income2_baifenbi = function(){
    for(var i=0;i<income2_Data.length;i++){
      if(income2_Data.length !==0){
        var  arr_length = income2_Data[0];
        var arr_no = [];
        for(var j in arr_length){
          // console.log(arr_length[j]);
          if(arr_length[j]==="0" || arr_length[j]==="")
            arr_no.push(arr_length[j])
          console.log(arr_no);
        }
        var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
        var Empty  = parseFloat(arr_no.length);
        var baifenbi = (zongshu-Empty-2)/(zongshu-2);
        var baifenbi_ = baifenbi.toFixed(2);
        var baifenbi_xuqiu = (baifenbi_*100+""+"%");
        $("._shouruxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
      }
    }
  }
  var income3_baifenbi = function(){
    for(var i=0;i<income3_Data.length;i++){
      if(income3_Data.length !==0){
        var  arr_length = income3_Data[0];
        var arr_no = [];
        for(var j in arr_length){
          // console.log(arr_length[j]);
          if(arr_length[j]==="0" || arr_length[j]==="")
            arr_no.push(arr_length[j])
          console.log(arr_no);
        }
        var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
        var Empty  = parseFloat(arr_no.length);
        var baifenbi = (zongshu-Empty-2)/(zongshu-2);
        var baifenbi_ = baifenbi.toFixed(2);
        var baifenbi_xuqiu = (baifenbi_*100+""+"%");
        $("._shouruxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
      }
    }
  }
  var income4_baifenbi = function(){
    for(var i=0;i<income4_Data.length;i++){
      if(income4_Data.length !==0){
        var  arr_length = income4_Data[0];
        var arr_no = [];
        for(var j in arr_length){
          // console.log(arr_length[j]);
          if(arr_length[j]==="0" || arr_length[j]==="")
            arr_no.push(arr_length[j])
          console.log(arr_no);
        }
        var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
        var Empty  = parseFloat(arr_no.length);
        var baifenbi = (zongshu-Empty-2)/(zongshu-2);
        var baifenbi_ = baifenbi.toFixed(2);
        var baifenbi_xuqiu = (baifenbi_*100+""+"%");
        $("._shouruxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
      }
    }
  }
  var income5_baifenbi = function(){
    for(var i=0;i<income5_Data.length;i++){
      if(income5_Data.length !==0){
        console.log(("有数据"));
        var  arr_length = income5_Data[0];
        var arr_no = [];
        for(var j in arr_length){
          // console.log(arr_length[j]);
          if(arr_length[j]==="0" || arr_length[j]==="")
            arr_no.push(arr_length[j])
          console.log(arr_no);
        }
        var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
        var Empty  = parseFloat(arr_no.length);
        var baifenbi = (zongshu-Empty-2)/(zongshu-2);
        var baifenbi_ = baifenbi.toFixed(2);
        var baifenbi_xuqiu = (baifenbi_*100+""+"%");
        $("._shouruxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
      }
    }
  }
  income1_baifenbi();
  $("#_gongzixinxi").on("click",function(){
    income1_baifenbi();
    if (income1_Data.length === 0){
      $("._shouruxinxi > ._Finish_rate > p").html("0%");
    }
    var str = "收入信息（工资）";
    var update = [];

    $("body ._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
    $("._remove").html("")

    var _add = '<div class="msg-icon icon06 income1-add" data-toggle="modal" data-target="#wagesModal"><img src="images/increased.png" alt="">添加</div>';

    $("body ._col_1").append(str);
    $("._add").append(_add);
    for( var i in income1_Data){
      var dataHtml = "";//？？？？？？
      var compile = "";
      var gzffxshi = '';//工资发放形式
      switch (income1_Data[i].gz_gzffxshi){
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
      if(income1_Data[i].update ){
        update = `<div class=" swiper-slide" data-id="${income1_Data[i].id}">${income1_Data[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: 4,//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0 //默认边距
        });
        if($(".swiper-slide").css("width","222px")){
          $(".swiper-slide").css("width","100px")
        }
      }

      dataHtml +=`<div class="needHtml">
        <div class="row _xuqiu_h">
            <div class="col-xs-4 text-right">工资发放形式</div><div class="col-xs-8 pl20">${gzffxshi}</div>
        </div>
        <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">工资金额</div><div class="col-xs-8 pl20">${income1_Data[i].gz_gzmoney}</div>
        </div>
      </div>`;
      compile = `<div class="income1_compole"><button class="edit btn-edit needHtml-compile" data-itemid="${income1_Data[i].id}" data-toggle="modal" data-target="#wagesModal"><img src="images/compile.png" alt="">编辑</button></div>`;
      $("._customer_data").append(dataHtml);
      $("._remove").append(compile);
      //$("._remove").hide();
      var compile_one = $("._remove").find(".income1_compole");
      $(compile_one[0]).show().siblings().hide()
      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".needHtml");
      $(_first[0]).show().siblings().hide();
      var bbb=$(this).parents("._shouru_btn_left").siblings("._customer_data").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      console.log($(this));
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()==="" || $(bbb[i]).find(".pl20").html() === "undefined"|| $(bbb[i]).find(".pl20").html() === "undefinedundefinedundefined"){
          $(bbb[i]).remove();
        }
      })
      var length8 = $(_first[0]).children("._xuqiu_h");//获取当前子元素
      var arrBox = [];
      for(var j = 0; j < length8.length; j+=8){//循环分组数据
        arrBox.push(length8.slice(j,j+8));
        $(".needHtml").append($("<div class='grouping'></div>"));

      }
      for(var k = 0; k < $(".grouping").length; k++){//遍历总div，在每个DIV追加元素
        $($(".grouping")[k]).html(arrBox[k]);
      }
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){//这里是按钮触发
        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){
          if($(arr[i]).find(".pl20").html() === "" || $(arr[i]).find(".pl20").html() === "undefined"){
            $(arr[i]).hide();
          }
        })
        for(var i in income1_Data){
          var arrBox_1 = [];
          if(income1_Data[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作
            var  arr_length = income1_Data[i];
            var arr_no = [];
            for(var j in arr_length){
              // console.log(arr_length[j]);
              if(arr_length[j]==="0"||arr_length[j]==="")
                arr_no.push(arr_length[j])
            }
            var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
            var Empty  = parseFloat(arr_no.length);
            var baifenbi = (zongshu-Empty-2)/(zongshu-2);
            var baifenbi_ = baifenbi.toFixed(2);
            var baifenbi_xuqiu = (baifenbi_*100+""+"%");
            $("._shouruxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
            $(this).addClass('_data').siblings().removeClass('_data');
            $("._customer_data").show();
            $("._remove").show();
            $('.needHtml:eq('+$(this).index()+')').show().siblings().hide();
            $('.income1_compole:eq('+$(this).index()+')').show().siblings().hide();
            var length8_1= $('.needHtml:eq('+$(this).index()+')').children("._xuqiu_h");//第二次点击没有这个子元素为_xuqiu_h的东西
            for(var j = 0; j < length8_1.length; j+=8){//循环分组数据
              arrBox_1.push(length8_1.slice(j,j+8));
              $(".needHtml").append($("<div class='grouping'></div>"));
            }
            var grouping = [];
            for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
              $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              var _grouping = $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              grouping.push(_grouping);
              var grouping_hide = $(grouping).find(".grouping");
              grouping_hide =grouping_hide.prevObject;
              for(var i = 0; i < grouping_hide.length; i++ ){
                if(grouping_hide[i].html()===""){
                  $(grouping_hide[i]).remove();
                }
              }
            }
          }
        }
      })
    }

  });

$("#_shehuibaoxian").on("click",function(){
    income2_baifenbi()
  if (income2_Data.length === 0){
    $("._shouruxinxi > ._Finish_rate > p").html("0%");
  }
    var str = "收入信息（社保）";
    var update = [];

    $("body ._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
    $("._remove").html("")

    var _add = '<div class="msg-icon icon06 income2-add" data-toggle="modal" data-target="#insuranceModal"><img src="images/increased.png" alt="">添加</div>';

    $("body ._col_1").append(str);
    $("._add").append(_add);
    for( var i in income2_Data){
      var dataHtml = "";//？？？？？？
      var compile = "";
      var gzffxshi = '';//工资发放形式
      var sbztai_text = '';//社保状态
      var sb_sbjnztai = '';//社保缴纳状态
      var sds_jnztai = '';//个税缴纳状态
      var gsztai_text = ''; //个税状态文字
      var gjjztai_text = ''; //公积金状态
      var gjj_gjjjnztai = '';//公积金缴纳状态
      var unshow, sb_sbjndwei;
      income2_Data[i].sb_sbjndwei==0?(sb_sbjndwei='',unshow='hide'):(income2_Data[i].sb_sbjndwei==1?(sb_sbjndwei='本公司',unshow='hide'):(sb_sbjndwei='第三方',unshow=''));//社保缴纳单位
      var sds_jndwei = '';//个税缴纳单位
      var gjj_gjjjndwei = '';//公积金缴纳单位


      switch (income2_Data[i].sb_sbjnztai){
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

      if(income2_Data[i].update ){
        update = `<div class=" swiper-slide" data-id="${income2_Data[i].id}">${income2_Data[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: 4,//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0 //默认边距
        });
        if($(".swiper-slide").css("width","222px")){
          $(".swiper-slide").css("width","100px")
        }
      }

      dataHtml +=`<div class="needHtml">
       <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">社保缴纳状态</div><div class="col-xs-5 pl20">${sb_sbjnztai}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">社保${sbztai_text}月份</div><div class="col-xs-5 pl20">${income2_Data[i].sb_sbxxyfen}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right"></div><div class="col-xs-2 pl20">公司</div><div class="col-xs-2 pl20">个人</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">养老基数</div><div class="col-xs-2 pl20">${income2_Data[i].sb_gs_yljs}元</div><div class="col-xs-2 pl20">${income2_Data[i].sb_gr_yljs}元</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">社保缴纳比例</div><div class="col-xs-2 pl20">${income2_Data[i].sb_gs_sbjnbli}%</div><div class="col-xs-2 pl20">${income2_Data[i].sb_gr_sbjnbli}%</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">社保缴纳金额</div><div class="col-xs-2 pl20">${income2_Data[i].sb_gs_sbjnmoney}元</div><div class="col-xs-2 pl20">${income2_Data[i].sb_gr_sbjnmoney}元</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">社保缴纳地</div><div class="col-xs-5 pl20">${income2_Data[i].sb_sbjndsheng}${income2_Data[i].sb_sbjndshi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">社保缴纳单位</div><div class="col-xs-5 pl20">${sb_sbjndwei}</div>
           </div>
           <div class="row _xuqiu_h ${unshow}">
            <div  class="col-xs-5 text-right">第三方公司名</div><div class="col-xs-5 pl20">${income2_Data[i].sb_dsfgsming}</div>
           </div>
      </div>`;
      compile = `<div class="income2_compole"><button class="edit btn-edit  needHtml-compile" data-itemid="${income2_Data[i].id}" data-toggle="modal" data-target="#insuranceModal"><img src="images/compile.png" alt="">编辑</button></div>`;
      $("._customer_data").append(dataHtml);
      $("._remove").append(compile);
      //$("._remove").hide();
      var compile_one = $("._remove").find(".income2_compole");
      $(compile_one[0]).show().siblings().hide()
      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".needHtml");
      $(_first[0]).show().siblings().hide();
      var bbb=$(this).parents("._shouru_btn_left").siblings("._customer_data").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()==="" || $(bbb[i]).find(".pl20").html() === "undefined"|| $(bbb[i]).find(".pl20").html() === "undefinedundefinedundefined"){
          $(bbb[i]).remove();
        }
      })
      var length8 = $(_first[0]).children("._xuqiu_h");//获取当前子元素
      var arrBox = [];
      for(var j = 0; j < length8.length; j+=8){//循环分组数据
        arrBox.push(length8.slice(j,j+8));
        $(".needHtml").append($("<div class='grouping'></div>"));

      }
      for(var k = 0; k < $(".grouping").length; k++){//遍历总div，在每个DIV追加元素
        $($(".grouping")[k]).html(arrBox[k]);
      }
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){//这里是按钮触发
        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){
          if($(arr[i]).find(".pl20").html() === "" || $(arr[i]).find(".pl20").html() === "undefined"){
            $(arr[i]).hide();
          }
        })
        for(var i in income2_Data){
          var arrBox_1 = [];
          if(income2_Data[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作
            var  arr_length = income2_Data[i];
            var arr_no = [];
            for(var j in arr_length){
              // console.log(arr_length[j]);
              if(arr_length[j]==="0"||arr_length[j]==="")
                arr_no.push(arr_length[j])
            }
            var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
            var Empty  = parseFloat(arr_no.length);
            var baifenbi = (zongshu-Empty-2)/(zongshu-2);
            var baifenbi_ = baifenbi.toFixed(2);
            var baifenbi_xuqiu = (baifenbi_*100+""+"%");
            $("._shouruxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
            $(this).addClass('_data').siblings().removeClass('_data');
            $("._customer_data").show();
            $("._remove").show();
            $('.needHtml:eq('+$(this).index()+')').show().siblings().hide();
            $('.income2_compole:eq('+$(this).index()+')').show().siblings().hide();
            var length8_1= $('.needHtml:eq('+$(this).index()+')').children("._xuqiu_h");//第二次点击没有这个子元素为_xuqiu_h的东西
            for(var j = 0; j < length8_1.length; j+=8){//循环分组数据
              arrBox_1.push(length8_1.slice(j,j+8));
              $(".needHtml").append($("<div class='grouping'></div>"));
            }
            var grouping = [];
            for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
              $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              var _grouping = $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              grouping.push(_grouping);
              var grouping_hide = $(grouping).find(".grouping");
              grouping_hide =grouping_hide.prevObject;
              for(var i = 0; i < grouping_hide.length; i++ ){
                if(grouping_hide[i].html()===""){
                  $(grouping_hide[i]).remove();
                }
              }
            }
          }
        }
      })
    }

  });
/*$("._shehuibaoxian").on("click",function(){
    var str = "收入信息";
    var update = [];
    $("body ._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
    $("._remove").html("")

    var _add = ' <div class="msg-icon icon06 chechan-add" data-toggle="modal" data-target="#insuranceModal"><img src="images/increased.png" alt="">添加</div>';
    //$("body ._col_1").append(str);
    $("._add").append(_add);
    for(i in income2_Data){
      var sbztai_text = '';//社保状态
      var sb_sbjnztai = '';//社保缴纳状态

      switch (income2_Data[i].sb_sbjnztai){
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
      if (income2_Data[i].sb_sbjndwei == 1) {
        sb_sbjndwei = '本公司';
      }else{
        sb_sbjndwei = '第三方';
      };
      if(income2_Data[i].update ){
        var dataHtml = "";
        var compile = "";
        update = `<div class=" swiper-slide" data-id="${income2_Data[i].id}">${income2_Data[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: 4,//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0 //默认边距
        });
        if($(".swiper-slide").css("width","222px")){
          $(".swiper-slide").css("width","100px")
        }
      }
      dataHtml +=`<div class="needHtml">
       <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">社保缴纳状态</div><div class="col-xs-5 pl20">${sb_sbjnztai}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">社保${sbztai_text}月份</div><div class="col-xs-5 pl20">${income2_Data[i].sb_sbxxyfen}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right"></div><div class="col-xs-2 pl20">公司</div><div class="col-xs-2 pl20">个人</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">养老基数</div><div class="col-xs-2 pl20">${income2_Data[i].sb_gs_yljs}</div><div class="col-xs-2 pl20">${income2_Data[i].sb_gr_yljs}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">社保缴纳比例</div><div class="col-xs-2 pl20">${income2_Data[i].sb_gs_sbjnbli}</div><div class="col-xs-2 pl20">${income2_Data[i].sb_gr_sbjnbli}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">社保缴纳金额</div><div class="col-xs-2 pl20">${income2_Data[i].sb_gs_sbjnmoney}</div><div class="col-xs-2 pl20">${income2_Data[i].sb_gr_sbjnmoney}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">社保缴纳地</div><div class="col-xs-5 pl20">${income2_Data[i].sb_sbjndsheng}${income2_Data[i].sb_sbjndshi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">社保缴纳单位</div><div class="col-xs-5 pl20">${sb_sbjndwei}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">第三方公司名</div><div class="col-xs-5 pl20">${income2_Data[i].sb_dsfgsming}</div>
           </div>
      </div>`;
      compile = `<div class="income2_compile"><button class="client-icon edit btn-edit  needHtml-compile" data-itemid="${income2_Data[i].id}" data-toggle="modal" data-target="#insuranceModal"><img src="images/compile.png" alt="">编辑</button></div>`;
      $("._customer_data").append(dataHtml);
      console.log($("._customer_data"));
      $("._remove").append(compile);
      //$("._remove").hide();
      var compile_one = $("._remove").find(".income2_compile");
      console.log(compile_one);
      $(compile_one[0]).show().siblings().hide();
      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".needHtml");
      $(_first[0]).show().siblings().hide();

      var bbb=$(this).parents("._nav_right").siblings("._client_information").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()==="" || $(bbb[i]).find(".pl20").html() === "undefined"){
          $(bbb[i]).remove();
        }
      })
      var length8 = $(_first[0]).children("._xuqiu_h");//获取当前子元素
      //console.log(length8);
      var arrBox = [];
      for(var j = 0; j < length8.length; j+=8){//循环分组数据
        arrBox.push(length8.slice(j,j+8));

        $(".needHtml").append($("<div class='grouping'></div>"));

      }
      //console.log(arrBox);//点解一开始就触发做三次
      for(var k = 0; k < $(".grouping").length; k++){//遍历总div，在每个DIV追加元素
        $($(".grouping")[k]).html(arrBox[k]);
        console.log($($(".grouping")[k]).html(arrBox[k]));
      }
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){//这里是按钮触发
        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){
          if($(arr[i]).find(".pl20").html() === "" || $(arr[i]).find(".pl20").html() === "undefined"){
            $(arr[i]).hide();
          }
        })
        for(var i in income2_Data){
          var arrBox_1 = [];
          if(income2_Data[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作
            $(this).addClass('_data').siblings().removeClass('_data');
            $("._customer_data").show();
            $("._remove").show();
            $('.needHtml:eq('+$(this).index()+')').show().siblings().hide();
            //console.log($('.needHtml-compile:eq(' + $(this).index() + ')'));
            $('.needHtml-compile:eq('+$(this).index()+')').show().siblings().hide();
            var length8_1= $('.needHtml:eq('+$(this).index()+')').children("._xuqiu_h");//第二次点击没有这个子元素为_xuqiu_h的东西
            // console.log(length8_1);
            for(var j = 0; j < length8_1.length; j+=8){//循环分组数据
              arrBox_1.push(length8_1.slice(j,j+8));
              $(".needHtml").append($("<div class='grouping'></div>"));
            }
            var grouping = [];
            for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
              $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              var _grouping = $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              grouping.push(_grouping);
              var grouping_hide = $(grouping).find(".grouping");
              grouping_hide =grouping_hide.prevObject;
              for(var i = 0; i < grouping_hide.length; i++ ){
                if(grouping_hide[i].html()===""){
                  $(grouping_hide[i]).remove();
                }
              }
            }
          }
        }
      })
    }
  });*/
$("#_gongjijin").on("click",function(){
    income3_baifenbi()
  if (income3_Data.length === 0){
    $("._shouruxinxi > ._Finish_rate > p").html("0%");
  }
    var str = "收入信息（公积金）";
    var update = [];

    $("body ._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
    $("._remove").html("")

    var _add = '<div class="msg-icon icon06 income3-add" data-toggle="modal" data-target="#demand"><img src="images/increased.png" alt="">添加</div>';

    $("body ._col_1").append(str);
    $("._add").append(_add);
    for( var i in income3_Data){
      var dataHtml = "";//？？？？？？
      var compile = "";
      var gjjztai_text = ''; //公积金状态
      var gjj_gjjjnztai = '';//公积金缴纳状态

      switch (income3_Data[i].gjj_gjjjnztai){
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
        var unshow, gjj_gjjjndwei;
        income3_Data[i].gjj_gjjjndwei==0?(gjj_gjjjndwei='',unshow='hide'):(income3_Data[i].gjj_gjjjndwei==1?(gjj_gjjjndwei='本公司',unshow='hide'):(gjj_gjjjndwei='第三方',unshow=''));
      /*if (income3_Data[i].gjj_gjjjndwei == 1) {
        gjj_gjjjndwei = '本公司';
      }else{
        gjj_gjjjndwei = '第三方';
      };*/
      if(income3_Data[i].update ){
        update = `<div class=" swiper-slide" data-id="${income3_Data[i].id}">${income3_Data[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: 4,//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0 //默认边距
        });
        if($(".swiper-slide").css("width","222px")){
          $(".swiper-slide").css("width","100px")
        }
      }

      dataHtml +=`<div class="needHtml">
       <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">公积金缴纳状态</div><div class="col-xs-5 pl20">${gjj_gjjjnztai}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">公积金${gjjztai_text}月份</div><div class="col-xs-5 pl20">${income3_Data[i].gjj_gjjxxyfen}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right"></div><div class="col-xs-2 pl20">公司</div><div class="col-xs-2 pl20">个人</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">公积金基数</div><div class="col-xs-2 pl20">${income3_Data[i].gjj_gs_gjjjs}元</div><div class="col-xs-2 pl20">${income3_Data[i].gjj_gr_gjjjs}元</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">公积金缴纳比例</div><div class="col-xs-2 pl20">${income3_Data[i].gjj_gs_gjjjnbli}%</div><div class="col-xs-2 pl20">${income3_Data[i].gjj_gr_gjjjnbli}%</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">公积金缴纳金额</div><div class="col-xs-2 pl20">${income3_Data[i].gjj_gs_gjjjnmoney}元</div><div class="col-xs-2 pl20">${income3_Data[i].gjj_gr_gjjjnmoney}元</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">公积金缴纳地</div><div class="col-xs-5 pl20">${income3_Data[i].gjj_gjjjndsheng}${income3_Data[i].gjj_gjjjndshi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">公积金缴纳单位</div><div class="col-xs-5 pl20">${gjj_gjjjndwei}</div>
           </div>
           <div class="row _xuqiu_h ${unshow}">
            <div  class="col-xs-5 text-right">第三方公司名</div><div class="col-xs-5 pl20">${income3_Data[i].gjj_dsfgsming}</div>
           </div>
           <div class="row _xuqiu_h">
      </div>`;
      compile = `<div class="income3_compole"><button class="edit btn-edit  needHtml-compile" data-itemid="${income3_Data[i].id}" data-toggle="modal" data-target="#demand"><img src="images/compile.png" alt="">编辑</button></div>`;
      $("._customer_data").append(dataHtml);
      $("._remove").append(compile);
      //$("._remove").hide();
      var compile_one = $("._remove").find(".income3_compole");
      $(compile_one[0]).show().siblings().hide()
      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".needHtml");
      $(_first[0]).show().siblings().hide();
      var bbb=$(this).parents("._shouru_btn_left").siblings("._customer_data").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()==="" || $(bbb[i]).find(".pl20").html() === "undefined"|| $(bbb[i]).find(".pl20").html() === "undefinedundefinedundefined"){
          $(bbb[i]).remove();
        }
      })
      var length8 = $(_first[0]).children("._xuqiu_h");//获取当前子元素
      var arrBox = [];
      for(var j = 0; j < length8.length; j+=8){//循环分组数据
        arrBox.push(length8.slice(j,j+8));
        $(".needHtml").append($("<div class='grouping'></div>"));

      }
      for(var k = 0; k < $(".grouping").length; k++){//遍历总div，在每个DIV追加元素
        $($(".grouping")[k]).html(arrBox[k]);
      }
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){//这里是按钮触发
        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){
          if($(arr[i]).find(".pl20").html() === "" || $(arr[i]).find(".pl20").html() === "undefined"){
            $(arr[i]).hide();
          }
        })
        for(var i in income3_Data){
          var arrBox_1 = [];
          if(income3_Data[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作
            var  arr_length = income3_Data[i];
            var arr_no = [];
            for(var j in arr_length){
              // console.log(arr_length[j]);
              if(arr_length[j]==="0"||arr_length[j]==="")
                arr_no.push(arr_length[j])
            }
            var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
            var Empty  = parseFloat(arr_no.length);
            var baifenbi = (zongshu-Empty-2)/(zongshu-2);
            var baifenbi_ = baifenbi.toFixed(2);
            var baifenbi_xuqiu = (baifenbi_*100+""+"%");
            $("._shouruxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
            $(this).addClass('_data').siblings().removeClass('_data');
            $("._customer_data").show();
            $("._remove").show();
            $('.needHtml:eq('+$(this).index()+')').show().siblings().hide();
            $('.income3_compole:eq('+$(this).index()+')').show().siblings().hide();
            var length8_1= $('.needHtml:eq('+$(this).index()+')').children("._xuqiu_h");//第二次点击没有这个子元素为_xuqiu_h的东西
            for(var j = 0; j < length8_1.length; j+=8){//循环分组数据
              arrBox_1.push(length8_1.slice(j,j+8));
              $(".needHtml").append($("<div class='grouping'></div>"));
            }
            var grouping = [];
            for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
              $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              var _grouping = $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              grouping.push(_grouping);
              var grouping_hide = $(grouping).find(".grouping");
              grouping_hide =grouping_hide.prevObject;
              for(var i = 0; i < grouping_hide.length; i++ ){
                if(grouping_hide[i].html()===""){
                  $(grouping_hide[i]).remove();
                }
              }
            }
          }
        }
      })
    }

  });
/*$("._gongjijin").on("click",function(){
    var str = "收入信息";
    var update = [];
    $("body ._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
    $("._remove").html("")

    var _add = ' <div class="msg-icon icon06 chechan-add" data-toggle="modal" data-target="#demand"><img src="images/increased.png" alt="">添加</div>';
    //$("body ._col_1").append(str);
    $("._add").append(_add);
    for(i in income3_Data){
      var gjjztai_text = ''; //公积金状态
      var gjj_gjjjnztai = '';//公积金缴纳状态

      switch (income3_Data[i].gjj_gjjjnztai){
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
      if (income3_Data[i].gjj_gjjjndwei == 1) {
        gjj_gjjjndwei = '本公司';
      }else{
        gjj_gjjjndwei = '第三方';
      };
      if(income3_Data[i].update ){
        var dataHtml = "";
        var compile = "";
        update = `<div class=" swiper-slide" data-id="${income3_Data[i].id}">${income3_Data[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: 4,//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0 //默认边距
        });
        if($(".swiper-slide").css("width","222px")){
          $(".swiper-slide").css("width","100px")
        }
      }
      dataHtml +=`<div class="needHtml">
       <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">公积金缴纳状态</div><div class="col-xs-5 pl20">${gjj_gjjjnztai}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">公积金${gjjztai_text}月份</div><div class="col-xs-5 pl20">${income3_Data[i].gjj_gjjxxyfen}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right"></div><div class="col-xs-2 pl20">公司</div><div class="col-xs-2 pl20">个人</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">公积金基数</div><div class="col-xs-2 pl20">${income3_Data[i].gjj_gs_gjjjs}</div><div class="col-xs-2 pl20">${income3_Data[i].gjj_gr_gjjjs}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">公积金缴纳比例</div><div class="col-xs-2 pl20">${income3_Data[i].gjj_gs_gjjjnbli}</div><div class="col-xs-2 pl20">${income3_Data[i].gjj_gr_gjjjnbli}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">公积金缴纳金额</div><div class="col-xs-2 pl20">${income3_Data[i].gjj_gs_gjjjnmoney}</div><div class="col-xs-2 pl20">${income3_Data[i].gjj_gr_gjjjnmoney}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">公积金缴纳地</div><div class="col-xs-5 pl20">${income3_Data[i].gjj_gjjjndsheng}${income3_Data[i].gjj_gjjjndshi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">公积金缴纳单位</div><div class="col-xs-5 pl20">${gjj_gjjjndwei}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right unshow">第三方公司名</div><div class="col-xs-5 pl20">${income3_Data[i].gjj_dsfgsming}</div>
           </div>
           <div class="row _xuqiu_h">
      </div>`;
      compile = `<div class="income3_compile"><button class="client-icon edit btn-edit  needHtml-compile" data-itemid="${income3_Data[i].id}" data-toggle="modal" data-target="#needModal"><img src="images/compile.png" alt="">编辑</button></div>`;
      $("._customer_data").append(dataHtml);
      console.log($("._customer_data"));
      $("._remove").append(compile);
      //$("._remove").hide();
      var compile_one = $("._remove").find(".income3_compile");
      $(compile_one[0]).show().siblings().hide()
      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".needHtml");
      $(_first[0]).show().siblings().hide();

      var bbb=$(this).parents("._nav_right").siblings("._client_information").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()==="" || $(bbb[i]).find(".pl20").html() === "undefined"){
          $(bbb[i]).remove();
        }
      })
      var length8 = $(_first[0]).children("._xuqiu_h");//获取当前子元素
      //console.log(length8);
      var arrBox = [];
      for(var j = 0; j < length8.length; j+=8){//循环分组数据
        arrBox.push(length8.slice(j,j+8));

        $(".needHtml").append($("<div class='grouping'></div>"));

      }
      //console.log(arrBox);//点解一开始就触发做三次
      for(var k = 0; k < $(".grouping").length; k++){//遍历总div，在每个DIV追加元素
        $($(".grouping")[k]).html(arrBox[k]);
        console.log($($(".grouping")[k]).html(arrBox[k]));
      }
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){//这里是按钮触发
        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){
          if($(arr[i]).find(".pl20").html() === "" || $(arr[i]).find(".pl20").html() === "undefined"){
            $(arr[i]).hide();
          }
        })
        for(var i in income3_Data){
          var arrBox_1 = [];
          if(income3_Data[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作
            $(this).addClass('_data').siblings().removeClass('_data');
            $("._customer_data").show();
            $("._remove").show();
            $('.needHtml:eq('+$(this).index()+')').show().siblings().hide();
            //console.log($('.needHtml-compile:eq(' + $(this).index() + ')'));
            $('.needHtml-compile:eq('+$(this).index()+')').show().siblings().hide();
            var length8_1= $('.needHtml:eq('+$(this).index()+')').children("._xuqiu_h");//第二次点击没有这个子元素为_xuqiu_h的东西
            // console.log(length8_1);
            for(var j = 0; j < length8_1.length; j+=8){//循环分组数据
              arrBox_1.push(length8_1.slice(j,j+8));
              $(".needHtml").append($("<div class='grouping'></div>"));
            }
            var grouping = [];
            for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
              $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              var _grouping = $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              grouping.push(_grouping);
              var grouping_hide = $(grouping).find(".grouping");
              grouping_hide =grouping_hide.prevObject;
              for(var i = 0; i < grouping_hide.length; i++ ){
                if(grouping_hide[i].html()===""){
                  $(grouping_hide[i]).remove();
                }
              }
            }
          }
        }
      })
    }
  });*/
$("#_gerensuodesui").on("click",function(){
  income4_baifenbi()
  if (income4_Data.length === 0){
    $("._shouruxinxi > ._Finish_rate > p").html("0%");
  }
  var str = "收入信息（个税）";
    var update = [];

    $("body ._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
    $("._remove").html("")

    var _add = '<div class="msg-icon icon06 income4-add" data-toggle="modal" data-target="#taxModal"><img src="images/increased.png" alt="">添加</div>';
    $("body ._col_1").append(str);
    $("._add").append(_add);
    for( var i in income4_Data){
      var gzffxshi = '';//工资发放形式
      var sbztai_text = '';//社保状态
      var sb_sbjnztai = '';//社保缴纳状态
      var sds_jnztai = '';//个税缴纳状态
      var gsztai_text = ''; //个税状态文字
      var gjjztai_text = ''; //公积金状态
      var gjj_gjjjnztai = '';//公积金缴纳状态
      var sb_sbjndwei = '';//社保缴纳单位
      var unshow, sds_jndwei;
      income4_Data[i].sds_jndwei==0?(sds_jndwei='',unshow='hide'):(income4_Data[i].sds_jndwei==1?(sds_jndwei='本公司',unshow='hide'):(sds_jndwei='第三方',unshow=''));
      //var sds_jndwei = income4_Data[i].sds_jndwei==1?'本公司':'第三方';//个税缴纳单位
      var gjj_gjjjndwei = '';//公积金缴纳单位
      //var unshow = '';
      var dataHtml = "";//？？？？？？
      var compile = "";
      switch (income4_Data[i].gjj_gjjjnztai){
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
      if (income4_Data[i].gjj_gjjjndwei == 1) {
        gjj_gjjjndwei = '本公司';
      }else{
        gjj_gjjjndwei = '第三方';
      };
      if(income4_Data[i].update ){
        update = `<div class=" swiper-slide" data-id="${income4_Data[i].id}">${income4_Data[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: 4,//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0 //默认边距
        });
        if($(".swiper-slide").css("width","222px")){
          $(".swiper-slide").css("width","100px")
        }
      }

      dataHtml +=`<div class="needHtml">
       <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">个税缴纳状态</div><div class="col-xs-5 pl20">${sds_jnztai}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">个税${gsztai_text}月份</div><div class="col-xs-5 pl20">${income4_Data[i].sds_xxyfen}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">税前工资</div><div class="col-xs-5 pl20">${income4_Data[i].sds_sqgzi}元</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">个税金额</div><div class="col-xs-5 pl20">${income4_Data[i].sds_gsmoney}元</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">个税缴纳地</div><div class="col-xs-5 pl20">${income4_Data[i].sds_jndsheng}${income4_Data[i].sds_jndshi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">个税缴纳单位</div><div class="col-xs-5 pl20">${sds_jndwei}</div>
           </div>
           <div class="row _xuqiu_h ${unshow}">
            <div  class="col-xs-5 text-right">第三方公司名</div><div class="col-xs-5 pl20">${income4_Data[i].sds_dsfgsming}</div>
           </div>
      </div>`;
      compile = `<div class="income4_compole"><button class="edit btn-edit  needHtml-compile" data-itemid="${income4_Data[i].id}" data-toggle="modal" data-target="#taxModal"><img src="images/compile.png" alt="">编辑</button></div>`;
      $("._customer_data").append(dataHtml);
      $("._remove").append(compile);
      //$("._remove").hide();
      var compile_one = $("._remove").find(".income4_compole");
      $(compile_one[0]).show().siblings().hide()
      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".needHtml");
      $(_first[0]).show().siblings().hide();
      var bbb=$(this).parents("._shouru_btn_left").siblings("._customer_data").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()==="" || $(bbb[i]).find(".pl20").html() === "undefined"|| $(bbb[i]).find(".pl20").html() === "undefinedundefinedundefined"){
          $(bbb[i]).remove();
        }
      })
      var length8 = $(_first[0]).children("._xuqiu_h");//获取当前子元素
      var arrBox = [];
      for(var j = 0; j < length8.length; j+=8){//循环分组数据
        arrBox.push(length8.slice(j,j+8));
        $(".needHtml").append($("<div class='grouping'></div>"));

      }
      for(var k = 0; k < $(".grouping").length; k++){//遍历总div，在每个DIV追加元素
        $($(".grouping")[k]).html(arrBox[k]);
      }
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){//这里是按钮触发
        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){
          if($(arr[i]).find(".pl20").html() === "" || $(arr[i]).find(".pl20").html() === "undefined"){
            $(arr[i]).hide();
          }
        })
        for(var i in income4_Data){
          var arrBox_1 = [];
          if(income4_Data[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作
            var  arr_length = income4_Data[i];
            var arr_no = [];
            for(var j in arr_length){
              // console.log(arr_length[j]);
              if(arr_length[j]==="0"||arr_length[j]==="")
                arr_no.push(arr_length[j])
            }
            var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
            var Empty  = parseFloat(arr_no.length);
            var baifenbi = (zongshu-Empty-2)/(zongshu-2);
            var baifenbi_ = baifenbi.toFixed(2);
            var baifenbi_xuqiu = (baifenbi_*100+""+"%");
            $("._shouruxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
            $(this).addClass('_data').siblings().removeClass('_data');
            $("._customer_data").show();
            $("._remove").show();
            $('.needHtml:eq('+$(this).index()+')').show().siblings().hide();
            $('.income4_compole:eq('+$(this).index()+')').show().siblings().hide();
            var length8_1= $('.needHtml:eq('+$(this).index()+')').children("._xuqiu_h");//第二次点击没有这个子元素为_xuqiu_h的东西
            for(var j = 0; j < length8_1.length; j+=8){//循环分组数据
              arrBox_1.push(length8_1.slice(j,j+8));
              $(".needHtml").append($("<div class='grouping'></div>"));
            }
            var grouping = [];
            for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
              $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              var _grouping = $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              grouping.push(_grouping);
              var grouping_hide = $(grouping).find(".grouping");
              grouping_hide =grouping_hide.prevObject;
              for(var i = 0; i < grouping_hide.length; i++ ){
                if(grouping_hide[i].html()===""){
                  $(grouping_hide[i]).remove();
                }
              }
            }
          }
        }
      })
    }

  });
/*$("._gerensuodesui").on("click",function(){
    var str = "收入信息";
    var update = [];
    $("body ._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
    $("._remove").html("")

    var _add = ' <div class="msg-icon icon06 chechan-add" data-toggle="modal" data-target="#taxModal"><img src="images/increased.png" alt="">添加</div>';
    //$("body ._col_1").append(str);
    $("._add").append(_add);
    for(i in income4_Data){
      console.log(income4_Data[i]);
      var sds_jnztai = '';//个税缴纳状态
      var sds_jndwei = '';//个税缴纳单位

      switch (income4_Data[i].gjj_gjjjnztai){
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
      if (income4_Data[i].gjj_gjjjndwei == 1) {
        gjj_gjjjndwei = '本公司';
      }else{
        gjj_gjjjndwei = '第三方';
      };
      if(income4_Data[i].update ){
        var dataHtml = "";
        var compile = "";
        update = `<div class=" swiper-slide" data-id="${income4_Data[i].id}">${income4_Data[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: 4,//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0 //默认边距
        });
        if($(".swiper-slide").css("width","222px")){
          $(".swiper-slide").css("width","100px")
        }
      }
      console.log(income4_Data[i].gjj_gjjxxyfen);
      dataHtml +=`<div class="needHtml">
       <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">个税缴纳状态</div><div class="col-xs-5 pl20">${sds_jnztai}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">个税${gsztai_text}月份</div><div class="col-xs-5 pl20">${income4_Data[i].sds_xxyfen}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">税前工资</div><div class="col-xs-5 pl20">${income4_Data[i].sds_sqgzi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">个税金额</div><div class="col-xs-5 pl20">${income4_Data[i].sds_gsmoney}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">个税缴纳地</div><div class="col-xs-5 pl20">${income4_Data[i].sds_jndsheng}${income4_Data[i].sds_jndshi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">个税缴纳单位</div><div class="col-xs-5 pl20">${sds_jndwei}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">第三方公司名</div><div class="col-xs-5 pl20">${income4_Data[i].sds_dsfgsming}</div>
           </div>
      </div>`;
      compile = `<div class="income4_compile"><button class="client-icon edit btn-edit  needHtml-compile" data-itemid="${income4_Data[i].id}" data-toggle="modal" data-target="#needModal"><img src="images/compile.png" alt="">编辑</button></div>`;
      $("._customer_data").append(dataHtml);
      console.log($("._customer_data"));
      $("._remove").append(compile);
      //$("._remove").hide();
      var compile_one = $("._remove").find(".income4_compile");
      $(compile_one[0]).show().siblings().hide()
      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".needHtml");
      $(_first[0]).show().siblings().hide();

      var bbb=$(this).parents("._nav_right").siblings("._client_information").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()==="" || $(bbb[i]).find(".pl20").html() === "undefined"){
          $(bbb[i]).remove();
        }
      })
      var length8 = $(_first[0]).children("._xuqiu_h");//获取当前子元素
      //console.log(length8);
      var arrBox = [];
      for(var j = 0; j < length8.length; j+=8){//循环分组数据
        arrBox.push(length8.slice(j,j+8));

        $(".needHtml").append($("<div class='grouping'></div>"));

      }
      //console.log(arrBox);//点解一开始就触发做三次
      for(var k = 0; k < $(".grouping").length; k++){//遍历总div，在每个DIV追加元素
        $($(".grouping")[k]).html(arrBox[k]);
        console.log($($(".grouping")[k]).html(arrBox[k]));
      }
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){//这里是按钮触发
        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){
          if($(arr[i]).find(".pl20").html() === "" || $(arr[i]).find(".pl20").html() === "undefined"){
            $(arr[i]).hide();
          }
        })
        for(var i in income4_Data){
          var arrBox_1 = [];
          if(income4_Data[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作
            $(this).addClass('_data').siblings().removeClass('_data');
            $("._customer_data").show();
            $("._remove").show();
            $('.needHtml:eq('+$(this).index()+')').show().siblings().hide();
            //console.log($('.needHtml-compile:eq(' + $(this).index() + ')'));
            $('.needHtml-compile:eq('+$(this).index()+')').show().siblings().hide();
            var length8_1= $('.needHtml:eq('+$(this).index()+')').children("._xuqiu_h");//第二次点击没有这个子元素为_xuqiu_h的东西
            // console.log(length8_1);
            for(var j = 0; j < length8_1.length; j+=8){//循环分组数据
              arrBox_1.push(length8_1.slice(j,j+8));
              $(".needHtml").append($("<div class='grouping'></div>"));
            }
            var grouping = [];
            for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
              $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              var _grouping = $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              grouping.push(_grouping);
              var grouping_hide = $(grouping).find(".grouping");
              grouping_hide =grouping_hide.prevObject;
              for(var i = 0; i < grouping_hide.length; i++ ){
                if(grouping_hide[i].html()===""){
                  $(grouping_hide[i]).remove();
                }
              }
            }
          }
        }
      })
    }
  });*/
$("#_liushuixinxi").on("click",function(){
  income5_baifenbi();
  if (income5_Data.length === 0){
    $("._shouruxinxi > ._Finish_rate > p").html("0%");
  }
  var str = "收入信息（流水)";
    var update = [];

    $("body ._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
    $("._remove").html("")

  var _add = ' <div class="msg-icon icon06 income5-add" data-toggle="modal" data-target="#flowModal"><img src="images/increased.png" alt="">添加</div>';

    $("body ._col_1").append(str);
    $("._add").append(_add);
    for( var i in income5_Data){
      var dataHtml = "";//？？？？？？
      var compile = "";
      var sds_jnztai = '';//个税缴纳状态
      var sds_jndwei = '';//个税缴纳单位
      console.log(income5_Data);
      switch (income5_Data[i].gjj_gjjjnztai){
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
      if(income5_Data[i].update ){
        update = `<div class=" swiper-slide" data-id="${income5_Data[i].id}">${income5_Data[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: 4,//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0 //默认边距
        });
        if($(".swiper-slide").css("width","222px")){
          $(".swiper-slide").css("width","100px")
        }
      }
      var gzshow ='', kpshow='' , szshow='', posshow ='';
      if(income5_Data[i].ls_gz_yjlshui==0){
          gzshow = 'hide'
      }
        if(income5_Data[i].ls_kp_yjlshui==0){
            kpshow = 'hide'
        }
        if(income5_Data[i].ls_sz_yjlshui==0){
            szshow = 'hide'
        }
        if(income5_Data[i].ls_pos_yjlshui==0){
           posshow = 'hide'
        }

      dataHtml +=`<div class="needHtml">
       <div class="row _xuqiu_h ${gzshow}">
            <div  class="col-xs-4 text-right">公帐月均流水</div><div class="col-xs-8 pl20">${income5_Data[i].ls_gz_yjlshui} 万元／月</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">结息</div><div class="col-xs-4 pl20">${income5_Data[i].ls_gz_jxdate1}</div><div class="col-xs-1.5 pl20">${income5_Data[i].ls_gz_jxmoney1}元</div>
           </div>
           <div class="row _xuqiu_h ${kpshow}">
            <div  class="col-xs-4 text-right">开票月均流水</div><div class="col-xs-8 pl20">${income5_Data[i].ls_kp_yjlshui} 万元／月</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">结息</div><div class="col-xs-4 pl20">${income5_Data[i].ls_kp_jxdate1}</div><div class="col-xs-1.5 pl20">${income5_Data[i].ls_kp_jxmoney1}元</div>
           </div>
           <div class="row _xuqiu_h ${szshow}">
            <div  class="col-xs-4 text-right">私帐月均流水</div><div class="col-xs-8 pl20">${income5_Data[i].ls_sz_yjlshui} 万元／月</div>
           </div>
            <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">结息</div><div class="col-xs-4 pl20">${income5_Data[i].ls_sz_jxdate1}</div><div class="col-xs-1.5 pl20">${income5_Data[i].ls_sz_jxmoney1}元</div>
           </div>
            <div class="row _xuqiu_h ${posshow} ">
            <div  class="col-xs-4 text-right">POS机月均流水</div><div class="col-xs-6 pl20">${income5_Data[i].ls_pos_yjlshui} 万元／月</div>
           </div>
      </div>`;
      compile = `<div class="income5_compole"><button class="edit btn-edit  needHtml-compile" data-itemid="${income5_Data[i].id}" data-toggle="modal" data-target="#flowModal"><img src="images/compile.png" alt="">编辑</button></div>`;
      $("._customer_data").append(dataHtml);
      $("._remove").append(compile);
      //$("._remove").hide();
      var compile_one = $("._remove").find(".income5_compole");
      $(compile_one[0]).show().siblings().hide()
      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".needHtml");
      $(_first[0]).show().siblings().hide();
      var bbb=$(this).parents("._shouru_btn_left").siblings("._customer_data").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()==="" || $(bbb[i]).find(".pl20").html() === "undefined"|| $(bbb[i]).find(".pl20").html() === "undefinedundefinedundefined"){
          $(bbb[i]).remove();
        }
      })
      var length8 = $(_first[0]).children("._xuqiu_h");//获取当前子元素
      var arrBox = [];
      for(var j = 0; j < length8.length; j+=8){//循环分组数据
        arrBox.push(length8.slice(j,j+8));
        $(".needHtml").append($("<div class='grouping'></div>"));

      }
      for(var k = 0; k < $(".grouping").length; k++){//遍历总div，在每个DIV追加元素
        $($(".grouping")[k]).html(arrBox[k]);
      }
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){//这里是按钮触发
        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){
          if($(arr[i]).find(".pl20").html() === "" || $(arr[i]).find(".pl20").html() === "undefined"){
            $(arr[i]).hide();
          }
        })
        for(var i in income5_Data){
          var arrBox_1 = [];
          if(income5_Data[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作
            var  arr_length = income5_Data[i];
            var arr_no = [];
            for(var j in arr_length){
              // console.log(arr_length[j]);
              if(arr_length[j]==="0"||arr_length[j]==="")
                arr_no.push(arr_length[j])
            }
            var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
            var Empty  = parseFloat(arr_no.length);
            var baifenbi = (zongshu-Empty-2)/(zongshu-2);
            var baifenbi_ = baifenbi.toFixed(2);
            var baifenbi_xuqiu = (baifenbi_*100+""+"%");
            $("._shouruxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
            $(this).addClass('_data').siblings().removeClass('_data');
            $("._customer_data").show();
            $("._remove").show();
            $('.needHtml:eq('+$(this).index()+')').show().siblings().hide();
            $('.income5_compole:eq('+$(this).index()+')').show().siblings().hide();
            var length8_1= $('.needHtml:eq('+$(this).index()+')').children("._xuqiu_h");//第二次点击没有这个子元素为_xuqiu_h的东西
            for(var j = 0; j < length8_1.length; j+=8){//循环分组数据
              arrBox_1.push(length8_1.slice(j,j+8));
              $(".needHtml").append($("<div class='grouping'></div>"));
            }
            var grouping = [];
            for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
              $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              var _grouping = $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              grouping.push(_grouping);
              var grouping_hide = $(grouping).find(".grouping");
              grouping_hide =grouping_hide.prevObject;
              for(var i = 0; i < grouping_hide.length; i++ ){
                if(grouping_hide[i].html()===""){
                  $(grouping_hide[i]).remove();
                }
              }
            }
          }
        }
      })
    }

  });
/*$("._liushuixinxi").on("click",function(){
    var str = "收入信息";
    var update = [];
    $("body ._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
    $("._remove").html("")

    var _add = ' <div class="msg-icon icon06 chechan-add" data-toggle="modal" data-target="#flowModal"><img src="images/increased.png" alt="">添加</div>';
    //$("body ._col_1").append(str);
    $("._add").append(_add);
    for(i in income5_Data){
      //console.log(income4_Data[i]);
      var sds_jnztai = '';//个税缴纳状态
      var sds_jndwei = '';//个税缴纳单位

      switch (income5_Data[i].gjj_gjjjnztai){
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
      if (income5_Data[i].gjj_gjjjndwei == 1) {
        gjj_gjjjndwei = '本公司';
      }else{
        gjj_gjjjndwei = '第三方';
      };
      if(income5_Data[i].update ){
        var dataHtml = "";
        var compile = "";
        update = `<div class=" swiper-slide" data-id="${income5_Data[i].id}">${income5_Data[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: 4,//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0 //默认边距
        });
        if($(".swiper-slide").css("width","222px")){
          $(".swiper-slide").css("width","100px")
        }
      }
      console.log(income5_Data[i].gjj_gjjxxyfen);
      dataHtml +=`<div class="needHtml">
       <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">公帐月均流水</div><div class="col-xs-8 pl20">${income5_Data[i].ls_gz_yjlshui} 万元／月</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">结息</div><div class="col-xs-6 pl20">${income5_Data[i].ls_gz_jxdate1} / ${income5_Data[i].ls_gz_jxdate2}</div><div class="col-xs-1.5 pl20">${income5_Data[i].ls_gz_jxmoney1}元</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">开票月均流水</div><div class="col-xs-8 pl20">${income5_Data[i].ls_kp_yjlshui} 万元／月</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">结息</div><div class="col-xs-6 pl20">${income5_Data[i].ls_kp_jxdate1} / ${income5_Data[i].ls_kp_jxdate2}</div><div class="col-xs-1.5 pl20">${income5_Data[i].ls_kp_jxmoney1}元</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">私帐月均流水</div><div class="col-xs-8 pl20">${income5_Data[i].ls_sz_yjlshui} 万元／月</div>
           </div>
            <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">结息</div><div class="col-xs-6 pl20">${income5_Data[i].ls_sz_jxdate1} / ${income5_Data[i].ls_sz_jxdate2}</div><div class="col-xs-1.5 pl20">${income5_Data[i].ls_sz_jxmoney1}元</div>
           </div>
            <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">POS机月均流水</div><div class="col-xs-6 pl20">${income5_Data[i].ls_pos_yjlshui} 万元／月</div>
           </div>
      </div>`;
      compile = `<div class="income5_comile"><button class="client-icon edit btn-edit  needHtml-compile" data-itemid="${income5_Data[i].id}" data-toggle="modal" data-target="#needModal"><img src="images/compile.png" alt="">编辑</button></div>`;
      $("._customer_data").append(dataHtml);
      console.log($("._customer_data"));
      $("._remove").append(compile);
      //$("._remove").hide();
      var compile_one = $("._remove").find(".income5_comile");
      $(compile_one[0]).show().siblings().hide()
      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".needHtml");
      $(_first[0]).show().siblings().hide();

      var bbb=$(this).parents("._nav_right").siblings("._client_information").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()==="" || $(bbb[i]).find(".pl20").html() === "undefined"){
          $(bbb[i]).remove();
        }
      })
      var length8 = $(_first[0]).children("._xuqiu_h");//获取当前子元素
      //console.log(length8);
      var arrBox = [];
      for(var j = 0; j < length8.length; j+=8){//循环分组数据
        arrBox.push(length8.slice(j,j+8));

        $(".needHtml").append($("<div class='grouping'></div>"));

      }
      //console.log(arrBox);//点解一开始就触发做三次
      for(var k = 0; k < $(".grouping").length; k++){//遍历总div，在每个DIV追加元素
        $($(".grouping")[k]).html(arrBox[k]);
        console.log($($(".grouping")[k]).html(arrBox[k]));
      }
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){//这里是按钮触发
        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){
          if($(arr[i]).find(".pl20").html() === "" || $(arr[i]).find(".pl20").html() === "undefined"){
            $(arr[i]).hide();
          }
        })
        for(var i in income5_Data){
          var arrBox_1 = [];
          if(income5_Data[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作
            $(this).addClass('_data').siblings().removeClass('_data');
            $("._customer_data").show();
            $("._remove").show();
            $('.needHtml:eq('+$(this).index()+')').show().siblings().hide();
            //console.log($('.needHtml-compile:eq(' + $(this).index() + ')'));
            $('.needHtml-compile:eq('+$(this).index()+')').show().siblings().hide();
            var length8_1= $('.needHtml:eq('+$(this).index()+')').children("._xuqiu_h");//第二次点击没有这个子元素为_xuqiu_h的东西
            // console.log(length8_1);
            for(var j = 0; j < length8_1.length; j+=8){//循环分组数据
              arrBox_1.push(length8_1.slice(j,j+8));
              $(".needHtml").append($("<div class='grouping'></div>"));
            }
            var grouping = [];
            for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
              $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              var _grouping = $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              grouping.push(_grouping);
              var grouping_hide = $(grouping).find(".grouping");
              grouping_hide =grouping_hide.prevObject;
              for(var i = 0; i < grouping_hide.length; i++ ){
                if(grouping_hide[i].html()===""){
                  $(grouping_hide[i]).remove();
                }
              }
            }
          }
        }
      })
    }
  });*/
if(income1_Data.length === 0 && income2_Data.length === 0 && income3_Data.length === 0 && income4_Data.length === 0 && income5_Data.length === 0){
    $("._shouruxinxi").css("background-position","-41px -86px");
  }
if(income5_Data.length === 0){$("._liushuixinxi").css("background-position","-52px -174px")}
if(income4_Data.length === 0){$("._gerensuodesui").css("background-position","-52px -130px")}
if(income3_Data.length === 0){$("._gongjijin").css("background-position","-52px -90px")}
if(income2_Data.length === 0){$("._shehuibaoxian").css("background-position","-52px -48px")}
if(income1_Data.length === 0){$("._gongzixinxi").css("background-position","-52px -6px")}
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
/*for(i in houseData){
    var fwlxing1 = houseTypeArr01[houseData[i].fwlxing1 - 1];//房产类型1
    var fwlxing2 = houseTypeArr02[houseData[i].fwlxing2 - 1];//房产类型2
    var fwlxing3 = houseTypeArr03[houseData[i].fwlxing3 - 1];//房产类型3
    var fwsyquan = '';//房屋所有权1
    var fwsyquan2 = '';//房屋所有权2
    var fwsyquan3 = publicHasArr[houseData[i].fwsyquan3 - 1];////房屋所有权3
    var fczheng = '';//房产证
    var zgsxin = '';//最高授信
    var hkfshi = '';//还款方式
    var fwdkuan = loanTypeArr02[houseData[i].fwdkuan - 1];//房屋贷款
    var fkyhang = bankArr[houseData[i].fkyhang - 1];//放款银行
    var dkschang = qishuArr2[houseData[i].dkschang - 1];//贷款时长

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
    
    houseDataHtml = '<div class="swiper-slide needhtml">' +
        '<div class="msg-content lh14 f14">' +
        '<div class="row"><div class="col-xs-5 text-right">房屋类型</div><div class="col-xs-5 pl20 color-gray">'+ fwlxing1 + fwlxing2 + fwlxing3 +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">房屋所有权</div><div class="col-xs-6 pl20 color-gray">'+ fwsyquan +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">房屋建成日</div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].fwjcri +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">购房日</div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].gfri +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">房屋建筑面积</div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].fwjzmji + 'm<sup>2</sup>' +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">房屋使用面积</div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].fwsymji + 'm<sup>2</sup>' +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">房产证地址</div><div class="col-xs-6 pl20 color-gray">'+ houseData[i].fczdzsheng + houseData[i].fczdzshi + houseData[i].fczdzqu +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right"></div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].fczdzhi +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">邮寄地址</div><div class="col-xs-6 pl20 color-gray">'+ houseData[i].yjdzsheng + houseData[i].yjdzshi + houseData[i].yjdzqu +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right"></div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].yjdzhi +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">房屋现价</div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].fwxjia +'元</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">房产证</div><div class="col-xs-5 pl20 color-gray">'+ fczheng +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">房屋贷款</div><div class="col-xs-5 pl20 color-gray">'+ fwdkuan +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">贷款日期</div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].dkrqi +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">贷款比例</div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].dkbli +'%</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">最高授信</div><div class="col-xs-5 pl20 color-gray">'+ zgsxin +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">贷款本金</div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].dkbjin +'万元</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">放款银行</div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].dkbjin +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">贷款时长</div><div class="col-xs-5 pl20 color-gray">'+ dkschang +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">月供金额</div><div class="col-xs-5 pl20 color-gray">'+ houseData[i].ygje +'元</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">还款方式</div><div class="col-xs-5 pl20 color-gray">'+ hkfshi +'</div></div>' +
        '</div><button class="client-icon edit btn-edit" data-itemid="'+ houseData[i].id +'" data-toggle="modal" data-target="#houseModal"></button>' +
        '</div>';  $("body .msg-container.fangchan .swiper-wrapper").append(houseDataHtml);
}*/
  for(var i=0;i<houseData.length;i++){
    if(houseData.length !==0){
      var  arr_length = houseData[0];
      var arr_no = [];
      for(var j in arr_length){
        // console.log(arr_length[j]);
        if(arr_length[j]==="0" || arr_length[j]==="")
          arr_no.push(arr_length[j])
        //console.log(arr_no);
      }
      var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
      var Empty  = parseFloat(arr_no.length);
      var baifenbi = (zongshu-Empty-2)/(zongshu-2);
      var baifenbi_ = baifenbi.toFixed(2);
      var baifenbi_xuqiu = (baifenbi_*100+""+"%");
      $("._fangchanxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
    }
  }
  $("#_fangchanxinxi").on("click",function(){
    var str = "房产信息";
    var update = [];

    $("body ._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
    $("._remove").html("")

    var _add = ' <div class="msg-icon icon06 fangchan-add" data-toggle="modal" data-target="#houseModal"><img src="images/increased.png" alt="">添加</div>';

    $("body ._col_1").append(str);
    $("._add").append(_add);
    for( var i in houseData){
      var fwlxing1 = houseData[i].fwlxing1==0?'':houseTypeArr01[houseData[i].fwlxing1 - 1];//房产类型1
      var fwlxing2 = houseData[i].fwlxing2==0?'':houseTypeArr02[houseData[i].fwlxing2 - 1];//房产类型2
      var fwlxing3 = houseData[i].fwlxing3==0?'':houseTypeArr03[houseData[i].fwlxing3 - 1];//房产类型3
      var fwsyquan = '';//房屋所有权1
      var fwsyquan2 = '';//房屋所有权2
      var fwsyquan3 = publicHasArr[houseData[i].fwsyquan3 - 1];////房屋所有权3
      var fczheng = '';//房产证
      var zgsxin = '';//最高授信
      var hkfshi = '';//还款方式
      var fwdkuan = loanTypeArr02[houseData[i].fwdkuan - 1];//房屋贷款
      var fkyhang = houseData[i].fkyhang==''?'':bankArr[houseData[i].fkyhang - 1];//放款银行
      var dkschang = qishuArr2[houseData[i].dkschang - 1];//贷款时长

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
      if(houseData[i].update ){
        update = `<div class=" swiper-slide" data-id="${houseData[i].id}">${houseData[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: 4,//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0 //默认边距
        });
        if($(".swiper-slide").css("width","222px")){
          $(".swiper-slide").css("width","100px")
        }
      }

      dataHtml = `<div class="needHtml">
           <div class="row _xuqiu_h">
             <div class="col-xs-4 text-right">房屋类型</div><div class="col-xs-8 pl20">${fwlxing1}${fwlxing2}${fwlxing3}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">房屋所有权</div><div class="col-xs-8 pl20">${fwsyquan}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">房屋建成日</div><div class="col-xs-8 pl20">${houseData[i].fwjcri}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">购房日</div><div class="col-xs-8 pl20">${houseData[i].gfri}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">房屋建筑面积</div><div class="col-xs-8 pl20">${houseData[i].fwjzmji}m<sup>2</sup></div>
           </div>
            <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">房屋使用面积</div><div class="col-xs-8 pl20">${houseData[i].fwsymji}m<sup>2</sup></div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">房产证地址</div><div class="col-xs-8 pl20">${houseData[i].fczdzsheng}${ houseData[i].fczdzshi}${houseData[i].fczdzqu}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right"></div><div class="col-xs-8 pl20">${houseData[i].fczdzhi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">邮寄地址</div><div class="col-xs-8 pl20">${houseData[i].yjdzsheng}${houseData[i].yjdzshi}${houseData[i].yjdzqu}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right"></div><div class="col-xs-8 pl20">${houseData[i].yjdzhi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">房屋现价</div><div class="col-xs-8 pl20">${houseData[i].fwxjia}元/m²</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">房产证</div><div class="col-xs-8 pl20">${fczheng}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">房屋贷款</div><div class="col-xs-8 pl20">${fwdkuan}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">贷款日期</div><div class="col-xs-8 pl20">${houseData[i].dkrqi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">贷款比例</div><div class="col-xs-8 pl20">${houseData[i].dkbli}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">最高授信</div><div class="col-xs-8 pl20">${zgsxin}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">贷款本金</div><div class="col-xs-8 pl20">${houseData[i].dkbjin}万元</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">放款银行</div><div class="col-xs-8 pl20">${fkyhang}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">贷款时长</div><div class="col-xs-8 pl20">${dkschang}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">月供金额</div><div class="col-xs-8 pl20">${houseData[i].ygje}元</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">还款方式</div><div class="col-xs-8 pl20">${hkfshi}</div>
           </div>
      </div>`;
      compile = `<div class="fangchan"><button class="edit btn-edit needHtml-compile" data-itemid="${houseData[i].id}" data-toggle="modal" data-target="#houseModal"><img src="images/compile.png" alt="">编辑</button></div>`;
      $("._customer_data").append(dataHtml);
      $("._remove").append(compile);
      //$("._remove").hide();
      var compile_one = $("._remove").find(".fangchan");
      $(compile_one[0]).show().siblings().hide()
      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".needHtml");
      $(_first[0]).show().siblings().hide();
      var bbb=$(this).parents("._nav_right").siblings("._client_information").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()==="" || $(bbb[i]).find(".pl20").html() === "undefined"|| $(bbb[i]).find(".pl20").html() === "undefinedundefinedundefined"|| $(bbb[i]).find(".pl20").html() === "0"|| $(bbb[i]).find(".pl20").html() === "0m"+'<sup>2</sup>'|| $(bbb[i]).find(".pl20").html() === "0"|| $(bbb[i]).find(".pl20").html() === "0元"|| $(bbb[i]).find(".pl20").html() === "0"|| $(bbb[i]).find(".pl20").html() === "0万元"){
          $(bbb[i]).remove();
        }
      })
      var length8 = $(_first[0]).children("._xuqiu_h");//获取当前子元素
      var arrBox = [];
      for(var j = 0; j < length8.length; j+=8){//循环分组数据
        arrBox.push(length8.slice(j,j+8));
        $(".needHtml").append($("<div class='grouping'></div>"));

      }
      for(var k = 0; k < $(".grouping").length; k++){//遍历总div，在每个DIV追加元素
        $($(".grouping")[k]).html(arrBox[k]);
      }
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){//这里是按钮触发
        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){
          if($(arr[i]).find(".pl20").html() === "" || $(arr[i]).find(".pl20").html() === "undefined" || $(arr[i]).find(".pl20").html() === "undefinedundefinedundefined" || $(arr[i]).find(".pl20").html() === "0m"+'<sup>2</sup>' || $(arr[i]).find(".pl20").html() === "0"|| $(arr[i]).find(".pl20").html() === "0元"|| $(arr[i]).find(".pl20").html() === "0万元"){
            $(arr[i]).remove();
          }
        })
        for(var i in houseData){
          var arrBox_1 = [];
          if(houseData[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作
            var  arr_length = houseData[i];
            var arr_no = [];
            for(var j in arr_length){
              // console.log(arr_length[j]);
              if(arr_length[j]==="0" || arr_length[j]==="")
                arr_no.push(arr_length[j])
            }
            var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
            var Empty  = parseFloat(arr_no.length);
            var baifenbi = (zongshu-Empty-2)/(zongshu-2);
            var baifenbi_ = baifenbi.toFixed(2);
            var baifenbi_xuqiu = (baifenbi_*100+""+"%");
            $("._fangchanxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
            $(this).addClass('_data').siblings().removeClass('_data');
            $("._customer_data").show();
            $("._remove").show();
            $('.needHtml:eq('+$(this).index()+')').show().siblings().hide();
            $('.fangchan:eq('+$(this).index()+')').show().siblings().hide();
            var length8_1= $('.needHtml:eq('+$(this).index()+')').children("._xuqiu_h");//第二次点击没有这个子元素为_xuqiu_h的东西
            for(var j = 0; j < length8_1.length; j+=8){//循环分组数据
              arrBox_1.push(length8_1.slice(j,j+8));
              $(".needHtml").append($("<div class='grouping'></div>"));
            }
            var grouping = [];
            for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
              $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              var _grouping = $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              grouping.push(_grouping);
              var grouping_hide = $(grouping).find(".grouping");
              grouping_hide =grouping_hide.prevObject;
              for(var i = 0; i < grouping_hide.length; i++ ){
                if(grouping_hide[i].html()===""){
                  $(grouping_hide[i]).remove();
                }
              }
            }
          }
        }
      })
    }

  });
  if(houseData.length === 0){
    $("._fangchanxinxi > ._Finish_rate > p").html("0%");
    $("._fangchanxinxi").css("background-position","-41px -130px");
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
/*for(i in carData){
  
  var cllxing = carTypeArr[carData[i].cllxing - 1];//车辆类型
  var cpsheng = chepaiArr[carData[i].cpsheng - 1];//
  var cpshi = zimuArr[carData[i].cpshi - 1];
  var cllxing = carTypeArr[carData[i].cllxing - 1];
  var fkyhang = bankArr[carData[i].fkyhang - 1];//放款银行
  var dkschang = qishuArr[carData[i].dkschang - 1];//贷款时长
  var dkxs_fkjg = '';//贷款形式
  var cldkuan = '';//车辆贷款
  

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


     carDataHtml = '<div class="swiper-slide">' +
        '<div class="msg-content lh26 f14">' +
        '<div class="row"><div class="col-xs-5 text-right">车辆类型</div><div class="col-xs-5 pl20 color-gray">'+ cllxing +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">车牌号</div><div class="col-xs-5 pl20 color-gray">'+ cpsheng + cpshi + carData[i].cphao +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">车辆品牌</div><div class="col-xs-5 pl20 color-gray">'+ carData[i].clppai +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">车辆型号</div><div class="col-xs-5 pl20 color-gray">'+ carData[i].clxhao +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">购车日期</div><div class="col-xs-5 pl20 color-gray">'+ carData[i].gcrqi +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">祼车价</div><div class="col-xs-5 pl20 color-gray">'+ carData[i].lcjia  +'万元</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">车辆贷款类型</div><div class="col-xs-5 pl20 color-gray">'+ cldkuan +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">贷款形式</div><div class="col-xs-5 pl20 color-gray">'+ dkxs_fkjg +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">放款银行</div><div class="col-xs-5 pl20 color-gray">'+ fkyhang  +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">贷款日期</div><div class="col-xs-5 pl20 color-gray">'+ carData[i].dkrqi +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">贷款本金</div><div class="col-xs-5 pl20 color-gray">'+ carData[i].dkbjin +'万元</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">贷款时长</div><div class="col-xs-5 pl20 color-gray">'+ dkschang +'</div></div>' +
        '<div class="row"><div class="col-xs-5 text-right">月供金额</div><div class="col-xs-5 pl20 color-gray">'+ carData[i].ygje +'</div></div>' +
        '</div><<button class="client-icon edit btn-edit" data-itemid="'+ carData[i].id +'" data-toggle="modal" data-target="#carMsgModal"></button>/div>';
   $("body .msg-container.chechan .swiper-wrapper").append(carDataHtml);
}*/
/*  $(window).ready(function(){

  })*/

  for(var i=0;i<carData.length;i++){
    if(carData.length !==0){
      var  arr_length = carData[0];
      var arr_no = [];
      for(var j in arr_length){
        // console.log(arr_length[j]);
        if(arr_length[j]==="0" || arr_length[j]==="")
          arr_no.push(arr_length[j])
        //console.log(arr_no);
      }
      var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
      var Empty  = parseFloat(arr_no.length);
      var baifenbi = (zongshu-Empty-2)/(zongshu-2);
      var baifenbi_ = baifenbi.toFixed(2);
      //console.log(baifenbi_);
      var baifenbi_xuqiu = (baifenbi_*100+""+"%");
      //console.log(baifenbi_xuqiu);
      $("._chechanxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
    }
  }
  $("#_chechanxinxi").on("click",function(){
    var str = "车产信息";
    var update = [];

    $("body ._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
    $("._remove").html("")

    var _add = ' <div class="msg-icon icon06 chechan-add needHtml-compile" data-toggle="modal" data-target="#carMsgModal"><img src="images/increased.png" alt="">添加</div>';

    $("body ._col_1").append(str);
    $("._add").append(_add);
    for( var i in carData){
      var cllxing = carTypeArr[carData[i].cllxing - 1];//车辆类型
      var cpsheng = chepaiArr[carData[i].cpsheng - 1];//
      var cpshi = zimuArr[carData[i].cpshi - 1];
      var cllxing = carTypeArr[carData[i].cllxing - 1];
      var fkyhang = bankArr[carData[i].fkyhang - 1];//放款银行
      var dkschang = qishuArr[carData[i].dkschang - 1];//贷款时长
      var dkxs_fkjg = '';//贷款形式
      var cldkuan = '';//车辆贷款


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
      if(carData[i].update ){
        update = `<div class=" swiper-slide" data-id="${carData[i].id}">${carData[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: 4,//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0 //默认边距
        });
        if($(".swiper-slide").css("width","222px")){
          $(".swiper-slide").css("width","100px")
        }
      }

      dataHtml = `<div class="needHtml">
          <div class="row _xuqiu_h">
            <div class="col-xs-5 text-right">车辆类型</div><div class="col-xs-5 pl20">${cllxing}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">车牌号</div><div class="col-xs-5 pl20">${cpsheng}${cpshi}${carData[i].cphao}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">车辆品牌</div><div class="col-xs-5 pl20">${carData[i].clppai}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">车辆型号</div><div class="col-xs-5 pl20">${carData[i].clxhao}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">购车日期</div><div class="col-xs-5 pl20">${carData[i].gcrqi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">祼车价</div><div class="col-xs-5 pl20">${carData[i].lcjia}万元</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">车辆贷款类型</div><div class="col-xs-5 pl20">${cldkuan}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">贷款形式</div><div class="col-xs-5 pl20">${dkxs_fkjg}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">放款银行</div><div class="col-xs-5 pl20">${fkyhang}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">贷款日期</div><div class="col-xs-5 pl20">${carData[i].dkrqi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">贷款本金</div><div class="col-xs-5 pl20">${carData[i].dkbjin}万元</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">贷款时长</div><div class="col-xs-5 pl20">${dkschang}</div>
           </div>
            <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">月供金额</div><div class="col-xs-5 pl20">${carData[i].ygje}元</div>
           </div>
           <div>
         </div>
      </div>`;
      compile = `<div class="chechan"><button class="edit btn-edit needHtml-compile" data-itemid="${carData[i].id}" data-toggle="modal" data-target="#carMsgModal"><img src="images/compile.png" alt="">编辑</button></div>`;
      $("._customer_data").append(dataHtml);
      $("._remove").append(compile);
      //$("._remove").hide();
      var compile_one = $("._remove").find(".chechan");
      $(compile_one[0]).show().siblings().hide();
      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".needHtml");
      $(_first[0]).show().siblings().hide();
      var bbb=$(this).parents("._nav_right").siblings("._client_information").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()==="" || $(bbb[i]).find(".pl20").html() === "undefined"|| $(bbb[i]).find(".pl20").html() === "undefinedundefined"|| $(bbb[i]).find(".pl20").html() === "0"|| $(bbb[i]).find(".pl20").html() === "0万元"){
          $(bbb[i]).remove();
        }
      })
      var length8 = $(_first[0]).children("._xuqiu_h");//获取当前子元素
      var arrBox = [];
      for(var j = 0; j < length8.length; j+=8){//循环分组数据
        arrBox.push(length8.slice(j,j+8));

        $(".needHtml").append($("<div class='grouping'></div>"));

      }
      for(var k = 0; k < $(".grouping").length; k++){//遍历总div，在每个DIV追加元素
        $($(".grouping")[k]).html(arrBox[k]);
      }
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){//这里是按钮触发
        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){

          if($(arr[i]).find(".pl20").html() === "" || $(arr[i]).find(".pl20").html() === "undefined"|| $(arr[i]).find(".pl20").html() === "undefinedundefined"|| $(arr[i]).find(".pl20").html() === "0"|| $(arr[i]).find(".pl20").html() === "0万元"){
            $(arr[i]).hide();
          }
        })
        for(var i in carData){
          var arrBox_1 = [];
          if(carData[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作\
            var  arr_length = carData[i];
            var arr_no = [];
            for(var j in arr_length){
              // console.log(arr_length[j]);
              if(arr_length[j]==="0" || arr_length[j]==="")
                arr_no.push(arr_length[j])
              console.log(arr_no);
            }
            var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
            var Empty  = parseFloat(arr_no.length);
            var baifenbi = (zongshu-Empty-2)/(zongshu-2);
            var baifenbi_ = baifenbi.toFixed(2);
            console.log(baifenbi_);
            var baifenbi_xuqiu = (baifenbi_*100+""+"%");
            console.log(baifenbi_xuqiu);
           $("._chechanxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
            $(this).addClass('_data').siblings().removeClass('_data');
            $("._customer_data").show();
            $("._remove").show();
            console.log($('.needHtml:eq(' + $(this).index() + ')'));
            $('.needHtml:eq('+$(this).index()+')').show().siblings().hide();
            $('.chechan:eq('+$(this).index()+')').show().siblings().hide();
            var length8_1= $('.needHtml:eq('+$(this).index()+')').children("._xuqiu_h");//第二次点击没有这个子元素为_xuqiu_h的东西
            for(var j = 0; j < length8_1.length; j+=8){//循环分组数据
              arrBox_1.push(length8_1.slice(j,j+8));
              $(".needHtml").append($("<div class='grouping'></div>"));
            }
            var grouping = [];
            for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
              $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              var _grouping = $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              grouping.push(_grouping);
              var grouping_hide = $(grouping).find(".grouping");
               grouping_hide =grouping_hide.prevObject;
              for(var i = 0; i < grouping_hide.length; i++ ){
                if(grouping_hide[i].html()===""){
                  $(grouping_hide[i]).remove();
                }
              }
            }
          }
        }
      })
    }

  });
  if(carData.length === 0){
    $("._chechanxinxi > ._Finish_rate > p").html("0%");
    $("._chechanxinxi").css("background-position","-41px -173px");
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

/*for(i in cheweiData){

  var cwzheng = '';//车位证
  var cwdkuan = '';//车位贷款

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

  cheweiDataHtml = '<div class="swiper-slide"><div class="msg-content lh26 f14">' +
      '<div class="row"><div class="col-xs-5 text-right">购买日期</div><div class="col-xs-5 pl20 color-gray">'+ cheweiData[i].gmrqi +'</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">车位建筑面积</div><div class="col-xs-5 pl20 color-gray">'+ cheweiData[i].cwjzmji +'m<sup>2</sup></div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">车位使用面积</div><div class="col-xs-5 pl20 color-gray">'+ cheweiData[i].cwsymji  +'m<sup>2</sup></div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">购买价格</div><div class="col-xs-5 pl20 color-gray">'+ cheweiData[i].gmjge +'万元</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">现价格</div><div class="col-xs-5 pl20 color-gray">'+ cheweiData[i].xjge +'万元</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">车位地址</div><div class="col-xs-6 pl20">' +
      '<div class="row"><div class="col-xs-12">'+ cheweiData[i].cwdzsheng + cheweiData[i].cwdzshi + cheweiData[i].cwdzqu +'</div><div class="col-xs-12">'+ cheweiData[i].cwdzhi +'</div></div></div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">车位证</div><div class="col-xs-5 pl20 color-gray">'+ cwzheng +'</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">车位贷款</div><div class="col-xs-5 pl20 color-gray">'+ cwdkuan +'</div></div></div>' +
      '<button class="client-icon edit btn-edit" data-itemid="'+ cheweiData[i].id +'" data-toggle="modal" data-target="#carPosModal"></button></div>';
  $("body .msg-container.chewei .swiper-wrapper").append(cheweiDataHtml);
}*/
  for(var i=0;i<cheweiData.length;i++){
    if(cheweiData.length !==0){
      var  arr_length = cheweiData[0];
      var arr_no = [];
      for(var j in arr_length){
        // console.log(arr_length[j]);
        if(arr_length[j]==="0" || arr_length[j]==="")
          arr_no.push(arr_length[j]);
      }
      var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
      var Empty  = parseFloat(arr_no.length);
      var baifenbi = (zongshu-Empty-2)/(zongshu-2);
      var baifenbi_ = baifenbi.toFixed(2);
      //console.log(baifenbi_);
      var baifenbi_xuqiu = (baifenbi_*100+""+"%");
      //console.log(baifenbi_xuqiu);
      $("._cheweixinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
    }
  }
  $("#_cheweixinxi").on("click",function(){
    var str = "车位信息";
    var update = [];

    $("body ._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
    $("._remove").html("")

    var _add = '<div class="msg-icon icon06 chewei-add" data-toggle="modal" data-target="#carPosModal"><img src="images/increased.png" alt="">添加</div>';

    $("body ._col_1").append(str);
    $("._add").append(_add);
    for( var i in cheweiData){
      var cwzheng = '';//车位证
      var cwdkuan = '';//车位贷款

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
      if(cheweiData[i].update ){
        //console.log(houseData[i].update.length);
        update = `<div class=" swiper-slide" data-id="${cheweiData[i].id}">${cheweiData[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: 4,//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0 //默认边距
        });
        if($(".swiper-slide").css("width","222px")){
          $(".swiper-slide").css("width","100px")
        }
      }

      dataHtml = `<div class="needHtml">
          <div class="row _xuqiu_h">
            <div class="col-xs-5 text-right">购买日期</div><div class="col-xs-5 pl20">${cheweiData[i].gmrqi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">车位建筑面积</div><div class="col-xs-5 pl20">${cheweiData[i].cwjzmji}m<sup>2</sup></div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">车位使用面积</div><div class="col-xs-5 pl20">${cheweiData[i].cwsymji}m<sup>2</sup></div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">购买价格</div><div class="col-xs-5 pl20">${cheweiData[i].gmjge}万元</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">现价格</div><div class="col-xs-5 pl20">${cheweiData[i].xjge}万元</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">车位地址</div><div class="col-xs-5 pl20">${cheweiData[i].cwdzsheng}${cheweiData[i].cwdzshi}${cheweiData[i].cwdzqu}${cheweiData[i].cwdzhi}</div>
           </div>
            <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">车位证</div><div class="col-xs-5 pl20">${cwzheng}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">车位贷款</div><div class="col-xs-5 pl20">${cwdkuan}</div>
           </div>

      </div>`;
      compile = `<div class="chewei"><button class="edit btn-edit needHtml-compile" data-itemid="${cheweiData[i].id}" data-toggle="modal" data-target="#carPosModal"><img src="images/compile.png" alt="">编辑</button></div>`;
      $("._customer_data").append(dataHtml);
      $("._remove").append(compile);
      //$("._remove").hide();
      var compile_one = $("._remove").find(".chewei");
      $(compile_one[0]).show().siblings().hide()
      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".needHtml");
      $(_first[0]).show().siblings().hide();
      var bbb=$(this).parents("._nav_right").siblings("._client_information").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()===""|| $(bbb[i]).find(".pl20").html() === " " || $(bbb[i]).find(".pl20").html() === "undefined"|| $(bbb[i]).find(".pl20").html() === "undefinedundefinedundefined"|| $(bbb[i]).find(".pl20").html() === "0"|| $(bbb[i]).find(".pl20").html() === "0m"+'<sup>2</sup>'|| $(bbb[i]).find(".pl20").html() === "0"|| $(bbb[i]).find(".pl20").html() === "0元"|| $(bbb[i]).find(".pl20").html() === "0"|| $(bbb[i]).find(".pl20").html() === "0万元"){
          $(bbb[i]).remove();
        }
      })
      var length8 = $(_first[0]).children("._xuqiu_h");//获取当前子元素
      var arrBox = [];
      for(var j = 0; j < length8.length; j+=8){//循环分组数据
        arrBox.push(length8.slice(j,j+8));

        $(".needHtml").append($("<div class='grouping'></div>"));

      }
      for(var k = 0; k < $(".grouping").length; k++){//遍历总div，在每个DIV追加元素
        $($(".grouping")[k]).html(arrBox[k]);
      }
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){//这里是按钮触发
        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){
          if($(arr[i]).find(".pl20").html() === "" || $(arr[i]).find(".pl20").html() === " " || $(arr[i]).find(".pl20").html() === "undefined" || $(arr[i]).find(".pl20").html() === "undefinedundefinedundefined" || $(arr[i]).find(".pl20").html() === "0m"+'<sup>2</sup>' || $(arr[i]).find(".pl20").html() === "0"|| $(arr[i]).find(".pl20").html() === "0元"|| $(arr[i]).find(".pl20").html() === "0万元"){
            $(arr[i]).remove();
          }
        })
        for(var i in cheweiData){
          var arrBox_1 = [];
          if(cheweiData[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作
            var  arr_length = cheweiData[i];
            var arr_no = [];
            for(var j in arr_length){
              // console.log(arr_length[j]);
              if(arr_length[j]==="0"||arr_length[j]==="")
                arr_no.push(arr_length[j])
            }
            var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
            var Empty  = parseFloat(arr_no.length);
            var baifenbi = (zongshu-Empty-2)/(zongshu-2);
            var baifenbi_ = baifenbi.toFixed(2);
            var baifenbi_xuqiu = (baifenbi_*100+""+"%");
            $("._cheweixinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
            $(this).addClass('_data').siblings().removeClass('_data');
            $("._customer_data").show();
            $("._remove").show();
            $('.needHtml:eq('+$(this).index()+')').show().siblings().hide();
            $('.chewei:eq('+$(this).index()+')').show().siblings().hide();
            var length8_1= $('.needHtml:eq('+$(this).index()+')').children("._xuqiu_h");//第二次点击没有这个子元素为_xuqiu_h的东西
            for(var j = 0; j < length8_1.length; j+=8){//循环分组数据
              arrBox_1.push(length8_1.slice(j,j+8));
              $(".needHtml").append($("<div class='grouping'></div>"));
            }
            var grouping = [];
            for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
              $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              var _grouping = $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              grouping.push(_grouping);
              var grouping_hide = $(grouping).find(".grouping");
              grouping_hide =grouping_hide.prevObject;
              for(var i = 0; i < grouping_hide.length; i++ ){
                if(grouping_hide[i].html()===""){
                  $(grouping_hide[i]).remove();
                }
              }
            }
          }
        }
      })
    }

  });
  if(cheweiData.length === 0){
    $("._cheweixinxi").css("background-position","-41px -216px");
    $("._cheweixinxi > ._Finish_rate > p").html("0%");
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

/*for(i in baodanData){
  var bxgsi = baoxianArr[baodanData[i].bxgsi - 1];//保险公司
  var jffshi = payWayArr[baodanData[i].jffshi - 1];//缴费方式

  var bdlxing = '';//保单类型
  var xjjzhi = '';//现金值

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

  baodanDataHtml = '<div class="swiper-slide"><div class="msg-content lh26 f14">' +
      '<div class="row"><div class="col-xs-5 text-right">保险公司</div><div class="col-xs-5 pl20 color-gray">'+ bxgsi +'</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">保单类型</div><div class="col-xs-5 pl20 color-gray">'+ bdlxing +'</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">保单生效日</div><div class="col-xs-5 pl20 color-gray">'+ baodanData[i].bdsxri +'</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">保单生效年限</div><div class="col-xs-5 pl20 color-gray">'+ baodanData[i].bdsxnxian +'年</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">缴费方式</div><div class="col-xs-5 pl20 color-gray">'+ jffshi + baodanData[i].jffsyuan +'元</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">已邀费次数</div><div class="col-xs-5 pl20 color-gray">'+ baodanData[i].yjfcshu +'次</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">现金价值</div><div class="col-xs-5 pl20 color-gray">'+ xjjzhi +'</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">复效记录</div><div class="col-xs-6 pl20">' +
      '<div class="row"><div class="col-xs-12">复效时期'+ baodanData[i].fxjl_fxsqi +'</div><div class="col-xs-12">应缴纳时期'+ baodanData[i].fxjl_yjnrqi +'</div></div></div></div></div>' +
      '<button class="client-icon edit btn-edit" data-itemid="'+ baodanData[i].id +'" data-toggle="modal" data-target="#policyMsgModal"></button></div>'
 $("body .msg-container.baodan .swiper-wrapper").append(baodanDataHtml);
}*/
  for(var i=0;i<baodanData.length;i++){
    if(carData.length !==0){
      var  arr_length = baodanData[0];
      var arr_no = [];
      for(var j in arr_length){
        // console.log(arr_length[j]);
        if(arr_length[j]==="0" || arr_length[j]==="")
          arr_no.push(arr_length[j])
        //console.log(arr_no);
      }
      var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
      var Empty  = parseFloat(arr_no.length);
      var baifenbi = (zongshu-Empty-2)/(zongshu-2);
      var baifenbi_ = baifenbi.toFixed(2);
      //console.log(baifenbi_);
      var baifenbi_xuqiu = (baifenbi_*100+""+"%");
      //console.log(baifenbi_xuqiu);
      $("._baodanxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
    }
  }
  $("#_baodanxinxi").on("click",function(){
    var str = "保单信息";
    var update = [];

    $("body ._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
    $("._remove").html("")

    var _add = '<div class="msg-icon  icon06 baodan-add" data-toggle="modal" data-target="#policyMsgModal"><img src="images/increased.png" alt="">添加</div>';

    $("body ._col_1").append(str);
    $("._add").append(_add);
    for( var i in baodanData){
      var bxgsi = baoxianArr[baodanData[i].bxgsi - 1];//保险公司
      var jffshi = payWayArr[baodanData[i].jffshi - 1];//缴费方式

      var bdlxing = '';//保单类型
      var xjjzhi = '';//现金值

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
      if(baodanData[i].update ){
        update = `<div class=" swiper-slide" data-id="${baodanData[i].id}">${baodanData[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: 4,//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0 //默认边距
        });
        if($(".swiper-slide").css("width","222px")){
          $(".swiper-slide").css("width","100px")
        }
      }

      dataHtml = `<div class="needHtml">
          <div class="row _xuqiu_h">
            <div class="col-xs-4 text-right">保险公司</div><div class="col-xs-8 pl20">${bxgsi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">保单类型</div><div class="col-xs-8 pl20">${bdlxing}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">保单生效日</div><div class="col-xs-8 pl20">${baodanData[i].bdsxri}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">保单生效年限</div><div class="col-xs-8 pl20">${baodanData[i].bdsxnxian}年</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">缴费方式</div><div class="col-xs-8 pl20">${jffshi}${baodanData[i].jffsyuan}元</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">已邀费次数</div><div class="col-xs-8 pl20">${baodanData[i].yjfcshu}次</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">现金价值</div><div class="col-xs-8 pl20">${xjjzhi}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-4 text-right">复效记录</div>
            <div class="col-xs-8 pl20">
            复效时期${baodanData[i].fxjl_fxsqi} <br/>
            应缴纳时期${baodanData[i].fxjl_yjnrqi}
            </div>
           </div>
      </div>`;
      compile = `<div class="baodan"><button class="edit btn-edit needHtml-compile" data-itemid="${baodanData[i].id}" data-toggle="modal" data-target="#policyMsgModal"><img src="images/compile.png" alt="">编辑</button></div>`;
      $("._customer_data").append(dataHtml);
      $("._remove").append(compile);
      //$("._remove").hide();
      var compile_one = $("._remove").find(".baodan");
      $(compile_one[0]).show().siblings().hide()
      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".needHtml");
      $(_first[0]).show().siblings().hide();
      var bbb=$(this).parents("._nav_right").siblings("._client_information").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()==='复效时期 应缴纳时期'||$(bbb[i]).find(".pl20").html()==="月缴0元" ||$(bbb[i]).find(".pl20").html()==="undefined0元"||$(bbb[i]).find(".pl20").html()==="" || $(bbb[i]).find(".pl20").html() === "undefined" || $(bbb[i]).find(".pl20").html() === "0" || $(bbb[i]).find(".pl20").html() === "0年"|| $(bbb[i]).find(".pl20").html() === " 年"|| $(bbb[i]).find(".pl20").html() === " 0元"|| $(bbb[i]).find(".pl20").html() === " 元"|| $(bbb[i]).find(".pl20").html() === "0次"|| $(bbb[i]).find(".pl20").html() === " 次"){
          $(bbb[i]).remove();
        }
      })
      var length8 = $(_first[0]).children("._xuqiu_h");//获取当前子元素
      var arrBox = [];
      for(var j = 0; j < length8.length; j+=8){//循环分组数据
        arrBox.push(length8.slice(j,j+8));

        $(".needHtml").append($("<div class='grouping'></div>"));

      }
      for(var k = 0; k < $(".grouping").length; k++){//遍历总div，在每个DIV追加元素
        $($(".grouping")[k]).html(arrBox[k]);
      }
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){//这里是按钮触发
        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){
          if($(arr[i]).find(".pl20").html()==='复效时期 应缴纳时期'||$(arr[i]).find(".pl20").html()==="undefined0元"||$(arr[i]).find(".pl20").html()==="月缴0元"||$(arr[i]).find(".pl20").html()==="" || $(arr[i]).find(".pl20").html() === "undefined" || $(arr[i]).find(".pl20").html() === "0" || $(arr[i]).find(".pl20").html() === "0年"|| $(bbb[i]).find(".pl20").html() === " 年"|| $(arr[i]).find(".pl20").html() === " 0元"|| $(arr[i]).find(".pl20").html() === " 元"|| $(arr[i]).find(".pl20").html() === "0次"|| $(arr[i]).find(".pl20").html() === " 次"){
            $(arr[i]).hide();
          }
        })
        for(var i in baodanData){
          var arrBox_1 = [];
          if(baodanData[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作
            var  arr_length = baodanData[i];
            var arr_no = [];
            for(var j in arr_length){
              // console.log(arr_length[j]);
              if(arr_length[j]==="0"||arr_length[j]==="")
                arr_no.push(arr_length[j])
            }
            var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
            var Empty  = parseFloat(arr_no.length);
            var baifenbi = (zongshu-Empty-2)/(zongshu-2);
            var baifenbi_ = baifenbi.toFixed(2);
            var baifenbi_xuqiu = (baifenbi_*100+""+"%");
            $("._baodanxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
            $(this).addClass('_data').siblings().removeClass('_data');
            $("._customer_data").show();
            $("._remove").show();
            $('.needHtml:eq('+$(this).index()+')').show().siblings().hide();
            $('.baodan:eq('+$(this).index()+')').show().siblings().hide();
            var length8_1= $('.needHtml:eq('+$(this).index()+')').children("._xuqiu_h");//第二次点击没有这个子元素为_xuqiu_h的东西
            for(var j = 0; j < length8_1.length; j+=8){//循环分组数据
              arrBox_1.push(length8_1.slice(j,j+8));
              $(".needHtml").append($("<div class='grouping'></div>"));
            }
            var grouping = [];
            for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
              $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              var _grouping = $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              grouping.push(_grouping);
              var grouping_hide = $(grouping).find(".grouping");
              grouping_hide =grouping_hide.prevObject;
              for(var i = 0; i < grouping_hide.length; i++ ){
                if(grouping_hide[i].html()===""){
                  $(grouping_hide[i]).remove();
                }
              }
            }
          }
        }
      })
    }

  });
  if(baodanData.length === 0){
    $("._baodanxinxi > ._Finish_rate > p").html("0%");
    $("._baodanxinxi").css("background-position","-41px -259px");
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

/*for(i in zhengxinData){

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

  zhengxinHtml = '<div class="swiper-slide"><div class="msg-content lh26 f14 pl50">' +
      '<div class="row"><div class="col-xs-3 font-bold">征信查询时间</div><div class="col-xs-6 pl20 color-gray">'+ zhengxinData[i].zxcxsjian +'</div></div>' +
      '<div class="row mt20"><div class="col-xs-3 font-bold">征信查询次数</div></div>'+ cxcshuHtml +'' +
      '<div class="row mt20"><div class="col-xs-3 font-bold">征信逾期</div></div>'+ yuqiHtml +'</div>' +
      '<button class="client-icon edit btn-edit" data-itemid="'+ zhengxinData[i].id +'" data-toggle="modal" data-target="#creditMsgModal"></button></div>';
  $("body .msg-container.zhengxin .swiper-wrapper").append(zhengxinHtml);
}*/
  for(var i=0;i<zhengxinData.length;i++){
    if(zhengxinData.length !==0){
      var  arr_length = zhengxinData[0];
      var arr_no = [];
      for(var j in arr_length){
        // console.log(arr_length[j]);
        if(arr_length[j]==="0" || arr_length[j]==="")
          arr_no.push(arr_length[j])
       // console.log(arr_no);
      }
      var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
      var Empty  = parseFloat(arr_no.length);
      var baifenbi = (zongshu-Empty-2)/(zongshu-2);
      var baifenbi_ = baifenbi.toFixed(2);
      var baifenbi_xuqiu = (baifenbi_*100+""+"%")
      $("._zhenxinxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
    }
  }
  $("#_zhenxinxinxi").on("click",function(){
    var str = "征信信息";
    var update = [];

    $("body ._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
    $("._remove").html("")

    var _add = ' <div class="msg-icon icon06 zhengxin-add" data-toggle="modal" data-target="#creditMsgModal"><img src="images/increased.png" alt="">添加</div>';

    $("body ._col_1").append(str);
    $("._add").append(_add);
    for( var i in zhengxinData){
      var yqiData = zhengxinData[i].zxyqi;
      var yuqiHtml = '';
      for(n in yqiData){
        var a = zxyqiArr01[yqiData[n].a - 1];
        var b = timeArr02[yqiData[n].b - 1];
       /* yuqiHtml = yuqiHtml + '<div class="row"><div class="col-xs-3">'+ a +'</div><div class="col-xs-2 pl20">'+ b +'</div><div class="col-xs-1 text-center">有</div><div class="col-xs-1 text-center">'+ yqiData[n].c +'</div><div class="col-xs-1 text-center">逾期</div><div class="col-xs-3">'+ yqiData[n].d +'元</div></div>'
*/
        yuqiHtml = yuqiHtml +`<div class="row">
        <div class="col-xs-3">${a}</div><div class="col-1"></div><div class="col-xs-8">${b} 有 ${yqiData[n].c} 逾期 ${yqiData[n].d}元</div>
       </div>`;
      }

      var cxcshuData = zhengxinData[i].zxcxcshu;
      var cxcshuHtml = '';
      for(m in cxcshuData){
        var a = zxcxcshuArr01[cxcshuData[m].a - 1];
        var b = timeArr01[cxcshuData[m].b - 1];
        cxcshuHtml = cxcshuHtml + '<div class="row"><div class="col-xs-3">'+ a +'</div><div class="col-xs-3 pl20">'+ b +'</div><div class="col-xs-1 text-center">'+ cxcshuData[m].c +'</div><div class="col-xs-1">次</div></div>';
      }
      if(zhengxinData[i].update ){
        update = `<div class=" swiper-slide" data-id="${zhengxinData[i].id}">${zhengxinData[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: 4,//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0 //默认边距
        });
        if($(".swiper-slide").css("width","222px")){
          $(".swiper-slide").css("width","100px")
        }
      }

      dataHtml = `<div class="zhenxinHtml">
          <div class="row zhenxin_fenzu">
            <div class="col-xs-4 _color">
               <div class="row _xuqiu_h">
                  <h4><b>征信查询时间</b></h4>
                </div>

                <div class="row _xuqiu_h">
                  <div class="col-xs-12 pl20">${zhengxinData[i].zxcxsjian}</div>
                </div>
            </div>
               <div class="col-xs-4 _color">
               <div class="row _xuqiu_h">
                  <h4><b>征信查询次数</b></h4>
                </div>

                <div class="row _xuqiu_h">
                  <div class="col-xs-12 pl20">${cxcshuHtml}</div>
                </div>
            </div>
               <div class="col-xs-3 _color">
               <div class="row _xuqiu_h">
                  <h4><b>征信逾期</b></h4>
                </div>

                <div class="row _xuqiu_h">
                  <div class="col-xs-12 pl20">${yuqiHtml}</div>
                </div>
            </div>
          </div>
      </div>`;
      compile = `<div class="zhengxin"><button class="edit btn-edit needHtml-compile" data-itemid="${zhengxinData[i].id}" data-toggle="modal" data-target="#creditMsgModal"><img src="images/compile.png" alt="">编辑</button></div>`;
      $("._customer_data").append(dataHtml);
      $("._remove").append(compile);
      // $("._customer_data").hide();
      // $("._customer_data").find(".needHtml").first().show();
      //$("._remove").hide();
      var compile_one = $("._remove").find(".zhengxin");
      $(compile_one[0]).show().siblings().hide()
      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".zhenxinHtml");
      $(_first[0]).show().siblings().hide();
      var bbb=$(this).parents("._nav_right").siblings("._client_information").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()==="" || $(bbb[i]).find(".pl20").html() === "undefined"){
          $(bbb[i]).remove();
        }
      })
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){

        $("._remove").html("");
        $("._remove").append(compile);
        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){
          if($(arr[i]).find(".pl20").html() === "" || $(arr[i]).find(".pl20").html() === "undefined"){
            $(arr[i]).hide();
          }
        })
        for(var i in zhengxinData){
          if(zhengxinData[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作
            var  arr_length = zhengxinData[i];
            var arr_no = [];
            for(var j in arr_length){
              // console.log(arr_length[j]);
              if(arr_length[j]==="0"||arr_length[j]==="")
                arr_no.push(arr_length[j])
            }
            var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
            var Empty  = parseFloat(arr_no.length);
            var baifenbi = (zongshu-Empty-2)/(zongshu-2);
            var baifenbi_ = baifenbi.toFixed(2);
            var baifenbi_xuqiu = (baifenbi_*100+""+"%");
            $(".zhenxinHtml > ._Finish_rate > p").html(baifenbi_xuqiu);
            $(this).addClass('_data').siblings().removeClass('_data');
            $("._customer_data").show();
            $("._remove").show();
            $('.zhenxinHtml:eq('+$(this).index()+')').show().siblings().hide();
            $('.zhengxin:eq('+$(this).index()+')').show().siblings().hide();
          }
        }
      })
    }

  });
  if(zhengxinData.length === 0){
    $("._zhenxinxinxi > ._Finish_rate > p").html("0%");
    $("._zhenxinxinxi").css("background-position","-41px -344px");
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
/*for(i in sifaData){
  //console.log(sifaData[i].update.length)

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

  sifaDataHtml = '<div class="swiper-slide"><div class="msg-content lh26 f14">' +
      '<div class="row"><div class="col-xs-5 text-right">纪录类型</div><div class="col-xs-5 pl20 color-gray">'+ jllxing +'</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">案件时间</div><div class="col-xs-5 pl20 color-gray">'+ sifaData[i].ajsjian +'</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">是否可网查</div><div class="col-xs-5 pl20 color-gray">'+ sfkwcha +'</div></div>' +
      '</div><button class="client-icon edit btn-edit" data-itemid="'+ sifaData[i].id +'" data-toggle="modal" data-target="#judicialModal"></button></div>'
  $("body .msg-container.sifa .swiper-wrapper").append(sifaDataHtml);
}*/

  for(var i=0;i<sifaData.length;i++){
    if(sifaData.length !==0){
      var  arr_length = sifaData[0];
      var arr_no = [];
      for(var j in arr_length){
        // console.log(arr_length[j]);
        if(arr_length[j]==="0" || arr_length[j]==="")
          arr_no.push(arr_length[j])
        //console.log(arr_no);
      }
      var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
      var Empty  = parseFloat(arr_no.length);
      var baifenbi = (zongshu-Empty-2)/(zongshu-2);
      var baifenbi_ = baifenbi.toFixed(2);
      var baifenbi_xuqiu = (baifenbi_*100+""+"%")
      $("._sifaxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
    }
  }
  $("#_sifaxinxi").on("click",function(){
    var str = "司法信息";
    var update = [];

    $("body ._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
    $("._remove").html("")

    var _add = '<div class="msg-icon icon06 sifa-add" data-toggle="modal" data-target="#judicialModal"><img src="images/increased.png" alt="">添加</div>';

    $("body ._col_1").append(str);
    $("._add").append(_add);

    for( i in sifaData){

      var dataHtml="";
      var compile = "";
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
      if(sifaData[i].update ){
        update = `<div class=" swiper-slide" data-id="${sifaData[i].id}">${sifaData[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: 4,//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0 //默认边距
        });
        if($(".swiper-slide").css("width","222px")){
          $(".swiper-slide").css("width","100px")
        }
      }

      dataHtml = `<div class="needHtml">
          <div class="row _xuqiu_h">
            <div class="col-xs-5 text-right">纪录类型</div><div class="col-xs-5 pl20">${jllxing}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">案件时间</div><div class="col-xs-5 pl20">${sifaData[i].ajsjian}</div>
           </div>
           <div class="row _xuqiu_h">
            <div  class="col-xs-5 text-right">是否可网查</div><div class="col-xs-5 pl20">${sfkwcha}</div>
           </div>
         </div>
      </div>`;
      compile = `<div class="sifa"><button class="edit btn-edit needHtml-compile" data-itemid="${sifaData[i].id}" data-toggle="modal" data-target="#judicialModal"><img src="images/compile.png" alt="">编辑</button></div>`;
      $("._customer_data").append(dataHtml);
      $("._remove").append(compile);
      //$("._remove").hide();
      var compile_one = $("._remove").find(".sifa");
      $(compile_one[0]).show().siblings().hide()
      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".needHtml");
      $(_first[0]).show().siblings().hide();
      var bbb=$(this).parents("._nav_right").siblings("._client_information").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()==="" || $(bbb[i]).find(".pl20").html() === "undefined"){
          $(bbb[i]).remove();
        }
      })
      var length8 = $(_first[0]).children("._xuqiu_h");//获取当前子元素
      var arrBox = [];
      for(var j = 0; j < length8.length; j+=8){//循环分组数据
        arrBox.push(length8.slice(j,j+8));
        $(".needHtml").append($("<div class='grouping'></div>"));
      }
      for(var k = 0; k < $(".grouping").length; k++){//遍历总div，在每个DIV追加元素
        $($(".grouping")[k]).html(arrBox[k]);
      }
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){//这里是按钮触发
        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){
          if($(arr[i]).find(".pl20").html() === "" || $(arr[i]).find(".pl20").html() === "undefined"){
            $(arr[i]).hide();
          }
        })
        for(var i in sifaData){
          var arrBox_1 = [];
          if(sifaData[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作
            var  arr_length = sifaData[i];
            var arr_no = [];
            for(var j in arr_length){
              // console.log(arr_length[j]);
              if(arr_length[j]==="0"||arr_length[j]==="")
                arr_no.push(arr_length[j])
            }
            var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
            var Empty  = parseFloat(arr_no.length);
            var baifenbi = (zongshu-Empty-2)/(zongshu-2);
            var baifenbi_ = baifenbi.toFixed(2);
            var baifenbi_xuqiu = (baifenbi_*100+""+"%");
            $("._sifaxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
            $(this).addClass('_data').siblings().removeClass('_data');
            $("._customer_data").show();
            $("._remove").show();
            $('.needHtml:eq('+$(this).index()+')').show().siblings().hide();
            $('.sifa:eq('+$(this).index()+')').show().siblings().hide();
            var length8_1= $('.needHtml:eq('+$(this).index()+')').children("._xuqiu_h");//第二次点击没有这个子元素为_xuqiu_h的东西
            for(var j = 0; j < length8_1.length; j+=8){//循环分组数据
              arrBox_1.push(length8_1.slice(j,j+8));
              $(".needHtml").append($("<div class='grouping'></div>"));
            }
            var grouping = [];
            for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
              $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              var _grouping = $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              grouping.push(_grouping);
              var grouping_hide = $(grouping).find(".grouping");
              grouping_hide =grouping_hide.prevObject;
              for(var i = 0; i < grouping_hide.length; i++ ){
                if(grouping_hide[i].html()===""){
                  $(grouping_hide[i]).remove();

                }
              }
            }
          }
        }
      })
    }
  });

  if(sifaData.length === 0){

    $("._sifaxinxi").css("background-position","-41px -387px");
    $("._sifaxinxi > ._Finish_rate > p").html("0%");
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




  /*for(i in beizhuData){
  beizhuDataHtml = '<div class="swiper-slide"><div class="msg-content lh26 f14">' +
      '<div class="row"><div class="col-xs-5 text-right">日期</div><div class="col-xs-5 pl20 color-gray">'+ beizhuData[i].update +'</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">备注</div><div class="col-xs-5 pl20 color-gray">'+ beizhuData[i].memo +'</div></div>' +
      '</div><button class="client-icon edit btn-edit" data-itemid="'+ beizhuData[i].id +'" data-toggle="modal" data-target="#remarkModal"></button></div>'
  $("body .msg-container.beizhu .swiper-wrapper").append(beizhuDataHtml);
}*/
  for(var i=0;i<beizhuData.length;i++){
    if(beizhuData.length !==0){
      var  arr_length = beizhuData[0];
      var arr_no = [];
      for(var j in arr_length){
        // console.log(arr_length[j]);
        if(arr_length[j]==="0" || arr_length[j]==="")
          arr_no.push(arr_length[j])
        //console.log(arr_no);
      }
      var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
      var Empty  = parseFloat(arr_no.length);
      var baifenbi = (zongshu-Empty-2)/(zongshu-2);
      var baifenbi_ = baifenbi.toFixed(2);
      var baifenbi_xuqiu = (baifenbi_*100+""+"%")
      $("._qitaxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
    }
  }
  $("#_qitaxinxi").on("click",function(){
    var str = "备注";
    var update = [];

    $("body ._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
    $("._remove").html("")

    var _add = '<div class="msg-icon icon06 beizhu-add" data-toggle="modal" data-target="#remarkModal"><img src="images/increased.png" alt="">添加</div>';

    $("body ._col_1").append(str);
    $("._add").append(_add);
    for( var i in beizhuData){
      //update.push(beizhuData[i].update);
      var dataHtml = "";
      var compile = "";
      if(beizhuData[i].update ){
        update = `<div class=" swiper-slide" data-id="${beizhuData[i].id}">${beizhuData[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: '4',//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0, //默认边距

        });
        if($(".swiper-slide").css("width","222px")){
          $(".swiper-slide").css("width","100px")
        }
      }

      dataHtml = `<div class="needHtml">
           <div class="row _xuqiu_h" style="width:100%;">
            <div  class="col-xs-2 text-right">备注</div><div class="col-xs-10 pl20" style="white-space:normal;word-wrap:break-word">${beizhuData[i].memo}</div>
           </div>
      </div>`;
      compile = `<div class="beizhu"><button class="edit btn-edit needHtml-compile" data-itemid="${beizhuData[i].id}" data-toggle="modal" data-target="#remarkModal"><img src="images/compile.png" alt="">编辑</button></div>`;
      $("._customer_data").append(dataHtml);
      $("._remove").append(compile);
      //$("._remove").hide();
      var compile_one = $("._remove").find(".beizhu");
      $(compile_one[0]).show().siblings().hide()
      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".needHtml");
      $(_first[0]).show().siblings().hide();
      var bbb=$(this).parents("._nav_right").siblings("._client_information").find(".needHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()==="" || $(bbb[i]).find(".pl20").html() === "undefined"){
          $(bbb[i]).remove();
        }
      })
      var length8 = $(_first[0]).children("._xuqiu_h");//获取当前子元素
      var arrBox = [];
      for(var j = 0; j < length8.length; j+=8){//循环分组数据
        arrBox.push(length8.slice(j,j+8));
        $(".needHtml").append($("<div class='grouping grouping1'></div>"));
      }
      for(var k = 0; k < $(".grouping").length; k++){//遍历总div，在每个DIV追加元素
        $($(".grouping")[k]).html(arrBox[k]);
      }
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){//这里是按钮触发

        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){
          if($(arr[i]).find(".pl20").html() === "" || $(arr[i]).find(".pl20").html() === "undefined"){
            $(arr[i]).hide();
          }
        })
        for(var i in beizhuData){
          console.log(beizhuData[i]);
          var arrBox_1 = [];
          if(beizhuData[i].id ===  $(this).attr('data-id')){//如果当前data-id的值等于数据的id就做渲染数据操作
            var  arr_length = beizhuData[i];
            var arr_no = [];
            for(var j in arr_length){
              // console.log(arr_length[j]);
              if(arr_length[j]==="0"||arr_length[j]==="")
                arr_no.push(arr_length[j])
            }
            var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
            var Empty  = parseFloat(arr_no.length);
            var baifenbi = (zongshu-Empty-2)/(zongshu-2);
            var baifenbi_ = baifenbi.toFixed(2);
            var baifenbi_xuqiu = (baifenbi_*100+""+"%");
            $("._qitaxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
            $(this).addClass('_data').siblings().removeClass('_data');
            $("._customer_data").show();
            $("._remove").show();
            $('.needHtml:eq('+$(this).index()+')').show().siblings().hide();
            $('.beizhu:eq('+$(this).index()+')').show().siblings().hide();
            var length8_1= $('.needHtml:eq('+$(this).index()+')').children("._xuqiu_h");//第二次点击没有这个子元素为_xuqiu_h的东西
            for(var j = 0; j < length8_1.length; j+=8){//循环分组数据
              arrBox_1.push(length8_1.slice(j,j+8));
              $(".needHtml").append($("<div class='grouping' style='width: 550px'></div>"));
            }
            var grouping = [];
            for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
              $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              var _grouping = $( $('.needHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
              grouping.push(_grouping);
              var grouping_hide = $(grouping).find(".grouping");
              grouping_hide =grouping_hide.prevObject;
              for(var i = 0; i < grouping_hide.length; i++ ){
                if(grouping_hide[i].html()===""){
                  $(grouping_hide[i]).remove();
                }
              }
            }
          }
        }
      })
    }

  });
  if(beizhuData.length === 0){
    $("._qitaxinxi > ._Finish_rate > p").html("0%");
    $("._qitaxinxi").css("background-position","-41px -430px");
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
/*for(i in zhaiwuData){

  zhaiwuDataHtml = '' +
      '<div class="swiper-slide">' +
      '<div class="msg-content lh26 f14"><div class="xinyongka-msg">' +
      '<div class="row"><div class="col-xs-5 font-bold">信用卡</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">张数</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].zshu +'</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">总授信额</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].zsxe +'万元</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">单张最高授信额</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].dzzgsxe +'万元</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">当前已用</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].dqyyong +'元</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">近6个月均用</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].j6gyjyong +'万元</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">特殊状态</div><div class="col-xs-5 pl20 color-gray">' +
      '<div class="row"><div class="col-xs-12">呆帐'+ zhaiwuData[i].dzhang +'张</div><div class="col-xs-12">冻结'+ zhaiwuData[i].djie +'张</div><div class="col-xs-12">止付'+ zhaiwuData[i].zfu +'张</div></div></div></div></div><div class="xinyongdaikuan-msg">' +
      '<div class="row"><div class="col-xs-5 font-bold">信用贷款贷款</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">机构</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].jgou_c +'</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">公司</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].gsi_c +'</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">放款</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].fkuan_c +'</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">贷款金额</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].dkje +'万元</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">剩余本金</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].sybjin +'万元</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">放款时间</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].fksjian +'</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">贷款期限</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].dkqxian +'</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">还款方式</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].hkfshi +'</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">月供金额</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].ygje +'元</div></div></div><div class="xinyongdaikuan-msg">' +
      '<div class="row"><div class="col-xs-5 font-bold">对外担保</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">担保金额</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].dbje +'万元</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">担保类型</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].dblxing +'</div></div>' +
      '<div class="row"><div class="col-xs-5 text-right">担保状态</div><div class="col-xs-5 pl20 color-gray">'+ zhaiwuData[i].dbztai +'</div></div></div>' +
      '</div><button class="client-icon edit btn-edit" data-itemid="'+ zhaiwuData[i].id +'" data-toggle="modal" data-target="#debtMsgModal"></button></div>';$("body .msg-container.zhaiwu .swiper-wrapper").append(zhaiwuDataHtml);
}*/
  $("#_zhaiwuxinxi").on("click",function(){
    var str = "债务信息";
    var update = [];

    $("body ._col_1").html("");
    $("._add").html("");
    $("._main > .swiper-wrapper").html("");
    $("._customer_data").html("");
    $("._remove").html("")

    var _add = '<div class="msg-icon icon06 zhaiwu-add" data-toggle="modal" data-target="#debtMsgModal"><img src="images/increased.png" alt="">添加</div>';

    $("body ._col_1").append(str);
    $("._add").append(_add);
    for( var i in zhaiwuData){
      var dataHtml = "";
      var compile = "";
      var dblxing = zhaiwuData[i].dblxing==1?'抵押担保':'信用担保';
      var dbztai = "";
      var ifshowcard='';
      switch(zhaiwuData[i].dbztai){
          case 1:
              dbztai = '正常';
              break;
          case 2:
              dbztai = '关注';
              break;
          case 3:
              dbztai = '次数';
              break;
          case 4:
              dbztai = '可疑';
              break;
          case 5:
              dbztai = '损失';
              break;
      }
      var hkfshi = zhaiwuData[i].hkfshi==0?'':zhaiwuData[i].hkfshi==1?'等额本息':zhaiwuData[i].hkfshi==2?'等额本金':zhaiwuData[i].hkfshi==3?'先息后本':'到期还本付息';
      var dkqxian = zhaiwuData[i].dkqxian==0?'':zhaiwuData[i].dkqxian==1?'3期':zhaiwuData[i].dkqxian==2?'6期':zhaiwuData[i].dkqxian==3?'12期':zhaiwuData[i].dkqxian==4?'24期':zhaiwuData[i].dkqxian==5?'36期':zhaiwuData[i].dkqxian==6?'48期':'60期';

      if(zhaiwuData[i].update ){
        update = `<div class=" swiper-slide" data-id="${zhaiwuData[i].id}">${zhaiwuData[i].update}</div>`;
        $("._main > .swiper-wrapper").append(update);
        var swiper1 = new Swiper('._main ', {
          //pagination: '.swiper-pagination',//哪里设置分页器
          slidesPerView: 4,//当前显示几个
          centeredSlides: true,//默认第一块居中
          paginationClickable: true,//点击小点可以滑动
          spaceBetween:0 //默认边距
        });
        if($(".swiper-slide").css("width","222px")){
          $(".swiper-slide").css("width","100px")
        }
      }
        if(zhaiwuData[i].xyka!=1){
            ifshowcard = 'hidden'
        }

      dataHtml = `<div class="zhaiwuHtml">
      <div class="row zhaiwu_fenzu">
          <div class="col-xs-4 _color ${ifshowcard}">
             <div class=" _xuqiu_h">
                <h4><b>信用卡</b></h4>
              </div>
            
              <div class="row _xuqiu_h">
                <div class="col-xs-5 text-right">张数</div><div class="col-xs-5 pl20">${zhaiwuData[i].zshu}</div>
              </div>

               <div class="row _xuqiu_h">
                <div  class="col-xs-5 text-right">总授信额</div><div class="col-xs-5 pl20">${zhaiwuData[i].zsxe}万元</div>
               </div>

               <div class="row _xuqiu_h">
                <div class="col-xs-5 text-right">单张最高授信额</div><div class="col-xs-5 pl20">${zhaiwuData[i].dzzgsxe}万元</div>
               </div>

               <div class="row _xuqiu_h">
                <div  class="col-xs-5 text-right">当前已用</div><div class="col-xs-5 pl20">${zhaiwuData[i].dqyyong}元</div>
               </div>

               <div class="row _xuqiu_h">
                <div class="col-xs-5 text-right">近6个月均用</div><div class="col-xs-5 pl20">${zhaiwuData[i].j6gyjyong}万元</div>
               </div>

               <div class="row _xuqiu_h">
                <div  class="col-xs-5 text-right">特殊状态</div><div class="col-xs-5 pl20"><div class="col-xs-12">呆帐${zhaiwuData[i].dzhang}张</div><div class="col-xs-12">冻结${zhaiwuData[i].djie}张</div><div class="col-xs-12">止付${zhaiwuData[i].zfu}张</div></div>
               </div>
               
          </div>

          <div class="col-xs-4 _color">
              <div class="row _xuqiu_h">
                  <h4><b>信用贷款</b></h4>
                </div>

              <div class="row _xuqiu_h">
                <div class="col-xs-5 text-right">机构</div><div class="col-xs-5 pl20">${zhaiwuData[i].jgou_c}</div>
              </div>

               <div class="row _xuqiu_h">
                <div  class="col-xs-5 text-right">公司</div><div class="col-xs-5 pl20">${zhaiwuData[i].gsi_c}</div>
               </div>

               <div class="row _xuqiu_h">
                <div class="col-xs-5 text-right">放款</div><div class="col-xs-5 pl20">${zhaiwuData[i].fkuan_c}</div>
               </div>

               <div class="row _xuqiu_h">
                <div  class="col-xs-5 text-right">贷款金额</div><div class="col-xs-5 pl20">${zhaiwuData[i].dkje}万元</div>
               </div>

               <div class="row _xuqiu_h">
                <div class="col-xs-5 text-right">剩余本金</div><div class="col-xs-5 pl20">${zhaiwuData[i].sybjin}万元</div>
               </div>

               <div class="row _xuqiu_h">
                <div class="col-xs-5 text-right">放款时间</div><div class="col-xs-5 pl20">${zhaiwuData[i].fksjian}</div>
              </div>

               <div class="row _xuqiu_h">
                <div  class="col-xs-5 text-right">贷款期限</div><div class="col-xs-5 pl20">${dkqxian}</div>
               </div>

               <div class="row _xuqiu_h">
                <div class="col-xs-5 text-right">还款方式</div><div class="col-xs-5 pl20">${hkfshi}</div>
               </div>

               <div class="row _xuqiu_h">
                <div  class="col-xs-5 text-right">月供金额</div><div class="col-xs-5 pl20">${zhaiwuData[i].ygje}万元</div>
               </div>
          </div>
             <div class="col-xs-3 _color">
                <div class="row _xuqiu_h">
                  <h4><b>信用贷款</b></h4>
                </div>

                <div class="row _xuqiu_h">
                  <div  class="col-xs-5 text-right">担保金额</div><div class="col-xs-5 pl20">${zhaiwuData[i].dbje}万元</div>
                </div>

               <div class="row _xuqiu_h">
                <div class="col-xs-5 text-right">担保类型</div><div class="col-xs-5 pl20">${dblxing}</div>
               </div>

               <div class="row _xuqiu_h">
                <div  class="col-xs-5 text-right">担保状态</div><div class="col-xs-5 pl20">${dbztai}</div>
               </div>
             </div>
      </div>

      </div>`;
      compile = `<div class="zhaiwu"><button class="edit btn-edit needHtml-compile" data-itemid="${zhaiwuData[i].id}" data-toggle="modal" data-target="#debtMsgModal"><img src="images/compile.png" alt="">编辑</button></div>`;
      $("._customer_data").append(dataHtml);

      $("._remove").append(compile);
      // $("._customer_data").hide();
      // $("._customer_data").find(".needHtml").first().show();
      //$("._remove").hide();
      var compile_one = $("._remove").find(".zhaiwu");
      $(compile_one[0]).show().siblings().hide()
      var gaoliang = $("._client_top > ._main > div").find("div");
      $(gaoliang[0]).addClass("_data");
      var _first = $("._customer_data").find(".zhaiwuHtml");
      $(_first[0]).show().siblings().hide();
      var bbb=$(this).parents("._nav_right").siblings("._client_information").find(".zhaiwuHtml").find("._xuqiu_h");//获取当前对应的_xuqiu_h DIV样式
      bbb.each(function(i){//循环当前的样式
        if($(bbb[i]).find(".pl20").html()==="" || $(bbb[i]).find(".pl20").html() === "undefined" || $(bbb[i]).find(".pl20").html() === "0" || $(bbb[i]).find(".pl20").html() === "0万元" || $(bbb[i]).find(".pl20").html() === "未知"){
          $(bbb[i]).remove();
        }
      })
      $("._main  .swiper-wrapper  .swiper-slide").on("click",function(){
        for( var i in zhaiwuData){
          if(zhaiwuData[i].id === $(this).attr("data-id")){
            var  arr_length = zhaiwuData[i];
            var arr_no = [];
            for(var j in arr_length){
              // console.log(arr_length[j]);
              if(arr_length[j]==="0"||arr_length[j]==="")
                arr_no.push(arr_length[j])
            }
            var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
            var Empty  = parseFloat(arr_no.length);
            var baifenbi = (zongshu-Empty-2)/(zongshu-2);
            var baifenbi_ = baifenbi.toFixed(2);
            var baifenbi_xuqiu = (baifenbi_*100+""+"%");
            $("._zhaiwuxinxi  > ._Finish_rate > p").html(baifenbi_xuqiu);
          }
        }
        $(this).addClass('_data').siblings().removeClass('_data');
        $("._customer_data").show();
        $("._remove").show();
        $('.zhaiwuHtml:eq('+$(this).index()+')').show().siblings().hide();
        $('.zhaiwu:eq('+$(this).index()+')').show().siblings().hide();
        var arr = $(this).parents("#_headers_").siblings("#_main_").find("._xuqiu_h");
        arr.each(function(i){
          console.log($(arr[i]).find(".pl20"));
          if($(arr[i]).find(".pl20").html() === "" || $(arr[i]).find(".pl20").html() === "undefined" || $(arr[i]).find(".pl20").html() === "0"|| $(arr[i]).find(".pl20").html() === "0万元" || $(arr[i]).find(".pl20").html() === "未知"){
            $(arr[i]).hide();
          }
        })
        var grouping = [];
        for(var k = 0; k < $('.needHtml:eq(' + $(this).index() + ')').children('.grouping').length; k++){//遍历总div，在每个DIV追加元素
          $( $('.zhaiwuHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
          var _grouping = $( $('.zhaiwuHtml:eq(' + $(this).index() + ')').children('.grouping')[k]).html(arrBox_1[k]);
          grouping.push(_grouping);
          var grouping_hide = $(grouping).find(".grouping");
          grouping_hide =grouping_hide.prevObject;
          for(var i = 0; i < grouping_hide.length; i++ ){
            if(grouping_hide[i].html()===""){
              $(grouping_hide[i]).remove();
            }
          }
        }
      })
    }

  });
  for(var i=0;i<zhaiwuData.length;i++){
    if(zhaiwuData.length !==0){
      var  arr_length = zhaiwuData[0];

      var arr_no = [];
      for(var j in arr_length){
        if(arr_length[j]==="0" || arr_length[j]==="")
          arr_no.push(arr_length[j])
      }
      /* for(let  [k,v] of Object.entries(arr_length)){
       //console.log(k+" "+v);
       if(v==="0" || v===""){
       arr_no.push(v);
       }
       }*/
      var zongshu = parseFloat(Object.getOwnPropertyNames(arr_length).length);
      var Empty  = parseFloat(arr_no.length);
      var baifenbi = (zongshu-Empty-2)/(zongshu-2);
      var baifenbi_ = baifenbi.toFixed(2);
      var baifenbi_xuqiu = (baifenbi_*100+""+"%");
      $("._zhaiwuxinxi > ._Finish_rate > p").html(baifenbi_xuqiu);
    }
  }
  if(zhaiwuData.length === 0){
    $("._zhaiwuxinxi > ._Finish_rate > p").html("0%");
    $("._zhaiwuxinxi").css("background-position","-41px -301px");
  }


/* 点击信息弹窗 */
  setTimeout(function () {
    $(".msg-container").css('opacity', 1).hide();
  }, 50)

  $(".item-need").click(function () {//客户需求
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
  console.log(contractData);
  /*for(var i = 0; i < contractData.codelist.length; i++){
    for( var j = 0; j < contractData.list.length; j++){
      if(contractData.codelist[i].code === contractData.list[j].code){
        console.log(contractData.list[j]);
      }
    }
  }*/
$("._zhang").on("click",function(e) {
  e.preventDefault();
  var code_Arr = [];
  var s = [];
  for (var k = 0; k < contractData.list.length; k++) {
    code_Arr.push(contractData.list[k].code);
    //console.log(code_Arr);
  }
  for(var j = 0 ;j<code_Arr.length; j++){
    if(s.indexOf(code_Arr[j])===-1){
      s.push(code_Arr[j])
    }
  }
  for(var s_arr=0;s_arr < s.length ;s_arr++){
    var count;
    $("#contract_Num_type").html("");
    $.each($("#contract_Num_type"), function (i, item) {
      if (s[s_arr]) {
        count += '<option value="' + s[s_arr] + '">' + s[s_arr] + '</option>';
        $("#contract_Num_type").append(count);
      }
    })
  }
  //console.log(count);


  $("body").on("click",".contract_accomplish",function(e){
    e.stopPropagation();
    $(".contract_compile").show();
    $(".up_date").show();
    $(".contract_btn").show();
    $(".contract_compile_btn").hide();
    $(".contract_accomplish").hide();
  })
  $("#contract_Num_type").val(function(){
    var child = $("#contract_Num_type").find("option").eq(0).val()
    return child;
  })

  $("#contract_Num_type").trigger("change");

})
  $("#contract_Num_type").change(function(e){
    e.preventDefault();
    var ContractDataHtml_1 = "";
    var ContractDataHtml_2 = "";
    var ContractDataHtml_3 = "";
    var ContractDataHtml_4 = "";
    var ContractDataHtml_5 = "";
    var ContractDataHtml_6 = "";
    for( var i = 0; i < contractData.codelist.length; i++){
      if(contractData.codelist[i].code === $(this).val())
        var Percentage_Rate = contractData.codelist[i].feilv;
      $(".Percentage_Rate").html(Percentage_Rate+"%");
    }
    for(var j = 0; j < contractData.list.length; j++){
      console.log($(this).val());
      var str = contractData.list[j].wjian;
      var filename_id = contractData.list[j].title;
      var arr = str.split("/");
      var filename_arr = filename_id.split("/");
      var picture_file = arr[arr.length - 1];
      var filename =filename_arr[filename_arr.length - 1];
      var arr2 = str.split(".");
      var image_format = arr2[arr2.length - 1];
      if(contractData.list[j].code === $(this).val()){
        //console.log(contractData.list[j].code);
        $(".ContractDataHtml_1").html("");
        $(".ContractDataHtml_2").html("");
        $(".ContractDataHtml_3").html("");
        $(".ContractDataHtml_4").html("");
        $(".ContractDataHtml_5").html("");
        $(".ContractDataHtml_6").html("");
        //var zllxing = contactTypeArr[contractData.list[i].zllxing - 1];


        if(contractData.list[j].zllxing === "1"){
          ContractDataHtml_1 =  ContractDataHtml_1 +'<li data-contactid="' + contractData.list[j].id + '"><div class="row  lh34"><div><div class="row mt5 lh34 Contract_DTD"><div class="col-xs-offset-1 col-xs-1 text-right  Image_type"> </div><div class="col-xs-8 file_name_type"><a class="btn-orange File_Moniker" target="_blank" href="' + contractData.list[j].wjian + '" data-imgurl="' + contractData.list[j].wjian + '"> ' + filename + '</a></div><div class="col-xs-2 up_date">' + contractData.list[j].update + '</div><div class="col-xs-2 contract_compile_btn" style="display: none"><span class="change-btn" style="color: #337ab7; cursor: pointer" data-contactid="' + contractData.list[j].id + '" data-toggle="modal" data-target="#contractModal">重新上传</span> <span class="delete_btn" style="color: #337ab7; cursor: pointer" data-contactid="' + contractData.list[j].id + '">删除</span></div></div></li>'
        }
        if(contractData.list[j].zllxing === "3"){
          ContractDataHtml_3 =  ContractDataHtml_3 +'<li data-contactid="' + contractData.list[j].id + '"><div class="row  lh34"><div><div class="row mt5 lh34 Contract_DTD"><div class="col-xs-offset-1 col-xs-1 text-right  Image_type"> </div><div class="col-xs-8 file_name_type"><a class="btn-orange File_Moniker" target="_blank" href="' + contractData.list[j].wjian + '" data-imgurl="' + contractData.list[j].wjian + '"> ' + filename + '</a></div><div class="col-xs-2 up_date">' + contractData.list[j].update + '</div><div class="col-xs-2 contract_compile_btn" style="display: none"><span class="change-btn" style="color: #337ab7; cursor: pointer" data-contactid="' + contractData.list[j].id + '" data-toggle="modal" data-target="#contractModal">重新上传</span> <span class="delete_btn" style="color: #337ab7; cursor: pointer" data-contactid="' + contractData.list[j].id + '">删除</span></div></div></li>'
        }
        if(contractData.list[j].zllxing === "4"){
          ContractDataHtml_4 =  ContractDataHtml_4 +'<li data-contactid="' + contractData.list[j].id + '"><div class="row  lh34"><div><div class="row mt5 lh34 Contract_DTD"><div class="col-xs-offset-1 col-xs-1 text-right  Image_type"> </div><div class="col-xs-8 file_name_type"><a class="btn-orange File_Moniker" target="_blank" href="' + contractData.list[j].wjian + '" data-imgurl="' + contractData.list[j].wjian + '"> ' + filename + '</a></div><div class="col-xs-2 up_date">' + contractData.list[j].update + '</div><div class="col-xs-2 contract_compile_btn" style="display: none"><span class="change-btn" style="color: #337ab7; cursor: pointer" data-contactid="' + contractData.list[j].id + '" data-toggle="modal" data-target="#contractModal">重新上传</span> <span class="delete_btn" style="color: #337ab7; cursor: pointer" data-contactid="' + contractData.list[j].id + '">删除</span></div></div></li>'
        }
        if(contractData.list[j].zllxing === "5"){
          ContractDataHtml_5 =  ContractDataHtml_5 +'<li data-contactid="' + contractData.list[j].id + '"><div class="row  lh34"><div><div class="row mt5 lh34 Contract_DTD"><div class="col-xs-offset-1 col-xs-1 text-right  Image_type"> </div><div class="col-xs-8 file_name_type"><a class="btn-orange File_Moniker" target="_blank" href="' + contractData.list[j].wjian + '" data-imgurl="' + contractData.list[j].wjian + '"> ' + filename + '</a></div><div class="col-xs-2 up_date">' + contractData.list[j].update + '</div><div class="col-xs-2 contract_compile_btn" style="display: none"><span class="change-btn" style="color: #337ab7; cursor: pointer" data-contactid="' + contractData.list[j].id + '" data-toggle="modal" data-target="#contractModal">重新上传</span> <span class="delete_btn" style="color: #337ab7; cursor: pointer" data-contactid="' + contractData.list[j].id + '">删除</span></div></div></li>'
        }
        if(contractData.list[j].zllxing === "2"){
          ContractDataHtml_2 =  ContractDataHtml_2 +'<li data-contactid="' + contractData.list[j].id + '"><div class="row  lh34"><div><div class="row mt5 lh34 Contract_DTD"><div class="col-xs-offset-1 col-xs-1 text-right  Image_type"> </div><div class="col-xs-8 file_name_type"><a class="btn-orange File_Moniker" target="_blank" href="' + contractData.list[j].wjian + '" data-imgurl="' + contractData.list[j].wjian + '"> ' + filename + '</a></div><div class="col-xs-2 up_date">' + contractData.list[j].update + '</div><div class="col-xs-2 contract_compile_btn" style="display: none"><span class="change-btn" style="color: #337ab7; cursor: pointer" data-contactid="' + contractData.list[j].id + '" data-toggle="modal" data-target="#contractModal">重新上传</span> <span class="delete_btn" style="color: #337ab7; cursor: pointer" data-contactid="' + contractData.list[j].id + '">删除</span></div></div></li>'
        }
        if(contractData.list[j].zllxing === "6"){
          ContractDataHtml_6 =  ContractDataHtml_6 +'<li data-contactid="' + contractData.list[j].id + '"><div class="row  lh34"><div><div class="row mt5 lh34 Contract_DTD"><div class="col-xs-offset-1 col-xs-1 text-right  Image_type"> </div><div class="col-xs-8 file_name_type"><a class="btn-orange File_Moniker" target="_blank" href="' + contractData.list[j].wjian + '" data-imgurl="' + contractData.list[j].wjian + '"> ' + filename + '</a></div><div class="col-xs-2 up_date">' + contractData.list[j].update + '</div><div class="col-xs-2 contract_compile_btn" style="display: none"><span class="change-btn" style="color: #337ab7; cursor: pointer" data-contactid="' + contractData.list[j].id + '" data-toggle="modal" data-target="#contractModal">重新上传</span> <span class="delete_btn" style="color: #337ab7; cursor: pointer" data-contactid="' + contractData.list[j].id + '">删除</span></div></div></li>'
        }
        $(".ContractDataHtml_1").append(ContractDataHtml_1);
        $(".ContractDataHtml_2").append(ContractDataHtml_2);
        $(".ContractDataHtml_3").append(ContractDataHtml_3);
        $(".ContractDataHtml_4").append(ContractDataHtml_4);
        $(".ContractDataHtml_5").append(ContractDataHtml_5);
        $(".ContractDataHtml_6").append(ContractDataHtml_6);
        var contract_li_1 = $(".ContractDataHtml_1").find("li");//清除相同的输出li
        for(var l=0;l<contract_li_1.length;l++){
          if($(contract_li_1[0]).data("contactid") == $(contract_li_1[l+1]).data("contactid")){
            $(contract_li_1[l + 1]).hide();
          }
        }

        var contract_li_2 = $(".ContractDataHtml_2").find("li");//清除相同的输出li
        for(var l=0;l<contract_li_2.length;l++){
          if($(contract_li_2[0]).data("contactid") == $(contract_li_2[l+1]).data("contactid")){
            $(contract_li_2[l + 1]).hide();
          }
        }
        var contract_li_3 = $(".ContractDataHtml_3").find("li");//清除相同的输出li
        for(var l=0;l<contract_li_3.length;l++){
          if($(contract_li_3[0]).data("contactid") == $(contract_li_3[l+1]).data("contactid")){
            $(contract_li_3[l + 1]).hide();
          }
        }
        var contract_li_4 = $(".ContractDataHtml_4").find("li");//清除相同的输出li
        for(var l=0;l<contract_li_4.length;l++){
          if($(contract_li_4[0]).data("contactid") == $(contract_li_4[l+1]).data("contactid")){
            $(contract_li_4[l + 1]).hide();
          }
        }
        var contract_li_5 = $(".ContractDataHtml_5").find("li");//清除相同的输出li
        for(var l=0;l<contract_li_5.length;l++){
          if($(contract_li_5[0]).data("contactid") == $(contract_li_5[l+1]).data("contactid")){
            $(contract_li_5[l + 1]).hide();
          }
        }
        var contract_li_6 = $(".ContractDataHtml_6").find("li");//清除相同的输出li
        for(var l=0;l<contract_li_6.length;l++){
          if($(contract_li_6[0]).data("contactid") == $(contract_li_6[l+1]).data("contactid")){
            $(contract_li_6[l + 1]).hide();
          }
        }
        var Image_type =$(".Image_type");
        var Moniker = $(".Contract_DTD .File_Moniker");
        for(var t = 0; t < Moniker.length; t++){
          if(Moniker[t]){
            var photo = $(Moniker[t]).html().split("/");
            var photo_type = photo[photo.length-1];
            photo_type = photo_type.split(".");
            photo_type = photo_type[photo_type.length-1];
            // console.log(photo_type);
            $(Moniker[t]).parents(".Contract_DTD").find(".Image_type").css("background-image", "url(images/" + photo_type + ".png)");
          };
        }

      }
    }

    if($(".ContractDataHtml_2").html()){
      $(".ContractDataHtml_2").prev().show();
    }
    if($(".ContractDataHtml_3").html()){
      $(".ContractDataHtml_3").prev().show();
    }
    if($(".ContractDataHtml_4").html()){
      $(".ContractDataHtml_4").prev().show();
    }
    if($(".ContractDataHtml_5").html()){
      $(".ContractDataHtml_5").prev().show();
    }
    if($(".ContractDataHtml_6").html()){
      $(".ContractDataHtml_6").prev().show();
    }
    if($(".ContractDataHtml_1").html()){
      $(".ContractDataHtml_1").prev().show();
    }
    if(!$(".ContractDataHtml_1").html()){
      $(".ContractDataHtml_1").prev().hide();
    }
    if(!$(".ContractDataHtml_2").html()){
      $(".ContractDataHtml_2").prev().hide();
    }
    if(!$(".ContractDataHtml_3").html()){
      $(".ContractDataHtml_3").prev().hide();
    }
    if(!$(".ContractDataHtml_4").html()){
      $(".ContractDataHtml_4").prev().hide();
    }
    if(!$(".ContractDataHtml_5").html()){
      $(".ContractDataHtml_5").prev().hide();
    }
    if(!$(".ContractDataHtml_6").html()){
      $(".ContractDataHtml_6").prev().hide();
    }
    $("body").on("click",".contract_compile",function(e){
      e.stopPropagation();
      $(".contract_compile").hide();
      $(".up_date").hide();
      $(".contract_btn").hide();
      $(".contract_compile_btn").show();
      $(".contract_accomplish").show();
    })
  })

  $("#contract_Modal_one_btn").click(function(){

    console.log("jinrudonghua");
    $("#contract_Modal_one").animate({
      height:'toggle'
    });
  });
$(".client-icon.zhang").click(function(){

  $(".modal-body .contract-content").html('');
  $(".hetong-form").attr('value', "addcontracts");
  $("#contractModal .btn-add").text('添加');
  $("#contractModal .filename").text('');

  setTimeout(function(){
    $(".modal-body .contract-content").append(contractDataHtml);
    //$(".modal-body .change-btn").hide();
  }, 300);
})


function getFileName(path){
    var pos = path.lastIndexOf("\\");
  //console.log(pos);
  return path.substring(pos+1);
}

$('#_zhang').change(function(){
  var filePath = $("#contractUpload").val();
  console.log(filePath);
  var fileName = getFileName(filePath);
  /*function getFileName(path){
    var pos = path.lastIndexOf("\\");
    return path.substring(pos+1);  
  }*/
  console.log(fileName)
  $("#contractModal .filename").text(fileName);
})
$("body").on("click","#contractModal .btn-add",function(){
  var form = new FormData($("#contractForm")[0]);
  $.ajax({
    url:window.location.href,
    type:"POST",
    data:form,
    async:false,
    cache:false,
    dataType:"json",
    contentType:false,
    processData:false,
    success:function(returndata){
      contractData = returndata;
      var code_Arr = [];
      var s = [];
      for (var k = 0; k < contractData.list.length; k++) {
        code_Arr.push(contractData.list[k].code);
        //console.log(code_Arr);
      }
      for(var j = 0 ;j<code_Arr.length; j++){
        if(s.indexOf(code_Arr[j])===-1){
          s.push(code_Arr[j])
        }
      }
      for(var s_arr=0;s_arr < s.length ;s_arr++){
        var count;
        $("#contract_Num_type").html("");
        $.each($("#contract_Num_type"), function (i, item) {
          if (s[s_arr]) {
            count += '<option value="' + s[s_arr] + '">' + s[s_arr] + '</option>';
          }
          $("#contract_Num_type").append(count);
        })
      }
      //console.log(count);


      $("body").on("click",".contract_accomplish",function(e){
        e.stopPropagation();
        $(".contract_compile").show();
        $(".up_date").show();
        $(".contract_btn").show();
        $(".contract_compile_btn").hide();
        $(".contract_accomplish").hide();
      })
      //添加默认返回第一个option值
    /*  $("#contract_Num_type").val(function(){
        var child = $("#contract_Num_type").find("option").eq(0).val();
        console.log(child);
        return child;
      })
      $("#contract_Num_type").trigger("change");*/

      //添加默认返回对应的添加值
      $("#contract_Num_type").val(function(){
        var child = $("#contract_Num_type").find("option");
        console.log(child);
        for(var i = 0; i < child.length; i++){
          if($(child[i]).html()==contractData.last_code){
            return $(child[i]).html();
          }
        }
      })
      //触发下拉框对应数据
      $("#contract_Num_type").trigger("change");

      alert("添加成功")
      console.log(contractData);
      $('#contractModal').modal('hide');
      dataMsgInit();
    },
    error:function(returndata){
      console.log(returndata);
      alert("合同添加失败");
    }
  })
})
  
  $("#contract_btn").click(function(e){
    $("#creditModal .btn-add").text('添加');
    //addMessage("#contractModal .hetong-form", "#contractModal .contract_btn ", 'addcontracts');
    $("#contractModal input[name='ipt-code']").val("");
    $("#contractModal input[name='ipt-feilv']").val("");
    $("#contactTypeSel").val("");
    if($('#contractForm').find('input[type=file]').attr('multiple')==undefined){
        $('#contractForm').find('input[type=file]').attr('multiple','true')
    }

  })
  $("body").on("click",".Contract_DTD .delete_btn",function(){
    var _this = this;
    var contractId = $(this).data("contactid");
    console.log(contractId);
    var r=confirm("提示：是否删除该信息内容？")
    if (r==true)
    {
      $.ajax({
        'type':"GET",
        "url":'customer-detail.php?id='+ contractId +'&action=delcontracts',
        'dataType':'json',
        "success":function(response){
          var data = response;
          console.log($(_this).parent().parent().parent().parent().parent());
          $(_this).parent().parent().parent().parent().remove();
          for(var d = 0; d < contractData.list.length; d++){
            console.log(contractData.list[d].id);
            if(contractId == contractData.list[d].id){
              console.log(contractData.list[d]);
              contractData.list.splice(d , 1)
            }
          }
          dataMsgInit();
        },
        'error':function(){
          alert("合同信息删除请求出错");
        }
      })
      alert("删除成功")
    }
    else
    {
      return false;
      alert("取消删除")
    }

  })
$('body').on('click', ".Contract_DTD .change-btn", function(){

  var contractId = $(this).data("contactid");
  console.log(contractId);
  $(".hetong-form").attr('value', "savecontracts");
  $(".ipt-id").val(contractId);
  $("#contractModal .btn-add").text('保存');
  $('#contractForm').find('input[type=file]').removeAttr('multiple');
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
          $("#contractModal input[name='ipt-code']").val(data.code);
          $("#contractModal input[name='ipt-feilv']").val(data.feilv);
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

  $("#contractModal form #contactCode").blur(function(){
    if($(this).is("#contactCode")){
      var $parent = $(this).parent();
      $parent.find(".msg").remove(); //删除以前的提醒元素
      if($.trim(this.value)==""){
        var errorMsg = "请填写一个合同编号";
        $parent.append("<span class='msg onError'>"+errorMsg+"</span>")
      } else{
        var okMsg=" 输入正确";
        $parent.find(".high").remove();
        $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
      }
    }
  }).keyup(function(){
    $(this).triggerHandler("blur");
  }).focus(function(){
    $(this).triggerHandler("blur");
  })
 $("#contactCode").focus(function(){
   for( i in contractData){
     console.log(contractData);
     $(".contactLastCode").text("");
     $(".contactLastCode").text(contractData.last_code);
     $(".contactLastCode").show();
     $("body").on("click",".contactLastCode",function(){
       $("#contactCode").val($(".contactLastCode").text());

       if($("#contactCode").val()===contractData.last_code){
         $("#contactFeilv").val(contractData.last_feilv);
         $(".contactLastCode").next().text("输入正确").css("color","#00aa00");
         if($("#contactFeilv").val() === contractData.last_feilv){
           var $parent = $("#contactFeilv").parent();
           $parent.find(".msg").remove(); //删除以前的提醒元素
           var okMsg=" 输入正确";
           $parent.find(".high").remove();
           $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
         }
       }else if($("#contactCode").val()!==contractData.last_code){
         console.log("空值")
         $("#contactFeilv").val("")
       }

       $(".contactLastCode").hide();
     })
   }

 })
  $("#contactCode").on('input',function(){
    console.log($("#contactCode").val());
    for( i in contractData){
      if($("#contactCode").val()!==contractData.last_code){
          $(".contactLastCode").hide();
      }
    }
  })

  $("#contractModal .btn-add").click(function(){
    $("#contractModal form #contactCode").trigger("blur");
    var numError = $("#contractModal form #contactCode").val();
    if(numError === ""){
      return false;
    }
  })

  $("#contractModal form #contactFeilv").blur(function(){
    if($(this).is("#contactFeilv")){
      var $parent = $(this).parent();
      $parent.find(".msg").remove(); //删除以前的提醒元素
      if($.trim(this.value)==""){
        var errorMsg = "请填写一个费率";
        $parent.append("<span class='msg onError'>"+errorMsg+"</span>")
      } else{
        var okMsg=" 输入正确";
        $parent.find(".high").remove();
        $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
      }
    }
  }).keyup(function(){
    $(this).triggerHandler("blur");
  }).focus(function(){
    $(this).triggerHandler("blur");
  })

  $("#contractModal .btn-add").click(function(){
    $("#contractModal form #contactFeilv").trigger("blur");
    var numError = $("#contractModal form #contactFeilv").val();
    if(numError === ""){
      return false;
    }
  })

  $("#contractModal form #contactTypeSel").blur(function(){
    if($(this).is("#contactTypeSel")){
      var $parent = $(this).parent();
      $parent.find(".msg").remove(); //删除以前的提醒元素
      if($.trim(this.value)==""){
        var errorMsg = "请选择一个类型";
        $parent.append("<span class='msg onError'>"+errorMsg+"</span>")
      } else{
        var okMsg=" 输入正确";
        $parent.find(".high").remove();
        $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
      }
    }
  }).keyup(function(){
    $(this).triggerHandler("blur");
  }).focus(function(){
    $(this).triggerHandler("blur");
  })

  $("#contractModal .btn-add").click(function(){
    $("#contractModal form #contactTypeSel").trigger("blur");
    var numError = $("#contractModal form #contactTypeSel").val();
    if(numError === ""){
      return false;
    }
  })



  $("#contractModal .btn-add").click(function(){
    $("#contractModal form #contactCode").trigger("blur");
    var numError = $("#contractModal form #contactCode").val();
    if(numError === ""){
      return false;
    }
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
/*var zichanDataHtml = '';
for(i in zichanData){
  console.log(zichanData[i]);
  var zllxing = dataTypeArr[zichanData[i].zllxing - 1];
  console.log(zllxing);
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
})*/

var dataMsgInit = function(){
  $('._personage button').removeClass('active');
    if(zichanData.length > 0){$("._wu").addClass('active')}
    if(contractData.list.length > 0){$("._zhang").addClass('active')}
    if(bankCardData.length > 0){$("._card").addClass('active')}
    if(zhengxinDataL.length > 0){$("._zheng").addClass('active')}
    if(idcardsData.length > 0){$("._shen").addClass('active')}
}

dataMsgInit();

function readZichanData(zichanData){
  $('#assets_MsgModal .t_main').html('');
  var htmlObj = [];
    dataTypeArr.forEach(function(data,index){
        htmlObj[index] = {type: data, str:''};
    })

    for(var i in zichanData){
        var filename = zichanData[i].title.split("/").pop();
        var image;

        switch(filename.split('.')[1]){
            case 'jpeg':
                image = 'icon_type_jpeg';
                break;
            case 'jpg':
                image = 'icon_type_jpg';
                break;
            case 'png':
                image = 'icon_type_png';
                break;
            case 'pdf':
                image = 'icon_type_pdf';
                break;
            default:
                image = 'png';
                break;
        }
        var zlHtml = '<li data-zichanid="' + zichanData[i].id + '"><div class="row  lh34"><div><div class="row mt5 lh34 assets_DTD"><div class="col-xs-offset-1 col-xs-1 text-right '+ image +'"> </div><div class="col-xs-8 file_name_type"><a class="btn-orange File_Moniker" target="_blank" href="customer-file-show.php?module=assets&fileid=' + zichanData[i].id + '" data-imgurl="' + zichanData[i].wjian + '"> ' + filename + '</a></div><div class="col-xs-2 up_date">' + zichanData[i].update + '</div><div class="col-xs-2 assets_compile_btn" style="display: none"><span class="change-btn" style="color: #337ab7; cursor: pointer" data-zichanid="' + zichanData[i].id + '" data-toggle="modal" data-target="#assetsMsgModal">重新上传</span> <span class="delete_btn" style="color: #337ab7; cursor: pointer" data-zichanid="' + zichanData[i].id + '">删除</span></div></div></li>';
        htmlObj[zichanData[i].zllxing - 1].str += zlHtml;
    }

    htmlObj.forEach(function(item){
        if(item.str!=""){
            $('#assets_MsgModal .t_main').append('<div class="text_type">'+ item.type +'</div><div>'+ item.str +'</div>');
        }
    })
}

$("._wu").on("click",function(){
    readZichanData(zichanData)

});

$("body").on("click","#assets_MsgModal .assets_compile ",function(e){
    e.stopPropagation();
    $("#assets_MsgModal .assets_compile_btn,.assets_accomplish").show();
    $("#assets_MsgModal .up_date,.assets_btn,.assets_compile").hide();
})

$("body").on("click","#assets_MsgModal .assets_accomplish",function(e){
    e.stopPropagation();
    $("#assets_MsgModal .assets_compile_btn,.assets_accomplish").hide();
    $("#assets_MsgModal .up_date,.assets_btn,.assets_compile").show();
})

$("body").on("click","#assetsMsgModal .btn-add",function(){
  var form = new FormData($("#assetsForm")[0]);
  $.ajax({
      url: window.location.href,
      type: 'POST',
      data: form,
      async: false,
      cache: false,
      dataType:"json",
      contentType: false,
      processData: false,
      success: function (returndata) {
        console.log("添加成功");
        readZichanData(returndata);
        alert("客户资产信息添加成功");
        $("#assetsMsgModal").modal("hide");
        dataMsgInit();
      },
      error: function (returndata) {
        console.log(returndata);
        alert("添加失败");
      }
  })

})
$("body").on("click",".assets_btn ",function(){
    $("#assetsMsgModal .btn-add").text('添加');
    addMessage("#assetsMsgModal .zichan-form", "#assetsMsgModal .assets_btn ", 'addassets');
    $("#dataTypeSel01").val("");
    if($('#assetsForm').find('input[type=file]').attr('multiple')==undefined){
        $('#assetsForm').find('input[type=file]').attr('multiple','true')
    }
  })
$("body").on("click",".assets_DTD .delete_btn",function(){
    var _this = this;
    var zichanId = $(this).data("zichanid");
  console.log(zichanId);
  var r=confirm("提示：是否删除该信息内容？")
    if (r==true)
    {
      $.ajax({
        'type':"GET",
        "url":'customer-detail.php?id='+ zichanId +'&action=delassets',
        'dataType':'json',
        "success":function(response){
          console.log("进入删除文件");
          var data = response;
          $(_this).parent().parent().parent().parent().remove();
          for(var d = 0; d < zichanData.length; d++){
            if(zichanId == zichanData[d].id){
              zichanData.splice(d , 1)
            }
          }
          dataMsgInit();
          return zichanData;
        },
        'error':function(){
          alert("资产信息删除请求出错");
        }
      })
      alert("删除成功")
    }
    else
    {
      return false;
      alert("取消删除")
    }

  })
$('body').on('click', ".assets_DTD .change-btn", function(){

  var zichanId = $(this).data("zichanid");
  console.log(zichanId);
  $(".zichan-form").attr('value', "saveassets");
  $(".ipt-id").val(zichanId);
  $("#assetsMsgModal .btn-add").text('保存');
  $('#assetsForm').find('input[type=file]').removeAttr('multiple');
  
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
$("#assetsMsgModal form #dataTypeSel01").blur(function(){
    if($(this).is("#dataTypeSel01")){
      var $parent = $(this).parent();
      $parent.find(".msg").remove(); //删除以前的提醒元素
      if($.trim(this.value)==""){
        var errorMsg = "请选择一个资产信息";
        $parent.append("<span class='msg onError'>"+errorMsg+"</span>")
      } else{
        var okMsg=" 输入正确";
        $parent.find(".high").remove();
        $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
      }
    }
  }).keyup(function(){
    $(this).triggerHandler("blur");
}).focus(function(){
    $(this).triggerHandler("blur");
})

$("#assetsMsgModal .btn-add").click(function(){
    $("#assetsMsgModal form #dataTypeSel01").trigger("blur");
    var numError = $("#assetsMsgModal form #dataTypeSel01").val();
    if(numError === ""){
      return false;
    }
  })


  /*左侧身份证信息*/
  $("._shen").on("click",function(){
    var shenfenDataHtml = "";
    for(var i in idcardsData){
      var str = idcardsData[i].wjian;
      var filename_id = idcardsData[i].title;
      var arr = str.split("/");
      var filename_arr = filename_id.split("/");
      var picture_file = arr[arr.length - 1];
      var filename =filename_arr[filename_arr.length - 1];
      var arr2 = str.split(".");
      var image_format = arr2[arr2.length - 1];
      $(".shenfenDataHtml").html("")
      if(idcardsData[i].zllxing){
        shenfenDataHtml += '<li data-shenfenid="' + idcardsData[i].id + '"><div class="row  lh34"><div><div class="row mt5 lh34 idcards_DTD"><div class="col-xs-offset-1 col-xs-1 text-right  Image_type"> </div><div class="col-xs-8 file_name_type"><a class="btn-orange File_Moniker" target="_blank" href="' + idcardsData[i].wjian + '" data-imgurl="' + idcardsData[i].wjian + '"> ' + filename + '</a></div><div class="col-xs-2 up_date">' + idcardsData[i].update + '</div><div class="col-xs-2 idcards_compile_btn" style="display: none"><span class="change-btn" style="color: #337ab7; cursor: pointer" data-shenfenid="' + idcardsData[i].id + '" data-toggle="modal" data-target="#idcardsModal">重新上传</span> <span class="delete_btn" style="color: #337ab7; cursor: pointer" data-shenfenid="' + idcardsData[i].id + '">删除</span></div></div></li>'

      }
      $(".shenfenDataHtml").append(shenfenDataHtml);
      var Image_type =$(".Image_type");
      var Moniker = $(".idcards_DTD .File_Moniker");
      for(var j = 0; j < Moniker.length; j++){
        if(Moniker[j]){
          var photo = $(Moniker[j]).html().split("/");
          var photo_type = photo[photo.length-1];
          photo_type = photo_type.split(".");
          photo_type = photo_type[photo_type.length-1];
          // console.log(photo_type);
          $(Moniker[j]).parents(".idcards_DTD").find(".Image_type").css("background-image", "url(images/" + photo_type + ".png)");
        };
      }
      $("body").on("click",".idcards_compile",function(e){
        e.stopPropagation();
        $(".idcards_compile_btn").show();
        $(".up_date").hide();
        $(".idcards_btn").hide();
        $(".idcards_compile").hide();
        $(".idcards_accomplish").show();
      })
    }
    if(!$(".shenfenDataHtml").html()){
      $(".shenfenDataHtml").prev().hide();
    }
    $("body").on("click",".idcards_accomplish",function(e){
      e.stopPropagation();
      $(".idcards_compile_btn").hide();
      $(".up_date").show();
      $(".idcards_btn").show();
      $(".idcards_compile").show();
      $(".idcards_accomplish").hide();
    })
  })
  $("body").on("click",".idcards_btn",function(){
    $("#idcardsModal .btn-add").text("添加");
    addMessage("#idcardsModal .idcards-form","#idcardsModal .idcards_btn","addidcards");
  })
  //身份证信息提交
  $("body").on("click","#idcardsModal .btn-add",function(){
    var form = new FormData($("#idcardsForm")[0]);
    $.ajax({  
      url: window.location.href,
      type: 'POST',
      data: form,
      async: false,
      cache: false,
      dataType:"json",
      contentType: false,
      processData: false,
      success: function (returndata) {
        alert("提交成功");
        console.log(idcardsData);
        idcardsData = returndata;
        console.log(idcardsData);
        var shenfenDataHtml = "";
        for(var i in idcardsData){
          var str = idcardsData[i].wjian;
          var filename_id = idcardsData[i].title;
          var arr = str.split("/");
          var filename_arr = filename_id.split("/");
          var picture_file = arr[arr.length - 1];
          var filename =filename_arr[filename_arr.length - 1];
          var arr2 = str.split(".");
          var image_format = arr2[arr2.length - 1];
          $(".shenfenDataHtml").html("")
          if(idcardsData[i].zllxing){
            shenfenDataHtml += '<li data-shenfenid="' + idcardsData[i].id + '"><div class="row  lh34"><div><div class="row mt5 lh34 idcards_DTD"><div class="col-xs-offset-1 col-xs-1 text-right  Image_type"> </div><div class="col-xs-8 file_name_type"><a class="btn-orange File_Moniker" target="_blank" href="' + idcardsData[i].wjian + '" data-imgurl="' + idcardsData[i].wjian + '"> ' + filename + '</a></div><div class="col-xs-2 up_date">' + idcardsData[i].update + '</div><div class="col-xs-2 idcards_compile_btn" style="display: none"><span class="change-btn" style="color: #337ab7; cursor: pointer" data-shenfenid="' + idcardsData[i].id + '" data-toggle="modal" data-target="#idcardsModal">重新上传</span> <span class="delete_btn" style="color: #337ab7; cursor: pointer" data-shenfenid="' + idcardsData[i].id + '">删除</span></div></div></li>'

          }
          $(".shenfenDataHtml").append(shenfenDataHtml);
          var Image_type =$(".Image_type");
          var Moniker = $(".idcards_DTD .File_Moniker");
          for(var j = 0; j < Moniker.length; j++){
            if(Moniker[j]){
              var photo = $(Moniker[j]).html().split("/");
              var photo_type = photo[photo.length-1];
              photo_type = photo_type.split(".");
              photo_type = photo_type[photo_type.length-1];
              // console.log(photo_type);
              $(Moniker[j]).parents(".idcards_DTD").find(".Image_type").css("background-image", "url(images/" + photo_type + ".png)");
            };
          }
          /*$("body").on("click",".idcards_compile",function(e){
            e.stopPropagation();
            $(".idcards_compile_btn").show();
            $(".up_date").hide();
            $(".idcards_btn").hide();
            $(".idcards_compile").hide();
            $(".idcards_accomplish").show();
          })*/
        }
        $('#idcardsModal').modal('hide');
          dataMsgInit();
      },
      error: function (returndata) {
        alert(returndata);
      }
     });
  })

$("body").on("click",".idcards_DTD .change-btn",function(){
  var shenfenid = $(this).data("shenfenid");
  $(".idcards-form").attr("value","saveidcards");
  $(".ipt-id").val(shenfenid);
  $("#idcardsModal .btn-add").text("保存");
  $.ajax({
    "type":'GET',
    'url':'customer-detail.php?id='+ shenfenid +'&action=jsoncredits',
    'data':'json',
    'success':function(response){
      var data= response;
    },
    'error':function(){
      alert("身份证信息修改请求出错");
    }
  })
})
  $("body").on("click",".idcards_DTD .delete_btn",function(){
    var _this = this;
    var shenfenid = $(this).data("shenfenid");
    var r = confirm("提示：是否删除改信息内容");
    if(r==true){
      $.ajax({
        'type':"GET",
        'url':'customer-detail.php?id='+ shenfenid +'&action=delidcards',
        "dataType":"json",
        "success":function(response){
          var data = response;
          $(_this).parent().parent().parent().parent().remove();
          for(var d = 0; d < idcardsData.length; d++){
            if(shenfenid == idcardsData[d].id){
              idcardsData.splice(d , 1)
            }
          }
          dataMsgInit();
          return idcardsData;
        },
        'error':function(){
          alert("身份证信息删除请求出错");
        }
      })
      alert("删除成功")
    }else{}
  })

$("._zheng").on("click",function(){
  var zhengxinDataLHtml_1 = "";
  var zhengxinDataLHtml_2 = "";
  var zhengxinDataLHtml_3 = "";
  for(i in zhengxinDataL) {
    var str = zhengxinDataL[i].wjian;
    var filename_id = zhengxinDataL[i].title;
    var arr = str.split("/");
    var filename_arr = filename_id.split("/");
    var picture_file = arr[arr.length - 1];
    var filename =filename_arr[filename_arr.length - 1];
    var arr2 = str.split(".");
    var image_format = arr2[arr2.length - 1];
    //console.log(image_format);
    $(".zhengxinDataLHtml_1").html("");
    $(".zhengxinDataLHtml_2").html("");
    $(".zhengxinDataLHtml_3").html("");
    // $(".t_id").html("");
    var zllxing = zxinArr02[zhengxinDataL[i].zllxing - 1];
    if (zhengxinDataL[i].zllxing === "3") {
      console.log(zhengxinDataL[i]);
        $(".zhengxinDataLHtml_3").prev().show();
      zhengxinDataLHtml_3 += '<li data-zhengxinid="' + zhengxinDataL[i].id + '"><div class="row  lh34"><div><div class="row mt5 lh34 credit_DTD"><div class="col-xs-offset-1 col-xs-1 text-right  Image_type"> </div><div class="col-xs-8 file_name_type"><a class="btn-orange File_Moniker" target="_blank" href=" customer-file-show.php?module=credits&fileid=' + zhengxinDataL[i].id + '" data-imgurl="' + zhengxinDataL[i].wjian + '"> ' + filename + '</a></div><div class="col-xs-2 up_date">' + zhengxinDataL[i].update + '</div><div class="col-xs-2 credit_compile_btn" style="display: none"><span class="change-btn" style="color: #337ab7; cursor: pointer" data-zhengxinid="' + zhengxinDataL[i].id + '" data-toggle="modal" data-target="#creditModal">重新上传</span> <span class="delete_btn" style="color: #337ab7; cursor: pointer" data-zhengxinid="' + zhengxinDataL[i].id + '">删除</span></div></div></li>'
    }
   if (zhengxinDataL[i].zllxing === "2") {
       $(".zhengxinDataLHtml_2").prev().show();
      zhengxinDataLHtml_2 += '<li data-zhengxinid="' + zhengxinDataL[i].id + '"><div class="row  lh34"><div><div class="row mt5 lh34 credit_DTD"><div class="col-xs-offset-1 col-xs-1 text-right  Image_type"> </div><div class="col-xs-8 file_name_type"><a class="btn-orange File_Moniker" target="_blank" href="customer-file-show.php?module=credits&fileid=' + zhengxinDataL[i].id + '" data-imgurl="' + zhengxinDataL[i].wjian + '"> ' + filename + '</a></div><div class="col-xs-2 up_date">' + zhengxinDataL[i].update + '</div><div class="col-xs-2 credit_compile_btn" style="display: none"><span class="change-btn" style="color: #337ab7; cursor: pointer" data-zhengxinid="' + zhengxinDataL[i].id + '" data-toggle="modal" data-target="#creditModal">重新上传</span> <span class="delete_btn" style="color: #337ab7; cursor: pointer" data-zhengxinid="' + zhengxinDataL[i].id + '">删除</span></div></div></li>'
    }
    if(zhengxinDataL[i].zllxing === "1"){
       $(".zhengxinDataLHtml_1").prev().show();
      //zhengxinDataLHtml_1 +='<li data-zhengxinid="'+ zhengxinDataL[i].id +'"><div class="row  lh34"></div><div class="row mt5 lh34"><div class="col-xs-6 pl10">'+ zhengxinDataL[i].update +'</div></div><div class="row mt5 lh34 DTD"><div class="col-xs-6 text-right  Image_type"> </div><div class="col-xs-3 pl10"><a class="btn-orange File_Moniker" target="_blank" href="'+ zhengxinDataL[i].wjian +'" data-imgurl="'+ zhengxinDataL[i].wjian +'"> '+picture_file+'</a></div><div class="col-xs-2"><span class="change-btn" style="color: #337ab7; cursor: pointer" data-zhengxinid="'+ zhengxinDataL[i].id +'">修改</span></div></div><div class="bottom-line"></div></li> '
      zhengxinDataLHtml_1 +='<li data-zhengxinid="'+ zhengxinDataL[i].id +'"><div class="row  lh34"><div><div class="row mt5 lh34 credit_DTD"><div class="col-xs-offset-1 col-xs-1 text-right  Image_type"> </div><div class="col-xs-8 file_name_type"><a class="btn-orange File_Moniker" target="_blank" href="customer-file-show.php?module=credits&fileid=' + zhengxinDataL[i].id +'" data-imgurl="'+ zhengxinDataL[i].wjian +'"> '+filename+'</a></div><div class="col-xs-2 up_date">'+ zhengxinDataL[i].update +'</div><div class="col-xs-2 credit_compile_btn" style="display: none"><span class="change-btn" style="color: #337ab7; cursor: pointer" data-zhengxinid="'+ zhengxinDataL[i].id +'" data-toggle="modal" data-target="#creditModal">重新上传</span> <span class="delete_btn" style="color: #337ab7; cursor: pointer" data-zhengxinid="' + zhengxinDataL[i].id + '">删除</span></div></div></li>'
    }
    //zhnegxin_id += `<div class="_data_id" data-zhengxinid=${zhengxinDataL[i].id}>zhengxinDataL[i].id</div>`;
      //console.log(contractDataHtml)
   /* $(".t_id").append(zhnegxin_id);
    $("._data_id").each(function(i,v){
      $(v).html(i+1);
    })*/
    $(".zhengxinDataLHtml_1").append(zhengxinDataLHtml_1);
    $(".zhengxinDataLHtml_2").append(zhengxinDataLHtml_2);
    $(".zhengxinDataLHtml_3").append(zhengxinDataLHtml_3);
    var Image_type =$(".Image_type");
    var Moniker = $(".credit_DTD .File_Moniker");
    for(var j = 0; j < Moniker.length; j++){
      if(Moniker[j]){
        var photo = $(Moniker[j]).html().split("/");
        var photo_type = photo[photo.length-1];
        photo_type = photo_type.split(".");
        photo_type = photo_type[photo_type.length-1];
       // console.log(photo_type);
        $(Moniker[j]).parents(".credit_DTD").find(".Image_type").css("background-image", "url(images/" + photo_type + ".png)");
      };
    }
    $("body").on("click",".credit_compile",function(e){
      e.stopPropagation();
      $(".credit_compile_btn").show();
      $(".up_date").hide();
      $(".credit_btn").hide();
      $(".credit_compile").hide();
      $(".credit_accomplish").show();
    })

  }
  /*if(!$(".zhengxinDataLHtml_1").html()){
    $(".zhengxinDataLHtml_1").prev().hide();
  }
  if(!$(".zhengxinDataLHtml_2").html()){
    $(".zhengxinDataLHtml_2").prev().hide();
  }
  if(!$(".zhengxinDataLHtml_3").html()){
    $(".zhengxinDataLHtml_3").prev().hide();
  }*/
  $("body").on("click",".credit_accomplish",function(e){
    e.stopPropagation();
    $(".credit_compile_btn").hide();
    $(".up_date").show();
    $(".credit_btn").show();
    $(".credit_compile").show();
    $(".credit_accomplish").hide();
  })
})
$('#zhengxinUpload').change(function(){
  var filePath = $("#zhengxinUpload").val();
  var fileName = getFileName(filePath);
  /*function getFileName(path){
    var pos = path.lastIndexOf("\\");
    return path.substring(pos+1);  
  }*/
  console.log(fileName)
  $("#creditModal .filename").text(fileName);
})

$("body").on("click","#creditModal .btn-add",function(){
  var form = new FormData($("#creditForm")[0]);
  $.ajax({
    url:window.location.href,
    type:"POST",
    data:form,
    async:false,
    cache:false,
    dataType:"json",
    contentType:false,
    processData:false,
    success:function(returndata){
      if(returndata[0]==0){
        alert(returndata[1]);
        return;
      }
      alert("提交成功");
      zhengxinDataL = returndata;
      var zhengxinDataLHtml_1 = "";
      var zhengxinDataLHtml_2 = "";
      var zhengxinDataLHtml_3 = "";
      for(i in zhengxinDataL) {
        var str = zhengxinDataL[i].wjian;
        var filename_id = zhengxinDataL[i].title;
        var arr = str.split("/");
        var filename_arr = filename_id.split("/");
        var picture_file = arr[arr.length - 1];
        var filename =filename_arr[filename_arr.length - 1];
        var arr2 = str.split(".");
        var image_format = arr2[arr2.length - 1];
        //console.log(image_format);
        $(".zhengxinDataLHtml_1").html("");
        $(".zhengxinDataLHtml_2").html("");
        $(".zhengxinDataLHtml_3").html("");
        // $(".t_id").html("");
        var zllxing = zxinArr02[zhengxinDataL[i].zllxing - 1];
        if (zhengxinDataL[i].zllxing === "3") {
            $(".zhengxinDataLHtml_3").prev().show();
          console.log(zhengxinDataL[i]);
          zhengxinDataLHtml_3 += '<li data-zhengxinid="' + zhengxinDataL[i].id + '"><div class="row  lh34"><div><div class="row mt5 lh34 credit_DTD"><div class="col-xs-offset-1 col-xs-1 text-right  Image_type"> </div><div class="col-xs-8 file_name_type"><a class="btn-orange File_Moniker" target="_blank" href="customer-file-show.php?module=credits&fileid=' + zhengxinDataL[i].id + '" data-imgurl="' + zhengxinDataL[i].wjian + '"> ' + filename + '</a></div><div class="col-xs-2 up_date">' + zhengxinDataL[i].update + '</div><div class="col-xs-2 credit_compile_btn" style="display: none"><span class="change-btn" style="color: #337ab7; cursor: pointer" data-zhengxinid="' + zhengxinDataL[i].id + '" data-toggle="modal" data-target="#creditModal">重新上传</span> <span class="delete_btn" style="color: #337ab7; cursor: pointer" data-zhengxinid="' + zhengxinDataL[i].id + '">删除</span></div></div></li>'
        }
        if (zhengxinDataL[i].zllxing === "2") {
            $(".zhengxinDataLHtml_2").prev().show();
          zhengxinDataLHtml_2 += '<li data-zhengxinid="' + zhengxinDataL[i].id + '"><div class="row  lh34"><div><div class="row mt5 lh34 credit_DTD"><div class="col-xs-offset-1 col-xs-1 text-right  Image_type"> </div><div class="col-xs-8 file_name_type"><a class="btn-orange File_Moniker" target="_blank" href="customer-file-show.php?module=credits&fileid=' + zhengxinDataL[i].id + '" data-imgurl="' + zhengxinDataL[i].wjian + '"> ' + filename + '</a></div><div class="col-xs-2 up_date">' + zhengxinDataL[i].update + '</div><div class="col-xs-2 credit_compile_btn" style="display: none"><span class="change-btn" style="color: #337ab7; cursor: pointer" data-zhengxinid="' + zhengxinDataL[i].id + '" data-toggle="modal" data-target="#creditModal">重新上传</span> <span class="delete_btn" style="color: #337ab7; cursor: pointer" data-zhengxinid="' + zhengxinDataL[i].id + '">删除</span></div></div></li>'
        }
        if(zhengxinDataL[i].zllxing === "1"){
            $(".zhengxinDataLHtml_1").prev().show();
          //zhengxinDataLHtml_1 +='<li data-zhengxinid="'+ zhengxinDataL[i].id +'"><div class="row  lh34"></div><div class="row mt5 lh34"><div class="col-xs-6 pl10">'+ zhengxinDataL[i].update +'</div></div><div class="row mt5 lh34 DTD"><div class="col-xs-6 text-right  Image_type"> </div><div class="col-xs-3 pl10"><a class="btn-orange File_Moniker" target="_blank" href="'+ zhengxinDataL[i].wjian +'" data-imgurl="'+ zhengxinDataL[i].wjian +'"> '+picture_file+'</a></div><div class="col-xs-2"><span class="change-btn" style="color: #337ab7; cursor: pointer" data-zhengxinid="'+ zhengxinDataL[i].id +'">修改</span></div></div><div class="bottom-line"></div></li> '
          zhengxinDataLHtml_1 +='<li data-zhengxinid="'+ zhengxinDataL[i].id +'"><div class="row  lh34"><div><div class="row mt5 lh34 credit_DTD"><div class="col-xs-offset-1 col-xs-1 text-right  Image_type"> </div><div class="col-xs-8 file_name_type"><a class="btn-orange File_Moniker" target="_blank" href="customer-file-show.php?module=credits&fileid=' + zhengxinDataL[i].id +'" data-imgurl="'+ zhengxinDataL[i].wjian +'"> '+filename+'</a></div><div class="col-xs-2 up_date">'+ zhengxinDataL[i].update +'</div><div class="col-xs-2 credit_compile_btn" style="display: none"><span class="change-btn" style="color: #337ab7; cursor: pointer" data-zhengxinid="'+ zhengxinDataL[i].id +'" data-toggle="modal" data-target="#creditModal">重新上传</span> <span class="delete_btn" style="color: #337ab7; cursor: pointer" data-zhengxinid="' + zhengxinDataL[i].id + '">删除</span></div></div></li>'
        }
        //zhnegxin_id += `<div class="_data_id" data-zhengxinid=${zhengxinDataL[i].id}>zhengxinDataL[i].id</div>`;
        //console.log(contractDataHtml)
        /* $(".t_id").append(zhnegxin_id);
         $("._data_id").each(function(i,v){
         $(v).html(i+1);
         })*/
        $(".zhengxinDataLHtml_1").append(zhengxinDataLHtml_1);
        $(".zhengxinDataLHtml_2").append(zhengxinDataLHtml_2);
        $(".zhengxinDataLHtml_3").append(zhengxinDataLHtml_3);
        var Image_type =$(".Image_type");
        var Moniker = $(".credit_DTD .File_Moniker");
        for(var j = 0; j < Moniker.length; j++){
          if(Moniker[j]){
            var photo = $(Moniker[j]).html().split("/");
            var photo_type = photo[photo.length-1];
            photo_type = photo_type.split(".");
            photo_type = photo_type[photo_type.length-1];
            // console.log(photo_type);
            $(Moniker[j]).parents(".credit_DTD").find(".Image_type").css("background-image", "url(images/" + photo_type + ".png)");
          };
        }
        $("body").on("click",".credit_compile",function(e){
          e.stopPropagation();
          $(".credit_compile_btn").show();
          $(".up_date").hide();
          $(".credit_btn").hide();
          $(".credit_compile").hide();
          $(".credit_accomplish").show();
        })

      }
      /*if(!$(".zhengxinDataLHtml_1").html()){
        $(".zhengxinDataLHtml_1").prev().hide();
      }
      if(!$(".zhengxinDataLHtml_2").html()){
        $(".zhengxinDataLHtml_2").prev().hide();
      }
      if(!$(".zhengxinDataLHtml_3").html()){
        $(".zhengxinDataLHtml_3").prev().hide();
      }*/
      $("body").on("click",".credit_accomplish",function(e){
        e.stopPropagation();
        $(".credit_compile_btn").hide();
        $(".up_date").show();
        $(".credit_btn").show();
        $(".credit_compile").show();
        $(".credit_accomplish").hide();
      });
      $('#creditModal').modal('hide');
      dataMsgInit();
    },
    error: function (returndata) {
      alert(returndata);
    }
  })
})
$("body").on("click",".credit_btn",function(){
  $("#creditModal .btn-add").text('添加');
  addMessage("#creditModal .zhengxin-form", "#creditModal .credit_btn ", 'addcredits');
  $("#zxinTypeSel").val("");
  if($('#creditForm').find('input[type=file]').attr('multiple')==undefined){
      $('#creditForm').find('input[type=file]').attr('multiple','true')
  }
})
$("body").on("click",".credit_DTD .delete_btn",function(){
    var _this = this;
  console.log(_this);
  var zhengxinid = $(this).data("zhengxinid");
    var r=confirm("提示：是否删除该信息内容？")
    if (r==true)
    {
      $.ajax({
        'type':"GET",
        "url":'customer-detail.php?id='+ zhengxinid +'&action=delcredits',
        'dataType':'json',
        "success":function(response){
          console.log("进入删除文件");
          var data = response;
          $(_this).parent().parent().parent().parent().remove();
          for(var d = 0; d < zhengxinDataL.length; d++){
            if(zhengxinid == zhengxinDataL[d].id){
              zhengxinDataL.splice(d , 1)
            }
          }
          dataMsgInit();
          return zhengxinDataL;
        },
        'error':function(){
          alert("征信信息删除请求出错");
        }
      })
      alert("删除成功")
    }
    else
    {
      return false;
      alert("取消删除")
    }

  })
$('body').on('click', ".credit_DTD .change-btn", function(){
  var zhengxinId = $(this).data("zhengxinid");
  console.log(zhengxinId);
  $(".zhengxin-form").attr('value', "savecredits");
  $(".ipt-id").val(zhengxinId);
  $("#creditModal .btn-add").text('保存');
  $('#creditForm').find('input[type=file]').removeAttr('multiple');
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
$("#creditModal form #zxinTypeSel").blur(function(){
 if($(this).is("#zxinTypeSel")){
   var $parent = $(this).parent();
   $parent.find(".msg").remove(); //删除以前的提醒元素
   if($.trim(this.value)==""){
     var errorMsg = "请选择一个征信信息";
     $parent.append("<span class='msg onError'>"+errorMsg+"</span>")
   } else{
     var okMsg=" 输入正确";
     $parent.find(".high").remove();
     $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
   }
 }
}).keyup(function(){
  $(this).triggerHandler("blur");
}).focus(function(){
  $(this).triggerHandler("blur");
})

$("#creditModal .btn-add").click(function(){
    $("#creditModal form #zxinTypeSel").trigger("blur");
    var numError = $("#creditModal form #zxinTypeSel").val();
    if(numError === ""){
      return false;
    }
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
/*var bankCardDataHtml = '';
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
};*/

 $("._card").on("click",function(){
   var bankCardDataHtml = '';
   var bankModification = '';
   var num_id = '';
   var bank_compile = "";

   if(bankCardData.length>0) {
     $('.bankCardDataHtml').parent().css('min-height','310px')
   }
   for(i in bankCardData){
     //console.log(bankCardData[i].id);
     //bankCardData[i].yhkgshu
     var yhkgshu = '';
     var unshow = '';
     var unshow2 = '';
     var zhlxing = '';
     var unshow3='';

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

     if(bankCardData[i].xykyxqi==''){
       unshow3='unshow';
     }
      $(".t_id").html("");
      $(".bankModification").html("");
      $(".bankCardDataHtml").html("");
      $(".bank_compile").html("");

     num_id += `<div class="_data_id" data-id="${bankCardData[i].id}">${bankCardData[i].id}</div> `;
      $(".t_id").append(num_id);
     $("._data_id").each(function(i,v){
       console.log(v);
       console.log(i);
       $(v).html(i+1);
       if($(v).html()==1){
         $(v).css("color","#000").addClass("bank_index_id");
       }
     });
     var yhang = bankArr[bankCardData[i].yhang - 1];
     //bankModification += '<div class="change-btn btn-change" data-cardid="'+ bankCardData[i].id +'" style="cursor: pointer">修改</div>';
     bankCardDataHtml +=
         `<ul class="bank_UL"><li><div class="row "><div class="col-xs-4 text-right">银行卡归属：</div><div class="col-xs-8 pl10">${yhkgshu}</div></div><div class="dsf-card ${unshow}"><div class="row mt5"><div class="col-xs-4 text-right">第三方姓名：</div><div class="col-xs-8 pl10">${bankCardData[i].dsfxming}</div></div><div class="row mt5"><div class="col-xs-4 text-right">第三方身份证：</div><div class="col-xs-8 pl10">${bankCardData[i].dsfsfzhma}</div></div></div><div class="row mt5"><div class="col-xs-4 text-right">账户类型：</div><div class="col-xs-8 pl10">${zhlxing}</div></div><div class="row mt5"><div class="col-xs-4 text-right">银行：</div><div class="col-xs-8 pl10">${yhang}</div></div><div class="row mt5"><div class="col-xs-4 text-right">行号：</div><div class="col-xs-8 pl10">${bankCardData[i].hhao}</div></div><div class="row mt5"><div class="col-xs-4 text-right">银行帐号：</div><div class="col-xs-8 pl10">${bankCardData[i].yhzhao}</div></div><div class="xyka-model ${unshow2}"><div class="row mt5  ${unshow3}"><div class="col-xs-4 text-right">信用卡有效期：</div><div class="col-xs-8 pl10">${bankCardData[i].xykyxqi}</div></div><div class="row mt5"><div class="col-xs-4 text-right">CVC码：</div><div class="col-xs-8 pl10">${bankCardData[i].cvcma}</div></div></div></li></ul>`
     bank_compile +='<div class="change-btn btn-change" data-cardid="'+ bankCardData[i].id +'" style="cursor: pointer" data-toggle="modal" data-target="#cardMsgModal">修改</div>';
     //bankCardDataHtml = bankCardDataHtml + '<ul>' + '<li><div class="row mt15"><div class="col-xs-4 text-right">银行卡归属：</div><div class="col-xs-8 pl10">'+ yhkgshu +'</div></div><div class="dsf-card '+ unshow +'"><div class="row mt5"><div class="col-xs-4 text-right">第三方姓名：</div><div class="col-xs-8 pl10">'+ bankCardData[i].dsfxming +'</div></div><div class="row mt5"><div class="col-xs-4 text-right">第三方身份证：</div><div class="col-xs-8 pl10">'+ bankCardData[i].dsfsfzhma +'</div></div></div><div class="row mt5"><div class="col-xs-4 text-right">账户类型：</div><div class="col-xs-8 pl10">'+ zhlxing +'</div></div><div class="row mt5"><div class="col-xs-4 text-right">银行：</div><div class="col-xs-8 pl10">'+ yhang +'</div></div><div class="row mt5"><div class="col-xs-4 text-right">行号：</div><div class="col-xs-8 pl10">'+ bankCardData[i].hhao +'</div></div><div class="row mt5"><div class="col-xs-4 text-right">银行帐号：</div><div class="col-xs-8 pl10">'+ bankCardData[i].yhzhao +'</div></div><div class="xyka-model '+ unshow2 +'"><div class="row mt5"><div class="col-xs-4 text-right">信用卡有效期：</div><div class="col-xs-8 pl10">'+ bankCardData[i].xykyxqi +'</div></div><div class="row mt5"><div class="col-xs-4 text-right">CVC码：</div><div class="col-xs-8 pl10">'+ bankCardData[i].cvcma +'</div></div></div><div class="change-btn btn-change" data-cardid="'+ bankCardData[i].id +'" style="cursor: pointer">修改</div><div class="card-type">'+ bankCardData[i].id +'</div><div class="bottom-line"></div></li></ul>'
     //$(".bankModification").append(bankModification);
     $(".bankCardDataHtml").append(bankCardDataHtml);
     $(".bank_compile").append(bank_compile);
     var bank_first = $(".bankCardDataHtml").find(".bank_UL");
     $(bank_first[0]).show().siblings().hide();
     var bank_compile0 = $(".bank_compile ").find(".change-btn");
     console.log($(bank_compile0[0]));
     $(bank_compile0[0]).show().siblings().hide();

     $(".t_main .t_id ._data_id").on("click",function(){
       for(var i in bankCardData){
         if(bankCardData[i].id === $(this).attr("data-id")){
           $(this).css("color","#000").addClass("bank_index_id").siblings().removeClass("bank_index_id");
           $('.bank_UL:eq('+$(this).index()+')').show().siblings().hide();
           //$('.bank_btn:eq('+$(this).index()+')').show().siblings().hide();
           $(".change-btn:eq("+$(this).index()+")").show().siblings().hide();
         }
       }
     });
     $(".t_foot .bank_compile .btn-change").on("click",function(e){
       console.log(this);
       e.preventDefault();
       console.log($(this).data("target"));
       var bankcardId = $(this).data("cardid");
       console.log(bankcardId);
       $(".bankcard-form").attr('value', "savebanks");
       $(".ipt-id").val(bankcardId);
       $("#cardMsgModal .btn-add").text('保存');

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
           console.log(data.yhkgshu +"yhkgshu");
           yhkDsfHide(data.yhkgshu);
           cardxykShow(data.zhlxing);
         },
         'error' : function(){
           alert("银行卡信息修改请求出错")
         }
       });
     })
     $(".card").on("click",function(){
       addMessage("#cardMsgModal .bankcard-form", "#cardMsgModal .bank_btn", 'addbanks');
       $('input[name="ipt-yhkgshu"][value='+   +']').attr("checked",true);

       $("#cardMsgModal input[name='ipt-dsfxming']").val("");
       $("#cardMsgModal input[name='ipt-dsfsfzhma']").val("");
       $('input[name="ipt-zhlxing"][value='+   +']').attr("checked",true);

       $("#cardMsgModal select[name='ipt-yhang']").val("");
       $("#cardMsgModal input[name='ipt-hhao']").val("");
       $("#cardMsgModal input[name='ipt-yhzhao']").val("");

       $("#cardMsgModal input[name='ipt-xykyxqi']").val("");
       $("#cardMsgModal input[name='ipt-cvcma']").val("");
     })
   };

   if(bankCardData.length==0){
       $('.bank_compile').html('修改');
   }
 })

/*$(".card").click(function(){
  $(".modal-body .bankcard-content").html('');
  $(".bankcard-form").attr('value', "addbanks");
  $("#cardMsgModal .btn-add").text('添加');

  setTimeout(function(){
    $(".modal-body .bankcard-content").append(bankCardDataHtml);
    //$(".modal-body .change-btn").hide();
  },0);
});

$("input[name='radioName'][checked]").val();


$('body').on('click', ".bankcard-content .change-btn", function(){

  var bankcardId = $(this).data("cardid");
  console.log(bankcardId);

  $(".bankcard-form").attr('value', "savebanks");
  $(".ipt-id").val(bankcardId);
  $("#cardMsgModal .btn-add").text('保存');
  /!*$("input[name='ipt-yhkgshu'][value=2]").attr("checked",true);
  
  $("#cardMsgModal input[name='ipt-dsfxming']").val('乔帮主');
  $("#cardMsgModal input[name='ipt-dsfsfzhma']").val('3456789345678567');
  $("input[name='ipt-zhlxing'][value=3]").attr("checked",true);
  
  $("#cardMsgModal select[name='ipt-yhang']").val(2);
  $("#cardMsgModal input[name='ipt-hhao']").val('123123');
  $("#cardMsgModal input[name='ipt-yhzhao']").val('12312387567865675');

  $("#cardMsgModal input[name='ipt-xykyxqi']").val('2017-04');
  $("#cardMsgModal input[name='ipt-cvcma']").val('123');

  yhkDsfHide(2)
  cardxykShow(3)*!/
  
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
})*/


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

  $("body").on("click",".xuqiu-add",function(){
    addMessage("#needModal .need-form", "#needModal .btn-add", 'addneed');
    $("#needModal input[name='ipt-fkdate']").val("");
    $("#needModal input[name='ipt-dkmoney']").val("");
    $("#needModal select[name='ipt-hkqxian']").val("");
    $("#needModal select[name='ipt-dklxing']").val("");
    $("#needModal select[name='ipt-hkfshi']").val("");
    $("#needModal select[name='ipt-jpxing']").val("");
  })
/*$(".xuqiu-add").click(function(){//需求添加按钮
  console.log("测试")
  addMessage("#needModal .need-form", "#needModal .btn-add", 'addneed');
});*/

//删除了.btn-edit 前的 .xuqiu
$("body").on('click', '.kk .btn-edit', function(){//需求添加按钮
  console.log($(this));
  var dataid = $(this).data('itemid');
  console.log(dataid);
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
          console.log( $("#needModal input[name='ipt-fkdate']").val(data.fkdate))

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
/*$(".gongzuo-add").click(function(){
  addMessage("#jobModal .job01-form", "#jobModal .btn-add", 'addjob');
});*/


    /*$('[name="ipt-jobkind"]').change(function () {
       var val = $('[name="ipt-jobkind"]:checked').val();
       if(val==1){
           $('#job-own').show()
       }else if(val == 2){
           $('#job-other').show()
       }
    })*/

    var jobWayFlag;

    /* 工作信息工作性质切换 */
    $(".jobWay").change(function () {
        var val = $(this).val();
        console.log(val);

        if (val == 1) {
            $("#job-own").show();
            $("#job-other").hide();
        }
        if (val == 2) {
            $("#job-own").hide();
            $("#job-other").show();
        }

        if(jobWayFlag=='add'){
          val==1?$('#jobModal .job01-form').val('addjob1'):(val==2?$('#jobModal .job02-form').val('addjob2'):'')
        }else if(jobWayFlag=='save'){
            val==1?$('#jobModal .job01-form').val('savejob1'):(val==2?$('#jobModal .job02-form').val('savejob2'):'')
        }
    });

  $("body").on("click",".gongzuo-add",function(){
      jobWayFlag = 'add';
    addMessage("#jobModal .job02-form", "#jobModal .btn-add", 'addjob1');
      $('input[name="ipt-jobkind"]').attr('checked',false);
      $('input[name="ipt-yyzzhao"]').attr('checked',false);
      $('#job-own').hide();
      $('#job-other').hide();
    $("#jobModal input[name='ipt-gsming']").val("");
    $("#jobModal input[name='ipt-zcdate']").val("");
    $("#jobModal select[name='ipt-gsdzsheng']").val("");
    $("#jobModal select[name='ipt-gsdzshi']").val("");
    $("#jobModal select[name='ipt-gsdzqu']").val("");
    $("#jobModal input[name='ipt-gsdzhi']").val("");
    $("#jobModal select[name='ipt-gslxing']").val("");
    $('input[name="ipt-fren"]').attr("checked",false);
    $('input[name="ipt-zgbli"]').attr("checked",false);
    $("#jobModal input[name='ipt-zgblid']").val("");
    $('input[name="ipt-gflxing"]').attr("checked",false);
  })
  $("body").on('click', '.gongzuo .btn-edit', function(){
    jobWayFlag = 'save';
    var dataid = $(this).data('itemid');
    $(".ipt-id").val(dataid);
    console.log(dataid);

    $.ajax({
      'type': 'GET',
      'url': 'customer-detail.php?id='+ dataid +'&action=jsonjob',
      'dataType': 'json',
      'success': function (response) {
        var data = response;
        console.log(data);
        var jobType = data.jobkind;
        console.log(jobType);
        if (jobType == 1) {
          $('#job-other').hide();
          $('#job-own').show();
          changeMessage("#jobModal .job01-form", "#jobModal .btn-add", 'savejob1');
          $('input[name="ipt-jobkind"][value='+ data.jobkind +']').prop("checked",true);
          $('input[name="ipt-yyzzhao"][value='+ data.yyzzhao +']').prop("checked",true);
          $("#jobModal input[name='ipt-gsming']").val(data.gsming);
          $("#jobModal input[name='ipt-zcdate']").val(data.zcdate);
            $("#jobModal select[name='ipt-gsdzsheng']").val(data.gsdzsheng);
          $("#jobModal select[name='ipt-gsdzsheng']").trigger('change');  //触发城市选择控件回显时选中
          $("#jobModal select[name='ipt-gsdzshi']").val(data.gsdzshi);
          $("#jobModal select[name='ipt-gsdzshi']").trigger('change');
          $("#jobModal input[name='ipt-gsdzhi']").val(data.gsdzhi);
          $("#jobModal select[name='ipt-gslxing']").val(data.gslxing);
          if(data.gslxing==3){
            $('#jobModal .item02').show();
            $('#ipt-gslxings01').val(data.gslxings);
          }
          $('input[name="ipt-fren"][value='+ data.fren +']').prop("checked",true); //prop解决attr属性无法添加样式的问题
          $('input[name="ipt-zgbli"][value='+ data.zgbli +']').prop("checked",true);
          $("#jobModal input[name='ipt-zgblid']").val(data.zgblid);
          $('input[name="ipt-gflxing"][value='+ data.gflxing +']').prop("checked",true);

        }
        if (jobType == 2) {
          $('#job-other').show();
          $('#job-own').hide();
          changeMessage("#jobModal .job02-form", "#jobModal .btn-add", 'savejob2');
          $('input[name="ipt-jobkind"][value='+ data.jobkind +']').prop("checked",true);
          $("#jobModal input[name='ipt-gsming']").val(data.gsming);
          $("#jobModal select[name='ipt-gsdzsheng']").val(data.gsdzsheng);
          $("#jobModal select[name='ipt-gsdzsheng']").trigger('change');  //触发城市选择控件回显时选中
          $("#jobModal select[name='ipt-gsdzshi']").val(data.gsdzshi);
          $("#jobModal select[name='ipt-gsdzshi']").trigger('change');
          $("#jobModal select[name='ipt-gsdzqu']").val(data.gsdzqu);
          $("#jobModal input[name='ipt-gsdzhi']").val(data.gsdzhi);
          $("#jobModal select[name='ipt-gslxing']").val(data.gslxing);
            if(data.gslxing==5){
                $('#jobModal .item02').show();
                $('#ipt-gslxings01').val(data.gslxings);
            }
          $('input[name="ipt-gwei"][value='+ data.gwei +']').prop("checked",true);
          $("#jobModal input[name='ipt-gwmcheng']").val(data.gwmcheng);
          $('input[name="ipt-ldgxi"][value='+ data.ldgxi +']').prop("checked",true);
          $("#jobModal select[name='ipt-lwpqgsszdsheng']").val(data.lwpqgsszdsheng);
            $("#jobModal select[name='ipt-lwpqgsszdsheng']").trigger('change');
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

/*$(".fangchan-add").click(function(){
  addMessage("#houseModal .house-form", "#houseModal .btn-add", 'addhouse');
});*/
  $("body").on("click",".fangchan-add",function(){

    addMessage("#houseModal .house-form", "#houseModal .btn-add", 'addhouse');
    $("#houseModal select[name='ipt-fwlxing1']").val("");
    $("#houseModal select[name='ipt-fwlxing2']").val("");
    $("#houseModal select[name='ipt-fwlxing3']").val("");
    $('#houseModal input[name="ipt-fwsyquan"][value='+  +']').attr("checked",true);
    $("#houseModal select[name='ipt-fwsyquan2']").val("");
    $("#houseModal select[name='ipt-fwsyquan3']").val("");
    $("#houseModal input[name='ipt-fwjcri']").val("");
    $("#houseModal input[name='ipt-gfri']").val("");
    $("#houseModal input[name='ipt-fwjzmji']").val("");
    $("#houseModal input[name='ipt-fwsymji']").val('');
    $("#houseModal select[name='ipt-fczdzsheng']").val("");
    $("#houseModal select[name='ipt-fczdzshi']").val("");
    $("#houseModal select[name='ipt-fczdzqu']").val("");
    $("#houseModal input[name='ipt-fczdzhi']").val("");
    $("#houseModal select[name='ipt-yjdzsheng']").val('');
    $("#houseModal select[name='ipt-yjdzshi']").val("");
    $("#houseModal select[name='ipt-yjdzqu']").val("");
    $("#houseModal input[name='ipt-yjdzhi']").val("");
    $("#houseModal input[name='ipt-fwxjia']").val("");
    $('#houseModal input[name="ipt-fczheng"][value='+  +']').attr("checked",true);
    $("#houseModal select[name='ipt-fwdkuan']").val("");
  })

$("body").on('click', '.fangchan .btn-edit', function(){

  var dataid = $(this).data('itemid');
  $(".ipt-id").val(dataid);
  console.log(dataid);

  changeMessage("#houseModal .house-form", "#houseModal .btn-add", 'savehouse');


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
          $("#houseModal select[name='ipt-fczdzsheng']").trigger('change');
          $("#houseModal select[name='ipt-fczdzshi']").val(data.fczdzshi);
          $("#houseModal select[name='ipt-fczdzshi']").trigger('change');
          $("#houseModal select[name='ipt-fczdzqu']").val(data.fczdzqu);
          $("#houseModal input[name='ipt-fczdzhi']").val(data.fczdzhi);
          $("#houseModal select[name='ipt-yjdzsheng']").val(data.yjdzsheng);
          $("#houseModal select[name='ipt-yjdzsheng']").trigger('change');
          $("#houseModal select[name='ipt-yjdzshi']").val(data.yjdzshi);
          $("#houseModal select[name='ipt-yjdzshi']").trigger('change');
          $("#houseModal select[name='ipt-yjdzqu']").val(data.yjdzqu);
          $("#houseModal input[name='ipt-yjdzhi']").val(data.yjdzhi);
          $("#houseModal input[name='ipt-fwxjia']").val(data.fwxjia);
          $('#houseModal input[name="ipt-fczheng"][value='+ data.fczheng +']').attr("checked",true);
          $("#houseModal select[name='ipt-fwdkuan']").val(data.fwdkuan);
          if(data.fwdkuan==2||data.fwdkuan==3||data.fwdkuan==4) {
              $("#houseModal .noHasLoan").show();
          }else{
              $("#houseModal .noHasLoan").hide();
          }
          $('#houseModal [name="ipt-dkrqi"]').val(data.dkrqi);
          $('#houseModal [name="ipt-dkbli"]').val(data.dkbli);
          $('#houseModal [name="ipt-zgsxin"]').val(data.zgsxin).attr('checked',true);
          $('#houseModal [name="ipt-dkbjin"]').val(data.dkbjin);
          $('#houseModal [name="ipt-fkyhang"]').val(data.fkyhang);
          $('#houseModal [name="ipt-dkschang"]').val(data.dkschang);
          $('#houseModal [name="ipt-ygje"]').val(data.ygje);
          $('#houseModal [name="ipt-hkfshi"]').val(data.hkfshi);
          $('#houseModal [name="ipt-hkfshid"]').val(data.hkfshid);
      },
      'error' : function(){
          alert("房产信息修改请求出错")
      }
  });
})


//车产信息修改

/*$(".chechan-add").click(function(){
  addMessage("#carMsgModal .car-form", "#carMsgModal .btn-add", 'addcar');
});*/

  $("body").on("click",".chechan-add",function(){
    addMessage("#carMsgModal .car-form", "#carMsgModal .btn-add", 'addcar');
    $("#carMsgModal select[name='ipt-cllxing']").val("");
    $("#carMsgModal select[name='ipt-cpsheng']").val("");
    $("#carMsgModal select[name='ipt-cpshi']").val("");
    $("#carMsgModal input[name='ipt-cphao']").val("");
    $("#carMsgModal select[name='ipt-clppai']").val("");
    $("#carMsgModal select[name='ipt-clxhao']").val("");
    $("#carMsgModal input[name='ipt-gcrqi']").val("");
    $("#carMsgModal input[name='ipt-lcjia']").val("");
    $("#carMsgModal select[name='ipt-cldkuan']").val("");
    $('#carMsgModal input[name="ipt-dkxs_fkjg0"][value='+  +']').attr("checked",true);
    $("#carMsgModal select[name='ipt-fkyhang']").val("");
    $("#carMsgModal input[name='ipt-dkrqi']").val("");
    $("#carMsgModal input[name='ipt-dkbjin']").val("");
    $("#carMsgModal select[name='ipt-dkschang']").val("");
    $("#carMsgModal input[name='ipt-ygje']").val("");
  })
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

/*$(".chewei-add").click(function(){
  addMessage("#carPosModal .park-form", "#carPosModal .btn-add", 'addpark');
});*/
  $("body").on("click",".chewei-add",function(){
    console.log("+-+-+-+-+-+-")
    addMessage("#carMsgModal .car-form", "#carMsgModal .btn-add", 'addcar');
    $("#carPosModal input[name='ipt-gmrqi']").val("");
    $("#carPosModal input[name='ipt-cwjzmji']").val("");
    $("#carPosModal input[name='ipt-cwsymji']").val("");
    $("#carPosModal input[name='ipt-gmjge']").val("");
    $("#carPosModal input[name='ipt-xjge']").val("");
    $("#carPosModal select[name='ipt-cwdzsheng']").val("");
    $("#carPosModal select[name='ipt-cwdzshi']").val("");
    $("#carPosModal select[name='ipt-cwdzqu']").val("");
    $("#carPosModal input[name='ipt-cwdzhi']").val("");
    $('#carPosModal input[name="ipt-cwzheng"][value='+  +']').attr("checked",true);
    $('#carPosModal input[name="ipt-cwdkuan"][value='+  +']').attr("checked",true);
  })

$("body").on('click', '.chewei .btn-edit', function(){

  var dataid = $(this).data('itemid');
  $(".ipt-id").val(dataid);
  console.log(dataid);

  changeMessage("#carPosModal .park-form", "#carPosModal .btn-add", 'savepark');

  /*$("#carPosModal input[name='ipt-gmrqi']").val('2017-04');
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
*/
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

/*$(".baodan-add").click(function(){
  addMessage("#policyMsgModal .policy-form", "#policyMsgModal .btn-add", 'addpolicy');
});*/
$("body").on("click",".baodan-add",function(){
  addMessage("#policyMsgModal .policy-form", "#policyMsgModal .btn-add", 'addpolicy');
  $("#policyMsgModal select[name='ipt-bxgsi']").val("");
  $('#policyMsgModal input[name="ipt-bdlxing"][value='+  +']').attr("checked",true);
  $("#policyMsgModal input[name='ipt-bdsxri']").val("");
  $("#policyMsgModal input[name='ipt-bdsxnxian']").val("");
  $("#policyMsgModal select[name='ipt-jffshi']").val("");
  $("#policyMsgModal input[name='ipt-jffsyuan']").val("");
  $("#policyMsgModal input[name='ipt-yjfcshu']").val("");
  $('#policyMsgModal input[name="ipt-xjjzhi"][value='+  +']').attr("checked",true);
  $("#policyMsgModal input[name='ipt-fxjl_fxsqi']").val("");
  $("#policyMsgModal input[name='ipt-fxjl_yjnrqi']").val("");
  $("#policyMsgModal #policyYearNum").html("0");
  })
$("body").on('click', '.baodan .btn-edit', function(){

  var dataid = $(this).data('itemid');
  $(".ipt-id").val(dataid);
  console.log(dataid);

  changeMessage("#policyMsgModal .policy-form", "#policyMsgModal .btn-add", 'savepolicy');


  $("#policyMsgModal select[name='ipt-bxgsi']").val(2);
  $('#policyMsgModal input[name="ipt-bdlxing"][value='+ 1 +']').attr("checked",true);
  $("#policyMsgModal input[name='ipt-bdsxri']").val('2017-04');
  $("#policyMsgModal input[name='ipt-bdsxnxian']").val('55');
  $("#policyMsgModal select[name='ipt-jffshi']").val(2);
  $("#policyMsgModal input[name='ipt-jffsyuan']").val('55');
  $("#policyMsgModal input[name='ipt-yjfcshu']").val('55');
  $('#policyMsgModal input[name="ipt-xjjzhi"][value='+ 1 +']').attr("checked",true);
  $("#policyMsgModal input[name='ipt-fxjl_fxsqi']").val('2017-04');
  $("#policyMsgModal input[name='ipt-fxjl_yjnrqi']").val('2017-04');

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

/*$(".zhaiwu-add").click(function(){
  addMessage("#debtMsgModal .debt-form", "#debtMsgModal .btn-add", 'adddebt');
});*/
  $("body").on("click",".zhaiwu-add",function(){
    addMessage("#debtMsgModal .debt-form", "#debtMsgModal .btn-add", 'adddebt');
    $('#debtMsgModal input[name="ipt-xyka"][value='+  +']').attr("checked",true);
    $("#debtMsgModal input[name='ipt-zshu']").val("");
    $("#debtMsgModal input[name='ipt-zsxe']").val("");
    $("#debtMsgModal input[name='ipt-dzzgsxe']").val("");
    $("#debtMsgModal input[name='ipt-dqyyong']").val("");
    $("#debtMsgModal input[name='ipt-j6gyjyong']").val("");
    $("#debtMsgModal input[name='ipt-dzhang']").val("");
    $("#debtMsgModal input[name='ipt-djie']").val("");
    $("#debtMsgModal input[name='ipt-zfu']").val("");
    $("#debtMsgModal select[name='ipt-jgou1']").val("");
    $("#debtMsgModal select[name='ipt-gsi1']").val("");
    $("#debtMsgModal select[name='ipt-fkuan1']").val("");
    $("#debtMsgModal input[name='ipt-dkje']").val("");
    $("#debtMsgModal input[name='ipt-sybjin']").val("");
    $("#debtMsgModal input[name='ipt-fksjian']").val("");
    $("#debtMsgModal select[name='ipt-dkqxian']").val("");
    $('#debtMsgModal input[name="ipt-hkfshi"][value='+  +']').attr("checked",true);
    $("#debtMsgModal input[name='ipt-ygje']").val("");
    $("#debtMsgModal input[name='ipt-dbje']").val("");
    $('#debtMsgModal input[name="ipt-dblxing"][value='+  +']').attr("checked",true);
    $('#debtMsgModal input[name="ipt-dbztai"][value='+  +']').attr("checked",true);
  })
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

/*$(".zhengxin-add").click(function(){
  addMessage("#creditMsgModal .credit-form", "#creditMsgModal .btn-add", 'addcredit');
});*/
  $("body").on("click",".zhengxin-add",function(){
    addMessage("#creditMsgModal .credit-form", "#creditMsgModal .btn-add", 'addcredit');
    $("#creditMsgModal input[name='ipt-zxcxsjian']").val("");
    $("#creditMsgModal .form-control").val("");
    $("#creditMsgModal select[name='ipt-zxcxcshu-b[]']").val("");
    $("#creditMsgModal input[name='ipt-zxcxcshu-c[]']").val("");
    $("#creditMsgModal select[name='ipt-zxyqi-c"+"[]"+"]'").val("");
    $("#creditMsgModal input[name='ipt-zxyqi-d[]']").val("");


  })
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
            var cxcshuHtml2 = '<li class="row"><div class="col-xs-3 pr10"><select name="ipt-zxcxcshu-a['+ i +']" id="" class="form-control" value=""><option value=""></option><option value="1">贷款审批</option><option value="2">信用卡审批</option><option value="3">人行查询</option><option value="4">个人网查</option></select></div><div class="col-xs-3 pr10"><select name="ipt-zxcxcshu-b['+ i +']" id="" class="form-control time-sel03" value="'+ cxcshuData2[i].b +'"><option value=""></option><option value="1">近1个月</option><option value="2">近2个月</option><option value="3">近3个月</option><option value="4">近4个月</option><option value="5">近5个月</option><option value="6">近6个月</option></select></div><div class="col-xs-1"><input type="text" class="form-control" name="ipt-zxcxcshu-c[]" value="'+ cxcshuData2[i].c +'"></div><div class="col-xs-1 pl10">次</div><div class="col-xs-2"><div class="sru_add"></div></div></li>'
            $(".modal-body #zxChaxunList").append(cxcshuHtml2);
            $('#zxChaxunList .sru_add').not(':last').hide();
            $('#zxYuqiList .sru_add').not(':last').hide();
            console.log(aa, bb);
            $("body select[name='ipt-zxcxcshu-a["+ idx +"]']").val(aa);
            $("body select[name='ipt-zxcxcshu-b["+ idx +"]']").val(bb);
          }

          if (!cxcshuData2.length) {
            var nullHtml2 = '<li class="row"><div class="col-xs-3 pr10"><select name="ipt-zxcxcshu-a0"id=""class="form-control"value=""><option value=""></option><option value="1">贷款审批</option><option value="2">信用卡审批</option><option value="3">人行查询</option><option value="4">个人网查</option></select></div><div class="col-xs-3 pr10"><select name="ipt-zxcxcshu-b0"id=""class="form-control time-sel03"value=""><option value=""></option><option value="1">近1个月</option><option value="2">近2个月</option><option value="3">近3个月</option><option value="4">近4个月</option><option value="5">近5个月</option><option value="6">近6个月</option></select></div><div class="col-xs-1"><input type="text"class="form-control"name="ipt-zxcxcshu-c[]"value=""></div><div class="col-xs-1 pl10">次</div><div class="col-xs-2"><div class="sru_add"></div></div></li>';
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
            var yuqiHtml2 = '<li class="row"><div class="col-xs-2 pr10"><select name="ipt-zxyqi-a['+ i +']" id="" class="form-control" value=""><option value=""></option><option value="1">信用卡</option><option value="2">贷款</option><option value="3">准贷记卡</option></select></div><div class="col-xs-2 pr10"><select name="ipt-zxyqi-b['+ i +']" id="" class="form-control time-sel03" value=""><option value=""></option><option value="1">当前</option><option value="2">半年内</option><option value="3">1年内</option><option value="4">2年内</option><option value="5">近2～5年</option></select></div><div class="col-xs-1 text-center">有</div><div class="col-xs-1"><select name="ipt-zxyqi-c['+ i +']" id=""class="form-control" value=""><option value=""></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option></select></div><div class="col-xs-1 text-center">逾期</div><div class="col-xs-2 pr10"><input type="text" class="form-control" name="ipt-zxyqi-d[]" value="'+ dd +'"></div><div class="col-xs-1 text-left pl10">元</div><div class="col-xs-1"><div class="sru_add"></div></div></li>';
            $(".modal-body #zxYuqiList").append(yuqiHtml2);
            $("body select[name='ipt-zxyqi-a["+ idx +"]']").val(aa);
            $("body select[name='ipt-zxyqi-b["+ idx +"]']").val(bb);
            $("body select[name='ipt-zxyqi-c["+ idx +"]']").val(cc);
          }

          console.log(yqiData2.length);
          if (!yqiData2.length) {
            var nullHtml = '<li class="row"><div class="col-xs-2 pr10"><select name="ipt-zxyqi-a0"id=""class="form-control"value=""><option value=""></option><option value="1">信用卡</option><option value="2">贷款</option><option value="3">准贷记卡</option></select></div><div class="col-xs-2 pr10"><select name="ipt-zxyqi-b0"id=""class="form-control time-sel03"value=""><option value=""></option><option value="1">当前</option><option value="2">半年内</option><option value="3">1年内</option><option value="4">2年内</option><option value="5">近2～5年</option></select></div><div class="col-xs-1 text-center">有</div><div class="col-xs-1"><select name="ipt-zxyqi-c0"id=""class="form-control"value=""><option value=""></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option></select></div><div class="col-xs-1 text-center">逾期</div><div class="col-xs-2 pr10"><input type="text"class="form-control"name="ipt-zxyqi-d[]"value=""></div><div class="col-xs-1 text-left pl10">元</div><div class="col-xs-1"><div class="sru_add"></div></div></li>';
            $(".modal-body #zxYuqiList").append(nullHtml);
          };
        },
        'error' : function(){
          alert("征信信息修改请求出错")
        }
      });
    });



//司法案件信息修改

/*$(".sifa-add").click(function(){
  addMessage("#judicialModal .case-form", "#judicialModal .btn-add", 'addcase');
});*/
  $("body").on("click",".sifa-add",function(){
    addMessage("#judicialModal .case-form", "#judicialModal .btn-add", 'addcase');
    $("#judicialModal select[name='ipt-jllxing']").val("");
    $("#judicialModal input[name='ipt-ajsjian']").val("");
    $('#judicialModal input[name="ipt-sfkwcha"][value='+  +']').attr("checked",true);

  })

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

/*$(".beizhu-add").click(function(){
  addMessage("#remarkModal .memo-form", "#remarkModal .btn-add", 'addmemo');
});*/
  $("body").on("click",".beizhu-add",function(){
    addMessage("#remarkModal .memo-form", "#remarkModal .btn-add", 'addmemo');
    $("#remarkModal textarea[name='ipt-memo']").val("");

  })
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
  //工资信息修改
  $("body").on("click",".income1-add",function(){
    addMessage("#wagesModal .income1-form", "#wagesModal .btn-add", 'addincome1');
    $("#wagesModal input[name='ipt-gz_gzffxshi']").removeAttr('checked');
    //$("#wagesModal input[name='ipt-gz_gzffxshi']").val("");
    $("#wagesModal input[name='ipt-gz_gzmoney']").val("");
  })
  $("body").on("click",".income1_compole .btn-edit ",function(){

      var dataid = $(this).data("itemid");
      $(".ipt-id").val(dataid);
      changeMessage("#wagesModal .income1-form","#wagesModal .btn-add","saveincome1");
      /*console.log($("#wagesModal .policy-form"));
       console.log($("#wagesModal .btn-add"));
       console.log($("saveincome1"));*/
      $.ajax({
        "type":"GET",
        "url":"customer-detail.php?id="+ dataid +"&action=jsonincome1",
        "dataType":'json',
        "success":function(response){
          var data = response;
          $('#wagesModal input[name="ipt-gz_gzffxshi"][value='+data.gz_gzffxshi+']').prop("checked",true);

          $("#wagesModal input[name='ipt-gz_gzmoney']").val(data.gz_gzmoney);

        },
        "error":function(){
          alert("工资修改有误");
        }
      })
  });
  //社保信息修改
    $("[name='ipt-sb_sbjndwei']").change(function(){
      $(this).val()==2?$('.dsfgsm').show():$('.dsfgsm').hide();
    });

  $("body").on("click",".income2-add",function(){
    console.log("ccc");
    addMessage("#insuranceModal .income2-form", "#insuranceModal .btn-add", 'addincome2');
    $('#insuranceModal input[name="ipt-sb_sbjnztai"][value='+ +']').attr("checked",true);
    $('#insuranceModal input[name="ipt-sb_gs_yljs"]').val("");
    $('#insuranceModal input[name="ipt-sb_gr_yljs"]').val("");
    $('#insuranceModal input[name="ipt-sb_gs_sbjnbli"]').val("");
    $('#insuranceModal input[name="ipt-sb_gr_sbjnbli"]').val("");
    $('#insuranceModal input[name="ipt-sb_gs_sbjnmoney"]').val("");
    $('#insuranceModal input[name="ipt-sb_gr_sbjnmoney"]').val("");
    $('#insuranceModal select[name="ipt-sb_sbjndsheng"]').val("");
    $('#insuranceModal select[name="ipt-sb_sbjndshi"]').val("");
    $('#insuranceModal input[name="ipt-sb_sbjndwei"][value='+ +']').attr("checked",true);
    $('#insuranceModal input[name="ipt-sb_dsfgsming"]').val("");
  });
  $("body").on("click",".income2_compole .btn-edit ",function(){
    console.log("改");
    var dataid = $(this).data("itemid");
    $(".ipt-id").val(dataid);
    changeMessage("#insuranceModal .income2-form","#insuranceModal .btn-add","saveincome2");
    /*console.log($("#wagesModal .policy-form"));
     console.log($("#wagesModal .btn-add"));
     console.log($("saveincome1"));*/
    $.ajax({
      "type":"GET",
      "url":"customer-detail.php?id="+ dataid +"&action=jsonincome2",
      "dataType":'json',
      "success":function(response){
        var data = response;
        console.log(data);
        $('#insuranceModal input[name="ipt-sb_sbjnztai"][value='+data.sb_sbjnztai+']').attr("checked",true);
        var item = '.item0'+data.sb_sbjnztai;
        $('#insuranceModal .sbjn_item').hide();
        $('#insuranceModal '+item).show().find('input').attr('name','ipt-sb_sbxxyfen');
        $('[name="ipt-sb_sbxxyfen"]').val(data.sb_sbxxyfen);
        $('#insuranceModal input[name="ipt-sb_gs_yljs"]').val(data.sb_gs_yljs);
        $('#insuranceModal input[name="ipt-sb_gr_yljs"]').val(data.sb_gr_yljs);
        $('#insuranceModal input[name="ipt-sb_gs_sbjnbli"]').val(data.sb_gs_sbjnbli);
        $('#insuranceModal input[name="ipt-sb_gr_sbjnbli"]').val(data.sb_gr_sbjnbli);
        $('#insuranceModal input[name="ipt-sb_gs_sbjnmoney"]').val(data.sb_gs_sbjnmoney);
        $('#insuranceModal input[name="ipt-sb_gr_sbjnmoney"]').val(data.sb_gr_sbjnmoney);
        $('#insuranceModal select[name="ipt-sb_sbjndsheng"]').val(data.sb_sbjndsheng);
        $('#insuranceModal select[name="ipt-sb_sbjndsheng"]').trigger('change');
        $('#insuranceModal select[name="ipt-sb_sbjndshi"]').val(data.sb_sbjndshi);
        $('#insuranceModal input[name="ipt-sb_sbjndwei"][value='+data.sb_sbjndwei+']').attr("checked",true);
        $('#insuranceModal input[name="ipt-sb_dsfgsming"]').val(data.sb_dsfgsming);
        $('[name="ipt-sb_sbjndwei"]:checked').val()==2?$('.dsfgsm').show():$('.dsfgsm').hide();
      },
      "error":function(){
        alert("社保修改有误");
      }
    })
  });
//公积金修改
      $('[name="ipt-gjj_gjjjndwei"]').change(function(){
        $(this).val()==2?$('.gjjdsfgsm').show():$('.gjjdsfgsm').hide();
      });
  $("body").on("click",".income3-add",function(){
    addMessage("#demand .income3-form", "#demand .btn-add", 'addincome3');
    $('#demand input[name="ipt-gjj_gjjjnztai"][value='+ +']').attr("checked",true);
    $('#demand input[name="ipt-gjj_gs_gjjjs"]').val("");
    $('#demand input[name="ipt-gjj_gr_gjjjs"]').val("");
    $('#demand input[name="ipt-gjj_gs_gjjjnbli"]').val("");
    $('#demand input[name="ipt-gjj_gr_gjjjnbli"]').val("");
    $('#demand input[name="ipt-gjj_gs_gjjjnmoney"]').val("");
    $('#demand input[name="ipt-gjj_gr_gjjjnmoney"]').val("");
    $('#demand select[name="ipt-gjj_gjjjndsheng"]').val("");
    $('#demand select[name="ipt-gjj_gjjjndshi"]').val("");
    $('#demand input[name="ipt-gjj_gjjjndwei"][value='+ +']').attr("checked",true);
    $('#demand input[name="ipt-gjj_dsfgsming"]').val("");
  })
  $("body").on("click",".income3_compole .btn-edit ",function(){

    var dataid = $(this).data("itemid");
    $(".ipt-id").val(dataid);
    changeMessage("#demand .income3-form","#demand .btn-add","saveincome3");
    $.ajax({
      "type":"GET",
      "url":"customer-detail.php?id="+ dataid +"&action=jsonincome3",
      "dataType":'json',
      "success":function(response){
        var data = response;
        $('#demand input[name="ipt-gjj_gjjjnztai"][value='+data.gjj_gjjjnztai+']').attr("checked",true);
        $('#demand input[name="ipt-gjj_gs_gjjjs"]').val(data.gjj_gs_gjjjs);
        $('#demand input[name="ipt-gjj_gr_gjjjs"]').val(data.gjj_gr_gjjjs);
        $('#demand input[name="ipt-gjj_gs_gjjjnbli"]').val(data.gjj_gs_gjjjnbli);
        $('#demand input[name="ipt-gjj_gr_gjjjnbli"]').val(data.gjj_gr_gjjjnbli);
        $('#demand input[name="ipt-gjj_gs_gjjjnmoney"]').val(data.gjj_gs_gjjjnmoney);
        $('#demand input[name="ipt-gjj_gr_gjjjnmoney"]').val(data.gjj_gr_gjjjnmoney);
        $('#demand select[name="ipt-gjj_gjjjndsheng"]').val(data.gjj_gjjjndsheng);
        $('#demand select[name="ipt-gjj_gjjjndshi"]').val(data.gjj_gjjjndshi);
        $('#demand input[name="ipt-gjj_gjjjndwei"][value='+data.gjj_gjjjndwei+']').attr("checked",true);
        $('#demand input[name="ipt-gjj_dsfgsming"]').val(data.gjj_dsfgsming);
        $('[name="ipt-gjj_gjjjndwei"]:checked').val()==2?$('.gjjdsfgsm').show():$('.gjjdsfgsm').hide();
      },
      "error":function(){
        alert("公积金修改有误");
      }
    })
  });

  //个税修改
    $("[name='ipt-sds_jndwei']").change(function(){
      $(this).val()==2?$('.sdsdsfgsm').show():$('.sdsdsfgsm').hide();
    })

  $("body").on("click",".income4-add",function(){
    addMessage("#taxModal .income4-form", "#taxModal .btn-add", 'addincome4');
    $('#taxModal input[name="ipt-sds_jnztai"][value='+ +']').attr("checked",true);
    $('#taxModal input[name="ipt-sds_sqgzi"]').val("");
    $('#taxModal input[name="ipt-sds_gsmoney"]').val("");
    $('#taxModal select[name="ipt-sds_jndsheng"]').val("");
    $('#taxModal select[name="ipt-sds_jndshi"]').val("");
    $('#taxModal input[name="ipt-sds_jndwei"][value='+ +']').attr("checked",true);
    $('#taxModal input[name="ipt-sds_dsfgsming"]').val("");
  })
  $("body").on("click",".income4_compole .btn-edit ",function(){
    var dataid = $(this).data("itemid");
    $(".ipt-id").val(dataid);
    changeMessage("#taxModal .income4-form","#taxModal .btn-add","saveincome4");
    $.ajax({
      "type":"GET",
      "url":"customer-detail.php?id="+ dataid +"&action=jsonincome4",
      "dataType":'json',
      "success":function(response){
        var data = response;
        $('#taxModal input[name="ipt-sds_jnztai"][value='+data.sds_jnztai+']').attr("checked",true);
        $('#taxModal input[name="ipt-sds_sqgzi"]').val(data.sds_sqgzi);
        $('#taxModal input[name="ipt-sds_gsmoney"]').val(data.sds_gsmoney);
        $('#taxModal select[name="ipt-sds_jndsheng"]').val(data.sds_jndsheng);
        $('#taxModal select[name="ipt-sds_jndshi"]').val(data.sds_jndshi);
        $('#taxModal input[name="ipt-sds_jndwei"][value='+data.sds_jndwei+']').attr("checked",true);
        $('#taxModal input[name="ipt-sds_dsfgsming"]').val(data.sds_dsfgsming);
        $('[name="ipt-sds_jndwei"]:checked').val()==2?$('.sdsdsfgsm').show():$('.sdsdsfgsm').hide();
      },
      "error":function(){
        alert("公积金修改有误");
      }
    })
  });

  //流水修改\
  $("body").on("click",".income5-add",function(){
    addMessage("#flowModal .income5-form", "#flowModal .btn-add", 'addincome5');

    $('#flowModal .main').html('<div class="sru_wrap">\n' +
        '                    <div class="row mt20">\n' +
        '                        <div class="col-xs-3 text-right lh34">流水类别：</div>\n' +
        '                        <div class="col-xs-4">\n' +
        '                            <select name=""  class="form-control lslb">\n' +
        '                                <option value=""></option>\n' +
        '                                <option value="1">公帐流水</option>\n' +
        '                                <option value="2">开票流水</option>\n' +
        '                                <option value="3">私帐流水</option>\n' +
        '                                <option value="4">POS机流水</option>\n' +
        '                            </select>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="row mt10">\n' +
        '                        <div class="col-xs-3 text-right lh34">月均流水：</div>\n' +
        '                        <div class="col-xs-4">\n' +
        '                            <label>\n' +
        '                                <input type="text" class="form-control control-num2 yjlshui" type="text" name="" value="">\n' +
        '                            </label>\n' +
        '                        </div>\n' +
        '                        <div class="col-xs-2 pl10 lh34">万元／月</div>\n' +
        '                    </div>\n' +
        '                    <div class="row mt10 jxrow">\n' +
        '                        <div class="col-xs-3 text-right lh34">结息：</div>\n' +
        '                        <div class="col-xs-4">\n' +
        '                            <select name="" class="form-control jxsel">\n' +
        '                                <option value=""></option>\n' +
        '                                <option value="3月21日">3月21日</option>\n' +
        '                                <option value="6月21日">6月21日</option>\n' +
        '                                <option value="9月21日">9月21日</option>\n' +
        '                                <option value="12月21日">12月21日</option>\n' +
        '                            </select>\n' +
        '                        </div>\n' +
        '                        <div class="col-xs-3 pl10">\n' +
        '                            <label >\n' +
        '                                <input type="text" class="form-control control-num2 jximoney" type="text" name="" value="">\n' +
        '                            </label>\n' +
        '                        </div>\n' +
        '                        <div class="col-xs-1 pl10 lh34">元</div>\n' +
        '                    </div>\n' +
        '                    <div class="row mt10">\n' +
        '                        <div class="col-xs-9 col-xs-offset-3">\n' +
        '                            <div class="sru_add"></div>\n' +
        '                            <div class="sru_minus"></div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>');
  })
  $("body").on("click",".income5_compole .btn-edit ",function(){
    var dataid = $(this).data("itemid");
    $(".ipt-id").val(dataid);
    changeMessage("#flowModal .income5-form","#flowModal .btn-add","saveincome5");
      $('#flowModal .main').html('');
    $.ajax({
      "type":"GET",
      "url":"customer-detail.php?id="+ dataid +"&action=jsonincome5",
      "dataType":'json',
      "success":function(response){
        var data = response;
        var lsuihtml1='', lsuihtml2='', lsuihtml3='', lsuihtml4='';

      if(data.ls_gz_yjlshui!=0){
        lsuihtml1 = '<div class="sru_wrap"> <div class="row mt20"> <div class="col-xs-3 text-right lh34">流水类别：</div><div class="col-xs-4"><select name=""  class="form-control lslb"><option value=""></option><option value="1">公帐流水</option> <option value="2">开票流水</option> <option value="3">私帐流水</option> <option value="4">POS机流水</option> </select> </div></div> <div class="row mt10"> <div class="col-xs-3 text-right lh34">月均流水：</div> <div class="col-xs-4"> <label> <input type="text" class="form-control control-num2 yjlshui" type="text" name="ipt-ls_gz_yjlshui" value=""> </label> </div> <div class="col-xs-2 pl10 lh34">万元／月</div> </div> <div class="row mt10 jxrow"> <div class="col-xs-3 text-right lh34">结息：</div> <div class="col-xs-4"> <select name="ipt-ls_gz_jxdate1" class="form-control jxsel"> <option value=""></option> <option value="3月21日">3月21日</option> <option value="6月21日">6月21日</option> <option value="9月21日">9月21日</option> <option value="12月21日">12月21日</option> </select> </div> <div class="col-xs-3 pl10"> <label > <input type="text" class="form-control control-num2 jximoney" type="text" name="ipt-ls_gz_jxmoney1" value=""> </label> </div> <div class="col-xs-1 pl10 lh34">元</div> </div> <div class="row mt10"> <div class="col-xs-9 col-xs-offset-3"> <div class="sru_add"></div> <div class="sru_minus"></div> </div> </div> </div>' ;
          $('#flowModal .main').append(lsuihtml1);
          $('[name="ipt-ls_gz_yjlshui"]').parentsUntil('.main').find('select.lslb').val(1);
      }
      if(data.ls_kp_yjlshui!=0){
          lsuihtml2 = '<div class="sru_wrap"> <div class="row mt20"> <div class="col-xs-3 text-right lh34">流水类别：</div><div class="col-xs-4"><select name=""  class="form-control lslb"><option value=""></option><option value="1">公帐流水</option> <option value="2">开票流水</option> <option value="3">私帐流水</option> <option value="4">POS机流水</option> </select> </div></div> <div class="row mt10"> <div class="col-xs-3 text-right lh34">月均流水：</div> <div class="col-xs-4"> <label> <input type="text" class="form-control control-num2 yjlshui" type="text" name="ipt-ls_kp_yjlshui" value=""> </label> </div> <div class="col-xs-2 pl10 lh34">万元／月</div> </div> <div class="row mt10 jxrow"> <div class="col-xs-3 text-right lh34">结息：</div> <div class="col-xs-4"> <select name="ipt-ls_kp_jxdate1" class="form-control jxsel"> <option value=""></option> <option value="3月21日">3月21日</option> <option value="6月21日">6月21日</option> <option value="9月21日">9月21日</option> <option value="12月21日">12月21日</option> </select> </div> <div class="col-xs-3 pl10"> <label > <input type="text" class="form-control control-num2 jximoney" type="text" name="ipt-ls_kp_jxmoney1" value=""> </label> </div> <div class="col-xs-1 pl10 lh34">元</div> </div> <div class="row mt10"> <div class="col-xs-9 col-xs-offset-3"> <div class="sru_add"></div> <div class="sru_minus"></div> </div> </div> </div>' ;
          $('#flowModal .main').append(lsuihtml2);
          $('[name="ipt-ls_kp_yjlshui"]').parentsUntil('.main').find('select.lslb').val(2);
      }
      if(data.ls_sz_yjlshui!=0){
         lsuihtml3 = '<div class="sru_wrap"> <div class="row mt20"> <div class="col-xs-3 text-right lh34">流水类别：</div><div class="col-xs-4"><select name=""  class="form-control lslb"><option value=""></option><option value="1">公帐流水</option> <option value="2">开票流水</option> <option value="3">私帐流水</option> <option value="4">POS机流水</option> </select> </div></div> <div class="row mt10"> <div class="col-xs-3 text-right lh34">月均流水：</div> <div class="col-xs-4"> <label> <input type="text" class="form-control control-num2 yjlshui" type="text" name="ipt-ls_sz_yjlshui" value=""> </label> </div> <div class="col-xs-2 pl10 lh34">万元／月</div> </div> <div class="row mt10 jxrow"> <div class="col-xs-3 text-right lh34">结息：</div> <div class="col-xs-4"> <select name="ipt-ls_sz_jxdate1" class="form-control jxsel"> <option value=""></option> <option value="3月21日">3月21日</option> <option value="6月21日">6月21日</option> <option value="9月21日">9月21日</option> <option value="12月21日">12月21日</option> </select> </div> <div class="col-xs-3 pl10"> <label > <input type="text" class="form-control control-num2 jximoney" type="text" name="ipt-ls_sz_jxmoney1" value=""> </label> </div> <div class="col-xs-1 pl10 lh34">元</div> </div> <div class="row mt10"> <div class="col-xs-9 col-xs-offset-3"> <div class="sru_add"></div> <div class="sru_minus"></div> </div> </div> </div>' ;
          $('#flowModal .main').append(lsuihtml3);
          $('[name="ipt-ls_sz_yjlshui"]').parentsUntil('.main').find('select.lslb').val(3);
      }
      if(data.ls_pos_yjlshui!=0){
          lsuihtml4 = '<div class="sru_wrap"> <div class="row mt20"> <div class="col-xs-3 text-right lh34">流水类别：</div><div class="col-xs-4"><select name=""  class="form-control lslb"><option value=""></option><option value="1">公帐流水</option> <option value="2">开票流水</option> <option value="3">私帐流水</option> <option value="4">POS机流水</option> </select> </div></div> <div class="row mt10"> <div class="col-xs-3 text-right lh34">月均流水：</div> <div class="col-xs-4"> <label> <input type="text" class="form-control control-num2 yjlshui" type="text" name="ipt-ls_pos_yjlshui" value=""> </label> </div> <div class="col-xs-2 pl10 lh34">万元／月</div> </div> <div class="row mt10"> <div class="col-xs-9 col-xs-offset-3"> <div class="sru_add">+</div> <div class="sru_minus">-</div> </div> </div> </div>' ;
          $('#flowModal .main').append(lsuihtml4);
          $('[name="ipt-ls_pos_yjlshui"]').parentsUntil('.main').find('select.lslb').val(4);
      }

        $('#flowModal input[name="ipt-ls_gz_yjlshui"]').val(data.ls_gz_yjlshui);
        $('#flowModal select[name="ipt-ls_gz_jxdate1"]').val(data.ls_gz_jxdate1);
        $('#flowModal input[name="ipt-ls_gz_jxmoney1"]').val(data.ls_gz_jxmoney1);
        $('#flowModal input[name="ipt-ls_kp_yjlshui"]').val(data.ls_kp_yjlshui);
        $('#flowModal select[name="ipt-ls_kp_jxdate1"]').val(data.ls_kp_jxdate1);
        $('#flowModal input[name="ipt-ls_kp_jxmoney1"]').val(data.ls_kp_jxmoney1);
        $('#flowModal input[name="ipt-ls_sz_yjlshui"]').val(data.ls_sz_yjlshui);
        $('#flowModal select[name="ipt-ls_sz_jxdate1"]').val(data.ls_sz_jxdate1);
        $('#flowModal input[name="ipt-ls_sz_jxmoney1"]').val(data.ls_sz_jxmoney1);
        $('#flowModal input[name="ipt-ls_pos_yjlshui"]').val(data.ls_pos_yjlshui);
      },
      "error":function(){
        alert("修改有误");
      }
    })
  });
  // 每次清空流水信息得模态框内容
  $('#flowModal').on('hidden.bs.modal', function(){
    $(this).find('.main').empty();
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

   /* $("form[name='yhca']").submit();*/
  var form = new FormData($("#cardForm")[0]);
  $.ajax({
    url:window.location.href,
    type:"POST",
    data:form,
    async:false,
    cache:false,
    dataType:"json",
    contentType:false,
    processData:false,
    success:function(returndata){
      bankCardData = returndata;
      console.log(bankCardData);
      var bankCardDataHtml = '';
      var bankModification = '';
      var num_id = '';
      var bank_compile = "";
      for(i in bankCardData){
        //console.log(bankCardData[i].id);
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
        $(".t_id").html("");
        $(".bankModification").html("");
        $(".bankCardDataHtml").html("");
        $(".bank_compile").html("");

        num_id += `<div class="_data_id" data-id="${bankCardData[i].id}">${bankCardData[i].id}</div> `;
        $(".t_id").append(num_id);
        $("._data_id").each(function(i,v){
          console.log(v);
          console.log(i);
          $(v).html(i+1);
          if($(v).html()==1){
            $(v).css("color","#000").addClass("bank_index_id");
          }
        });
        var yhang = bankArr[bankCardData[i].yhang - 1];
        //bankModification += '<div class="change-btn btn-change" data-cardid="'+ bankCardData[i].id +'" style="cursor: pointer">修改</div>';
        bankCardDataHtml = bankCardDataHtml + '<ul class="bank_UL">' + '<li><div class="row "><div class="col-xs-4 text-right">银行卡归属：</div><div class="col-xs-8 pl10">'+ yhkgshu +'</div></div><div class="dsf-card '+ unshow +'"><div class="row mt5"><div class="col-xs-4 text-right">第三方姓名：</div><div class="col-xs-8 pl10">'+ bankCardData[i].dsfxming +'</div></div><div class="row mt5"><div class="col-xs-4 text-right">第三方身份证：</div><div class="col-xs-8 pl10">'+ bankCardData[i].dsfsfzhma +'</div></div></div><div class="row mt5"><div class="col-xs-4 text-right">账户类型：</div><div class="col-xs-8 pl10">'+ zhlxing +'</div></div><div class="row mt5"><div class="col-xs-4 text-right">银行：</div><div class="col-xs-8 pl10">'+ yhang +'</div></div><div class="row mt5"><div class="col-xs-4 text-right">行号：</div><div class="col-xs-8 pl10">'+ bankCardData[i].hhao +'</div></div><div class="row mt5"><div class="col-xs-4 text-right">银行帐号：</div><div class="col-xs-8 pl10">'+ bankCardData[i].yhzhao +'</div></div><div class="xyka-model '+ unshow2 +'"><div class="row mt5"><div class="col-xs-4 text-right">信用卡有效期：</div><div class="col-xs-8 pl10">'+ bankCardData[i].xykyxqi +'</div></div><div class="row mt5"><div class="col-xs-4 text-right">CVC码：</div><div class="col-xs-8 pl10">'+ bankCardData[i].cvcma +'</div></div></div></li></ul>'
        bank_compile +='<div class="change-btn btn-change" data-cardid="'+ bankCardData[i].id +'" style="cursor: pointer" data-toggle="modal" data-target="#cardMsgModal">修改</div>';
        //bankCardDataHtml = bankCardDataHtml + '<ul>' + '<li><div class="row mt15"><div class="col-xs-4 text-right">银行卡归属：</div><div class="col-xs-8 pl10">'+ yhkgshu +'</div></div><div class="dsf-card '+ unshow +'"><div class="row mt5"><div class="col-xs-4 text-right">第三方姓名：</div><div class="col-xs-8 pl10">'+ bankCardData[i].dsfxming +'</div></div><div class="row mt5"><div class="col-xs-4 text-right">第三方身份证：</div><div class="col-xs-8 pl10">'+ bankCardData[i].dsfsfzhma +'</div></div></div><div class="row mt5"><div class="col-xs-4 text-right">账户类型：</div><div class="col-xs-8 pl10">'+ zhlxing +'</div></div><div class="row mt5"><div class="col-xs-4 text-right">银行：</div><div class="col-xs-8 pl10">'+ yhang +'</div></div><div class="row mt5"><div class="col-xs-4 text-right">行号：</div><div class="col-xs-8 pl10">'+ bankCardData[i].hhao +'</div></div><div class="row mt5"><div class="col-xs-4 text-right">银行帐号：</div><div class="col-xs-8 pl10">'+ bankCardData[i].yhzhao +'</div></div><div class="xyka-model '+ unshow2 +'"><div class="row mt5"><div class="col-xs-4 text-right">信用卡有效期：</div><div class="col-xs-8 pl10">'+ bankCardData[i].xykyxqi +'</div></div><div class="row mt5"><div class="col-xs-4 text-right">CVC码：</div><div class="col-xs-8 pl10">'+ bankCardData[i].cvcma +'</div></div></div><div class="change-btn btn-change" data-cardid="'+ bankCardData[i].id +'" style="cursor: pointer">修改</div><div class="card-type">'+ bankCardData[i].id +'</div><div class="bottom-line"></div></li></ul>'
        //$(".bankModification").append(bankModification);
        $(".bankCardDataHtml").append(bankCardDataHtml);
        $(".bank_compile").append(bank_compile);
        var bank_first = $(".bankCardDataHtml").find(".bank_UL");
        $(bank_first[0]).show().siblings().hide();
        var bank_compile0 = $(".bank_compile ").find(".change-btn");
        console.log($(bank_compile0[0]));
        $(bank_compile0[0]).show().siblings().hide();

        $(".t_main .t_id ._data_id").on("click",function(){
          for(var i in bankCardData){
            if(bankCardData[i].id === $(this).attr("data-id")){
              $(this).css("color","#000").addClass("bank_index_id").siblings().removeClass("bank_index_id");
              $('.bank_UL:eq('+$(this).index()+')').show().siblings().hide();
              //$('.bank_btn:eq('+$(this).index()+')').show().siblings().hide();
              $(".change-btn:eq("+$(this).index()+")").show().siblings().hide();
            }
          }
        });
        $(".t_foot .bank_compile .btn-change").on("click",function(e){
          console.log(this);
          e.preventDefault();
          console.log($(this).data("target"));
          var bankcardId = $(this).data("cardid");
          console.log(bankcardId);
          $(".bankcard-form").attr('value', "savebanks");
          $(".ipt-id").val(bankcardId);
          $("#cardMsgModal .btn-add").text('保存');

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
              console.log(data.yhkgshu +"yhkgshu");
              yhkDsfHide(data.yhkgshu);
              cardxykShow(data.zhlxing);
            },
            'error' : function(){
              alert("银行卡信息修改请求出错")
            }
          });
        })
        $(".card").on("click",function(){
          addMessage("#cardMsgModal .bankcard-form", "#cardMsgModal .bank_btn", 'addbanks');
          $('input[name="ipt-yhkgshu"][value='+   +']').attr("checked",true);

          $("#cardMsgModal input[name='ipt-dsfxming']").val("");
          $("#cardMsgModal input[name='ipt-dsfsfzhma']").val("");
          $('input[name="ipt-zhlxing"][value='+   +']').attr("checked",true);

          $("#cardMsgModal select[name='ipt-yhang']").val("");
          $("#cardMsgModal input[name='ipt-hhao']").val("");
          $("#cardMsgModal input[name='ipt-yhzhao']").val("");

          $("#cardMsgModal input[name='ipt-xykyxqi']").val("");
          $("#cardMsgModal input[name='ipt-cvcma']").val("");
        })
      };
      $("#cardMsgModal").modal("hide");
      dataMsgInit();
    },
    error:function(returndata){

      alert(returndata);
    }
  })
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
