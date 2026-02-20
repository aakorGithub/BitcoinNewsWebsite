// Header.tsx - Defines the Header and DesktopNav components for the website.

import React from 'react';
import './index.css';                             

function Header() {
  return ( 
    <header className="hero">
      <h1>Bitcoin News</h1>
    </header>
  );
}

function DesktopNav() {
  return (
    <nav className="hero-nav">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}



export default Header;
export { DesktopNav };




