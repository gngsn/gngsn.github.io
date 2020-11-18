'use stric';
import React, { useState } from 'react';
import '../../scss/about.scss';
import Switch from './Switch';

const Inner = () => {
    const [type, setType] = useState('about');
    const [theme, setTheme] = useState('light');
    const isOn = (to) => {
        if (to) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }


    return (
        <div id="about" className="about" >
            {/* <div > */}
                <div className="cursor cursor--small"></div>
                <canvas className="cursor cursor--canvas" resize="true"></canvas>
                <Switch isOn={isOn} />
                <div className="sub-title">
                    <h3>"어차피 할 거, 후회하지 않도록"</h3>
                    <span></span>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Inner;