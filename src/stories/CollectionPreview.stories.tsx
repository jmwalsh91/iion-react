import { Meta } from '@storybook/react'

import { mockGallery } from '~/utils/mocks/FoundationMocks'

import CollectionPreview from '../components/Cards/CollectionPreview'

const meta: Meta = {
  title: 'Collection Preview',
  component: CollectionPreview,
}

const mockProps = {
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
      <CollectionPreview {...args}></CollectionPreview>
    </div>
  )
}

Default.args = {
  image: mockGallery[0].image,
  title: mockGallery[0].title,
  description: 'this is a mock description',
}
