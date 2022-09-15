import { Meta } from '@storybook/react'

import { mockGallery } from '~/utils/mocks/FoundationMocks'

import CollectionCarousel from '../components/Gallery/CollectionCarousel'

const meta: Meta = {
  title: 'CollectionCarousel',
  component: CollectionCarousel,
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
      <CollectionCarousel {...args}></CollectionCarousel>
    </div>
  )
}

Default.args = {
  gallery: mockGallery,
}
