import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ThemeProvider from 'simulador/styles/ThemeProvider';
import GlobalStyle from 'simulador/styles/GlobalStyle';
import Home from "simulador/components/pages/Home";
import About from "simulador/components/pages/About";
import ProductDetail from "simulador/components/pages/ProductDetail";


function App() {
    return (
      <ThemeProvider>
        <GlobalStyle />

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Sobre" element={<About />} />
            <Route path="/Servicos" element={<ProductDetail />} />
          </Routes>
        </Router>

        
      </ThemeProvider>
    );
}

export default App;
