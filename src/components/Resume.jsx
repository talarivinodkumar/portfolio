import React from 'react'
import { motion } from 'framer-motion'

const Resume = () => {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js", "Java (Basic)"] },
    { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "API Key Management"] },
    { category: "Databases", items: ["MySQL", "MongoDB (Basics)"] },
    { category: "Tools", items: ["Git", "GitHub", "Vercel", "Netlify"] }
  ]

  const education = [
    { title: "MCA (Master of Computer Applications)", institution: "Presidency University, Bengaluru", date: "2024 — 2026", result: "CGPA: 7.5" },
    { title: "B.COM (Computer's)", institution: "Enlight Degree College, Hindupur", date: "2020 — 2023", result: "CGPA: 6.48" },
    { title: "Intermediate", institution: "Vidhya Nidi Jr. College, Hindupur", date: "2020", result: "CGPA: 5.48" },
    { title: "S.S.C", institution: "Cholasamudram High School", date: "2018", result: "CGPA: 7.0" }
  ]

  const projects = [
    {
      name: "Smart Tourist Safety Monitoring",
      desc: "AI-powered safety system with geo-fencing, real-time alerts, and SOS emergency features using Blockchain-based identity verification.",
      tech: "React.js, Node.js, Express.js, MySQL"
    },
    {
      name: "Finance Dashboard Backend",
      desc: "Secure authentication system for managing financial transactions and real-time data insights.",
      tech: "Node.js, Express.js, MySQL"
    },
    {
      name: "Online Food Delivery System",
      desc: "Full-stack web app with role-based access for customers and delivery partners, featuring real-time order tracking.",
      tech: "React.js, Node.js, Express.js, MySQL"
    }
  ]

  return (
    <section className="section py-lg-9" id="resume" style={{ background: 'rgba(15, 23, 42, 0.5)', padding: '80px 0' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center" style={{ marginBottom: '60px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="section-title" style={{ fontSize: '14px', fontWeight: '800', color: '#06b6d4', letterSpacing: '4px', marginBottom: '20px' }}>MY RÉSUMÉ</h1>
              <h2 style={{ fontSize: '40px', fontWeight: '950', color: '#ffffff' }}>SKILLS & EXPERIENCE</h2>
              <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #06b6d4, #10b981)', margin: '25px auto' }}></div>
            </motion.div>
          </div>

          <div className="col-md-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '800', marginBottom: '30px' }}>Professional Summary</h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '16px' }}>
                Motivated and meticulous <span style={{ color: '#06b6d4', fontWeight: '700' }}>Full Stack Developer</span> with a solid background in both client-side and server-side development.
                Demonstrated skill in building responsive, performance-driven, and user-centric digital applications.
                Enthusiastic about information security and dedicated to ongoing learning.
              </p>

              <div style={{ marginTop: '40px' }}>
                <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: '800', marginBottom: '20px' }}>Languages</h3>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <span className="glass" style={{ padding: '8px 15px', color: '#06b6d4', fontSize: '14px' }}>English: Advanced</span>
                  <span className="glass" style={{ padding: '8px 15px', color: '#06b6d4', fontSize: '14px' }}>Telugu: Native</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-md-8">
            <div className="row">
              {skills.map((skillGroup, idx) => (
                <div className="col-md-6" key={idx} style={{ marginBottom: '30px' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="glass"
                    style={{ padding: '25px', height: '100%' }}
                  >
                    <h4 style={{ color: '#06b6d4', fontWeight: '800', fontSize: '18px', marginBottom: '15px' }}>{skillGroup.category}</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {skillGroup.items.map((item, i) => (
                        <span key={i} style={{ background: 'rgba(6, 182, 212, 0.1)', color: '#ffffff', padding: '5px 12px', borderRadius: '4px', fontSize: '13px', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6" style={{ marginTop: '60px' }}>
            <h3 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '800', marginBottom: '40px' }}>
              <i className="fa-solid fa-briefcase" style={{ color: '#06b6d4', marginRight: '15px' }}></i>
              Work Experience / Projects
            </h3>
            <div className="timeline-pro">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  style={{ position: 'relative', paddingLeft: '30px', borderLeft: '2px solid rgba(6, 182, 212, 0.3)', paddingBottom: '40px' }}
                >
                  <div style={{ position: 'absolute', left: '-7px', top: '0', width: '12px', height: '12px', borderRadius: '50%', background: '#06b6d4', boxShadow: '0 0 10px #06b6d4' }}></div>
                  <h4 style={{ color: '#ffffff', fontWeight: '800', fontSize: '18px', margin: '0 0 10px 0' }}>{project.name}</h4>
                  <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '10px' }}>{project.desc}</p>
                  <span style={{ color: '#06b6d4', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }}>Tech: {project.tech}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="col-md-6" style={{ marginTop: '60px' }}>
            <h3 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '800', marginBottom: '40px' }}>
              <i className="fa-solid fa-graduation-cap" style={{ color: '#10b981', marginRight: '15px' }}></i>
              Education
            </h3>
            <div className="timeline-pro">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  style={{ position: 'relative', paddingLeft: '30px', borderLeft: '2px solid rgba(16, 185, 129, 0.3)', paddingBottom: '40px' }}
                >
                  <div style={{ position: 'absolute', left: '-7px', top: '0', width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
                  <h4 style={{ color: '#ffffff', fontWeight: '800', fontSize: '18px', margin: '0 0 5px 0' }}>{edu.title}</h4>
                  <p style={{ color: '#10b981', fontWeight: '700', fontSize: '14px', margin: '0 0 5px 0' }}>{edu.institution}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '13px' }}>
                    <span>{edu.date}</span>
                    <span style={{ color: '#ffffff', fontWeight: '700' }}>{edu.result}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume 
