import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleMenuItem from "./SingleMenuItem";
import { clearCart } from "../utills/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart);
  };
  return (
    <div>
      <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>
      <div className="flex">
        {cartItems.map((item) => (
          <SingleMenuItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
