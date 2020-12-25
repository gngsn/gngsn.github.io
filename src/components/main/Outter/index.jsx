'use stric';
import '../../../scss/common.scss';
import React, { useContext } from 'react';
import Bubble from './Bubble';
import Skill from './Skill';
import Contact from './Contact';
import { mainContext } from '../../../context';


const Outter = () => {
    const { theme } = useContext(mainContext);
    return (
        <>
        <div className="section-cont">
            <Bubble />
            <img id="midImage" src={ theme === 'light' ? '/img/working.jpg' : '/img/working.png'} />
            <div className="section skill">
                <Skill />
            </div>
            <hr />
            <Contact />
        </div>
        </>
    )
}

export default Outter;