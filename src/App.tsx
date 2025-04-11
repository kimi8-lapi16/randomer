import React from 'react';
import styled from 'styled-components';
import RandomSelector from './Selector';
import { GlobalStyle } from './commonStyle';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Title>Random Selector</Title>
      </Header>
      <MainContainer>
        <RandomSelector />
      </MainContainer>
      <Footer>@kimi8-lapi16</Footer>
    </>
  );
}

const MainContainer = styled.main`
  width: 100%;
  height: 80dvh;
  margin-block: 1rem;
  padding-inline: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  background-color: var(--accent-color);
  color: white;
  margin-block: 0px;
  padding: 1rem;
`;

const Header = styled.header``;

const Footer = styled.footer`
  text-align: center;
`;
