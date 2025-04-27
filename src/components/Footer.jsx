function Footer() {
  const footerStyle = {
    padding: '2rem',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    marginTop: 'auto'
  }
  
  const linkStyle = {
    color: '#fff',
    textDecoration: 'underline',
    marginLeft: '0.5rem'
  }

  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} IndoorNav Pro. All rights reserved.</p>
      <p>
        Built with React
        <a href="https://reactjs.org/" style={linkStyle} target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      </p>
    </footer>
  )
}

export default Footer
