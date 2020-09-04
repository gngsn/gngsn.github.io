$('.center').slick({
    centerMode: true,
    centerPadding: '250px',
    slidesToShow: 3,
    responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 2,
            }
        }, {
            breakpoint: 800,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
                dots:true
            }
        }
    ]
});

$('.lazy').slick({
    lazyLoad: 'ondemand',
});

// const initArrowCursor = () => {
//     var center = document.getElementById('center'); // header 객체에 onclick 이벤트 속성을 연결 
//     if (center.classList.contains('cursor-next')) {
//         center.onclick = function () {
//             $('.slick-next').click();
//         }
//     } else if (center.classList.contains('cursor-back')) {
//         center.onclick = function () {
//             $('.slick-prev').click();
//         }
//     }
    // else if (center.classList.contains('cursor-plus')) {
    //     center.onclick = function () {
    //         document.getElementById('section-cont').classList.add('cursor-cancel');
    //         document.getElementById('inner').classList.add('detail-active');
    //         document.getElementById('main').classList.remove('hide');
    //         section.style.marginTop = '0px';
    //         // document.querySelector('.link.home').style.color = white
    //     }
    // }
    // $('.center').on('click', e => {
    // });
    // $('.slick-slide').on("click", e => {
    //     // console.log(document.getElementsByClassName('slick-active'));
    //     const target = $(e.currentTarget);
    //     const slideClicked = target.attr("data-slick-index");
    //     const link = target.data('link');
    //     console.log('slideClicked : ', slideClicked);
    //     console.log('link : ', link);

    //     clientX = e.clientX;
    //     clientY = e.clientY;
    //     // let elem = document.querySelectorAll('.slick-active');
    //     console.log(elem);
    //     let rect = elem.getBoundingClientRect();
    //     let section = document.getElementById('section-cont');

    //     if (slideClicked < -1) {
    //         $('.slick-next').click();
    //     } else if (slideClicked > 2) {
    //         $('.slick-prev').click();
    //     } else {
    //         const link = $(e.currentTarget).dataset.link;
    //         loadPost(link);
    //         // document.getElementById('inner').classList.add('detail-active');
    //         // document.getElementById('main').classList.remove('hide');
    //         // section.classList.add('cursor-cancel');
    //         // section.style.marginTop = '0px';
    //     }
    // });

    // document.addEventListener("mousemove", e => {
    //     clientX = e.clientX;
    //     clientY = e.clientY;

    //     let elem = document.querySelector('.slick-active');
    //     let rect = elem.getBoundingClientRect();
    //     let section = document.getElementById('section-cont');


    //     if (clientX > rect.left + rect.width && !center.classList.contains('cursor-next')) {
    //         addClass('center', 'cursor-next', ['cursor-back', 'cursor-plus']);
    //     } else if (clientX < rect.left && !center.classList.contains('cursor-back')) {
    //         addClass('center', 'cursor-back', ['cursor-next', 'cursor-plus']);
    //     }
        // else if (clientX <= rect.left + rect.width && clientX > rect.left && !center.classList.contains('cursor-plus')) {
        //     addClass('center', 'cursor-plus', ['cursor-next', 'cursor-back']);
        // }
        // section.onclick = function () {
        //     document.getElementById('inner').classList.remove('detail-active');
        //     section.style.marginTop = '100vh';
        // }

        // if (section.style.marginTop === '100vh') {
        //     document.getElementById('main').classList.add('hide');
        // }
//     });


//     const addClass = async (id, add, [...remove]) => {
//         await remove.forEach((rm) => {
//             document.getElementById(id).classList.remove(rm);
//         })
//         document.getElementById(id).classList.add(add);
//     }
// }

// initArrowCursor();
// .attr("data-slick-index")
function loadPost(card) {
    // $('.slick-slide .slick-center').attr()
    // const isactive = card.parentNode.parentNode.classList.contains('slick-active').contains('slick-cloned');
    // // .attr('aria-hidden');
    const route = card.dataset.link;
    // console.log(parentsIdx);
    // if (parentsIdx < -1) {
    //     $('.slick-prev').click();
    // } else if (parentsIdx > 1) {
    //     $('.slick-next').click();
    // } else {
        window.location.href = 'http://' + window.location.host + route;
    // }
}

$(document).ready(function () {
    // 원하는 파일 경로를 삽입하면 된다
});
