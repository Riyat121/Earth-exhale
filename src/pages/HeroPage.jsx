import React from 'react'

function HeroPage() {
  return (
    <div className=' flex   w-full '>
     {/* left part */}
      <div className='left p-8 '>
    <div className='earthExhale h-50 w-110 '>
<h1 className='leading-[-1] text-amber-50 font-bold text-[65px]'>Earth's Exhale</h1>
<p className=' text-white leading-[-1]'>"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
<br />
<div className='flex  gap-3.5 '>
    <div className='h-10 rounded-2xl  w-30 border-amber-50 text-white text-center border-2 p-1 '>Buy Now</div>
    <div className='rounded-full h-10 w-10 border-2 border-amber-50 '>
        <img className='h-4 w-4 ml-3 text-white mt-3 items-center ' src="src\assets\Polygon 2.png" alt="" />
    </div>
    <p className='text-white mt-2'>Live Demo...</p>
</div>
    </div>

<div className='h-40  w-70  from-white/40 to-white/5 border-2 border-white backdrop-blur-xl  mt-35 rounded-2xl'>
    <div className='flex gap-2 p-6'>
        <img className='h-10 w-10 rounded-full' src="src\assets\profile.png" alt="" />
        <p className='font-medium mt-1 text-white'>Ronnie Hamill</p>

    </div>
    <div> 
        <p className='text-white p-2 text-[13.5px] leading-[0.9]'>I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
    </div>

</div>

      </div>

      {/* //right part */}
      <div className='right'>
        <div className='w-80 h-110 rounded-tl-4xl rounded-t-[48px] ml-[470px] border-2 border-amber-50  backdrop-blur-md  '>
<img src="src\assets\plant2.png" alt="" />
<p className='ml-2'>Indoor plant</p>
<div className='flex gap-4'>
    <h2 className='text-2xl text-white '>Aglaonema plant</h2>
    <img className='h-4 mt-2.5 w-4 ' src="src\assets\right-arrow.png" alt="" />

</div>
  <div className='h-10 rounded-2xl  w-30 border-amber-50 text-white text-center border-2 p-1 '>Buy Now</div>
  <div className='flex gap-2 ml-5'>
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
