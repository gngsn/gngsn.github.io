'use stric';
import '../../scss/common.scss';
import React, { useContext } from 'react';
import { mainContext } from '../../context';
import classNames from 'classnames';

const Inner = () => {
    const { theme } = useContext(mainContext);

    return (
        <div className="inner">
            <div>
                <div className="text --main-red">
                    <h1>PARK <br /> KYUNG SUN </h1>
                    <h3>박경선</h3>
                </div>
                <div className={classNames('selfie', theme === 'dark' ? 'dark':'')}>
                    <img id="selfie" src={theme !== 'dark' ? '/img/selfie-white.png' : '/img/selfie.png'} />
                </div>
            </div>
        </div>
    )
}

export default Inner;