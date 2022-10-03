import { Container, Paper, Title } from '@mantine/core'

import Section from '~/components/Motion/Section'
import CollectionCard from '~/components/Surfaces/CollectionCard'
import { CollectionCardProp } from '~/utils/mocks/FoundationMocks'

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
          <CollectionCard
            owner={CollectionCardProp.owner}
            title={CollectionCardProp.title}
            description={CollectionCardProp.description}
            image={CollectionCardProp.image}
            url={''}
          />
        </Paper>
      </Section>
    </Container>
  )
}

export default Collection
