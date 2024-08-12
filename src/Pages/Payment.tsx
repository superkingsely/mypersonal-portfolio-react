import StripeCheckout from "react-stripe-checkout"

const Payment = () => {
    const key='pk_test_51PlzYTP59iRq8yPxOMlu2lUmpqYTs7KO6YcjIME8T10tKpzvoyQ9gMtfsuxCDxRhImqHdFgzw3cdaBySweKdRUqG00GYMeFUGc'
    const ontoken=(token:any)=>{
        console.log(token)
    }

  return (
    <div className="main-content flex flex-col justify-center items-center min-h-[100vh] ">
       {/* <StripeCheckout
       token={ontoken}
       stripeKey={key}
       name="cj"
       /> */}
       <StripeCheckout
             token={ontoken}
            stripeKey={key}
       >
        
       </StripeCheckout>
        {/* <button className='bg-black text-white font-bold px-5 py-2'>Payment</button> */}

       
      
    </div>
  )
}

export default Payment