import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';


const graphPropTypes = {
    datasets: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number,
}

const graph = ({ title, datasets, width, height }) => {
    
    const options = {
        maintainAspectRatio: false,
        responsive: false,
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

    return (
        <div className="graph">
            <h1>{title}.</h1>
            <Bar
                data={datasets}
                width={width}
                height={height}
                options={options}
            />
        </div>
    );
};

graph.propTypes = graphPropTypes;
export default graph;