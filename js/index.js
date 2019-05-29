$(function () {
    $.ajax({
        url: './json/index.json',
        success: function (data) {
            var interText = doT.template($("#fangyuan").text());
            $(".hot_fy>ul").html(interText(data));
        }
    });
    $('.guanggao i').on('click',function () {
        $('.guanggao').hide();
    })

});