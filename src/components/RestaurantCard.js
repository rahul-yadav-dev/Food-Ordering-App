import { Link } from "react-router-dom";
import { cdnUrl, restaurantApi } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const data = useContext(UserContext);

  return (
    <Link to={"/restaurants/" + resData.id}>
      <div className=" rounded-lg m-4 p-4 w-[250px] bg-gray-300 hover:bg-blue-300 flex-shrink">
        <img
          className="res-image h-[250px] rounded-lg"
          src={cdnUrl + resData.cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{resData.name}</h3>
        <h4>{resData.avgRating}</h4>
        <div className="lightWeight">
          {resData.cuisines.slice(0, 3).join(",")}
        </div>
        <div className="lightWeight">{resData.costForTwo}</div>
        <div className="lightWeight">{resData.sla.slaString}</div>
        {resData.sla.lastMileTravel && (
          <h4 className="lightWeight">{resData.sla.lastMileTravel} kms</h4>
        )}
        {data.loggedInUser}
      </div>
    </Link>
  );
};

export const FreeDeliveryRestaurantComponent = () => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 rounded-lg bg-yellow-300 text-white">
          One+ Free delivery
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
