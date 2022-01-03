import React, { useState } from "react";
import type { AppProps } from "next/app";
import {
  ColorScheme,
  MantineProvider,
  Header,
  Switch,
  Group,
  AppShell,
  Container,
  Anchor,
  Title,
  Text,
  Button,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";

import Bulb from "../components/icons/Bulb";
import Twitter from "../components/icons/Twitter";
import GitHub from "../components/icons/GitHub";

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");

  const toggleColorScheme = () =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark");

  const router = useRouter();
  const isHomeRoute = router.route === "/";

  const FOOTER_HEIGHT = 291;

  const socialIcons = [
    {
      url: "https://twitter.com/bastibuck",
      icon: <Twitter />,
    },
    {
      url: "https://github.com/bastibuck",
      icon: <GitHub />,
    },
  ];

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
                <Link href="/" passHref>
                  <Anchor>
                    <Title sx={(theme) => ({ fontSize: theme.fontSizes.xl })}>
                      Basti Buck
                    </Title>
                  </Anchor>
                </Link>
              )}

              <Switch
                aria-label="dark mode"
                label={<Bulb on={colorScheme === "light"} />}
                onChange={toggleColorScheme}
                checked={colorScheme === "dark"}
              />
            </Group>
          </Header>
        }
      >
        <Container
          fluid
          padding={0}
          sx={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <Component {...pageProps} />
        </Container>

        <Container fluid sx={{ height: FOOTER_HEIGHT }} />

        <Container
          fluid
          padding={0}
          sx={(theme) => ({
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: FOOTER_HEIGHT,
            padding: theme.spacing.xl,
            paddingBottom: theme.spacing.md,
          })}
        >
          <Group position="center">
            <Container size={300}>
              <Text
                sx={(theme) => ({
                  fontSize: theme.fontSizes.lg,
                  marginBottom: theme.spacing.xs,
                  color:
                    theme.colorScheme === "dark" ? theme.white : theme.black,
                })}
              >
                Sag Hallo 👋
              </Text>
              <Text
                sx={(theme) => ({
                  marginBottom: theme.spacing.md,
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[1]
                      : theme.colors.gray[6],
                })}
                size="sm"
              >
                Willst du mit mir in Kontakt treten?
                <br /> Schreib mir einfach, ich freue mich auf deine Nachricht
              </Text>

              <Button
                component="a"
                href="mailto:mail@bastibuck.de"
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan" }}
                sx={(theme) => ({
                  marginBottom: theme.spacing.xs,
                })}
              >
                mail@bastibuck.de
              </Button>

              <Group
                sx={(theme) => ({
                  marginBottom: theme.spacing.md,
                })}
                spacing={0}
              >
                {socialIcons.map((icon) => (
                  <Button
                    key={icon.url}
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={icon.url}
                    styles={(theme) => ({
                      root: {
                        backgroundColor: "transparent",
                        border: 0,
                        padding: `0 ${theme.spacing.sm}px`,
                        color:
                          theme.colorScheme === "dark"
                            ? theme.colors.white
                            : theme.colors.cyan[6],

                        "&:hover": {
                          backgroundColor: "none",
                          backgroundImage:
                            theme.colorScheme === "dark"
                              ? `linear-gradient(45deg, ${theme.colors.indigo[6]} 0%, ${theme.colors.cyan[6]} 100%)`
                              : `linear-gradient(45deg, ${theme.colors.indigo[1]} 0%, ${theme.colors.cyan[1]} 100%)`,
                        },
                      },
                    })}
                  >
                    {icon.icon}
                  </Button>
                ))}
              </Group>
            </Container>
          </Group>

          <Group
            position="right"
            sx={(theme) => ({
              paddingTop: theme.spacing.sm,
              borderTop: `1px solid ${
                theme.colorScheme === "dark"
                  ? theme.colors.gray[7]
                  : theme.colors.gray[4]
              }`,
            })}
          >
            <Link href="/datenschutz" passHref>
              <Anchor size="sm" color="dimmed">
                Datenschutz
              </Anchor>
            </Link>
            <Link href="/impressum" passHref>
              <Anchor size="sm" color="dimmed">
                Impressum
              </Anchor>
            </Link>
          </Group>
        </Container>
      </AppShell>
    </MantineProvider>
  );
}

export default MyApp;
