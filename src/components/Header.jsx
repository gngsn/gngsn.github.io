'use stric';

import React, { useReducer } from 'react';
import { Grid } from '@material-ui/core';
import '../scss/header.scss';
import { context } from '../context'
import { initState, initReducer } from '../context/default'
import { Link } from "react-router-dom"

const Header = () => {
    const [state, dispatch] = useReducer(initReducer, initState)

    return (
        <>
            <Grid className="nav">
                    {
                        state.type === 'about' ?
                            <Link id="about" to="/about" className="link" onClick={() => dispatch({type:'type', payload: 'about'})}>ABOUT.<span></span></Link>
                            :
                            <Link id="about" to="/about" className="link" onClick={() => dispatch({type:'type', payload: 'about'})}>ABOUT.</Link>
                    }
                    {
                        state.type === 'proj' ?
                            <Link id="project" to="/proj" className="link" onClick={() => dispatch({type:'type', payload: 'proj'})} >PROJ.<span></span></Link>
                            :
                            <Link id="project" to="/proj" className="link" onClick={() => dispatch({type:'type', payload: 'proj'})}>PROJ.</Link>
                    }
                    {
                        state.type === 'home' ?
                            <Link id="home" to="/" className="link" onClick={() => dispatch({type:'type', payload: 'home'})}>PARK.<span></span></Link>
                            :
                            <Link id="home" to="/" className="link" onClick={() => dispatch({type:'type', payload: 'home'})}>PARK.</Link>
                    }
            </Grid>
        </>
    )
}

export default Header;