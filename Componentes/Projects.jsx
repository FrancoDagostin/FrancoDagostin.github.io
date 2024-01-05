import React, { useState } from 'react'

function Projects({img, title, content, link}) {
  const [datos, setDatos] = useState([]);

  
  

  return (
    <div className='projects'>
      <h1> PROJECTS</h1>
      <div className='project-content'>
        <img src={img} />
        <h3>{title}</h3>
        <p>
        {content}
        </p>
        <a href={link}><button className='project-button'>Link to Code</button></a>
      </div>
            
      
    </div>
  )
}

export default Projects