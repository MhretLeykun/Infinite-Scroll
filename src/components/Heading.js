import React from 'react';
import styled from 'styled-components';
const Header = styled.header`
  font-family: 'Righteous';
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;
const H1 = styled.h1`
font-family: 
  margin-bottom: 1em;
`;

export const Heading = () => {
  return (
    <Header>
      <H1>Unsplash</H1>
      <p>
        The internet’s source of freely-usable images. Powered by creators
        everywhere.
      </p>
      <p>Powered By Unsplash</p>
    </Header>
  );
};
