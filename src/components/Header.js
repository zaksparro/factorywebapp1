import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src="./assets/logo.png" alt="SCAM Factory" className="logo" />
        <p className="tagline">Constructeur de bot de qualité.</p>
      </div>
    </header>
  );
};

export default Header;
