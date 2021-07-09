import styled from 'styled-components';

import { breakAt, BreakpointSize } from 'simulador/styles/Breakpoints';

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointSize.sm)}{
    padding: 0 16px;
  }

  ${breakAt(BreakpointSize.lg)}{
    padding: 0;
    max-width: 1140px;
    margin: 0 auto;
  }
`;

export default Container;
