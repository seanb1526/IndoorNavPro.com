import React from 'react';
import { Link } from 'react-router-dom';
import navproPattern from '../assets/images/navpro-pattern.svg';
import navpulseLogo from '../assets/images/navpulse-logo.png';
import zipattendLogo from '../assets/images/zipattend.png';

function ProjectsPage() {
  // Hero section styles - updated to match Scrap.box style with featured project
  const heroSectionStyle = {
    padding: '8rem 2rem 4rem',
    backgroundColor: '#f8f9fa',
    position: 'relative'
  };
  
  const heroContentStyle = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  
  const heroTextContainerStyle = {
    flex: '1',
    minWidth: '300px',
    marginRight: '2rem',
    textAlign: 'left'
  };
  
  const featuredProjectContainerStyle = {
    flex: '1',
    minWidth: '300px',
    maxWidth: '550px'
  };
  
  const featuredProjectStyle = {
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#e8eff7',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    height: '360px',
    position: 'relative'
  };
  
  const featuredImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
  };
  
  const featuredOverlayStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '1.5rem',
    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)',
    color: 'white'
  };
  
  const featuredTitleStyle = {
    fontSize: '1.8rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    fontFamily: "'Raleway', sans-serif"
  };
  
  const featuredSubtitleStyle = {
    fontSize: '1rem',
    fontWeight: '400',
    opacity: '0.9',
    fontFamily: "'Raleway', sans-serif"
  };

  const heroTitleStyle = {
    fontSize: '2.8rem',
    fontWeight: '700',
    marginBottom: '1rem',
    color: '#192459',
    fontFamily: "'Raleway', sans-serif"
  };
  
  const heroSubtitleStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.5',
    color: '#555',
    fontFamily: "'Raleway', sans-serif",
    maxWidth: '600px'
  };

  // Horizontal line style
  const dividerStyle = {
    width: '60px',
    height: '4px',
    backgroundColor: '#192459',
    margin: '1.5rem 0 1.5rem 0',
    border: 'none'
  };
  
  // Semi-transparent overlay to improve readability
  const heroOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(248, 249, 250, 0.85)'
  };
  
  // Featured projects section styles
  const featuredSectionStyle = {
    padding: '8rem 2rem',
    backgroundColor: '#fff'
  };
  
  const sectionHeaderStyle = {
    textAlign: 'center',
    marginBottom: '4rem'
  };
  
  const sectionTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#192459',
    fontFamily: "'Raleway', sans-serif"
  };
  
  const sectionSubtitleStyle = {
    fontSize: '1.2rem',
    color: '#666',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
    fontFamily: "'Raleway', sans-serif"
  };

  // Project grid styles
  const projectsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '2rem',
    maxWidth: '1400px',
    margin: '0 auto'
  };
  
  // Project card styles
  const projectCardStyle = {
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#e8eff7',
    height: '320px',
    position: 'relative',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem'
  };
  
  // Hover effect styles for project cards
  const projectCardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.15)'
  };
  
  // Project logo styles
  const projectLogoStyle = {
    maxHeight: '45%',
    maxWidth: '70%',
    objectFit: 'contain',
    marginBottom: '1rem'
  };
  
  // Project info styles
  const projectInfoStyle = {
    position: 'absolute',
    bottom: '15px',
    left: '15px',
    textAlign: 'left',
    width: 'calc(100% - 30px)'
  };
  
  const projectTitleStyle = {
    color: '#333',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '1.2rem',
    fontWeight: '600',
    margin: 0,
    marginBottom: '3px'
  };
  
  const projectSubtitleStyle = {
    color: '#666',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.9rem',
    fontWeight: '400',
    margin: 0
  };

  // Project Case Study Section
  const caseStudySectionStyle = {
    padding: '6rem 2rem',
    backgroundColor: '#f8f9fa',
    backgroundImage: `url(${navproPattern})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative'
  };
  
  const caseStudyOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(248, 249, 250, 0.9)'
  };
  
  const caseStudyContentStyle = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1200px',
    margin: '0 auto'
  };
  
  // Detailed case study styles
  const detailedCaseStudyStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '3rem',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    margin: '4rem auto',
    maxWidth: '1000px'
  };
  
  const caseStudyHeadingStyle = {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#192459',
    fontFamily: "'Raleway', sans-serif"
  };
  
  const caseStudyInfoStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: '2rem',
    padding: '1rem 0',
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee'
  };
  
  const caseStudyInfoItemStyle = {
    flex: '1',
    minWidth: '200px',
    padding: '0.5rem 1rem'
  };
  
  const infoLabelStyle = {
    display: 'block',
    fontSize: '0.85rem',
    color: '#999',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
    fontFamily: "'Raleway', sans-serif",
    letterSpacing: '1px'
  };
  
  const infoValueStyle = {
    fontSize: '1.05rem',
    color: '#333',
    fontFamily: "'Raleway', sans-serif"
  };
  
  const caseStudyDescriptionStyle = {
    lineHeight: '1.7',
    fontSize: '1.05rem',
    color: '#444',
    marginBottom: '2rem',
    fontFamily: "'Raleway', sans-serif"
  };
  
  const caseStudyImageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
    marginBottom: '2rem'
  };
  
  // CTA section styles
  const ctaSectionStyle = {
    padding: '6rem 2rem',
    backgroundColor: '#0a192f',
    textAlign: 'center',
    color: '#fff',
    backgroundImage: `url(${navproPattern})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative'
  };
  
  const ctaOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(10, 25, 47, 0.85)',
    zIndex: 1
  };
  
  const ctaContentStyle = {
    position: 'relative',
    zIndex: 2
  };
  
  const ctaTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    fontFamily: "'Raleway', sans-serif",
    color: '#fff',
    maxWidth: '700px',
    margin: '0 auto 1.5rem'
  };
  
  const ctaDescriptionStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '2.5rem',
    fontFamily: "'Raleway', sans-serif",
    maxWidth: '700px',
    margin: '0 auto 2.5rem',
    color: 'rgba(255, 255, 255, 0.8)'
  };
  
  const ctaButtonStyle = {
    display: 'inline-block',
    padding: '1rem 2.5rem',
    backgroundColor: '#fff',
    color: '#192459',
    borderRadius: '4px',
    fontSize: '1.1rem',
    fontWeight: '500',
    textDecoration: 'none',
    fontFamily: "'Raleway', sans-serif",
    transition: 'transform 0.3s ease',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
  };

  // Project data
  const projects = [
    {
      title: "ZipAttend",
      subtitle: "Attendance Tracking Web App",
      client: "Salisbury University",
      logo: zipattendLogo,
      year: "2023",
      description: "A mobile web app designed for classroom attendance. Features include seamless integration with student records, facial recognition for authentication, and real-time attendance monitoring for professors."
    },
    {
      title: "NavPulse",
      subtitle: "Gamified Downtown Mobile App",
      client: "Downtown Salisbury- Arts, Business and Culture Dept.",
      logo: navpulseLogo,
      year: "2023", 
      description: "A downtown exploration app that rewards users for visiting local businesses and attractions. The app uses geofencing technology to verify locations and offers a point system for rewards redemption."
    },
    {
      title: "SU MAPS",
      subtitle: "MVP Development",
      client: "Sean Berndlmaier",
      year: "2022",
      description: "Indoor navigation proof-of-concept developed for Salisbury University. The MVP demonstrated how Bluetooth beacons and mobile sensors could provide accurate positioning inside campus buildings."
    },

  ];

  return (
    <div>
      {/* Hero Section with Featured Project */}
      <section style={heroSectionStyle}>
        <div style={heroContentStyle}>
          <div style={heroTextContainerStyle}>
            <h1 style={heroTitleStyle}>Case Studies</h1>
            <hr style={dividerStyle} />
            <p style={heroSubtitleStyle}>
              A collection of our successful implementations across various industries and challenges.
            </p>
          </div>
          
          <div style={featuredProjectContainerStyle}>
            <div 
              style={featuredProjectStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img 
                src="https://placehold.co/600x400?text=College+Tours" 
                alt="College Tours Project" 
                style={featuredImageStyle} 
              />
              <div style={featuredOverlayStyle}>
                <h3 style={featuredTitleStyle}>College Tours</h3>
                <p style={featuredSubtitleStyle}>Interactive campus navigation for prospective students</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Grid */}
      <section style={featuredSectionStyle}>
        <header style={sectionHeaderStyle}>
          <h2 style={sectionTitleStyle}>Featured Projects</h2>
          <p style={sectionSubtitleStyle}>
            From custom mobile apps to comprehensive navigation systems, explore our diverse portfolio of successful implementations.
          </p>
        </header>
        
        <div style={projectsContainerStyle}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              style={projectCardStyle}
              onMouseOver={(e) => {
                Object.assign(e.currentTarget.style, projectCardHoverStyle);
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
              }}
            >
              {project.logo && (
                <img 
                  src={project.logo} 
                  alt={project.title} 
                  style={projectLogoStyle}
                />
              )}
              
              {!project.logo && (
                <h3 style={{
                  color: '#333',
                  fontFamily: "'Raleway', sans-serif",
                  textAlign: 'center',
                  padding: '0 1rem',
                  fontSize: '1.8rem',
                  fontWeight: '600'
                }}>{project.title}</h3>
              )}
              
              <div style={projectInfoStyle}>
                <p style={projectTitleStyle}>{project.subtitle}</p>
                <p style={projectSubtitleStyle}>{project.client}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section style={ctaSectionStyle}>
        <div style={ctaOverlayStyle}></div>
        <div style={ctaContentStyle}>
          <h2 style={ctaTitleStyle}>Ready to Build Your Next Project?</h2>
          <p style={ctaDescriptionStyle}>
            Let's discuss how our team can help bring your vision to life with tailored solutions for your needs.
          </p>
          <Link to="/contact" style={ctaButtonStyle}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
