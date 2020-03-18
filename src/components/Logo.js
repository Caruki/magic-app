import React from 'react';
import styled from '@emotion/styled';
import LogoImage from '../assets/mtgalogo.svg';

const LogoStyle = styled.img`
  height: 80%;
  margin: 5px 0px 20px 0px;
`;

function Logo() {
  return <LogoStyle src={LogoImage} alt="logo"></LogoStyle>;
}

export default Logo;
