import React, { useState } from 'react'

import { logo, menu, close } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="fixed bg-primary w-full flex py-6 justify-between items-center px-[16px] sm:px-[80px]">
      <img src={logo} alt="hoobank" className='w-[124px] h-[32px]'/>

      <ul className="list-none justify-end items-center sm:flex hidden">
        {navLinks.map((nav, index) => (
          <li 
            key={nav.id} 
            className={`font-poppins font-normal cursor-pointer text-white text-[16px] ml-16`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      
      <div className="flex flex-1 justify-end sm:hidden items-center" >
        <img 
          src= {toggle ? close : menu} 
          alt="menu"
          className='w-[24px] h-[24px] cursor-pointer object-cover'
          onClick={() => setToggle(prev => !prev)}       
        />
        <div
          className={`${toggle ? 'flex' : 'hidden'} justify-center pt-6 px-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[60px] rounded-xl sidebar`}
        >
          <ul 
          className="list-none items-center flex flex-col"
          >
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-white text-[16px] mb-6`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar