/**
 * Created by HeeHee on 2017/9/7.
 */
if (!(window.File || window.FileReader || window.FileList || window.Blob)) {
    alert('请换Chrome浏览器打开');
}

function conver2base64(file,callback){
    var reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=function(){
        var re=this.result;
        //$(obj).val(re);
        callback(re);
        
    }
}

/*
  三个参数
  file：一个是文件(类型是图片格式)，
  w：一个是文件压缩的后宽度，宽度越小，字节越小
  objDiv：一个是容器或者回调函数
  photoCompress()
   */
function photoCompress(file,w,objDiv){
    var reader=new FileReader();
    /*开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.*/
    reader.readAsDataURL(file);
    reader.onload=function(e){
        var re=this.result;
        canvasDataURL(re,w,objDiv)
    }
}
function canvasDataURL(path, obj, callback){
    var img = new Image();
    img.src = path;
    img.onload = function(){
        var that = this;
        // 默认按比例压缩
        var w = that.width,
            h = that.height,
            scale = w / h;
        w = obj.width || w;
        h = obj.height || (w / scale);
        var quality = 0.7;  // 默认图片质量为0.7
        //生成canvas
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        // 创建属性节点
        var anw = document.createAttribute("width");
        anw.nodeValue = w;
        var anh = document.createAttribute("height");
        anh.nodeValue = h;
        canvas.setAttributeNode(anw);
        canvas.setAttributeNode(anh);
        ctx.drawImage(that, 0, 0, w, h);
        // 图像质量
        if(obj.quality && obj.quality <= 1 && obj.quality > 0){
            quality = obj.quality;
        }
        // quality值越小，所绘制出的图像越模糊
        var base64 = canvas.toDataURL('image/jpeg', quality);
        // 回调函数返回base64的值
        callback(base64);
    }
}



var DetermineFileType = function(index_val,title,wjian,form,action_name,btn){
    $(index_val).change(function(){

        var files = $(index_val).prop('files');

        var titlesArr=[]; //保存的文件名
        var filesArr=[];  //保存的文件路径
        
        console.log(files);
        var p;
        for(p=0;p<files.length;p++){
            
            var name = files[p].name;
            titlesArr.push(name);
            var files_name = name.split('.')[name.split('.').length-1];

            var $parent = $(this).parent();
            $parent.find(".msg").remove();

            if(!(/(?:jpg|gif|png|jpeg|pdf)$/i.test(name))){
                var errorMsg_type = "请上传（jpg | jpeg | png | pdf | gif）后序格式";
                $parent.append("<span class='msg onError'>"+errorMsg_type+"</span>");
                $(form).find('.btn-add').attr('disabled',true);
                return;
            }else{
                if(files_name!='pdf'){
                    var okMsg = "支持该文件";
                    $parent.find(".high").remove();
                    $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
                    photoCompress(files[p], {width : 1800, quality:0.8}, function(base){
                        $.ajax({
                            type:'POST',
                            url:window.location.href,
                            async:false,
                            data:{
                                'action':action_name,
                                'ipt-wjian':base
                            },
                            success:function (res) {
                                var data = eval('('+ res +')');
                                if(data[0]==1){  //上传成功
                                    filesArr.push(data[1]);

                                }else{
                                    console.log(data[1]);
                                    alert('上传失败');
                                }
                                $(title).val(titlesArr.join(','));
                                $(wjian).val(filesArr.join(','));
                            }
                        })
                    })
                }else{
                    var okMsg = "支持该文件";
                    $parent.find(".high").remove();
                    $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
                    conver2base64(files[p],function(base){
                        $.ajax({
                            type:'POST',
                            url:window.location.href,
                            async:false,
                            data:{
                                'action':action_name,
                                'ipt-wjian':base
                            },
                            success:function (res) {
                                var data = eval('('+ res +')');
                                if(data[0]==1){  //上传成功
                                    filesArr.push(data[1])
                                }else{
                                    console.log(data[1]);
                                    alert('上传失败');
                                }
                                $(title).val(titlesArr.join(','));
                                $(wjian).val(filesArr.join(','));
                            }
                        })
                    });
                }

            }




        }
        
        if(p==files.length){
            $(btn).removeAttr('disabled')
        }
        //$(form).find('.btn-add').attr('disabled',false);



    }).keyup(function(){
        $(this).triggerHandler("blur");
    }).focus(function(){
        $(this).triggerHandler("blur");
    })
}
var FileIsNot = function(index_val,file_val){
    $(index_val).click(function(){
        $(file_val).trigger("blur");
        var numError =  $(file_val).prop('files');
        console.log(numError);;
        if(numError.length !== 0){
            var files_name = numError[0].name.split(".")[numError[0].name.split(".").length - 1];
        }
        if(numError.length === 0){
            var $parent = $(file_val).parent();
            $parent.find(".msg").remove();
            $parent.append("<span class='msg onError'>请选择一个类型文件 </span>");
            return false;
        }/*else if((numError[0].size/1024) > 1024 ){
            if(files_name!='pdf'){ return; }
            var $parent = $(file_val).parent();
            $parent.find(".msg").remove()
            var errorMsg = "不支持大于 1024kb 的文件";
            $parent.append("<span class='msg onError'>"+errorMsg+"</span>");
            return false;
            /!*jpg|jpeg|png|pdf|doc|docx|xls|xlsx*!/
        }*/else if( files_name !== "jpg" && files_name !== "JPG" && files_name !== "jpeg" && files_name !== "JPEG" && files_name !== "pdf" && files_name !== "PDF" && files_name !== "png" && files_name !== "PNG" && files_name !== "gif" && files_name !== "GIF" ){
            var $parent = $(file_val).parent();
            $parent.find(".msg").remove()
            var errorMsg_type = "请上传（jpg | jpeg | png | pdf | gif）后序格式";
            $parent.append("<span class='msg onError'>"+errorMsg_type+"</span>");
            return false;
        }
    })
}



DetermineFileType("#contractUpload","#contract_title","#contract_wjian",'#contractForm','upload_contracts','#btn_contract');
FileIsNot("#contractModal .btn-add","#contractUpload")

DetermineFileType("#zichanUpload","#zichan_title","#zichan_wjian",'#assetsForm','uploadassets','#btn_assetsMsg');
FileIsNot("#assetsMsgModal .btn-add" , "#zichanUpload");

DetermineFileType("#zhengxinUpload","#zhengxin_title","#zhengxin_wjian",'#creditForm','upload_credits','#btn_zhengxin');
FileIsNot("#creditModal .btn-add" , "#zhengxinUpload");


/*DetermineFileType("#shenfenzhengUpload");
FileIsNot("#idcardsModal .btn-add" , "#shenfenzhengUpload");*/

