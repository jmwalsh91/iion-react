import { Center, Container } from '@mantine/core'
import React from 'react'

type Props = {
  children: React.ReactNode
}

function Backdrop({ children }: Props) {
  return (
    <Container
      fluid
      sx={{
        height: '100%',

        backgroundImage: `url("/iionbg.png
        ")`,
      }}
    >
      <Center>{children}</Center>
    </Container>
  )
}

export default Backdrop
