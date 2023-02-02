export interface Theme {
  backgroundBase: string;
  backgroundLevel: string;
  textColor: string;
  textColorAlt: string;
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
