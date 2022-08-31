import { Button, Card, Dialog, Paper, Stack, Text } from '@mantine/core'
import { motion, MotionConfig } from 'framer-motion'
import { useState } from 'react'
import DetailModal from '../Modals/DetailModal'

import ViewWrapper from '../Motion/ViewWrapper'
import ExpandedBoard from './ExpandedBoard'

type Props = {
  image: string
  title: string
}

function Board({ image, title }: Props) {
  const [open, setOpen] = useState(false)

  return (
    /*  <ViewWrapper> */
    <motion.div layout>
      {!open ? (
        <Paper
          sx={{
            margin: '0 auto',
            marginTop: '5 rem',
            height: '25rem',
            width: '10rem',
            borderRadius: '10rem',
            backgroundImage: `url("${image}")`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            boxShadow: '0px 5px 10px 4px rgba(0, 0, 0, 0.5)',
          }}
          onClick={() => setOpen(true)}
        ></Paper>
      ) : (
        <motion.div
          layout
          initial={{
            opacity: 0,
            y: '-100%',
          }}
          animate={{
            opacity: 1,
            y: '0%',
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
        >
          <Dialog
            opened={open}
            position={{ top: '10%', left: '30%' }}
            sx={{
              backgroundColor: 'lime',
              borderRadius: '3rem',
              boxShadow: '0px 5px 10px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* <ExpandedBoard image={image} /> */}
            <DetailModal />
            <Button variant="gradient" onClick={() => setOpen(!open)}>
              Close
            </Button>
          </Dialog>
        </motion.div>
      )}
    </motion.div>
    /*    </ViewWrapper> */
  )
}
export default Board
