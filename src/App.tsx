import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <RouterProvider router={routers} />
    </ThemeProvider>
  );
}

export default App;
