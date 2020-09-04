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
                        height: '80vh'
                    }, 0);
            } else {
                $("#img > img")
                    .animate({
                        width: '80vw',
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