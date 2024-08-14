import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto p-5 flex justify-between items-center border-b-[1px] border-zinc-800'>
        <div className='flex h-fit gap-14'>
        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        {["Home", "Work", "About", "News", "Careers"].map((elem,index)=>{
            return <div key={index} className='flex gap-1 items-center font-regular text-sm'>
                {index===1 && <span className='w-1 h-1 bg-green-500 rounded-full'></span>}
                <a href={elem}>{elem}</a>
            </div>
      })}
    </div>
    <Button/>
    </div>
  )
}

export default Navbar