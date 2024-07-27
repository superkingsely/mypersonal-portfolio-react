import React from 'react'
import Cells from '../Cells/Cells'
import Product from './product/Product'

const Productlist = () => {
  return (
    <section className='min-h-[0]'>
        <div className="section-content min-h-[0]">
            <div className="productlist max-w-[1200px] mx-auto">

            <Cells
            width={300}
            height={400}
            arrayLength={8}
            >
                <Product/>
            </Cells>
            </div>
        </div>
    </section>
  )
}

export default Productlist