import { Link } from "react-router-dom";
import { cdnUrl, restaurantApi } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <Link to={"/restaurants/" + resData.id}>
      <div className="res-card">
        <img className="res-image" src={cdnUrl + resData.cloudinaryImageId} />

        <h3>{resData.name}</h3>
        <h4>{resData.avgRating}</h4>
        <div className="lightWeight">
          {resData.cuisines.slice(0, 3).join(",")}
        </div>
        <div className="lightWeight">{resData.costForTwo}</div>
        <div className="lightWeight">{resData.sla.slaString}</div>
        {resData.sla.lastMileTravel ? (
          <h4 className="lightWeight">{resData.sla.lastMileTravel} kms</h4>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
};

export default RestaurantCard;
