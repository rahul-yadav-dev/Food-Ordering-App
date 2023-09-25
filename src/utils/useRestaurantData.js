import { useState, useEffect } from "react";
import { restaurantApi } from "./constants";

const useRestaurantData = (restId) => {
  const [resData, setResData] = useState(null);
  useEffect(() => {
    getResData();
  }, []);

  const getResData = async () => {
    const data = await fetch(restaurantApi + restId);
    const jsonData = await data.json();
    setResData(jsonData);
  };
 
  return resData;
};

export default useRestaurantData;
