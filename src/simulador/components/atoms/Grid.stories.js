import React from "react";

import Grid from "simulador/components/atoms/Grid";
import styled from "styled-components";

export default {
  title: "Components/Atoms/Grid ", 
  component: Grid,
}

const Box = styled.div`
  height: 200px;
  background-color: indigo;

`;

export const usege = () => (
  <Grid sm={2} md={3} lg={4} xl={5}>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
  </Grid>
);
