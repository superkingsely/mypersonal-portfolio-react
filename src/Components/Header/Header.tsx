import React from 'react'
import menu from './menu-line.png'
import close from './close-line.png'

const Header = ({navbar,handlemenuclick,navref,handlemenucancel}:any) => {
  return (
    <header 
    className='min-h-[10vh] text-white bg-black fixed right-0 left-0 z-50 top-0'
    >
        <div className="header-content max-w-[1200px]  mx-auto min-h-[10vh] flex items-end justify-between" >
            <a href="#home" className='text-white font-extrabold text-4xl no-underline'>Logo</a>

            <nav className='flex' ref={navref}>
            <span className=' desktop-menu mx-auto rounded-circle'  onClick={handlemenucancel}>
                <img  src={close} alt="" 
                className='bg-white w-[30px] h-[30px] rounded-circle my-2 cursor-pointer' 
                />
            </span>
                <ul className='list-style-none text-white flex space-x-4  m-0'>
                    {
                        navbar.slice(0,6).map((item:any)=>{
                            return(
                                <li className='' key={item.id}>
                                    <a className='text-white font-bold no-underline text-1xl
                                    cursor-pointer
                                    ' href={item.url}>{item.link}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <span className=' desktop-menu cursor-pointer' onClick={handlemenuclick}>
                <img src={menu} alt="" 
                className='bg-white'
                />
            </span>
        </div>
    </header>
  )
}

export default Header