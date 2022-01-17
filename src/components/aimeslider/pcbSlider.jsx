import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import S1 from '../../assests/images/PCB.PNG'
import S2 from '../../assests/images/PCB_3D.PNG'
import S3 from '../../assests/images/PCB_3D_FACE.PNG'
import S4 from '../../assests/images/PCB_3D_DOS.PNG'
import '../../components/hackathonSlide/hackathonSlider.css'

function PCBSlider(props) {
  return (
    <div className='d-flex align-items-center'>
    <Carousel className='slide-pcb d-block mx-auto' interval={null}>
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
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src={S4}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default PCBSlider;