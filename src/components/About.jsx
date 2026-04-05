import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="container py-lg-6" id="about" style={{ marginTop: '100px', marginBottom: '100px' }}>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="glass about-section"
        style={{ padding: '60px 40px', background: 'rgba(255,255,255,0.03)' }}
      >
        <h1 className="text-center section-title" style={{ color: '#06b6d4', fontSize: '14px', fontWeight: '800', letterSpacing: '4px' }}>ABOUT ME</h1>
        <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #06b6d4, #10b981)', margin: '20px auto 40px' }}></div>
        <p className="info" style={{ color: '#ffffff', fontSize: '20px', fontWeight: '700', lineHeight: '1.6' }}>
          Hello, I am <span style={{ color: '#06b6d4', fontWeight: '900' }}>Vinod Kumar</span>, a professional full-stack developer dedicated to building high-performance, enterprise-grade web applications.
        </p>
        <p className="info" style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.8' }}>
          I specialize in architecting scalable solutions with <span style={{ color: '#ffffff' }}>React, Node.js, and MySQL</span>. My approach combines technical excellence with a keen eye for user-centric design, ensuring every project I deliver is not just functional, but a premium digital experience.
        </p>
      </motion.div>
    </div>
  )
}

export default About
