import React from "react";
import { render, screen } from "test-utils";

import Home from "./Home";

test('renders home page', () => {
  render(<Home></Home>);

  const linkElement = screen.getByText(/Matricule-se agora/i);
  expect(linkElement).toBeInTheDocument();
});