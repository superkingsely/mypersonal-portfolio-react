import React from 'react'
import './footer.css'
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
const Footer = () => {
  return (
    <footer>
        <div className="footer-content max-w-[1200px] mx-auto flex flex-wrap">
            {/* 1st-box */}
            <div className="grow shrink basis-[300px] p-[10px]">
                <span className='text-2xl font-bold'>SUPERKING</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus ab ducimus non perspiciatis voluptatibus minima temporibus et quaerat esse!</p>
                <div className="icons-f  flex ">
                    <div className="p-[5px] me-2 bg-blue-900 rounded-full">
                        <Facebook
                        sx={{color:'white'}}
                        />
                    </div>
                    <div className="p-[5px] bg-pink-900 rounded-full me-2">
                        <Instagram
                        sx={{color:'white'}}
                        />
                    </div>
                    <div className="p-[5px] bg-blue-500 rounded-full me-2">
                        <Twitter
                        sx={{color:'white'}}
                        />
                    </div>
                    <div className="p-[5px] bg-red-700 rounded-full me-2">
                        <Pinterest
                        sx={{color:'white'}}
                        />
                    </div>
                </div>
            </div>
            {/* 2nd */}
            <div className="grow shrink basis-[300px] p-[10px]">
                <span className='font-bold'>Useful Links</span>
                <div className='flex gap-[60px] mt-[10px]'>
                    <div className="">
                        <ul className='p-0'>
                            <li>Home</li>
                            <li>Man Fashion</li>
                            <li>Accessories</li>
                            <li>Order Tracking</li>
                            <li>Wishlist</li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className='p-0'>
                            <li>Home</li>
                            <li>Man Fashion</li>
                            <li>Accessories</li>
                            <li>Order Tracking</li>
                            <li>Wishlist</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grow shrink basis-[300px] p-[10px]">
                <span className=''>Contact</span>
                <div className='flex mt-[10px] '>
                    <Room/>
                    <p className='ms-[5px] ps-[10px] border-s-[3px]'>Meiran,Lagos</p>
                </div>
                <div className='flex mt-[2px] '>
                    <Phone/>
                    <p className='ms-[5px] ps-[10px] border-s-[3px]'>+2347081861810</p>
                </div>
                <div className='flex mt-[2px] '>
                    <MailOutline/>
                    <p className='ms-[5px] ps-[10px] border-s-[3px]'>superkingsely@gmail.com</p>
                </div>
                <div className="payment">#</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer