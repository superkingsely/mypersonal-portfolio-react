import { useEffect, useState } from "react"
import {loadStripe} from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/checkoutform/CheckoutForm";
const Payment = () => {
    // const key=process.env.React_PUBLISH_KEY
    const key='pk_test_51PlzYTP59iRq8yPxOMlu2lUmpqYTs7KO6YcjIME8T10tKpzvoyQ9gMtfsuxCDxRhImqHdFgzw3cdaBySweKdRUqG00GYMeFUGc'
    console.log(key)


    const [stripePromise,setStripePromise]=useState<any|null>(null)
    const[clientSecret,setClientSecret]=useState<any>('')

    useEffect(()=>{
      setStripePromise(loadStripe(key))
    },[])
    
    useEffect(()=>{
      fetch('http://localhost:5000/create-payment-intent',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({})
      }).then(async(r)=>{
        const{clientSecret}=await r.json()
        console.log('clientsec',clientSecret)
        setClientSecret(clientSecret)
      }).catch((e:any)=>{
        console.log('err',e.message)
      })
    },[])
    
    if(!clientSecret){
      return <div>Loading..</div>
    }
    
  return (
    <div className="main-content flex flex-col justify-center items-center min-h-[100vh] ">
       {/* <StripeCheckout
       token={ontoken}
       stripeKey={key}
       name="cj"
       /> */}
       {/* <StripeCheckout
             token={ontoken}
            // stripeKey={key}
       > */}
        {
          stripePromise && clientSecret && (

       <Elements stripe={stripePromise} options={{clientSecret}}>
          <CheckoutForm/>
       </Elements>
          )
        }
       
      
    </div>
  )
}

export default Payment