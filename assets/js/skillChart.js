var ctx = document.getElementById("language").getContext('2d');
    var myChart = new Chart(ctx, {
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
                ],
                // borderWidth: 0
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
                    barThickness: 10,
                    ticks: {
                        display: false,
                        beginAtZero:true
                    },
                    gridLines: {
                        display:false
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display:false,
                        drawBorder: false,
                    }
                }]
            },
            
        }
    });