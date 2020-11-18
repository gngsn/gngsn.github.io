$('#center').on('mouseover', '.slick-slide', function (e) {
    let $currTarget = $(e.currentTarget),
        index = $currTarget.data('slick-index'),
        slickObj = $('#center').slick('getSlick');
    slickObj.slickGoTo(index);
});

$('.center').slick({
    centerMode: true,
    centerPadding: '70px',
    slidesToShow: 3,
    dots: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,
            }
        }, {
            breakpoint: 900,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '70px',
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 425,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
            }
        }
    ]
});

$('.lazy').slick({
    lazyLoad: 'ondemand',
});


function loadPost(card) {
    let route = card.dataset.link;
    let theme = getUrlParameters().th;
    if (theme !== undefined) 
        route += "?th="+theme;
    window.location.href = route;
}