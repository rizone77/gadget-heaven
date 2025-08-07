import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getStoredCartList, getStoredWishList, removeCartList } from "../Utility/addToDB"; 
import Gadget from "../Gadget/Gadget";

const DashBoard = () => {
  const [cartList, setCartList] = useState([]);
  const [wishList, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(true);
  const [showWishList, setShowWishList] = useState(false);
  const [sortedCartList, setSortedCartList] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const allGadgets = useLoaderData();

  useEffect(() => {
    const storedCartList = getStoredCartList();
    const storedCartListInt = storedCartList.map((id) => parseInt(id));
    const cartGadgetList = allGadgets.filter((gadget) =>
      storedCartListInt.includes(gadget.id)
    );
    setCartList(cartGadgetList);
    setSortedCartList(cartGadgetList);
    const cost = cartGadgetList.reduce((sum, item) => sum + parseFloat(item.price), 0);
    setTotalCost(cost);

    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    const wishGadgetList = allGadgets.filter((gadget) =>
      storedWishListInt.includes(gadget.id)
    );
    setWishlist(wishGadgetList);
  }, [allGadgets]);

  const handleSortByPrice = () => {
    const sorted = [...sortedCartList].sort((a, b) => a.price - b.price);
    setSortedCartList(sorted);
  };

  const handlePurchase = () => {
    setIsModalOpen(true);
    setCartList([]);
    setSortedCartList([]);
    setTotalCost(0);
    removeCartList() // clear local storage cart if needed
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/"); // Redirect to home page
  };

  return (
    <div>
      {/* === Banner Section === */}
      <div className="relative bg-purple-600 rounded-xl px-6 pt-16 pb-10 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-xl md:text-5xl font-bold mb-4">DashBoard</h1>
          <p className="mb-6 text-lg">
            Explore the latest gadgets that will take your experience to the next level. From smart
            devices to the coolest accessories, we have it all!
          </p>
          <div className="mb-4">
            <button
              onClick={() => {
                setShowCart(true);
                setShowWishList(false);
              }}
              className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full shadow hover:bg-purple-100 transition mr-4"
            >
              Show Cart
            </button>
            <button
              onClick={() => {
                setShowWishList(true);
                setShowCart(false);
              }}
              className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full shadow hover:bg-purple-100 transition"
            >
              Show Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* === Cart Section === */}
      {showCart && (
        <div className="max-w-5xl mx-auto my-10 px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">🛒 Cart Items</h2>
            <div className="text-right">
              <p className="text-lg font-semibold">
                Total Cost: <span className="text-green-600">${totalCost.toFixed(2)}</span>
              </p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleSortByPrice}
                  className="bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700 transition"
                >
                  Sort by Price
                </button>
                <button
                  onClick={handlePurchase}
                  disabled={totalCost === 0}
                  className={`px-4 py-1 rounded transition font-medium ${
                    totalCost === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
          {sortedCartList.length === 0 ? (
            <p className="text-gray-600">No items in cart.</p>
          ) : (
            sortedCartList.map((gadget) => <Gadget key={gadget.id} gadget={gadget} />)
          )}
        </div>
      )}

      {/* === Wishlist Section === */}
      {showWishList && (
        <div className="max-w-5xl mx-auto my-10 px-4">
          <h2 className="text-2xl font-bold mb-4">💖 Wishlist Items</h2>
          {wishList.length === 0 ? (
            <p className="text-gray-600">No items in wishlist.</p>
          ) : (
            wishList.map((gadget) => <Gadget key={gadget.id} gadget={gadget} />)
          )}
        </div>
      )}

      {/* === Modal === */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 shadow-xl text-center max-w-sm w-full">
            <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congratulations!</h2>
            <p className="mb-6 text-gray-700">Your purchase was successful. Thank you!</p>
            <button
              onClick={handleCloseModal}
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
