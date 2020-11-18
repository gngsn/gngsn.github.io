'use stric';

import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import '../../scss/home.scss';

import Inner from './Inner';
import Outter from './Outter';

const index = () => {
    // const [type, setType] = useState('home');
    return (
        <div className="main">
            <Inner />
            <Outter />
        </div>
    );
}


export default index;