import { createGlobalStyle } from "styled-components";

const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Globals */

  a {
    text-decoration: none;
    transition: .3s;
  }
`;

export default CSSReset;
