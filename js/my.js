$(function () {
    $('#denglu').on('click', function () {
        $('.zzc').show();
        $('.login').css('display', 'block');
    });
    $('#zhuce').on('click', function () {
        $('.zzc').show();
        $('.register').css('display', 'block');
    });
    $('.zzc').on('click', function () {
        $(this).hide();
        $('.login').hide();
        $('.register').hide();
        $('input').val('');
    });


    //注册
    var b = true;
    $('.register li button').on('click', function () {
        if (b === true) {
            b = false;
            var user = $(".user");
            var user_reg = /\w{6,14}|[\u4e00-\u9fa5]/;
            if (user_reg.test(user.val()) === false) {
                user.val('');
                user.attr('placeholder', '输入内容不合法');
                setTimeout(function () {
                    user.attr('placeholder', '6~14位字母、数字或汉字');
                    b = true;
                }, 1000);
                return false;
            }
            var password = $(".password");
            var password_reg = /\w{6,14}/;
            if (password_reg.test(password.val()) === false) {
                password.val('');
                password.attr('placeholder', '输入内容不合法');
                setTimeout(function () {
                    password.attr('placeholder', '6~14位字母或数字');
                    b = true;
                }, 1000);
                return false;
            }
            var password_ = $(".password_");
            if (password_.val() !== password.val()) {
                password_.val('');
                password_.attr('placeholder', '确认密码错误');
                setTimeout(function () {
                    password_.attr('placeholder', '请输入相同的密码');
                    b = true;
                }, 1000);
                return false;
            }
            var yzm = $(".yzm");
            var yzm_reg = /dh27xg/i;
            if (yzm_reg.test(yzm.val()) === false) {
                yzm.val('');
                yzm.attr('placeholder', '验证码错误');
                setTimeout(function () {
                    yzm.attr('placeholder', '请输入左侧图片验证码');
                    b = true;
                }, 1000);
                return false;
            }
            $('.register h5').html('注册成功');
            setTimeout(function () {
                $('.zzc').hide();
                $('.register').hide();
                $('input').val('');
                $('.register h5').html('注册');
                b=true;
            }, 1000);

        }
    });

    //登录
    $('.login li button').on('click',function () {
        $('.login h5').html('登录成功');
        setTimeout(function () {
            $('.zzc').hide();
            $('.login').hide();
            $('input').val('');
            $('.login h5').html('登录');
            window.location.href = 'index.html'
        }, 1000);
    })

});