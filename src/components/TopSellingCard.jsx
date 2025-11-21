import React from 'react'
import BagCard from "../components/BagCard"

function TopSellingCard({plant}) {
  const {img, name, description, price} = plant;
  
  return (
    <>
      <style jsx>{`
        .wavy-card {
          clip-path: path('M 60 0 Q 0 0, 0 60 L 0 390 Q 0 450, 60 450 L 320 450 Q 380 450, 380 390 L 380 60 Q 380 0, 320 0 Q 190 30, 60 0 Z');
        }
      `}</style>
      
   <div className='relative w-full max-w-[380px] mx-auto sm:mx-0'>
  <img 
    className='h-[220px] sm:h-[260px] md:h-[290px] absolute -top-8 sm:-top-10  left-1/2 sm:left-12 -translate-x-1/2 sm:translate-x-0   w-[250px] sm:w-[280px] md:w-[300px] z-20 object-contain' 
    src={img} 
    alt="" 
  />
  <div className='wavy-card h-[400px] sm:h-[430px] md:h-[450px] mx-4 sm:ml-6 relative w-[calc(100%-2rem)] sm:w-[340px] md:w-[380px]  bg-white/5'>
    <div className='px-4 sm:ml-8 p-2 pt-[200px] sm:pt-[220px] md:pt-[240px]'>
      <h2 className='ml-2 sm:ml-3 text-white font-inter text-xl sm:text-2xl'>{name}</h2>
      <p className='text-[12px] sm:text-[13px] pr-3 sm:pr-4 ml-2 sm:ml-3 font-inter text-white'>{description}</p>
      <div className='flex gap-4 sm:gap-17 mt-4 sm:mt-5 items-center'>
        <p className='text-xl sm:text-2xl text-white font-inter ml-2 sm:ml-3'>Rs.{price}/-</p>
        <BagCard />
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default TopSellingCard