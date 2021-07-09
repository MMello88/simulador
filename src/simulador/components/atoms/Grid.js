import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { breakAt, BreakpointSize } from "simulador/styles/Breakpoints";

const breakColumnAt = (size) => (props) => 
  props.[size] && 
  css`
    ${breakAt(BreakpointSize[size])}{
      grid-template-columns: repeat(${(props) => props.[size]}, 1fr);  //ou repetir 4x
    }
  `;

const Grid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  // grid-template-columns: 1fr 1fr 1fr 1fr; ou ->
  grid-template-columns: 1fr;

  ${breakColumnAt("sm")}
  ${breakColumnAt("md")}
  ${breakColumnAt("lg")}
  ${breakColumnAt("xl")}
`;

Grid.defaultProps = {
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
};

Grid.propTypes = {
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

export default Grid;
