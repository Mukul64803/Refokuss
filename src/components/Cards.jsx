import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto flex py-16 mt-10 gap-1'>
            <Card wid={"basis-1/3"} start={false}/>
            <Card wid={"basis-2/3"} start={true} color="true" />
        </div>
    </div>
  )
}

export default Cards