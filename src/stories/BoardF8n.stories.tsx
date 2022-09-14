import { Meta } from '@storybook/react'

import BoardF8n from '../components/Surfaces/BoardF8n'

const meta: Meta = {
  title: 'BoardF8n',
  component: BoardF8n,
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
      <BoardF8n {...args}></BoardF8n>
    </div>
  )
}

Default.args = {
  image: mockProps.image,
  title: mockProps.title,
  description: 'this is a mock description for the card component',
}
