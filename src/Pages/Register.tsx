import React from 'react'

const Register = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
        <div className="register max-w-[500px] w-[100%] border p-[20px]">
            <span className='text-xl font-thin '>Create Account</span>
            <form action="w-[100%]">
                <div className="flex w-[100%] gap-1 mt-[20px]">
                    <div className="form-group w-[100%]">
                        <input
                        placeholder='Name:'
                        type="text" className="form-control" />
                    </div>
                    <div className="form-group w-[100%]">
                        <input
                        placeholder='Last Name:'
                        type="text" className="form-control" />
                    </div>
                </div>
                <div className="flex w-[100%] gap-1 my-[20px]">
                    <div className="form-group w-[100%]">
                        <input
                        placeholder='Username:'
                        type="text" className="form-control" />
                    </div>
                    <div className="form-group w-[100%]">
                        <input
                        placeholder='Email:'
                         type="text" className="form-control" />
                    </div>
                </div>
                <div className="flex w-[100%] gap-1">
                    <div className="form-group w-[100%]">
                        <input
                        placeholder='Password:'
                        type="text" className="form-control" />
                    </div>
                    <div className="form-group w-[100%]">
                        <input
                        placeholder='Confirm Password:'
                        type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group mt-[20px]">
                    <input className='me-1' type="checkbox" name="" id="" />
                    <label htmlFor="">
                        Privacy Policy
                    </label>
                    <p className='text-gray-400'>Already have an account Login</p>
                </div>
                <div className='mt-[10px]'>
                    <button className='px-[40px] bg-teal-500 py-[5px] text-white font-bold'>Create</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Register