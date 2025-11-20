import React from 'react'
import stars from "../assets/stars.png"
function Review({reviews}) {
     const {img, name, desc} = reviews;
  return (
   
    <div className='h-70 w-90 border-amber-50 border-2 ml-17  rounded-2xl'>
        <div className='h-10 gap-3 mt-10   w-full ml-12 rounded-full flex '>
          <img className=' h-10 w-10  rounded-full' src={img} alt="" />
           <h2 className='text-2xl text-white font-inter'>{name}</h2>
            </div>
            <img className='h-3 ml-28 ' src={stars} alt="" />
       

        <div className='mt-10'>
            <p className='text-white p-4 font-inter text-[13px]'>{desc}</p>
        </div>
      
    </div>
  )
}

export default Review
