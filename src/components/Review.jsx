import React from 'react'

function Review({reviews}) {
     const {img, name, desc} = reviews;
  return (
   
    <div className='h-70 w-90 border-amber-50 border-2  rounded-2xl'>
        <div className='h-10 w-10 rounded-full flex '>
          <img className=' h-10 w-10  rounded-full' src={img} alt="" />
            {/* <div className='text-white flex text-[13px]'> */}
            {name}
            </div>
        {/* </div> */}

        <div className='mt-10'>
            <p className='text-white text-[13px]'>{desc}</p>
        </div>
      
    </div>
  )
}

export default Review
