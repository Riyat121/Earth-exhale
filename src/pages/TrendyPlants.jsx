import React from 'react'
import TrendyCard from '../components/TrendyCard'
import plant1 from "../assets/Trendy1.png";
import plant2 from "../assets/Trendy2.png"
import SectionTitle from '../components/SectionTitle';
function TrendyPlants() {
  return (
    <div className='h-full mt-40  w-full '>
   <SectionTitle title ="Our Trendy plants"/>
    <div className="w-[90%]  ml-10 mt-20">
          <TrendyCard 
        title="For Your Desks Decorations"
  description="I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!"
  price={599}
  image={plant1}
   reverse = {true}
   />
    </div>

 <div className='w-[90%]  ml-10 mt-18'>
     <TrendyCard
    title="For Your Desks Decorations"
  description="The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming"
  price={399}
  image={plant2}
 
  />
 </div>
    </div>
  )
}

export default TrendyPlants
