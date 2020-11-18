'use stric';
import '../../../scss/common.scss';
import Bubble from './Bubble';
import Skill from './Skill';
import Contact from './Contact';

const outter = () => {
    return (
        <>
        <div className="section-cont">
            <Bubble />
            <img id="midImage" src="/img/working.jpg" />
            <div className="section skill">
                <Skill />
            </div>
            <hr />
            <Contact />
        </div>
        </>
    )
}

export default outter;