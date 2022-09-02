import { Center, Container, Grid, Stack, Text, Title } from '@mantine/core'

import GalleryCarousel from '~/components/Gallery/GalleryCarousel'
import AnimateExpandBoard from '~/components/Motion/AnimateExpandBoard'
import Section from '~/components/Motion/Section'
import CollectionCard from '~/components/Surfaces/CollectionCard'
import ExpandedBoard from '~/components/Surfaces/ExpandedBoard'
import { CollectionCardProp, mockGallery } from '~/utils/mocks/FoundationMocks'

function Index() {
  return (
    <Container
      fluid
      sx={{
        height: '100%',
      }}
    >
      <Section>
        <Grid>
          <Grid.Col span={6}>
            <ExpandedBoard
              image={mockGallery[0].image}
              title={mockGallery[0].title}
            />
          </Grid.Col>
          <Grid.Col
            span={4}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Stack>
              <Title>Welcome to iion.</Title>
              <Text>
                iion is a decentralized space for you to explore and enjoy.
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Section>
      <Section>
        <Stack>
          <Title
            align="right"
            sx={{
              fontSize: '6rem',
            }}
          >
            Browse Featured Collections.
          </Title>
          <Center>
            <CollectionCard
              owner={CollectionCardProp.owner}
              title={CollectionCardProp.title}
              description={CollectionCardProp.description}
              image={CollectionCardProp.image}
              url={CollectionCardProp.url}
            />
          </Center>
        </Stack>
      </Section>
      <Section>
        <Stack>
          <Title
            align="right"
            sx={{
              fontSize: '6rem',
            }}
          >
            Explore
          </Title>
          <GalleryCarousel gallery={mockGallery} />
        </Stack>
      </Section>
      <Section>
        <Grid>
          <Grid.Col span={3}>
            <ExpandedBoard
              image={mockGallery[0].image}
              title={mockGallery[0].title}
            />
          </Grid.Col>
          <Grid.Col
            span={9}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Stack>
              <Section>
                <AnimateExpandBoard />
              </Section>
            </Stack>
          </Grid.Col>
        </Grid>
      </Section>
    </Container>
  )
}

export default Index
