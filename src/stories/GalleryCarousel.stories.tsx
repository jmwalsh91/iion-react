import { Meta } from '@storybook/react'

import { mockGallery } from '~/utils/mocks/FoundationMocks'

import GalleryCarousel from '../components/Gallery/GalleryCarousel'

const meta: Meta = {
  title: 'GalleryCarousel',
  component: GalleryCarousel,
}
const handleClick = () => {
  console.log('Clicky!')
}
const mockProps = {
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
    <GalleryCarousel gallery={mockGallery}></GalleryCarousel>
  </div>
)
