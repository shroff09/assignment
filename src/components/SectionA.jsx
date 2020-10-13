import React from 'react';
import sample1 from './images/sample1.webp';
import logo from './images/logo.png';
import './style.css';
function SectionA(props) {
    const product = [
        {
            type:"Skin feel",
            kind:"Soft, smooth, refreshed"
        },
        {
            type:"Aroma",
            kind:"Fresh, alpine, camphoric"
        },
        {
            type:"Key ingredients",
            kind:"Bamboo Stem, Sage Leaf, Pine Needle"
        },
    ]
    return (
        <div className="block">
            <div className="left">
            <img className="logo" alt="logo" src={logo}/>
            <img className="sample1" alt="product" src={sample1}/>
            </div>
            
            <div className="right">
                <h4>Body&</h4>
                <h2>Redemption Body Scrub</h2>
                <p>A bracing blend of finely milled Pumice, Bamboo Stem and aromatic Pine Needle oil that sloughs away tired cells to leave skin polished and refreshed, perfectly prepared for hydration.</p>
             <hr style={{height:"2px",background:"black"}}/>
             
                <ul>
                {product.map((item,index)=>(
                    <li className="list" key={index}>
                        <h4>{item.type}</h4>
                        <h5>{item.kind}</h5>
                        <hr/>
                    </li>
                ))}
                </ul>
                <p className="button">button</p>
            
           
            </div>
           
            
        </div>
    );
}

export default SectionA;