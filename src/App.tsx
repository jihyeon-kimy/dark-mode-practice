import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import ThemeProvider from "./store/themeProvider";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <RouterProvider router={routers} />
    </ThemeProvider>
  );
}

export default App;
