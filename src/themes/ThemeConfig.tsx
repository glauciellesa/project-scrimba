import { createGlobalStyle, DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  backgroundBase: "hsl(90, 30%, 88%)",
  backgroundLevel: "hsl(90, 18.7128712871287%, 90.19607843137256%)",
  borderBase: "#E5E5E5",
  textColor: "#1E3749",
  textColorAlt: "#ED6363",
};

export const darkTheme: DefaultTheme = {
  backgroundBase: "hsl(204, 42.05607476635513%, 20.980392156862745%)",
  backgroundLevel: "hsl(204, 50.10526315789473%, 14.901960784313726%)",
  borderBase: " #383838",
  textColor: "#C8DBBE",
  textColorAlt: "#ED6363",
};

export const GlobalStyles = createGlobalStyle`
        body {
          background: ${({ theme }) => theme.backgroundBase};
          color: ${({ theme }) => theme.textColor};
          font-family: Helvetica, Arial, Roboto, sans-serif;
          transition: all 0.50s linear;
        }
      `;
