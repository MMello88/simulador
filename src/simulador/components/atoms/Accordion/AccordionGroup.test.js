import React from "react";
import { render, screen, fireEvent } from "test-utils";

import AccordionGroup from "./AccordionGroup";
import Accordion from "./Accordion";

const title="my title";

const renderGroup = (n) => {
  const accoridons = [];
  for (let i = 0; i < n; i++) {
    accoridons.push(<Accordion key={i} title={`title ${i}`}>
      Child {i}
    </Accordion>);
  }

  return render(
    <AccordionGroup>
      {accoridons}
    </AccordionGroup>
  );
}

test('render with children', () => {
  render(<AccordionGroup>
    <Accordion title={title} />
  </AccordionGroup>);
  
  expect(screen.getByText(title)).toBeInTheDocument();
});


test('render with 3 children', () => {
  render(<AccordionGroup>
    <Accordion title={title} />
    <Accordion title={title} />
    <Accordion title={title} />
  </AccordionGroup>);
  
  expect(screen.getAllByText(title)).toHaveLength(3);
});


test('render with all accordion closed', () => {
  renderGroup(3)
  
  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
});

test("opens accordion whit clicked", async () => {
  renderGroup(5);

  await fireEvent.click(screen.getByText("title 3"));
  
  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 3")).toBeInTheDocument();
  expect(screen.queryByText("Child 4")).not.toBeInTheDocument();

})

test("closes acordion when it clicks on it", async () => {
  renderGroup(3);

  await fireEvent.click(screen.getByText("title 1"));
  
  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();

  await fireEvent.click(screen.getByText("title 1"));
  
  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();

})
