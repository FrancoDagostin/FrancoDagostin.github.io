import React, { useState } from 'react'
import BackgroundEffect from './BackgroundEffect';
import PersonalInfo from './PersonalInfo';
import { Link } from "react-router-dom"


function Profile() {


  return (
    <div className='profile-grid'>
      
      <div className='container'>
        <img src='src/assets/yo1.png' className='image'/>
        <div className='info'>
          <h1>Franco D'Agostino</h1>
          <p>
            Argentinian self-taught front-end developer
          </p>
        <button className='button' >
         <Link to='/Projects' className='link'>Check my projects!</Link> 
       </button>
        </div>
      </div>
      
    </div>
  )
}

export default Profile