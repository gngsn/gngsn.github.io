$(document).ready(function () {
    var nav = $(".fixed-nav .nav li"); //버튼을 변수에 할당(저장)
    var cont = $("#contents>section"); //컨텐츠를 변수에 할당
    alert(cont.eq(0));
    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
        /*픽스드 메뉴 엑티브:섹션별 엑티브*/
        if (wScroll >= cont.eq(0).offset().top) {
            nav.children().removeClass("active");
            nav.eq(0).children().addClass("active");
        }
        if (wScroll >= cont.eq(1).offset().top) {
            nav.children().removeClass("active");
            nav.eq(1).children().addClass("active");
        }
        if (wScroll >= cont.eq(2).offset().top) {
            nav.children().removeClass("active");
            nav.children().eq(2).addClass("active");
        }
        if (wScroll >= cont.eq(3).offset().top) {
            nav.children().removeClass("active");
            nav.children().eq(3).addClass("active");
        }
        if (wScroll >= cont.eq(4).offset().top) {
            nav.children().removeClass("active");
            nav.children().eq(4).addClass("active");
        }
    })
        //섹션1:어바웃 텍스트효과 
    //     if (wScroll >= cont.eq(0).offset().top - $(window).height() / 2) {
    //         $(".con-num").eq(0).children("span").addClass("view");
    //         $(".con-tit").eq(0).addClass("view");
    //     }
    //     if (wScroll >= $('.atext-e').offset().top - $(window).height() / 1.2) {
    //         $(".atext-e").addClass("show");
    //     }
    //     if (wScroll >= $('.atext-e1').offset().top - $(window).height() / 1.3) {
    //         $(".atext-e1").addClass("show");
    //     }
    //     if (wScroll >= $('.atext-e2').offset().top - $(window).height() / 1.4) {
    //         $(".atext-e2").addClass("show");
    //     }
    //     if (wScroll >= $('.atext-e3').offset().top - $(window).height() / 1.5) {
    //         $(".atext-e3").addClass("show");
    //     }
    //     if (wScroll >= $('.atext-e4').offset().top - $(window).height() / 1.6) {
    //         $(".atext-e4").addClass("show");
    //     }
    //     if (wScroll >= $('.atext-e5').offset().top - $(window).height() / 1.7) {
    //         $(".atext-e5").addClass("show");
    //     }
    //     if (wScroll >= $('.atext-e6').offset().top - $(window).height() / 1.8) {
    //         $(".atext-e6").addClass("show");
    //     }
    //     if (wScroll >= $('.atext-e7').offset().top - $(window).height() / 1.9) {
    //         $(".atext-e7").addClass("show");
    //     }
    //     if (wScroll >= $('.atext-e8').offset().top - $(window).height() / 2) {
    //         $(".atext-e8").addClass("show");
    //     }
    //     //sec2:스크롤시 트렌스레이트X 결과물           
    //     var offset1 = (wScroll - $('.off1').offset().top) * 0.2;
    //     var offset2 = -(wScroll - $('.off2').offset().top) * 0.2;

    //     var offset3 = (wScroll - $('.off3').offset().top) * 0.2;
    //     var offset4 = -(wScroll - $('.off4').offset().top) * 0.2;
    //     var offset5 = (wScroll - $('.off5').offset().top) * 0.2;

    //     var offset6 = (wScroll - $('.off6').offset().top) * 0.2;
    //     var offset7 = -(wScroll - $('.off7').offset().top) * 0.2;

    //     var offset8 = (wScroll - $('.off8').offset().top) * 0.2;
    //     var offset9 = -(wScroll - $('.off9').offset().top) * 0.2;
    //     var offset10 = (wScroll - $('.off10').offset().top) * 0.2;

    //     var offset11 = (wScroll - $('.off11').offset().top) * 0.2;
    //     var offset12 = -(wScroll - $('.off12').offset().top) * 0.2;
    //     /*sec2:스크롤시 트렌스레이트X 결과물:움직임*/
    //     $(".off1").css({
    //         'transform': 'translateX(' + offset1 + 'px)'
    //     });
    //     $(".off2").css({
    //         'transform': 'translateX(' + offset2 + 'px)'
    //     });

    //     $(".off3").css({
    //         'transform': 'translateX(' + offset3 + 'px)'
    //     });
    //     $(".off4").css({
    //         'transform': 'translateX(' + offset4 + 'px)'
    //     });
    //     $(".off5").css({
    //         'transform': 'translateX(' + offset5 + 'px)'
    //     });

    //     $(".off6").css({
    //         'transform': 'translateX(' + offset6 + 'px)'
    //     });
    //     $(".off7").css({
    //         'transform': 'translateX(' + offset7 + 'px)'
    //     });

    //     $(".off8").css({
    //         'transform': 'translateX(' + offset8 + 'px)'
    //     });
    //     $(".off9").css({
    //         'transform': 'translateX(' + offset9 + 'px)'
    //     });
    //     $(".off10").css({
    //         'transform': 'translateX(' + offset10 + 'px)'
    //     });

    //     $(".off11").css({
    //         'transform': 'translateX(' + offset11 + 'px)'
    //     });
    //     $(".off12").css({
    //         'transform': 'translateX(' + offset12 + 'px)'
    //     });
    //     /*스크롤별 show view 효과*/
    //     //섹션2 텍스트 애니메이션    
    //     if (wScroll >= $('#section2').offset().top - $(window).height() / 1.7) {
    //         $(".con-num").eq(1).children("span").addClass("view");
    //         $(".con-tit").eq(1).addClass("view");
    //     }
    //     if (wScroll >= $('.text-left').offset().top - $(window).height() / 1.5) {
    //         $(".text-left").eq(0).addClass("show");
    //         $(".text-left").eq(1).addClass("show");
    //         $(".text-left").eq(2).addClass("show");
    //     }
    //     if (wScroll >= $(".text-left").eq(3).offset().top - $(window).height() / 1.5) {
    //         $(".text-left").eq(3).addClass("show");
    //         $(".text-left").eq(4).addClass("show");
    //         $(".text-left").eq(5).addClass("show");
    //     }
    //     if (wScroll >= $(".text-left").eq(6).offset().top - $(window).height() / 1.7) {
    //         $(".text-left").eq(6).addClass("show");
    //         $(".text-left").eq(7).addClass("show");
    //         $(".text-left").eq(8).addClass("show");
    //         $(".text-left").eq(9).addClass("show");
    //         $(".text-left").eq(10).addClass("show");
    //     }
    //     //섹션2 결과물 전체 목업 쇼 애니메이션     
    //     if (wScroll >= $(".p-mood").offset().top - $(window).height() / 1.05) {
    //         $(".p-desktop").addClass("view");
    //         $(".p-mood").addClass("view");
    //         $(".p-mobile").addClass("view");
    //     }
    //     //섹션2 결과물 디테일보여주기
    //     if (wScroll >= $(".frw").offset().top - $(window).height() / 1.5) {
    //         $(".frw").addClass("show");
    //     }
    //     if (wScroll >= $(".frw .rw-about").offset().top - $(window).height() / 1.3) {
    //         $(".frw .rw-about").addClass("show");
    //     }
    //     if (wScroll >= $(".frw2").offset().top - $(window).height() / 1.5) {
    //         $(".frw2").addClass("show");
    //     }
    //     if (wScroll >= $(".frw2 .rw-about").offset().top - $(window).height() / 1.3) {
    //         $(".frw2 .rw-about").addClass("show");
    //     }
    //     if (wScroll >= $(".frw3").offset().top - $(window).height() / 1.5) {
    //         $(".frw3").addClass("show");
    //     }
    //     if (wScroll >= $(".frw3 .rw-about").offset().top - $(window).height() / 1.3) {
    //         $(".frw3 .rw-about").addClass("show");
    //     }
    //     if (wScroll >= $(".frw4").offset().top - $(window).height() / 1.5) {
    //         $(".frw4").addClass("show");
    //     }
    //     if (wScroll >= $(".frw4 .rw-about").offset().top - $(window).height() / 1.3) {
    //         $(".frw4 .rw-about").addClass("show");
    //     }
    //     if (wScroll >= $(".frw5").offset().top - $(window).height() / 1.5) {
    //         $(".frw5").addClass("show");
    //     }
    //     if (wScroll >= $(".frw5 .rw-about").offset().top - $(window).height() / 1.3) {
    //         $(".frw5 .rw-about").addClass("show");
    //     }
    //     //섹션2 dream 부분 쇼이벤트    
    //     if (wScroll >= $(".dream").offset().top - $(window).height() / 2) {
    //         $(".dream").addClass("show");
    //     }
    //     if (wScroll >= $(".dream-b").offset().top - $(window).height() / 1.1) {
    //         $(".dream-b").addClass("show");
    //     }
    //     //섹션3 ability 텍스트 이벤트    
    //     if (wScroll >= cont.eq(2).offset().top - $(window).height() / 1.3) {
    //         $(".con-num").eq(2).children("span").addClass("view");
    //         $(".ab-tit").addClass("show");
    //         $(".abilityEffect").addClass("show");
    //     }
    //     if (wScroll >= $(".ae-t1").offset().top - $(window).height() / 1.3) {
    //         $(".con-num").eq(2).children("span").addClass("view");
    //         $(".ab-tit").addClass("show");
    //         $(".ae-t1").addClass("show");
    //         $(".ae-t2").addClass("show");
    //     }
    //     if (wScroll >= $(".ae-t3").offset().top - $(window).height() / 1.3) {
    //         $(".ae-t3").addClass("show");
    //         $(".ae-t4").addClass("show");
    //         $(".ae-t5").addClass("show");
    //         $(".ae-t6").addClass("show");
    //     }
    //     if (wScroll >= $(".ae-t7").offset().top - $(window).height() / 1.3) {
    //         $(".ae-t7").addClass("show");
    //         $(".ae-t8").addClass("show");
    //         $(".ae-t9").addClass("show");
    //     }
    //     //섹션3 ability 123..a 카운터 쇼 이벤트
    //     if (wScroll >= $(".ab-count").offset().top - $(window).height() / 1.3) {
    //         $(".ab-count").addClass("show");
    //     }
    //     //섹션4 animation 텍스트쇼 이벤트    
    //     if (wScroll >= cont.eq(3).offset().top - $(window).height() / 1.4) {
    //         $(".con-num").eq(3).children("span").addClass("view");
    //         $(".an-tit").addClass("show");
    //     }
    //     if (wScroll >= $(".animation-effect .ani-e  > div > .ae-t1 > em").offset().top - $(window).height() / 1.3) {
    //         $(".animation-effect .ani-e  > div > .ae-t1 > em").addClass("show");
    //         $(".animation-effect .ani-e  > div > .ae-t2> em").addClass("show");
    //         $(".animation-effect .ani-e  > div > .ae-t3> em").addClass("show");
    //     }
    //     if (wScroll >= $(".animation-effect .ani-e  > div > .ae-t4 > em").offset().top - $(window).height() / 1.3) {
    //         $(".animation-effect .ani-e  > div > .ae-t4 > em").addClass("show");
    //         $(".animation-effect .ani-e  > div > .ae-t5> em").addClass("show");
    //         $(".animation-effect .ani-e  > div > .ae-t6> em").addClass("show");
    //     }
    //     if (wScroll >= $(".animation-effect .ani-e  > div > .ae-t7 > em").offset().top - $(window).height() / 1.3) {
    //         $(".animation-effect .ani-e  > div > .ae-t7 > em").addClass("show");
    //         $(".animation-effect .ani-e  > div > .ae-t8> em").addClass("show");
    //         $(".animation-effect .ani-e  > div > .ae-t9> em").addClass("show");
    //     }
    //     //animation  결과물 보여주기
    //     if (wScroll >= $(".anibox").offset().top - $(window).height() / 1.2) {
    //         $(".anibox").addClass("show");
    //     }
    //     if (wScroll >= $(".ani-list").offset().top - $(window).height() / 1) {
    //         $(".ani-list").addClass("show");
    //     }
    //     if (wScroll >= $(".ani-itduce").offset().top - $(window).height() / 1.2) {
    //         $(".ani-itduce").addClass("show");
    //     }
    //     //contact 텍스트이펙트쇼
    //     if (wScroll >= cont.eq(4).offset().top - $(window).height() / 1.4) {
    //         $(".con-num").eq(4).children("span").addClass("view");
    //         $(".cn-tit").addClass("show");

    //     }
    //     if (wScroll >= $(".contact-effect .cn-e  > div > .ae-t1> em").offset().top - $(window).height() / 1.3) {
    //         $(".contact-effect .cn-e  > div > .ae-t1> em").addClass("show");
    //         $(".contact-effect .cn-e  > div > .ae-t2> em").addClass("show");
    //         $(".contact-effect .cn-e  > div > .ae-t3> em").addClass("show");
    //     }
    //     if (wScroll >= $(".contact-effect .cn-e  > div > .ae-t4> em").offset().top - $(window).height() / 1.3) {
    //         $(".contact-effect .cn-e  > div > .ae-t4> em").addClass("show");
    //         $(".contact-effect .cn-e  > div > .ae-t5> em").addClass("show");
    //         $(".contact-effect .cn-e  > div > .ae-t6> em").addClass("show");
    //         $(".contact-effect .cn-e  > div > .ae-t7> em").addClass("show");
    //     }
    //     //contact 디테일이펙트쇼           
    //     if (wScroll >= $(".mycontact").offset().top - $(window).height() / 2) {
    //         $(".mycontact .contact-text .cnt-t em").addClass("view");
    //         $(".contact-pic .pic-inner").addClass("view");
    //     }
    //     if (wScroll >= $(".email-sns").offset().top - $(window).height() / 1.4) {
    //         $(".email-sns .arrow-icon img").addClass("view");
    //         $(".email-address2").addClass("view");
    //         $(".email-address").addClass("view");
    //     }
    //     if (wScroll >= $(".social").offset().top - $(window).height() / 0.7) {
    //         $(".social").addClass("view");
    //         $(".social .social-icon").addClass("view");
    //     }
    //     if (wScroll >= $(".myform").offset().top - $(window).height() / 0.7) {
    //         $(".myform").addClass("show");

    //     }
    // });

    // //메뉴버튼을 클랙했을때
    nav.click(function (e) {
        e.preventDefault();
        var target = $(this); //클릭한 타겟을 변수에 할당
        var index = target.index(); //클릭한 타겟에 번호를 할당
        var section = cont.eq(index) //클릭한 버튼과 컨텐츠를 연결
        var offset = section.offset().top; //각 컨텐츠의 오프셋 값을 할당
        alert(offset);
        $("html,body").animate({
            scrollTop: offset + 20
        }, 1000);
    })
});