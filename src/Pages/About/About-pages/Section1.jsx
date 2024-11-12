import React from 'react'
import img from '../../../assets/bg1.jpg'
import img2 from '../../../assets/img3.jpg'
import './Sectio1.css'
import { useNavigate } from 'react-router-dom'
import { IoMdCheckmarkCircle } from "react-icons/io";
import { LuPackageOpen } from "react-icons/lu";
import { GiWorld } from "react-icons/gi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { SiRider } from "react-icons/si";
import Testimonials from '../../Home/Testimonials.jsx'
import Teams from './Teams.jsx'





const section1 = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className="card text-bg-dark container-fluid">
            <img src={img} className="card-img" alt="..."/>
            <div className="card-img-overlay">
                <h5 className="card-title text-center mt-4 ">About Us </h5>
                <p className="card-text text-center "><span onClick={() => navigate('/')}>Home</span> <span className='text-success mx-3 fw-bold'>/ About us</span></p>
                
            </div>
        </div>
            {/* end */}
        <div className="row g-4 mx-auto mt-2 container">
            <div className=" col-md-6 col-sm-12">
                <img src={img2} className="image-2" alt="..."/>
            </div>
            <div className="col-md-6 col-sm-12">
                <div className='text-center'>
                    <div className="text-success fw-bold">ABOUT US</div>
                    <h2 className='h5'>Modern And Trusted Logistics Company</h2>
                    <p>Africa’s products (pharmaceuticals, supermarkets, and cosmetics) supply chain is very poor and inefficient. Nigeria has one retail pharmacy per 57,000 inhabitants, with approximately 3,800 registered pharmacies and a population of 218 million. However, Nigeria needs to catch up to comparable Sub-Saharan African nations like South Africa (~1 every 19,000), Kenya (1 per 15,000), and Ghana (1 per 32,000) (TCHealth, 2024; WHO, 2014).We are building Africa’s largest digital product supply chain for sustainable economic, social, and healthcare delivery.</p>
                    <p><IoMdCheckmarkCircle className='text-success fs-5'/>Low-cost and affordable products and services</p>
                    <p><IoMdCheckmarkCircle className='text-success fs-5'/>Timely access and efficient delivery</p>
                    <p><IoMdCheckmarkCircle className='text-success fs-5'/>Anti-counterfeit supply chain</p>
                    <p><IoMdCheckmarkCircle className='text-success fs-5'/>Access to finance</p>
                    <p><IoMdCheckmarkCircle className='text-success fs-5'/>Bridging the poor supply chain gap</p>
                    <p><IoMdCheckmarkCircle className='text-success fs-5'/>100% urban and rural coverage</p>
                    <p><IoMdCheckmarkCircle className='text-success fs-5'/>24/7 consultation and emergency response service</p>
    
                </div>
            </div>
            {/* end */}

            <div className=" about container  my-5">
                <div className="shadow-lg text-center">
                <GiWorld className='fs-1 text-success my-3 mx-auto'/>
                <h2 className='fw-bold'>5 +</h2>
                <p className='text-success'>States Covered</p>
                </div>
                <div className="shadow-lg text-center">
                <LuPackageOpen className='fs-1 text-success my-3 mx-auto'/>
                <h2 className='fw-bold'>200 +</h2>
                <p className='text-success'>Strategic Vendors</p>
                </div>
                <div className="shadow-lg text-center">
                <IoPersonCircleOutline className='fs-1 text-success my-3 mx-auto'/>
                <h2 className='fw-bold'>1800 +</h2>
                <p className='text-success'>Happy Shoppers</p>
                </div>
                <div className="text-center shadow-lg text-center">
                <SiRider className='fs-1 text-success my-3 mx-auto'/>
                <h2 className='fw-bold'>150 +</h2>
                <p className='text-success'>Smart Riders</p>
                </div>

            </div>

            {/* end */}
            
            <div className=" row text-center mb-5">
                <div className="col-md-6 col-sm-8 ">
                    <p className="text-success h6 fw-bold">WHY CHOOSE US</p>
                    <p className="h4 ">We Are The Best And That's Why You Can Choose Us Easily.</p>
                    <p className="lead">We collaborate with financial service providers to give our clients access to investments and soft loans for company expansion and growth, as well as for a wealthier and healthier lifestyle. Customers can increase their wealth through investments, which will enhance and accelerate economic growth, while businesses can receive capital in the form of loans or equity finance for stock, equipment, growth, and expansion into new places.</p>
                </div>
                <div className="col-md-6 col-sm-4">
                <img src={img2} className="image-2" alt="..."/>
                </div>
            </div>

            {/* end */}

            <div>
                <Testimonials/>
                <Teams/>
            </div>

        </div>

    </div>
  )
}

export default section1