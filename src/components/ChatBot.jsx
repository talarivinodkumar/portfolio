import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentMessage, setCurrentMessage] = useState("Hi! I'm Vinod's AI Assistant 🤖 How can I help you today?")

  const options = [
    { label: "Tell me about your projects", response: "Vinod has built several full-stack applications, including an Online Food Delivery System, a Smart Tourist Safety Monitoring system, and a professional Finance Dashboard!" },
    { label: "What are your core skills?", response: "Vinod specializes in React, Node.js, Express, MySQL, and modern UI/UX design with Framer Motion and GSAP." },
    { label: "Are you available for work?", response: "Yes! Vinod is looking for enterprise collaborations and innovative full-stack developer roles." },
    { label: "How can I contact you?", response: "You can reach out via the Contact section below, or email directly at vinodtalari509@gmail.com!" }
  ]

  const handleOptionClick = (response) => {
    setCurrentMessage(response)
  }

  return (
    <>
      <motion.button
        className="chat-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-robot"}></i>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-box"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
          >
            <div className="chat-header">
              <i className="fa-solid fa-robot"></i>
              <span>VINOD'S AI</span>
            </div>
            <div className="chat-content">
              <p>{currentMessage}</p>
            </div>
            <div className="chat-options">
              {options.map((opt, index) => (
                <button 
                  key={index} 
                  className="chat-option-btn"
                  onClick={() => handleOptionClick(opt.response)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot
