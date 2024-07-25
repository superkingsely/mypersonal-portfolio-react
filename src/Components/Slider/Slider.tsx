import React, { useState } from 'react'
import './slider.css'
import {data} from '../../Data'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'

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
      style={{transform:`translateX(-${slidecount*100/3}%)`}}
      className="slides">

       {
        data.map((obj:any)=>{
          return(
            <div className={`
              slide ${obj.bg}
            `}>
            <div className="left-box box">
              <img src={obj.img} alt="" />
            </div>
            <div className="right-box box">
              <h1>{obj.title}</h1>
              <p className='my-[50px] text-[20px]'>{obj.desc}</p>
              <div className="">

              <button className='border px-[10px] py-[5px]'>SHOW NOW</button>
              </div>
            </div>
          </div>
          )
        })
       }
        
      </div>
      <div 
      onClick={()=>handleclick('left')}
      className="arrow left">
        <ArrowLeftOutlined/>
      </div>
      <div 
      onClick={()=>handleclick('right')}
      className="arrow right">
        <ArrowRightOutlined/>
      </div>
    </div>
  )
}

export default Slider