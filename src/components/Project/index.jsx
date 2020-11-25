'use stric';
import '../../scss/about.scss';
import React, { useState } from 'react';
import ProjectSection from './ProjectSection';
import sectionList from '../../sectionList';

const Project = () => {
    return (
        <div id="project" className="project">
            <div className="content">
                <div className="red-line">
                    <h1><em>"</em><span className="break-line660"> 성장 중독</span> 백엔드 개발자<em>"</em></h1>
                    <span></span>
                </div>
                {
                    sectionList.map((sec, index) => (
                        <ProjectSection key={index} setId="setId" data={sec}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Project;