import React from "react";

import ProductGrid from "simulador/components/organisms/ProductGrid";
import products from "simulador/models/builders/fixtures/products.json";

export default {
  title: "Components/Organisms/ProductGrid ",
  component: ProductGrid,
}

export const usege = () => (
  <ProductGrid products={products.slice(0,8)} ></ProductGrid>
);
