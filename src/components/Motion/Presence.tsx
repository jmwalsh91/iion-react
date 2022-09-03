import { Button, Title } from '@mantine/core'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import ExpandedBoard from '../Surfaces/ExpandedBoard'

type Props = {
  children: React.ReactNode
}

function Presence({ children }: Props) {
  const [open, setOpen] = useState(true)
  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => console.log('hihihi')}
    >
      {open ? (
        <motion.div
          key="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          key="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>Hello HEEEEE</Title>
          <ExpandedBoard image={'src/public/img7.png'} title={'Seven'} />{' '}
        </motion.div>
      )}
      <Button variant="gradient" onClick={() => setOpen(!open)}>
        Toggle{' '}
      </Button>
    </AnimatePresence>
  )
}

export default Presence
