/**
 * Created by Administrator on 2017/7/13.
 */
$(window).ready(function(){
    $('body').on('touchstart',function(){});
    $(function() {
        FastClick.attach(document.body);
    });
    var ww=$(window).width();
    $(window).scroll(function(){
        setheader();
    });
    var time=new Date().getTime();
    function setheader(){
        var srcTop=$(window).scrollTop();
        var cur=new Date().getTime();
        if(ww>1050){
            if(srcTop>0){
                $('body').addClass('is-scroll');

            }else{
                $('body').removeClass('is-scroll');
            }
            if(srcTop>300){
                $(".fixed-right").addClass("active");
            }else{
                $(".fixed-right").removeClass("active");
                if($(".fixed-right.on").length<1){
                    $(".fixed-right").removeClass("on");
                }
            }
            if(cur-time>3000){
                time=cur;
                setTimeout(function(){
                    $(".fixed-right").removeClass("active");
                },3000)
            }

            //if(srcTop>200){
            //    $(".fixed-right").addClass("active");
            //}else{
            //    $(".fixed-right").removeClass("active");
            //}
        }
    }
    setTimeout(function(){
        $(".fixed-right").removeClass("active");
    },3000)
    setheader();
    $(".fixed-right").hover(function(){
        $(".fixed-right").addClass("on");
    },function(){
        //console.log(22);
        //    setTimeout(function(){
                $(".fixed-right").removeClass("on");
                $(".fixed-right").removeClass("active");
            //},3000)
    });
    if(ww<1300){
        var li=$('.en .nav-box li');
        for(var i=0;i<li.length;i++){
            var box=li.eq(i).find('.nav-er');
            if(box.length>0){
                li.eq(i).addClass('has');
            }else{
                li.eq(i).addClass('none');
            }
        }
        li.click(function(){
            $(this).toggleClass('on').find('.nav-er').stop().slideToggle().parent().siblings().removeClass('on').find('.nav-er').slideUp();
        });
        $(".en .header-area .share").click(function(){
            $(this).find(".share-list").stop().fadeToggle();
        });
        $(".en .nav-er a").click(function(e){
            e.stopPropagation();
            $(this).toggleClass("active").find(".nav-code").stop().slideToggle();
        });
        $(".en .kslj1 a").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        });
    }
    if(ww<1050){
        var body=$("body.en");
        if(body.length==0){
            var li=$('.nav-box li');
            for(var i=0;i<li.length;i++){
                var box=li.eq(i).find('.nav-er');
                if(box.length>0){
                    li.eq(i).addClass('has');
                }else{
                    li.eq(i).addClass('none');
                }
            }
            li.click(function(){
                $(this).toggleClass('on').find('.nav-er').stop().slideToggle().parent().siblings().removeClass('on').find('.nav-er').slideUp();
            });
            $(".header-area .share").click(function(){
                $(this).find(".share-list").stop().fadeToggle();
            });
            $(".kslj1 a").click(function(){
                $(this).addClass("active").siblings().removeClass("active");
            });
            $(".nav-er a").click(function(e){
                e.stopPropagation();
                $(this).toggleClass("active").find(".nav-code").stop().slideToggle();
            });
        }

    }
    $('#menu-handler').click(function() {
        $(this).toggleClass('active');
        $("body,html").toggleClass('hide');
        $('.header-con').toggleClass('active');
    });
    $('.language').click(function(event){
        $(".group").removeClass('active').find('.group-list').slideUp();
        event.stopPropagation();
        $(this).toggleClass('active').find('.language-box').stop().slideToggle();
    });
    $(document).click(function(e){
        var target = $(e.target);
        if(target.closest(".language-box").length == 0){
            $(".language").removeClass("active").find('.language-box').slideUp();
        }
        if(target.closest(".kslj1 .a1").length == 0){
            $(".kslj1 .a1").removeClass("active");
        }
        if(target.closest(".kslj1 .a3").length == 0){
            $(".kslj1 .a3").removeClass("active");
        }
        if(target.closest(".kslj1 .a6").length == 0){
            $(".kslj1 .a6").removeClass("active");
        }
        if(target.closest(".kslj1 .a9").length == 0){
            $(".kslj1 .a9").removeClass("active");
        }
        if(target.closest(".kslj1 .a10").length == 0){
            $(".kslj1 .a10").removeClass("active");
        }

    });
});