import React from 'react'
import { bill, apple, google } from '../assets'

const Billing = () => {
  return (
    <div className="flex justify-between items-center px-[80px] py-[160px] text-white w-full gap-24">
      <img src={bill} alt="bill" className='w-[50%]' />
      <div className="flex flex-col w-[100%]">
        <h2>
          Easily control your billing & invoicing.
        </h2>
        <p className='w-[100%] py-6'>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className="flex items-center gap-4">
          <img src={apple} alt="apple" />
          <img src={google} alt="google" />

        </div>
      </div>
    </div>
  )
}

export default Billing