import React from "react";
import { render, screen, fireEvent } from "test-utils";

import Accordion from "simulador/components/atoms/Accordion";

const text="my child";
const title="my title";

test('render titulo', () => {
  render(<Accordion title={title}></Accordion>);
  
  expect(screen.getByText(title)).toBeInTheDocument();
});


// como o open para abrir o text não esta aberto, então não encontra o texto, por isso o uso do NOT, 
// pois o text não esta no documento
test('render without children', () => {
  render(<Accordion>{text}</Accordion>);
  
  expect(screen.queryByText(text)).not.toBeInTheDocument();
});


test('trigger onChange when it is clicked', async () => {
  const handleChange = jest.fn();

  render(<Accordion title={text} onChange={handleChange}></Accordion>);

  await fireEvent.click(screen.getByText(text));

  expect(handleChange).toBeCalledTimes(1);
});


describe("whe is controlled", () => {
  describe("whe start opened", () => {
    test("render with children", () => {
      
      render(<Accordion open>{text}</Accordion>);
      
      expect(screen.queryByText(text)).toBeInTheDocument();
    });

    test("triggers onchange when it is clicked", async () => {
      const handleChange = jest.fn();

      render(
        <Accordion title={title} onChange={handleChange} open></Accordion>
      );

      await fireEvent.click(screen.getByText(title));

      expect(handleChange).toBeCalledTimes(1);
    });

    
    test("hide children when open changes to false", () => {
      const { rerender } = render(
        <Accordion title={title} open>{text}</Accordion>
      );
      
      rerender(
        <Accordion title={title} open={false}>{text}</Accordion>
      );

      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });

    test("call default funciton when it is clicked", async () => {
      render(
        <Accordion title={title} open></Accordion>
      );

      await fireEvent.click(screen.getByText(title));

    });

  });

  describe("whe start closed", () => {
    test("render without children", () => {
      render(<Accordion open={false}>{text}</Accordion>);
      
      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
  });
})
