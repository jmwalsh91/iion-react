import { Embla } from '@mantine/carousel'
import { Center, Container, Paper, Space, Text } from '@mantine/core'
import { useClickOutside } from '@mantine/hooks'
import { LayoutGroup, motion } from 'framer-motion'
import { useCallback, useState } from 'react'

import { BoardDetailCardProps } from '~/utils/mocks/FoundationMocks'

import DetailsCard from '../Surfaces/DetailsCard'
type Props = {
  image: string
  title: string
  description: string
  embla?: Embla | null
}

function CollectionPreview({ image, title, description, embla }: Props) {
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
            width: '25rem',
            borderRadius: '3rem',
            backgroundImage: `url("${image}")`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            boxShadow: '0px 5px 10px 4px rgba(0, 0, 0, 0.5)',
          }}
          onClick={() => onSlideClick()}
        >
          <Center>
            <Paper
              sx={{
                marginTop: '10rem',
                height: '3rem',
                width: '25rem',
                opacity: '0.8',
                backdropFilter: 'lighten(1.5)',
                backgroundColor: 'rgba(100, 27, 76, 0.5)',
                boxShadow: '0px 5px 10px 4px rgba(0, 0, 0, 0.5)',

              }}
            >
              <Text color="white">{description}</Text>
            </Paper>
          </Center>
        </Paper>
      </motion.div>
    </LayoutGroup>
    /*    </ViewWrapper> */
  )
}
export default CollectionPreview
