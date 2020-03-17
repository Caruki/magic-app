import React from 'react';
import { Link } from 'react-router-dom';
import HeadingWrapper from '../components/HeadingWrapper';
import HeadingSymbol from '../components/HeadingSymbol';
import Theros from '../assets/theros-symbol.svg';
import War from '../assets/war.svg';
import Core from '../assets/core.svg';
import Eldraine from '../assets/eldraine.svg';
import TherosBW from '../assets/therosbw.svg';
import RavnicaGuild from '../assets/ravnicaguild.svg';
import RavnicaAll from '../assets/ravnicaeallegiance.svg';
import styled from '@emotion/styled';

import Preview from '../components/Preview';

// const Heading styled(Link) `
//     font-size: 1.3rem;
//     font-family: 'MPlantin';
//     color: rgb(183, 225, 241);
//     text-shadow: 6px -1px 5px rgba(7, 29, 53, 0.774);
//     text-align: center;
//     margin: 5px;
//   `

const TherosSymbol = styled.img`
  height: 30%;
  padding-bottom: 10px;
`;

const Manafont = styled.i`
  margin: 5px;
`;

export default function Home() {
  return (
    <>
      <HeadingWrapper>
        <TherosSymbol src={Theros} alt=""></TherosSymbol>
        <Link to="/newset" className="heading">
          The New Set - Theros Beyond Death
        </Link>
        <TherosSymbol src={Theros} alt=""></TherosSymbol>
      </HeadingWrapper>
      <Preview name="newSet"></Preview>
      <HeadingWrapper>
        <HeadingSymbol src={Core} alt=""></HeadingSymbol>
        <HeadingSymbol src={RavnicaAll} alt=""></HeadingSymbol>
        <HeadingSymbol src={Eldraine} alt=""></HeadingSymbol>
        <Link to="/all" className="heading">
          Browse All Current Sets
        </Link>
        <HeadingSymbol src={War} alt=""></HeadingSymbol>
        <HeadingSymbol src={TherosBW} alt=""></HeadingSymbol>
        <HeadingSymbol src={RavnicaGuild} alt=""></HeadingSymbol>
      </HeadingWrapper>
      <Preview name="allSets"></Preview>
      <HeadingWrapper>
        <Manafont className="ms ms-w ms-cost ms-shadow manafont"></Manafont>
        <Manafont className="ms ms-u ms-cost ms-shadow manafont"></Manafont>
        <Link to="/custom/:userId" className="heading">
          Your Customized Decks
        </Link>
        <Manafont className="ms ms-r ms-cost ms-shadow"></Manafont>
        <Manafont className="ms ms-b ms-cost ms-shadow manafont"></Manafont>
      </HeadingWrapper>
      <Preview name="customizedSets"></Preview>
    </>
  );
}
