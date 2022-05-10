import React from 'react'
import '../assets/css/navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    const whilteLogo = require('../assets/images/MainLogoWhite.png')
  return (
    <div>
        <div className="navContainer">
            <div className="navbar">
                <Link to='/' className='navLogo'>
                <img src={whilteLogo} alt="brand Logo" className='navLogo' />
                </Link>
                <div className="navLinks">
                    <a href="/about" className="navLink" >ABOUT</a>
                    <a href="#" className="navLink">CONTACT</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar