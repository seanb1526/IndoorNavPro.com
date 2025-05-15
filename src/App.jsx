import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import ZipAttendProject from './pages/projects/ZipAttendProject'
import NavPulseProject from './pages/projects/NavPulseProject'
import SuMapsProject from './pages/projects/SuMapsProject'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

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
      <ScrollToTop />
      <div style={appStyle}>
        <Navbar />
        <main style={{ flex: '1', width: '100%' }}> {/* Remove default paddingTop */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/zipattend" element={<ZipAttendProject />} />
            <Route path="/projects/navpulse" element={<NavPulseProject />} />
            <Route path="/projects/sumaps" element={<SuMapsProject />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
