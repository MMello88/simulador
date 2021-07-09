import React from 'react';

import { Heading } from 'simulador/components/atoms/Heading';

export default {
  title: "Components/Atoms/Heading",
  component: Heading,
}

// titulo esta comentado pois vamos tirar para criar um component dele
export const usege = () => (
  <div>
    <Heading> 
      <h1>Titulo 1</h1>
    </Heading>
    <Heading> 
      <h2>Titulo 2</h2>
    </Heading>
    <Heading> 
      <h3>Titulo 3</h3>
    </Heading>
    <Heading> 
      <h4>Titulo 4</h4>
    </Heading>
    <Heading> 
      <h5>Titulo 5</h5>
    </Heading>
    <Heading> 
      <h6>Titulo 6</h6>
    </Heading>
  </div>
);
