import React from 'react';
import './Scroll.css';
import { FaChevronDown } from 'react-icons/fa';

export default function Scroll ({ to }) {
  const handleClick = () => {
    const target = document.getElementById(to);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth'});
      } 
  };

  return (
    <div className="scroll-container">
        <div className="scroll-button"
          onClick={handleClick}
        >
            <div className="scroll-word">
                <p>Scroll Down</p>
            </div>
            <div className="scroll-arrow">
                <FaChevronDown />
            </div>
        </div>
    </div>
  );
}
