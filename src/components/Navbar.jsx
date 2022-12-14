import React from 'react'

import { logo } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
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
    </nav>
  )
}

export default Navbar