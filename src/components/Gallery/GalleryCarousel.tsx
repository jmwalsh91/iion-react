import { Carousel } from '@mantine/carousel'

import Board from '../Surfaces/Board'

import { BoardProps } from '~/types/components'

type Props = {
  gallery: BoardProps[]
}

function GalleryCarousel({ gallery }: Props) {
  return (
    <Carousel
      height="40rem"
      slideSize="33.3333%"
      loop
      align="start"
      slidesToScroll={2}
      sx={{
        marginTop: '7rem',
      }}
    >
      {gallery.map((item: BoardProps) => {
        return (
          <Carousel.Slide key={item.title}>
            <Board title={item.title} image={item.image} />
          </Carousel.Slide>
        )
      })}
    </Carousel>
  )
}
export default GalleryCarousel
