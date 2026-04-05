import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from 'emailjs-com'

const Contact = () => {
  const formRef = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const socialLinks = [
    { icon: "fa-solid fa-envelope", url: "mailto:vinodtalari82@gmail.com" },
    { icon: "fa-solid fa-phone", url: "tel:+919059143860" },
    { icon: "fa-brands fa-linkedin", url: "http://www.linkedin.com/in/vinod kumar" },
    { icon: "fa-brands fa-github", url: "https://github.com/talarivinodkumar" },
    { icon: "fa-brands fa-instagram", url: "https://www.instagram.com/iamvinu_90/" }
  ]

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // IMPORTANT: Replace these with your actual EmailJS credentials
    // You can get these by signing up at https://www.emailjs.com/
    const serviceId = "service_ogyqgsq"
    const templateId = "template_9p9fj5n"
    const publicKey = "6_BhVF4DIloC8hxlJ"

    // Capture form data
    const formData = new FormData(formRef.current)
    const name = formData.get('from_name')
    const email = formData.get('email')

    const templateParams = {
      from_name: name,
      name: name,
      email: email,
      from_email: email,
      project_type: formData.get('project_type'),
      message: formData.get('message'),
      to_email: 'vinodtalari82@gmail.com'
    }

    const submitToBackend = async () => {
      try {
        await fetch('http://localhost:5000/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(templateParams)
        });
        console.log("Lead saved to MySQL database successfully.");
      } catch (err) {
        console.error("Database Save Error:", err);
        // We continue anyway so the email still sends
      }
    };

    emailjs.init(publicKey)

    // 1. Save to Database
    submitToBackend();

    // 2. Send Email Notification
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        setIsSubmitting(false)
        setIsSuccess({ name, email }) 
        formRef.current.reset()
        setTimeout(() => setIsSuccess(false), 8000) 
      }, (error) => {
        setIsSubmitting(false)
        console.error("EmailJS Error:", error)
        alert("Email failed, but your message has been saved to our database. We will contact you soon!")
      })
  }

  return (
    <div className="container py-lg-9 section" id="contact" style={{ marginTop: '100px', marginBottom: '100px' }}>
      <div className="row">
        <div className="col-md-12 text-center" style={{ marginBottom: '60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title" style={{ fontSize: '14px', fontWeight: '800', color: '#06b6d4', letterSpacing: '4px', marginBottom: '20px' }}>GET IN TOUCH</h1>
            <h2 style={{ fontSize: '50px', fontWeight: '950', color: '#ffffff', marginBottom: '15px' }}>LET'S BUILD SOMETHING GREAT</h2>
            <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #06b6d4, #10b981)', margin: '25px auto' }}></div>
            <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '700px', margin: '0 auto' }}>
              I build scalable web apps and help businesses grow. Whether you have a specific project or just want to connect, I'm all ears!
            </p>
          </motion.div>
        </div>

        <div className="col-md-7">
          <motion.div
            className="glass contact-form"
            style={{ padding: '40px', background: 'rgba(30, 41, 59, 0.4)' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ fontSize: '30px', fontWeight: '900', color: 'rgba(6, 182, 212, 0.2)' }}>01</span>
              <h3 style={{ color: '#ffffff', fontWeight: '800', margin: 0, fontSize: '20px', letterSpacing: '1px' }}>SEND A MESSAGE</h3>
            </div>
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>YOUR NAME</label>
                    <input type="text" name="from_name" className="form-control-pro" placeholder="Ex: John Doe" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>EMAIL ADDRESS</label>
                    <input type="email" name="email" className="form-control-pro" placeholder="Ex: john@example.com" required />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>PROJECT TYPE</label>
                <select name="project_type" className="form-control-pro" required>
                  <option value="">Select Project Type</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>YOUR MESSAGE</label>
                <textarea name="message" className="form-control-pro" rows="5" placeholder="Tell me about your project..." required></textarea>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
                <button type="submit" className="button-pro" disabled={isSubmitting}>
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  {!isSubmitting && <i className="fa-solid fa-paper-plane" style={{ marginLeft: '10px' }}></i>}
                </button>

                <AnimatePresence>
                  {isSuccess && (
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      style={{ color: '#10b981', fontWeight: '700', fontSize: '14px', marginTop: '10px' }}
                    >
                      <i className="fa-solid fa-circle-check"></i> Hi {isSuccess.name}, your message from {isSuccess.email} has been sent successfully!
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>

        <div className="col-md-5">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ paddingLeft: '20px' }}
          >
            <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ fontSize: '30px', fontWeight: '900', color: 'rgba(6, 182, 212, 0.2)' }}>02</span>
              <h3 style={{ color: '#ffffff', fontWeight: '800', margin: 0, fontSize: '20px', letterSpacing: '1px' }}>DIRECT CONNECTION</h3>
            </div>

            <p style={{ color: '#94a3b8', marginBottom: '30px', fontSize: '15px' }}>Prefer a direct chat or a quick call? Reach out through any of these platforms.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '50px' }}>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass"
                  whileHover={{ scale: 1.1, background: 'rgba(6, 182, 212, 0.1)', borderColor: '#06b6d4' }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    height: '70px',
                    color: '#94a3b8',
                    transition: '0.3s'
                  }}
                >
                  <i className={link.icon}></i>
                </motion.a>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
