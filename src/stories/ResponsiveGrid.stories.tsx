import { Paper } from '@mantine/core'
import { Meta } from '@storybook/react'
import { ResponsiveGridProps } from '~/types/components'

import ResponsiveGrid from '../components/Layout/ResponsiveGrid'

const meta: Meta = {
  title: 'Collection Card',
  component: ResponsiveGrid,
}
//FIXME: These are placeholder props
const mockProps: any = {
  owner: '0x1234567890123456789012345678901234567890',
  title: 'Solargoth',
  description:
    'Solargoth is a space that is a place for you to explore and enjoy.',
  image: 'src/public/img1.png',
  url: '',
  bg: 'src/public/iionbg.png',
}
export default meta

export function Default(args: JSX.IntrinsicAttributes & ResponsiveGridProps) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'teal',
      }}
    >
      <Paper
        sx={{
          width: '50vw',
          height: '50vh',
          backgroundColor: 'pink',
        }}
      >
        <ResponsiveGrid {...args} />
      </Paper>
    </div>
  )
}

Default.args = {
  slot1: 'slot1',
  slot2: 'slot2',
  slot3: 'slot3',
  slot4: 'slot4',
}
