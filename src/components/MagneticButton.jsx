import React, { useRef } from 'react'

const MagneticButton = ({ children, className, onClick, ...props }) => {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
  }

  const handleMouseLeave = () => {
    ref.current.style.transform = 'translate(0, 0)'
  }

  return (
    <div 
      className="magnetic-wrapper" 
      style={{ display: 'inline-block' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        ref={ref} 
        className={className} 
        style={{ transition: 'transform 0.1s ease-out' }}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    </div>
  )
}

export default MagneticButton
