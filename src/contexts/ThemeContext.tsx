import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../themes/ThemeConfig";

type MyThemeContextType = {
  theme: string;
  setTheme: (newTheme: string) => void;
};
export const MyThemeContext = createContext({} as MyThemeContextType);

interface MyThemeProviderProps {
  //disponibliza o theme e o setTheme para meu context
  children: any;
}
const MyThemeProvider = (props: MyThemeProviderProps) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

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
        /* {
        theme,
        setTheme: (v: string) => {
          //TODO: convert to useCalbeck
          setTheme(v);
          localStorage.setItem("theme", v);
        },
      } */
      }}
    >
      <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        {props.children}
      </ThemeProvider>
    </MyThemeContext.Provider>
  );
};

export default MyThemeProvider;
