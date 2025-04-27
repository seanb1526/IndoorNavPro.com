import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import FeaturesPage from './pages/FeaturesPage'
import ContactPage from './pages/ContactPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const appStyle = {
    width: '100%',
    margin: '0',
    padding: '0',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  }

  return (
    <Router>
      <div style={appStyle}>
        <Navbar />
        <main style={{ flex: '1', width: '100%' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
