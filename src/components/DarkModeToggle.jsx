
import React, { useContext } from 'react';
import { mainContext } from '../context';
import classNames from 'classnames';
import '../scss/Toggle.scss';

const DarkModeToggle = () => {
    const { theme, dispatch } = useContext(mainContext);

    const changeTheme = e => {
        if(theme === 'dark') {
            e.target.checked = false;
            dispatch({type: 'theme', payload: 'light'});
        } else {
            e.target.checked = true;
            dispatch({type: 'theme', payload: 'dark'});
        }
    }

    return (
        <div className='toggle'>
            <div>
                <label className={classNames('sw',theme === 'dark' ? 'dark':'')}>
                    <input onClick={changeTheme} type='checkbox'/>
                        <span className='slider round'></span>
                </label>
            </div>
        </div>
    );
}

export default DarkModeToggle;