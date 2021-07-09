import React from 'react';
import { text } from '@storybook/addon-knobs';

import Hero from "simulador/components/molecules/Hero";
import BgSlider1 from "simulador/assets/slider-01.jpg";
import BgSlider4 from "simulador/assets/slider-04.jpg";
import { Heading } from 'simulador/components/atoms/Heading';
import Button from 'simulador/components/atoms/Button';


export default {
  title: "Components/Molecules/Hero",
  component: Hero,
}

// titulo esta comentado pois vamos tirar para criar um component dele
export const usege = () => 
<Hero image={BgSlider4} /*title="Ganhe sua liberdade"*/> 
  <Heading> 
    <h1>{text('Title', 'Ganhe sua liberdade')}</h1>
  </Heading>
  <p>{text("Texto", "Nisi et amet dolore excepteur consequat magna.")}</p>
</Hero>;


// titulo esta comentado pois vamos tirar para criar um component dele
export const withList = () => 

<Hero image={BgSlider1} /*title={<span>Ganha sua <strong>liberdade</strong><br /> para ir e ver</span>} */> 
  <Heading>
    <h1>Ganha sua <strong>liberdade</strong><br /> para ir e ver</h1>
  </Heading>
  <ul>
    <li>Mollit labore aliqua sunt esse Lorem aliquip et cupidatat est elit excepteur aliqua.</li>
    <li>Mollit labore aliqua sunt esse Lorem aliquip et cupidatat est elit excepteur aliqua.</li>
    <li>Mollit labore aliqua sunt esse Lorem aliquip et cupidatat est elit excepteur aliqua.</li>
  </ul>
  <Button variant="outlined" color="primary">Matricule-se agora</Button>
</Hero>;
