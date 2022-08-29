import { Button, Card, Grid, Mark, Text, Title } from '@mantine/core'

function CollectionCard() {
  const ownerId = '0x48Bb46F5B7c115d93837DcA2a81C608CdE52a8Cf'
  const shortenedAddress =
    ownerId.substring(0, 5) + '...' + ownerId.substring(ownerId.length - 5)
  return (
    <Card
      withBorder
      shadow="lg"
      p="xl"
      sx={{
        height: '100%',
        margin: '3rem',
        backgroundImage: `url("src/public/iionbg.png")`,
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
          Collection Title
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
          justify="space-around"
          sx={{
            width: '100%',
          }}
        >
          <Grid.Col span={4}>
            <div
              style={{
                backgroundImage: 'url(src/public/img7.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '40vh',
                width: '100%',
                borderRadius: '3rem',
                border: '2px solid #eaeaea',
                boxShadow: '0px 5px 10px 4px rgba(0, 0, 0, 0.5)',
              }}
            ></div>
            <Button
              variant="outline"
              color="dark"
              sx={{
                marginTop: '1rem',
                marginLeft: '2rem',

                boxShadow: '0px 1px 5px 2px rgba(0, 0, 0, 0.3)',
              }}
            >
              View on Foundation
            </Button>
          </Grid.Col>
          <Grid.Col span={8}>
            <Card
              withBorder
              p="lg"
              shadow="lg"
              sx={{
                border: '2px solid teal',
              }}
            >
              <Card.Section inheritPadding withBorder>
                <Text>
                  Perhaps the world&apos;s second worst crime is boredom. The
                  first is being a bore. Perhaps the world&apos;s second worst
                  crime is boredom. The first is being a bore. Perhaps the
                  world&apos;s second worst crime is boredom. The first is being
                  a bore. Perhaps the world&apos;s second worst crime is
                  boredom. The first is being a bore. Perhaps the world&apos;s
                  second worst crime is boredom. The first is being a bore.
                  Perhaps the world&apos;s second worst crime is boredom.
                </Text>
              </Card.Section>
            </Card>
          </Grid.Col>
        </Grid>
      </Card.Section>
    </Card>
  )
}

export default CollectionCard
