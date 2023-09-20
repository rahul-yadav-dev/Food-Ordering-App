import { logoUrl } from "../utils/constants";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
