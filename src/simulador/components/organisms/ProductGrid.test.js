import React from "react";
import { render, screen, fireEvent } from "test-utils";

import ProductGrid from "./ProductGrid";

const buildProducts = (size) => {
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push({id: i, title: `Title ${i}`, summary:`${i} - In officia exercitation dolor sint nisi laboris nostrud proident reprehenderit velit ea.`})
  }

  return result;
}

describe.each([
    [1,1],
    [2,2],
    [3,3],
    [4,3],
    [6,3],
  ])("With %i products", (size, showOnly) => {

  test(`show only ${showOnly} item`, () => {
    render(<ProductGrid products={buildProducts(size)} ></ProductGrid>);
    
    expect(screen.getAllByRole("heading").length).toBe(showOnly);
  });

  test('show all the products when button is clicked', async () => {
    render(<ProductGrid products={buildProducts(size)} ></ProductGrid>);

    await fireEvent.click(screen.getByText("Lista completa"));

    expect(screen.getAllByRole("heading").length).toBe(size);
  })

});
