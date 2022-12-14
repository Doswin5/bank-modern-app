import React from 'react'
import { features } from '../constants'

const Business = () => {
  return (
    <div id='features' className="flex sm:flex-row flex-col justify-between items-center text-white px-[16px] sm:px-[80px] pt-[160px] gap-24">
      <div className="flex flex-col w-[100%]">
        <h2>
          You do the business, we’ll handle the money.
        </h2>
        <p className='w-[80%] py-6'>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <button>Get Started</button>
      </div>

      <div className="flex flex-col gap-4 w-[100%] items-end">
        {
          features.map(feature => (
            <div className="flex items-center gap-4">
              <div className="feature-icon flex justify-center items-center">
                <img src={feature.icon} alt="feature" />
              </div>
              <div className="flex flex-col gap-1 text-white">
                <p className='font-semibold'>{feature.title}</p>
                <h6 className='text-gray-500 w-[100%]'>{feature.content}</h6>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Business