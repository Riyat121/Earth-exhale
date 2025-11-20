import React from 'react'
import polygon from "../assets/Polygon2.png";
import profile from "../assets/profile.png";
import plant2 from "../assets/plant2.png";
import rightarrow from "../assets/right-arrow.png"
import stars from "../assets/stars.png"
function HeroPage() {
  return (
    <div className=' flex   w-full '>
     {/* left part */}
      <div className='left p-12 '>
    <div className='earthExhale h-50 w-120 '>
<h1 className='leading-[-1] text-amber-50 font-inter font-bold text-[65px]'>Earth's Exhale</h1>
<p className=' text-white font-inter w-full leading-[-1]'>"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
<br />
<div className='flex  gap-3.5 '>
    <div className='h-10 rounded-2xl  w-30 border-amber-50 text-white text-center border-2 font-inter p-1 '>Buy Now</div>
    <div className='rounded-full h-10 w-10 border-2 border-amber-50 '>
        <img className='h-4 w-4 ml-3 text-white mt-3 items-center ' src={polygon} alt="" />
    </div>
    <p className='text-white font-indie  mt-2'>Live Demo...</p>
</div>
    </div>

<div className='h-40 ml-14 w-70 relative bg-white/5 from-white/40 to-white/5 border-2 border-white backdrop-blur-xl  mt-35 rounded-2xl'>
    <div className='flex gap-2 p-6'>
        <img className='h-10 w-10 rounded-full' src={profile} alt="" />
        <p className='font-medium mt-1 font-inter text-white'>Ronnie Hamill</p>

    </div>
    <img className='h-2 absolute -mt-8 ml-18' src={stars} alt="" />
    <div> 
        <p className='text-white font-inter text-[11.5px] font-extralight  px-5 '>I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
    </div>

</div>

      </div>

      {/* //right part */}
      <div className='right  '>
        <div className='w-80 h-120 rounded-4xl      bg-white/5  rounded-t-[48px] ml-[500px] border-2 border-amber-50  backdrop-blur-md  '>
<img className='  ' src={plant2} alt="" />
<p className='ml-10 text-[18px] font-inter text-white'>Indoor plant</p>
<div className='flex  gap-4'>
    <h2 className='text-2xl ml-10 font-inter text-white '>Aglaonema plant</h2>
    <img className='h-4 mt-2.5 w-4 ' src={rightarrow} alt="" />

</div>
  <div className='h-10 rounded-2xl ml-10 mt-3 w-30 font-inter border-amber-50 text-white text-center border-2 p-1 '>Buy Now</div>
  <div className='flex mt-4 ml-20 gap-2 '>
    <div className='w-5 h-1 bg-amber-50 rounded-3xl '></div>
    <div className='h-1 w-1 bg-amber-50  rounded-full'></div>
    <div className='h-1 w-1 bg-amber-50  rounded-full'></div>

  </div>
<div>

</div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage
