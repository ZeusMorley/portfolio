import React from 'react';
import './Footer.css';
import {FiChevronUp} from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__text">
                    <span className="footer__title--first">Zeus</span>
                    <span className="footer__title--second">Morley</span>
                </p>
            </div>
        </footer>
    );
  };
  
  export default Footer;