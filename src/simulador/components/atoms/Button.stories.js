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

export const usage = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button {...events}>Default</Button>
      <Button {...events} color="primary" >Primary</Button>
      <Button {...events} color="danger" >Danger</Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button disabled {...events}>Default</Button>
      <Button disabled {...events} color="primary" >Primary</Button>
      <Button disabled {...events} color="danger" >Danger</Button>
    </Toolbar>
  </div>
  
);

export const outlined = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button {...events} variant="outlined" >Default</Button>
      <Button {...events} variant="outlined" color="primary" >Primary</Button>
      <Button {...events} variant="outlined" color="danger" >Danger</Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button disabled {...events} variant="outlined" >Default</Button>
      <Button disabled {...events} variant="outlined" color="primary" >Primary</Button>
      <Button disabled {...events} variant="outlined" color="danger" >Danger</Button>
    </Toolbar>
  </div>
  
);

export const link = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button {...events} variant="link" >Default</Button>
      <Button {...events} variant="link" color="primary" >Primary</Button>
      <Button {...events} variant="link" color="danger" >Danger</Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button disabled {...events} variant="link" >Default</Button>
      <Button disabled {...events} variant="link" color="primary" >Primary</Button>
      <Button disabled {...events} variant="link" color="danger" >Danger</Button>
    </Toolbar>
  </div>
  
);
