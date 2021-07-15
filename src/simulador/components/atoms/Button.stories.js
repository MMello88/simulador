import React from 'react';
import {actions} from "@storybook/addon-actions";
import Button from 'simulador/components/atoms/Button';
import styled from 'styled-components'


export default {
  title: "Components/Atoms/Button",
  component: Button
}
const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

const events = actions({onClick: "cliked"});

const ButtownsWrapper = (props) => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button {...props} {...events}>Default</Button>
      <Button {...props} {...events} color="primary" >Primary</Button>
      <Button {...props} {...events} color="danger" >Danger</Button>
    </Toolbar>
    <p>As a link</p>
    <Toolbar>
      <Button as="a" href="#" {...props} {...events}>Default</Button>
      <Button as="a" href="#" {...props} {...events} color="primary" >Primary</Button>
      <Button as="a" href="#" {...props} {...events} color="danger" >Danger</Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button disabled {...props} {...events}>Default</Button>
      <Button disabled {...props} {...events} color="primary" >Primary</Button>
      <Button disabled {...props} {...events} color="danger" >Danger</Button>
    </Toolbar>
  </div>
);

export const usage = () => (
  <ButtownsWrapper></ButtownsWrapper>
);

export const outlined = () => (
  <ButtownsWrapper variant="outlined" ></ButtownsWrapper>  
);

export const link = () => (
  <ButtownsWrapper variant="link" ></ButtownsWrapper>    
);
