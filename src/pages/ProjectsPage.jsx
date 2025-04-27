function ProjectsPage() {
  const pageStyle = {
    padding: '2rem'
  }
  
  const headerStyle = {
    marginBottom: '2rem',
    textAlign: 'center'
  }
  
  const projectStyle = {
    margin: '3rem 0',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    backgroundColor: '#fff'
  }
  
  const projectImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginBottom: '1rem'
  }

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1>Our Projects</h1>
        <p>Explore our innovative work and successful implementations</p>
      </header>
      
      <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        <div style={projectStyle}>
          <img 
            src="https://via.placeholder.com/800x400?text=Mall+Navigation+System" 
            alt="Mall Navigation System" 
            style={projectImageStyle} 
          />
          <h2>Shopping Mall Navigation System</h2>
          <p>
            A comprehensive indoor navigation solution for one of the largest shopping malls, 
            providing turn-by-turn directions to stores, facilities, and parking.
          </p>
        </div>
        
        <div style={projectStyle}>
          <img 
            src="https://via.placeholder.com/800x400?text=Hospital+Wayfinding" 
            alt="Hospital Wayfinding" 
            style={projectImageStyle} 
          />
          <h2>Hospital Wayfinding Solution</h2>
          <p>
            An accessible navigation system deployed across a major hospital complex,
            helping patients and visitors find departments, offices, and amenities easily.
          </p>
        </div>
        
        <div style={projectStyle}>
          <img 
            src="https://via.placeholder.com/800x400?text=Airport+Navigation" 
            alt="Airport Navigation" 
            style={projectImageStyle} 
          />
          <h2>International Airport Navigation</h2>
          <p>
            Real-time navigation and flight information system for a busy international airport,
            supporting multiple languages and accessibility features.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
