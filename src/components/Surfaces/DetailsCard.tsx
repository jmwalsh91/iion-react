import {
  Card,
  Stack,
  Title,
  Text,
  Button,
  Group,
  Space,
  Breadcrumbs,
} from '@mantine/core'
import { m } from 'framer-motion'
import React from 'react'

type Props = {}

function DetailsCard({}: Props) {
  const ownerId = '0x48Bb46F5B7c115d93837DcA2a81C608CdE52a8Cf'
  const shortenedAddress =
    ownerId.substring(0, 5) + '...' + ownerId.substring(ownerId.length - 5)
  return (
    <Card
      p="lg"
      shadow="lg"
      withBorder
      sx={{
        width: '20rem',
        height: '20rem',
        margin: '3rem',
      }}
    >
      <Stack
        sx={{
          height: '100%',
        }}
      >
        <Title
          align="right"
          sx={{
            marginBottom: '-1rem',
          }}
        >
          Name of Item
        </Title>

        <Text color="dimmed" align="right">
          by: {shortenedAddress}
        </Text>
        <Card.Section p="lg">
          <Text align="right">
            "The totem that acts as a double to power is no longer protected by
            taboo; there is a breach in the wall of prohibitions." - Achille
            Mbembe, "The Aesthetics of Vulgarity"
            <Space />
          </Text>
        </Card.Section>
        <Group
          sx={{
            justifyContent: 'flex-end',
            alignContent: 'flex-end',
          }}
        >
          <Text size="xl">0.005 ETH</Text>
          <Button variant="filled" color="dark" size="lg">
            {' '}
            Buy!
          </Button>
          <Button variant="light" size="lg" color="dark">
            {' '}
            Share!{' '}
          </Button>
        </Group>
      </Stack>
    </Card>
  )
}

export default DetailsCard
