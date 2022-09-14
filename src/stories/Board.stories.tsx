import { Meta } from '@storybook/react'

import Board from '../components/Surfaces/Board'

const meta: Meta = {
  title: 'Board',
  component: Board,
}

const mockProps = {
  title: 'Solargoth',
  image: 'src/public/img1.png',
  color: 'teal',
}

export default meta
export function Default(args: any) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: mockProps.color,
      }}
    >
      <Board {...args}></Board>
    </div>
  )
}

Default.args = {
  image: mockProps.image,
  title: mockProps.title,
}
