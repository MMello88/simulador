import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import ThemeProvider from 'simulador/styles/ThemeProvider';
import GlobalStyle from 'simulador/styles/GlobalStyle';

import Routes from "routes"



function App() {
    return (
      <ThemeProvider>
        <GlobalStyle />

        <Router>
          <Routes></Routes>
        </Router>

        
      </ThemeProvider>
    );
}

export default App;
