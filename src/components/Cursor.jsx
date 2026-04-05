import React, { useEffect, useRef } from 'react'

const Cursor = () => {
  const cursorRef = useRef(null)

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }

      // Create mouse trail effect
      const trail = document.createElement('div')
      trail.className = 'trail'
      trail.style.left = `${e.clientX}px`
      trail.style.top = `${e.clientY}px`
      document.body.appendChild(trail)

      // Remove trail element after animation
      setTimeout(() => {
        trail.remove()
      }, 600)
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return <div className="cursor-glow" ref={cursorRef}></div>
}

export default Cursor
