import styled from "styled-components";
import logoNoBackground from "../assets/png/logoNoBackground.png";
import ToggleTheme from "../menu/ToggleTheme";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <StyledHeader>
      <div className="nav-container">
        <div className="nav-left">
          <div className="logo">
            <a href="/">
              <img src={logoNoBackground} className="logo" alt="My logo" />
            </a>
          </div>
        </div>
        <div className="nav-right">
          <Navbar />
          <ToggleTheme />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100vw;
  padding: 1rem;
  box-shadow: 0 3px 3px -4px ${({ theme }) => theme.textColorAlt};

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo img {
    width: 70px;
  }
  .logo {
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
  .nav.left {
    display: flex;
    padding: 0;
  }
  .nav-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
`;
