import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

function Navbar() {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#192459', // Updated to the requested darker blue color
    position: 'fixed',
    width: '100%',
    zIndex: 1000,
    height: '100px',
    boxSizing: 'border-box'
  };

  const logoContainerStyle = {
    flex: '1',
    display: 'flex',
    alignItems: 'center'
  };

  const logoStyle = {
    height: '70px',
    marginRight: '10px'
  };

  const logoTextStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#fff', // Changed to white for better visibility on blue background
    textDecoration: 'none'
  };

  const navLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '2',
    gap: '3.5rem',  // Increased from 2rem to 3.5rem for more spacing
  };

  const linkStyle = {
    color: '#fff', // Corrected to white for visibility on blue background
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '500',
    fontFamily: "'Raleway', sans-serif" // Explicitly setting Raleway font
  };

  const contactContainerStyle = {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-end'
  };

  const contactLinkStyle = {
    color: '#fff', // White font color
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '500',
    backgroundColor: '#3248b2',
    padding: '0.6rem 1.5rem',
    borderRadius: '24px',
    display: 'inline-block',
    fontFamily: "'Raleway', sans-serif"
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoContainerStyle}>
        <Link to="/" style={logoTextStyle}>
          <img src={logo} alt="IndoorNav Pro Logo" style={logoStyle} />
        </Link>
      </div>
      
      <div style={navLinksStyle}>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/projects" style={linkStyle}>Projects</Link>
      </div>
      
      <div style={contactContainerStyle}>
        <Link to="/contact" style={contactLinkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
