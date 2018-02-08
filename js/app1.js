(function(doc, win) {

    //排行榜
    var tagText = function(obj, HideObj){
        var val = $(obj).html();
        if (val == '等你来拿！') {
            $(HideObj).hide();
        };

        /*if (obj == '.ranking .first .name' && val == '等你来拿！') {
            $(".no-ranking-img").show();
        }else{
            $(".no-ranking-img").hide();
        }*/
    }
    tagText(".ranking .first .name", ".ranking .first");
    tagText(".ranking .second .name", ".ranking .second");
    tagText(".ranking .third .name", ".ranking .third");

    var rankFirst = $(".ranking .first .name").html();
    if (rankFirst == '等你来拿！') {
        $(".no-ranking-img").show();
    }else{
        $(".no-ranking-img").hide();
    }

 })(document, window);