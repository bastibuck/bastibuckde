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
} from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<"dark" | "light">("dark");

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

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
          <Header
            height={50}
            sx={{ border: "none", background: "transparent" }}
          >
            <Group
              position="right"
              sx={(theme) => ({
                height: "100%",
                marginInline: theme.spacing.md,
              })}
            >
              <Switch
                label="Dark mode"
                onChange={() => toggleColorScheme()}
                checked={colorScheme === "dark"}
              />
            </Group>
          </Header>
        }
      >
        <Center sx={{ height: "100%" }}>
          <Component {...pageProps} />
        </Center>
      </AppShell>
    </MantineProvider>
  );
}

export default MyApp;
