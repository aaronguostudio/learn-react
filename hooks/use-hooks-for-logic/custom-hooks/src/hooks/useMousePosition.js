import React, { useState, useEffect } from 'react'

const useMousePostion = () => {
  const [ positions, setPositions ] = useState({x: 0, y: 0})
  useEffect(() => {
    const updateMouse = e => {
      setPositions({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('mousemove', updateMouse)
    return () => {
      document.removeEventListener('mousemove', updateMouse)
    }
  })

  return positions
}

export default useMousePostion
