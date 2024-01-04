import React from 'react'
import { Link } from 'react-router-dom'

function SideBar({show, onClick}) {
  return (
    <div>
      <div className='side-bar'  style={{display: show ? 'flex' : 'none'}}>
      <ul>
        <li onClick={onClick}><Link className="side-menu-link" to='/' >About me</Link></li>
        <li onClick={onClick}><Link className="side-menu-link" to='/Projects'>Projects</Link></li>
        <li onClick={onClick}><Link className="side-menu-link" to='/Contact'>Contact</Link></li>
      </ul>
      </div>
    </div>
  )
}

export default SideBar