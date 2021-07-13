import { BreakpointSize, breakAt } from 'simulador/styles/Breakpoints';

test.each([
 [BreakpointSize.sm] ,
 [BreakpointSize.md] ,
 [BreakpointSize.lg] ,
 [BreakpointSize.xl] ,
])('Break at %ipx', (size) => {
  expect(breakAt(size)).toEqual(`@media (min-width: ${size}px)`);
})
