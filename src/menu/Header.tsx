import reactLogo from "../assets/react.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/" className="logo">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
