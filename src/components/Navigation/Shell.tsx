import {
  AppShell,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Image,
  Text,
} from '@mantine/core'
import React, { useState } from 'react'

export default function Shell({ children }: any) {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      /*  navbar={
        <Navbar p="md" hiddenBreakpoint="xl" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Text>Navigation.</Text>
        </Navbar>
      } */
      header={
        <Header height={70} p="md">
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            {/*   <Image
              src="src/public/CritoPlain.png"
              alt="Crito"
              fit="contain"
              height={50}
              sx={{
                justifySelf: 'flex-start',
              }}
            /> */}
            <Text variant="gradient" align="center">
              {' '}
              IION
            </Text>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  )
}
