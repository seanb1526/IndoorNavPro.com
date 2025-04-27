import { useState } from 'react'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const pageStyle = {
    padding: '2rem'
  }
  
  const headerStyle = {
    marginBottom: '2rem',
    textAlign: 'center'
  }
  
  const formStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    backgroundColor: '#fff'
  }
  
  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginTop: '0.5rem',
    marginBottom: '1.5rem',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    fontSize: '1rem'
  }
  
  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem',
    cursor: 'pointer'
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1>Contact Us</h1>
        <p>Have questions? Reach out to our team</p>
      </header>
      
      <div style={formStyle}>
        {isSubmitted ? (
          <div style={{textAlign: 'center'}}>
            <h2>Thank you for your message!</h2>
            <p>We'll get back to you as soon as possible.</p>
            <button 
              style={{...buttonStyle, marginTop: '1rem'}} 
              onClick={() => setIsSubmitted(false)}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                style={inputStyle}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                style={inputStyle}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                style={inputStyle}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" style={buttonStyle}>
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactPage
