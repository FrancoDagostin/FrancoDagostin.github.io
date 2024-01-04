import React from 'react'
import { Link } from "react-router-dom"
import MenuIcon from './MenuIcon'


function Navbar({onClick}) {
  return (
    <nav className="navbar">
      <Link  className="logo" to='/'>
        <h1>My Portfolio</h1>  
      </Link>
      <ul className="menu">
        <li><Link className="menu-link" to='/' >About me</Link></li>
        <li><Link className="menu-link" to='/Projects'>Projects</Link></li>
        <li><Link className="menu-link" to='/Contact'>Contact</Link></li>
        <MenuIcon onClick={onClick}/>
      </ul>
    </nav>
  )
}

export default Navbar