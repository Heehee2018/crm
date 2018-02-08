(function(doc, win) {

  //
  var selectChangeItem = function(selectId, obj){
      $(selectId).change(function(){
          var val = $(selectId).val();
          $(obj).eq(val).show().siblings().hide();
      })
  }
  selectChangeItem(".time-select", ".type-time ul li");
  selectChangeItem(".ed-select", ".type-ed ul li");
  selectChangeItem(".interest-select", ".type-interest ul li");
  selectChangeItem(".loan-select", ".type-loan ul li");



var modalShow = false;
$(".shouye .computer").click(function(){
  modalShow = true;
  $(".modal.jisuanqi").show();
  stop();
})

$(".modal-close").click(function(){
  move();
  $(".modal").hide();
})


$(".modal").click(function(){
  modalShow = false
  $(".modal").hide();
  move();
})
$(".jisuanqi-modal").click(function(event){
  console.log(modalShow);
  event.stopPropagation();
})


//实现滚动条无法滚动
var mo=function(e){
  e.preventDefault();
};

//弹出弹窗禁止滑动
function stop(){
  document.body.style.overflow='hidden';        
  document.addEventListener("touchmove",mo,false); //禁止页面滑动
}

//取消滑动限制
function move(){
  document.body.style.overflow=''; //出现滚动条
  document.removeEventListener("touchmove",mo,false);        
}


//弹出验证码
var vdCodeShow = function(){
  modalShow = true;
  $(".modal.modal-yzm").show();
  stop();
}
  
$(".yzm-modal").click(function(event){
  event.stopPropagation();
})
/*$(".jisuanqi-modal").click(function(event){
  console.log(modalShow);
  event.stopPropagation();
})*/



// 计算器计算规则
var arr01 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 150, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000];
var arr02 = [3, 6, 12, 18, 24, 36, 48, 60, 72, 84, 96, 108, 120, 180, 240, 360];


//赋值计算器贷款额度和期数
var htmlSum = '';
var htmlQs = '';
  var selectVal = function(m, n, o, k){
    for(i = m; i <= n; i++){
      html = "<option value=" + arr01[i] +">"+ arr01[i] +"</option>"
      htmlSum = htmlSum + html;
    }
    $(".jine-sel").append(htmlSum)

    for(i = o; i <= k; i++){
      html = "<option value=" + arr02[i] +">"+ arr02[i] +"</option>"
      htmlQs = htmlQs + html;
    }
    $(".qishu-sel").append(htmlQs)
  }

  var budgetNum = function(selectId){

    $(selectId).change(function(){
      $(".qishu-sel").html('<option value="0">请选择</option>');
      $(".jine-sel").html('<option value="0">请选择</option>');
      htmlQs = '';
      htmlSum = '';
      var val = $(selectId).val();
      $(".modal .money-number").text('0.00');
      //var baseNum = $(".modal .nbfei-input").val();
      console.log(val)
      if(val == 1){
        selectVal(1, 24, 7, 15)
      }
      if(val == 2){
        selectVal(0, 9, 2, 5)
      }
      if(val == 3){
        selectVal(5, 25, 5, 14)
      }
      if(val == 4 || val == 7 || val == 8 || val == 9 || val == 10){
        selectVal(0, 9, 1, 7)
      }
      if(val == 5 || val == 11){
        selectVal(0, 9, 2, 5)
      }
      if(val == 6){
        selectVal(0, 9, 2, 7)
      }
      if(val == 12){
        selectVal(0, 17, 2, 5)
      }
      if(val == 13){
        selectVal(19, 26, 2, 7)
      }
    })
  }

  budgetNum(".modal .product-sel")


  var sumNum = 0.00;
  $(".jine-sel").change(function(){
      var type = $(".modal .product-sel").val();
      var jeVal = $(this).val();
      var dkqVal = $('.modal .qishu-sel').val();
      console.log(type, jeVal, dkqVal);
      if (dkqVal != 0) {
        if (type == 1) {
          sumNum = jeVal / dkqVal + jeVal * 0.0018;
        };
        if (type == 2) {
          sumNum = jeVal / dkqVal + jeVal * 0.0085;
        };
        if (type == 3) {
          sumNum = jeVal / dkqVal + jeVal * 0.0028;
        };
        if (type == 4) {
          sumNum = jeVal / dkqVal + jeVal * 0.0036;
        };
        if (type == 5) {
          sumNum = jeVal / dkqVal + jeVal * 0.0046;
        };
        if (type == 6 || type == 13) {
          sumNum = jeVal / dkqVal + jeVal * 0.008;
        };
        if (type == 7 || type == 8 || type == 9 || type == 10) {
          sumNum = jeVal / dkqVal + jeVal * 0.0030;
        };
        if (type == 11) {
          sumNum = jeVal / dkqVal + jeVal * 0.0108;
        };
        if (type == 12) {
          sumNum = jeVal / dkqVal + jeVal * 0.0064;
        };
      }else{
        return;
      };
      
      $(".modal .money-number").text((sumNum * 10000).toFixed(2));

  });

  $(".qishu-sel").change(function(){
      var type = $(".modal .product-sel").val();
      var jeVal = $(".modal .jine-sel").val();
      var dkqVal = $('.modal .qishu-sel').val();
      console.log(type, jeVal, dkqVal);
      if (jeVal != 0) {
        if (type == 1) {
          sumNum = jeVal / dkqVal + jeVal * 0.0018;
        };
        if (type == 2) {
          sumNum = jeVal / dkqVal + jeVal * 0.0085;
        };
        if (type == 3) {
          sumNum = jeVal / dkqVal + jeVal * 0.0028;
        };
        if (type == 4) {
          sumNum = jeVal / dkqVal + jeVal * 0.0036;
        };
        if (type == 5) {
          sumNum = jeVal / dkqVal + jeVal * 0.0046;
        };
        if (type == 6 || type == 13) {
          sumNum = jeVal / dkqVal + jeVal * 0.008;
        };
        if (type == 7 || type == 8 || type == 9 || type == 10) {
          sumNum = jeVal / dkqVal + jeVal * 0.003;
        };
        if (type == 11) {
          sumNum = jeVal / dkqVal + jeVal * 0.0108;
        };
        if (type == 12) {
          sumNum = jeVal / dkqVal + jeVal * 0.0064;
        };
      }else{
        return;
      }
      
      $(".modal .money-number").text((sumNum * 10000).toFixed(2));
  });


// 提交快速申请

var personData = {
  'ipt_cname': '',
  'ipt_sex': '',
  'ipt_mobile': '',
  'ipt_age': '',
  'location_p': '',
  'location_c': '',
  'ipt_dkmoney': '',
  'ipt_validatecode': ''
} 


function checkPhone(){
  personData.ipt_mobile = $("input[name='ipt-mobile']").val();
  
  if(!(/^1[34578]\d{9}$/.test(personData.ipt_mobile))){
      alert("输入手机号码有误");
      return;
  }else{
    vdCodeShow();
    $.ajax({
      type: "get",
      url: "../api/sendsms.php?phone=" + personData.ipt_mobile
    });
    setVdAgain();
  }
}

$('.submit-btn').click(function(){

  //console.log('性别选择：'+$("input[name='ipt-sex']").val());

  personData.ipt_cname = $('.apply-form .name-input').val();
  personData.ipt_sex = $("input:radio[name='ipt-sex']:checked").val();
  personData.ipt_mobile = $("input[name='ipt-mobile']").val();
  personData.ipt_age = $(".age-sel").val();
  personData.ipt_dkmoney = $("input[name='ipt-dkmoney']").val();

  var hasRead = $('.has-read').is(':checked');
  console.log(personData.ipt_cname, personData.ipt_sex, personData.ipt_mobile, personData.ipt_age, personData.ipt_dkmoney, hasRead)

  if (!personData.ipt_cname) {
    alert('请输入姓名');
    return;
  };
  if (!personData.ipt_sex) {
    alert('请选择性别');
    return;
  };
  if (!personData.ipt_mobile) {
    alert('请输入手机号');
    return;
  };
  if (personData.ipt_age == 0) {
    alert('请输入年龄');
    return;
  };
  if (!personData.ipt_dkmoney) {
    alert('请输入贷款金额');
    return;
  };
  if (!hasRead) {
    alert('同意协议后方可申请');
    return;
  };

  checkPhone();
})

var submitForm = function(){
  //var applyData = new FormData(document.getElementById("applyForm"));
  var validatecode = $("input[name='ipt-validatecode']").val();
  $.ajax({
      cache: true,
      type: "POST",
      url: "../api/post.php",
      data: $('#applyForm').serialize() + "&ipt-validatecode=" + validatecode,
      //data: applyData,
      dataType: 'json',
      async: false,
      error: function(request) {
          alert("输入有误");
      },
      success: function(data) {
          alert(data.message);
          if (data.code == 1000) {
              window.location.href = 'apply.html';
          }
      }
  });
}

$(".queding-btn").click(function(){
  submitForm();
})


//重新发送验证码
var timeText= 10;
var setVdAgain = function(){
  if (timeText == 0) {
      $(".set-again").removeAttr("disabled");
      $(".timeout").text('')
      timeText = 10;
  } else {
      $(".set-again").attr("disabled", true);
      $(".timeout").text(timeText+'s')
      timeText--;
      setTimeout(function() {         
          setVdAgain();
      }, 1000);
  }
}

$(".set-again").click(function(){
  checkPhone();
})


//年龄选择18-60
for(var i=18; i<= 60; i++){
  var html = '<option value='+ i +'>'+ i +'</option>'
  $("body .age-sel").append(html);
}
 
 })(document, window);
