import React from 'react'
import BagCard from './BagCard'

function TrendyCard({ title,reverse, description, price, image,  }) {
  return (
   <div
  className={`bg-white/5 h-80   w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]  mx-auto sm:ml-8 md:ml-20 lg:ml-36 backdrop-blur-md border border-white/30  rounded-[30px] sm:rounded-[40px] p-4 sm:p-6 md:p-8 flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"}  items-center justify-between gap-6 sm:gap-8 md:gap-10`}
>
  <div className="text-white  w-full md:max-w-md text-center md:text-left">
    <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
    <p className="mt-2 sm:mt-3 text-sm sm:text-base">{description}</p>
    <p className="mt-3 sm:mt-4 font-bold text-base sm:text-lg">Rs. {price}/-</p>
    <div className='flex justify-center md:justify-start'>
      <div className='mt-3 sm:mt-4 flex gap-3'>
        <button className="px-4 sm:px-6 py-2 border border-white rounded-lg text-sm sm:text-base">
          Explore
        </button>
        <BagCard />
      </div>
    </div>
  </div>
<div className=''>
    <img src={image} className="h-20 sm:h-64   md:h-80 lg:h-100 mb-20 w-auto " />
</div>
</div>
  )
}

export default TrendyCard