import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantData from "../utils/useRestaurantData";

const Restaurant = () => {
  const { restId } = useParams();
  const restData = useRestaurantData(restId);

  if (!restData) return <Shimmer />;

  const restDetails = restData.data.cards[0].card.card.info;
  const recommendedMenuItems =
    restData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;

  return (
    <div>
      <h1>{restDetails.name}</h1>
      <ul>
        <li>Rating: {restDetails.avgRating}</li>
        <li>Cuisines: {restDetails.cuisines.join(", ")}</li>
        <li>{restDetails.costForTwoMessage}</li>
        <li>{restDetails.sla.lastMileTravel + " Kms Away"}</li>
        <li>
          Menu:
          <ul>
            {recommendedMenuItems.map((item) => {
              return <li key={item.card.info.id}>{item.card.info.name}</li>;
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
