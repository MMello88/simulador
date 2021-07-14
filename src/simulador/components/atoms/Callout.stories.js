import React from "react";

import Callout, {CalloutBody, CalloutActions, CalloutMedia} from "simulador/components/atoms/Callout";
import Button from "simulador/components/atoms/Button";
import SpeedImage from "draws/Speed"

export default {
  title: "Components/Atoms/Callout",
  component: Callout,
}

export const usege = () => (
  <Callout>
    <CalloutBody>
      <h6>Ex commodo nulla dolor sit sunt veniam dolor mollit.</h6>
      <p>Cillum incididunt labore elit ut labore reprehenderit fugiat duis aute minim proident.</p>

      <CalloutActions>
        <Button color="primary" >Matricular</Button>
      </CalloutActions>
      
    </CalloutBody>
    
    <CalloutMedia>
      <SpeedImage></SpeedImage>
    </CalloutMedia>


    
  </Callout>
);