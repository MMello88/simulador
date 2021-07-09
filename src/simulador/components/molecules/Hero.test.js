import React from 'react';
import { render } from 'test-utils';

import Hero from 'simulador/components/molecules/Hero';


test('renders Hero with children', () => {
  const component = render(
    <Hero>
      <p>Matheus de Mello</p>
    </Hero>
  );

  component.debug();

  //expect(component.getByText('Matheus de Mello')).toBeTruthy();
  expect(component.getByText('Matheus de Mello')).toBeInTheDocument();
});

test('renders image background', () => {
  const image = "http://test/image.jpg"
  const { getByTestId } = render(
    <Hero image={image} />
  );

  expect(getByTestId("hero")).toBeInTheDocument();
  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image,
  });
});
