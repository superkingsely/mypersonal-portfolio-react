import React from 'react'
import '../Ring/ring.css'
const Ring = ({txt,nos}:any) => {
  return (
    <div className="ring-con">

    <div className="f-circle">
      <div className="s-circle">
        {nos}
      </div>
    </div>
    <div className='r-span'>{txt}</div>
  </div>
  )
}

export default Ring