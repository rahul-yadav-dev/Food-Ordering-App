import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantData from "../utils/useRestaurantData";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const Restaurant = () => {
  const { restId } = useParams();
  const restData = useRestaurantData(restId);
  const [showIndex, setShowIndex] = useState(0);

  if (!restData) return <Shimmer />;

  const restDetails = restData?.data?.cards[0]?.card?.card?.info;

  const categories =
    restData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center ">
      <h1 className=" font-bold my-6 text-2xl">{restDetails.name}</h1>
      <p className="font-bold">
        {restDetails.cuisines.join(", ")} - {restDetails.costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showCategory={index === showIndex}
          setShowIndex={() => {
            setShowIndex(showIndex === index ? null : index);
          }}
        />
      ))}
    </div>
  );
};

export default Restaurant;
