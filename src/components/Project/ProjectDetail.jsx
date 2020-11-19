import { Flipped } from 'react-flip-toolkit';
import styled from 'styled-components';
import { section1, section2, section3 } from '../../projectList';
import ServerHead from "./Details/ServerHead";
import EarlyBuddy from "./Details/EarlyBuddy";
import Tooc from "./Details/Tooc";
import SoptPage from "./Details/SoptPage";
import GetRest from "./Details/GetRest";

const Cont = styled.div`
        width: 100%;
        height: 100vh;
        top: 0px;
        left: 0px;
        position: fixed;
        z-index: 11;
        overflow: auto;
        background-color: #fff;
`

const ImageBack = styled.div`
        width: 100%;
        height: 100vh;
        z-index: 111;
        background-image: ${props => 'url(' + props.image + ')'};
        background-position: center;
        background-size: cover;
        display: inline-block;
        opacity: 1;
`

const ProjectDetail = ({ id, toggleFullScreen }) => {
    const dataList = section1.concat(section2, section3);
    const data = dataList.find(d => d.key === id)
    let content = <></>;
    console.log('data : ', data)
    if (data.link === 'server-head')
            content = <ServerHead />
    else if (data.link === 'early-buddy')
        content = <EarlyBuddy />
    else if (data.link === 'tooc')
        content = <Tooc />
    else if (data.link === 'sopt-page')
        content = <SoptPage />
    else if (data.link === 'get-rest')
        content = <GetRest />

    return (
        <>
            {
                data ?
                    <Flipped flipId="square">
                        <Cont>
                        <div className="full-screen-square"/>
                            <img id="back-btn" className="back-btn" onClick={toggleFullScreen} src="/img/cancel-red.png" />
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
                        </Cont>
                    </Flipped>
                    :
                    <></>
            }
        </>
    )
}

export default ProjectDetail;