import React from 'react';
import './navbar.css';
import { Home, Briefcase, Code, Award } from 'react-feather';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </div>
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link to="/" className="navbar__link">
              <Home />
              <span>Home</span>
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/ansys" className="navbar__link">
              <Briefcase />
              <span>Ansys</span>
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/projects" className="navbar__link">
              <Code />
              <span>Projects</span>
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/hackathons" className="navbar__link">
              <Award />
              <span>Hackathons</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
