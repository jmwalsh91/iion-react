import { Container } from '@mantine/core'
import chroma from 'chroma-js'
import { useScroll } from 'framer-motion'
import { useState } from 'react'

type Props = {
  children: React.ReactNode
}

function Section({ children }: Props) {
  const [color1, setColor1] = useState<string>()
  const { scrollYProgress } = useScroll()

  const colorz = chroma.bezier(['lightblue', 'purple', 'cyan']).scale()

  scrollYProgress.onChange(() => {
    console.log(scrollYProgress.get())
    setColor1(colorz(scrollYProgress.get()).css())
    console.log(color1)
  })

  return (
    <Container
      fluid
      style={{
        backgroundColor: color1,
        height: '100vh',
        /*         scrollSnapStop: 'always',
        scrollSnapType: 'y proximity',
        scrollSnapAlign: 'start', */
      }}
    >
      {children}
    </Container>
  )
}

export default Section
