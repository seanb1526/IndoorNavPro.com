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
     // Reduced from 100px to 80px to minimize white space
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
    width: '90%', // Changed from 100% to 90% for a more appropriate size
    maxWidth: '1200px', // Reduced from 1400px to 1200px
    height: 'auto',
    margin: '0 auto',
    display: 'block',
    borderRadius: '8px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
  };

  // Challenge and Solution section
  const challengeSolutionSectionStyle = {
    padding: '6rem 5%',
    backgroundColor: '#fff',
    borderBottom: '1px solid #eaeaea',
  };

  const challengeSolutionContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '5rem',
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
    fontSize: '1.15rem',
    lineHeight: '1.8',
    color: '#444',
    marginBottom: '2rem',
    fontFamily: "Raleway, sans-serif",
  };

  // Video section
  const videoSectionStyle = {
    padding: '6rem 5%',
    backgroundColor: '#f6f8fa',
    borderBottom: '1px solid #eaeaea',
  };
  
  const videoContainerStyle = {
    maxWidth: '1200px', // Changed from 1000px to 1200px to match dashboard image
    width: '90%', // Added to match dashboard image width
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
    backgroundColor: '#0a192f', // Changed from #192459 to #0a192f (darker blue)
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

  return (
    <div style={pageContainerStyle}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={heroBreadcrumbStyle}>
          <Link to="/projects" style={breadcrumbLinkStyle}>Projects</Link> / ZipAttend
        </div>
        <div style={heroContentContainerStyle}>
          <div style={heroContentLeftStyle}>
            <h1 style={heroTitleStyle}>ZipAttend</h1>
            <p style={heroSubtitleStyle}>
              An event attendance tracking web application that simplifies management and enhances security for Salisbury University
            </p>
          </div>
          <div>
            <img src={zipattendHero} alt="ZipAttend Application" style={heroImageStyle} />
          </div>
        </div>
      </section>

      {/* Project Meta Section */}
      <section style={metaSectionStyle}>
        <div style={metaContainerStyle}>
          <div style={metaBlockStyle}>
            <h3 style={metaLabelStyle}>Client</h3>
            <p style={metaValueStyle}>Dr. Amit Poddar (Salisbury University)</p>
          </div>
          <div style={metaBlockStyle}>
            <h3 style={metaLabelStyle}>Year</h3>
            <p style={metaValueStyle}>2025</p>
          </div>
          <div style={metaBlockStyle}>
            <h3 style={metaLabelStyle}>Duration</h3>
            <p style={metaValueStyle}>2 months</p>
          </div>
          <div style={metaBlockStyle}>
            <h3 style={metaLabelStyle}>Categories</h3>
            <p style={metaValueStyle}>Web Application, Education Technology</p>
          </div>
        </div>
      </section>
      
      {/* Project Description Section */}
      <section style={descriptionSectionStyle}>
        <div style={descriptionContainerStyle}>
          <p style={descriptionTextStyle}>
            ZipAttend is a comprehensive event attendance tracking system designed for campus environments. 
            The system enables event organizers to efficiently monitor attendance while providing administrators with 
            valuable insights to strengthen integrity and eliminate fraud.
          </p>
          <p style={{...descriptionTextStyle, marginTop: '1.5rem'}}>
            Our team developed a responsive web application that works across devices, allowing organizers to track 
            attendance quickly during events and participants to verify their attendance records through a user-friendly interface,
            replacing insecure paper-based methods with a digital solution that maintains data integrity.
          </p>
        </div>
      </section>
      
      {/* Dashboard Image Section */}
      <section style={imageFullWidthContainerStyle}>
        <img 
          src={zipattendDashboard} 
          alt="ZipAttend Dashboard Interface" 
          style={imageFullWidthStyle} 
        />
      </section>

      {/* Challenge and Solution */}
      <section style={challengeSolutionSectionStyle}>
        <div style={challengeSolutionContainerStyle}>
          <div>
            <h2 style={sectionTitleStyle}>The Challenge</h2>
            <p style={paragraphStyle}>
              Salisbury University needed a modern attendance system to replace their paper-based process for campus events, 
              but existing commercial solutions were prohibitively expensive and lacked the location-based 
              technology they required to prevent attendance fraud.
            </p>
            <p style={paragraphStyle}>
              Key challenges included ensuring cross-platform accessibility, maintaining robust data privacy, 
              implementing location verification to prevent fraudulent check-ins, and creating an intuitive 
              experience that would reduce administrative burden rather than add to it.
            </p>
          </div>
          
          <div>
            <h2 style={sectionTitleStyle}>Our Solution</h2>
            <p style={paragraphStyle}>
              We developed ZipAttend, a comprehensive web application that combines QR code technology with 
              location-awareness for attendance tracking. When students scan a QR code to check in, the system 
              requires location permissions and captures their current GPS coordinates, creating an audit trail 
              to deter fraudulent attendance.
            </p>
            <p style={paragraphStyle}>
              Faculty benefit from an intuitive dashboard that displays real-time attendance data and analytics, 
              with the ability to review location data when attendance fraud is suspected. The platform 
              was built with scalability in mind, allowing for easy deployment at other universities with 
              minimal customization needed.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Interface Video */}
      <section style={videoSectionStyle}>
        <div style={videoContainerStyle}>
          <h2 style={videoTitleStyle}>See ZipAttend in Action</h2>
          <video 
            src={zipattendMobileVideo}
            controls
            playsInline
            style={videoStyle}
            poster={zipattendHero}
            aria-label="ZipAttend Mobile Interface Demo"
          />
        </div>
      </section>

      {/* Results Section */}
      <section style={resultsSectionStyle}>
        <div style={resultsContainerStyle}>
          <h2 style={{...sectionTitleStyle, textAlign: 'center'}}>Results</h2>
          <p style={{...paragraphStyle, textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem auto'}}>
            ZipAttend has been successfully implemented for the MASMI Sales Competition events at Salisbury University, 
            providing a streamlined approach to tracking attendance for these high-profile academic gatherings. The platform 
            has demonstrated its effectiveness during real-world usage, with event organizers reporting significant 
            improvements in administrative efficiency.
          </p>
          
          <div style={statsContainerStyle}>
            <div style={statItemStyle}>
              <div style={statNumberStyle}>92%</div>
              <p style={statLabelStyle}>Success rate at recent events</p>
            </div>
            <div style={statItemStyle}>
              <div style={statNumberStyle}>100%</div>
              <p style={statLabelStyle}>Data capture accuracy</p>
            </div>
            <div style={statItemStyle}>
              <div style={statNumberStyle}>75%</div>
              <p style={statLabelStyle}>Reduction in check-in time</p>
            </div>
            <div style={statItemStyle}>
              <div style={statNumberStyle}>24/7</div>
              <p style={statLabelStyle}>System availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={techStackSectionStyle}>
        <div style={techStackContainerStyle}>
          <h2 style={{...sectionTitleStyle, textAlign: 'center'}}>Technologies Used</h2>
          <div style={techListStyle}>
            <div style={techItemStyle}>React</div>
            <div style={techItemStyle}>Material UI</div>
            <div style={techItemStyle}>Django</div>
            <div style={techItemStyle}>PostgreSQL</div>
            <div style={techItemStyle}>Django REST Framework</div>
            <div style={techItemStyle}>JWT Authentication</div>
            <div style={techItemStyle}>jsQR</div>
            <div style={techItemStyle}>Geolocation API</div>
            <div style={techItemStyle}>Camera API</div>
          </div>
        </div>
      </section>

      {/* Next Project Section */}
      <section style={nextProjectSectionStyle}>
        <div style={nextProjectContentStyle}>
          <p style={{fontSize: '1.2rem', opacity: '0.8', marginBottom: '1rem'}}>Next Project</p>
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
