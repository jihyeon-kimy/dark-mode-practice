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
    background-color: ${({ theme }) => theme.background};
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
`;

export default GlobalStyles;
