import React from 'react'
import { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar/Navbar'
import './Layout.css'
import { BiSolidArrowToTop } from "react-icons/bi";


const Layout = () => {
    const [backToTop, SetBackToTop] = useState(false)

    useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
           SetBackToTop(true)
        } else {
          SetBackToTop(false)
        }
      })
    },[])


  return (
    <div className='container'>
        <Navbar/>
        <div 
        className={backToTop === false ? "backToTop fs-5 d-none " : 'backToTop fs-5 d-block'}>
          <a href="#"><BiSolidArrowToTop className='text-success'/></a>
        </div>
    </div>
  )
}

export default Layout