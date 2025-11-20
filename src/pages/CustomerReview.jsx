import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Review from '../components/Review'

function CustomerReview() {
    const reviews =[
        {
            img:"src/assets/review1.png",
            name:"Shelly Russel",
            desc:"Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
        },
          {
            img:"src/assets/review2.jpg",
            name:"Lula Rolfson",
            desc:"Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
        },
          {
            img:"src/assets/review3.png",
            name:"Carol Huels",
            desc:"It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
        }
    ]
  return (
   
  <div className='py-10 h-full  bg-[#1B2316] w-full'>
      <SectionTitle title="Customer Reviews" />

      <div className='grid  grid-cols-1 md:grid-cols-3 gap-6 w-[90%] mx-auto mt-10'>
        {reviews.map((item, index) => (
          <Review key={index} reviews={item} />
        ))}
      </div>
   
    </div>
  )
}

export default CustomerReview
