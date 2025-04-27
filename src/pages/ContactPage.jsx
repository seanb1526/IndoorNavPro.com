import { useState } from 'react';
import navproPattern from '../assets/images/navpro-pattern.svg';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({ name: '', email: '', company: '', message: '' });
    
    // You can add a timeout to reset the success message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 8000);
  };

  // Container style 
  const pageStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };
  
  // Contact Section styles - copied from landing page
  const contactSectionStyle = {
    padding: '10rem 2rem 6rem',
    backgroundColor: '#0a192f', 
    backgroundImage: `url(${navproPattern})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
    position: 'relative',
    flex: 1
  };
  
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(10, 25, 47, 0.85)', // Semi-transparent dark blue overlay
    zIndex: 1
  };
  
  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidth: '1400px',
    margin: '0 auto',
    flexWrap: 'wrap',
    position: 'relative',
    zIndex: 2 // Place content above the overlay
  };
  
  // Left column styles
  const leftColumnStyle = {
    flex: '1',
    minWidth: '300px',
    marginRight: '2rem',
    marginBottom: '2rem'
  };
  
  const pageTitleStyle = {
    fontSize: '3.2rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    fontFamily: "'Raleway', sans-serif",
    lineHeight: '1.2'
  };
  
  const descriptionStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '2rem',
    fontFamily: "'Raleway', sans-serif",
    maxWidth: '550px',
    color: '#ccd6f6'
  };
  
  const contactInfoStyle = {
    marginTop: '3rem'
  };
  
  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.2rem'
  };
  
  const contactIconStyle = {
    marginRight: '1rem',
    fontSize: '1.2rem',
    color: '#3248b2',
    width: '24px',
    textAlign: 'center'
  };
  
  const contactTextStyle = {
    fontSize: '1.1rem',
    fontFamily: "'Raleway', sans-serif",
    color: '#fff'
  };
  
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
    fontFamily: "'Raleway', sans-serif",
    fontWeight: '500',
    letterSpacing: '0.5px',
    marginRight: '1.5rem'
  };
  
  // Form styles
  const formContainerStyle = {
    flex: '1',
    minWidth: '300px'
  };
  
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  };
  
  const inputStyle = {
    padding: '1rem',
    marginBottom: '1rem',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
    color: '#fff',
    fontSize: '1rem',
    fontFamily: "'Raleway', sans-serif",
    outline: 'none'
  };
  
  const textareaStyle = {
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
  };
  
  const submitButtonStyle = {
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
  };
  
  const successMessageStyle = {
    backgroundColor: 'rgba(50, 205, 50, 0.1)', // Light green background
    border: '1px solid rgba(50, 205, 50, 0.5)',
    borderRadius: '4px',
    padding: '1.5rem',
    marginBottom: '2rem',
    textAlign: 'center',
    color: '#fff'
  };
  
  const successTitleStyle = {
    fontSize: '1.8rem',
    marginBottom: '1rem',
    fontWeight: '600',
    fontFamily: "'Raleway', sans-serif"
  };
  
  const successTextStyle = {
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
    fontFamily: "'Raleway', sans-serif",
    lineHeight: '1.6'
  };

  return (
    <div style={pageStyle}>
      <section style={contactSectionStyle}>
        <div style={overlayStyle}></div>
        <div style={contentContainerStyle}>
          {/* Left Column - Text */}
          <div style={leftColumnStyle}>
            <h1 style={pageTitleStyle}>Let's Build Something<br />Great Together</h1>
            <p style={descriptionStyle}>
              Ready to discuss your project? Our team of experts is here to help you transform ideas into powerful digital solutions.
            </p>
            
            <div style={contactInfoStyle}>
              <div style={contactItemStyle}>
                <span style={contactIconStyle}>📍</span>
                <span style={contactTextStyle}>Warminster, PA</span>
              </div>
              
              <div style={contactItemStyle}>
                <span style={contactIconStyle}>📱</span>
                <a href="tel:+12679812946" style={{...contactTextStyle, textDecoration: 'none'}}>1-267-981-2946</a>
              </div>
              
              <div style={contactItemStyle}>
                <span style={contactIconStyle}>✉️</span>
                <a href="mailto:hello@indoornav.pro" style={{...contactTextStyle, textDecoration: 'none'}}>hello@indoornav.pro</a>
              </div>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div style={formContainerStyle}>
            {isSubmitted ? (
              <div style={successMessageStyle}>
                <h3 style={successTitleStyle}>Message Sent!</h3>
                <p style={successTextStyle}>
                  Thank you for reaching out. We've received your message and will get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  style={submitButtonStyle}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form style={formStyle} onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder="Name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
                
                <input 
                  type="email" 
                  placeholder="Email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
                
                <input 
                  type="text" 
                  placeholder="Company" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={inputStyle}
                />
                
                <textarea 
                  placeholder="Message" 
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={textareaStyle}
                ></textarea>
                
                <button type="submit" style={submitButtonStyle}>
                  Submit Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
