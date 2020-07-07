var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["JavaScript", "TypeScript", "Java", "Swift", "C", "C++"],
            datasets: [{
                // label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(43, 43, 43,1)',
                    'rgba(43, 43, 43, 1)',
                    'rgba(43, 43, 43, 1)',
                    'rgba(43, 43, 43, 1)',
                    'rgba(43, 43, 43, 1)',
                    'rgba(43, 43, 43, 1)'
                ],
                
                // borderColor: [
                //     'rgba(255,99,132,1)',
                //     'rgba(54, 162, 235, 1)',
                //     'rgba(255, 206, 86, 1)',
                //     'rgba(75, 192, 192, 1)',
                //     'rgba(153, 102, 255, 1)',
                //     'rgba(255, 159, 64, 1)'
                // ],
                barThickness: 2,
                // borderWidth: 0
            }]
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                layout: {
                    padding: {
                        left: 50,
                        right: 50,
                        top: 0,
                        bottom: 0
                    }
                },
                legend: {
                    display: false
                },
                tooltips: false,
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    },
                    gridLines: {
                        display:false
                    }
                }],
                xAxes: [{
                    barPercentage: 0.6,
                    gridLines: {
                        display:false
                    }
                }]
            },
            
        }
    });