import React from 'react'
import plant from "../assets/plant.png"
import search from "../assets/search.png"
import bag from "../assets/bag.png"
import polygon from "../assets/Polygon1.png"
function Navbar() {
  return (
    <div className='p-8 flex '>
      <img className='h-10 w-10 ' src={plant} alt="" />
      <h2 className='font-black text-2xl font-inter mt-2  text-amber-50'>FloraVision.</h2>
      <div className='items-center ml-90'>
        <ul className='flex font-indie Flower text-[18px]

 text-[#FFFFFF] justify-center gap-8 '>
            <li >Home</li>
          <div className='flex gap-1'>
              <li>Plants Type</li>
            <img className='h-2 mt-2 ' src={polygon} alt="" />
          </div>
            <li>More</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className='flex ml-110 gap-6'>
        <img className='h-4 w-4 ' src={search} alt="" />
        <img  className='h-4 w-4 ' src={bag} alt="" />
        <div className="flex flex-col gap-1 ml-6">
  <div className="w-6 h-1 rounded-2xl  bg-white"></div>
  <div className="w-3 h-1 ml-3 rounded-2xl  bg-white"></div>
</div>

      </div>
    </div>
  )
}

export default Navbar
