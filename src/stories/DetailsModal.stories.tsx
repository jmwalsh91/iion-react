import { Container } from '@mantine/core'
import { Meta } from '@storybook/react'

import DetailModal from '../components/Modals/DetailModal'

const meta: Meta = {
  title: 'Detail Modal',
  component: DetailModal,
}

export default meta

export const Default = () => (
  <Container
    fluid
    sx={{
      height: '100vh',
      padding: '2rem',
      backgroundColor: 'pink',
    }}
  >
    <DetailModal />
  </Container>
)
