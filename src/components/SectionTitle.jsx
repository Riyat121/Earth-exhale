import React from 'react'

function SectionTitle({title}) {
  return (
    <>
      <style jsx>{`
        .bracket-container {
          position: relative;
          display: inline-block;
        }

        .bracket-container::before {
          content: '';
          position: absolute;
          left: -30px;
          top: 90%;
          transform: translateY(-50%);
          width: 80px;
          height: 50px;
          border-left: 5px solid #FBD300 ;
          border-bottom: 5px solid #FBBF24;
          border-bottom-left-radius: 20px;
        }

        .bracket-container::after {
          content: '';
          position: absolute;
          right: -30px;
          top: 21%;
          transform: translateY(-50%);
          width: 70px;
          height: 60px;
          border-right: 5px solid #FBBF24;
          border-top: 5px solid #FBBF24;
          border-top-right-radius: 20px;
        }
      `}</style>

      <div className=' product-card-container  w-fit border-gradient font-inter text-5xl text-white font-semibold items-center ml-[35%] border-green-300 bracket-container'>
        {title}
      </div>
    </>
  )
}

export default SectionTitle