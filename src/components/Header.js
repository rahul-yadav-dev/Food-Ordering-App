import { Link } from "react-router-dom";
import logo from "../../resources/logo.png";
import { useState, useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  const userData = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-200 sm:bg-green-400 shadow-md m-2">
      <div id="logo-container">
        <Link to="/">
          <img className="w-28 h-full" src={logo} />
        </Link>
      </div>
      <div className="nav-bar flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4"> {useOnlineStatus() ? "🟩" : "🟥"} </li>
          <li className="px-4">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About </Link>
          </li>
          <li className="px-4">
            <Link to="/grocerry"> Grocerry </Link>
          </li>
          <li className="px-4 ">
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li className="px-4 flex">
            <Link to="/cart">
              <AiOutlineShoppingCart className="text-lg mt-[2px]" />
            </Link>
            <div className="">{cartItems.length}</div>
          </li>
          <li className="px-4">
            <button
              className="login-btn"
              onClick={() => {
                loginButton === "login"
                  ? setLoginButton("logout")
                  : setLoginButton("login");
              }}
            >
              {loginButton}
            </button>
          </li>
          <li className="px-4">{userData.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
