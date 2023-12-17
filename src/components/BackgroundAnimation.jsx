import './BackgroundAnimation.css'
import Box from '@mui/material/Box'
import React from 'react'

const BackgroundAnimation = ({ count = 15, color }) => {
  return (
    <Box className="background" component="ul">
      {Array(count)
        .fill()
        .map((_, i) => {
          var size = Math.random() * 75 + 75

          return (
            <li
              key={i}
              style={{
                left: `${Math.random() * 80}%`,
                bottom: `-${Math.random() * 100 + size}px`,
                animationDelay: `${Math.random() * 20}s`,
                height: `${size}px`,
                width: `${size}px`,
                background: color,
                // background:
                //   color ||
                //   `hsl(${Math.random() * 360}, ${Math.random() * 100}%, 50%)`,
              }}
            />
          )
        })}
    </Box>
  )
}

export default BackgroundAnimation
