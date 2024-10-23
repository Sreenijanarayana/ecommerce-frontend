import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../Redux/Customers/Cart/Action";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  // Changed: Using destructuring to select total price details from Redux store
  const { 
    cartItems, 
    totalItem, 
    totalPrice, 
    discounte, 
    totalDiscountedPrice 
  } = useSelector(store => ({
    cartItems: store.cart.cartItems,
    totalItem: store.cart.totalItem,
    totalPrice: store.cart.totalPrice,
    discounte: store.cart.discounte,
    totalDiscountedPrice: store.cart.totalDiscountedPrice,
  }));

  useEffect(() => {
    dispatch(getCart(jwt));
  }, [jwt, dispatch]);

  return (
    <div>
      {cartItems.length > 0 ? (
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="lg:col-span-2 lg:px-5 bg-white">
            <div className="space-y-3">
              {cartItems.map((item) => (
                // Changed: Added a unique key prop to CartItem
                <CartItem key={item.id} item={item} showButton={true} />
              ))}
            </div>
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
              <hr />
              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black">
                  {/* Changed: Updated price display to use destructured values */}
                  <span>Price ({totalItem} item{totalItem !== 1 && "s"})</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-700">-₹{discounte}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-700">Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-green-700">₹{totalDiscountedPrice}</span>
                </div>
              </div>

              <Button
                onClick={() => navigate("/checkout?step=2")}
                variant="contained"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p> // Changed: Added message when the cart is empty
      )}
    </div>
  );
};

export default Cart;
