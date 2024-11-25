import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
<footer className="text-center text-lg-start bg-body-tertiary text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="https://web.facebook.com/profile.php?id=61562793007086&_rdc=2&_rdr" className="me-4 text-reset">
      <FaFacebook />
      </a>
      <a href="#" className="me-4 text-reset">
      <FaXTwitter />
      </a>
      <a href="https://www.instagram.com/oakphin?igsh=bTB2aW5vN2RvOWx5" className="me-4 text-reset">
      <FaInstagramSquare />
      </a>
      <a href="https://wa.me/message/KUSPUVWUALOXH1" className="me-4 text-reset">
      <FaWhatsappSquare />
      </a>
    </div>
   
  </section>
 
  <section className="">
    <div className="container text-center text-md-start mt-5">
     
      <div className="row mt-3">
 
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-2">
            <i className="fas fa-gem me-3"></i>Oakpin
          </h6>
          <p>
            <b>Vision</b> <br />
          To become Africa’s leading creative and innovative digital infrastructure for sustainable economic, social, capital, and human development. 
          </p>
          <p>
            <b>Mission</b> <br />
             To improve and increase timely access to quality health, lifestyle, and wealth through digital innovations and interventions.</p>

        </div>
     
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
                SERVICES
          </h6>
          <p>
            <a href="#!" className="text-reset">AI Pharmacist</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Oak Ads</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Oakpin Product Hub</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Dorstep Delivery</a>
          </p>
        </div>
        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="/" className="text-reset">Home</a>
          </p>
          <p>
            <a href="/about" className="text-reset">About</a>
          </p>
          <p>
            <a href="/service" className="text-reset">Services</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Blog</a>
          </p>
        </div>
        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> Behind Darasimi Water Factory, Checking Point, Ilorin, Kwara State, Nigeria</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            oakrisegml@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i>08129026739</p>
        </div>
       
      </div>
       
    </div>
  </section>
  
  <div className="text-center p-4" >
    © 2024 Copyright: <b>Oakphin</b>
  </div>
  
</footer>

    </div>
  )
}

export default Footer