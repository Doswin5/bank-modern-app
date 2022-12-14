import React from 'react'
import { clients } from '../constants'


const Clients = () => {
  return (
    <div id='clients'>
      <div className="flex justify-between items-center px-[180px] my-[100px] w-full">
        {
          clients.map(client => (
            <img src={client.logo} alt="client" className='h-[40px]' />
          ))
        }
      </div>
      
      <div className="flex justify-between p-[80px] text-white bg-gray-800 rounded-3xl mx-[80px] items-center">
        <div>
          <h2>Let’s try our service now!</h2>
          <p className='w-[55%] mt-4'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default Clients