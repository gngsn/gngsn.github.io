const back = () => {
    window.location.href = 'http://' + window.location.host + '/category/project.html';
}

$(document).ready(function (e) {
    $(document).on("click", "img", function () {
        if ($(this).data('zoom') === true) {
            var path = $(this).attr('src');
            $("#img-wrapper").css("display", "flex").show();
            $("#img")
                .html("<img src='" + path + "' >");
            if ($(this).width() < $(this).height()) {
                $("#img > img")
                    .animate({
                        width: 'auto',
                        height: '50vh'
                    }, 0);
            } else {
                $("#img > img")
                    .animate({
                        width: '50vw',
                        height: 'auto'
                    }, 0);
            }
        }
    });

    $("#img-wrapper").on("click", function (e) {
        $("#img > img").animate({
            width: '0%',
            height: '0%'
        }, 0);
        setTimeout(function () {
            $('#img-wrapper').hide();
        }, 0);
    }); //end bigWrapperClick event
});


$('.cn-gallery').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
});


$('.pdf-gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.pdf-nav'
});
$('.pdf-nav').slick({
    slidesToShow: 8,
    slidesToScroll: 4,
    asNavFor: '.pdf-gallery',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 5,
            dots: false
        }
    },
    {
        breakpoint: 560,
        settings: {
            slidesToShow: 3,
            dots: false
        }
    }]
});

$('.slick-auto').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
});