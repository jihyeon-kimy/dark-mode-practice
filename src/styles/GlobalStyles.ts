import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
  ${reset} 

  *{
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }

  html,body{
    font-family: 'Roboto', sans-serif;
    height: 100%;
  }

  #root {
  height: 100%;
  }

  input{
    border: none;
    background-color: transparent;
    &:focus{outline:none}
  }
`;

export default GlobalStyles;
