import React from 'react'
import './Section4.css'
import img1 from '../../assets/img3.jpg'
import img2 from '../../assets/store.jpg'
import img3 from '../../assets/drug.jpg'
import { useNavigate } from 'react-router-dom'

const Section4 = () => {
  const navigate = useNavigate()
  return (
    <div className='container my-5'>
        <div className="card p-3 border-success">
            <div className="text-center text-success fw-bold mb-4">Explore stores around you with just a click 
Join us today, we meet your needs!
</div>
        Drug delivery and more: order any range of original products from pharmacies to supermarkets to cosmetics stores around you – order it and receive it! <br />
        Rapid delivery: place your order from anywhere and receive it in 15 minutes – like a flash!
        E-prescription: send your list of drugs or medical prescriptions and enjoy amazing offers and fast delivery 

        </div>

        <div className="row mt-4">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
    <img src={img2} className="card-img-top" alt="..." width='300'/>
      <div className="card-body">
        <h5 className="card-title">Shopper</h5>
        <p className="card-text">As a shopper: shop with style, save time and cost, and earn on every order; relax and get your orders in 15 minutes.</p>
        <a href="#" onClick={()=> navigate('/contact')} className="btn btn-success">Register here...</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
    <img src={img1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Vendor</h5>
        <p className="card-text">As a vendor: grow and expand your business; reach more; boost sales and revenue; reduce the overhead cost of operation with our unmatched technology innovation.</p>
        <a href="#" onClick={()=> navigate('/contact')} className="btn btn-success">Register here...</a>
      </div>
    </div>
  </div>
</div>

<div className="row mt-4">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
    <img src={img1} className="card-img-top" alt="..." width='300'/>
      <div className="card-body">
        <h5 className="card-title">Rider</h5>
        <p className="card-text">As a rider: become your boss; enjoy your freedom and increase earnings by delivering through Oakphin.</p>
        <a href="#" className="btn btn-success" onClick={()=> navigate('/contact')}>Register here...</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
    <img src={img3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Build a career</h5>
        <p className="card-text">Build a career: Are you ready to grow? Are you prepared to challenge yourself? Build a career with us, we love to hear from you.</p>
        <a href="#" onClick={()=> navigate('/contact')} className="btn btn-success">Register here...</a>
      </div>
    </div>
  </div>
</div>

        
    </div>
  )
}

export default Section4