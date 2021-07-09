import React from 'react';
import {ThemeProvider as StyleProvider} from 'styled-components';

export const ThemeNames = {
  light: "light",
  ocean: "ocean"
};

const light = {
  colors: {
    primary: {
      main: "#ffc107",
      dark: "#c79100",
      light: "#fff350",
      text: "#212121"
    },
    danger:{
      main: "#ff3d00",
      dark: "#b22a00",
      text: "#212121"
    },
  },
};

const allTheme = {
  light,
  ocean: {
    ...light,
    colors: {
      ...light.colors,
      primary:{
        main: "#2196f3",
        dark: "#1769aa",
        light: "#4dabf5",
        text: "#fff",
      }
    }
  }
  
}

const ThemeProvider = ({theme, children}) => (
  <StyleProvider theme={allTheme[theme]}>
    {children}
  </StyleProvider>
);

ThemeProvider.defaultProps= {
  theme: "light"
};

ThemeProvider.Prototype = {

}
export default ThemeProvider;
