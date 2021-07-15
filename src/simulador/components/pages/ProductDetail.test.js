import React from "react";
import { render, screen } from "test-utils";

import ProductDetail from "./ProductDetail";

test('renders product detail', () => {
  render(<ProductDetail></ProductDetail>);
  
  expect(screen.getByText('Nome do Serviço')).toBeInTheDocument();
});
