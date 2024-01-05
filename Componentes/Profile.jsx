import React, { useState } from 'react'
import BackgroundEffect from './BackgroundEffect';
import PersonalInfo from './PersonalInfo';
import { Link } from "react-router-dom"


function Profile() {


  return (
    <div className='profile-grid'>
      
      <div className='container'>
        <img src='https://pbs.twimg.com/profile_images/1743350353624522752/8nCAP2Or_400x400.jpg' className='image'/>
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