import React from 'react'

const Login = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
        <div className="register max-w-[500px] w-[100%] border p-[20px]">
            <span className='text-xl font-thin '>Login</span>
            <form action="w-[100%]">
                <div className="flex flex-col w-[100%] gap-3 mt-[20px]">
                    <div className="form-group w-[100%]">
                        <input
                        placeholder='Username:'
                        type="text" className="form-control" />
                    </div>
                    <div className="form-group w-[100%]">
                        <input
                        placeholder='Password:'
                        type="text" className="form-control" />
                    </div>
                </div>
                
                <div className="form-group mt-[20px]">
                    
                    <p className='text-gray-400'>Sign up</p>
                </div>
                <div className='mt-[10px]'>
                    <button className='px-[40px] bg-teal-500 py-[5px] text-white font-bold'>Login</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Login