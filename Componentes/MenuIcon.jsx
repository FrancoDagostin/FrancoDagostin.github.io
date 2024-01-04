import React from 'react'

function MenuIcon({onClick}) {
  return (
    <button className='menu-icon' onClick={onClick}>
      <img src='https://cdn-icons-png.flaticon.com/512/660/660376.png'/>
    </button>
  )
}

export default MenuIcon