import React from 'react'
import './accordions.css'
import Accordion from './Accordion/Accordion'
const Accordions = ({skills}:any) => {
  return (
    <div className='acc-con'>
         {
                    skills.map((obj:any)=>{
                        return(
                            <Accordion
                            key={obj.id}
                            obj={obj}
                            />
                        )
                    })
                }
    </div>
  )
}

export default Accordions