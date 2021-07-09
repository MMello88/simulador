import React from "react";
import { render } from "test-utils";

import Feature from "simulador/components/atoms/Feature";

test('Renders the title of features', () => {
  const {getByText} = render(<Feature title="My Title" />);
  
  expect(getByText("My Title")).toBeInTheDocument();
});

test('Renders the children of features', () => {
  const {getByText} = render(<Feature>My children</Feature>);
  
  expect(getByText("My children")).toBeInTheDocument();
});
