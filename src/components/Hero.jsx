import React from 'react'
import { robot, discount } from '../assets'

const Hero = () => {
  return (
    <div id='home' className="flex justify-between items-center pt-[80px] w-full px-[16px] sm:pl-[80px]">
      <div className="flex flex-col text-white ">
        <div className="flex items-center gap-4">
          <img src={discount} alt="discount" className='w-[40px]'  />
          <span className="text-gray-500"><span className="text-white">20%</span> DISCOUNT FOR <span className="text-white">1 MONTH</span> ACCOUNT</span>

        </div>
        <h1 className='leading-tight text-[60px]'>
          The Next <span className="text-gradient">Generation</span> Payment Method
        </h1>
        <p className='mt-[24px] w-[64%]'>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
          We examine annual percentage rates, annual fees.
        </p>
      </div>
      <img src={robot} alt="robot" className='w-[50%] hidden sm:block' />
    </div>
  )
}

export default Hero