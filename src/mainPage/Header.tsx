import styled from "styled-components";
import logoNoBackground from "../assets/png/logoNoBackground.png";
import ToggleTheme from "../menu/ToggleTheme";
import Navbar from "../menu/Navbar";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    if (isMenuOpen == false) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  };
  console.log(isMenuOpen);
  return (
    <StyledHeader>
      <div className="nav-container">
        <div className="nav-left">
          {isMenuOpen == false ? (
            <div className="logo">
              <a href="/">
                <img src={logoNoBackground} className="logo" alt="My logo" />
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="nav-right">
          <Navbar isOpen={isMenuOpen} />
          {isMenuOpen == false ? <ToggleTheme /> : ""}
          <div className="nav-SmallScrin">
            <div className="nav_toggle" id="nav-toggle">
              <i
                className={
                  isMenuOpen == false ? "fa-solid fa-grip" : "fa-solid fa-xmark"
                }
                onClick={toggleMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  color: ${({ theme }) => theme.textColorAlt};
  font-size: 1.3rem;
  width: 100vw;
  padding: 1rem;
  box-shadow: 0 3px 3px -4px ${({ theme }) => theme.textColorAlt};

  .nav-container {
    display: flex;
    flex-wrap: wrap;
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
  .nav_toggle {
    display: none;
  }

  .nav-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  .nav-SmallScrin .nav-close {
    display: none;
  }
  @media (max-width: 500px) {
    font-size: 1.5rem;
    position: absolute;
    bottom: 0;
    box-shadow: 0 3px 3px 3px ${({ theme }) => theme.textColorAlt};
    .nav-SmallScrin {
      display: block;
      padding: 0.3rem;
    }
    .nav_toggle {
      display: block;
    }
  }
`;
