import { Meta } from '@storybook/react'

import CollectionCard from '../components/Surfaces/CollectionCard'

import { CollectionCardProps } from '~/types/components'

const meta: Meta = {
  title: 'Collection Card',
  component: CollectionCard,
}

const mockProps: CollectionCardProps = {
  owner: '0x1234567890123456789012345678901234567890',
  title: 'Solargoth',
  description:
    'Solargoth is a space that is a place for you to explore and enjoy.',
  image: 'src/public/img1.png',
  url: '',
  bg: 'src/public/iionbg.png',
}
export default meta

export function Default(args: JSX.IntrinsicAttributes & CollectionCardProps) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'teal',
      }}
    >
      <CollectionCard {...args} />
    </div>
  )
}

Default.args = {
  owner: mockProps.owner,
  title: mockProps.title,
  description: mockProps.description,
  image: mockProps.image,
  url: mockProps.url,
  bg: mockProps.bg,
}
