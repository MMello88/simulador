import React from "react";
import { render, screen } from "test-utils";

import ProductDetail from "./ProductDetail";
import products from "simulador/models/builders/fixtures/products.json";

test('renders product detail', () => {
  render(<ProductDetail product={products.slice(0,1)[0]} ></ProductDetail>);
  
  expect(screen.getByText(products.slice(0,1)[0].title, {selector: "h1"})).toBeInTheDocument();
});
