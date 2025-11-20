import React from 'react'
import BagCard from './BagCard'

function TrendyCard({ title,reverse, description, price, image,  }) {
  return (
    <div
      className={`bg-white/5 h-80 w-[80%] ml-36  backdrop-blur-md border border-white/30 
                  rounded-[40px] p-8 flex items-center justify-between gap-10
                  ${reverse ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* TEXT */}
      <div className="text-white  max-w-md">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-3">{description}</p>
        <p className="mt-4 font-bold text-lg">Rs. {price}/-</p>
       <div className='flex'>
         <button className="mt-4 px-6 py-2 border border-white rounded-lg">
          Explore
        </button>
        <BagCard />
       </div>
      </div>

      {/* IMAGE */}
      <img  src={image} className="h-100 w-110 mb-30" />
    </div>
  )
}

export default TrendyCard