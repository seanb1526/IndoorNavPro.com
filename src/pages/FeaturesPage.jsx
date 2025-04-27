function FeaturesPage() {
  const pageStyle = {
    padding: '2rem'
  }
  
  const headerStyle = {
    marginBottom: '2rem',
    textAlign: 'center'
  }
  
  const featureStyle = {
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
        <h1>Features & Capabilities</h1>
        <p>Discover what makes IndoorNav Pro the leading indoor navigation solution</p>
      </header>
      
      <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        <div style={featureStyle}>
          <h2>Real-Time Positioning</h2>
          <p>
            Track location with centimeter-level precision using our advanced fusion 
            of WiFi, Bluetooth, and sensor data.
          </p>
        </div>
        
        <div style={featureStyle}>
          <h2>Offline Navigation</h2>
          <p>
            Continue navigating even without internet connectivity using our 
            locally cached maps and positioning algorithms.
          </p>
        </div>
        
        <div style={featureStyle}>
          <h2>3D Mapping</h2>
          <p>
            Navigate multi-level buildings with ease using our detailed 3D maps 
            that account for stairs, elevators, and different floor layouts.
          </p>
        </div>
        
        <div style={featureStyle}>
          <h2>API Integration</h2>
          <p>
            Easily integrate IndoorNav Pro into your existing applications with 
            our comprehensive API and SDK offerings.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeaturesPage
