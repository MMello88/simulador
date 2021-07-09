import styled from 'styled-components';

import { BreakpointSize, breakAt } from 'simulador/styles/Breakpoints'

export const Heading = styled.div`
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.3;
    font-weight: 300;

    position: relative;
    margin-bottom: 25px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    
    &::after{
      content: "";
      position: absolute;
      left: 0;
      bottom: -3px;
      background: ${(props) => props.theme.colors.primary.main};
      height: 5px;
      width: 70px;
    }

    strong {
      color:  ${(props) => props.theme.colors.primary.main};
    }
  }
  
  h1 {
    padding-bottom: 25px;
  }

  h1 {
    font-size: 2.5rem;

    ${breakAt(BreakpointSize.lg)} {
      font-size: 3.75rem;
    }
  }

  h2 {
    font-size: 2rem;
    ${breakAt(BreakpointSize.lg)} {
      font-size: 3.125rem;
    }
  }

  h3 {
    font-size: 1.9rem;
    ${breakAt(BreakpointSize.lg)} {
      font-size: 2.5rem;
    }
  }

  h4 {
    font-size: 1.3rem;
    font-weight: 600;
    ${breakAt(BreakpointSize.lg)} {
      font-size: 2.125rem;
    }
  }
  
  h5 {
    font-size: 1.2rem;
    font-weight: 300;
    ${breakAt(BreakpointSize.lg)} {
      font-size: 1.5rem;
    }
  }  

  h6 {
    font-size: 1.1rem;
    font-weight: 600;
    ${breakAt(BreakpointSize.lg)} {
      font-size: 1.25rem;
    }
  }
`;
