$(document).ready(function () {
    var nav = $(".fixed-nav .nav li"); //버튼을 변수에 할당(저장)
    var cont = $("#contents>section"); //컨텐츠를 변수에 할당

    nav.click(function (e) {
        var target = $(this); //클릭한 타겟을 변수에 할당
        var index = target.index(); //클릭한 타겟에 번호를 할당
        var section = cont.eq(index); //클릭한 버튼과 컨텐츠를 연결
        var offset = section.offset().top; //각 컨텐츠의 오프셋 값을 할당

        $("html,body").animate({
            scrollTop: offset
        }, 1000);
    });
    $('.content').scroll(() => {
        var wScroll = $('.content').scrollTop();
        
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

        var offset1 = (wScroll - $('.offset1').offset().top*0.7) * 0.3;
        var offset2 = (wScroll - $('.offset2').offset().top*0.7) * -0.3;
        var offset3 = (wScroll - $('.offset3').offset().top*0.7) * 0.3;

        // $(".offset1").css({'transform': 'translateX('+ -offset1 + 'px)'})
        // $(".offset").css({'transform': 'translateX('+ -offset2 + 'px)'})
        // $(".offset1").css({'transform': 'translateX('+ -offset3 + 'px)'})
        // console.log('wScroll : ', wScroll);
        // console.log($('.section2').offset().top);
        // if (offset1 < 10)
            
        // if (offset2 > 0)
        // $(".offset1").css({'transform': 'translateX(' + offset1 + 'px)'});
        //     $(".offset2").css({'transform': 'translateX(' + offset2 + 'px)'});
        //     $(".offset3").css({'transform': 'translateX(' + offset3 + 'px)'});
        // if (offset3 < 0)
            

        var toBlack = $('.section2').offset().top;
        var toWhite = (wScroll - $('.section2').offset().top);

        var section2Offset =$('.section2').offset().top;
        if ( document.querySelector('.content').style.backgroundColor === 'white'&& section2Offset - wScroll > -500) {
            $(".content").css({'animation': 'changeBlackBG 1s ease-in-out alternate'});
            setTimeout(() => {
                $(".content").css({'background-color': 'rgb(0,0,0)'});
            }, 400);
        }else if (wScroll - $('.section2').offset().top > 10) {
            $(".off").css({'animation': 'changeWhiteBG 1s ease-in-out alternate'});
            $(".content").css({'animation': 'changeWhiteBG 1s ease-in-out alternate'});

            $(".off h2").css({'animation': 'changeBlackCL 1s ease-in-out alternate'});
            $(".off").css({'animation': 'changeBlackBorder 1s ease-in-out alternate'});
            $(".on").css({'animation': 'changeBlackBG 1s ease-in-out alternate'});
            $(".on").css({'animation': 'changeWhiteBorder 1s ease-in-out alternate'});
            $(".on h2").css({'animation': 'changeWhiteCL 1s ease-in-out alternate'});
            $(".motto .text_container > h1").css({'animation': 'changeBlackCL 1s ease-in-out alternate'});
            $(".motto .text_container > h2").css({'animation': 'changeBlackCL 1s ease-in-out alternate'});
            $(".text_container .underline").css({'animation': 'changeBlackBG 1s ease-in-out alternate'});
            $(".motto .text_container > h2").css({'border-bottom': '0.2rem solid rgb('+ toBlack + ', '+'+'+toBlack+','+ toBlack+')'});
                $(".motto .text_container > h4").css({'color': 'rgb('+ toBlack + ', '+'+'+toBlack+','+ toBlack+')'});
                $(".fixed-nav .nav li .active").css({'color': 'rgb('+ toBlack + ', '+'+'+toBlack+','+ toBlack+') !important'});
            setTimeout(() => {
                $(".content").css({'background-color': 'white'});
                $(".off h2").css({'color': 'black'});
                $(".off").css({'border': '1px solid black'});  
                $(".on").css({'background-color': 'black'});
                $(".on").css({'border': '1px solid white'});
                $(".on h2").css({'color': 'white'});
                $(".motto .text_container > h1").css({'color': 'black'});
                $(".motto .text_container > h2").css({'color': 'black'});
                $(".underline").css({'background-color': 'rgb('+ toBlack + ', '+'+'+toBlack+','+ toBlack+')'});
            }, 300);
        }
        

        // console.log("$('.section4').offset().top: ", $('.section4').offset().top);
        // if (wScroll > $('.section4').offset().top) {
        //     $(".section4").scrollTop($(".section4").height());
        //     $(".section4").css({'overflow': 'scroll'});
        // } else {$(".section4").css({'overflow': 'hidden'});}
    });
});

let email = "rudtjs4540@gmail.com";
document.querySelector("#icon_mail").addEventListener("click", function () {
    var emailCopy = document.createElement('textarea');
    emailCopy.value = email;
    document.body.appendChild(emailCopy);
    emailCopy.select();
    alert(email + "\n메일이 복사되었습니다.")
    document.execCommand("copy");
    document.body.removeChild(emailCopy);
});

var langCtx = document.getElementById("language").getContext('2d');
var textCtx = document.getElementById("tect").getContext('2d');
let options = {
    maintainAspectRatio: true,
    legend: {
        display: false
    },
    tooltips: {
        enabled: false
    },
    scales: {
        yAxes: [{
            display: false,
            ticks: {
                display: false,
                beginAtZero: true
            },
            gridLines: {
                display: false
            }
        }],
        xAxes: [{
            categoryPercentage: 1,
            gridLines: {
                display: false,
                drawBorder: false,
            },
            barThickness: 22,
            ticks: {
                fontColor: "white",
                fontSize: 18,
                stepSize: 1,
                beginAtZero: true
            }
        }]
    },
}
var language = new Chart(langCtx, {
    type: 'bar',
    data: {
        labels: ["Java", "JS", "SQL", "PHP", "C"],
        datasets: [{
            data: [8, 10, 10, 7, 6],
            backgroundColor: [
                '#fff', '#fff', '#fff', '#fff', '#fff'
            ]
        }]
    },
    options: options
});

var textCtx = new Chart(textCtx, {
    type: 'bar',
    data: {
        labels: ["Node", "Spring", "Linux", "Git", "MySQL"],
        datasets: [{
            data: [10, 8, 5, 10, 10],
            backgroundColor: [
                '#fff', '#fff', '#fff', '#fff', '#fff'
            ]
        }]
    },
    options: options
});