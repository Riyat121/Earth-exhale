import React from "react";
import Navbar from "../components/Navbar";
import bgImg from "../assets/fa0765984e44f85e1a04562f820f1492949a1257.jpg";
import HeroPage from "./HeroPage";
import TrendyPlants from "./TrendyPlants";
import TopSelling from "./TopSelling";
import CustomerReview from "./CustomerReview";
import BestO2 from "./BestO2";
import Footer from "./Footer";

function ProductPage() {
  return (
 <>
   {/* <div className="min-h-screen w-full"> */}
 <div
      className="relative max-h-full  w-full bg-cover  bg-center"
      style={{
        backgroundImage: `url(${bgImg})`,
        height:"1900px"
      }}
    >
      
      <Navbar />
<HeroPage/>
<TrendyPlants/>
  
    </div>
    <TopSelling/>
  <CustomerReview/>
     <BestO2/>
  <Footer/>
   {/* </div> */}
 </>

  );
}

export default ProductPage;
