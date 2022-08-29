import { Button, Card, Stack, Text, Title } from '@mantine/core'
import { useState } from 'react'

import ViewWrapper from '../Motion/ViewWrapper'

type Props = {
  image: string
  title: string
}

function ExpandedBoard({ image, title }: Props) {
  const [big, setBig] = useState<boolean>(false)
  const size = big ? '40rem' : '25rem'
  return (
    <ViewWrapper>
      <Stack justify="center" align="center">
        <Card
          sx={{
            margin: '0 auto',

            height: '30rem',
            width: size,
            borderRadius: '3rem',
            backgroundImage: `url("${image}")`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            boxShadow: '0px 5px 10px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          <Title>{title}</Title>
        </Card>

        <Text size="xl" weight={700}>
          {' '}
          {title}
        </Text>
      </Stack>
      <Button onClick={() => setBig(!big)}>Toggle</Button>
    </ViewWrapper>
  )
}
export default ExpandedBoard
