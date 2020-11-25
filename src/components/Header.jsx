'use stric';

import React, { useReducer } from 'react';
import { Grid } from '@material-ui/core';
import '../scss/header.scss';
import { context } from '../context';
import { initState, initReducer } from '../context/default';
import { Link } from "react-router-dom";

const Header = () => {
    const [state, dispatch] = useReducer(initReducer, initState);

    return (
        <>
            <Grid className="nav">
                <Link id="about" to="/about" className="link" onClick={() => dispatch({ type: 'type', payload: 'about' })}>ABOUT.
                            {state.type === 'about' ?
                        <span></span> : <></>}
                </Link>
                <Link id="project" to="/project" className="link" onClick={() => dispatch({ type: 'type', payload: 'proj' })} >PROJ.
                        {state.type === 'proj' ?
                        <span></span> : <></>
                    }
                </Link>
                <Link id="home" to="/" className="link" onClick={() => dispatch({ type: 'type', payload: 'home' })}>PARK.
                            {state.type === 'home' ?
                        <span></span> : <></>
                    }
                </Link>
            </Grid>
        </>
    )
}

export default Header;