import React from 'react';
import Navbar from '../components/Navbar';
import landingVideo from '../assets/videos/landing-video.mp4';
import aiVideo from '../assets/videos/artificial-intelligence.mp4';
import locationVideo from '../assets/videos/navigation.mp4';
import softwareVideo from '../assets/videos/software-development.mp4';
import mobileVideo from '../assets/videos/mobile-app.mp4'
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

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
  
  // Updated styles for Services Section
  const servicesSectionStyle = {
    padding: '8rem 2rem 5rem 2rem', // Increased top padding from 5rem to 8rem
    backgroundColor: '#f8f9fa',
    textAlign: 'center'
  };
  
  const sectionTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '3rem', // Increased bottom margin to give space after the title
    fontFamily: "'Raleway', sans-serif",
    color: '#333'
  };
  
  // Updated card container for horizontal layout with space for floating lines
  const cardContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '1.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
    overflowX: 'auto',
    padding: '0.5rem'
  };
  
  // Style for individual card wrapper to include floating line
  const cardWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    position: 'relative', // For absolute positioning of the line
    paddingTop: '35px' // Increased padding at the top for more space
  };
  
  // Style for the floating line above each card - updated positioning to be higher
  const floatingLineStyle = {
    width: '100%', // Full width of the card
    height: '3px',
    backgroundColor: '#3248b2',
    position: 'absolute',
    top: '0px' // Positioned at the very top of the wrapper
  };
  
  // Service cards data
  const serviceCards = [
    {
      video: softwareVideo,
      title: "Software Development",
      description: "Building something great? Let's bring your idea to life with custom software solutions."
    },
    {
      video: aiVideo,
      title: "Artificial Intelligence",
      description: "Exploring AI? We deliver smart solutions for complex problems."
    },
    {
      video: locationVideo,
      title: "Location Technology",
      description: "Need precise positioning? Our indoor navigation solutions provide unmatched accuracy."
    },
    {
      video: mobileVideo,
      title: "Mobile Solutions",
      description: "Going mobile? We build responsive applications that work on any device."
    }
  ];
  
  // Tech Stack Section Styles
  const techStackSectionStyle = {
    padding: '8rem 2rem 6rem 2rem', // Increased top padding from 6rem to 8rem
    backgroundColor: '#3248b2', // Same blue as navbar
    color: '#fff',
    textAlign: 'center'
  };
  
  const techStackTitleStyle = {
    fontSize: '1.75rem',
    fontWeight: '500',
    marginBottom: '1.5rem',
    fontFamily: "'Raleway', sans-serif",
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '2px'
  };
  
  const techStackHeadingStyle = {
    fontSize: '3rem',
    fontWeight: '600',
    marginBottom: '2rem',
    fontFamily: "'Raleway', sans-serif",
    color: '#fff',
    maxWidth: '800px',
    margin: '0 auto 2rem'
  };
  
  const techStackDescriptionStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: "'Raleway', sans-serif"
  };
  
  // Add ticker container and animation styles
  const tickerContainerStyle = {
    marginTop: '4rem',
    overflow: 'hidden',
    width: '100%'
  };
  
  const tickerRowStyle = {
    display: 'flex',
    whiteSpace: 'nowrap',
    margin: '1.5rem 0'
  };
  
  const tickerLeftToRightStyle = {
    animation: 'tickerLeftToRight 40s linear infinite', // Increased from 30s to 40s
    display: 'flex'
  };
  
  const tickerRightToLeftStyle = {
    animation: 'tickerRightToLeft 40s linear infinite', // Increased from 30s to 40s
    display: 'flex'
  };
  
  const techItemStyle = {
    padding: '0.75rem 2.5rem', // Increased padding for larger hit area
    margin: '0 1.5rem',       // Increased margin between items
    fontSize: '2rem',         // Increased font size from 1.5rem to 2rem
    fontWeight: '600',
    background: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '4px',
    display: 'inline-block',
    fontFamily: "'Raleway', sans-serif"
  };
  
  // Tech stack names for the ticker
  const techStackRowOne = [
    'React', 'Angular', 'Vue.js', 'Node.js', 'Express', 
    'MongoDB', 'Firebase', 'AWS', 'Docker',
    'GraphQL', 'Redux', 'Next.js', 'Material UI'
  ];
  
  const techStackRowTwo = [
    'Python', 'Django', 'Flask', 'PostgreSQL', 'MySQL', 
    'Swift', 'Kotlin', 'React Native',
    'Flutter', 'Java', 'Figma', 'Javascript', 'TypeScript'
  ];
  
  return (
    <div>
      {/* Add style tag for animations */}
      <style>
        {`
          @keyframes tickerLeftToRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          
          @keyframes tickerRightToLeft {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
      
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
      
      {/* Services Section with floating lines above cards */}
      <section style={servicesSectionStyle}>
        <h2 style={sectionTitleStyle}>Our Diverse Expertise</h2>
        
        <div style={cardContainerStyle}>
          {serviceCards.map((card, index) => (
            <div key={index} style={cardWrapperStyle}>
              {/* Floating line above card */}
              <div style={floatingLineStyle}></div>
              
              <ServiceCard
                image={card.image}
                video={card.video}
                title={card.title}
                description={card.description}
                linkTo="/services"
              />
            </div>
          ))}
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section style={techStackSectionStyle}>
        <h3 style={techStackTitleStyle}>Our Tech Stack</h3>
        <h2 style={techStackHeadingStyle}>Harnessing the Power of Technology</h2>
        <p style={techStackDescriptionStyle}>
          Our team leverages the latest tools and technologies to build robust and scalable solutions.
        </p>
        
        {/* Tech Stack Ticker */}
        <div style={tickerContainerStyle}>
          {/* First row - Left to Right */}
          <div style={tickerRowStyle}>
            <div style={{...tickerLeftToRightStyle}}>
              {/* Duplicate the items to ensure continuous scroll */}
              {[...techStackRowOne, ...techStackRowOne].map((tech, index) => (
                <div key={index} style={techItemStyle}>{tech}</div>
              ))}
            </div>
          </div>
          
          {/* Second row - Right to Left */}
          <div style={tickerRowStyle}>
            <div style={{...tickerRightToLeftStyle}}>
              {/* Duplicate the items to ensure continuous scroll */}
              {[...techStackRowTwo, ...techStackRowTwo].map((tech, index) => (
                <div key={index} style={techItemStyle}>{tech}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
