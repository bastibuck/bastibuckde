import React, { useState } from "react";
import type { AppProps } from "next/app";
import {
  ColorScheme,
  MantineProvider,
  Header,
  Switch,
  Group,
  AppShell,
  Center,
  Container,
  Anchor,
  Title,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");

  const toggleColorScheme = () =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark");

  const router = useRouter();
  const isHomeRoute = router.route === "/";

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme,
        primaryColor: "cyan",
        headings: {
          sizes: {
            h1: { fontSize: 52 },
            h2: { fontSize: 22 },
          },
        },
      }}
    >
      <AppShell
        padding={0}
        fixed
        header={
          <Header height={50} sx={{ border: "none" }}>
            <Group
              position={isHomeRoute ? "right" : "apart"}
              sx={(theme) => ({
                height: "100%",
                marginInline: theme.spacing.md,
              })}
            >
              {isHomeRoute ? null : (
                <Title sx={(theme) => ({ fontSize: theme.fontSizes.xl })}>
                  Basti Buck
                </Title>
              )}

              <Switch
                label={<div>Dark mode</div>}
                onChange={toggleColorScheme}
                checked={colorScheme === "dark"}
              />
            </Group>
          </Header>
        }
      >
        <Component {...pageProps} />

        <Container
          fluid
          padding={0}
          sx={(theme) => ({
            padding: theme.spacing.xl,
          })}
        >
          <Group position="right">
            <Link href="/datenschutz" passHref>
              <Anchor>Datenschutz</Anchor>
            </Link>
            <Link href="/impressum" passHref>
              <Anchor>Impressum</Anchor>
            </Link>
          </Group>
        </Container>
      </AppShell>
    </MantineProvider>
  );
}

export default MyApp;
