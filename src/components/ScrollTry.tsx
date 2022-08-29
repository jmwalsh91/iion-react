import { Container, Grid, Title } from '@mantine/core'
import chroma from 'chroma-js'
import { motion, useScroll } from 'framer-motion'
import { useState } from 'react'

import Board from '~/components/Surfaces/Board'

import Presence from './Motion/Presence'
import ScrollYProvider from './Motion/ScrollYProvider'
import CollectionCard from './Surfaces/CollectionCard'
import DetailsCard from './Surfaces/DetailsCard'

function ScrollTry() {
  const [value, setValue] = useState(40)
  const [color1, setColor1] = useState<string>()
  const { scrollYProgress } = useScroll()
  /*   const scaleX = useSpring(scrollYProgress) */
  const colorz = chroma
    .scale(['lightblue', 'purple', 'cyan', 'pink'])
    .domain([0, 1])

  scrollYProgress.onChange(() => {
    console.log(scrollYProgress.get())

    setValue(scrollYProgress.get())
    console.log('value is ' + value)
    setColor1(colorz(value).css())
    console.log(color1)
  })

  return (
    <div
      style={{
        height: '300vh',
      }}
    >
      <Title size="xl" weight={700}>
        HELLO
      </Title>
      <ScrollYProvider />

      <motion.div>
        <Container>
          <Grid>
            <Grid.Col span={4}>
              <Container>
                <Title>Hello</Title>
                <Board title="Solargoth" image="src/public/img1.png" />
              </Container>
            </Grid.Col>
            <Grid.Col span={8}>
              <Container>
                <Title
                  order={1}
                  sx={{
                    fontSize: '8rem',
                  }}
                >
                  Featured spaces.
                </Title>
              </Container>
            </Grid.Col>
          </Grid>
        </Container>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            type: 'spring',
          },
        }}
        style={{
          backgroundColor:
            /* colorz(scrollYProgress.get()) as unknown as string     */ color1 as unknown as string,
        }}
      >
        <Container>
          <Grid>
            <Grid.Col span={4}>
              <Container>
                <DetailsCard />
              </Container>
            </Grid.Col>
            <Grid.Col span={8}>
              <Presence>
                <Container
                  sx={{
                    backgroundColor: color1,
                  }}
                >
                  <Board title="Tridentata" image="/src/public/img3.png" />
                </Container>
              </Presence>
            </Grid.Col>
          </Grid>
        </Container>
        <Title>Join us</Title>
        {/* <Slider value={value} onChange={setValue} /> */}
      </motion.div>
      <Container>
        <CollectionCard />
      </Container>
      <ScrollYProvider />
    </div>
  )
}

export default ScrollTry
