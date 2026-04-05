import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const StatItem = ({ target, label, icon }) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setHasStarted(true)
      }
    }, { threshold: 0.5 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStarted) return

    let current = 0
    const duration = 2000
    const step = target / (duration / 16)
    
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target === 24 ? target + '/7' : target + '+')
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [hasStarted, target])

  return (
    <motion.div 
      className="col-md-4" 
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      style={{ padding: '30px' }}
    >
      <div className="glass" style={{ padding: '40px', background: 'rgba(255,255,255,0.03)' }}>
        <i className={icon} style={{ fontSize: '40px', color: '#06b6d4', marginBottom: '20px' }}></i>
        <h2 className="stat-number" style={{ color: '#ffffff', fontSize: '50px', fontWeight: '900' }}>{count}</h2>
        <p style={{ color: '#94a3b8', fontWeight: '700', fontSize: '12px', letterSpacing: '4px' }}>{label}</p>
      </div>
    </motion.div>
  )
}

const Stats = () => {
  return (
    <div className="container py-lg-6 section stats-section" style={{ marginTop: '100px', marginBottom: '100px' }}>
      <div className="row text-center">
        <StatItem target={10} label="PROJECTS COMPLETED" icon="fa-solid fa-code" />
        <StatItem target={3} label="HAPPY CLIENTS" icon="fa-solid fa-face-smile" />
        <StatItem target={24} label="SUPPORT (HOURS)" icon="fa-solid fa-clock" />
      </div>
    </div>
  )
}

export default Stats
