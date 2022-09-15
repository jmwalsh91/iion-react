import { Grid } from '@mantine/core'
import React from 'react'

type Props = {
  slot1: React.ReactNode
  slot2: React.ReactNode
  slot3: React.ReactNode
  slot4: React.ReactNode
  slot5: React.ReactNode
}

function ResponsiveGrid({ slot1, slot2, slot3, slot4, slot5 }: Props) {
  return (
    <Grid>
      <Grid.Col lg={6}>
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'red',
            justifyContent: 'flex-start',
          }}
        >
          {slot1}
        </div>
      </Grid.Col>
      <Grid.Col lg={6}>
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'red',
            justifySelf: 'flex-end',
          }}
        >
          {slot2}
        </div>
      </Grid.Col>
      <Grid.Col lg={6}>
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
            justifySelf: 'center',
          }}
        >
          {slot4}
        </div>
      </Grid.Col>
      <Grid.Col lg={6}>
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'red',
          }}
        >
          {slot5}
        </div>
      </Grid.Col>
    </Grid>
  )
}

export default ResponsiveGrid
