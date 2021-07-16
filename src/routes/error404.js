import React from "react";

import Error from "simulador/components/pages/Error";
import ImageTaken from "draws/Taken";

const error404 = () => (
  <Error image={<ImageTaken />} titulo={"Página não encontrada"} description={"Ops! esta imagem foi abduzida"}></Error>
);

export default error404;