$(function(){

    var refreshTimepicker = function(){

            $('.date').datetimepicker({
                format: 'YYYY-MM-DD',
                locale: moment.locale('zh-cn'),
                showClear: true,
                showClose: true,
            });

            $('.hkdate').datetimepicker({
                format: 'YYYY-MM-DD',
                locale: moment.locale('zh-cn'),
                showClear: true,
                showClose: true,
            });


    }

    refreshTimepicker();


    var addList = function(obj,html){
        $(obj).append(html);
    }

    // 服务收费新增其他费用
    $('body').on('click','.fwsf .icon-btn-add', function(){
        var fwsfHtml = '<div class="table-row">\n' +
            '                                <div class="table-cell pl64 pt8">\n' +
            '                                    <label>其他收费</label>\n' +
            '                                    <select class="form-control wid100" name="ipt_qtsfei_a[]">\n' +
            '                                        <option value=""></option>\n' +
            '                                        <option value="1">固话</option>\n' +
            '                                        <option value="2">查征信</option>\n' +
            '                                        <option value="3">挂单位</option>\n' +
            '                                        <option value="4">办资料</option>\n' +
            '                                    </select>\n' +
            '                                </div>\n' +
            '                                <div class="table-cell">\n' +
            '                                    <label class="wid56 ml7 text-right">金额</label>\n' +
            '                                    <input type="text" class="form-control wid100" name="ipt_qtsfei_b[]">元\n' +
            '                                </div>\n' +
            '                                <div class="table-cell text-right" style="width:232px">\n' +
            '                                    <a class="icon-btn-minus mr-85"></a>\n' +
            '                                </div>\n' +
            '                            </div>';

        addList('.fwsfList', fwsfHtml);
        refreshTimepicker();

    })

    $('body').on('click','.fwsf .icon-btn-minus',function(event){
        var index = $(event.target).parent().parent().index();
        $('.fwsfList>div').eq(index).remove();
    })

    // 服务收费中是否已有其他收费
    if (qtsfeiDataService.length > 0) {
        $(".modal-body .fwsfList").html('');
        for(i in qtsfeiDataService){
            var num01 = qtsfeiDataService[i].a;
            console.log(num01);
            var qtfyHtml = '<div class="table-row">\n' +
                '                                <div class="table-cell pl64 pt8">\n' +
                '                                    <label>其他收费</label>\n' +
                '                                    <select class="form-control wid100" name="ipt_qtsfei_a[]">\n' +
                '                                        <option value=""></option>\n' +
                '                                        <option value="1">固话</option>\n' +
                '                                        <option value="2">查征信</option>\n' +
                '                                        <option value="3">挂单位</option>\n' +
                '                                        <option value="4">办资料</option>\n' +
                '                                    </select>\n' +
                '                                </div>\n' +
                '                                <div class="table-cell">\n' +
                '                                    <label class="wid56 ml7 text-right">金额</label>\n' +
                '                                    <input type="text" class="form-control wid100" name="ipt_qtsfei_b[]" value="'+ qtsfeiDataService[i].b +'">元\n' +
                '                                </div>\n' +
                '                                <div class="table-cell text-right" style="width:232px">\n' +
                '                                    <a class="icon-btn-minus mr-85"></a>\n' +
                '                                </div>\n' +
                '                            </div>';
           //var qtsfeiHtml = '<li class="row"><div class="col-xs-3"><select name="ipt_qtsfei_a[]" id="" class="form-control qtsf-select"><option value=""></option><option value="1">固话</option><option value="2">查征信</option><option value="3">挂单位</option><option value="4">办资料</option></select></div><div class="col-xs-3 pl10"><input type="text" class="form-control" value="'+ qtsfeiDataService[i].b +'" name="ipt_qtsfei_b[]"></div><div class="col-xs-1 pl5">元</div><div class="col-xs-2 pl5"><div class="add-btn">+</div></div></li>';
            $(".modal-body .fwsfList").append(qtfyHtml);
            //$("body select[name='ipt_qtsfei_a["+ i +"]']").val(num01);
            $("body").find('select[name="ipt_qtsfei_a[]"]').eq(i).val(num01);
            refreshTimepicker();
        }
    };

    // 其他费用
    $('body').on('click','.qtfy .icon-btn-add', function(){
        var qtfyHtml = '<div class="table-row">\n' +
            '                                <div class="table-cell pl64 pt8">\n' +
            '                                    <label class="wid56 text-right">项目</label>\n' +
            '                                    <select class="form-control wid100" name="ipt_qtfyong_a[]">\n' +
            '                                        <option value=""></option>\n' +
            '                                        <option value="1">增收</option>\n' +
            '                                        <option value="2">返利</option>\n' +
            '                                    </select>\n' +
            '                                </div>\n' +
            '                                <div class="table-cell">\n' +
            '                                    <label class="ml7" style="margin-right: 5px;">金额</label><i class="i-minus" style="display: none">-</i>\n' +
            '                                    <input type="text" name="ipt_qtfyong_b[]" class="form-control wid100"><span>元</span>\n' +
            '                                </div>\n' +
            '                                <div class="table-cell">\n' +
            '                                    <label class="ml35">到款日期</label>\n' +
            '                                    <div class="inline-block relative">\n' +
            '                                        <input type="text" class="form-control wid160 date" name="ipt_qtfyong_c[]"/>\n' +
            '                                        <span class="calendar"></span>\n' +
            '                                    </div>\n' +
            '                                </div>\n' +
            '                                <div class="table-cell text-right">\n' +
            '                                    <a class="icon-btn-minus"></a>\n' +
            '                                </div>\n' +
            '                            </div>';

        addList('.qtfy-inner', qtfyHtml);
        refreshTimepicker();
    })

    $('body').on('click','.qtfy-inner .icon-btn-minus', function (event) {
        var index = $(event.target).parent().parent().index();
        $('.qtfy-inner>div').eq(index).remove();
    })

    // 查看是否已有其他费用信息
    console.log(qtfyongDataService)
    if (qtfyongDataService.length > 0) {
        $(".modal-body .qtfy-inner").html('');
        for(i in qtfyongDataService){
            var num02 = qtfyongDataService[i].a;
            console.log(num02);
            var qffyHtml = '<div class="table-row">\n' +
                '                                <div class="table-cell pl64 pt8">\n' +
                '                                    <label class="wid56 text-right">项目</label>\n' +
                '                                    <select class="form-control wid100" name="ipt_qtfyong_a[]">\n' +
                '                                        <option value=""></option>\n' +
                '                                        <option value="1">增收</option>\n' +
                '                                        <option value="2">返利</option>\n' +
                '                                    </select>\n' +
                '                                </div>\n' +
                '                                <div class="table-cell">\n' +
                '                                    <label class="ml7" style="margin-right: 5px;">金额</label><i class="i-minus" style="display: none">-</i>\n' +
                '                                    <input type="text" name="ipt_qtfyong_b[]" class="form-control wid100" value="'+ qtfyongDataService[i].b +'"><span>元</span>\n' +
                '                                </div>\n' +
                '                                <div class="table-cell">\n' +
                '                                    <label class="ml35">到款日期</label>\n' +
                '                                    <div class="inline-block relative">\n' +
                '                                        <input type="text" class="form-control wid160 date" name="ipt_qtfyong_c[]" value="'+ qtfyongDataService[i].c +'"/>\n' +
                '                                        <span class="calendar"></span>\n' +
                '                                    </div>\n' +
                '                                </div>\n' +
                '                                <div class="table-cell text-right">\n' +
                '                                    <a class="icon-btn-minus"></a>\n' +
                '                                </div>\n' +
                '                            </div>';

            $(".modal-body .qtfy-inner").append(qffyHtml);
            //$("body select[name='ipt_qtfyong_a["+ i +"]']").val(num02);
            $("body select[name='ipt_qtfyong_a[]']").eq(i).val(num02);
            num02==2?$('.qtfy-inner .table-row').eq(i).find('.i-minus').show():'';
            refreshTimepicker();
        }
    };

    $('body').on('change','.qtfy-inner select', function () {
        if($(this).val()==2){
            $(this).parent().parent().find('.i-minus').show();
        }else{
            $(this).parent().parent().find('.i-minus').hide();
        }
    })
    $('.qtfy-inner select').change(function () {
        if($(this).val()==2){
            $(this).parent().parent().find('.i-minus').show();
        }
    })

    // 服务修改添加还款规则
    $('body').on('click','.hktx .icon-btn-add',function(){
        var hktxCount = $('.hktx-inner li').length+1;
        var addHtml = '<li class="rule-list'+hktxCount+'">\n' +
            '                                <div class="row">\n' +
            '                                    <div class="col-sm-9">\n' +
            '                                        <div class="row pl78">\n' +
            '                                            <div class="col-sm-5 mt8">\n' +
            '                                                <label class="start-date">提醒日</label>\n' +
            '                                                <div class="inline-block relative">\n' +
            '                                                    <input type="text" class="form-control wid160 hkdate" name="ipt-hkgze-a[]"/>\n' +
            '                                                    <span class="calendar"></span>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                            <div class="tip">\n' +
            '                                                <div class="col-sm-7 mt8">\n' +
            '                                                    <label class="wid56 text-right">结束日</label>\n' +
            '                                                    <div class="inline-block relative">\n' +
            '                                                        <input type="text" class="form-control wid160 hkdate" name="ipt-hkgze-b[]" />\n' +
            '                                                        <span class="calendar"></span>\n' +
            '                                                    </div>\n' +
            '                                                </div>\n' +
            '                                                <div class="col-sm-5 mt8">\n' +
            '                                                    <label class="wid41 text-right">每</label>\n' +
            '                                                    <select name="ipt-hkgze-c[]" class="form-control wid100 inline-block">\n' +
            '                                                        <option value=""></option>\n' +
            '                                                        <option value="1">月</option>\n' +
            '                                                        <option value="2">季</option>\n' +
            '                                                        <option value="3">年</option>\n' +
            '                                                    </select>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '\n' +
            '                                            <div class="col-sm-7 mt8">\n' +
            '                                                <label>提醒金额</label>\n' +
            '                                                <input type="text" class="form-control inline-block wid160" name="ipt-hkgze-d[]"> <span>元</span>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                    <div class="col-sm-3">\n' +
            '                                        <label class="ml-15 mt12">\n' +
            '                                            <input type="checkbox" data-rulecount="'+hktxCount+'"> 周期提醒\n' +
            '                                        </label>\n' +
            '                                        <a class="icon-btn-minus"></a>\n' +
            '\n' +
            '                                    </div>\n' +
            '                                </div>\n' +
            '                            </li>';

        addList('.hktx-inner', addHtml);
        refreshTimepicker();
    })

    $('body').on('click','.hktx-inner input[type=checkbox]',function(){
        var listNum = $(this).data('rulecount');
        var tipDate = $(".rule-list"+ listNum +" input[type=checkbox]").is(':checked');
        if (tipDate) {
            $(".rule-list"+ listNum +" .start-date").text('起始日');
            $(".rule-list"+ listNum +" .tip").show();
        }else{
            $(".rule-list"+ listNum +" .tip").hide();
            $(".rule-list"+ listNum +" .start-date").text('提醒日');
        };
    })

    $('body').on('click','.hktx-inner .icon-btn-minus',function (event) {
        var index = $(event.target).parent().parent().parent().index();
        $('.hktx-inner>li').eq(index).remove();
    })

    // 查看是否已有还款提醒信息
    if (typeof(hkgzeDataService) != "undefined") {
        //console.log(hkgzeDataService);
        $(".modal-body .hktx-inner").html('');
        for(i in hkgzeDataService){
            var num3 = hkgzeDataService[i].c;
            var isChecked = hkgzeDataService[i].e;
            var hktxHtml = '<li class="rule-list'+i+'"><div class="row"><div class="col-sm-9"><div class="row pl78"><div class="col-sm-5 mt8"><label class="start-date">提醒日</label><div class="inline-block relative"><input type="text" class="form-control wid160 hkdate" name="ipt-hkgze-a[]" value="'+ hkgzeDataService[i].a +'"/> <span class="calendar"></span></div></div><div class="tip"><div class="col-sm-7 mt8"><label class="wid56 text-right">结束日</label><div class="inline-block relative"> <input type="text" class="form-control wid160 hkdate" name="ipt-hkgze-b[]"  value="'+ hkgzeDataService[i].b +'"/><span class="calendar"></span></div></div> <div class="col-sm-5 mt8"> <label class="wid41 text-right">每</label> <select name="ipt-hkgze-c[]" class="form-control wid100 inline-block"> <option value=""></option> <option value="1">月</option> <option value="2">季</option> <option value="3">年</option> </select> </div> </div> <div class="col-sm-7 mt8"> <label>提醒金额</label> <input type="text" class="form-control inline-block wid160" name="ipt-hkgze-d[]" value="'+ hkgzeDataService[i].d +'"> 元</div> </div> </div> <div class="col-sm-3"> <label class="ml-15 mt12"> <input type="checkbox" data-rulecount="'+ i + '"> 周期提醒 </label><a class="icon-btn-minus"></a></div> </div> </li>';

            $(".modal-body .hktx-inner").append(hktxHtml);
            $(".modal-body .hktx-inner li").eq(i).find('select').val(num3);
            if (isChecked) {
                $(".modal-body .hktx-inner li").eq(i).find('input[type=checkbox]').attr('checked',true);
                $(".modal-body .hktx-inner li").eq(i).find('.tip').show();
                $(".modal-body .hktx-inner li").eq(i).find('.start-date').text('起始日');
            }
            refreshTimepicker();
        }
    };





})