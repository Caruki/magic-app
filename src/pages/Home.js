import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Theros from '../assets/theros-symbol.svg';
import War from '../assets/war.svg';
import Core from '../assets/core.svg';
import Eldraine from '../assets/eldraine.svg';
import TherosBW from '../assets/therosbw.svg';
import RavnicaGuild from '../assets/ravnicaguild.svg';
import RavnicaAll from '../assets/ravnicaeallegiance.svg';

import Preview from '../components/Preview';

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="text-wrapper">
          <img className="theros-symbol" src={Theros} alt=""></img>
          <Link to="/newset" className="heading">
            The New Set - Theros Beyond Death
          </Link>
          <img className="theros-symbol" src={Theros} alt=""></img>
        </div>
        <Preview name="newSet"></Preview>
      </div>
      <div className="wrapper">
        <div className="text-wrapper">
          <img className="symbol" src={Core} alt=""></img>
          <img className="symbol" src={RavnicaAll} alt=""></img>
          <img className="symbol" src={Eldraine} alt=""></img>
          <Link to="/all" className="heading">
            Browse All Current Sets
          </Link>
          <img className="symbol" src={War} alt=""></img>
          <img className="symbol" src={TherosBW} alt=""></img>
          <img className="symbol" src={RavnicaGuild} alt=""></img>
        </div>
        <Preview name="allSets"></Preview>
      </div>
      <div className="wrapper">
        <div className="text-wrapper">
          <i className="ms ms-w ms-cost ms-shadow manafont"></i>
          <i className="ms ms-u ms-cost ms-shadow manafont"></i>
          <Link to="/custom/:userId" className="heading">
            Your Customized Decks
          </Link>
          <i className="ms ms-r ms-cost ms-shadow manafont "></i>
          <i className="ms ms-b ms-cost ms-shadow manafont"></i>
        </div>
        <Preview name="customizedSets"></Preview>
      </div>
    </>
  );
}
