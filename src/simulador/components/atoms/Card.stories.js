import React from "react";

import Card, {CardBody, CardMedia} from "simulador/components/atoms/Card";
import Section from "simulador/components/molecules/Section";
import { Heading } from "simulador/components/atoms/Heading";
import Button from "simulador/components/atoms/Button";

import car1 from "simulador/assets/car1.jpg";
/*import car2 from "simulador/assets/car2.jpg";
import car3 from "simulador/assets/car3.jpg";*/

export default {
  title: "Components/Atoms/Card",
  component: Card,
  subcomponents: {CardBody, CardMedia}
}

export const usege = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>Mollit magna sunt aute excepteur voluptate cupidatat dolor.</p>
        <div>
          <Button color="primary" variant="link">Saiba mais</Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);


export const withMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={car1}></CardMedia>
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>Mollit magna sunt aute excepteur voluptate cupidatat dolor.</p>
        <div>
          <Button color="primary" variant="link">Saiba mais</Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);
