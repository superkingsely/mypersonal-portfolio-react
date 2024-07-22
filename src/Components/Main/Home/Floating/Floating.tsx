import React from 'react'
import '../Floating/floating.css'
const Floating = ({img,txt1,txt2}:any) => {
  return (
    <div className='float-con'>
        <div className='f-img'>

        <img src={img} alt="" />
        </div>
        <div>
            {txt1} <br />
            {txt2}
        </div>
    </div>
  )
}

export default Floating