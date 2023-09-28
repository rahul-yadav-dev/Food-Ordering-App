import { Link } from "react-router-dom";
import { logoUrl } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  return (
    <div className="flex justify-between bg-pink-200 sm:bg-yellow-200 shadow-md m-2">
      <div id="logo-container">
        <Link to="/">
          <img className="w-28 h-full" src={logoUrl} />{" "}
        </Link>{" "}
      </div>{" "}
      <div className="nav-bar flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4"> {useOnlineStatus() ? "🟩" : "🟥"} </li>{" "}
          <li className="px-4">
            <Link to="/"> Home </Link>{" "}
          </li>{" "}
          <li className="px-4">
            <Link to="/about"> About </Link>{" "}
          </li>{" "}
          <li className="px-4">
            <Link to="/grocerry"> Grocerry </Link>{" "}
          </li>{" "}
          <li className="px-4">
            <Link to="/contact"> Contact Us </Link>{" "}
          </li>{" "}
          <li className="px-4"> Cart </li>{" "}
          <button
            className="login-btn"
            onClick={() => {
              loginButton === "login"
                ? setLoginButton("logout")
                : setLoginButton("login");
            }}
          >
            {" "}
            {loginButton}{" "}
          </button>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
};

export default Header;
