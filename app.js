import React from "react";
import ReactDOM from "react-dom/client";
import { restaurants } from "./data";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div id="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=826&t=st=1695057773~exp=1695058373~hmac=2336cda01c1bf81ee39d48b275bc450f8eb6a1776046256a530c6ce2534f3bb3"
        />
      </div>
      <div>
        <h1>Sabji-Ki-Gaadi.Com</h1>
      </div>
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-image"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${resData.cloudinaryImageId}`}
      />

      <div className="rest-description">
        <h3>{resData.name}</h3>
        <h4>{resData.avgRating}</h4>
        <div className="lightWeight">
          {resData.cuisines.slice(0, 5).join(",")}
        </div>
        <div className="lightWeight">{resData.costForTwo}</div>
        <div className="lightWeight">{resData.sla.slaString}</div>
        {resData.sla.lastMileTravel ? (
          <h4 className="lightWeight">{resData.sla.lastMileTravel} kms</h4>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="top-bar">
        <div className="search-bar">
          <input
            className="search-text"
            type="text"
            placeholder="search for restaurant"
          />
        </div>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <ResCard resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

const AppContainer = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppContainer />);
