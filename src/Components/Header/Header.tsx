import { useState } from 'react';
import '../Header/Header.css'
import close from './close-line.png'
import open from './menu-line.png'
const Header = () => {
  const navItems = [
    {
      id: 1,
      innerText: "Home",
      url: "#home",
    },
    {
      id: 2,
      innerText: "Services",
      url: "#services",
    },
    {
      id: 3,
      innerText: "Experience",
      url: "#experience",
    },
    {
      id: 4,
      innerText: "Portfolio",
      url: "#portfolio",
    },
    {
      id: 5,
      innerText: "Testimonial",
      url: "#testimonial",
    },
  ];
  // state
  const[ismenuopen,setIsmenuopen]=useState(false)
  const handleMenuOpen=()=>{
    setIsmenuopen(true)
  }
  const handleMenuClose=()=>{
    setIsmenuopen(false)
  }

  return (
    <header>
      <div className="header-content">
        <a href="#home" className="logo">Logo</a>
        <nav 
        onClick={handleMenuClose}
        className={ismenuopen?'clicked':''}>
          
          <img
          src={close}
          alt=''
          onClick={handleMenuClose} 
          className='menu-close'/>
          <ul >
            {
              navItems.map((obj:any)=>{
               return(
                <li key={obj.id}>
                <a href={obj.url}>{obj.innerText}</a>
             </li>
               )
              })
            }
          </ul>
        </nav>
        < img
        alt=''
          src={open}
          onClick={handleMenuOpen} 
          className='menu-open'/>
      </div>
    </header>
  )
}

export default Header