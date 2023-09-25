import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
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

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurant = resList.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setFilteredResList(filteredRestaurant);
          }}
        >
          top-rated-restaurant
        </button>
        <input
          type="text"
          className="search-input"
          placeholder="Search for a restaurant"
          value={queryString}
          onChange={(e) => {
            setQueryString(e.target.value);
          }}
        />

        <button
          className="search-button"
          onClick={() => {
            const filteredRestaurant = resList.filter((restaurant) =>
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

      <div className="res-container">
        {filteredResList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
