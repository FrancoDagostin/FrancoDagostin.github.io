import React, { useState } from 'react'

function Skills() {
  const [show , setShow] = useState(true);

  const handleShow = () => {
    setShow(!show)
  }

  return (
    
    <div className='skills-container'>
      <div className='skills'>
          <button className='arrow' onClick={handleShow}> Skills &#8594;</button>
        </div>
        
        {show || 
        <div className='links'>
          
          <img className='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png' />
          <img className='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'/>
          <img className='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'/>
          <img className='img' src='https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png'/>
        </div>
        }
        
    </div>
  )
}

export default Skills