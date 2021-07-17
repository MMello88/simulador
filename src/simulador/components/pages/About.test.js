import React from "react";
import { render, screen } from "test-utils";

import About from "./About";

/** scrollto roda em ambos teste, assim chamdo 2 vezes, para cada teste ser chamado o seu
 * vou colocar o comando de mocks
 */

/*
retirei esta função pois o outro teste foi movido para o about.test.js da rota 
beforeEach(() => {
  jest.resetAllMocks();
})
*/

test('render about page', () => {
  render(<About></About>);
  
  expect(screen.getByText('Auto escola Matheus')).toBeInTheDocument();
});


