import React from 'react';
import './styleB.css';
import textpic from './images/textpic.jpg';
function SectionB(props) {
    return (
        <div className="block">
            <div className="picblock">
                <img className="picture" alt="quotes" src={textpic}/>
            </div>
            <div className="rightblock">
            <h2>Once or twice weekly, massage<br/> onto soaked skin from neck to toe,<br/> then rinse thoroughly.</h2>
            <hr/>
            <h6>Dosage</h6>
            <h6>Desired amount</h6>
            <hr/>
            <h6>Texture</h6>
            <h6>opaque,fine-grain gel</h6>
            
            </div>
        </div>
    );
}

export default SectionB;