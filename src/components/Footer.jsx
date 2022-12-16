import React from 'react'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <div className="bg-black mt-[80px] text-white">
      <div className='flex sm:flex-row flex-col gap-8 sm:justify-between items-center w-full px-[16px] sm:px-[80px] py-[40px]'>
        <div className="flex flex-col items-start gap-4">
          <img src={logo} alt='logo' className='h-[100px] ' />
          <p>
            A new way to make the payments <br /> easy, reliable and secure.
          </p>
        </div>

        <div className="flex sm:flex-row flex-col sm:gap-40 gap-16">
          {footerLinks.map((footerLink, index) => {
            return (
              <div key={index} className='flex flex-col gap-4' >
                <h5>{footerLink.title}</h5>

                {footerLink.links.map((footer, index) => {
                  return (
                    <div key={index} className='flex flex-col gap-2' >
                      <a href={footer.link} className='font-light text-gray-300' >{footer.name}</a>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <hr className='sm:mx-[80px] mx-[16px]' />
      <div className="py-8 px-[16px] sm:px-[80px] flex sm:flex-row flex-col-reverse justify-between items-center gap-4">
        <p>
          Copyright &copy; 2021 HooBank. All Rights Reserved.
        </p>
        
        <div className="flex justify-end gap-4">
          {
            socialMedia.map(social => (
              <a href={social.link}>
                <img src={social.icon} alt='social media' />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Footer