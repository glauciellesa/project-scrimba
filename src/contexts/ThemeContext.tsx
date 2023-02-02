import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../themes/ThemeConfig";

export const LIGHT = "light";
export const DARK = "dark";

type MyThemeContextType = {
  theme: string;
  setTheme: (newTheme: string) => void;
};
export const MyThemeContext = createContext({} as MyThemeContextType);

interface MyThemeProviderProps {
  //It makes the theme and setTheme available to my context
  children: any;
}
const MyThemeProvider = (props: MyThemeProviderProps) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "LIGHT");

  const setThemeFunc = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <MyThemeContext.Provider
      //Value is a props' provider
      value={{
        theme,
        setTheme: setThemeFunc,
      }}
    >
      <ThemeProvider theme={theme == "LIGHT" ? lightTheme : darkTheme}>
        {props.children}
      </ThemeProvider>
    </MyThemeContext.Provider>
  );
};

export default MyThemeProvider;
