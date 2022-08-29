import { Meta } from '@storybook/react'

import Board from '../components/Surfaces/Board'

const meta: Meta = {
  title: 'Board',
  component: Board,
}
const handleClick = () => {
  console.log('Clicky!')
}
const mockProps = {
  title: 'Solargoth',
  image: 'src/public/img1.png',
  color: 'teal',
}

export default meta

export const Default = () => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: mockProps.color,
    }}
  >
    <Board image={mockProps.image} title={mockProps.title}></Board>
  </div>
)
