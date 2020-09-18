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

var inView = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$('#contents').scroll(function () {
    if (isScrolledIntoView('#language')) {
        if (inView) {
            return;
        }
        var langCtx = document.getElementById("language").getContext('2d');
        var textCtx = document.getElementById("tect").getContext('2d');
        langCtx.canvas.width = 400;
        textCtx.canvas.width = 400;

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
                    barThickness: 18,
                    ticks: {
                        fontColor: "black",
                        fontSize: 16,
                        stepSize: 1,
                        beginAtZero: true
                    }
                }]
            },
            animation: {
                duration: 5000,
            },
        }
        var language = new Chart(langCtx, {
            type: 'bar',
            data: {
                labels: ["Java", "JS", "MySQL", "PHP", "C"],
                datasets: [{
                    data: [8, 10, 10, 7, 5],
                    backgroundColor: [
                        // '#fff', '#fff', '#fff', '#fff', '#fff'
                        '#F7CE46', '#F7CE46', '#F7CE46', '#F7CE46', '#F7CE46'
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
                        // '#fff', '#fff', '#fff', '#fff', '#fff'
                        '#F7CE46', '#F7CE46', '#F7CE46', '#F7CE46', '#F7CE46'
                    ]
                }]
            },
            options: options
        });
        inView = true;
    }
});

