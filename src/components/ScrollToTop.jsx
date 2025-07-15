import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';
import {FiChevronUp} from 'react-icons/fi';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const ScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    }
    return (
    <FiChevronUp
        className={`scroll-to-top-btn${isVisible ? ' isVisible' : ''}`}
        onClick={ScrollTop}
    />
  );
};

export default ScrollToTop;
