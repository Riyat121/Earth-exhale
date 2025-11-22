import React from 'react'
import polygon from "../assets/Polygon2.png";
import profile from "../assets/profile.png";
import plant2 from "../assets/plant2.png";
import rightarrow from "../assets/right-arrow.png"
import stars from "../assets/stars.png"
import SectionTitle from '../components/SectionTitle';

function HeroPage() {
  return (
    <>
      <style>{`
        .wavy-card {
          clip-path: path('M 60 0 Q 0 0, 0 60 L 0 420 Q 0 480, 60 480 L 260 480 Q 320 480, 320 420 L 320 60 Q 320 0, 260 0 Q 160 30, 60 0 Z');
        }
      `}</style>

    <div className='flex flex-col lg:flex-row w-full px-4 sm:px-6 lg:px-0'>
  {/* left part */}
  <div className='left w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12'>
    <div className='earthExhale'>
      <h1 className='leading-tight text-amber-50 font-inter font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[65px]'>
        Earth's Exhale
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-inter mt-3 sm:mt-4 max-w-full lg:max-w-[480px] leading-relaxed">
        "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
      </p>

      <div className='flex gap-3 sm:gap-4 mt-6 sm:mt-8'>
        <div className="h-9 sm:h-10 px-4 sm:px-5 rounded-2xl border-2 border-amber-50 text-white font-inter flex items-center justify-center text-sm sm:text-base cursor-pointer hover:bg-amber-50 hover:text-black transition-colors">
          Buy Now
        </div>

        <div className="rounded-full h-9 w-9 sm:h-10 sm:w-10 border-2 border-amber-50 flex items-center justify-center cursor-pointer hover:bg-amber-50 transition-colors">
          <img className="h-3 w-3 sm:h-4 sm:w-4" src={polygon} alt="" />
        </div>

        <p className="text-white font-indie text-sm sm:text-base mt-2">
          Live Demo...
        </p>
      </div>
    </div>

    <div className='h-auto min-h-[160px] sm:min-h-[180px] md:h-40 w-full max-w-[320px] sm:max-w-[360px] md:w-80 relative bg-white/5 border-2 border-white backdrop-blur-xl mt-12 sm:mt-20 md:mt-35 rounded-2xl mx-auto lg:mx-0 lg:ml-10'>
      <div className='flex gap-2 p-4 sm:p-6'>
        <img className='h-8 w-8 sm:h-10 sm:w-10 rounded-full' src={profile} alt="" />
        <p className='font-medium mt-1 font-inter text-white text-sm sm:text-base'>Ronnie Hamill</p>
      </div>
      <img className='h-2 absolute -mt-6 sm:-mt-8 left-16 sm:left-18' src={stars} alt="" />
      <div> 
        <p className='text-white font-inter text-xs sm:text-[11.5px] font-extralight px-4 sm:px-5 pb-4'>
          I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
        </p>
      </div>
    </div>
  </div>

  {/* right part */}
  <div className='right w-full lg:w-1/2 mt-8 lg:mt-0'>
    <div className='w-[90%] max-w-[360px] sm:max-w-[340px] md:max-w-[360px] lg:w-90 h-auto min-h-[480px] sm:min-h-[530px] wavy-card relative bg-white/5 mt-8 sm:mt-10 lg:mt-12 rounded-t-[40px] sm:rounded-t-[48px] mx-auto lg:ml-auto lg:mr-8 xl:mr-16 backdrop-blur-md pb-6'>
      <img className='h-56 sm:h-64 md:h-72 lg:h-76 w-full z-20 object-contain px-4' src={plant2} alt="plant2" />
      <p className='ml-8 sm:ml-12 md:ml-16 lg:ml-20 text-base sm:text-[18px] font-inter text-white'>Indoor plant</p>
      <div className='flex gap-3 sm:gap-4 ml-8 sm:ml-12 md:ml-16 lg:ml-20'>
        <h2 className='text-xl sm:text-2xl font-inter text-white'>Aglaonema plant</h2>
        <img className='h-3.5 sm:h-4 mt-2 sm:mt-2.5 w-3.5 sm:w-4' src={rightarrow} alt="rightarrow" />
      </div>
      <button className='h-10 rounded-2xl ml-8 sm:ml-12 md:ml-16 lg:ml-21 mt-3 w-28 sm:w-30 font-inter border-amber-50 text-white text-center border-2 p-1 text-sm sm:text-base cursor-pointer hover:bg-amber-50 hover:text-black transition-colors'>
        Buy Now
      </button>
      <div className='flex mt-4 ml-16 sm:ml-20 md:ml-24 lg:ml-30 gap-2'>
        <div className='w-4 sm:w-5 h-1 bg-amber-50 rounded-3xl'></div>
        <div className='h-1 w-1 bg-amber-50 rounded-full'></div>
        <div className='h-1 w-1 bg-amber-50 rounded-full'></div>
      </div>
    </div>
    <div className='w-full flex -ml-112  mt-18 lg:mt-24'>
      <SectionTitle title="Our Trendy plants"/>
    </div>
  </div>
  
</div>
    </>
  )
}

export default HeroPage