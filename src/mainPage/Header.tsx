import styled from "styled-components";
import reactLogo from "../assets/react.svg";
import ToggleTheme from "../menu/ToggleTheme";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/" className="logo">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Navbar />
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Header;

const StyledHeader = styled.div``;
