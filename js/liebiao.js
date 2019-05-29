$(function () {
    $.ajax({
        url: './json/liebiao.json',
        success: function (data) {
            var interText = doT.template($("#liebiao").text());
            $(".txt>ul").html(interText(data));
        }
    });
    //筛选一级菜单
    if($('.fenlei').css('display')==='none'){
        $('.shaixuan_zz').on('click',function () {
            $('.shaixuan>ul>li>h4').removeClass('shaixuan_h');
            $('.shaixuan>ul>li>i').removeClass('shaixuan_i');
            $('.shaixuan .shaixuan_zz').css('display','none');
            $('.fenlei').hide();
        })
    }

    $('.shaixuan>ul>li>h4').on("click",function () {
        if($(this).siblings('.fenlei').css('display')==='none'){
            $('.shaixuan>ul>li>h4').removeClass('shaixuan_h');
            $('.shaixuan>ul>li>i').removeClass('shaixuan_i');
            $(this).addClass('shaixuan_h');
            $(this).siblings('i').addClass('shaixuan_i');
            $(this).parent().siblings('.shaixuan_zz').css('display','block');
            $('.fenlei').hide();
            $(this).siblings('.fenlei').show()
        }else {
            $(this).addClass('h4').removeClass('shaixuan_h');
            $(this).siblings('i').removeClass('shaixuan_i');
            $(this).parent().siblings('.shaixuan_zz').css('display','none');
            $('.fenlei').hide();
        }
        //筛选二级菜单
        $('.shaixuan_1 .fenlei h4').on('click',function () {
            $('.shaixuan_1 .fenlei h4').removeClass('fenlei_h');
            $(this).addClass('fenlei_h');
        });
        $('.shaixuan_1 .fenlei li').on('click',function () {
            $(this).toggleClass('fenlei_h');
        });
        $('.shaixuan_2 .fenlei li').on('click',function () {
            $(this).toggleClass('fenlei_h');
        });
        $('.shaixuan_3 .fenlei li i').on('click',function () {
            $('.shaixuan_3 .fenlei li i').removeClass('fenlei_i');
            $(this).addClass('fenlei_i');
        });
        $('.shaixuan_4 .fenlei li').on('click',function () {
            $(this).toggleClass('fenlei_b');
        });

    })



});