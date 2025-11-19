import React from 'react'
import SectionTitle from '../components/SectionTitle'
import rightarrow3 from "assets/right-arrow3.png";
import rightarrow4 from "assets/right-arrow4.png";
import plant2 from "assets/plant2.png";
const BestO2 = () => {
  return (
    <div className='h-full w-full bg-[#1B2316]'>
<SectionTitle title="Our Best o2"/>

<div className='h-100  relative overflow-visible w-[75%] border-2 mx-auto mt-20 rounded-3xl ml-40 flex bg-white/5 border-amber-50'>

<div className='h-full w-280'>
    <img className='h-120 absolute -ml-8 w-120 -top-23' src={plant2} alt="" />
</div>
<div className='mt-18 text-white'>

<h2 className='text-[30px]  font-bold'>We Have Small And Best O2 Plants Collection’s</h2>
<p className='mt-4 text-[18px] '>Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
<p className='mt-4 text-[18px] '>Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
<div className='flex'>
     <button className=" border mt-3 h-9 w-20 border-white rounded-lg">
          Explore
        </button>
        <img className='h-4 w-5 mt-5 ml-90' src={rightarrow3} alt="" />
        <p  className='text-[19px] mt-3 ml-8 font-bold text-white'>01/
            <span className='text-[13px]  text-white'>04</span>
        </p>
        <img className='h-4 ml-8 w-5 mt-5' src={rightarrow4} alt="" />
</div>

</div>
 


</div>

<div className='h-50 gap-2 full  flex items-center ml-[47%]'>
    <div className='h-2 w-6 rounded-4xl bg-white'></div>
    <div  className='h-2 w-2 rounded-full bg-white'></div>
    <div  className='h-2 w-2 rounded-full bg-white' ></div>
    
</div>

    </div>
  )
}

export default BestO2