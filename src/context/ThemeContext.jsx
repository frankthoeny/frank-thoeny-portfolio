import React, { createContext, useContext } from "react";

const ThemeContext = createContext({ isDark: false, toggleTheme: () => {} });

export function ThemeProvider({ children, value }) {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
