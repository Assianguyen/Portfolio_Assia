import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import K1 from '../../assests/Pdf_file/oneM2M_Hackathon-01.png'
import K2 from '../../assests/Pdf_file/oneM2M_Hackathon-02.png'
import K3 from '../../assests/Pdf_file/oneM2M_Hackathon-03.png'

import './test_page.css'
// import { Button } from 'react-bootstrap';
// import Header from "../../components/header/Header";
// import Greeting from "../../containers/greeting/Greeting";
// import Skills from "../../containers/skills/Skills";
// import Footer from "../../components/footer/Footer";
// import pdf from '../../assests/Pdf_file/CV_Assia_NGUYEN.pdf'

function Test_page(props) {
  return (
    <div className='sliders'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={K1} 
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src={K2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src={K3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Test_page;