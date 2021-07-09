import React from "react";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";

import Feature from "simulador/components/atoms/Feature";
import Grid from "simulador/components/atoms/Grid";

export default {
  title: "Components/Atoms/Feature ", 
  component: Feature,
}

export const usege = () => (
  <Feature title="title test" icon={<FaCar />}>
    <p>Ex elit officia laboris nulla quis consectetur commodo.</p>
  </Feature>
);

export const withGrid = () => (
  <Grid sm={2} md={3} lg={4} xl={5}>
    <Feature title="Maior e Melhor frota" icon={<FaCar />}>
      <p>Ex elit officia laboris nulla quis consectetur commodo.</p>
    </Feature>
    <Feature title="Habilitação mais rapida" icon={<FaKey />}>
      <p>Ex elit officia laboris nulla quis consectetur commodo.</p>
    </Feature>
    <Feature title="Excelente localização" icon={<FaMapMarkedAlt />}>
      <p>Ex elit officia laboris nulla quis consectetur commodo.</p>
    </Feature>
    <Feature title="Acessibilidade" icon={<FaAccessibleIcon />}>
      <p>Ex elit officia laboris nulla quis consectetur commodo.</p>
    </Feature>
  </Grid>
);
