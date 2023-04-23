import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import color from "./color";

const GlobalStyles = createGlobalStyle` 
  ${reset} 

  *{
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html,body{
    height: 100%;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color:${color.gray};
    transition: background-color 0.3s linear;
  }

  #root {
  height: 100%;
  }

  input{
    border: none;
    background-color: transparent;

    &:focus{outline:none}
  }

  button{
    background: inherit; 
    border:none; 
    box-shadow:none;
    border:none;
    padding:0; 
    overflow:visible; 
    cursor:pointer
  }

  a{
    text-decoration: none;
  }
`;

export default GlobalStyles;
