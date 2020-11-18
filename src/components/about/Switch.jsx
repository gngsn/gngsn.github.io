'use stric';
import React, { useState, useReducer } from 'react'
import '../../scss/about.scss';
import { initState, initReducer } from '../../context/default'

const Inner = ({isOn}) => {
    let [turnOn, setTurnOn] = useState(false);
    const [state, dispatch] = useReducer(initReducer, initState)
    
    const audio = new Audio('/img/switch.mp3');
    const clickImage = e => {
        audio.play();
        setTurnOn(!turnOn)
        dispatch({type:'theme', payload: 'dark'})
    }

    return (
        <div className="switch">
            {
                turnOn ?
                    <>
                        <div>
                            <h1><em>ON/</em>OFF</h1>
                            <p>"push the switch"</p>
                        </div>
                        <img alt="switch" onClick={clickImage} className="link switch" id="switch" src='/img/switch-on.png' />
                        <h2>어울릴 땐, <br /><em>최고의 화합을</em></h2>
                    </>
                    :
                    <>
                        <div>
                            <h1>ON<em>/OFF</em></h1>
                            <p>"push the switch"</p>
                        </div>
                        <img alt="switch" onClick={clickImage} className="link switch" id="switch" src='/img/switch-off.png' />
                        <h2>개발할 땐, <br /><em>깊은 집중을 </em></h2>
                    </>
            }
        </div>
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