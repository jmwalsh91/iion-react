import { Button, Card, Grid, Mark, Stack, Text, Title } from '@mantine/core'

import { CollectionCardProps } from '~/types/components'

function CollectionCard({
  owner,
  title,
  description,
  image,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  url,
  bg,
}: CollectionCardProps) {
  const shortenedAddress =
    owner.substring(0, 5) + '...' + owner.substring(owner.length - 5)
  const background = bg
    ? `url("${bg}")`
    : 'linear-gradient(45deg, beige , white)'
  return (
    <Card
      withBorder
      shadow="lg"
      p="xl"
      sx={{
        height: '30rem',
        maxWidth: '50rem',
        minWidth: '25rem',
        margin: '3rem',
        backgroundImage: background,
        borderRadius: '3rem',
        border: '2px solid #eaeaea',
        boxShadow: '0px 5px 10px 4px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Text
        sx={{
          zIndex: 9000,
        }}
      >
        {shortenedAddress}
      </Text>
      <Title align="right">
        <Mark color="yellow" p="xs">
          {title}
        </Mark>
      </Title>

      <Card.Section
        inheritPadding
        p="xl"
        sx={{
          width: '100%',
        }}
      >
        <Grid
          justify="space-between"
          gutter={'md'}
          sx={{
            width: '100%',
          }}
        >
          <Grid.Col span={4}>
            <Stack align="inherit">
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '15rem',
                  width: '100%',
                  borderRadius: '3rem',
                  border: '2px solid #eaeaea',
                  boxShadow: '0px 5px 10px 4px rgba(0, 0, 0, 0.5)',
                }}
              ></div>
              <Button
                variant="filled"
                color="dark"
                sx={{
                  marginTop: '1rem',
                  marginLeft: '2rem',

                  boxShadow: '0px 1px 5px 2px rgba(0, 0, 0, 0.3)',
                }}
              >
                View on Foundation
              </Button>
            </Stack>
          </Grid.Col>

          <Grid.Col span={7}>
            <Card
              withBorder
              p="xl"
              shadow="lg"
              sx={{
                border: '2px solid teal',
              }}
            >
              <Card.Section inheritPadding withBorder>
                <Text>{description}</Text>
              </Card.Section>
            </Card>
          </Grid.Col>
        </Grid>
      </Card.Section>
    </Card>
  )
}

export default CollectionCard
