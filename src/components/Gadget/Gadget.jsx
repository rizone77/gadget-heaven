import React from "react";
import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const {id, image, name, brand, price, description, category } = gadget;
  return (
    
      <div className="card bg-purple-400 mb-9    shadow-xl   ">
        <figure className=" border  rounded-2xl">
          <img className="h-[220px] w-[390px] rounded-2xl  " src={image} alt={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p> $ {price}</p>
          <div className="card-actions">
            <Link  to={`/gadget/${id}`}>
            <button className=" bg-white text-purple-600 font-semibold py-2 px-6 rounded-full shadow hover:bg-blue-300 transition">
              View Details
            </button>
            </Link>
          </div>
        </div>
      </div>
    
  );
};

export default Gadget;
