import { Container } from '@mantine/core'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useState } from 'react'

import { mockGallery } from '~/utils/mocks/FoundationMocks'

function AnimateExpandBoard() {
  const [selectedId, setSelectedId] = useState<string>('null')
  return (
    <Container
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundColor: 'orange',
      }}
    >
      <LayoutGroup>
        {mockGallery.map((img) => (
          <motion.img
            key={img.title}
            layoutId={img.title}
            onClick={() => setSelectedId(img.title)}
            width="2rem"
            height="5rem"
          />
        ))}
        <AnimatePresence>
          {selectedId && (
            <motion.img layoutId={selectedId} width="6rem" height="5rem" />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </Container>
  )
}

export default AnimateExpandBoard
