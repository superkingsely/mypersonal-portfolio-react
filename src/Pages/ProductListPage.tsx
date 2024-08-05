import React from 'react'
import Productlist from '../Components/Productlist/Productlist'

const ProductListPage = () => {
  return (
   <section className=''>
        <div className="section-content min-h-[0vh]">
            <h1 className='my-[10px]'>Dresses</h1>
            <div className="filters flex justify-between">
                <div>
                    <span className='font-bold'>filter:</span>
                    <select className='cursor-pointer ' name="" id="">
                        <option disabled selected  value="">Color</option>
                        <option value="">red</option>
                        <option value="">green</option>
                        <option value="">blue</option>
                        <option value="">white</option>
                        <option value="">black</option>
                        <option value="">yellow</option>
                    </select>
                    <select className='cursor-pointer ' name="" id="">
                        <option disabled selected  value="">Size</option>
                        <option value="">xs</option>
                        <option value="">s</option>
                        <option value="">m</option>
                        <option value="">l</option>
                        <option value="">xl</option>
                    </select>
                </div>
                <div>
                    <span className='font-bold' >filter2:</span>
                    <select className='cursor-pointer ' name="" id="">
                        <option disabled selected  value="">Newest</option>
                        <option value="">price(asc)</option>
                        <option value="">price(desc)</option>
                    </select>
                </div>
            </div>
            <Productlist/>
        </div>
   </section>
  )
}

export default ProductListPage