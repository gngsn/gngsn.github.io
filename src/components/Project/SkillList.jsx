'use stric';
import React from 'react';
import { Grid } from '@material-ui/core';
import Icon from '../elements/Icons';

const SkillList = React.memo(({ list, width=60, height=60, padding =20, fontSize =1.2, style= {} }) => {
    return (
        <Grid container style={style} className="skill">
            {
            list.map((icon, index) => (
                <Grid item xs={1} key={index} style={{margin: 'auto 0px'}}>
                    <Icon name={icon} width={width} height={height} fontSize={fontSize} />
                </Grid>
            ))
            }
        </Grid>
    );
});

export default SkillList;
