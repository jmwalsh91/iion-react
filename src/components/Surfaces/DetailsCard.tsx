import { Button, Card, Group, Space, Stack, Text, Title } from '@mantine/core'
import { motion } from 'framer-motion'

import { BoardDetailProps } from '~/types/components'

function DetailsCard({
  owner,
  title,
  description,
  image,
  price,
  shareUrl,
  buyUrl,
}: BoardDetailProps) {
  const shortenedAddress =
    owner.substring(0, 5) + '...' + owner.substring(owner.length - 5)
  /**
   * Both of these are required props, but at this point, it is not worth the work to fetch vals.
   */
  const urls = [shareUrl, buyUrl]
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        z: 10000000000,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <Card
        p="lg"
        shadow="lg"
        withBorder
        sx={{
          position: 'absolute',
          width: '20rem',
          height: '20rem',
          margin: '3rem',
          zIndex: 9,
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
            {title}
          </Title>

          <Text color="dimmed" align="right">
            by: {shortenedAddress}
          </Text>
          <Card.Section p="lg">
            <Text align="right">
              {description}
              <Space />
            </Text>
          </Card.Section>
          <Group
            sx={{
              justifyContent: 'flex-end',
              alignContent: 'flex-end',
            }}
          >
            <Text size="xl">{price + ' ETH'}</Text>
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
    </motion.div>
  )
}

export default DetailsCard
