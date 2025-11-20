import React from 'react'
import bag from "../assets/bag.png"

function BagCard() {
  return (
    <div >
      <div className="h-9 w-10 rounded-[9px] border-2 border-white flex items-center justify-center">
        <img className="h-6 w-6" src={bag} alt="bag" />
      </div>
    </div>
  )
}

export default BagCard
