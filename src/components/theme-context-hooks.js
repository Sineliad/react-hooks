import React from "react";

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    backgroundColor: '#F5A9F2',
  },
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);
