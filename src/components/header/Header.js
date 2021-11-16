import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => (
  <header>
    <nav className="navbar">
        <Link className="navbarChild" to='/'>Home</Link>
        <Link className="navbarChild" to='/students'>Students</Link>
        <Link className="navbarChild" to='/contact-us'>Contact US</Link>
    </nav>
  </header>
)

export default Header
