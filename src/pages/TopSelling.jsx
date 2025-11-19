import React from 'react'
import SectionTitle from '../components/SectionTitle'
import TopSellingCard from '../components/TopSellingCard'
import plant2 from "../assets/plant2.png";
import rose from "../assets/rose.png"
import swiss from "../assets/swiss.png"
import cactus from "../assets/cactus.png"
import sanse from "../assets/sanse.png"
import agare from "../assets/agare.png"

function TopSelling() {
   const data =[
    {   img :plant2,
        name :"Aglaonema plant",
      description:"The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
       price:"300" 

    },
      { 
         img :rose,
         name :"Plantain Lilies",
      description:"Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
       price:"380" 

    },
      { img :cactus,
         name :"Cactus",
      description:"It is known for their ability to thrive in arid environments",
       price:"259" 

    },
      { img :swiss,
         name :"Swiss cheese Plant",
      description:"It is a popular tropical houseplant known for its distinctive, perforated leaves",
       price:"400" 

    },
      {  img :sanse,
        name :"Sansevieria plant",
      description:"It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
       price:"450" 

    },
      {
         img :agare,
          name :"Agave plant",
      description:"The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
       price:"359" 

    },
]
  return (
    <div className='bg-[#1B2316]  w-full'>
    <SectionTitle title="Our Top Selling Plants" />

  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-[90%] mx-auto '>
{data.map((item,index)=>(
    <TopSellingCard key={index} plant={item}/>
))}
  </div>
    </div>
  )
}

export default TopSelling
