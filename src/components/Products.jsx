import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Products() {
    let products_details = [
        {title: "Arqitel", description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true, case: false },
        {title: "Cula", description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live: true, case: false },
        {title: "Layout Land", description: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.", live: true, case: false },
        {title: "TTR", description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live: true, case: false },
        {title: "Maniv", description: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live: true, case: false },
        {title: "Like Magic", description: "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.", live: true, case: true },
        {title: "Silvr", description: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.", live: true, case: false },
        {title: "Jungle", description: "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.", live: true, case: true },
        {title: "Yahoo!", description: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.", live: true, case: true },
        {title: "YIR 2022", description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.", live: true, case: false },
    ]

    const [pos,setpos] = useState(0);

    const mover = (val)=>{
      setpos(val*18);
    }

  return (
    <div className='mt-36 relative'>
        {products_details.map((elem,index)=>(
            <Product val={elem} key={index} count={index} mover={mover} />
        ))}
        <div className='absolute top-0 w-full h-full pointer-events-none'>
          <motion.div initial={{y: 0,x: "-45%"}} animate={{y: pos + `rem`}} transition={{ease: [0.25, 1, 0.5, 1],duration: 0.6}} className='absolute w-[23rem] h-[18rem] bg-sky-200 left-[45%] rounded-md overflow-hidden'>
            <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.25, 1, 0.5, 1],duration: 0.5}} className='w-full h-full bg-green-200'>
            
            </motion.div>
            <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.25, 1, 0.5, 1],duration: 0.5}} className='w-full h-full bg-green-300'></motion.div>
            <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.25, 1, 0.5, 1],duration: 0.5}} className='w-full h-full bg-green-400'></motion.div>
            <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.25, 1, 0.5, 1],duration: 0.5}} className='w-full h-full bg-green-500'></motion.div>
            <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.25, 1, 0.5, 1],duration: 0.5}} className='w-full h-full bg-green-600'></motion.div>
            <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.25, 1, 0.5, 1],duration: 0.5}} className='w-full h-full bg-green-700'></motion.div>
            <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.25, 1, 0.5, 1],duration: 0.5}} className='w-full h-full bg-green-800'></motion.div>
            <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.25, 1, 0.5, 1],duration: 0.5}} className='w-full h-full bg-green-900'></motion.div>
            <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.25, 1, 0.5, 1],duration: 0.5}} className='w-full h-full bg-green-200'></motion.div>
            <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.25, 1, 0.5, 1],duration: 0.5}} className='w-full h-full bg-green-300'></motion.div>
          </motion.div>
        </div>
    </div>
  )
}

export default Products