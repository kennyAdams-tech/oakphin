import React from 'react'
import { MdOutlineEmojiTransportation } from 'react-icons/md'
import { GiDeliveryDrone } from 'react-icons/gi'
import { GiWorld } from 'react-icons/gi'
import './Section1.css'


const Section1 = () => {
  return (
    <div className='container  mt-5 mb-5 section-1'>
        <div>
            <div className="icon fs-1 text-success"><MdOutlineEmojiTransportation/></div>
            <p>Logistics</p>
            <p className='lead'>We deliver goods quickly and effectively thanks to our sophisticated logistics system, getting products to consumers precisely within 15 minutes of their request.</p>
        </div>
        <div>
            <div className="icon fs-1 text-success"><GiDeliveryDrone/></div>
                <p>Live Monitoring</p>
                <p className='lead'>Our startup is fighting against expired and phony items, and we will collaborate with government agencies and business leaders to combat these tactics. Our artificial intelligence testing method makes it simple to identify phony, expired, and counterfeit goods.</p>
            </div>
        <div>
            <div className="icon fs-1 text-success"><GiWorld/></div>
                <p>Worldwide Service</p>
                <p className='lead'>Through our product and service offering, which spans both urban and rural areas, we are bridging the inefficient and impoverished supply chain gap in Africa.</p>
        </div>
    </div>
  )
}

export default Section1