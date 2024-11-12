import React from 'react'
import './Section2.css'
import img1 from '../../assets/drug.jpg'
import img2 from '../../assets/ads.jpg'
import './Hero.css'
import img3 from '../../assets/store.jpg'
import img4 from '../../assets/img5.jpg'
import Slider from "react-slick";

const Section2 = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true
      };


  return (
    <div className='container-fluid bg-light pt-5 '>
        <h3 className='lead text-center mb-5 offer'>Services We Offer</h3>
        <div className="container slider pb-5">
            <Slider {...settings}>
                    <div className='content'>
                        <img src={img1} alt="" />
                        <div>
                         <p className='mt-4'>AI Pharmacist</p>
                        <p className='services'>
                        Is a solution that performs both the functions of drug testing, drug description, and e-prescription for customers to prevent fake, counterfeit, expired, and illegal use of drugs.
                        </p>
                        </div>
                    </div>
                    <div  className='content'>
                        <img src={img2} alt="" />
                        <div>
                         <p className='mt-4'>Oak Ads</p>
                        <p  className='services'>Is a solution for businesses to promote their products and services for more visibility, drive sales, and increase profits.
                        </p>
                        </div>

                    </div>
                    <div  className='content'>
                        <img src={img3} alt="" />
                        <div>
                         <p className='mt-4'>Oakphin Product Hub</p>
                        <p  className='services'>
                        Is a physical local community store in cities and villages where customers can quickly access all kinds of products.
                        </p>
                        </div>
                    </div>
                    <div  className='content'>
                        <img src={img4} alt="" />
                        <div>
                         <p className='mt-4'>Pick-up at store/doorstep delivery</p>
                        <p  className='services'>Customers can order on Oakphin platform andpick it up by themselvesor have it delivered to their doorstep while enjoying limitless offers, bonuses, discounts, and benefits.
                        </p>
                        </div>
                    </div>
            </Slider>
        </div>
    </div>
  )
}

export default Section2