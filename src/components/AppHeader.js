import React from 'react';
import Logo from './Logo';
import Title from './Title';
import styled from '@emotion/styled';
import Manawallpaper from '../assets/manawallpaper.jpg';

const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6) 10%,
      rgba(0, 0, 0, 0.6) 80%
    ),
    url(${Manawallpaper}), transparent;
  background-size: cover;

  &:hover {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.404) 10%,
        rgba(0, 0, 0, 0.301) 80%
      ),
      url(${Manawallpaper}), transparent;
    background-size: cover;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  height: 40px;
`;

const HeaderText = styled.div`
  color: rgb(227, 223, 250);
  font-family: 'MPlantin';
  font-size: 1rem;
  flex-grow: 1;
  margin-top: 7px;
`;

export default function AppHeader() {
  return (
    <Header>
      <TitleContainer>
        <Logo />
        <Title>Magic Deck Tracker</Title>
      </TitleContainer>
      <HeaderText>Save your favourite cards in personalized decks</HeaderText>
    </Header>
  );
}
