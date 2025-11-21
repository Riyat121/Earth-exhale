import React from 'react'
import plant from "../assets/plant.png";
function Footer() {
  return (
  <div className='min-h-screen flex flex-col md:flex-row w-full bg-[#1B2316] px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12'>
  {/* Left Section */}
  <div className='w-full md:w-[40%] mb-8 md:mb-0'>
    <div className='flex items-center ml-4 sm:ml-8 md:ml-12 lg:ml-20'>
      <img className='h-12 w-12 sm:h-14 sm:w-14 md:h-15 md:w-15' src={plant} alt="" />
      <h2 className='font-bold text-2xl sm:text-3xl ml-2 text-white'>FloraVision.</h2>
    </div>
    <p className='mt-4 sm:mt-5 md:mt-3 font-medium text-sm sm:text-base text-white ml-4 sm:ml-8 md:ml-12 lg:ml-20 pr-4 sm:pr-8 md:pr-0 leading-relaxed'>
      "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
    </p>
    <div className='flex text-xl sm:text-2xl font-bold text-white ml-4 sm:ml-8 md:ml-12 lg:ml-20 gap-4 sm:gap-5 mt-8 sm:mt-10 md:mt-15'>
      <h2 className='cursor-pointer hover:text-amber-50 transition-colors'>FB</h2>
      <h2 className='cursor-pointer hover:text-amber-50 transition-colors'>TW</h2>
      <h2 className='cursor-pointer hover:text-amber-50 transition-colors'>LI</h2>
    </div>
  </div>

  {/* Middle Section - Quick Links */}
  <div className='w-full md:w-auto mb-8 md:mb-0 md:ml-12 lg:ml-20 ml-4 sm:ml-8'>
    <h2 className='text-white text-xl sm:text-2xl font-inter font-medium'>Quick Link's</h2>
    <ul className='text-white font-inter mt-4 sm:mt-5 underline'>
      <li className='mb-2 cursor-pointer hover:text-amber-50 transition-colors'>Home</li>
      <li className='mb-2 cursor-pointer hover:text-amber-50 transition-colors'>Type's Of plant's</li>
      <li className='mb-2 cursor-pointer hover:text-amber-50 transition-colors'>Contact</li>
      <li className='mb-2 cursor-pointer hover:text-amber-50 transition-colors'>Privacy</li>
    </ul>
  </div>

  {/* Right Section - Newsletter */}
  <div className='w-full md:w-auto md:ml-12 lg:ml-50 text-white ml-4 sm:ml-8'>
    <h2 className='text-xl sm:text-2xl font-inter font-medium'>For Every Update.</h2>

    <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:w-80 mt-4 sm:mt-6">
      <input
        type="text" 
        placeholder="Enter text" 
        className="h-10 w-full rounded-sm border-2 border-white bg-transparent 
                   placeholder:text-white text-white pl-3 pr-24 text-sm sm:text-base"
      />
      <button
        className="absolute font-inter right-1 top-1/2 -translate-y-1/2 
                   bg-white text-black px-3 sm:px-4 py-1 rounded-sm text-sm sm:text-base
                   hover:bg-amber-50 transition-colors"
      >
        Subscribe
      </button>
    </div>
    
    <h3 className='mt-12 sm:mt-16 md:mt-22 font-inter text-sm sm:text-base'>
      FloraVision © all right reserve
    </h3>
  </div>
</div>
  )
}

export default Footer
