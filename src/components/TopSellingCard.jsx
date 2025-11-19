import React from 'react'
import BagCard from "../components/BagCard"
function TopSellingCard({plant}) {
     const {img, name, description, price} = plant;
  return (
    <div className='min-h-0.5'>
      
      <div className='h-[530px] ml-6 border-amber-50 border-[0.1rem] shadow-black  rounded-3xl relative w-[380px] bg-white/5'>
      <img className='h-[350px] w-[350px]  ' src={img} alt="" />
     <div className='ml-8 p-2'>
         <h2 className='ml-3 text-white text-2xl '>{name}</h2>
      <p className='text-[15px] pr-4 ml-3 text-white'>{description}</p>
      <div className='flex gap-17 mt-5'>
        <p className='text-2xl text-white ml-3' >Rs.{price}/-</p>
       <BagCard />
      </div>
     </div>

      </div>
    </div>
  )
}

export default TopSellingCard
