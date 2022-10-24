import { Paper } from '@mantine/core'

import ViewWrapper from '../Motion/ViewWrapper'

type Props = {
  image: string
  title?: string
  h?: string
  w?: string
}

function ExpandedBoard({ image, title, h, w }: Props) {
  return (
    <ViewWrapper>
      <Paper
        key={title}
        sx={{
          margin: '0 auto',
          height: h ? h : '30rem',
          width: w ? w : '30rem',
          zIndex: 3000,
          borderRadius: '3rem',
          backgroundImage: `url("${image}")`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          boxShadow: '0px 5px 10px 4px rgba(0, 0, 0, 0.5)',
        }}
      ></Paper>
    </ViewWrapper>
  )
}
export default ExpandedBoard
