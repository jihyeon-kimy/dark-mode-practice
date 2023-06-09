import React, { useState } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";

type ThemeContextType = {
  darkmode: boolean;
  toggleThemeHandler: () => void;
};

interface themeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  darkmode: false,
  toggleThemeHandler: () => {},
});

const ThemeProvider: React.FC<themeProviderProps> = ({ children }) => {
  const [darkmode, setDarkmode] = useState(false);
  const theme = darkmode ? darkTheme : lightTheme;

  const toggleThemeHandler = () => {
    setDarkmode((prev) => !prev);
  };

  const themeContext = {
    darkmode,
    toggleThemeHandler,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
