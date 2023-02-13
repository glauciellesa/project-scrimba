import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

//pages
import Home from "./pages/Home";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Header from "./mainPage/Header";
import styled from "styled-components";
import CSSReset from "./themes/CSSReset";
import MyThemeProvider from "./contexts/ThemeContext";
import { GlobalStyles } from "./themes/ThemeConfig";
import "@fortawesome/fontawesome-free/css/all.css";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="project1" element={<Project1 />} />
        <Route path="project2" element={<Project2 />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <MyThemeProvider>
      {/* I'll Wrap all the components that need the context with a context
      provider: */}
      <CSSReset />
      <GlobalStyles />
      <StyledApp>
        <RouterProvider router={router} />
      </StyledApp>
    </MyThemeProvider>
  );
}

export default App;

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
`;
