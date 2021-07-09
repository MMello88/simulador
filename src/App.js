import React from 'react';

import ThemeProvider from 'simulador/styles/ThemeProvider';
import GlobalStyle from 'simulador/styles/GlobalStyle';
import Home from "simulador/components/pages/Home";


function App() {
    return (
      <ThemeProvider>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    );
}

export default App;
