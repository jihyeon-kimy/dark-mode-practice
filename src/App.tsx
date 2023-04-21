import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
