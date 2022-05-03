import * as React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
font-family: ${({ theme }) => theme.font.family.jakarta};
text-transform: uppercase;
font-size: ${({ theme }) => theme.font.size.heading};
`;

const IndexPage = () => (
  <main>
    <H1>Tenacious Hare</H1>
  </main>
);

export default IndexPage;
