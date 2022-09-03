import {
  BoardDetailProps,
  BoardProps,
  CollectionCardProps,
} from '~/types/components'
/**
 * Collection Card props
 */
export const CollectionCardProp: CollectionCardProps = {
  owner: '0x1234567890123456789012345678901234567890',
  title: 'Sbl8City',
  description: `..SHRDLU was an early natural-language understanding computer program, developed by Terry Winograd at MIT in 1968–1970. In the program, the user carries on a conversation with the computer, moving objects, naming collections and querying the state of a simplified "blocks world", essentially a virtual box filled with different blocks.[1]SHRDLU was an early natural-language understanding computer program, developed by Terry Winograd at MIT in 1968–1970."blocks world", "blocks world", "blocks world", 
    ,`,
  image: 'src/public/img1.png',
  url: '',
  bg: 'src/public/iionbg.png',
}
/**
 * Board card mocks props
 */
export const BoardCardProps: BoardProps = {
  image: 'src/public/img1.png',
  title: 'ElYucateco',
}
export const BoardDetailCardProps: BoardDetailProps = {
  owner: '0x1234567890123456789012345678901234567890',
  title: 'ElYucateco',
  description: `In the program, the user carries on a conversation with the computer, moving objects, naming collections and querying the state of a simplified "blocks world"
    ,`,
  image: 'src/public/img1.png',
  price: 0.005,
  shareUrl: '',
  buyUrl: '',
}
/**
 * Gallery mock for creating Boards
 */
export const mockGallery = [
  { title: 'ElYucateco', image: 'src/public/img1.png' },
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
