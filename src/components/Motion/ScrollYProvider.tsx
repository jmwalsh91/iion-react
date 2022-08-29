import { Container, Grid, Slider, Title } from '@mantine/core'
import chroma from 'chroma-js'
import { motion, MotionConfig, useScroll, useSpring } from 'framer-motion'
import React, { useEffect } from 'react'

function ScrollYProvider() {
  const [color1, setColor1] = React.useState<string>()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)
  const colorz = chroma.bezier(['lightblue', 'purple', 'cyan']).scale()

  scrollYProgress.onChange(() => {
    console.log(scrollYProgress.get())
    setColor1(colorz(scrollYProgress.get()).css())
    console.log(color1)
  })
  return (
    <div
      style={{
        backgroundColor: color1,
        height: '300vh',
      }}
    >
      <motion.div style={{ scale: scrollYProgress, backgroundColor: 'red' }} />

      {color1}
    </div>
  )
}

export default ScrollYProvider
