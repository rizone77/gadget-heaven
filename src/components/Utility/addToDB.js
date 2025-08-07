import { toast } from "react-toastify";

// Get cart list
const getStoredCartList = () => {
  const storedListStr = localStorage.getItem('cart-list');
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

// Add to cart list
const addToStoredCartList = (id) => {
  const storedList = getStoredCartList();
  if (!id) return;
  if (storedList.includes(id)) {
    console.log(id, 'already exists in the cart list');
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('cart-list', storedListStr);
    toast('This Gadget is added to your cart list')
  }

};

// Get wishlist
const getStoredWishList = () => {
  const storedWishListStr = localStorage.getItem('wish-list');
  if (storedWishListStr) {
    return JSON.parse(storedWishListStr);
  } else {
    return [];
  }
};

// Add to wishlist
const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();
  if (storedWishList.includes(id)) {
    console.log(id, 'already exists in the wish list');
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem('wish-list', storedWishListStr);
    toast('This Gadget is added to your Wish list')
  }
};

// ✅ Fix: Remove cart-list (not 'cart')
export const removeCartList = () => {
  localStorage.removeItem("cart-list");
};

export {
  addToStoredCartList,
  addToStoredWishList,
  getStoredCartList,
  getStoredWishList,
};
