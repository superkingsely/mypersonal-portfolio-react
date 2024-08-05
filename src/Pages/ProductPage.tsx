import React from 'react'
import img from '../../src/assets/portfolio3.jpg'
const ProductPage = () => {
  return (
    <section>
        <div className="section-content min-h-[0vh] flex flex-wrap">
            <div className="left-prod grow shrink basis-[300px] mt-[10vh] p-[10px]">
                <img src={img} alt="" />
            </div>
            <div className="right-prod grow shrink basis-[300px] mt-[10vh] p-[10px]">
                <span className='text-2xl'>Denin suitlaptops</span>
                <p className='mt-[10px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, iure maxime itaque quia, doloribus inventore veniam explicabo quibusdam consequuntur vel ducimus? Minus dolore dignissimos iste quae quam quisquam reiciendis iusto?</p>
                <p>$ 20</p>
                {/* color & size */}
                <div className="flex items-center gap-[3px] ">
                    <span>Color</span>
                    <span className='p-[5px] bg-black rounded-[100%]'>.</span>
                    <span className='p-[5px] bg-blue-950  rounded-[100%]'>.</span>
                    <span className='p-[5px] bg-gray-500  rounded-[100%]  '>.</span>
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