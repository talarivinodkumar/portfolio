import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="text-center" style={{ padding: '80px 20px', background: 'rgba(11, 13, 23, 0.95)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{ textAlign: 'left', marginBottom: '40px' }}>
            <h2 style={{ color: '#06b6d4', fontWeight: '900', fontSize: '32px', letterSpacing: '-1px' }}>VINOD KUMAR</h2>
            <p style={{ color: '#94a3b8', maxWidth: '450px', fontSize: '16px', lineHeight: '1.8' }}>
              Crafting premium digital experiences through innovative code and modern design. Dedicated to building performant, scalable, and visually stunning applications.
            </p>
          </div>
          <div className="col-md-6" style={{ textAlign: 'left' }}>
            <h3 style={{ color: '#ffffff', fontWeight: '800', fontSize: '20px', marginBottom: '30px', letterSpacing: '1px' }}>CONNECT</h3>
            <ul className="links" style={{ display: 'flex', gap: '25px', padding: 0, listStyle: 'none' }}>
              <li><a href="mailto:vinodtalari82@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', fontSize: '28px', transition: '0.3s' }} className="contact-icon-footer"><i className="fa-solid fa-envelope"></i></a></li>
              <li><a href="http://www.linkedin.com/in/vinod kumar" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', fontSize: '28px', transition: '0.3s' }} className="contact-icon-footer"><i className="fa-brands fa-linkedin"></i></a></li>
              <li><a href="https://github.com/talarivinodkumar" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', fontSize: '28px', transition: '0.3s' }} className="contact-icon-footer"><i className="fa-brands fa-github"></i></a></li>
              <li><a href="https://www.instagram.com/iamvinu_90/" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', fontSize: '28px', transition: '0.3s' }} className="contact-icon-footer"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="https://wa.me/+919059143860" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', fontSize: '28px', transition: '0.3s' }} className="contact-icon-footer"><i className="fa-brands fa-whatsapp"></i></a></li>
            </ul>
          </div>
        </div>
        <hr style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '40px 0' }} />
        <p style={{ color: '#666', fontSize: '14px' }}>&copy; {currentYear} VINOD KUMAR. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
