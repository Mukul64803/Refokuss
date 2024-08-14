import React from 'react'
import { motion } from 'framer-motion'

function Slider({val}) {
  return (
    <div className='min-w-[22%] flex justify-between items-center border border-zinc-600 px-8 py-5'>
          <img src={val.url}/>
          <h2 className='font-bold text-lg'>{val.number}</h2>
    </div>
  )
}

export default Slider