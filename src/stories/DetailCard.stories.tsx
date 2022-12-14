import { Container } from '@mantine/core'
import { Meta } from '@storybook/react'

import DetailsCard from '../components/Surfaces/DetailsCard'

import { BoardDetailProps } from '~/types/components'

const meta: Meta = {
  title: 'Details Card',
  component: DetailsCard,
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

export function Default(args: JSX.IntrinsicAttributes & BoardDetailProps) {
  return (
    <Container
      fluid
      sx={{
        height: '100vh',
        padding: '2rem',
        backgroundColor: 'pink',
      }}
    >
      <DetailsCard {...args} />
    </Container>
  )
}

Default.args = {
  owner: mockProps.owner,
  title: mockProps.title,
  description: mockProps.description,
  image: mockProps.image,
  price: mockProps.price,
  shareUrl: mockProps.shareUrl,
  buyUrl: mockProps.buyUrl,
}
