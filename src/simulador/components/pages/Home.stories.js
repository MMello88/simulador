import React from "react";

import Home from "simulador/components/pages/Home";
import products from "simulador/models/builders/fixtures/products.json"

export default {
  title: "Components/Pages/Home", 
  component: Home,
}

export const usege = () => (
  <Home products={products}></Home>
);
