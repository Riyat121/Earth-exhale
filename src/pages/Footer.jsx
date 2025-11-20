import React from 'react'
import plant from "../assets/plant.png";
function Footer() {
  return (
    <div className='min-h-screen flex w-full bg-[#1B2316]'>
      <div className=' h-[70%] w-[40%]'>
<div className='flex ml-20'>
<img className='h-15 w-15' src={plant} alt="" />
<h2 className='font-bold text-3xl mt-3.5 text-white'>FloraVision.</h2>
</div>
<p className='mt-3 font-medium text-white ml-20'>"From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."</p>
<div className='flex text-2xl font-bold text-white ml-20 gap-5 mt-15'>
<h2>FB</h2>
<h2>TW</h2>
<h2>LI</h2>

</div>
      </div>


      <div className=' h-[70%]  ml-20'>
        <h2 className='text-white text-2xl font-inter font-medium'>Quick Link’s</h2>
        <ul className='text-white font-inter mt-5 underline '>
            <li className='mb-2'>Home</li>
            <li className='mb-2'>Type’s Of plant’s</li>
            <li className='mb-2'>Contact</li>
            <li className='mb-2'>Privacy</li>
        </ul>
      </div>
      <div className='h-[70%] ml-50  text-white'>
        <h2 className='text-2xl font-inter font-medium'>For Every Update.</h2>

   <div className="relative w-80 mt-6">
  <input
    type="text" placeholder="Enter text" className="h-10 w-full rounded-sm border-2 border-white bg-transparent placeholder:text-white text-white pl-3 pr-24"
  />
  <button
    className="absolute font-inter right-1 top-1/2 -translate-y-1/2 
               bg-white text-black px-4 py-1 rounded-sm"
  >
    Subscribe
  </button>
</div>
<h3 className='mt-22 font-inter'>FloraVision © all right reserve</h3>


      </div>
      
    

    </div>
  )
}

export default Footer
