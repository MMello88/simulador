import React from 'react';

import { useScrollToTop } from "hooks/scroll";
import AboutPage from "simulador/components/pages/About";

const About = () => {
  useScrollToTop();
  
  return (    
    <AboutPage></AboutPage>
  )
};

export default About;