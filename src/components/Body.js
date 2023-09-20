import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resList, setresList] = useState(restaurants);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurant = restaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setresList(filteredRestaurant);
          }}
        >
          top-rated-restaurant
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
