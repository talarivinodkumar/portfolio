import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import MagneticButton from './MagneticButton'

const Hero = () => {
  return (
    <div className="jumbotron" id="home">
      <div className="container">
        <div className="row flex-v-center">
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <h1 className="text-left" style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '24px', fontWeight: '600', color: '#ff6a00' }}>HELLO, I'AM</span>
                <br />
                <div className="gradient-text" style={{ fontSize: '70px', textAlign: 'left' }}>
                  VINOD KUMAR
                </div>
                <div style={{ marginTop: '20px', minHeight: '40px' }}>
                  <TypeAnimation
                    sequence={[
                      "Full Stack Developer ",
                      1500,
                      "Web Developer ",
                      1500,
                      "React Expert ",
                      1500,
                      "Wellcome to my portfolio",
                      1500,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    style={{
                      fontSize: '32px',
                      display: 'inline-block',
                      color: '#ffffff',
                      fontWeight: '700'
                    }}
                  />
                </div>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  style={{ fontSize: '18px', color: '#06b6d4', marginTop: '15px', fontWeight: '600', letterSpacing: '1px' }}
                >
                  Building Scalable | Secure | Modern Web Apps
                </motion.p>
              </h1>
              
              <div style={{ marginTop: '40px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <a href="#contact">
                  <MagneticButton className="button-pro">
                    HIRE ME <i className="fa-solid fa-paper-plane" style={{ marginLeft: '10px' }}></i>
                  </MagneticButton>
                </a>
                <a href="/n.pdf" download="n.pdf" target="_blank">
                  <MagneticButton className="button-pro" style={{ background: 'rgba(255,255,255,0.05)', boxShadow: 'none' }}>
                    <i className="fa fa-download" style={{ marginRight: '10px' }}></i>
                    DOWNLOAD CV
                  </MagneticButton>
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: 'backOut' }}
              className="text-center"
            >
              <img 
                src="/images/vinod-pro.jpg" 
                alt="Vinod Kumar" 
                className="img-circle profile-img" 
                style={{ 
                  width: '350px', 
                  height: '350px', 
                  objectFit: 'cover',
                  marginTop: '20px'
                }} 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
