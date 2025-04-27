import React from 'react';
import Navbar from '../components/Navbar';
import landingVideo from '../assets/videos/landing-video.mp4';
import aiVideo from '../assets/videos/artificial-intelligence.mp4';
import locationVideo from '../assets/videos/navigation.mp4';
import softwareVideo from '../assets/videos/software-development.mp4';
import mobileVideo from '../assets/videos/mobile-app.mp4';
import navpulseLogo from '../assets/images/navpulse-logo.png';
import zipattendLogo from '../assets/images/zipattend.png';
import navproPattern from '../assets/images/navpro-pattern.svg';
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
      
      {/* Case Studies Section */}
      <section style={{
        padding: '8rem 2rem',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
        flexWrap: 'wrap'
      }}>
        {/* Left Content - Text and Button */}
        <div style={{
          flex: '0.8', // Reduced from 1 to 0.8 to make it narrower
          minWidth: '250px', // Reduced from 300px to 250px
          textAlign: 'left',
          marginRight: '2rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '500',
            marginBottom: '1rem',
            fontFamily: "'Raleway', sans-serif",
            color: '#3248b2',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>Case Studies</h3>
          
          <h2 style={{
            fontSize: '2.8rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            fontFamily: "'Raleway', sans-serif",
            color: '#333',
            lineHeight: '1.2'
          }}>Our Success Stories</h2>
          
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: '#555',
            marginBottom: '2rem',
            fontFamily: "'Raleway', sans-serif",
            maxWidth: '550px'
          }}>
            From MVPs to full-scale digital transformations, we've done it all. Discover how our team has empowered businesses of every size and industry.
          </p>
          
          <Link to="/projects" style={{
            ...buttonStyle,
            display: 'inline-block',
            marginTop: '1rem'
          }}>
            More Projects
          </Link>
        </div>
        
        {/* Right Content - 2x2 Grid of Projects */}
        <div style={{
          flex: '1.2',
          minWidth: '350px',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.8rem',
          height: '100%'
        }}>
          {/* Project 1 - ZipAttend */}
          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <div style={{
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#e8eff7', // Lighter blue background from image
              height: '260px',
              position: 'relative',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem'
            }}>
              <img 
                src={zipattendLogo} 
                alt="ZipAttend" 
                style={{
                  maxHeight: '45%',
                  maxWidth: '70%',
                  objectFit: 'contain'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                textAlign: 'left'
              }}>
                <p style={{
                  color: '#333',
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '1rem',
                  fontWeight: '600',
                  margin: 0,
                  marginBottom: '3px'
                }}>
                  Attendance Tracking Web App
                </p>
                <p style={{
                  color: '#666',
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: '400',
                  margin: 0
                }}>
                  Salisbury University 
                </p>
              </div>
            </div>
          </Link>
          
          {/* Project 2 - navpulse */}
          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <div style={{
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#e8eff7', // Lighter blue background from image
              height: '260px',
              position: 'relative',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem'
            }}>
              <img 
                src={navpulseLogo} 
                alt="navpulse" 
                style={{
                  maxHeight: '45%',
                  maxWidth: '70%',
                  objectFit: 'contain'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                textAlign: 'left'
              }}>
                <p style={{
                  color: '#333',
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '1rem',
                  fontWeight: '600',
                  margin: 0,
                  marginBottom: '3px'
                }}>
                  Gamified Downtown Mobile App
                </p>
                <p style={{
                  color: '#666',
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: '400',
                  margin: 0
                }}>
                  Downtown Salisbury- Arts, Business and Culture Dept. 
                </p>
              </div>
            </div>
          </Link>
          
          {/* Project 3 - SU MAPS */}
          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <div style={{
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#e8eff7', // Lighter blue background from image
              height: '260px',
              position: 'relative',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem'
            }}>
              <h4 style={{
                color: '#333',
                fontFamily: "'Raleway', sans-serif",
                textAlign: 'center',
                padding: '0 1rem',
                fontSize: '1.8rem',
                fontWeight: '600'
              }}>SU MAPS</h4>
              <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                textAlign: 'left'
              }}>
                <p style={{
                  color: '#333',
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '1rem',
                  fontWeight: '600',
                  margin: 0,
                  marginBottom: '3px'
                }}>
                  MVP Development
                </p>
                <p style={{
                  color: '#666',
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: '400',
                  margin: 0
                }}>
                  Sean Berndlmaier
                </p>
              </div>
            </div>
          </Link>
          
          {/* Project 4 */}
          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <div style={{
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#e8eff7', // Lighter blue background from image
              height: '260px',
              position: 'relative',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem'
            }}>
              <h4 style={{
                color: '#333',
                fontFamily: "'Raleway', sans-serif",
                textAlign: 'center',
                padding: '0 1rem',
                fontSize: '1.8rem',
                fontWeight: '600'
              }}>Project 4</h4>
              <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                textAlign: 'left'
              }}>
                <p style={{
                  color: '#333',
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '1rem',
                  fontWeight: '600',
                  margin: 0,
                  marginBottom: '3px'
                }}>
                  What is it
                </p>
                <p style={{
                  color: '#666',
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: '400',
                  margin: 0
                }}>
                  For who
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{  // Added id="contact" for linking from navbar
        padding: '5rem 2rem',
        backgroundColor: '#0a192f', 
        backgroundImage: `url(${navproPattern})`, // Add the pattern as background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        position: 'relative'
      }}>
        {/* Add a semi-transparent overlay to improve text readability over the pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(10, 25, 47, 0.85)', // Semi-transparent dark blue overlay
          zIndex: 1
        }}></div>
        
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          maxWidth: '1400px',
          margin: '0 auto',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 2 // Place content above the overlay
        }}>
          {/* Left Column - Text */}
          <div style={{
            flex: '1',
            minWidth: '300px',
            marginRight: '2rem',
            marginBottom: '2rem'
          }}>
            <h2 style={{
              fontSize: '3.2rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              fontFamily: "'Raleway', sans-serif",
              lineHeight: '1.2'
            }}>Ready to<br />Transform Your<br />Business?</h2>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '2rem',
              fontFamily: "'Raleway', sans-serif",
              maxWidth: '550px',
              color: '#ccd6f6'
            }}>
              Schedule a consultation with our team to explore your ideas and project goals.
            </p>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '2rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: '2rem'
              }}>
                <button style={{  // Removed onClick handler
                  ...buttonStyle,
                  backgroundColor: '#3248b2',
                  marginRight: '1.5rem'
                }}
                
                >
                  BOOK A CALL
                </button>
                <span style={{
                  fontSize: '1.1rem',
                  fontFamily: "'Raleway', sans-serif",
                }}>OR</span>
              </div>
              <span style={{
                fontSize: '1.1rem',
                fontFamily: "'Raleway', sans-serif",
              }}>SEND US A MESSAGE</span>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div style={{
            flex: '1',
            minWidth: '300px'
          }}>
            <form style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%'
            }}>
              <input 
                type="text" 
                placeholder="Name" 
                style={{
                  padding: '1rem',
                  marginBottom: '1rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#fff',
                  fontSize: '1rem',
                  fontFamily: "'Raleway', sans-serif",
                  outline: 'none'
                }} 
              />
              
              <input 
                type="email" 
                placeholder="Email" 
                style={{
                  padding: '1rem',
                  marginBottom: '1rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#fff',
                  fontSize: '1rem',
                  fontFamily: "'Raleway', sans-serif",
                  outline: 'none'
                }} 
              />
              
              <input 
                type="text" 
                placeholder="Company" 
                style={{
                  padding: '1rem',
                  marginBottom: '1rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#fff',
                  fontSize: '1rem',
                  fontFamily: "'Raleway', sans-serif",
                  outline: 'none'
                }} 
              />
              
              <textarea 
                placeholder="Message" 
                rows="5" 
                style={{
                  padding: '1rem',
                  marginBottom: '1.5rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#fff',
                  fontSize: '1rem',
                  fontFamily: "'Raleway', sans-serif",
                  outline: 'none',
                  resize: 'none'
                }}
              ></textarea>
              
              <button 
                type="submit" 
                style={{
                  padding: '0.8rem 1.5rem',
                  backgroundColor: '#fff',
                  color: '#0a192f',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: '500',
                  marginTop: '1rem'
                }}
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
