import { BoardProps, CollectionCardProps } from '~/types/components'
/**
 * Collection Card props
 */
export const CollectionCardProp: CollectionCardProps = {
  owner: '0x1234567890123456789012345678901234567890',
  title: 'Solargoth',
  description:
    'Solargoth is a space that is a place for you to explore and enjoy.',
  image: 'src/public/img1.png',
  url: '',
  bg: 'src/public/iionbg.png',
}
/**
 * Board card mocks props
 */
export const BoardCardProps: BoardProps = {
  image: 'src/public/img1.png',
  title: 'Solargoth',
}

/**
 * Gallery mock for creating Boards
 */
export const mockGallery = [
  { title: 'Solargoth', image: 'src/public/img1.png' },
  { title: 'Phthalo', image: 'src/public/img2.png' },
  { title: 'Tridentata', image: 'src/public/img3.png' },
  { title: 'Waiting', image: 'src/public/img4.png' },
  { title: 'Socrates', image: 'src/public/img5.png' },
  { title: 'Jesuve', image: 'src/public/img6.png' },
  { title: 'Gorge', image: 'src/public/img7.png' },
  { title: 'edge', image: 'src/public/img8.png' },
  { title: 'Thing', image: 'src/public/achillefreud.png' },
  { title: 'Ideology', image: 'src/public/slavojclown.png' },
]
