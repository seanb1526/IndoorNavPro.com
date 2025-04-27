function AboutPage() {
  const pageStyle = {
    padding: '2rem'
  }
  
  const headerStyle = {
    marginBottom: '2rem',
    textAlign: 'center'
  }
  
  const sectionStyle = {
    margin: '2rem 0'
  }

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1>About IndoorNav Pro</h1>
        <p>Learn about our mission and the team behind IndoorNav Pro</p>
      </header>
      
      <section style={sectionStyle}>
        <h2>Our Story</h2>
        <p style={{marginTop: '1rem'}}>
          IndoorNav Pro was founded in 2022 with a simple mission: to make indoor navigation as intuitive and 
          accurate as outdoor GPS. Our team of engineers and designers have worked tirelessly to create a 
          solution that works reliably in complex indoor environments.
        </p>
      </section>
      
      <section style={sectionStyle}>
        <h2>Our Team</h2>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '1rem'}}>
          <div style={{flex: '1', minWidth: '250px'}}>
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div style={{flex: '1', minWidth: '250px'}}>
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          <div style={{flex: '1', minWidth: '250px'}}>
            <h3>Mike Johnson</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
