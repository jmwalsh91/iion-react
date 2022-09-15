import { Carousel, Embla } from '@mantine/carousel'
import { LayoutGroup } from 'framer-motion'
import { useState } from 'react'

import Board from '../Surfaces/Board'

import { BoardProps } from '~/types/components'
import CollectionPreview from '../Cards/CollectionPreview'

type Props = {
  gallery: BoardProps[]
}

function CollectionCarousel({ gallery }: Props) {
  const [embla, setEmbla] = useState<Embla | null>(null)

  return (
    <LayoutGroup>
      <Carousel
        getEmblaApi={setEmbla}
        height="40rem"
        breakpoints={[
          { minWidth: 'xl', slideSize: '25%' },
          { minWidth: 'md', slideSize: '50%', slideGap: 3 },
          { minWidth: 'sm', slideSize: '66%', slideGap: 3 },
          { minWidth: 'xs', slideSize: '100%', slideGap: 5 },
        ]}
        loop
        align="center"
        slidesToScroll={1}
        sx={{
          marginTop: '7rem',
        }}
      >
        {gallery.map((item: BoardProps) => {
          return (
            <Carousel.Slide key={item.title}>
              <CollectionPreview
                title={item.title}
                image={item.image}
                embla={embla}
                description="string string"
              />
            </Carousel.Slide>
          )
        })}
      </Carousel>
    </LayoutGroup>
  )
}
export default CollectionCarousel
