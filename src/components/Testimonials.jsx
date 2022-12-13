import React from 'react'
import { feedback } from '../constants'
import { quotes } from '../assets'

const Testimonials = () => {
  return (
    <div className="flex flex-col text-white px-[80px]">
      <div className="flex justify-between items-center gap-x-40">
        <h2>
          What people are saying about us
        </h2>
        <p>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>

      <div className="flex justify-between gap-16 mt-16">
        {
          feedback.map(item => (
            <div className="flex flex-col justify-between w-full gap-4">
              <img src={quotes} alt="quote" className='w-[40px]' />
              <p>
                {item.content}
              </p>
              <div className="flex gap-4 items-center">
                <img src={item.img} alt="" />
                <div className="flex flex-col gap-1">
                  <h5>{item.name}</h5>
                  <h6>{item.title}</h6>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Testimonials