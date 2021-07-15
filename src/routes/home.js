import React from 'react';

import { useScrollToTop } from "hooks/scroll";
import { useProducts } from "hooks/products";
import HomePage from "simulador/components/pages/Home";



const Home = () => {
  useScrollToTop();
  const products = useProducts();
  
  return (
    <HomePage products={products}></HomePage>
  )
}

export default Home;