import {
  Button,
  Card,
  Container,
  Dialog,
  Paper,
  Stack,
  Text,
} from '@mantine/core'
import { closeAllModals, openModal } from '@mantine/modals'
import { motion, MotionConfig } from 'framer-motion'
import { useState } from 'react'

import DetailModal from '../Modals/DetailModal'
import ViewWrapper from '../Motion/ViewWrapper'
import ExpandedBoard from './ExpandedBoard'

type Props = {
  image: string
  title: string
}

function BoardWithModal({ image, title }: Props) {
  const [open, setOpen] = useState(false)

  return (
    /*  <ViewWrapper> */
    <motion.div layout>
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
        onClick={() =>
          openModal({
            title: 'Details',
            children: (
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
                <Container>
                  <DetailModal />
                  <Button variant="gradient" onClick={() => closeAllModals()}>
                    Close
                  </Button>
                </Container>
                {/*   </Dialog> */}
              </motion.div>
            ),
          })
        }
      ></Paper>
    </motion.div>
    /*    </ViewWrapper> */
  )
}
export default BoardWithModal
