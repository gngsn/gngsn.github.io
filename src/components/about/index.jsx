'use stric';
import React, { useContext } from 'react';
import '../../scss/about.scss';
import { mainContext } from '../../context'
import Switch from './Switch';

const Inner = () => {
    const { dispatch } = useContext(mainContext);

    const isOn = (to) => {
        if (to) {
            dispatch({type: 'theme', payload: 'light'});
        } else {
            dispatch({type: 'theme', payload: 'dark'});
        }
    }


    return (
        <div id="about" className="about" >
            <Switch isOn={isOn} />
            <div className="sub-title">
                <h3>"어차피 할 거, 후회하지 않도록"</h3>
                <span></span>
            </div>
        </div>
    )
}

export default Inner;