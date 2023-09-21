import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  console.log("Body rendered");
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [queryString, setQueryString] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.8660&lng=77.8905&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setResList(
      jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredResList(
      jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };

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
