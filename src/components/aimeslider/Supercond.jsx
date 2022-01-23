import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import S1 from '../../assests/images/supercondensateur_cell.png'
import S2 from '../../assests/images/super_c_zoom.png'
import S3 from '../../assests/images/super_c_zoom2.png'
import '../../components/hackathonSlide/hackathonSlider.css'

function Supercond(props) {
  return (
    <div className='d-flex align-items-center'>
    <Carousel className='slide-super d-block mx-auto' interval={null}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={S1} 
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src={S2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src={S3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Supercond;