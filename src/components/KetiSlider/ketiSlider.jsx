import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import K1 from '../../assests/Pdf_file/oneM2M_Hackathon-01.png'
import K2 from '../../assests/Pdf_file/oneM2M_Hackathon-02.png'
import K3 from '../../assests/Pdf_file/oneM2M_Hackathon-03.png'
import K4 from '../../assests/Pdf_file/oneM2M_Hackathon-04.png'
import K5 from '../../assests/Pdf_file/oneM2M_Hackathon-05.png'
import K6 from '../../assests/Pdf_file/oneM2M_Hackathon-06.png'
import K7 from '../../assests/Pdf_file/oneM2M_Hackathon-07.png'
import K8 from '../../assests/Pdf_file/oneM2M_Hackathon-08.png'
import K9 from '../../assests/Pdf_file/oneM2M_Hackathon-09.png'
import K10 from '../../assests/Pdf_file/oneM2M_Hackathon-10.png'
import K11 from '../../assests/Pdf_file/oneM2M_Hackathon-11.png'
import K12 from '../../assests/Pdf_file/oneM2M_Hackathon-12.png'
import K13 from '../../assests/Pdf_file/oneM2M_Hackathon-13.png'
import K14 from '../../assests/Pdf_file/oneM2M_Hackathon-14.png'
import K15 from '../../assests/Pdf_file/oneM2M_Hackathon-15.png'
import K16 from '../../assests/Pdf_file/oneM2M_Hackathon-16.png'
import K17 from '../../assests/Pdf_file/oneM2M_Hackathon-17.png'




import './ketiSlider.css'

function KetiSlider(props) {
  return (
    <div className='sliders'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={K1} 
          alt="First slide"
        />
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
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src={K4}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src={K5}
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src={K6}
          alt="Sixth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src={K7}
          alt="Seventh slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src={K8}
          alt="Eigth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src={K9}
          alt="Ninth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src={K10}
          alt="Tenth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src={K11}
          alt="Eleventh slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src={K12}
          alt="Twelveth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src={K13}
          alt="Thirteenth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src={K14}
          alt="Fourteenth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src={K15}
          alt="Fifteenth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src={K16}
          alt="Sixteeth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src={K17}
          alt="Seventeeth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default KetiSlider;