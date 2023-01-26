export interface Theme {
  backgroundBase: string;
  backgroundLevel: string;
  borderBase: string;
  textColor: string;
  textColorAlt: string;
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
