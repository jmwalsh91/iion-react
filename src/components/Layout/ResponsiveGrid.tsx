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
      <Grid.Col span={12}>{slot1}</Grid.Col>
      <Grid.Col span={12}>{slot2}</Grid.Col>
      <Grid.Col span={12}>{slot3}</Grid.Col>
      <Grid.Col span={12}>{slot4}</Grid.Col>
    </Grid>
  )
}

export default ResponsiveGrid
