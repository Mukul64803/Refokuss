import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto p-5 flex gap-32'>
            <div>
                <h1 className='text-[11vw] font-semibold'>refokus.</h1>
                <div className='flex gap-10 text-sm text-zinc-500'>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                    <p>Impressum</p>
                    <p>Terms</p>
                </div>
            </div>
            <div className=' basis-1/2 mt-16 flex justify-between text-sm'>
                <div className=''>
                    <h1 className='text-zinc-500 mb-6'>Socials</h1>
                    {["Instagram", "Twitter(X?)", "LinkedIn"].map((elem,index)=><a className='block mt-2 text-zinc-600' href={elem} key={index}>{elem}</a>)}
                </div>
                <div className=' '>
                    <h1 className='text-zinc-500 mb-6'>Sitemap</h1>
                    {["Home", "Work", "Careers","Contact"].map((elem,index)=><a className='block mt-2 text-zinc-200' href={elem} key={index}>{elem}</a>)}
                </div>
                <div className='text-right mt-10 flex flex-col items-end'>
                    <p className='font-semibold'>Refokus is a pioneering digital <br /> agency drivenby design and <br /> empowered by technology.</p>
                    <img className='mt-5' src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer