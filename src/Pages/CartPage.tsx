import React from 'react'

const CartPage = () => {
  return (
    <section>
        {/* object-fit */}
        <div className="section-content">
            <br />
            <span className='text-2xl '>Your Bag</span>
            <div className='flex justify-between mt-[20px]'>
                <button className='border-black border-[3px] px-[10px] py-[3px] font-bold'>CONTINUE SHOPPING</button>
                <div className='d-none  d-md-block  '>
                    <span>Shopping Bag(2)</span> <span>Your Wishlist(0)</span> 
                </div>
                <button className=' px-[10px] py-[3px] font-bold text-white bg-black'>CHECKOUT NOW</button>
            </div>
            <div className="flex flex-md-row flex-column   mt-[20px] align-items-center align-items-md-start">
                {/* product array */}
                <div className="flex-col w-[100%] ">
                    {/* grid2 wrap product*/}
                    <div className=" flex flex-column flex-md-row border align-items-center ">
                        {/* grid1 */}
                        <div className="flex  shrink  flex-md-grow-1 p-[10px] gap-[10px]">
                            <div className="w-[100px] h-[100px]">
                                <img className='w-[100%] h-[100%]' src="" alt="" />
                            </div>
                            <div className=" flex flex-col">
                                <span>Product:</span>
                                <span>Jesse thunder shoe</span>
                                <span className='p-[5px] bg-black rounded-[100%] w-[3px] h-[3px]'>.</span>
                                <span>Size:</span>
                                <span>37.5</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[20px] shrink  justify-center 
                        items-center 
                           
                        max-w-sm-[100%] 
                        max-w-md-[0%]
                        w-[50px]
                          ">
                            <div>
                                <button>-</button>
                                <span className='border rounded-lg p-[3px]'>1</span>
                                <button className=''>+</button>
                            </div>
                            <p>$ 30</p>
                        </div>
                    </div>

                    <div className="">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                </div>
                {/* summary */}
                <div className="p-[10px] border max-w-md-[300px] w-[300px] flex flex-column items-center   ">
                    <span>ORDER SUMMARY</span>
                    <div className="flex max-w-[300px] justify-between mt-[10px] w-[100%]">
                        <span>Subtotal</span>
                        <span>$80</span>
                    </div>
                    <div className="flex max-w-[300px] justify-between mt-[10px] w-[100%]">
                        <span>Subtotal</span>
                        <span>$80</span>
                    </div>
                    <div className="flex max-w-[300px] justify-between mt-[10px] w-[100%]">
                        <span>Subtotal</span>
                        <span>$80</span>
                    </div>
                    <div className="flex max-w-[300px] justify-between mt-[10px] w-[100%]">
                        <span>Total</span>
                        <span>$80</span>
                    </div>
                    <div>
                    <button className=' px-[10px] py-[3px] font-bold text-white bg-black mt-[10px] w-[100%]'>CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CartPage