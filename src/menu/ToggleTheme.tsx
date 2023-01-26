import { useContext } from "react";
import styled from "styled-components";
import { MyThemeContext } from "../contexts/ThemeContext";

function ToggleTheme() {
  const { theme, setTheme } = useContext(MyThemeContext);

  const toggleTheme = () => {
    if (theme == "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <StyledToggle>
      <input onClick={toggleTheme} type="checkbox" id="darkmode" />
      <label htmlFor="darkmode" className="darkmode-switch">
        <span>🌙</span>
        <span>☀️</span>
      </label>
    </StyledToggle>
  );
}

export default ToggleTheme;

const StyledToggle = styled.div`
  background-color: #333333;
  border: 0;
  padding: 2px 3px 2px 2px;
  font-size: 14px;
  width: 50px;
  height: 25px;
  display: flex;
  justify-content: space-between;
  border-radius: 10000px;
  position: relative;

  label {
    width: 40px;
  }
  span {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5px;
  }

  label:before {
    content: "";
    background-color: #fafafa;
    border: 1px solid #333333;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    position: absolute;
    top: 1px;
    bottom: 0;
    left: 3px;
    transition: 0.3s;
    cursor: pointer;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:checked + label:before {
    transform: translateX(100%);
  }
  @media (max-width: 450px) {
    font-size: 8px;
    width: 40px;
    height: 20px;
    label:before {
      content: "";
      width: 15px;
      height: 14px;
    }
  }
`;
