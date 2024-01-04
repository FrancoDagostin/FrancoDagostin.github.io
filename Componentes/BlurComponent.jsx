import React from 'react'

function BlurComponent({show}) {
  return (
    <div className='blur' style={{display: show ? 'inline-block' : 'none'}}>
      
    </div>
  )
}

export default BlurComponent