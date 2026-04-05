import React, { useEffect, useRef, useState } from 'react'
import Tilt from 'react-parallax-tilt'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [

   {
    title: "Smart Tourist Safety",
    description: "AI-powered monitoring system with geo-fencing, SOS emergency response, and location-based incident alerts.",
    fullDescription: "Designed to enhance traveler security, this system uses AI to detect potential safety risks. It includes a panic button SOS feature that immediately broadcasts live location data to local authorities and emergency contacts.",
    tags: ["React", "Node.js", "Google Maps API"],
    icon: "fa-solid fa-shield-halved",
    link: "https://kerala-toursim-app.vercel.app/",
  },
  
  {
    title: "Finance Dashboard",
    description: "Enterprise-level backend for financial data visualization, transaction analytics, and secure budget management APIs.",
    fullDescription: "A robust financial management suite with end-to-end encryption. It provides users with detailed spending analytics, budget forecasting using historical data, and automated monthly reports.",
    tags: ["Node.js", "MySQL", "Chart.js"],
    icon: "fa-solid fa-chart-line",
    link: "https://github.com/talarivinodkumar",
  },


  {
    title: "Online Food Delivery",
    description: "Full-stack food ordering ecosystem with multi-role authentication, real-time tracking, and automated payment workflows.",
    fullDescription: "This comprehensive food delivery platform streamlines the entire process from ordering to delivery. It features specialized dashboards for Customers, Restaurant Owners, and Delivery Partners, all synced in real-time using WebSockets.",
    tags: ["React", "Express", "MySQL", "JWT"],
    icon: "fa-solid fa-utensils",
    link: "https://fooddeliveryappvinu.netlify.app/",
  },

  {
    title: "Nexora Website",
    description: "A high-performance business platform providing scalable web solutions and enterprise-grade hosting services.",
    fullDescription: "Nexora is a complete business solution platform designed to help small to medium enterprises scale their digital presence. Built with React and optimized for SEO, it features a custom CMS and high-speed enterprise hosting architecture.",
    tags: ["React", "Node.js", "Tailwind"],
    icon: "fa-solid fa-globe",
    link: "https://nexorasolution.netlify.app/",
  },
  {
    title: "Employee Directory",
    description: "Centralized workforce management portal for large-scale employee data handling and departmental analytics.",
    fullDescription: "A high-efficiency enterprise portal for managing thousands of employee records. Includes advanced search filters, department-wise reporting, and automated onboarding/offboarding workflows.",
    tags: ["JavaScript", "Bootstrap", "MySQL"],
    icon: "fa-solid fa-users",
    link: "https://mcavinod.netlify.app/",
  },
  {
    title: "Expense Trackers",
    description: "Advanced financial tool for expense categorization, budget monitoring, and historical data reporting.",
    fullDescription: "Focuses on personal finance management with a clean, intuitive UI. It allows users to track every rupee, set savings goals, and visualize their financial health through interactive charts.",
    tags: ["React", "Context API", "LocalDB"],
    icon: "fa-solid fa-wallet",
    link: "https://vinodexpensetracker1.netlify.app/",
  }
]

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="modal-content"
        initial={{ y: 100, scale: 0.9 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 100, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div style={{ color: '#06b6d4', fontSize: '40px', marginBottom: '20px' }}>
          <i className={project.icon}></i>
        </div>
        <h2 style={{ fontSize: '36px', fontWeight: '950', color: '#ffffff', marginBottom: '20px' }}>{project.title}</h2>
        
        <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', flexWrap: 'wrap' }}>
          {project.tags.map((tag, i) => (
            <span key={i} className="tech-badge" style={{ fontSize: '14px', padding: '6px 16px' }}>{tag}</span>
          ))}
        </div>
        
        <p style={{ fontSize: '18px', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '40px' }}>
          {project.fullDescription || project.description}
        </p>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="button-pro">
            LIVE DEMO <i className="fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: '10px' }}></i>
          </a>
          <button className="button-pro" onClick={onClose} style={{ background: 'rgba(255,255,255,0.05)', boxShadow: 'none' }}>
            CLOSE
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

const ProjectCard = ({ project, index, onOpen }) => {
  return (
    <div className="col-md-4 project-item" style={{ marginBottom: '40px' }}>
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={1500}>
        <div className="project-card glass" onClick={onOpen} style={{ cursor: 'pointer' }}>
          <div className="icon-box">
            <i className={project.icon}></i>
          </div>
          
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          
          <div className="badge-row">
            {project.tags.map((tag, i) => (
              <span key={i} className="tech-badge">{tag}</span>
            ))}
          </div>
          
          <div style={{ marginTop: 'auto' }}>
            <span className="button-pro" style={{ padding: '10px 24px', fontSize: '13px', width: '100%', textAlign: 'center', cursor: 'pointer' }}>
              LEARN MORE <i className="fa-solid fa-plus" style={{ marginLeft: '8px' }}></i>
            </span>
          </div>
        </div>
      </Tilt>
    </div>
  )
}

const Projects = () => {
  const sectionRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-item", {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="container py-lg-8" id="project" style={{ marginTop: '120px', marginBottom: '120px' }} ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
        style={{ marginBottom: '70px' }}
      >
        <h2 style={{ fontSize: '14px', fontWeight: '800', color: '#06b6d4', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '15px' }}>
          Portfolio
        </h2>
        <h1 style={{ fontSize: '50px', fontWeight: '950', color: '#ffffff', letterSpacing: '-1px' }}>
          FEATURED PROJECTS
        </h1>
        <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #06b6d4, #10b981)', margin: '25px auto' }}></div>
      </motion.div>
      
      <div className="row">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} onOpen={() => setSelectedProject(project)} />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects
