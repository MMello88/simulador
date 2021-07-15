import React from "react";
import { render, screen } from "test-utils";

import About from "./About";

/** scrollto roda em ambos teste, assim chamdo 2 vezes, para cada teste ser chamado o seu
 * vou colocar o comando de mocks
 */

beforeEach(() => {
  jest.resetAllMocks();
})

test('render about page', () => {
  render(<About></About>);
  
  expect(screen.getByText('Auto escola Matheus')).toBeInTheDocument();
});


test('scrolls to top in first render', () =>{
  render(<About></About>);
  expect(window.scrollTo).toBeCalledTimes(1);
})