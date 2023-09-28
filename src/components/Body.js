import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [queryString, setQueryString] = useState("");
  const { resList, filteredResList, setFilteredResList } = useRestaurantList();
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1>
        Seems like you are offline, Please check your internet connection and
        try again!!
      </h1>
    );

  return resList && resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex align-center justify-center">
        <button
          className="ml-2 px-4 py-2 bg-gray-100 m-4 rounded-lg hover:bg-red-300"
          onClick={() => {
            const filteredRestaurant = resList.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setFilteredResList(filteredRestaurant);
          }}
        >
          top-rated-restaurant
        </button>

        <div className="relative">
          
        </div>
        <input
          type="text "
          className="m-4 block border border-gray-300 rounded-lg p-4 w-[600px] focus:ring-blue-500 "
          placeholder="Find your restaurant"
          value={queryString}
          onChange={(e) => {
            setQueryString(e.target.value);
          }}
        />

        <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg hover:bg-orange-400"
          onClick={() => {
            const filteredRestaurant =
              resList &&
              resList.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(queryString.toLowerCase())
              );
            setFilteredResList(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredResList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
