import { PaymentElement } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
const CheckoutForm = () => {
    const [isprocessing,setIsprocessing]=useState<boolean>(false)
    const handlesubmit=async(e:any)=>{
        e.preventDefault()
    }
  return (
    <form onSubmit={(e)=>handlesubmit(e)}>
        <PaymentElement/>
        <div>
            <button 
            
            disabled={isprocessing}
            className={`border p-3 ${isprocessing?'bg-black':'bg-slate-500 cursor-default'}`}>Payment</button>
        </div>
    </form>
  )
}

export default CheckoutForm