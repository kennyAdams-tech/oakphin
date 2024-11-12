import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.jpeg'

const Navbar = () => {
    const [active, setActive] = useState('menu-item')
    const [activeIcon, setActiveIcon] = useState('toggle')

    const handleToggle = () => {
        activeIcon === 'toggle' ? setActiveIcon('toggle cancel') : setActiveIcon('toggle')
        
        active === 'menu-item' ? setActive('menu-item active') : setActive('menu-item')
    }

  return (
    <div className='nav bg-light p-2'>
        <div className="logo ">
            <img src={logo} alt="logo"/></div>
        <ul className={active}>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/service'>Services</NavLink></li>
            <li><NavLink to='/contact'>    Contact</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
        </ul>
        <div className={activeIcon} onClick={ handleToggle}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </div>
  )
}

export default Navbar