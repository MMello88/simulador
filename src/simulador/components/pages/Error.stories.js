import React from "react";

import Error from "simulador/components/pages/Error";
import ImageTaken from "draws/Taken";

export default {
  title: "Components/Pages/Error",
  component: Error,
}

export const usege = () => (
  <Error image={<ImageTaken />} titulo={"Página não encontrada"} description={"Ops! esta imagem foi abduzida"}></Error>
);