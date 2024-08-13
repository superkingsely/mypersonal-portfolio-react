import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
const CheckoutForm = () => {
    const [isprocessing,setIsprocessing]=useState<boolean>(false)
    const stripe=useStripe()
    const elements=useElements()
    const [message,setMessage]=useState<any>(null)
    // func
    const handlesubmit=async(e:any)=>{
        e.preventDefault()
        if(!stripe ||!elements){
            return
        }
        setIsprocessing(true)
        const {error,paymentIntent}:any=await stripe.confirmPayment({
            elements,
            confirmParams:{
                return_url:`${window.location.origin}/success`
            },
           
        })
        if(error){
            setMessage(error.message)
        }else if(paymentIntent&& paymentIntent.status==='succeeded'){
            setMessage(`payment status ${paymentIntent.status}`)
        }
        else{
            setMessage('hmmm un')
        }
        setIsprocessing(false)
    }
  return (
    <form onSubmit={(e)=>handlesubmit(e)}>
        <PaymentElement/>
        <div>
            <button 
            
            disabled={isprocessing}
            className={`border p-3 ${isprocessing?' bg-slate-500 cursor-default':'bg-black text-white'}`}>Payment</button>
        </div>
        {
            message&&<div className='text-red-400'>{message}</div>
        }
    </form>
  )
}

export default CheckoutForm