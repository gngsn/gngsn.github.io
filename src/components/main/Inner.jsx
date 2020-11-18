'use stric';
import '../../scss/common.scss';

const inner = () => {
    return (
        <div className="inner">
            <div className="cursor cursor--small"></div>
            <canvas className="cursor cursor--canvas" resize='true'></canvas>
            <div>
                <div className="text">
                    <h1>PARK <br /> KYUNG SUN </h1>
                    <h3>박경선</h3>
                </div>
                <div className="selfie">
                    <img id="selfie" src='/img/selfie-white.png' />
                </div>
            </div>
        </div>
    )
}

export default inner;