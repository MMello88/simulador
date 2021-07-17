import React from "react";
import { render, screen } from "test-utils";
import { useProduct } from "hooks/products";

import ProductDetailRoute from "./index";
import products from "simulador/models/builders/fixtures/products.json";

jest.mock("hooks/products");

test('render um product detail', () => {

  useProduct.mockReturnValue(products.slice(0,1)[0]);

  render(<ProductDetailRoute></ProductDetailRoute>);
  
  expect(screen.getByText(products.slice(0,1)[0].title, { selector: "h1" })).toBeInTheDocument();
});

test('not found product', () => {

  useProduct.mockReturnValue(null);

  render(<ProductDetailRoute></ProductDetailRoute>);
  
  expect(screen.getByText("Serviço não encontrada")).toBeInTheDocument();

});