'use stric';
import React, { useState } from 'react';
import classNames from 'classnames';
import { Grid } from '@material-ui/core';
import '../../scss/switch.scss';

const Inner = ({ isOn }) => {
    let [turnOn, setTurnOn] = useState(false);

    const audio = new Audio('/img/switch.mp3');
    const clickImage = e => {
        isOn(turnOn);
        audio.play();
        setTurnOn(!turnOn)
    }

    return (
        <Grid container className="switch">
            <Grid item xs={4}>
                <h1 className={classNames({ '--active': turnOn})}><em>ON/</em>OFF</h1>
                <h1 className={classNames({ '--active': !turnOn})}>ON<em>/OFF</em></h1>
                <p className="caption">"push the switch"</p>
            </Grid>
            <Grid item xs={4}>
            <img alt="switch" onClick={clickImage} className="link switch" id="switch" src={turnOn? '/img/switch-on.png': '/img/switch-off.png'} />
            </Grid>
            <Grid item xs={4}>
                <div className={classNames('rightText', { '--active': turnOn})} >
                    <h2> 어울릴 땐,</h2>
                    <h3>최고의 화합을</h3>
                </div>
                <div className={classNames('rightText', { '--active': !turnOn})}>
                    <h2> 개발할 땐,</h2>
                    <h3>깊은 집중을</h3>
                </div>
            </Grid>
        </Grid>
    )


    // return (
    //     <switchStyle>
    //         <div className="switch">
    //             <div>
    //                 {
    //                     turnOn ?
    //                     <h1><em>ON/</em>OFF</h1> :
    //                     <h1>ON<em>/OFF</em></h1>
    //                 }
    //                 <p>"push the switch"</p>
    //             </div>
    //             {
    //                 turnOn ?
    //                     <img onClick={clickImage} className="link switch" id="switch" src='/img/switch-on.png' /> :
    //                     <img onClick={clickImage} className="link switch" id="switch" src='/img/switch-off.png' />
    //             }
    //             {
    //                     turnOn ?
    //                     <h2>어울릴 땐, <br/><em>최고의 화합을</em></h2> :
    //                     <h2>개발할 땐, <br/><em>깊은 집중을 </em></h2>
    //                 }
    //         </div>
    //     </switchStyle>
    // )
}

export default Inner;