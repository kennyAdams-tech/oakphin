import React from 'react'
import './Section3.css'
import img from '../../assets/bg2.jpg'
import { useNavigate } from 'react-router-dom'

const Section3 = () => {
  const navigate = useNavigate()
  return (
    <div className='section-3'>
        <div className="card text-center text-light">
        <img src={img} className="card-img" alt="..."/>
        <div className="card-img-overlay">
          <h5 className="card-title">100% Secure and Safe</h5>
          <p className="card-text lead">We deliver goods quickly and effectively thanks to our sophisticated logistics system, getting products to consumers precisely within 15 minutes of their request..</p>
          <button className='btn btn-success px-5' >Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Section3