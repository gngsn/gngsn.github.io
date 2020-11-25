import styled from 'styled-components';
import React, { useState, useEffect } from 'react'
import { section1, section2, section3 } from '../../projectList';
import ServerHead from "./Details/ServerHead";
import EarlyBuddy from "./Details/EarlyBuddy";
import Tooc from "./Details/Tooc";
import SoptPage from "./Details/SoptPage";
import GetRest from "./Details/GetRest";
import '../../scss/post.scss';
import { Link } from 'react-router-dom';

const DetailContainer = styled.div`
        width: 100%;
        height: 100vh;
        top: 0px;
        left: 0px;
        position: fixed;
        overflow: auto;
        background-color: #fff;
        z-index: 11;
    `;

const ImageBack = styled.div`
        width: 100%;
        height: 100vh;
        z-index: 111;
        background-image: ${props => 'url(' + props.image + ')'};
        background-position: center;
        background-size: cover;
        display: inline-block;
        opacity: 1;
`;

const ProjectDetail = React.memo(({location}) => {
    const dataList = section1.concat(section2, section3);
    let content = <></>;
    const title = location.pathname.split('/')[2];
    const data = dataList.find(d => d.link === title);
    
    // console.log('data : ', data)
    if (title === 'server-head')
            content = <ServerHead />
    else if (title === 'early-buddy')
        content = <EarlyBuddy />
    else if (title === 'tooc')
        content = <Tooc />
    else if (title === 'sopt-page')
        content = <SoptPage />
    else if (title === 'get-rest')
        content = <GetRest />

    return (
        <div className="project-detail">
            {
                data ?
                    // <Flipped flipId="square">
                        <DetailContainer>
                        <div className="full-screen-square"/>
                            <Link to='/project'>
                                <img id="back-btn" className="back-btn" src="/img/cancel-red.png" />
                            </Link>
                            {/* <img id="back-btn" className="back-btn" onClick={toggleFullScreen} src="/img/cancel-red.png" /> */}
                            <div className="post">
                                <ImageBack image={data.backImage} className="proj-title">
                                    <div className="title">
                                        <h2> {data.duration} </h2>
                                        <h3> {data.title}</h3>
                                    </div>
                                </ImageBack>
                                <div className="content">
                                    {content}
                                </div>
                            </div>
                        </DetailContainer>
                    // </Flipped>
                    :
                    <></>
            }
        </div>
    )
});

export default ProjectDetail;