import React from 'react'
import { motion } from 'framer-motion'

function Marquee({val,direction}) {
  return (
    <div className='flex w-full overflow-hidden'>
      <motion.div initial={{x: direction==="left" ? "0": "-100%"}} animate={{x: direction==="left" ? "-100%": "0"}} transition={{ease: "linear", duration: 15,repeat: Infinity}} className='flex  gap-20 py-10 pr-20 flex-shrink-0'>
        {val.map((elem,index)=>{
          return <img className='w-32' key={index} src={elem.url}/>
        })}  
      </motion.div>
      <motion.div initial={{x: direction==="left" ? "0": "-100%"}} animate={{x: direction==="left" ? "-100%": "0"}} transition={{ease: "linear", duration: 15,repeat: Infinity}} className='flex  gap-20 py-10 pr-20 flex-shrink-0'>
        {val.map((elem,index)=>{
          return <img className='w-32' key={index} src={elem.url}/>
        })}  
      </motion.div>
    </div>
  )
}

export default Marquee