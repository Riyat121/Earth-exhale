import React from 'react'
import stars from "../assets/stars.png"
function Review({reviews}) {
     const {img, name, desc} = reviews;
  return (
   
   <div className='h-auto min-h-[280px] w-full max-w-[360px] sm:max-w-[380px] md:w-90 
                border-amber-50 border-2 mx-auto sm:ml-8 md:ml-17 rounded-2xl p-4 sm:p-6'>
  <div className='flex items-center gap-3 mt-4 sm:mt-6 md:mt-10'>
    <img className='h-8 w-8 sm:h-10 sm:w-10 rounded-full flex-shrink-0' src={img} alt="" />
    <h2 className='text-lg sm:text-xl md:text-2xl text-white font-inter'>{name}</h2>
  </div>
  <img className='h-2.5 sm:h-3 ml-12 sm:ml-16 md:ml-28 mt-2' src={stars} alt="" />
  
  <div className='mt-6 sm:mt-8 md:mt-10'>
    <p className='text-white px-2 sm:px-3 md:px-4 font-inter text-xs sm:text-[13px] leading-relaxed'>
      {desc}
    </p>
  </div>
</div>
  )
}

export default Review
