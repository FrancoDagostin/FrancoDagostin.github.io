import React, { useState } from 'react'
import Profile from './Profile';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';

function Grid() {
  const[show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show)
  };

  return (
    <section className='grid'>
      <div>
        <Profile />
      </div>
      <div>
        <PersonalInfo />
        <Skills />
      </div>
      
    </section>
  )
}

export default Grid