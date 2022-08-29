import chroma from 'chroma-js'
import { motion, useScroll } from 'framer-motion'
import { useState } from 'react'

function ScrollYProvider() {
  const [color1, setColor1] = useState<string>()
  const { scrollYProgress } = useScroll()

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
