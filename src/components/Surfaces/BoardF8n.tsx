import { Embla } from '@mantine/carousel'
import { Paper, Space } from '@mantine/core'
import { useClickOutside } from '@mantine/hooks'
import { LayoutGroup, motion } from 'framer-motion'
import { useCallback, useState } from 'react'

import { BoardDetailCardProps } from '~/utils/mocks/FoundationMocks'

import DetailsCard from './DetailsCard'
type Props = {
  image: string
  title: string
  description: string
  embla?: Embla | null
}

function Board({ image, title, description, embla }: Props) {
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
                description={description}
                image={image}
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
