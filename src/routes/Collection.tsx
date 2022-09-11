import { Container, Paper, Title } from '@mantine/core'

import Section from '~/components/Motion/Section'

function Collection() {
  return (
    <Container>
      <Section>
        <Title>Collection</Title>
        <Paper
          sx={{
            width: '25rem',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Title>Description</Title>
        </Paper>
      </Section>
    </Container>
  )
}

export default Collection
