import React from 'react'
import { card } from '../assets'

const CardDeal = () => {
  return (
    <div className="flex justify-between items-center px-[80px] mb-[160px] text-white w-full gap-16">
      <div className="flex flex-col w-[50%]">
        <h2>
          Easily control your billing & invoicing.
        </h2>
        <p className='w-[80%] py-6'>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <button>Get Started</button>
      </div>
      <img src={card} alt="card" className='w-[50%]' />
    </div>
  )
}

export default CardDeal