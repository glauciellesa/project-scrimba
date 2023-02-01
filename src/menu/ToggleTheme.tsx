import { useContext } from "react";
import styled from "styled-components";
import { MyThemeContext } from "../contexts/ThemeContext";

function ToggleTheme() {
  const { theme, setTheme } = useContext(MyThemeContext);

  const toggleTheme = () => {
    if (theme == "LIGHT") {
      setTheme("DARK");
    } else {
      setTheme("LIGHT");
    }
  };

  return (
    <StyledToggle>
      <i
        className={theme == "LIGHT" ? "fa-solid fa-moon" : "fa-solid fa-sun"}
        onClick={toggleTheme}
      />
    </StyledToggle>
  );
}

export default ToggleTheme;

const StyledToggle = styled.div`
  color: ${({ theme }) => theme.textColorAlt};
  i:hover {
    color: ${({ theme }) => theme.textColor};
    cursor: pointer;
  }
`;
