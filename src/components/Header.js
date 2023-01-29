import React, { useState } from "react";
import FOOD_LOGO from "../images/food-order-icon.png";
import { Link } from "react-router-dom";
import useOnline from "../utills/useOnline";

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <nav className="flex justify-between bg-gray-500 shadow-md">
      <ul className="flex py-10">
        <li className="px-2 ">
          <Link
            to="/"
            className=" bg-gray-900 text-white px-3 py-2 rounded-md text-2xl font-medium"
          >
            Home
          </Link>
        </li>
        <li className="px-2">
          <Link
            to="/about"
            className="text-gray-300 text-2xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium"
          >
            About
          </Link>
        </li>
        <li className="px-2">
          {" "}
          <Link
            to="/contact"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium"
          >
            Contact
          </Link>
        </li>

        <li className="px-2">
          <Link
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium"
          >
            Cart
          </Link>
        </li>
        {/* <li> {isOnline ? " ✅ " : " 🛑 "}</li> */}
      </ul>
      {!isLogedIn ? (
        <button
          type="button"
          className="rounded-md my-5 p-4 text-gray bg-white hover:text-gray font-medium text-2xl"
          onClick={() => {
            setIsLogedIn(true);
          }}
        >
          Sign In
        </button>
      ) : (
        <button
          type="button"
          className="rounded-md my-5 p-4 text-gray bg-white font-medium hover:text-gray text-2xl"
          onClick={() => {
            setIsLogedIn(false);
          }}
        >
          Sign Out
        </button>
      )}
    </nav>
  );
};
export default Header;
