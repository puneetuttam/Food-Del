import { assets } from "../../assets/assets";
import "./Navbar.css";
const Navbar = () => {
  return <div className="navbar">
    <img src={assets.logo} alt=""/>
    <ul className="navbar-menu">
      <li>Home</li>
      <li>Menu</li>
      <li>Mobile-app</li>
      <li>Contact Us</li>
    </ul>
    <div className="navbar-right">
      <img src={assets.search_icon} alt=""/>
      <div className="navbar-search-icon">
        <img src={assets.basket_icon} alt=""/>
        <div className="dot"></div>
      </div>
      <button>sign in</button>
    </div>
    
  </div>;
};

export default Navbar;
