import React from 'react';
import { Link } from 'react-router-dom';
import navproPattern from '../../assets/images/navpro-pattern.svg';
import navpulseLogo from '../../assets/images/navpulse-logo.png';

function NavPulseProject() {
  // Page container style
  const pageContainerStyle = {
    backgroundColor: '#fff',
  };

  // Hero section - full-width image header
  const heroSectionStyle = {
    width: '100%',
    height: '70vh',
    position: 'relative',
    backgroundImage: 'url(https://placehold.co/1920x1080?text=NavPulse+Hero)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'flex-end',
  };

  const heroOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)',
  };

  const heroContentStyle = {
    width: '100%',
    padding: '3rem 5%',
    position: 'relative',
    zIndex: 2,
  };

  const heroBreadcrumbStyle = {
    fontSize: '1rem',
    color: '#e0e0e0',
    fontFamily: "Raleway, sans-serif",
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
  };

  const breadcrumbLinkStyle = {
    color: '#e0e0e0',
    textDecoration: 'none',
    marginRight: '0.5rem',
  };

  const heroTitleStyle = {
    fontSize: '3.5rem',
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: "Raleway, sans-serif",
    marginBottom: '1rem',
  };

  const heroSubtitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '400',
    color: '#e0e0e0',
    fontFamily: "Raleway, sans-serif",
    maxWidth: '800px',
  };

  // Project intro section
  const introSectionStyle = {
    display: 'grid',
    gridTemplateColumns: 'minmax(300px, 1fr) 2fr',
    gap: '3rem',
    padding: '5rem 5%',
    maxWidth: '1400px',
    margin: '0 auto',
  };

  const projectMetaStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  };

  const metaBlockStyle = {
    borderBottom: '1px solid #eaeaea',
    paddingBottom: '1.5rem',
  };

  const metaLabelStyle = {
    fontSize: '0.9rem',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '0.5rem',
    fontFamily: "Raleway, sans-serif",
  };

  const metaValueStyle = {
    fontSize: '1.1rem',
    color: '#333',
    fontFamily: "Raleway, sans-serif",
    fontWeight: '500',
  };

  const projectDescriptionStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#444',
    fontFamily: "Raleway, sans-serif",
  };

  // Content sections
  const contentSectionStyle = {
    padding: '5rem 5%',
    maxWidth: '1400px',
    margin: '0 auto',
  };

  const sectionTitleStyle = {
    fontSize: '2.2rem',
    fontWeight: '600',
    marginBottom: '2rem',
    color: '#192459',
    fontFamily: "Raleway, sans-serif",
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#444',
    marginBottom: '2rem',
    fontFamily: "Raleway, sans-serif",
    maxWidth: '900px',
  };

  // Full-width image section
  const imageFullWidthStyle = {
    width: '100%',
    height: 'auto',
    marginBottom: '5rem',
  };

  // Features section styles
  const featuresSectionStyle = {
    padding: '5rem 5%',
    backgroundColor: '#f8f9fa',
  };

  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '2rem',
    maxWidth: '1400px',
    margin: '3rem auto 0',
  };

  const featureCardStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '2rem',
    boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
  };

  const featureTitleStyle = {
    fontSize: '1.4rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#192459',
    fontFamily: "Raleway, sans-serif",
  };

  const featureDescriptionStyle = {
    fontSize: '1.05rem',
    color: '#444',
    lineHeight: '1.6',
    fontFamily: "Raleway, sans-serif",
  };

  // Results section
  const resultsSectionStyle = {
    padding: '5rem 5%',
    maxWidth: '1400px',
    margin: '0 auto',
  };

  // Stats section styles
  const statsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  };

  const statItemStyle = {
    textAlign: 'left',
    borderLeft: '3px solid #3248b2',
    paddingLeft: '1.5rem',
  };

  const statNumberStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#192459',
    fontFamily: "Raleway, sans-serif",
    marginBottom: '0.5rem',
  };

  const statLabelStyle = {
    fontSize: '1.1rem',
    fontWeight: '400',
    color: '#555',
    fontFamily: "Raleway, sans-serif",
  };

  // Tech stack section
  const techStackStyle = {
    padding: '5rem 5%',
    maxWidth: '1400px',
    margin: '0 auto',
  };

  const techListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    marginTop: '2rem',
  };

  const techItemStyle = {
    backgroundColor: '#e8eff7',
    color: '#192459',
    fontFamily: "Raleway, sans-serif",
    fontSize: '1rem',
    fontWeight: '500',
    padding: '0.7rem 1.5rem',
    borderRadius: '30px',
  };

  // Next project section
  const nextProjectStyle = {
    padding: '5rem 5%',
    backgroundColor: '#0a192f',
    color: '#fff',
    textAlign: 'center',
  };

  const nextProjectContentStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
  };

  const nextProjectTitleStyle = {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    fontFamily: "Raleway, sans-serif",
    color: '#fff',
  };

  const nextProjectLinkStyle = {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    marginTop: '2rem',
    fontFamily: "Raleway, sans-serif",
    transition: 'color 0.3s ease',
  };

  return (
    <div style={pageContainerStyle}>
      {/* Hero Section - Full-width image */}
      <section style={heroSectionStyle}>
        <div style={heroOverlayStyle}></div>
        <div style={heroContentStyle}>
          <div style={heroBreadcrumbStyle}>
            <Link to="/projects" style={breadcrumbLinkStyle}>Projects</Link> / NavPulse
          </div>
          <h1 style={heroTitleStyle}>NavPulse</h1>
          <p style={heroSubtitleStyle}>A gamified downtown exploration app for Salisbury</p>
        </div>
      </section>

      {/* Project Intro Section */}
      <section style={introSectionStyle}>
        <div style={projectMetaStyle}>
          <div style={metaBlockStyle}>
            <h3 style={metaLabelStyle}>Client</h3>
            <p style={metaValueStyle}>Downtown Salisbury - Arts, Business and Culture Dept.</p>
          </div>
          <div style={metaBlockStyle}>
            <h3 style={metaLabelStyle}>Year</h3>
            <p style={metaValueStyle}>2023</p>
          </div>
          <div style={metaBlockStyle}>
            <h3 style={metaLabelStyle}>Duration</h3>
            <p style={metaValueStyle}>6 months</p>
          </div>
          <div style={metaBlockStyle}>
            <h3 style={metaLabelStyle}>Platform</h3>
            <p style={metaValueStyle}>iOS & Android</p>
          </div>
          <div style={{...metaBlockStyle, borderBottom: 'none'}}>
            <h3 style={metaLabelStyle}>Categories</h3>
            <p style={metaValueStyle}>Mobile Application, Location Technology, Gamification</p>
          </div>
        </div>
        
        <div style={projectDescriptionStyle}>
          <p style={{marginBottom: '2rem'}}>
            NavPulse is a gamified downtown exploration app developed for the Arts, Business and Culture Department 
            of Downtown Salisbury. The app encourages visitors and locals to discover local businesses, historical 
            landmarks, and cultural attractions through a rewarding, game-like experience.
          </p>
          <p>
            Users earn points by visiting various locations throughout downtown, unlocking achievements, and 
            participating in seasonal events. These points can be redeemed for discounts and special offers at 
            participating businesses, creating a mutually beneficial ecosystem for the downtown economy.
          </p>
        </div>
      </section>

      {/* Full-width image section */}
      <img 
        src="https://placehold.co/1920x1080?text=NavPulse+App+Interface" 
        alt="NavPulse App Interface" 
        style={imageFullWidthStyle} 
      />

      {/* App Features Section */}
      <section style={featuresSectionStyle}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <h2 style={sectionTitleStyle}>Key Features</h2>
          <p style={paragraphStyle}>
            NavPulse combines several technologies to create an engaging and useful downtown exploration 
            experience. Here are some of the key features that make it special:
          </p>
          
          <div style={featuresGridStyle}>
            <div style={featureCardStyle}>
              <h3 style={featureTitleStyle}>Geofencing Technology</h3>
              <p style={featureDescriptionStyle}>
                Accurately detects when users visit specific locations using geofencing and Bluetooth beacons.
              </p>
            </div>
            <div style={featureCardStyle}>
              <h3 style={featureTitleStyle}>Achievement System</h3>
              <p style={featureDescriptionStyle}>
                Rewards users with badges and points for discovering new locations and completing challenges.
              </p>
            </div>
            <div style={featureCardStyle}>
              <h3 style={featureTitleStyle}>Local Events Calendar</h3>
              <p style={featureDescriptionStyle}>
                Keeps users informed about upcoming events and activities in downtown Salisbury.
              </p>
            </div>
            <div style={featureCardStyle}>
              <h3 style={featureTitleStyle}>Business Directory</h3>
              <p style={featureDescriptionStyle}>
                Comprehensive listing of local businesses with details, hours, and special offers.
              </p>
            </div>
            <div style={featureCardStyle}>
              <h3 style={featureTitleStyle}>Augmented Reality</h3>
              <p style={featureDescriptionStyle}>
                Interactive AR experiences at historical landmarks and points of interest.
              </p>
            </div>
            <div style={featureCardStyle}>
              <h3 style={featureTitleStyle}>Reward Marketplace</h3>
              <p style={featureDescriptionStyle}>
                Platform for users to redeem earned points for discounts and special offers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image section */}
      <img 
        src="https://placehold.co/1920x1080?text=NavPulse+Map+Feature" 
        alt="NavPulse Map Feature" 
        style={imageFullWidthStyle} 
      />

      {/* Results Section */}
      <section style={resultsSectionStyle}>
        <h2 style={sectionTitleStyle}>Results & Impact</h2>
        <p style={paragraphStyle}>
          NavPulse has made a significant impact on downtown Salisbury's business community and visitor 
          engagement. The app has helped drive foot traffic to local businesses and increased participation 
          in downtown events.
        </p>
        
        <div style={statsContainerStyle}>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>3,000+</div>
            <p style={statLabelStyle}>App downloads in the first three months</p>
          </div>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>68%</div>
            <p style={statLabelStyle}>Weekly active users</p>
          </div>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>24%</div>
            <p style={statLabelStyle}>Increase in business foot traffic</p>
          </div>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>35%</div>
            <p style={statLabelStyle}>Increase in event attendance</p>
          </div>
        </div>
        
        <p style={{...paragraphStyle, marginTop: '3rem'}}>
          The gamification elements proved particularly effective, with users visiting an average of 7 new 
          businesses after downloading the app. The Arts, Business and Culture Department has since expanded 
          the app's scope to include seasonal campaigns and partnerships with local festivals and universities.
        </p>
      </section>

      {/* Tech Stack */}
      <section style={techStackStyle}>
        <h2 style={sectionTitleStyle}>Technologies Used</h2>
        <div style={techListStyle}>
          <span style={techItemStyle}>React Native</span>
          <span style={techItemStyle}>Node.js</span>
          <span style={techItemStyle}>Express</span>
          <span style={techItemStyle}>MongoDB</span>
          <span style={techItemStyle}>AWS Lambda</span>
          <span style={techItemStyle}>Geolocation API</span>
          <span style={techItemStyle}>Bluetooth Beacons</span>
          <span style={techItemStyle}>AR Kit / AR Core</span>
        </div>
      </section>

      {/* Next Project Section */}
      <section style={nextProjectStyle}>
        <div style={nextProjectContentStyle}>
          <p style={{fontSize: '1.2rem', opacity: '0.8', marginBottom: '0.5rem'}}>Next Project</p>
          <h2 style={nextProjectTitleStyle}>Explore another project</h2>
          <Link to="/projects/sumaps" style={nextProjectLinkStyle}>
            SU MAPS: Indoor Navigation System →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NavPulseProject;
