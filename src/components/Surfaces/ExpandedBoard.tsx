import { Button, Card, Paper, Stack, Text, Title } from '@mantine/core'
import { useState } from 'react'

import ViewWrapper from '../Motion/ViewWrapper'

type Props = {
  image: string
  title?: string
}

function ExpandedBoard({ image, title,  }: Props) {

  return (
    <ViewWrapper>
      <Paper
        sx={{
          margin: '0 auto',
          height: '30rem',
          width: '30rem',
          zIndex: 3000,
          borderRadius: '3rem',
          backgroundImage: `url("${image}")`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          boxShadow: '0px 5px 10px 4px rgba(0, 0, 0, 0.5)',
        }}
      ></Paper>
    </ViewWrapper>
  )
}
export default ExpandedBoard
