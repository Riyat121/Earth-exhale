import React from 'react'
import SectionTitle from '../components/SectionTitle'
import rightarrow3 from "../assets/right-arrow3.png";
import rightarrow4 from "../assets/right-arrow4.png";
import plant2 from "../assets/plant2.png";
const BestO2 = () => {
  return (
<div className='h-full font-inter w-full bg-[#1B2316] pb-8 sm:pb-12 md:pb-16'>
  <div className='w-full flex justify-center md:justify-start md:ml-20 lg:ml-27 px-4'>
    <SectionTitle title="Our Best o2"/>
  </div>

  <div className='h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:h-100  relative overflow-visible  w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%]  border-2 mx-auto  mt-12 sm:mt-16 md:mt-20  rounded-2xl sm:rounded-3xl  flex flex-col md:flex-row    bg-white/5 border-amber-50 p-4 sm:p-6 md:p-8  mb-16 sm:mb-20 md:mb-24'>

    <div className='h-auto w-full md:w-280 flex justify-center md:block mb-40 sm:mb-48 md:mb-0'>
      <img className='h-80 sm:h-96 md:h-120 w-auto md:absolute md:-ml-8 md:w-120 md:-top-20 lg:-top-23 object-contain' 
           src={plant2} alt="plant2" />
    </div>

    <div className='mt-4 sm:mt-8 md:mt-18 text-white w-full md:max-w-2xl'>
      <h2 className='text-xl sm:text-2xl md:text-[28px] lg:text-[30px] font-inter font-bold leading-tight'>
        We Have Small And Best O2 Plants Collection's
      </h2>
      <p className='mt-3 sm:mt-4 text-sm sm:text-base md:text-[17px] lg:text-[18px] font-inter leading-relaxed'>
        Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
      </p>
      <p className='mt-3 sm:mt-4 text-sm sm:text-base md:text-[17px] lg:text-[18px] font-inter leading-relaxed'>
        Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
      </p>
      
      <div className='flex flex-wrap items-center gap-4 sm:gap-6 mt-6 sm:mt-8'>
        <button className="font-inter border h-9 px-4 sm:px-6 border-white rounded-lg hover:bg-white/10 transition-colors">
          Explore
        </button>
        
        <div className='flex items-center gap-4 sm:gap-6 md:gap-8 ml-auto md:ml-0'>
          <img className='h-4 w-5 cursor-pointer hover:opacity-70 transition-opacity' src={rightarrow3} alt="right arrow3" />
          <p className='text-base sm:text-lg md:text-[19px] font-inter font-bold text-white whitespace-nowrap'>
            01/<span className='text-xs sm:text-[13px] font-inter text-white'>04</span>
          </p>
          <img className='h-4 w-5 cursor-pointer hover:opacity-70 transition-opacity' src={rightarrow4} alt="right arrow4" />
        </div>
      </div>
    </div>
  </div>

  <div className='h-auto py-4 w-full flex items-center justify-center gap-2 mt-8'>
    <div className='h-2 w-6 rounded-4xl bg-white'></div>
    <div className='h-2 w-2 rounded-full bg-white'></div>
    <div className='h-2 w-2 rounded-full bg-white'></div>
  </div>
</div>
  )
}

export default BestO2