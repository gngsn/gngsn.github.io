var langCtx = document.getElementById("language").getContext('2d');
var textCtx = document.getElementById("tect").getContext('2d');
var language = new Chart(langCtx, {
    type: 'bar',
    data: {
        labels: ["JavaScript", "TypeScript", "Java", "Swift", "C", "C++"],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(43, 43, 43,1)',
                'rgba(43, 43, 43, 1)',
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
                barThickness: 6,
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

var textCtx = new Chart(textCtx, {
    type: 'bar',
    data: {
        labels: ["Node", "Spring", "iOS", "React", "Angular"],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
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
                barThickness: 6,
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