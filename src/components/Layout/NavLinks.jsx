import React from 'react';
import './NavLinks.css';

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li className="dropdown-element"><a href="#home">Home</a></li>
      <li className="dropdown-element"><a href="#about">About</a></li>
      <li className="dropdown-element"><a href="#experience">Experience</a></li>
      <li className="dropdown-element"><a href="#skills">Skills</a></li>
      <li className="dropdown-element"><a href="#contact">Contact</a></li>
    </ul>
  );
};

export default NavLinks;
