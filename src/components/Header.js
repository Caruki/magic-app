import React from 'react';
import './Header.css';
import Logo from '../assets/mtgalogo.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img className="logo" src={Logo} alt="logo"></img>
        <h1 className="title">Magic Deck Tracker</h1>
      </div>
      <div className="header-text">
        Save your favourite cards in personalized decks
      </div>

      {/* <i class="ms ms-w ms-cost ms-shadow"></i>
    <i class="ms ms-u ms-cost ms-shadow"></i>
     <i class="ms ms-r ms-cost ms-shadow"></i>
     <i class="ms ms-b ms-cost ms-shadow"></i> */}
    </header>
  );
}
