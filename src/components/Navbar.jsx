import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import '../styles/navbar.css'; // Add this import for the CSS

function Navbar() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Call once on mount to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Set background color explicitly with rgba and 0 alpha for true transparency
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: isLandingPage && !scrolled ? 'rgba(0, 0, 0, 0)' : '#192459',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    height: '100px',
    boxSizing: 'border-box',
    transition: 'background-color 0.3s ease',
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

  const whiteSvgStyle = {
    ...logoStyle,
    filter: 'brightness(0) invert(1)' // This makes any colored SVG white
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
          <img src={logo} alt="IndoorNav Pro Logo" style={whiteSvgStyle} />
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
