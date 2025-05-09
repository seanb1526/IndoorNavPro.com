import React from 'react';
import { Link } from 'react-router-dom';
import navproPattern from '../../assets/images/navpro-pattern.svg';
import zipattendLogo from '../../assets/images/zipattend.png';
import zipattendHero from '../../assets/proj/ZipAttend/ZipAttend-Hero.png';
import zipattendDashboard from '../../assets/proj/ZipAttend/ZipAttend-Dashboard.jpg';
import zipattendMobileVideo from '../../assets/proj/ZipAttend/ZipAttend-Mobilec.mp4';

function ZipAttendProject() {
  // Page container style
  const pageContainerStyle = {
    backgroundColor: '#fff',
  };

  // Hero section - full-width image header
  const heroSectionStyle = {
    width: '100%',
    height: '70vh',
    position: 'relative',
    backgroundImage: `url(${zipattendHero})`,
    backgroundSize: 'contain', // Changed from 'cover' to 'contain' to prevent zooming
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', // Added to prevent tiling
    backgroundColor: '#192459', // Added background color for areas not covered by the image
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
    fontFamily: "Raleway, sans-serif",
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

  // Results section with stats
  const resultsSectionStyle = {
    padding: '5rem 5%',
    backgroundColor: '#f8f9fa',
  };

  const statsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    maxWidth: '1400px',
    margin: '3rem auto 0',
  };

  const statItemStyle = {
    textAlign: 'center',
    padding: '2rem',
  };

  const statNumberStyle = {
    fontSize: '3rem',
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

  // Video style for mobile interface
  const videoContainerStyle = {
    width: '100%',
    marginBottom: '5rem',
    display: 'flex',
    justifyContent: 'center',
  };

  const videoStyle = {
    width: '100%',
    maxWidth: '1400px',
    height: 'auto',
  };

  return (
    <div style={pageContainerStyle}>
      {/* Hero Section - Full-width image */}
      <section style={heroSectionStyle}>
        <div style={heroOverlayStyle}></div>
        <div style={heroContentStyle}>
          <div style={heroBreadcrumbStyle}>
            <Link to="/projects" style={breadcrumbLinkStyle}>Projects</Link> / ZipAttend
          </div>
          <h1 style={heroTitleStyle}>ZipAttend</h1>
          <p style={heroSubtitleStyle}>A classroom attendance tracking web application for Salisbury University</p>
        </div>
      </section>

      {/* Project Intro Section */}
      <section style={introSectionStyle}>
        <div style={projectMetaStyle}>
          <div style={metaBlockStyle}>
            <h3 style={metaLabelStyle}>Client</h3>
            <p style={metaValueStyle}>Salisbury University</p>
          </div>
          <div style={metaBlockStyle}>
            <h3 style={metaLabelStyle}>Year</h3>
            <p style={metaValueStyle}>2023</p>
          </div>
          <div style={metaBlockStyle}>
            <h3 style={metaLabelStyle}>Duration</h3>
            <p style={metaValueStyle}>4 months</p>
          </div>
          <div style={metaBlockStyle}>
            <h3 style={metaLabelStyle}>Role</h3>
            <p style={metaValueStyle}>Full-stack Development</p>
          </div>
          <div style={{...metaBlockStyle, borderBottom: 'none'}}>
            <h3 style={metaLabelStyle}>Categories</h3>
            <p style={metaValueStyle}>Web Application, Education Technology</p>
          </div>
        </div>
        
        <div style={projectDescriptionStyle}>
          <p style={{marginBottom: '2rem'}}>
            ZipAttend is a comprehensive attendance tracking system designed for Salisbury University's academic environment. 
            The system enables professors to efficiently monitor student attendance while providing administrators with 
            valuable insights through detailed analytics.
          </p>
          <p>
            Our team developed a responsive web application that works across devices, allowing professors to take 
            attendance quickly during class and students to verify their attendance records through a user-friendly interface.
          </p>
        </div>
      </section>

      {/* Full-width image section */}
      <img 
        src={zipattendDashboard} 
        alt="ZipAttend Dashboard Interface" 
        style={imageFullWidthStyle} 
      />

      {/* Challenge and Solution */}
      <section style={splitSectionStyle}>
        <div>
          <h2 style={sectionTitleStyle}>The Challenge</h2>
          <p style={paragraphStyle}>
            Salisbury University needed a modern attendance system to replace their paper-based process. 
            Key challenges included ensuring accessibility across devices, maintaining data privacy, 
            and creating a system that would integrate seamlessly with existing university databases.
          </p>
          <p style={paragraphStyle}>
            The traditional paper-based attendance systems were prone to errors, time-consuming, and 
            provided limited insights for administrators tracking student attendance patterns.
          </p>
        </div>
        
        <div>
          <h2 style={sectionTitleStyle}>Our Solution</h2>
          <p style={paragraphStyle}>
            We developed a web application that uses facial recognition for secure authentication, 
            real-time data synchronization, and an intuitive interface that required minimal training 
            for faculty and students.
          </p>
          <p style={paragraphStyle}>
            The system includes robust reporting tools for academic administrators, allowing them to 
            monitor attendance patterns across courses, departments, and the entire university.
          </p>
        </div>
      </section>

      {/* Mobile Interface Video */}
      <div style={videoContainerStyle}>
        <video 
          src={zipattendMobileVideo}
          controls
          playsInline
          style={videoStyle}
          poster={zipattendHero} // Changed from zipattendDashboard to zipattendHero
          aria-label="ZipAttend Mobile Interface Demo"
        />
      </div>

      {/* Results Section */}
      <section style={resultsSectionStyle}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <h2 style={sectionTitleStyle}>Results</h2>
          <p style={paragraphStyle}>
            Since implementing ZipAttend, Salisbury University has reported significant improvements in 
            attendance tracking efficiency and data accuracy. The system has been well-received by both 
            faculty and students, with high adoption rates across departments.
          </p>
          
          <div style={statsContainerStyle}>
            <div style={statItemStyle}>
              <div style={statNumberStyle}>40%</div>
              <p style={statLabelStyle}>Reduction in administrative time</p>
            </div>
            <div style={statItemStyle}>
              <div style={statNumberStyle}>85%</div>
              <p style={statLabelStyle}>Faculty satisfaction rate</p>
            </div>
            <div style={statItemStyle}>
              <div style={statNumberStyle}>99.9%</div>
              <p style={statLabelStyle}>System uptime</p>
            </div>
            <div style={statItemStyle}>
              <div style={statNumberStyle}>30%</div>
              <p style={statLabelStyle}>Improved data accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={techStackStyle}>
        <h2 style={sectionTitleStyle}>Technologies Used</h2>
        <div style={techListStyle}>
          <span style={techItemStyle}>React</span>
          <span style={techItemStyle}>Node.js</span>
          <span style={techItemStyle}>Express</span>
          <span style={techItemStyle}>MongoDB</span>
          <span style={techItemStyle}>TensorFlow.js</span>
          <span style={techItemStyle}>JWT Authentication</span>
          <span style={techItemStyle}>AWS S3</span>
        </div>
      </section>

      {/* Next Project Section */}
      <section style={nextProjectStyle}>
        <div style={nextProjectContentStyle}>
          <p style={{fontSize: '1.2rem', opacity: '0.8', marginBottom: '0.5rem'}}>Next Project</p>
          <h2 style={nextProjectTitleStyle}>Explore another project</h2>
          <Link to="/projects/navpulse" style={nextProjectLinkStyle}>
            NavPulse: Downtown Exploration App →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ZipAttendProject;
