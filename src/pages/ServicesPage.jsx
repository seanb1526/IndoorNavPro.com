function ServicesPage() {
  const pageStyle = {
    padding: '2rem'
  }
  
  const headerStyle = {
    marginBottom: '2rem',
    textAlign: 'center'
  }
  
  const serviceStyle = {
    margin: '3rem 0',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    backgroundColor: '#fff'
  }

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1>Our Services</h1>
        <p>Comprehensive solutions for your navigation and location-based needs</p>
      </header>
      
      <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        <div style={serviceStyle}>
          <h2>Software Engineering</h2>
          <p>
            Custom software development tailored to your specific requirements, 
            from concept to deployment.
          </p>
        </div>
        
        <div style={serviceStyle}>
          <h2>Artificial Intelligence</h2>
          <p>
            Leveraging cutting-edge AI technologies to solve complex problems 
            and enhance decision-making capabilities.
          </p>
        </div>
        
        <div style={serviceStyle}>
          <h2>Location Technology</h2>
          <p>
            Precise indoor positioning and navigation solutions using advanced 
            sensor fusion and mapping technologies.
          </p>
        </div>
        
        <div style={serviceStyle}>
          <h2>Mobile Development</h2>
          <p>
            Cross-platform mobile applications optimized for performance and 
            user experience across all devices.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
