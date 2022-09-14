import { Grid } from '@mantine/core'
import React from 'react'

type Props = {
  slot1: React.ReactNode
  slot2: React.ReactNode
  slot3: React.ReactNode
  slot4: React.ReactNode
}

function ResponsiveGrid({ slot1, slot2, slot3, slot4 }: Props) {
  return (
    <Grid>
      <Grid.Col span={6}>
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'red',
          }}
        >
          {slot1}
        </div>
      </Grid.Col>
      <Grid.Col span={6}>
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'red',
          }}
        >
          {slot2}
        </div>
      </Grid.Col>
      <Grid.Col span={8}>
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'red',
          }}
        >
          {slot3}
        </div>
      </Grid.Col>
      <Grid.Col span={4}>
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'red',
          }}
        >
          {slot4}
        </div>
      </Grid.Col>
    </Grid>
  )
}

export default ResponsiveGrid
