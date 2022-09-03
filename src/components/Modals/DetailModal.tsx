import { Container, Grid } from '@mantine/core'

import {
  BoardDetailCardProps,
  mockGallery,
} from '~/utils/mocks/FoundationMocks'

import DetailsCard from '../Surfaces/DetailsCard'
import ExpandedBoard from '../Surfaces/ExpandedBoard'

function DetailModal() {
  return (
    <>
      <Container fluid>
        <Grid>
          <Grid.Col span={6}>
            <ExpandedBoard
              image={mockGallery[0].image}
              title={mockGallery[0].title}
            />
          </Grid.Col>

          <Grid.Col span={4}>
            <DetailsCard
              owner={BoardDetailCardProps.owner}
              title={BoardDetailCardProps.title}
              description={BoardDetailCardProps.description}
              image={BoardDetailCardProps.image}
              price={BoardDetailCardProps.price}
              shareUrl={''}
              buyUrl={''}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}

export default DetailModal
