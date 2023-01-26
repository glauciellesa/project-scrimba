import Header from "./mainPage/Header";
import styled from "styled-components";
import CSSReset from "./themes/CSSReset";
import MyThemeProvider from "./contexts/ThemeContext";
import { GlobalStyles } from "./themes/ThemeConfig";

function App() {
  return (
    <MyThemeProvider>
      {/* I'll Wrap all the components that need the context with a context
      provider: */}
      <CSSReset />
      <GlobalStyles />
      <StyledApp>
        <Header />
      </StyledApp>
    </MyThemeProvider>
  );
}

export default App;

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
`;
