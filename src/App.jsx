import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import ChatBot from './components/ChatBot'
import ParticlesBackground from './components/ParticlesBackground'
import Cursor from './components/Cursor'
import './App.css'

function App() {
  useEffect(() => {
    // Intersection Observer for scroll-reveal animations
    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('.section')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="App">
      <ParticlesBackground />
      <Cursor />
      <ChatBot />
      <Navbar />
      <Hero />
      <div className="container-fluid">
        <About />
        <Projects />
        <Stats />
        <Contact />
      </div>
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default App
