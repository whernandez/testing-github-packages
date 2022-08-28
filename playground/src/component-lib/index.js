/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const StyledMyComponent = styled.div `
  color: ${p => p.color || 'pink'};
`;
const MyComponent = ({ text, color }) => (React.createElement(StyledMyComponent, { color: color }, text));

export { MyComponent };
