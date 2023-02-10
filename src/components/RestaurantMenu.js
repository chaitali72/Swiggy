import React from "react";
import { IMG_CDN_URL } from "../utills/constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResturantMenu from "../utills/useResturantMenu";
import SingleMenuItem from "./SingleMenuItem";

const RestaurantMenu = () => {
  const { id } = useParams();
  // console.log(id);

  const restaurantMenu = useResturantMenu(id);

  // if (!restaurantMenu) return <Shimmer />;
  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex bg-slate-800 text-white py-10 px-20">
        {/* <h1>Restaurant id:{id}</h1> */}
        <img
          src={IMG_CDN_URL + restaurantMenu.cloudinaryImageId}
          alt="Menu-image"
          className="h-50"
        />
        <div className="px-20">
          <h2 className="text-2xl flex font-bold">{restaurantMenu.name}</h2>
          <h3 className="text-2xl">{restaurantMenu.cuisines}</h3>
          <h3 className="text-2xl">
            {restaurantMenu.area}, {restaurantMenu.city}
          </h3>
          <div className="text-2xl">
            <h3>{restaurantMenu?.costForTwo / 100} for two</h3>
            <h3>
              <span> {restaurantMenu?.avgRating} stars</span>
            </h3>
            <h3>{restaurantMenu?.totalRatingsString} </h3>
            <h3>{restaurantMenu?.sla?.slaString} Time</h3>
          </div>
        </div>
      </div>
      <div>
        <ul className="ml-10 mt-10">
          {Object.values(restaurantMenu?.menu?.items).map((item) => (
            <SingleMenuItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
