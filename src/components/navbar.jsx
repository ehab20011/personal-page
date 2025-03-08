import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Home, Briefcase, Code, Award, Trello, Menu, X } from 'react-feather';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`header ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
      <div className="header__logo">
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </div>
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        {isOpen ? <X /> : <Menu />}
      </button>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link to="/" className="navbar__link" onClick={() => setIsOpen(false)}>
              <Home />
              <span>Home</span>
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/ansys" className="navbar__link" onClick={() => setIsOpen(false)}>
              <Briefcase />
              <span>Ansys</span>
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/mobot" className="navbar__link" onClick={() => setIsOpen(false)}>
              <Trello />
              <span>Mobot</span>
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/projects" className="navbar__link" onClick={() => setIsOpen(false)}>
              <Code />
              <span>Projects</span>
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/hackathons" className="navbar__link" onClick={() => setIsOpen(false)}>
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
