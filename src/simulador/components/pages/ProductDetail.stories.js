import React from "react";

import ProductDetail from "./ProductDetail";
import products from "simulador/models/builders/fixtures/products.json";

export default {
  title: "Components/Pages/ProductDetail",
  component: ProductDetail,
}

export const usege = () => (
  <ProductDetail product={products.slice(0,1)[0]} ></ProductDetail>
);