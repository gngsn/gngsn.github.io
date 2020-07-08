var langCtx = document.getElementById("language").getContext('2d');
var textCtx = document.getElementById("tect").getContext('2d');
var language = new Chart(langCtx, {
    type: 'bar',
    data: {
        labels: ["JavaScript", "Java", "Swift", "SQL"],
        datasets: [{
            data: [90, 80, 60, 90],
            backgroundColor: [
                'rgba(43, 43, 43 ,1)'
            ]
        }]
    },
    options: {
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
                },
                barThickness: 20,
            }],
            xAxes: [{
                categoryPercentage: 1.5,
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
                barThickness: 6,
            }]
        },
    }
});

var textCtx = new Chart(textCtx, {
    type: 'bar',
    data: {
        labels: ["Node", "Spring", "iOS", "React", "Angular"],
        datasets: [{
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(43, 43, 43,1)',
                'rgba(43, 43, 43, 1)',
                'rgba(43, 43, 43, 1)',
                'rgba(43, 43, 43, 1)',
                'rgba(43, 43, 43, 1)'
            ]
        }]
    },
    options: {
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
                },
                barThickness: 20,
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false,
                }
            }]
        },
    }
});