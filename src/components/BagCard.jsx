import React from 'react'
import bag from "../assets/bag.png"
function BagCard() {
  return (
    <div className=' ml-5'>
      <div className='h-9 items-center w-10 rounded-[9px] border-2 border-white '>
        <img className='h-6 w-6 mt-1 ml-1.5' src={bag} alt="" />

      </div>
    </div>
  )
}

export default BagCard
