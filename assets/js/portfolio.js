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

    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
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

        if (offset1 < 10) {
        $(".offset1").css({'transform': 'translateX(' + offset1 + 'px)'});
        }
        if (offset2 > 0) {
        $(".offset2").css({'transform': 'translateX(' + offset2 + 'px)'});
        }
        if (offset3 < 0) {
        $(".offset3").css({'transform': 'translateX(' + offset3 + 'px)'});
        }

        var color = 255 - (wScroll - $('.section2').offset().top *0.6);
        var color2 = (wScroll - $('.section2').offset().top*0.6);
        
        $(".off").css({'background-color': 'rgb('+color2+', '+'+'+color2+','+ color2+')'});
        $(".off h2").css({'color': 'rgb('+ color + ', '+'+'+color+','+ color+')'});

        $(".on").css({'background-color': 'rgb('+color+', '+'+'+color+','+ color+')'});
        $(".on").css({'border': '1px solid rgb('+ color2 + ', '+'+'+color2+','+ color2+')'});
        $(".on h2").css({'color': 'rgb('+ color2 + ', '+'+'+color2+','+ color2+')'});

        var color2 = (wScroll - $('.section3').offset().top*0.6);
        
    });

});

// function scrollThere(targetElement, speed) {
//     // initiate an animation to a certain page element:
//     $('html, body').stop().animate({
//             scrollTop: targetElement.offset().top
//         }, // move window so target element is at top of window
//         speed, // speed in milliseconds
//         'swing' // easing
//     ); // end animate
// } // end scrollThere function definition


// //--- START SCROLL EVENTS ---//
// // detect a mousewheel event (note: relies on jquery mousewheel plugin):
// $(window).on('mousewheel', function (e) {
//     // get Y-axis value of each div:
//     var div1y = $('#section1').offset().top,
//         div2y = $('#section2').offset().top,
//         div3y = $('#section3').offset().top,
//         div4y = $('#section4').offset().top,
//         // get window's current scroll position:
//         lastScrollTop = $(this).scrollTop(),
//         // for getting user's scroll direction:
//         scrollDirection,
//         // for determining the previous and next divs to scroll to, based on lastScrollTop:
//         targetUp,
//         targetDown,
//         // for determining which of targetUp or targetDown to scroll to, based on scrollDirection:
//         targetElement;

//     // get scroll direction:
//     if (e.originalEvent.deltaY > -5) {
//         scrollDirection = 'up';
//     } else if (e.originalEvent.deltaY <= 5) {
//         scrollDirection = 'down';
//     } // end if

//     // prevent default behavior (page scroll):
//     e.preventDefault();

//     // condition: determine the previous and next divs to scroll to, based on lastScrollTop:
//     if (lastScrollTop === div1y) {
//         targetUp = $('#section1');
//         targetDown = $('#section2');
//     } else if (lastScrollTop === div2y) {
//         targetUp = $('#section1');
//         targetDown = $('#section3');
//     } else if (lastScrollTop === div3y) {
//         targetUp = $('#section2');
//         targetDown = $('#section4');
//     } else if (lastScrollTop < div2y) {
//         targetUp = $('#section1');
//         targetDown = $('#section2');
//     } else if (lastScrollTop < div3y) {
//         targetUp = $('#section2');
//         targetDown = $('#section3');
//     } else if (lastScrollTop < div4y) {
//         targetUp = $('#section3');
//         targetDown = $('#section4');
//     }
//     // condition: determine which of targetUp or targetDown to scroll to, based on scrollDirection:
//     if (scrollDirection === 'down') {
//         targetElement = targetDown;
//         scrollThere(targetElement, 500);
//     } else if (scrollDirection === 'up') {
//         targetElement = targetUp;
//         scrollThere(targetElement, 500);
//     } // end else if


// }); // end on mousewheel event
// //--- END SCROLL EVENTS ---//

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
                fontSize: 12,
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
            data: [80, 100, 100, 70, 60],
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
            data: [100, 80, 50, 100, 100],
            backgroundColor: [
                '#fff', '#fff', '#fff', '#fff', '#fff'
            ]
        }]
    },
    options: options
});