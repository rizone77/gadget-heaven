import React, { useState } from "react";
import bannerImg from '../../../public/banner.jpg'
import { NavLink, useNavigate } from "react-router-dom";
import Gadget from "../Gadget/Gadget";

const Banner = () => {

  
  return (
     
    

     <div className="  ">
      <div className="relative bg-purple-600  rounded-b-xl  px-6 pt-16 pb-40 text-white text-center overflow-visible">
        <div className="max-w-3xl mx-auto">
           <h1 className="text-xl md:text-5xl font-bold mb-4">
             Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
           </h1>
           <p className="mb-6 text-lg">
             Explore the latest gadgets that will take your experience to the next level.
             From smart devices to the coolest accessories, we have it all!
           </p>
           <button  className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full shadow hover:bg-purple-100 transition">
             Shop Now
           </button>
         </div>
         
      </div>
       <div className=" px-[250px] -mt-36 transform ">
         
        <div className="bg-white rounded-3xl p-5 shadow-lg   ">
          <img
            src={bannerImg}
            alt="Tech Gadget"
            className="rounded-xl    "
          />
       
        </div>
       </div>
        
     </div>
     
      
          
      
  );
};

export default Banner;
