import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import S1 from '../../assests/images/SD-1.png'
import S2 from '../../assests/images/SD-2.png'
import S3 from '../../assests/images/SD-3.png'
import S4 from '../../assests/images/SD-4.png'
import S5 from '../../assests/images/SD-5.png'
import S6 from '../../assests/images/SD-6.png'
import '../../components/hackathonSlide/hackathonSlider.css'

function AimeSlider(props) {
  return (
    <div className=''>
    <Carousel className='slide-aime'>
      <Carousel.Item>
        <img
          className="im d-block w-100"
          src={S1} 
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="im d-flex w-100"
          src={S2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="im d-flex w-100"
          src={S3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="im d-flex w-100"
          src={S4}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="im d-flex w-100"
          src={S5}
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="im d-flex w-100"
          src={S6}
          alt="Sixth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default AimeSlider;