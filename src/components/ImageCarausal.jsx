import React from 'react';
import './carausal.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import sample2 from "./images/sample2.png";
import sample3 from "./images/sample3.png";
import sample4 from "./images/sample4.png";
import sample5 from "./images/sample5.png";

function ImageCarausal() {

const responsive = {
    superLargeDesktop: {
     
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
          <div className="carousel-button-group"> 
            <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
            <button onClick={() => next()} />
           
          </div>
        );
      };

    return (
        <div  >
 <Carousel style={{width:"900px"}} responsive={responsive} customButtonGroup={<ButtonGroup />} >
 <div> 
   <h3 style={{marginLeft:"20px",color:"#333"}}>Accompany with</h3>
     <p style={{marginLeft:"20px",color:"#333"}}>Refreshingly aromatic, Geranium Leaf Body Balm<br/> replenishes moisture and softens skin. Follow daily<br/> with Déodorant and a bracing gargle of Mouthwash.<br/> To finish, spray Tacit on wrists and collarbone and relish enduring notes of crisp green and citrus.</p>

  </div>
  <div className="picbox">
      <img className="image" alt="product-A"src={sample2}/>
      <small>1213</small>
  </div>
  <div className="picbox">
      <img className="image" alt="product-B"src={sample3}/>
      <small>121346</small>
  </div>
  <div className="picbox">
  <img className="image" alt="product-C" src={sample4}/>
  <small>123434</small>
  </div>
  <div className="picbox">
  <img className="image" alt="product-D"src={sample5}/>
  <small>1246413</small>
  </div>
  
</Carousel>
        </div>
    );
}

export default ImageCarausal;