import React, { useContext, useState } from "react";
import FOOD_LOGO from "../images/food-order-icon.png";
import { Link } from "react-router-dom";
import useOnline from "../utills/useOnline";
import UserContext from "../utills/UserContext";

import Title from "./Title";
const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  return (
    <>
      <nav className="flex justify-between items-center shadow-md">
        <Title />

        <ul className="flex py-10">
          <li className="px-2 ">
            <Link to="/" className="px-3 py-2 rounded-md text-2xl font-medium">
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link
              to="/about"
              className=" text-2xl  px-3 py-2 rounded-md  font-medium"
            >
              About
            </Link>
          </li>
          <li className="px-2">
            {" "}
            <Link
              to="/contact"
              className=" px-3 py-2 rounded-md text-2xl font-medium"
            >
              Contact
            </Link>
          </li>

          <li className="px-2">
            <Link
              to="/cart"
              className=" px-3 py-2 rounded-md text-2xl font-medium"
            >
              Cart
            </Link>
          </li>
          {/* <li> {isOnline ? " ✅ " : " 🛑 "}</li> */}
        </ul>
        {isLogedIn ? (
          <div className="flex text-2xl">{user.name}</div>
        ) : (
          <div className="text-2xl"> Plese login!!!</div>
        )}
        {!isLogedIn ? (
          <button
            type="button"
            className="rounded-md my-7 p-4 text-gray font-medium text-2xl bg-slate-400 mr-8 text-center"
            onClick={() => {
              setIsLogedIn(true);
            }}
          >
            Sign In
          </button>
        ) : (
          <button
            type="button"
            className="rounded-md my-7 p-4 text-gray font-medium text-2xl bg-slate-400 mr-8 text-center"
            onClick={() => {
              setIsLogedIn(false);
            }}
          >
            Sign Out
          </button>
        )}
      </nav>
    </>
  );
};
export default Header;
