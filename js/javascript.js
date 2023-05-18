// header 伸縮
$(function(){
    var wWD = window.innerWidth;
    var size1 = $('.dicoration.d1');
    var size2 = $('header .bottom ul');
    var size3 = $('header article');
    var size4 = $('.dicoration.d2 div:nth-of-type(2)');
    if(wWD > 1720) {
        $(size1).css('width', (String(267) + "px"));
        $(size2).css('padding-right', (String(110) + "px"));
        $(size3).css('width', (String(1460) + "px"));
        $(size4).css('width', (String(351) + "px"));
    }else if(wWD <= 1720 && wWD > 1510) {
        $(size1).css('width', (String(wWD - 1463) + "px"));
        $(size2).css('padding-right', (String(wWD - 1620) + "px"));
        $(size3).css('width', (String(wWD - 270) + "px"));
    }else if(wWD <= 1510 && wWD > 1280) {
        $(size1).css('width', (String(68) + "px"));
        $(size2).css('padding-right', (String(0) + "px"));
        $(size3).css('width', (String(wWD - 270) + "px"));
        $(size4).css('width', (String(wWD - 1190) + "px"));
    }else {
        $(size1).css('width', (String(68) + "px"));
        $(size2).css('padding-right', (String(0) + "px"));
        $(size3).css('width', (String(1030) + "px"));
        $(size4).css('width', (String(100) + "px"));
    }

    $(window).resize(function(){
        var wWD = window.innerWidth;
        var size1 = $('.dicoration.d1');
        var size2 = $('header .bottom ul');
        var size3 = $('header article');
        var size4 = $('.dicoration.d2 div:nth-of-type(2)');
        if(wWD > 1720) {
            $(size1).css('width', (String(267) + "px"));
            $(size2).css('padding-right', (String(110) + "px"));
            $(size3).css('width', (String(1460) + "px"));
            $(size4).css('width', (String(351) + "px"));
        }else if(wWD <= 1720 && wWD > 1510) {
            $(size1).css('width', (String(wWD - 1463) + "px"));
            $(size2).css('padding-right', (String(wWD - 1620) + "px"));
            $(size3).css('width', (String(wWD - 270) + "px"));
        }else if(wWD <= 1510 && wWD > 1280) {
            $(size1).css('width', (String(68) + "px"));
            $(size2).css('padding-right', (String(0) + "px"));
            $(size3).css('width', (String(wWD - 270) + "px"));
            $(size4).css('width', (String(wWD - 1190) + "px"));
        }else {
            $(size1).css('width', (String(68) + "px"));
            $(size2).css('padding-right', (String(0) + "px"));
            $(size3).css('width', (String(1030) + "px"));
            $(size4).css('width', (String(100) + "px"));
        }
    })
})

// 圖片輪播
$(document).on('ready', function () {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4500,
		arrows: false,
	})
})

//跑馬燈伸縮
$(function(){
    var wWD = window.innerWidth;
    var size1 = $('.marqueeBox');
    if(wWD > 1500) {
        $(size1).css('width', (String(1400) + "px"));
    }else if(wWD <= 1500 && wWD > 1280) {
        $(size1).css('width', (String(wWD - 100) + "px"));
    }else {
        $(size1).css('width', (String(1180) + "px"));
    }

    $(window).resize(function(){
        var wWD = window.innerWidth;
        var size1 = $('.marqueeBox');
        if(wWD > 1500) {
            $(size1).css('width', (String(1400) + "px"));
        }else if(wWD <= 1500 && wWD > 1280) {
            $(size1).css('width', (String(wWD - 100) + "px"));
        }else {
            $(size1).css('width', (String(1180) + "px"));
        }
    })
})

//mainPage
$(function(){
    var wWD = window.innerWidth;
    var size1 = $('.mainBox article');
    if(wWD > 1560) {
        $(size1).css('width', (String(1480) + "px"));
    }else if(wWD <= 1560 && wWD > 1280) {
        $(size1).css('width', (String(wWD - 80) + "px"));
    }else {
        $(size1).css('width', (String(1200) + "px"));
    }

    $(window).resize(function(){
        var wWD = window.innerWidth;
        var size1 = $('.mainBox article');
        if(wWD > 1560) {
            $(size1).css('width', (String(1480) + "px"));
        }else if(wWD <= 1560 && wWD > 1280) {
            $(size1).css('width', (String(wWD - 80) + "px"));
        }else {
            $(size1).css('width', (String(1200) + "px"));
        }
    })
})

// mainBg
$(function(){
    var wWD = window.innerWidth;
    var size1 = $('.mainBg .img');
    $(size1).css('width', (String(wWD) + "px"));

    $(window).resize(function(){
        var wWD = window.innerWidth;
        var size1 = $('.mainBg .img');
        $(size1).css('width', (String(wWD) + "px"));
    })
})

//main區域入場動畫
$(function(){
    setTimeout(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.animate({
                scrollTop:500
        },500)
    },2000)

    setTimeout(function(){
        $('.mainBg').addClass('display');
    },2200)

    setTimeout(function(){
        $('.imgBox').addClass('slide');
    },2400)

    setTimeout(function(){
        $('.imgBox li').css('opacity','1');
        $('header').css('position','fixed');
        $('header').css('top','-120px');
        $('header').css('opacity','0');
    },5400)

    setTimeout(function(){
        $('header').animate({
            top: "+=120",
            opacity: 1
        },300)
        $('header').css('top','0px');
    },5600)
})

// footer
$(function(){
    var wWD = window.innerWidth;
    var size1 = $('footer article');
    if(wWD > 1560) {
        $(size1).css('width', (String(1480) + "px"));
    }else if(wWD <= 1560 && wWD > 1280) {
        $(size1).css('width', (String(wWD - 80) + "px"));
    }else {
        $(size1).css('width', (String(1200) + "px"));
    }

    $(window).resize(function(){
        var wWD = window.innerWidth;
        var size1 = $('footer article');
        if(wWD > 1560) {
            $(size1).css('width', (String(1480) + "px"));
        }else if(wWD <= 1560 && wWD > 1280) {
            $(size1).css('width', (String(wWD - 80) + "px"));
        }else {
            $(size1).css('width', (String(1200) + "px"));
        }
    })
})

//goTop
$(function(){
	$(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 0){
                $(".goTop").fadeIn(300);
        } else{
                $(".goTop").fadeOut(300);
        };
	})

    $('.goTop').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },300)
    })
})

//頂部X軸滑動問題
setTimeout(function() {
    $(window).scroll(function(){
        var topScroll = $(window).scrollTop();
        $('header').css('position','absolute');
        $('header').css('top', (String(topScroll) + "px"));
    })
},6000)

//主圖hover連動
$(function(){
    $('.wordLink').hover(function(){
        $(this).prev('a').toggleClass('active');
    })
})