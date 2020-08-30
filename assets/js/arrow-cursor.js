$('.center').slick({
    centerMode: true,
    centerPadding: '250px',
    slidesToShow: 1,
    responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '100px'
            }
        }, {
            breakpoint: 900,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '60px'
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px'
            }
        }
    ]
});

$('.lazy').slick({
    lazyLoad: 'ondemand',
  });

const initArrowCursor = () => {
    var center = document.getElementById('center'); // header 객체에 onclick 이벤트 속성을 연결 
    if (center.classList.contains('cursor-next')) {

    } else if (center.classList.contains('cursor-back')) {
        center.onclick = function () {
            $('.slick-prev').click();
        }
    } else if (center.classList.contains('cursor-plus')) {
        center.onclick = function () {
            document.getElementById('section-cont').classList.add('cursor-cancel');
            document.getElementById('inner').classList.add('detail-active');
            document.getElementById('main').classList.remove('hide');
            section.style.marginTop = '0px';
            // document.querySelector('.link.home').style.color = white
        }
    }
    
    document.getElementById('center').addEventListener("click", e => {
        clientX = e.clientX;
        clientY = e.clientY;
        let elem = document.querySelector('.slick-active');
        let rect = elem.getBoundingClientRect();
        let section = document.getElementById('section-cont');
        
        if (center.classList.contains('cursor-next')) {
            $('.slick-next').click();
        } else if (center.classList.contains('cursor-back')) {
            $('.slick-prev').click();
        } else if (center.classList.contains('cursor-plus')) {
            document.getElementById('inner').classList.add('detail-active');
            document.getElementById('main').classList.remove('hide');
            section.classList.add('cursor-cancel');
            section.style.marginTop = '0px';
        }
    });

    document.addEventListener("mousemove", e => {
        clientX = e.clientX;
        clientY = e.clientY;

        let elem = document.querySelector('.slick-active');
        let rect = elem.getBoundingClientRect();
        let section = document.getElementById('section-cont');


        if (clientX > rect.left + rect.width && !center.classList.contains('cursor-next')) {
            addClass('center', 'cursor-next', ['cursor-back', 'cursor-plus']);
        } else if (clientX < rect.left && !center.classList.contains('cursor-back')) {
            addClass('center', 'cursor-back', ['cursor-next', 'cursor-plus']);
        } else if (clientX <= rect.left + rect.width && clientX > rect.left && !center.classList.contains('cursor-plus')) {
            addClass('center', 'cursor-plus', ['cursor-next', 'cursor-back']);
        }
        section.onclick = function () {
            document.getElementById('inner').classList.remove('detail-active');
            section.style.marginTop = '100vh';
        }

        if (section.style.marginTop === '100vh') {
            document.getElementById('main').classList.add('hide');
        }
    });


    const addClass = async (id, add, [...remove]) => {
        await remove.forEach((rm) => {
            document.getElementById(id).classList.remove(rm);
        })
        document.getElementById(id).classList.add(add);
    }
}

initArrowCursor();

function loadPost(route) {
    $("#section-cont").load(route);
    // console.log(document.getElementById('section-cont')); 
    // document.getElementById('section-cont').innerHTML = '{%- assign post = posts[0] -%}'
}


$(document).ready( function() {
	  // 원하는 파일 경로를 삽입하면 된다
});