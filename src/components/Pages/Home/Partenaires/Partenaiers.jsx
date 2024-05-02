import React from "react";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../../../assets/img/chg.png';
import slide2 from '../../../../assets/img/mlm.png';
import slide3 from '../../../../assets/img/cr_yvelynes.png';
import slide4 from '../../../../assets/img/mte.png';
import slide5 from '../../../../assets/img/tra.png';

function Partenaires() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
        <div className="container-fluid ">
            <div className="row mb-5">
                <div className="col-12">
                    <p className="text-uppercase fs-2">nos partenaires</p>
                </div>
            </div>
        </div>
    <Carousel activeIndex={index} onSelect={handleSelect} interval= '2000' indicators={null} controls={null}>
      <Carousel.Item >
        <img src={slide1} height="100vh" alt="CHG méridian" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide2} height="100vh" alt="mission locale du mantois" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide3} height="100vh" alt="département des Yvelines" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide4} height="100vh" alt="Mairie de mantes le jolie" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide5} height="100vh" alt="mairie de trappes" />
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Partenaires;