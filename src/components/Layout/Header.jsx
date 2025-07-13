import React, {useState} from 'react';
import './Header.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import NavLinks from './NavLinks';


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }
  
  return (
    <>
    <header className="header">
      <div className="container">
        <h2 className="header__title">
          <span className="header__title--first">Zeus</span>
          <span className="header__title--second">Morley</span>
        </h2>
        <nav className="nav-desktop">
          <NavLinks />
        </nav>

        {isDropdownOpen && (
          <div className="dropdown">
            <NavLinks /> 
            {/* <button className="dropdown__close" onClick={toggleDropdown}>
              <FiChevronUp size={28} />
            </button> */}
          </div>
        )}

        <label htmlFor="dropdown-toggle" className="header__hamburger">
        <GiHamburgerMenu 
          className='header__hamburger' 
          onClick={toggleDropdown}
        />
        </label>
      </div>
    </header>
      
    </>
  );
};

export default Header;