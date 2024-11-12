import React from 'react'
import bg1 from '../../assets/bg1.jpg'
import bg2 from '../../assets/bg2.jpg'
import './Hero.css'
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate()
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

  return (
    <div className="hero slider-container">
        <Slider {...settings}>
        <div className='slide'>
            <img className='container-fluid' src={bg1} alt="" />

            <div className="content-1 container">
                <p>Africa all-in-one B2B2C digital infrastructure: Q-commerce, logistics,</p>
                <p> and financial platform for consumers and businesses to access reasonable goods and services for sustainable healthcare.</p>
                <button onClick={() => navigate('/service')} className='btn btn-success'>Our Services</button>
            </div>

        </div>
        <div className='slide'>
            <img className='container-fluid' src={bg2} alt="" />

            <div className="content-2 container">
                <p>Experience amazing shopping with rapid delivery </p>
                <p>from licensed pharmacies, supermarkets, and cosmetics stores.</p>
                <button onClick={() => navigate('/service')} className='btn btn-success'>Our Services</button>
            </div>
        </div>
        
      </Slider>
    </div>
  )
}

export default Hero