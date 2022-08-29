import { Meta } from '@storybook/react'

import DetailsCard from '../components/Surfaces/DetailsCard'

import { BoardDetailProps } from '~/types/components'
import { Container } from '@mantine/core'

const meta: Meta = {
  title: 'Details Card',
  component: DetailsCard,
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
    <DetailsCard
      owner={mockProps.owner}
      title={mockProps.title}
      description={mockProps.description}
      price={mockProps.price}
      image={mockProps.image}
      shareUrl={mockProps.shareUrl}
      buyUrl={mockProps.buyUrl}
    />
  </Container>
)
