import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from './Button';
import { motion } from 'framer-motion';

function Card({wid,start,color="false"}) {
  return (
    <motion.div whileHover={{backgroundColor: color==="true" && "#7443ff",paddingLeft: "25px"}} className={`${wid} h-[30rem] bg-zinc-800 rounded-xl p-5`}> 
        <div className='w-full h-full  flex flex-col justify-between'>
            <div className='w-full'>
                <div className='w-full flex justify-between items-center'>
                    <h1>Get in Touch</h1>
                    <IoIosArrowRoundForward />
                </div>
                <h1 className='mt-5 text-3xl'>Let's get to it, <br/> together.  </h1>
            </div>
            <div>
                {
                    start ===true ? (
                    <>
                        <h1 className='text-[6rem] font-semibold '>Start a Project</h1>
                        <Button title={"Contact"} />
                    </>
                    ) : <p className='text-sm text-zinc-500'>Explore what drives our team.</p>
                }
                
            </div>
        </div>
    </motion.div>
  )
}

export default Card