import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { Slide } from '@mui/material'
import React, { useState } from 'react'

const Slider = () => {
    // state
    const [slideindex,setSlideindex]=useState(0)
    
    // func
    const handleclick=(arrow:any)=>{
        if(arrow==='left'){
            if(slideindex >=0 && slideindex <2){
                setSlideindex(slideindex=>slideindex+1)
            }else{setSlideindex(0)}
        }else{
            if(slideindex >0 && slideindex <=2){
                setSlideindex(slideindex=>slideindex-1)
            }else{setSlideindex(slideindex+2)}
        }
    }
  return (
    <section className='min-h-[100vh]   bg-blue-500 '>
        <div className="section-content relative max-w-[1200px] min-h-[100vh] mx-auto flex overflow-hidden  ">

            <div className="arrowslide w-[50px] h-[50px] rounded-full border flex items-center justify-center absolute top-[50%]  left-[10px]  bottom-[50%] cursor-pointer z-10 "
            onClick={()=>handleclick('left')}
            >
                <ArrowLeftOutlined/>
            </div>
            <div className="arrowslide w-[50px] h-[50px] rounded-full border flex items-center justify-center absolute top-[50%]  right-[10px]  bottom-[50%] cursor-pointer z-10   "
            onClick={()=>handleclick('right')}
            >
                <ArrowRightOutlined/>
            </div>
            {/* wrapper */}
            <div className={`
                wrapper h-[100vh] w-[300%] bg-white flex
                `}
                style={{transform:`translateX(${slideindex*-1200}px)`}}
                >
                    {/* slides */}
                <div className="slides bg-red-500  w-[100%] flex flex-wrap ">

                    <div className="left grow shrink basis-[300px] border ">

                    </div>
                    <div className="rigth grow shrink basis-[300px] border flex flex-col justify-center ">
                        <h1 className='text-[70px]'>SUMMER SALE</h1>
                        <p className="text-[20px] my-[50px]    ">Lorem ipsum dolor sit amet consectetur.afa safdas savas svasv assas vaa  fsvs sAvas</p>
                        <div>

                        <button className="p-[10px] text-[20px] border">SHOW NOW</button>
                        </div>
                    </div>
                </div>

                <div className="slides bg-green-500 w-[100%]">1</div>

                <div className="slides bg-yellow-500  w-[100%]">1</div>
            </div>
        </div>

    </section>
  )
}

export default Slider