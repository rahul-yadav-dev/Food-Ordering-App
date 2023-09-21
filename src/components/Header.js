import { logoUrl } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  return (
    <div className="header">
      <div id="logo-container">
        <img className="logo" src={logoUrl} />
      </div>
      <div>
        <h1>Sabji-Wali-Gaadi.Com</h1>
      </div>
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
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
