import React from "react";

import BreadCrumb from "simulador/components/atoms/BreadCrumb";

export default {
  title: "Components/Atoms/BreadCrumb",
  component: BreadCrumb,
}

const items = [
  {label: "Inicio", link: "/"},
  {label: "Sobre", link: ""}
]

export const usege = () => (
  <BreadCrumb items={items} />
);