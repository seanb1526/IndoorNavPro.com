import React from 'react';
import Navbar from '../components/Navbar';
import landingVideo from '../assets/videos/landing-video.mp4';

function LandingPage() {
  const heroStyle = {
    position: 'relative',
    padding: '0', // Remove padding to maximize space
    height: '100vh', // Use viewport height instead of minHeight
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    color: '#fff'
  }
  
  const heroContentStyle = {
    maxWidth: '800px',
    textAlign: 'left', // Left-aligned text
    position: 'relative',
    zIndex: 2,
    marginLeft: '10%', // Add some margin from the left edge
    marginTop: '8rem', // Increased margin to move content further down
  }
  
  const heroTitleStyle = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
    fontFamily: "'Raleway', sans-serif", // Changed to Raleway
    letterSpacing: '0.5px', // Slight letter spacing for modern look
  }
  
  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#3248b2',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    fontFamily: "'Raleway', sans-serif", // Changed to Raleway
    fontWeight: '500',
    letterSpacing: '0.5px',
  }
  
  const videoOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1
  }
  
  const videoBackgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
  
  const sectionStyle = {
    padding: '4rem 2rem',
    textAlign: 'center'
  }
  
  return (
    <div>
      <Navbar />
      <section style={heroStyle}>
        {/* Video background */}
        <div style={videoOverlayStyle}></div>
        <video 
          style={videoBackgroundStyle} 
          autoPlay 
          loop 
          muted
          playsInline>
          <source src={landingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div style={heroContentStyle}>
          <h1 style={heroTitleStyle}>Experts in <br></br> Location Software</h1>
          <a href="/contact" style={buttonStyle}>Get Started</a>
        </div>
      </section>
      
      <section style={sectionStyle}>
        <h2>Why Choose IndoorNav Pro?</h2>
        <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '2rem', flexWrap: 'wrap', gap: '2rem'}}>
          <div style={{flex: '1', minWidth: '250px', padding: '1rem'}}>
            <h3>Accuracy</h3>
            <p>Precise indoor positioning with accuracy down to 1 meter</p>
          </div>
          <div style={{flex: '1', minWidth: '250px', padding: '1rem'}}>
            <h3>Reliability</h3>
            <p>Works even in challenging environments with limited connectivity</p>
          </div>
          <div style={{flex: '1', minWidth: '250px', padding: '1rem'}}>
            <h3>Integration</h3>
            <p>Seamlessly integrates with your existing infrastructure</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
