import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import {data} from '../Data'
const Slider = () => {
    // state
    const [slideindex,setSlideindex]=useState(0)
   
   
    // func
    const handleclick=(arrow:any)=>{
        // 3=Arry.length-1
        if(arrow==='left'){
            if(slideindex >=0 && slideindex <data.length-1){
                setSlideindex(slideindex=>slideindex+1)
            }else{setSlideindex(0)}
        }else{
            if(slideindex >0 && slideindex <=data.length-1){
                setSlideindex(slideindex=>slideindex-1)
            }else{setSlideindex(slideindex+data.length-1)}
        }
    }
  return (
    <section className='min-h-[100vh]   bg-blue-500 '>
        {/* slider */}
        <div className="section-content relative max-w-[1200px] min-h-[100vh] mx-auto flex  overflow-hidden slder">

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
            {/* slides */}
            {/* wrapper */}
            <div className={`
                wrapper h-[100vh] w-[${data.length*100}%] bg-white flex
                `}
                style={{transform:`translateX(${(-100/data.length)*slideindex}%)`}}
                >
                    {/* slide */}
                {
                    data.map((obj:any)=>{
                        return(
                            <div
                            key={obj.id}
                             className={`
                                slides ${obj.bg}  w-[1200px] flex flex-wrap
                             `}>
                                {/* Left */}
                    <div className="left grow shrink basis-[300px] border bg-slate-300">

                    </div>
                    <div className="rigth grow shrink basis-[300px] border flex flex-col justify-center ">
                        <h1 className='text-[70px]'>{obj.title}</h1>
                        <p className="text-[20px] my-[50px]    ">{obj.desc}</p>
                        <div>

                        <button className="p-[10px] text-[20px] border">SHOW NOW</button>
                        </div>
                    </div>
                </div>
                        )
                    })
                }

                
            </div>
        </div>

    </section>
  )
}

export default Slider