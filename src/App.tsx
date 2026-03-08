import './index.css'
import { LangProvider } from './LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import UseCases from './components/UseCases'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <LangProvider>
      <div style={{ background: '#0a0a0f', minHeight: '100vh' }}>
        <Navbar />
        <Hero />
        <Services />
        <UseCases />
        <About />
        <Contact />
        <Footer />
      </div>
    </LangProvider>
  )
}

export default App
