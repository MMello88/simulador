import React from 'react';
import "simulador/components/molecules/HeroComCss.css";

const HeroComCss = ({title, children}) => (
  <div>
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  </div>
);

export default HeroComCss;
