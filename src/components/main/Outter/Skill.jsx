import { Grid } from '@material-ui/core';
import React from 'react';
import Graph from './Graph';

const graph = () => {
    var inView = false;

    // function isScrolledIntoView(elem) {
    //     var docViewTop = $(window).scrollTop();
    //     var docViewBottom = docViewTop + $(window).height();

    //     var elemTop = $(elem).offset().top;
    //     var elemBottom = elemTop + $(elem).height();

    //     return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
    // }


    var langData = {
        labels: ["Java", "JS", "MySQL", "PHP", "C"],
        datasets: [{
            data: [8, 10, 10, 7, 5],
            backgroundColor: [
                '#000', '#000', '#000', '#000', '#000'
            ]
        }]
    };

    var techData = {
        labels: ["Node", "Spring", "Linux", "Git", "MySQL"],
        datasets: [{
            data: [10, 7, 8, 9, 10],
            backgroundColor: [
                '#000', '#000', '#000', '#000', '#000'
            ]
        }]
    };

    return (
        <>
            <Grid className="graph-container">
                <Graph
                    title="LANGUAGE"
                    datasets={langData}
                    width={400}
                    height={300}
                />
                <Graph
                    title="SKILL"
                    datasets={techData}
                    width={400}
                    height={300}
                />
            </Grid>
        </>
    )
}
export default graph;
