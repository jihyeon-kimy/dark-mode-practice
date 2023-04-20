import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
  ${reset} 

  *{
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyles;
