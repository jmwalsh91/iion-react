import { Card, Text, Stack, Button } from '@mantine/core'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import ViewWrapper from '../Motion/ViewWrapper'

type Props = {
  image: string
  title: string
}

function Board({ image, title }: Props) {
  const [open, setOpen] = useState(true)

  return (
    <ViewWrapper>
      <Stack justify="center" align="center">
        <Card
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
        >
          <Button variant="gradient" onClick={() => setOpen(!open)}>
            Open
          </Button>
        </Card>

        <Text size="xl" weight={700}>
          {' '}
          {title}
        </Text>
      </Stack>
    </ViewWrapper>
  )
}
export default Board
