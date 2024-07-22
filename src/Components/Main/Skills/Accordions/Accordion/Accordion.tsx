import React, { useState } from 'react'
import './accordion.css'
const Accordion = ({obj}:any) => {
    const [isOpen ,setIsOpen]=useState(false)
    // func
    const handleacc=()=>{
        setIsOpen(!isOpen)
    }
  return (
    
        <div className= {`acc-animate  ${isOpen?'clicked':''}`}>
            {/* Header */}
            <div 
            onClick={handleacc}
            className="acc-header">
                <span></span>
                <span>{obj.title}</span>
                <div>{isOpen?'-':'+'}</div>
            </div>
            
            {
                isOpen?(
                
            <div className="acc-body">
                { obj.list.map((item:any,index:number)=>{
                    return(
                        <div 
                        key={index}
                        className="listitem">
                            {item}
                        </div>
                    )
                })
                }
            </div>
                ):(
                    <></>
                )
            }
        </div>
               
  )
 
}

export default Accordion
