import { Container } from '@mantine/core'
import { Meta } from '@storybook/react'

import ExpandedBoard from '../components/Surfaces/ExpandedBoard'

import { BoardDetailProps } from '~/types/components'

const meta: Meta = {
  title: 'Expanded Board',
  component: ExpandedBoard,
}
const handleClick = () => {
  console.log('Clicky!')
}
const mockProps: BoardDetailProps = {
  owner: '0x1234567890123456789012345678901234567890',
  title: 'Solargoth',
  description:
    'Solargoth is a space that is a place for you to explore and enjoy.',
  image: 'src/public/img1.png',
  price: 0.005,
  shareUrl: '',
  buyUrl: '',
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
    <ExpandedBoard title={mockProps.title} image={mockProps.image} />
  </Container>
)
