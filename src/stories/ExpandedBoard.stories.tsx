import { Container } from '@mantine/core'
import { Meta } from '@storybook/react'

import ExpandedBoard from '../components/Surfaces/ExpandedBoard'

import { BoardDetailProps } from '~/types/components'

const meta: Meta = {
  title: 'Expanded Board',
  component: ExpandedBoard,
}

const mockProps: BoardDetailProps = {
  owner: '0x1234567890123456789012345678901234567890',
  title: 'lucidity',
  description:
    ' All of which brings us back to the fate of value. Once, out of some obscure need to classify, I proposed a tripartite account of value: a natural stage (use-value), a commodity stage (exchange-value), and a structural stage (sign-value). Value thus had a natural aspect, a commodity aspect, and a structural aspect.',
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
