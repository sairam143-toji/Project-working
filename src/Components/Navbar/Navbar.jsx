import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Nanamma Batter</div>
      
      <div className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#">Home</a>
        <div className="dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
          <button className="dropbtn"> Services</button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#">Web Development</a>
              <a href="#">Mobile Apps</a>
              <a href="#">Design</a>
            </div>
          )}
        </div>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div className="menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
