import React from 'react'
import {stats} from '../constants'

const Stats = () => {
  return (
    <div className="flex justify-between items-center px-[160px] mt-[40px]">
      {
        stats.map(stat => (
          <div className="flex gap-4 items-center">
            <h3 className='text-white'>{stat.value}</h3>
            <h5 className="text-gradient">{stat.title}</h5>
          </div>
        ))
      }
    </div>
  )
}

export default Stats