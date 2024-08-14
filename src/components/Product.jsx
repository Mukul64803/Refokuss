import React from 'react'
import Button from './Button'

function Product({val,count,mover}) {
  return (
    <div onMouseEnter={()=>{mover(count)}}  className='max-w-screen-xl h-[15rem] mx-auto mb-14'>
        <div className=' flex items-center justify-between'>
            <h1 className='text-5xl '>{val.title}</h1>
            <div className='w-1/4 mx-10 py-5'>
                <p className='mb-8 text-lg'>{val.description}</p>
                <div className='flex items-center gap-5'>
                    {val.live && <Button title={"Live Website"}/>}
                    {val.case && <Button title={"Case Study"} />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product