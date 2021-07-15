import React from 'react';

import { useScrollToTop } from "hooks/scroll";
import HomePage from "simulador/components/pages/Home";

const Home = () => {
  useScrollToTop();
  return (
    <HomePage></HomePage>
  )
}

export default Home;