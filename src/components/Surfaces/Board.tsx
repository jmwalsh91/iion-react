import { Embla } from '@mantine/carousel'
import {
  Button,
  Card,
  Container,
  Dialog,
  Grid,
  Group,
  Paper,
  Space,
  Stack,
  Text,
} from '@mantine/core'
import { useClickOutside } from '@mantine/hooks'
import useEmblaCarousel from 'embla-carousel-react'
import { LayoutGroup, motion, MotionConfig } from 'framer-motion'
import { useCallback, useState } from 'react'
import { BoardDetailCardProps } from '~/utils/mocks/FoundationMocks'

import DetailModal from '../Modals/DetailModal'
import ViewWrapper from '../Motion/ViewWrapper'
import DetailsCard from './DetailsCard'
import ExpandedBoard from './ExpandedBoard'

type Props = {
  image: string
  title: string
  embla: Embla | null
}

function Board({ image, title, embla }: Props) {
  const [open, setOpen] = useState(false)

  const onSlideClick = useCallback(() => {
    embla && embla.clickAllowed() ? setOpen(true) : null
  }, [embla])

  const outsideRef = useClickOutside(() => setOpen(false))

  return (
    /*  <ViewWrapper> */
    <LayoutGroup>
      <motion.div layout key={title} ref={outsideRef}>
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
          onClick={() => onSlideClick()}
        >
          {open && (
            <>
              <Space h="xl" />
              <DetailsCard
                owner={BoardDetailCardProps.owner}
                title={BoardDetailCardProps.title}
                description={BoardDetailCardProps.description}
                image={BoardDetailCardProps.image}
                price={BoardDetailCardProps.price}
                shareUrl={''}
                buyUrl={''}
              />
            </>
          )}
        </Paper>
      </motion.div>
    </LayoutGroup>
    /*    </ViewWrapper> */
  )
}
export default Board
