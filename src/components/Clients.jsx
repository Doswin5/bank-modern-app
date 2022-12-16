import React from 'react'
import { clients } from '../constants'


const Clients = () => {
  return (
    <div id='clients' className='py-0 sm:py-[100px]'>
      <div className="grid grid-cols-2 sm:flex justify-between items-center px-[24px] gap-6 sm:px-[180px] mb-[40px] w-full">
        {
          clients.map(client => (
            <img src={client.logo} alt="client" className='h-[40px]' />
          ))
        }
      </div>
      
      <div className="flex sm:flex-row flex-col justify-between p-[16px] sm:p-[80px] text-white bg-gray-800 rounded-3xl mx-[24px] sm:mx-[80px] items-center">
        <div>
          <h2>Let’s try our service now!</h2>
          <p className='w-[100%] sm:w-[55%] my-4'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <button className='flex justify-start'>Get Started</button>
      </div>
    </div>
  )
}

export default Clients