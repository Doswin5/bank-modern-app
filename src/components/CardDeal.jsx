import React from 'react'
import { card } from '../assets'

const CardDeal = () => {
  return (
    <div className="flex sm:flex-row flex-col-reverse justify-between items-center px-[16px] sm:px-[80px] mb-[80px] text-white w-full gap-16">
      <div className="flex flex-col sm:w-[50%] w-[100%]">
        <h2>
          Find a better card deal in few easy steps.
        </h2>
        <p className='w-[100%] py-6'>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button>Get Started</button>
      </div>
      <img src={card} alt="card" className='w-[50%]' />
    </div>
  )
}

export default CardDeal