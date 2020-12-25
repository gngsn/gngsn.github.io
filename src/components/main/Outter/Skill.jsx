import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import Graph from './Graph';
import { mainContext } from '../../../context'

const Skill = () => {
    var inView = false;
    var backgroundColor = [
        '#000', '#000', '#000', '#000', '#000'
    ];
    const context = useContext(mainContext);
    const { theme } = context;
    if (theme === 'dark') {
        backgroundColor = [ '#fff', '#fff', '#fff', '#fff', '#fff'];
    } else {
        backgroundColor = [ '#000', '#000', '#000', '#000', '#000'];
    }
    
    var langData = {
        labels: ["Java", "JS", "MySQL", "PHP", "C"],
        datasets: [{
            data: [8, 10, 10, 7, 5],
            backgroundColor: backgroundColor
        }]
    };

    var techData = {
        labels: ["Node", "Spring", "Linux", "Git", "MySQL"],
        datasets: [{
            data: [10, 7, 8, 9, 10],
            backgroundColor: backgroundColor
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
export default Skill;
