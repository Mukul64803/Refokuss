import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

function Work() {

    const [images,setImages] = useState([
        {url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png" , top: "50%", left: "50%", isActive: false},
        {url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png" , top: "55%", left: "55%", isActive: false},
        {url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png" , top: "60%", left: "45%", isActive: false},
        {url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png" , top: "65%", left: "55%", isActive: false},
        {url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png" , top: "70%", left: "50%", isActive: false},

    ])

    const { scrollYProgress } = useScroll()

    useMotionValueEvent(scrollYProgress, "change", (scrl) => {
        function showNhide(arr){
            setImages((prev)=>{
                return prev.map((item,index)=>{
                    return arr.indexOf(index) === -1 
                    ?{...item, isActive:false}
                    :{...item, isActive:true}
                })
            })
        }
        switch (Math.floor(scrl*1000)) {
            case 10:
                showNhide([]);
                break;
            case 20:
                showNhide([0]);
                break;
            case 30:
                showNhide([0,1]);
                break;
            case 45:
                showNhide([0,1,2]);
                break;
            case 55:
                showNhide([0,1,2,3]);
                break;
            case 65:
                showNhide([0,1,2,3,4]);
                break;
        }
    })

    


  return (
    <div className='w-full'>
        <div className='relative max-w-screen-xl mx-auto text-center'>
            <h1 className=' text-[36vw] font-medium leading-none select-none'>work</h1>
            <h2 className='text-lg opacity-[55%] mt-5'>Web Design, Webflow Development, Creative Deployment</h2>
            <div className='absolute top-0 w-full h-full '>
                {images.map((elem,index)=> elem.isActive && (
                    <img key={index} className='absolute w-60 h-60 rounded-md -translate-x-[50%] -translate-y-[50%]' src={elem.url} style={{top: elem.top , left: elem.left}} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Work