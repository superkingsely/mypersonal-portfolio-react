import React, { useState } from 'react'
import Productlist from '../Components/Productlist/Productlist'
import Newsletter from '../Components/Newsletter/Newsletter'
import { useLocation } from 'react-router-dom'

const ProductListPage = () => {
    const location=useLocation()
  const cat=location.pathname.split('/')[2]
  console.log(cat)
  const [filters,setFilters]=useState<any>({})
  const [sort,setSort]=useState<any>('newest')
//   functions
const handlefilter=(e:any)=>{
    const value=e.target.value;
    setFilters({
        ...filters,
        [e.target.name]:value
    })
}
const handlesort=(e:any)=>{
    setSort(e.target.value)
}
console.log(filters,sort)

  return (
   <section className=''>
        <div className="section-content min-h-[0vh]">
            <h1 className='my-[10px]'>{cat}</h1>
            <div className="filters flex justify-between">
                <div>
                    <span className='font-bold'>filter:</span>
                    <select 
                    onChange={(e)=>handlefilter(e)}
                    className='cursor-pointer ' name="color" id="">
                        <option disabled   value="">Color</option>
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="blue">blue</option>
                        <option value="white">white</option>
                        <option value="black">black</option>
                        <option >yellow</option>
                    </select>
                    <select 
                    onChange={(e)=>handlefilter(e)}
                    className='cursor-pointer ' name="size" id="">
                        <option disabled   value="">Size</option>
                        <option>xs</option>
                        <option>s</option>
                        <option>m</option>
                        <option>l</option>
                        <option>xl</option>
                    </select>
                </div>
                <div>
                    <span className='font-bold' >filter2:</span>
                    <select 
                    onChange={(e)=>handlesort(e)}
                    className='cursor-pointer ' name="" id="">
                        <option  value="newest">Newest</option>
                        <option value="asc">price(asc)</option>
                        <option value="desc">price(desc)</option>
                    </select>
                </div>
            </div>
            <Productlist
            cat={cat}
            filters={filters}
            sort={sort}
            />
        </div>
        <Newsletter/>
   </section>
  )
}

export default ProductListPage