import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredCartList, addToStoredWishList } from "../Utility/addToDB";

const GadgetDetail = () => {
  const { gadgetId } = useParams();
  const data = useLoaderData();
  const id = parseInt(gadgetId);

  const gadget = data.find((gadget) => gadget.id === id);
  const { image, name, brand, price, description, category } = gadget;

  const handleAddToCart = (id) => {
    addToStoredCartList(id);
  };

  const handleAddToWishlist = (id) => {
    addToStoredWishList(id);
  };

  return (
    <div>
      <div className="relative bg-purple-600 rounded-b-xl px-6 py-10 pt-16    text-white text-center overflow-visible">
        <div className="relative bg-purple-600   rounded-xl  px-6 pt-16 mb-10 pb-10 text-white text-center ">
        <div className="max-w-3xl mx-auto ">
          <h1 className="text-lg md:text-5xl font-normal mb-4 -mt-24">DashBoard</h1>
          <p className="mb-6 text-lg">
            Explore the latest gadgets that will take your experience to the next level. From smart
            devices to the coolest accessories, we have it all!
          </p>
         
        </div>
      </div>
      </div>
      <div className="max-w-3xl mx-auto py-24   bg-purple-300 rounded-3xl shadow-xl p-6 flex flex-col md:flex-row items-center  -mt-20 transform ">
      
      {/* Image Section */}
      <div className="md:w-1/2 mr-10">
        <img
          src={`/${image}`}
          alt={name}
          className="w-96 h-full rounded-2xl object-cover"
        />
      </div>

      {/* Details Section */}
      <div className="md:w-1/2 ">
        <h3 className="text-3xl font-bold text-purple-700 mb-2">{name}</h3>
        <h4 className="text-xl font-semibold mb-3 text-green-700">Price: ${price}</h4>
        <p className="text-sm font-medium bg-green-100 text-green-600 px-3 py-1 inline-block rounded-xl mb-4">
          In Stock
        </p>
        <p className="mb-2 text-gray-700"><strong>Brand:</strong> {brand}</p>
        <p className="mb-2 text-gray-700"><strong>Category:</strong> {category}</p>
        <p className="mb-4 text-gray-600">{description}</p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => handleAddToCart(gadgetId)}
            className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-full shadow hover:bg-purple-700 transition"
          >
            Add To Cart
          </button>
          <button
            onClick={() => handleAddToWishlist(gadgetId)}
            className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733C11.285 4.876 9.623 3.75 7.687 3.75 5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GadgetDetail;
