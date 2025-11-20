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
      
      <div className='relative'>
        <img className='h-[290px] absolute -top-10 left-12 w-[300px] z-20 object-contain' src={img} alt="" />
        <div className='wavy-card h-[450px] ml-6 relative w-[380px] bg-white/5'>
          <div className='ml-8 p-2 pt-[240px]'>
            <h2 className='ml-3 text-white font-inter text-2xl'>{name}</h2>
            <p className='text-[13px] pr-4 ml-3 font-inter text-white'>{description}</p>
            <div className='flex gap-17 mt-5 items-center'>
              <p className='text-2xl text-white font-inter ml-3'>Rs.{price}/-</p>
              <BagCard />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopSellingCard