import reactLogo from "../assets/react.svg";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <NavLink to="/" className="logo">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </NavLink>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
