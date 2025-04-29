import React from 'react';
import { Link } from 'react-router-dom';
import navproPattern from '../../assets/images/navpro-pattern.svg';

function SuMapsProject() {
  // Page container style
  const pageContainerStyle = {
    backgroundColor: '#fff',
  };

  // Hero section - full-width image header
  const heroSectionStyle = {
    width: '100%',
    height: '70vh',
    position: 'relative',
    backgroundImage: 'url(https://placehold.co/1920x1080?text=SU+MAPS+Hero)',
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
    fontFamily: "'Raleway', sans-serif",
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
    fontFamily: "'Raleway', sans-serif",
    marginBottom: '1rem',
  };

  const heroSubtitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '400',
    color: '#e0e0e0',
    fontFamily: "'Raleway', sans-serif",
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
    fontFamily: "'Raleway', sans-serif",
  };

  const metaValueStyle = {
    fontSize: '1.1rem',
    color: '#333',
    fontFamily: "'Raleway', sans-serif",
    fontWeight: '500',
  };

  const projectDescriptionStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#444',
    fontFamily: "'Raleway', sans-serif",
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
    fontFamily: "'Raleway', sans-serif",
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#444',
    marginBottom: '2rem',
    fontFamily: "'Raleway', sans-serif",
    maxWidth: '900px',
  };

  // Full-width image section
  const imageFullWidthStyle = {
    width: '100%',
    height: 'auto',
    marginBottom: '5rem',
  };

  // Split content section (2 columns)
  const splitSectionStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '3rem',
    padding: '2rem 5% 5rem',
    maxWidth: '1400px',
    margin: '0 auto',
  };

  // Process section styles
  const processSectionStyle = {
    padding: '5rem 5%',
    backgroundColor: '#f8f9fa',
  };

  const processStepsStyle = {
    maxWidth: '1400px',
    margin: '3rem auto 0',
  };

  const processStepStyle = {
    display: 'flex',
    marginBottom: '3rem',
    position: 'relative',
  };

  const processNumberStyle = {
    fontSize: '5rem',
    fontWeight: '700',
    color: 'rgba(25, 36, 89, 0.1)',
    marginRight: '2rem',
    lineHeight: '1',
    fontFamily: "'Raleway', sans-serif",
  };

  const processContentStyle = {
    flex: '1',
  };

  const processTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#192459',
    fontFamily: "'Raleway', sans-serif",
  };

  const processDescriptionStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#444',
    fontFamily: "'Raleway', sans-serif",
  };

  // Results section
  const resultsSectionStyle = {
    padding: '5rem 5%',
    maxWidth: '1400px',
    margin: '0 auto',
  };

  const resultsListStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  };

  const resultItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '1.5rem',
  };

  const resultMarkerStyle = {
    width: '24px',
    height: '24px',
    backgroundColor: '#3248b2',
    borderRadius: '50%',
    marginRight: '1rem',
    marginTop: '0.2rem',
    flexShrink: '0',
  };

  const resultTextStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#444',
    fontFamily: "'Raleway', sans-serif",
  };

  // Tech stack section
  const techStackStyle = {
    padding: '5rem 5%',
    backgroundColor: '#f8f9fa',
  };

  const techListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    marginTop: '2rem',
    maxWidth: '1400px',
    margin: '2rem auto 0',
  };

  const techItemStyle = {
    backgroundColor: '#e8eff7',
    color: '#192459',
    fontFamily: "'Raleway', sans-serif",
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
    fontFamily: "'Raleway', sans-serif",
    color: '#fff',
  };

  const nextProjectLinkStyle = {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    marginTop: '2rem',
    fontFamily: "'Raleway', sans-serif",
    transition: 'color 0.3s ease',
  };

  return (
    <div style={pageContainerStyle}>
      {/* Hero Section - Full-width image */}
      <section style={heroSectionStyle}>
        <div style={heroOverlayStyle}></div>
        <div style={heroContentStyle}>
          <div style={heroBreadcrumbStyle}>
            <Link to="/projects" style={breadcrumbLinkStyle}>Projects</Link> / SU MAPS
          </div>
          <h1 style={heroTitleStyle}>SU MAPS</h1>
          <p style={heroSubtitleStyle}>Indoor navigation proof-of-concept for Salisbury University</p>
        </div>
      </section>

      {/* Project Intro Section */}
      <section style={introSectionStyle}>
        <div style={projectMetaStyle}>
          <div style={metaBlockStyle}>
            <h3 style={metaLabelStyle}>Client</h3>
            <p style={metaValueStyle}>Sean Berndlmaier</p>
          </div>
          <div style={metaBlockStyle}>
            <h3 style={metaLabelStyle}>Year</h3>
            <p style={metaValueStyle}>2022</p>
          </div>
          <div style={metaBlockStyle}>
            <h3 style={metaLabelStyle}>Duration</h3>
            <p style={metaValueStyle}>3 months</p>
          </div>
          <div style={metaBlockStyle}>
            <h3 style={metaLabelStyle}>Project Type</h3>
            <p style={metaValueStyle}>MVP Development</p>
          </div>
          <div style={{...metaBlockStyle, borderBottom: 'none'}}>
            <h3 style={metaLabelStyle}>Categories</h3>
            <p style={metaValueStyle}>Location Technology, Mobile Application, Education</p>
          </div>
        </div>
        
        <div style={projectDescriptionStyle}>
          <p style={{marginBottom: '2rem'}}>
            SU MAPS was a proof-of-concept indoor navigation system developed for Salisbury University to demonstrate 
            how advanced positioning technology could improve campus navigation for students, faculty, and visitors.
          </p>
          <p>
            The MVP showcased how a network of Bluetooth beacons combined with smartphone sensors could provide 
            accurate indoor positioning in campus buildings where GPS signals are typically unavailable or unreliable.
          </p>
        </div>
      </section>

      {/* Full-width image section */}
      <img 
        src="https://placehold.co/1920x1080?text=SU+MAPS+Interface" 
        alt="SU MAPS Interface" 
        style={imageFullWidthStyle} 
      />

      {/* Challenge and Solution */}
      <section style={splitSectionStyle}>
        <div>
          <h2 style={sectionTitleStyle}>The Challenge</h2>
          <p style={paragraphStyle}>
            Navigating large university campuses can be challenging, especially for new students and visitors. 
            While outdoor navigation is well-served by GPS technology, indoor navigation within large academic 
            buildings presented significant technical challenges:
          </p>
          <ul style={{...paragraphStyle, paddingLeft: '1.5rem'}}>
            <li style={{marginBottom: '0.5rem'}}>GPS signals are weakened or blocked inside buildings</li>
            <li style={{marginBottom: '0.5rem'}}>Complex multi-floor layouts with multiple wings and departments</li>
            <li style={{marginBottom: '0.5rem'}}>Frequent room number changes and renovations</li>
            <li style={{marginBottom: '0.5rem'}}>The need for persistent accuracy with minimal infrastructure</li>
            <li>Battery consumption concerns for mobile users</li>
          </ul>
        </div>
        
        <div>
          <h2 style={sectionTitleStyle}>Our Solution</h2>
          <p style={paragraphStyle}>
            We developed a comprehensive indoor positioning system that leveraged a combination of technologies:
          </p>
          <ul style={{...paragraphStyle, paddingLeft: '1.5rem'}}>
            <li style={{marginBottom: '0.5rem'}}>Strategic placement of low-energy Bluetooth beacons throughout buildings</li>
            <li style={{marginBottom: '0.5rem'}}>Sensor fusion algorithm combining Bluetooth signal strength, device accelerometer, and compass data</li>
            <li style={{marginBottom: '0.5rem'}}>Detailed indoor mapping of university buildings with room metadata</li>
            <li style={{marginBottom: '0.5rem'}}>User-friendly mobile interface with search functionality and turn-by-turn directions</li>
            <li>Backend system for beacon management and map updates</li>
          </ul>
        </div>
      </section>

      {/* Process Section */}
      <section style={processSectionStyle}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <h2 style={sectionTitleStyle}>Development Process</h2>
          <p style={paragraphStyle}>
            Our approach to developing SU MAPS followed a structured methodology that emphasized research, 
            iterative development, and continuous testing to ensure the final product was both accurate and user-friendly.
          </p>
          
          <div style={processStepsStyle}>
            <div style={processStepStyle}>
              <div style={processNumberStyle}>01</div>
              <div style={processContentStyle}>
                <h3 style={processTitleStyle}>Research & Analysis</h3>
                <p style={processDescriptionStyle}>
                  We conducted a thorough analysis of campus buildings, identified navigation pain points, and 
                  researched optimal positioning technologies for the university environment.
                </p>
              </div>
            </div>
            
            <div style={processStepStyle}>
              <div style={processNumberStyle}>02</div>
              <div style={processContentStyle}>
                <h3 style={processTitleStyle}>Beacon Mapping</h3>
                <p style={processDescriptionStyle}>
                  We created detailed digital maps of key campus buildings and identified strategic positions 
                  for beacon placement to ensure optimal coverage with minimal hardware.
                </p>
              </div>
            </div>
            
            <div style={processStepStyle}>
              <div style={processNumberStyle}>03</div>
              <div style={processContentStyle}>
                <h3 style={processTitleStyle}>Algorithm Development</h3>
                <p style={processDescriptionStyle}>
                  We developed and refined a positioning algorithm that could accurately determine user locations 
                  within buildings by combining multiple data sources.
                </p>
              </div>
            </div>
            
            <div style={processStepStyle}>
              <div style={processNumberStyle}>04</div>
              <div style={processContentStyle}>
                <h3 style={processTitleStyle}>Mobile App Creation</h3>
                <p style={processDescriptionStyle}>
                  We designed an intuitive mobile interface that allowed users to search for rooms, view their 
                  current position, and receive step-by-step navigation guidance.
                </p>
              </div>
            </div>
            
            <div style={{...processStepStyle, marginBottom: '0'}}>
              <div style={processNumberStyle}>05</div>
              <div style={processContentStyle}>
                <h3 style={processTitleStyle}>Testing & Iteration</h3>
                <p style={processDescriptionStyle}>
                  We conducted extensive testing across different devices and building areas, iteratively 
                  improving the system's accuracy and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image section */}
      <img 
        src="https://placehold.co/1920x1080?text=SU+MAPS+Navigation" 
        alt="SU MAPS Navigation Interface" 
        style={imageFullWidthStyle} 
      />

      {/* Results Section */}
      <section style={resultsSectionStyle}>
        <h2 style={sectionTitleStyle}>Results & Outcomes</h2>
        <p style={paragraphStyle}>
          The SU MAPS MVP successfully demonstrated the viability of indoor navigation technology on campus, 
          achieving significant results that proved the concept could be scaled to a full implementation.
        </p>
        
        <ul style={resultsListStyle}>
          <li style={resultItemStyle}>
            <div style={resultMarkerStyle}></div>
            <p style={resultTextStyle}>Positioning accuracy within 2-3 meters in test environments</p>
          </li>
          <li style={resultItemStyle}>
            <div style={resultMarkerStyle}></div>
            <p style={resultTextStyle}>Successful navigation across multiple floors and building wings</p>
          </li>
          <li style={resultItemStyle}>
            <div style={resultMarkerStyle}></div>
            <p style={resultTextStyle}>Positive user feedback from initial testing groups</p>
          </li>
          <li style={resultItemStyle}>
            <div style={resultMarkerStyle}></div>
            <p style={resultTextStyle}>Valuable insights for potential full-scale implementation</p>
          </li>
          <li style={resultItemStyle}>
            <div style={resultMarkerStyle}></div>
            <p style={resultTextStyle}>Foundation for future campus-wide navigation solution</p>
          </li>
        </ul>
        
        <p style={{...paragraphStyle, marginTop: '2rem'}}>
          The proof-of-concept demonstrated the potential for a campus-wide indoor navigation system that could 
          significantly improve the university experience for new students, visitors, and anyone navigating the 
          complex campus environment.
        </p>
      </section>

      {/* Tech Stack */}
      <section style={techStackStyle}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <h2 style={sectionTitleStyle}>Technologies Used</h2>
          <div style={techListStyle}>
            <span style={techItemStyle}>React Native</span>
            <span style={techItemStyle}>Node.js</span>
            <span style={techItemStyle}>MongoDB</span>
            <span style={techItemStyle}>Bluetooth Low Energy</span>
            <span style={techItemStyle}>Beacon Technology</span>
            <span style={techItemStyle}>Device Sensors API</span>
            <span style={techItemStyle}>SVG Mapping</span>
            <span style={techItemStyle}>Pathfinding Algorithms</span>
          </div>
        </div>
      </section>

      {/* Next Project Section */}
      <section style={nextProjectStyle}>
        <div style={nextProjectContentStyle}>
          <p style={{fontSize: '1.2rem', opacity: '0.8', marginBottom: '0.5rem'}}>Next Project</p>
          <h2 style={nextProjectTitleStyle}>Explore another project</h2>
          <Link to="/projects/zipattend" style={nextProjectLinkStyle}>
            ZipAttend: Attendance Tracking System →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default SuMapsProject;
