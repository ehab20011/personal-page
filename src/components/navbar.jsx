import React from 'react';
import './navbar.css';
import { Home, Folder } from 'react-feather';

const Navbar = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </div>
      <nav className="navbar">
        <ul className="navbar__menu">
            <a href="#home" className="navbar__link">
              <Home />
              <span>Ansys</span>
            </a>
          <li className="navbar__item">
            <a href="#projects" className="navbar__link">
              <Folder />
              <span>Projects</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
