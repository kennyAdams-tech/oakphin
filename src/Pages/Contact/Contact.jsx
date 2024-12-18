import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../../assets/bg1.jpg'
import logo from '../../assets/logo.jpeg'
import { MdOutlineMail } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { MdOutlineLocationOff } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import './Contact.css'
import Form from './Form';
import Footer from '../../Component/Footer';



const Contact = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="card text-bg-dark container-fluid">
            <img src={logo} className="card-img" alt="..."/>
            <div className="card-img-overlay">
                <h5 className="card-title text-center mt-4 ">Contact Us </h5>
                <p className="card-text text-center "><span onClick={() => navigate('/')}>Home</span> <span className='text-success mx-3 fw-bold'>/ Contact</span></p>
                
            </div>
        </div>
        {/* end */}
        <div className="container mt-5">
          <div>
            <div className="contact">
              <div className="shadow-lg text-center p-3">
              <MdOutlineMail className='fs-4 mb-3 text-success'/>
              <h6>Email Us</h6>
              <p className='lead'><a href="oakrisegml@gmail.com">oakrisegml@gmail.com</a></p>
              </div>
              <div className="shadow-lg text-center p-3">
              <MdAddCall className='fs-4 mb-3 text-success'/>
              <h6>Call Us</h6>
              <p className='lead'>08129026739</p>
              </div>
              <div className="shadow-lg text-center p-3">
              <MdOutlineLocationOff className='fs-4 mb-3 text-success'/>
              <h6>Kwara State, Nigeria.</h6>
              <p >Darasimi Water Factory, Checking Point, Ilorin, Kwara State, Nigeria</p>
              </div>
              <div className="shadow-lg text-center p-3">
              <BsChatLeftText className='fs-4 mb-3 text-success'/>
              <h6>Live Chat</h6>
              <p className='lead'><a href=" https://wa.me/message/KUSPUVWUALOXH1">WhatsApp</a></p>
              </div>
            </div>
            {/* end */}
            <Form/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact