'use stric';
import '../../scss/about.scss';
import React, { useState } from 'react';
import SkillList from './SkillList';
import List from './List';

const ProjectSection = React.memo(({ data }) => {
    let [id, setId] = useState();
    const { key, title, cate, para, isRight = false, idx } = data;
    const subDivClass = isRight ? 'sub-cnt right' : 'sub-cnt';
    const [fullScreen, setFullScreen] = useState();
    const toggleFullScreen = () => setFullScreen(prevState => !prevState);
    let list;
    if (cate === 'backend') {
        list = ['spring', 'node', 'express', 'php', 'aws', 'mysql', 'mongodb', 'nginx', 'linux', 'git', 'github'];
    } else if (cate === 'developer') {
        list = ['xcode', 'ios', 'swift', 'react', 'angular', 'unity', 'git', 'github'];
    } else {
        list = ['illustrator', 'photoshop', 'xd', 'after-effects', '3ds-max'];
    }

    return (
        <>
            <div className={subDivClass}>
                <div className="red-line">
                    <h2>{title}</h2>
                    <span></span>
                </div>
                {para}
                <SkillList width={90} height={90} padding={25} fontSize={1.5} list={list} />
            </div>
            <List setId={setId} flipId="square" toggleFullScreen={toggleFullScreen} cate={cate} />
        </>
    );
});

export default ProjectSection;
