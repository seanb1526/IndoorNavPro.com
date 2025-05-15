import React from 'react';
import { Link } from 'react-router-dom';
import navproPattern from '../../assets/images/navpro-pattern.svg';
// Use the same image imports as ZipAttendProject for now
import navpulseHero from '../../assets/proj/NavPulse/NavPulse-Hero.png'; // Changed from zipattendHero
import zipattendDashboard from '../../assets/proj/ZipAttend/ZipAttend-Dashboard.jpg';
import zipattendMobileVideo from '../../assets/proj/ZipAttend/ZipAttend-Mobilec.mp4';

function NavPulseProject() {
  // Page container style
  const pageContainerStyle = {
    backgroundColor: '#fff',
    paddingTop: '100px', // Add padding to account for navbar height
  };

  // Hero section styles
  const heroSectionStyle = {
    width: '100%',
    position: 'relative',
    backgroundColor: '#f6f8fa',
    display: 'flex',
    flexDirection: 'column',
    padding: '4rem 0',
  };

  const heroBreadcrumbStyle = {
    fontSize: '1rem',
    color: '#777',
    fontFamily: "'Raleway', sans-serif",
    marginBottom: '2rem',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10%',
  };

  const breadcrumbLinkStyle = {
    color: '#777',
    textDecoration: 'none',
    marginRight: '0.5rem',
    transition: 'color 0.2s ease',
  };

  const heroContentContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 5%',
  };

  const heroContentLeftStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const heroTitleStyle = {
    fontSize: '4.5rem',
    fontWeight: '700',
    color: '#192459',
    fontFamily: "'Raleway', sans-serif",
    marginBottom: '1.5rem',
    lineHeight: '1.1',
  };

  const heroSubtitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '400',
    color: '#555',
    fontFamily: "'Raleway', sans-serif",
    marginBottom: '2.5rem',
    lineHeight: '1.6',
  };

  const heroImageStyle = {
    width: '100%',
    borderRadius: '8px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
  };
  
  // Project meta section
  const metaSectionStyle = {
    backgroundColor: '#fff',
    padding: '6rem 5%',
    borderBottom: '1px solid #eaeaea',
  };
  
  const metaContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '3rem',
    maxWidth: '1400px',
    margin: '0 auto',
  };
  
  const metaBlockStyle = {
    display: 'flex',
    flexDirection: 'column',
  };
  
  const metaLabelStyle = {
    fontSize: '0.9rem',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '0.8rem',
    fontFamily: "'Raleway', sans-serif",
  };
  
  const metaValueStyle = {
    fontSize: '1.2rem',
    color: '#333',
    fontFamily: "'Raleway', sans-serif",
    fontWeight: '500',
  };

  // Project description section
  const descriptionSectionStyle = {
    padding: '6rem 5%',
    backgroundColor: '#fff',
    borderBottom: '1px solid #eaeaea',
  };

  const descriptionContainerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
  };
  
  const descriptionTextStyle = {
    fontSize: '1.3rem',
    lineHeight: '1.8',
    color: '#444',
    fontFamily: "'Raleway', sans-serif",
  };
  
  // Dashboard image section
  const imageFullWidthContainerStyle = {
    padding: '6rem 5%',
    backgroundColor: '#f6f8fa',
    borderBottom: '1px solid #eaeaea',
  };
  
  const imageFullWidthStyle = {
    width: '90%',
    maxWidth: '1200px',
    height: 'auto',
    margin: '0 auto',
    display: 'block',
    borderRadius: '8px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
  };

  // Features section
  const featuresSectionStyle = {
    padding: '6rem 5%',
    backgroundColor: '#fff',
    borderBottom: '1px solid #eaeaea',
  };
  
  const featuresContainerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
  };
  
  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '2rem',
    marginTop: '4rem',
  };

  const featureCardStyle = {
    backgroundColor: '#f6f8fa',
    borderRadius: '8px',
    padding: '2.5rem',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const featureTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1.2rem',
    color: '#192459',
    fontFamily: "'Raleway', sans-serif",
  };

  const featureDescriptionStyle = {
    fontSize: '1.05rem',
    color: '#444',
    lineHeight: '1.6',
    fontFamily: "'Raleway', sans-serif",
  };

  // Video section
  const videoSectionStyle = {
    padding: '6rem 5%',
    backgroundColor: '#f6f8fa',
    borderBottom: '1px solid #eaeaea',
  };
  
  const videoContainerStyle = {
    maxWidth: '1200px',
    width: '90%',
    margin: '0 auto',
  };
  
  const videoStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
  };
  
  const videoTitleStyle = {
    fontSize: '2.2rem',
    fontWeight: '600',
    marginBottom: '3rem',
    color: '#192459',
    fontFamily: "'Raleway', sans-serif",
    textAlign: 'center',
  };

  // Results section with stats
  const resultsSectionStyle = {
    padding: '6rem 5%',
    backgroundColor: '#fff',
    borderBottom: '1px solid #eaeaea',
  };
  
  const resultsContainerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
  };

  const statsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '3rem',
    marginTop: '4rem',
  };

  const statItemStyle = {
    padding: '2rem',
    borderRadius: '8px',
    backgroundColor: '#f6f8fa',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const statNumberStyle = {
    fontSize: '3.5rem',
    fontWeight: '700',
    color: '#192459',
    fontFamily: "'Raleway', sans-serif",
    marginBottom: '1rem',
  };

  const statLabelStyle = {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#555',
    fontFamily: "Raleway, sans-serif",
    textAlign: 'center',
  };

  // Tech stack section
  const techStackSectionStyle = {
    padding: '6rem 5%',
    backgroundColor: '#f6f8fa',
    borderBottom: '1px solid #eaeaea',
  };
  
  const techStackContainerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
  };

  const techListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    marginTop: '3rem',
    justifyContent: 'center',
  };

  const techItemStyle = {
    backgroundColor: '#fff',
    color: '#192459',
    fontFamily: "Raleway, sans-serif",
    fontSize: '1rem',
    fontWeight: '500',
    padding: '0.8rem 1.8rem',
    borderRadius: '30px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  };

  // Next project section
  const nextProjectSectionStyle = {
    padding: '8rem 5%',
    backgroundColor: '#0a192f',
    color: '#fff',
    textAlign: 'center',
  };

  const nextProjectContentStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
  };

  const nextProjectTitleStyle = {
    fontSize: '2.2rem',
    fontWeight: '600',
    marginBottom: '2rem',
    fontFamily: "'Raleway', sans-serif",
    color: '#fff',
  };

  const nextProjectLinkStyle = {
    fontSize: '2.8rem',
    fontWeight: '700',
    color: '#fff',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '1rem',
    fontFamily: "'Raleway', sans-serif",
    transition: 'opacity 0.3s ease',
    position: 'relative',
    paddingBottom: '0.5rem',
  };

  // Add missing sectionTitleStyle that's referenced later
  const sectionTitleStyle = {
    fontSize: '2.2rem',
    fontWeight: '600',
    marginBottom: '2rem',
    color: '#192459',
    fontFamily: "'Raleway', sans-serif",
  };

  return (
    <div style={pageContainerStyle}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={heroBreadcrumbStyle}>
          <Link to="/projects" style={breadcrumbLinkStyle}>Projects</Link> / NavPulse
        </div>
        <div style={heroContentContainerStyle}>
          <div style={heroContentLeftStyle}>
            <h1 style={heroTitleStyle}>NavPulse</h1>
            <p style={heroSubtitleStyle}>
              A gamified exploration app that drives engagement and foot traffic in Downtown Salisbury.
            </p>
          </div>
          <div>
            <img 
              src={navpulseHero} // Changed from zipattendHero to navpulseHero
              alt="NavPulse Application" 
              style={heroImageStyle} 
            />
          </div>
        </div>
      </section>

      {/* Project Meta Section */}
      <section style={metaSectionStyle}>
        <div style={metaContainerStyle}>
          <div style={metaBlockStyle}>
            <h3 style={metaLabelStyle}>Client</h3>
            <p style={metaValueStyle}>Downtown Salisbury Arts, Business and Culture Department</p>
          </div>
          <div style={metaBlockStyle}>
            <h3 style={metaLabelStyle}>Year</h3>
            <p style={metaValueStyle}>2025</p>
          </div>
          <div style={metaBlockStyle}>
            <h3 style={metaLabelStyle}>Duration</h3>
            <p style={metaValueStyle}>3 months</p>
          </div>
          <div style={metaBlockStyle}>
            <h3 style={metaLabelStyle}>Categories</h3>
            <p style={metaValueStyle}>Mobile Application, Location Technology, Gamification</p>
          </div>
        </div>
      </section>
      
      {/* Project Description Section */}
      <section style={descriptionSectionStyle}>
        <div style={descriptionContainerStyle}>
          <p style={descriptionTextStyle}>
            NavPulse is a gamified downtown exploration app developed for the Arts, Business and Culture Department 
            of Downtown Salisbury. The app encourages users to explore and visit storefronts through a rewarding, game-like experience.
          </p>
          <p style={{...descriptionTextStyle, marginTop: '1.5rem'}}>
            Users earn in-game coins by visiting participating storefronts and scanning the corresponding BLE beacon. You can scan each store once per day.
            Save up your coins and redeem them for discounts and special offers exclusively available on the app. 
          </p>
        </div>
      </section>
      
      {/* Dashboard Image Section */}
      <section style={imageFullWidthContainerStyle}>
        <img 
          src={zipattendDashboard} // Using ZipAttend dashboard image temporarily
          alt="NavPulse App Interface" 
          style={imageFullWidthStyle} 
        />
      </section>

      {/* Key Features Section */}
      <section style={featuresSectionStyle}>
        <div style={featuresContainerStyle}>
          <h2 style={{...sectionTitleStyle, textAlign: 'center'}}>Key Features</h2>
          <p style={{fontSize: '1.15rem', lineHeight: '1.8', color: '#444', marginBottom: '2rem', fontFamily: "Raleway, sans-serif", textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto'}}>
            NavPulse leverages location technology in innovative ways to connect users with downtown businesses.
          </p>
          
          <div style={featuresGridStyle}>
            <div style={featureCardStyle}>
              <h3 style={featureTitleStyle}>Smart Beacon Technology</h3>
              <p style={featureDescriptionStyle}>
                BLE beacons deliver localized proximity advertising when scanned, showing users store-specific 
                promotional content while earning in-game currency.
              </p>
            </div>
            <div style={featureCardStyle}>
              <h3 style={featureTitleStyle}>Digital Rewards</h3>
              <p style={featureDescriptionStyle}>
                Users collect in-app currency by visiting participating locations, redeemable for exclusive offers and discounts.
              </p>
            </div>
            <div style={featureCardStyle}>
              <h3 style={featureTitleStyle}>Business Directory</h3>
              <p style={featureDescriptionStyle}>
                Easy-to-browse listing of participating downtown businesses with essential information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Interface Video */}
      <section style={videoSectionStyle}>
        <div style={videoContainerStyle}>
          <h2 style={videoTitleStyle}>See NavPulse in Action</h2>
          <video 
            src={zipattendMobileVideo} // Using ZipAttend video temporarily
            controls
            playsInline
            style={videoStyle}
            poster={navpulseHero} // Changed from zipattendHero to navpulseHero
            aria-label="NavPulse Mobile Interface Demo"
          />
        </div>
      </section>

      {/* Results Section */}
      <section style={resultsSectionStyle}>
        <div style={resultsContainerStyle}>
          <h2 style={{...sectionTitleStyle, textAlign: 'center'}}>Results & Impact</h2>
          <p style={{fontSize: '1.15rem', lineHeight: '1.8', color: '#444', marginBottom: '2rem', fontFamily: "Raleway, sans-serif", textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem auto'}}>
            NavPulse was deployed as a three-month beta test from February to May 2025, providing valuable insights 
            into user engagement patterns and technical performance in real-world conditions.
          </p>
          
          <div style={statsContainerStyle}>
            <div style={statItemStyle}>
              <div style={statNumberStyle}>90</div>
              <p style={statLabelStyle}>App downloads during beta period</p>
            </div>
            <div style={statItemStyle}>
              <div style={statNumberStyle}>10</div>
              <p style={statLabelStyle}>Businesses participated</p>
            </div>
            <div style={statItemStyle}>
              <div style={statNumberStyle}>3</div>
              <p style={statLabelStyle}>Month beta test</p>
            </div>
            <div style={statItemStyle}>
              <div style={statNumberStyle}>24/7</div>
              <p style={statLabelStyle}>System availability</p>
            </div>
          </div>
          
          <p style={{fontSize: '1.15rem', lineHeight: '1.8', color: '#444', fontFamily: "Raleway, sans-serif", textAlign: 'center', maxWidth: '800px', margin: '3rem auto 0 auto'}}>
            The winter beta test provided valuable learning opportunities about deployment challenges and user engagement patterns. 
            The project concluded at the end of the scheduled beta period, with insights gained about 
            seasonal impacts on downtown foot traffic and the technical requirements for proximity-based marketing solutions.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={techStackSectionStyle}>
        <div style={techStackContainerStyle}>
          <h2 style={{...sectionTitleStyle, textAlign: 'center'}}>Technologies Used</h2>
          <div style={techListStyle}>
            <div style={techItemStyle}>React Native</div>
            <div style={techItemStyle}>Node.js</div>
            <div style={techItemStyle}>Express</div>
            <div style={techItemStyle}>MongoDB</div>
            <div style={techItemStyle}>AWS Lambda</div>
            <div style={techItemStyle}>Geolocation API</div>
            <div style={techItemStyle}>Bluetooth Beacons</div>
            <div style={techItemStyle}>AR Kit / AR Core</div>
          </div>
        </div>
      </section>

      {/* Next Project Section */}
      <section style={nextProjectSectionStyle}>
        <div style={nextProjectContentStyle}>
          <p style={{fontSize: '1.2rem', opacity: '0.8', marginBottom: '1rem'}}>Next Project</p>
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
