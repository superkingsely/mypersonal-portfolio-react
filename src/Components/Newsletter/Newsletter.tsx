import { Send } from '@mui/icons-material'
import React from 'react'

const Newsletter = () => {
  return (
    <section className='min-h-[0]'>
        <div className="section-content min-h-[40vh] flex justify-center bg-orange-50 items-center">
            <div className="flex flex-col items-center w-[100%] px-[20px]">
                <span className='font-bold text-6xl'>Newletter</span>
                <p className='text-2xl py-[10px] text-center'>Get timely update from your favourite products</p>
                <div className="search-con flex bg-white max-w-[700px] w-[100%] mx-auto ">
                    <input className='outline-none px-[10px] py-[3px] grow ' type="text"
                    placeholder='Your email' />
                    <div className="px-[10px] bg-teal-500">
                        <Send
                        sx={{color:'white'}}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter