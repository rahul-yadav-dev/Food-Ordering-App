import { useState, useEffect } from "react";

const useRestaurantList = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

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

  return { resList, filteredResList, setFilteredResList };
};

export default useRestaurantList;
