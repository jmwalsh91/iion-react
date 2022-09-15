import { Embla } from '@mantine/carousel'
import {
  Button,
  Center,
  Container,
  Paper,
  Space,
  Stack,
  Text,
} from '@mantine/core'
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
        <Stack align="center">
          <Paper
            sx={{
              height: '25rem',
              width: '25rem',
              borderRadius: '3rem',
              backgroundImage: `url("${image}")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              boxShadow: '0px 5px 10px 4px rgba(0, 0, 0, 0.5)',
              display: 'flex',
            }}
            onClick={() => onSlideClick()}
          >
            <Center>
              <Paper
                sx={{
                  marginTop: '15rem',
                  height: '3rem',
                  width: '25rem',
                  opacity: '0.8',

                  backdropFilter: 'blur(21px)',
                  backgroundColor: 'rgba(100, 27, 76, 0.8)',
                  boxShadow: '0px 5px 10px 4px rgba(0, 0, 0, 0.5)',
                }}
              >
                <Text
                  color="white"
                  align="center"
                  sx={{
                    margin: '0 auto',
                    padding: '0.5rem',
                  }}
                >
                  {title}
                </Text>
              </Paper>
            </Center>
          </Paper>
          <Button variant="filled" color="dark" sx={{ width: '10rem' }}>
            View Collection
          </Button>
        </Stack>
      </motion.div>
    </LayoutGroup>
    /*    </ViewWrapper> */
  )
}
export default CollectionPreview
