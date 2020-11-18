'use stric';
import '../../scss/about.scss';
import React, { useState } from 'react';
import SkillList from './SkillList'
import List from './List'
import ProjectDetail from './ProjectDetail'
import { Flipper } from 'react-flip-toolkit'

const ProjectSection = ({data}) => {
    let [id, setId] = useState();
    const { key, title, cate, para, isRight = false, idx } = data;
    const subDivClass = isRight ? 'sub-cnt right' : 'sub-cnt';
    const [fullScreen, setFullScreen] = useState();
    const toggleFullScreen = () => setFullScreen(prevState => !prevState);


    return (
        <Flipper key={idx} flipKey={fullScreen} >
            {
                fullScreen ?
                    <ProjectDetail id={id} toggleFullScreen={toggleFullScreen} />
                    :
                    <>
                        <div className={subDivClass}>
                            <div className="red-line">
                                <h2>{title}</h2>
                                <span></span>
                            </div>
                            {para}
                            <SkillList />
                        </div>
                        <List setId={setId} flipId="square" toggleFullScreen={toggleFullScreen} cate={cate} />
                    </>
            }
        </Flipper>
    );
}

export default ProjectSection;
