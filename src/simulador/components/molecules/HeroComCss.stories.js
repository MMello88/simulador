import React from 'react';

import HeroComCss from "simulador/components/molecules/HeroComCss";

export default {
  title: "Components/Molecules/HeroComCss",
  component: HeroComCss,
}

export const usege = () => 
<HeroComCss title="Ganhe sua liberdade"> 
  <p>Nisi et amet dolore excepteur consequat magna.</p>
</HeroComCss>;

export const withList = () => 
<HeroComCss title="Ganhe sua liberdade"> 
  <ul>
    <li>Mollit labore aliqua sunt esse Lorem aliquip et cupidatat est elit excepteur aliqua.</li>
    <li>Mollit labore aliqua sunt esse Lorem aliquip et cupidatat est elit excepteur aliqua.</li>
    <li>Mollit labore aliqua sunt esse Lorem aliquip et cupidatat est elit excepteur aliqua.</li>
  </ul>
</HeroComCss>;
