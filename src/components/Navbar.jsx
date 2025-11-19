import React from 'react'
import plant from "../assets/plant.png"
import search from "../assets/search.png"
import bag from "../assets/bag.png"
function Navbar() {
  return (
    <div className='p-8 flex '>
      <img className='h-10 w-10 ' src={plant} alt="" />
      <h2 className='font-bold text-2xl text-amber-50'>FloraVision.</h2>
      <div className='items-center ml-90'>
        <ul className='flex font-(family-name:Indie_Flower) text-[#FFFFFF] justify-center gap-5 '>
            <li>Home</li>
            <li>Plants Type</li>
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
