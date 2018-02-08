/* written by situxin */
/*
*  系统crm的公共方法
* */

/***   客户查询模块判断客户标签       ***/
var jjtjArr = [
    {
        class: 'tag_yellow',
        name:'月供房'
    },
    {
        class: 'tag_red',
        name:'广州房'
    },
    {
        class: 'tag_green',
        name:'保单'
    },
    {
        class: 'tag_pink',
        name:'代发'
    },
    {
        class: 'tag_blue',
        name:'公积金'
    },
    {
        class: 'tag_lightblue',
        name:'社保'
    },
    {
        class: 'tag_purple',
        name: '个税'
    },
    {
        class: 'tag_grey',
        name:'车牌'
    },
    {
        class: 'tag_orange',
        name:'微粒贷'
    },
    {
        class: 'tag_red',
        name:'佛山房'
    }
];

/*
*  计算两个日期是否相差6个月
*  @params d1 查询日期
*  @params d2 当前日期
* */
function calmonthDiff(d1,d2){
    var months;
    months = (d2.getFullYear() - d1.getFullYear())*12;
    months -= d1.getMonth() + 1;
    months +=d2.getMonth() + 1;
    return months > 6? true:false;
}
/*
*  计算两个日期是否相差5年
*  @params d1 查询日期
*  @params d2 当前日期
* */
function calyearDiff(d1,d2){
    var years;
    years = d2.getFullYear() - d1.getFullYear();
    years += (d2.getMonth() + 1)/12;
    years -= (d1.getMonth() + 1)/12;
    return years < 5? true:false;
}

function getCustomerTag(data){
   var result = [];
   var ygfang = false, gzfang = false, fsfang = false, bdan =  false, dfa = false, gjjin = false, sbao = false, gshui = false, cpai = false, wldai = false;
   // 1.判断是否可做月供房
   if(data.module_house.length>0){
      for(var i=0;i<data.module_house.length;i++){
          if(data.module_house[i].fwdkuan > 1){
              ygfang = true;
              break;
          }
      }

   //2. 判断是否是广州房/佛山房
       for(var i=0;i<data.module_house.length;i++){
           if(data.module_house[i].fczdzsheng == "广东省"){
               if(data.module_house[i].fczdzshi == "广州市"){
                   gzfang = true;
               }else if(data.module_house[i].fczdzshi == "佛山市"){
                   fsfang = true;
               }

           }
       }


   }

   //3. 判断是否是保单
   if(data.module_policy.length>0){
       for(var i=0;i<data.module_policy.length;i++){
           if(data.module_policy[i].bdsxnxian >= 2 ){
               bdan = true;
               break;
           }
       }
   }

   //4. 判断是否代发
    if(data.module_income1.length>0){
      for(var i=0;i<data.module_income1.length;i++){
         if(data.module_income1[i].gz_gzffxshi == 1 && data.module_income1[i].gz_gzmoney>=5000){
               dfa = true;
             break;
         }
      }
    }

    //5. 判断是否是公积金
    if(data.module_income3.length>0){
       for(var i=0;i<data.module_income3.length;i++){
          if(data.module_income3[i].gjj_gjjjnztai==1 || data.module_income3[i].gjj_gjjjnztai==2){
              if( calmonthDiff(new Date(data.module_income3[i].gjj_gjjxxyfen),new Date()) ){
                  if(data.module_income3[i].gjj_gs_gjjjs>=5000 || data.module_income3[i].gjj_gr_gjjjs >=5000){
                      gjjin = true;
                      break;
                  }
              }
          }
       }
    }

    //6. 判断是否是社保
    if(data.module_income2.length>0){
        for(var i=0;i<data.module_income2.length;i++){
            if(data.module_income2[i].sb_sbjnztai==1 || data.module_income2[i].sb_sbjnztai==2){
                if( calmonthDiff(new Date(data.module_income2[i].sb_sbxxyfen),new Date()) ){
                    if(data.module_income2[i].sb_gs_yljs>=5000 || data.module_income2[i].sb_gr_yljs>=5000){
                        sbao = true;
                        break;
                    }
                }
            }
        }
    }

    //7. 判断是否是个税
    if(data.module_income4.length>0){
        for(var i=0;i<data.module_income4.length;i++){
            if(data.module_income4[i].sds_jnztai==1 || data.module_income4[i].sds_jnztai==2){
                if( calmonthDiff(new Date(data.module_income4[i].sds_xxyfen),new Date()) ){
                    if(data.module_income4[i].sds_sqgzi>=5000){
                        gshui = true;
                        break;
                    }
                }
            }
        }
    }

    //8. 判断是否是车牌
    if(data.module_car.length>0){
        for(var i=0;i<data.module_car.length;i++){
            if(data.module_car[i].cpsheng == '26' && calyearDiff(new Date(data.module_car[i].gcrqi), new Date()) ){
                cpai = true;
                break;
            }
        }
    }

    if(ygfang){
        result.push(jjtjArr[0])
    }
    if(gzfang){
        result.push(jjtjArr[1])
    }
    if(bdan){
        result.push(jjtjArr[2])
    }
    if(dfa){
        result.push(jjtjArr[3])
    }
    if(gjjin){
        result.push(jjtjArr[4])
    }
    if(sbao){
        result.push(jjtjArr[5])
    }
    if(gshui){
        result.push(jjtjArr[6])
    }
    if(cpai){
        result.push(jjtjArr[7])
    }
    if(fsfang){
        result.push(jjtjArr[9])
    }


   return result;
}

/*******   获取当前URL的属性     ********/
function getParameter(sProp) {
    var re = new RegExp(sProp + "=([^\&]*)", "i");
    var a = re.exec(document.location.search);
    if (a == null)
        return null;
    return a[1];
}

function setCookie(c_name,value,expiredays)
{
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}

