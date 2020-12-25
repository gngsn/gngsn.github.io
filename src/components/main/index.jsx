'use stric';

import React from 'react';
import { Grid } from '@material-ui/core';
import '../../scss/home.scss';

import Inner from './Inner';
import Outter from './Outter';

const index = () => {
    return (
        <div className="main">
            <Inner />
            <Outter />
        </div>
    );
}


export default index;