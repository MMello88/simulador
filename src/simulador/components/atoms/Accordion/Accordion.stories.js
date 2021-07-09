import React from "react";

import Accordion, {AccordionGroup} from "simulador/components/atoms/Accordion";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
  subcomponents: {AccordionGroup}
}

export const usege = () => (
  <Accordion title="Como eu renovo minha CNH?">
    Do est aliquip magna anim commodo ullamco non laborum ea.
  </Accordion>
);

export const withList = () => (
  <>
    <Accordion title="Como eu renovo minha CNH?">
      Do est aliquip magna anim commodo ullamco non laborum ea.
    </Accordion>
    <Accordion title="Como faço para mudar de categoria">
      Do est aliquip magna anim commodo ullamco non laborum ea.
    </Accordion>
    <Accordion title="Fui multado e agora?">
      Do est aliquip magna anim commodo ullamco non laborum ea.
    </Accordion>
  </>
);


export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Como eu renovo minha CNH?">
      Do est aliquip magna anim commodo ullamco non laborum ea.
    </Accordion>
    <Accordion title="Como faço para mudar de categoria">
      Do est aliquip magna anim commodo ullamco non laborum ea.
    </Accordion>
    <Accordion title="Fui multado e agora?">
      Do est aliquip magna anim commodo ullamco non laborum ea.
    </Accordion>
  </AccordionGroup>
);
