import React from 'react';
import './Scroll.css';
import { FaChevronDown } from 'react-icons/fa';

const Scroll = () => {
  return (
    <div className="scroll-container">
        <div className="scroll-button">
            <div className="scroll-word">
                <p>Scroll Down</p>
            </div>
            <div className="scroll-arrow">
                <FaChevronDown />
            </div>
        </div>
    </div>
  );
};

export default Scroll;
