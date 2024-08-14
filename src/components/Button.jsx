import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title = "Get Started"}) {
  return (
    <div className='w-36   bg-zinc-200 text-black font-medium px-3 py-2 rounded-full text-sm flex items-center justify-between'> 
        <span>{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button