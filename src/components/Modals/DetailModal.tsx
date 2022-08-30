import { Grid, Modal, Paper, Stack, Title, Text } from '@mantine/core'

import { mockGallery } from '~/utils/mocks/FoundationMocks'

import ExpandedBoard from '../Surfaces/ExpandedBoard'

function DetailModal() {
  return (
    <Paper>
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
    </Paper>
  )
}

export default DetailModal
