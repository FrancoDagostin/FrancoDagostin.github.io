import React, { useState } from 'react'
import Skills from './Skills'

function PersonalInfo() {
  const[show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show)
  };

  return (
    <section className='section'>
      <div className='introduction'>
        <h1>Hi there!</h1>
        <p className='parrafo'>
        Hola! I'm Franco, a passionate self-taught front-end developer hailing from the beautiful land of Argentina. My journey in the world of web development began with a keen interest in crafting digital experiences that not only look stunning but also function seamlessly.
        </p>
        <p className='parrafo'>
        What sets me apart is not just my technical skills but also my commitment to continual learning and improvement. As a self-motivated learner, I've honed my craft through hands-on projects and real-world challenges, building a solid foundation for creating responsive and user-friendly interfaces.
        </p>
       
        
        
      </div>
    </section>
  )
}

export default PersonalInfo