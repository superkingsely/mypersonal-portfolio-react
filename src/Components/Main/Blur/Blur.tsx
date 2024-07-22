import React from 'react'
import '../Blur/blur.css'
const Blur = ({bg,top,left,right}:any) => {
  return (
    <div className="blur blur-con" style={{backgroundColor:`${bg}`,top:`${top}px`,left:`${left}px`,right:`${right}px`}}>

    </div>
  )
}

export default Blur