import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

import './navbar.css'

function Navbar() {
  

  return (
    <>
      <header className="navbar">
      <Link to="/" aria-label="Go to home page">
        <img src={logo} />
      </Link>
      <nav>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/catering">Catering</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
          
        </div>
      </nav>
    </header>
    </>
  )
}

export default Navbar
