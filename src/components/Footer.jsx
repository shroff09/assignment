import React from 'react';
import './footer.css';
function Footer(props) {
    return (
        <>
        <div className="container">
            
            <div  className="subscribe">
            <p>Subscribe</p>
            <input type="email" placeholder="Email address"/>
            <p>I would like to receive communications about Aesop products,<br/> services, stores, events and matters of cultural interest.</p>
            </div>
            <div className="table">
                <table>
                    <thead style={{textAlign:"start"}}>
                        <tr>
                            <th>Orders and support</th>
                            <th>About</th>
                            <th>Social media</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Contact us</td>
                            <td>Our story</td>
                            <td>Instagram </td>
                        </tr>
                        <tr>
                            <td>Video consultation</td>
                            <td>Careers</td>
                            <td>Twitter </td>
                        </tr>
                        <tr>
                            <td>FAQs</td>
                            <td>Corporate gifts</td>
                            <td>LinkedIn</td>
                        </tr>
                        <tr>
                            <td>Delivery and returns</td>
                            <td>Facial appointments</td>
                            <td>WeChat </td>
                        </tr>
                        <tr>
                            <td>Rinse and return</td>
                            <td>Privacy policy</td>
                            <td>Weibo</td>
                        </tr>
                        <tr>
                            <td>Terms and conditions</td>
                        </tr>
                        <tr>
                            <td>Accessibility</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="bottom">Aesop</div>
        </>
    );
}

export default Footer;