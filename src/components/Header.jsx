import React from 'react';

function Header(props) {
    return (
        <div style={{width:"100%"}}>
            <div style={{width:"100%",height:"60px",background:"black",color:"snow",display:"flex",justifyContent:"center"}}>
                <a style={{color:"snow",marginTop:"10px",textDecoration:"none"}} href="£">Complimentary shipping applies for all online purchases to Hong Kong and Mainland China addresses. For personalized advice online, book a video consultation.   +</a>
            </div>
            <div className="navbar" >
                <ul className="nav">
                    <li className="nav-item">Shop</li>
                    <li className="nav-item">Read</li>
                    <li className="nav-item">Stores</li>
                    <li className="nav-item">Search</li>
                </ul>
                <ul className="nav1">
                    <li className="nav-item">Login</li>
                    <li className="nav-item">Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;