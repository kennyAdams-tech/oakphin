import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../../../assets/bg1.jpg'
import Service from '../../Home/Section1.jsx'
import logo from '../../../assets/logo.jpeg'
import Service2 from '../../Home/Section2.jsx'
import Footer from '../../../Component/Footer.jsx'
const Section1 = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className="card text-bg-dark container-fluid">
            <img src={logo} className="card-img" alt="..."/>
            <div className="card-img-overlay">
                <h5 className="card-title text-center mt-4 ">Services </h5>
                <p className="card-text text-center "><span onClick={() => navigate('/')}>Home</span> <span className='text-success mx-3 fw-bold'>/ Services</span></p>
                
            </div>
        </div>
        {/* end */}
        <div className="container mt-4">
            <div className="text-center text-success ">OUR SERVICES</div>
            <div className="mt-1 text-center h5">We Are Trusted For Our Services</div>
            <div className="text-center lead">We collaborate with financial service providers to give our clients access to investments and soft loans for company expansion and growth, as well as for a wealthier and healthier lifestyle. Customers can increase their wealth through investments, which will enhance and accelerate economic growth, while businesses can receive capital in the form of loans or equity finance for stock, equipment, growth, and expansion into new places.</div>
            <Service/>
            <Service2/>
        </div>

     <Footer/>
    </div>
  )
}

export default Section1