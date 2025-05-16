import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

// Custom Link component that scrolls to top on navigation
function Link({ to, style, children }) {
  const navigate = useNavigate();
  
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <RouterLink to={to} style={style} onClick={handleClick}>
      {children}
    </RouterLink>
  );
}

function Footer() {
  const footerStyle = {
    backgroundColor: '#192459', // Same color as navbar
    color: '#fff',
    padding: '4rem 2rem',
    position: 'relative'
  }
  
  const footerContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1400px',
    margin: '0 auto',
    gap: '3rem'
  }

  const topSectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '2rem'
  }

  const companyInfoStyle = {
    flex: '1',
    minWidth: '280px',
    maxWidth: '500px'
  }

  const logoStyle = {
    height: '50px',
    marginBottom: '1.5rem',
    filter: 'brightness(0) invert(0.8)' // This makes the logo light gray (80% white)
  }

  const companyDescStyle = {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#adbddf',
    marginBottom: '2rem',
    fontFamily: "'Raleway', sans-serif",
  }

  const contactItemStyle = {
    display: 'block',
    color: '#fff',
    marginBottom: '1rem',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '1rem',
    textDecoration: 'none'
  }

  const navSectionStyle = {
    flex: '1',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '2rem',
    minWidth: '280px'
  }
  
  const navColumnStyle = {
    minWidth: '140px'
  }
  
  const navHeaderStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    fontFamily: "'Raleway', sans-serif",
    color: '#fff'
  }
  
  const navLinkStyle = {
    display: 'block',
    color: '#adbddf',
    marginBottom: '1rem',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.95rem',
    textDecoration: 'none',
    transition: '0.3s'
  }

  const dividerStyle = {
    width: '100%',
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  }

  const bottomSectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem'
  }

  const copyrightStyle = {
    color: '#adbddf',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.95rem'
  }

  const socialLinksStyle = {
    display: 'flex',
    gap: '1rem'
  }

  const socialIconStyle = {
    width: '36px',
    height: '36px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    textDecoration: 'none',
    transition: 'background-color 0.3s'
  }

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <div style={topSectionStyle}>
          {/* Company Info Section */}
          <div style={companyInfoStyle}>
            <Link to="/">
              <img src={logo} alt="IndoorNav Pro Logo" style={logoStyle} />
            </Link>
            <p style={companyDescStyle}>
              IndoorNav Pro is a full-service software development agency committed to bringing small and medium-sized business visions to life. From custom web platforms to enterprise software, we combine technical expertise with a personalized approach.
            </p>
            <a href="mailto:hello@indoornav.pro" style={contactItemStyle}>hello@indoornav.pro</a>
            <a href="tel:+12679812946" style={contactItemStyle}>1-267-981-2946</a>
            <p style={{...contactItemStyle, marginBottom: '0'}}>Warminster, PA</p>
          </div>

          {/* Navigation Links Section */}
          <div style={navSectionStyle}>
            {/* Company Navigation Column */}
            <div style={navColumnStyle}>
              <h3 style={navHeaderStyle}>Company</h3>
              <Link to="/about" style={navLinkStyle}>About</Link>
              <Link to="/services" style={navLinkStyle}>Services</Link>
              <Link to="/projects" style={navLinkStyle}>Projects</Link>
              <Link to="/contact" style={navLinkStyle}>Contact</Link>
            </div>

            {/* Services Navigation Column */}
            <div style={navColumnStyle}>
              <h3 style={navHeaderStyle}>Services</h3>
              <Link to="/services" style={navLinkStyle}>Software Development</Link>
              <Link to="/services" style={navLinkStyle}>Artificial Intelligence</Link>
              <Link to="/services" style={navLinkStyle}>Location Technology</Link>
              <Link to="/services" style={navLinkStyle}>Mobile Solutions</Link>
            </div>
          </div>
        </div>

        <div style={dividerStyle}></div>

        <div style={bottomSectionStyle}>
          <p style={copyrightStyle}>
            © 2024{new Date().getFullYear() > 2024 ? `-${new Date().getFullYear()}` : ''} IndoorNav Pro. All Rights Reserved.
          </p>
          <div style={socialLinksStyle}>
            <a href="www.linkedin.com/in/sean-berndlmaier-4376b429a" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>in</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
