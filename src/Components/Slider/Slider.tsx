import React, { useState } from 'react'
import './slider.css'


const Slider = () => {
  const [slidecount,setSlidecount]=useState(0)
  // func
  const handleclick=(direction:string)=>{
    if(direction==='left'){
        if(slidecount>=0&&slidecount<2){
          setSlidecount(slidecount+1)
        }else{setSlidecount(0)}
    }else{
      if(slidecount>0&&slidecount<=2){
        setSlidecount(slidecount-1)
      }else{setSlidecount(+2)}
    }
  }
  return (
    <div className="slider">
      <div 
      style={{transform:`translateX(-${slidecount*100}vw)`}}
      className="slides">
        <div className="slide">
          <div className="left-box box">
            
          </div>
          <div className="right-box box">

          </div>
        </div>
        <div className="slide">2</div>
        <div className="slide">3</div>
      </div>
      <div 
      onClick={()=>handleclick('left')}
      className="arrow left">

      </div>
      <div 
      onClick={()=>handleclick('right')}
      className="arrow right">

      </div>
    </div>
  )
}

export default Slider