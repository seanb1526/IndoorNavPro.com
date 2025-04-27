import React from 'react';
import { Link } from 'react-router-dom';
import softwareVideo from '../assets/videos/software-development.mp4';
import aiVideo from '../assets/videos/artificial-intelligence.mp4';
import locationVideo from '../assets/videos/navigation.mp4';
import mobileVideo from '../assets/videos/mobile-app.mp4';
import navproPattern from '../assets/images/navpro-pattern.svg';

function ServicesPage() {
  // Hero section styles
  const heroSectionStyle = {
    padding: '10rem 2rem 6rem',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    backgroundImage: `url(${navproPattern})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative'
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
  
  const heroContentStyle = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
    margin: '0 auto'
  };
  
  const heroTitleStyle = {
    fontSize: '3.5rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    color: '#192459',
    fontFamily: "'Raleway', sans-serif"
  };
  
  const heroDescriptionStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    marginBottom: '2rem',
    color: '#555',
    fontFamily: "'Raleway', sans-serif"
  };
  
  // Services section styles
  const servicesSectionStyle = {
    padding: '6rem 2rem',
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
  
  const servicesContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '6rem'
  };
  
  // Service card styles (alternating layout)
  const serviceCardStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '4rem',
    flexWrap: 'wrap'
  };
  
  const serviceCardReversedStyle = {
    ...serviceCardStyle,
    flexDirection: 'row-reverse'
  };
  
  const serviceMediaStyle = {
    flex: '1',
    minWidth: '300px',
    height: '350px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  };
  
  const serviceVideoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };
  
  const serviceContentStyle = {
    flex: '1',
    minWidth: '300px'
  };
  
  const serviceTagStyle = {
    display: 'inline-block',
    backgroundColor: 'rgba(50, 72, 178, 0.1)',
    color: '#3248b2',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '500',
    marginBottom: '1rem',
    fontFamily: "'Raleway', sans-serif"
  };
  
  const serviceTitleStyle = {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#192459',
    fontFamily: "'Raleway', sans-serif"
  };
  
  const serviceDescriptionStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#555',
    marginBottom: '2rem',
    fontFamily: "'Raleway', sans-serif"
  };
  
  const featureListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };
  
  const featureItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '1rem',
    fontSize: '1.05rem',
    color: '#444',
    fontFamily: "'Raleway', sans-serif"
  };
  
  const featureIconStyle = {
    color: '#3248b2',
    marginRight: '10px',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  };
  
  // Process section styles
  const processSectionStyle = {
    padding: '6rem 2rem',
    backgroundColor: '#f8f9fa',
    backgroundImage: `url(${navproPattern})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative'
  };
  
  const processOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(248, 249, 250, 0.9)'
  };
  
  const processContentStyle = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1200px',
    margin: '0 auto'
  };
  
  const processStepsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: '4rem',
    gap: '2rem'
  };
  
  const processStepStyle = {
    flex: '1',
    minWidth: '250px',
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    position: 'relative'
  };
  
  const stepNumberStyle = {
    position: 'absolute',
    top: '-25px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#3248b2',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    fontWeight: '600',
    fontFamily: "'Raleway', sans-serif"
  };
  
  const stepTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#192459',
    fontFamily: "'Raleway', sans-serif",
    marginTop: '1rem'
  };
  
  const stepDescriptionStyle = {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#555',
    fontFamily: "'Raleway', sans-serif"
  };
  
  // CTA section styles
  const ctaSectionStyle = {
    padding: '6rem 2rem',
    backgroundColor: '#192459',
    textAlign: 'center',
    color: '#fff'
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
  
  // Service data
  const services = [
    {
      tag: 'Software Engineering',
      title: 'Custom Software Development',
      description: 'We create tailored software solutions that address your unique business needs and help you stay competitive in rapidly evolving markets.',
      video: softwareVideo,
      features: [
        'Enterprise Software Solutions',
        'Web Application Development',
        'API Development & Integration',
        'Database Design & Optimization',
        'UX/UI Design & Implementation'
      ]
    },
    {
      tag: 'Artificial Intelligence',
      title: 'AI & Machine Learning Solutions',
      description: 'Our team leverages cutting-edge AI technologies to build intelligent systems that can learn, predict, and improve your business operations.',
      video: aiVideo,
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Recommendation Systems',
        'Data Mining & Analysis'
      ]
    },
    {
      tag: 'Location Technology',
      title: 'Indoor Navigation Solutions',
      description: 'We specialize in developing precise indoor positioning systems that provide location awareness in environments where GPS is unavailable.',
      video: locationVideo,
      features: [
        'Indoor Mapping & Positioning',
        'Location-Based Analytics',
        'Wayfinding Applications',
        'Sensor Fusion Technology',
        'Beacon Implementation & Management'
      ]
    },
    {
      tag: 'Mobile Development',
      title: 'Cross-Platform Mobile Applications',
      description: 'We build responsive, high-performance mobile applications that work seamlessly across iOS, Android, and other platforms.',
      video: mobileVideo,
      features: [
        'Native & Cross-Platform Development',
        'Progressive Web Applications',
        'Mobile UI/UX Design',
        'App Store Optimization',
        'Ongoing Maintenance & Support'
      ]
    }
  ];
  
  // Process steps
  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: "We start by understanding your business, goals, and the specific challenges you're facing. This helps us tailor our approach to your unique needs."
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Based on our findings, we develop a comprehensive strategy that outlines the technical approach, timeline, and resources required for your project.'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Our team of engineers builds your solution using agile methodologies, ensuring regular updates and opportunities for feedback throughout the process.'
    },
    {
      number: '04',
      title: 'Implementation',
      description: 'We carefully deploy your solution, providing thorough documentation, training, and support to ensure a smooth transition.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={heroOverlayStyle}></div>
        <div style={heroContentStyle}>
          <h1 style={heroTitleStyle}>Innovative Technology Solutions</h1>
          <p style={heroDescriptionStyle}>
            We combine technical expertise with industry knowledge to deliver tailored solutions
            that solve complex problems and drive business growth.
          </p>
        </div>
      </section>
      
      {/* Services Section */}
      <section style={servicesSectionStyle}>
        <header style={sectionHeaderStyle}>
          <h2 style={sectionTitleStyle}>Our Expert Services</h2>
          <p style={sectionSubtitleStyle}>
            From custom software development to cutting-edge AI solutions,
            we provide end-to-end services to help your business thrive in the digital landscape.
          </p>
        </header>
        
        <div style={servicesContainerStyle}>
          {services.map((service, index) => (
            <div key={index} style={index % 2 === 0 ? serviceCardStyle : serviceCardReversedStyle}>
              <div style={serviceMediaStyle}>
                <video
                  style={serviceVideoStyle}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={service.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div style={serviceContentStyle}>
                <span style={serviceTagStyle}>{service.tag}</span>
                <h3 style={serviceTitleStyle}>{service.title}</h3>
                <p style={serviceDescriptionStyle}>{service.description}</p>
                
                <ul style={featureListStyle}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} style={featureItemStyle}>
                      <span style={featureIconStyle}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Process Section */}
      <section style={processSectionStyle}>
        <div style={processOverlayStyle}></div>
        <div style={processContentStyle}>
          <header style={sectionHeaderStyle}>
            <h2 style={sectionTitleStyle}>Our Proven Process</h2>
            <p style={sectionSubtitleStyle}>
              We follow a structured yet flexible approach to deliver high-quality solutions that meet your specific needs.
            </p>
          </header>
          
          <div style={processStepsStyle}>
            {processSteps.map((step, index) => (
              <div key={index} style={processStepStyle}>
                <div style={stepNumberStyle}>{step.number}</div>
                <h3 style={stepTitleStyle}>{step.title}</h3>
                <p style={stepDescriptionStyle}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section style={ctaSectionStyle}>
        <h2 style={ctaTitleStyle}>Ready to Transform Your Business?</h2>
        <p style={ctaDescriptionStyle}>
          Get in touch with our team to discuss how we can help you achieve your technology goals.
        </p>
        <Link to="/contact" style={ctaButtonStyle}>
          Schedule a Consultation
        </Link>
      </section>
    </div>
  );
}

export default ServicesPage;
