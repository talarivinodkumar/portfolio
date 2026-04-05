import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div id="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <motion.nav 
        initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar navbar-fixed-top ${isScrolled ? 'scrolled' : ''}`}
      style={{ 
        background: isScrolled ? 'rgba(11, 13, 23, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
        transition: '0.3s'
      }}
    >
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar" style={{ background: '#ff6a00' }}></span>
            <span className="icon-bar" style={{ background: '#ff6a00' }}></span>
            <span className="icon-bar" style={{ background: '#ff6a00' }}></span>                        
          </button>
          <a className="navbar-brand" href="#" style={{ fontSize: '24px', fontWeight: '900', color: '#ff6a00' }}>
            <span style={{ color: '#ffffff' }}>VINOD</span>KUMAR
          </a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#home">HOME</a></li>              
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#project">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li style={{ marginLeft: '20px' }}>
              <a href="#contact" className="button-pro" style={{ padding: '10px 25px', marginTop: '8px', color: '#fff !important' }}>
                HIRE ME
              </a>
            </li>
          </ul>
        </div>
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar
