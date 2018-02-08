
$(function(){

    setTimeout(function () {
        if(etPmyExt!=""){
            $('#exttext').html('分机：'+etPmyExt);
        }else{
            $('#exttext').html('未绑定分机');
        }
    },500)

    $('#exttext').click(function () {
        $('#callModal').modal('show');

        if(etPmyExt!=""){
            $('#callModalLabel').html('解除绑定');
            $('#callModal .form-inline').html('你确定要解除绑定分机号'+etPmyExt+'?');
            $('#bindExt').text('解绑');
        }else{
            $('#callModalLabel').html('绑定分机号');
            $('#callModal .form-inline').html(' <div class="form-group">\n' +
                '            <label>分机号</label>\n' +
                '            <input type="text" class="form-control" id="extNum">\n' +
                '            </div>');
            $('#bindExt').text('绑定');
        }
    })

    function bindext(){
        if(etPmyExt!=""){
            $.get('ajax/member-data.php?action=unbindext',function(res){
                console.log('unbindext',res);
                if(res==1){
                    alert('解绑成功！');
                    $('#callModal').modal('hide');
                    $('#exttext').html('未绑定分机');
                    window.location.reload();
                }else{
                    alert('解绑失败！')
                }
            })
        }else{

            $.get('ajax/member-data.php?action=bindext&ext='+$('#extNum').val(),function(res){
                console.log('bindext',res);
                if(res==1){
                    alert('绑定成功');
                    $('#callModal').modal('hide');
                    $('#exttext').html('分机：'+etPmyExt);
                    window.location.reload();
                }else{
                    alert(eval('('+ res +')'))
                }
            })
        }

    }

    $('#bindExt').click(function(){
        bindext();
    })

    $('header a').click(function () {
        if(window.parent.homeFlag!=undefined && $(this).attr('href')){
            if($(this).attr('class')=='logo'){
                window.parent.document.title=mainTitle+'-首页';
            }else{
                window.parent.document.title=mainTitle+$(this).text();
            }
            //window.parent.document.getElementById('main-frame').src=$(this).attr('href');
        }
    })

})