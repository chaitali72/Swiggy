import React, { useState } from "react";
import { IMG_CDN_URL } from "../utills/constant";
import { useParams } from "react-router-dom";
import { BiCheckboxSquare, BiCaretUpSquare } from "react-icons/bi";
import { addItem, removeItem } from "../utills/cartSlice";
import { useDispatch } from "react-redux";

const SingleMenuItem = ({
  id,
  name,
  price,
  description,
  cloudinaryImageId,
  avgRatingString,
  isVeg,
}) => {
  const [isAdd, setIsAdd] = useState(true);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  const removeItem = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <article
      className="flex  p-6 items-start space-x-10 border border-slate-400"
      id={id}
    >
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="single-food-image"
        className="w-30"
      />

      <div className="flex-auto">
        {isVeg ? (
          <BiCheckboxSquare className="text-green-700 text-2xl" />
        ) : (
          <BiCaretUpSquare className="text-red-700 text-2xl" />
        )}
        <h2 className="font-semibold text-slate-900  pr-20 text-3xl">{name}</h2>
        <dl className="mt-2 flex flex-wrap text-lg">
          <div>
            <dt className="sr-only">Rating</dt>
            <dd className="px-2.5 ring-1 ring-slate-200 rounded">
              {avgRatingString} Stars
            </dd>
          </div>

          <div>
            <dd className="flex items-center">₹ {price / 100}</dd>
          </div>

          <div className="flex-none w-full mt-2 font-normal">
            <dt className="sr-only">description</dt>
            <dd className="text-black-700 text-xl ">{description}</dd>
          </div>
        </dl>
        <button
          className="text-[#60b246] border text-md font-bold py-3 px-5 mt-5 bg-white hover:scale-x-105"
          onClick={() => {
            addFoodItem({ id, name, price });
          }}
        >
          ADD
        </button>
      </div>
    </article>
  );
};

export default SingleMenuItem;
