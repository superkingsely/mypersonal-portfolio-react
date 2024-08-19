import React, { useEffect, useState } from 'react'
import img from '../../src/assets/portfolio3.jpg'
import { useLocation } from 'react-router-dom'
const ProductPage = () => {
    // use the id from the params to fillout this page info
    const location=useLocation()
    const id=location.pathname.split('/')[2]
    const [obj ,setObj]=useState<any>({})
    useEffect(()=>{
        const getObj=async()=>{
            const res=await fetch(`http://localhost:5000/api/offline-product/${id}`)
            const data=await res.json()
            setObj(data)
            console.log(res,'myobj',data)
        }
        getObj()
    },[])
    let colors:any=obj.color;
  return (
    <section>
        <div className="section-content min-h-[0vh] flex flex-wrap">
            <div className="left-prod grow shrink basis-[300px] mt-[10vh] p-[10px]">
                <img src={img} alt="" />
            </div>
            <div className="right-prod grow shrink basis-[300px] mt-[10vh] p-[10px]">
                <span className='text-2xl'>Denin suitlaptops</span>
                <p className='mt-[10px]'>{obj&&obj.description}</p>
                <p>$ 20</p>
                {/* color & size */}
                <div className="flex items-center gap-[3px] ">
                    <span>Color:</span>
                    {
                        /* <span className='p-[5px] bg-black rounded-[100%]'>.</span>
                        <span className='p-[5px] bg-blue-950  rounded-[100%]'>.</span>
                        <span className='p-[5px] bg-gray-500  rounded-[100%]  '>.</span> */}

                        {/* not working */}
                    {
                        
                        obj&&colors.map((color:any)=>{
                            return(
                                <span key={color} className={`p-[5px] bg-${color}-500 rounded-[100%]`}>.</span>
                                )
                                })
                                }

                                {/* <span key={obj.id} className={`p-[5px] bg-${obj.color[0]}-500 rounded-[100%]`}>.</span> */}
                    <span className='grow'></span>
                    <select className='cursor-pointer ' name="" id="">
                        <option disabled selected  value="">Size</option>
                        <option value="">xs</option>
                        <option value="">s</option>
                        <option value="">m</option>
                        <option value="">l</option>
                        <option value="">xl</option>
                    </select>
                </div>
                {/* amount */}
                <div className='font-bold mt-[10px] flex items-center gap-[5px]'>
                    <button>-</button>
                    <span className='border rounded-lg p-[3px]'>1</span>
                    <button className=''>+</button>
                    <span className='grow'></span>
                    <button className='border-[4px] border-green-500 px-[10px]'>ADD TO CART</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductPage