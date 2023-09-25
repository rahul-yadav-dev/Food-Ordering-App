import { Link } from "react-router-dom";
import { logoUrl } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  return (
    <div className="header">
      <div id="logo-container">
        <Link to="/">
          <img className="logo" src={logoUrl} />
        </Link>
      </div>
      <div>
        <h1>Sabji-Wali-Gaadi.Com</h1>
      </div>
      <div className="nav-bar">
        <ul>
          <li>{useOnlineStatus() ? "🟩" : "🟥"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/grocerry">Grocerry</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
