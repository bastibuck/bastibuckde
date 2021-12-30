import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import basti from "../assets/bastibuck.jpg";
import { Center, Container, Timeline, Title, Text } from "@mantine/core";

const Home: NextPage = () => {
  const [counter, setCounter] = useState(0);

  const typewriterWords = [
    "Web-/Softwareentwickler",
    "Kursleiter",
    "Hobbykoch",
    "Outdoor-Enthusiast",
    "Alles-Ausprobierer",
    "",
  ];

  const { text, count } = useTypewriter({
    words: typewriterWords,
    loop: false,
    deleteSpeed: counter % typewriterWords.length === 0 ? 35 : 20,
    delaySpeed: counter % typewriterWords.length === 0 ? 4000 : 1400,
  });

  useEffect(() => {
    setCounter(count);

    return;
  }, [count]);

  return (
    <>
      <Head>
        <title>Basti Buck</title>
        <meta
          name="description"
          content="Basti Buck ist Web-/Softwareentwickler aus Kiel"
        />
      </Head>

      <Center sx={{ height: "100vh" }}>
        <Container fluid>
          <div
            style={{
              width: "clamp(250px, 50vw, 400px)",
              aspectRatio: "1",
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
              marginBottom: "2rem",
              marginInline: "auto",
            }}
          >
            <Image
              src={basti}
              alt="Portraitfoto Basti Buck"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </div>

          <Title
            order={1}
            align="center"
            sx={(theme) => ({ marginBlock: theme.spacing.xs })}
          >
            Basti Buck
          </Title>
          <Title
            order={2}
            align="center"
            sx={(theme) => ({
              marginBlock: theme.spacing.xs,
              whiteSpace: "normal",
            })}
          >
            <span>{text}</span>
            <Cursor cursorStyle="_" />
          </Title>
        </Container>
      </Center>

      <Container
        fluid
        sx={(theme) => ({
          padding: theme.spacing.xl,
          background:
            theme.colorScheme === "dark"
              ? theme.colors["dark"][6]
              : theme.colors["cyan"][1],
        })}
      >
        <Container size={450}>
          <Title order={3} sx={(theme) => ({ marginBottom: theme.spacing.md })}>
            Lebenslauf
          </Title>

          <Timeline active={9} bulletSize={24} lineWidth={2}>
            <Timeline.Item title="git switch -c basti/buck">
              <Text color="dimmed" size="sm">
                Geburt
              </Text>
              <Text size="xs" style={{ marginTop: 4 }}>
                15.12.1989
              </Text>
            </Timeline.Item>
            <Timeline.Item title="git rebase feature/abitur">
              <Text color="dimmed" size="sm">
                Hans-Geiger-Gymnasium, Kiel
              </Text>
              <Text size="xs" style={{ marginTop: 4 }}>
                2009
              </Text>
            </Timeline.Item>
            <Timeline.Item title="git rebase feature/zivi">
              <Text color="dimmed" size="sm">
                Zivildienst, <br />
                Jugendtreff Kiste
              </Text>
              <Text size="xs" style={{ marginTop: 4 }}>
                2009 - 2010
              </Text>
            </Timeline.Item>
            <Timeline.Item title="git rebase feature/bachelor">
              <Text color="dimmed" size="sm">
                B.A. Multimedia Production <br />
                FH Kiel
              </Text>
              <Text size="xs" style={{ marginTop: 4 }}>
                2010 - 2014
              </Text>
            </Timeline.Item>
            <Timeline.Item title="git rebase feature/pixel-panda">
              <Text color="dimmed" size="sm">
                Co-Selbstständigkeit <br />
                Pixel Panda
              </Text>
              <Text size="xs" style={{ marginTop: 4 }}>
                2012 - 2014
              </Text>
            </Timeline.Item>
            <Timeline.Item title="git rebase feature/master">
              <Text color="dimmed" size="sm">
                M.A. Medienkonzeption <br />
                FH Kiel
              </Text>
              <Text size="xs" style={{ marginTop: 4 }}>
                2014 - 2017
              </Text>
            </Timeline.Item>
            <Timeline.Item title="git rebase feature/buck-medien">
              <Text color="dimmed" size="sm">
                Solo-Selbstständigkeit <br />
                Buck Medien
              </Text>
              <Text size="xs" style={{ marginTop: 4 }}>
                2014 - heute
              </Text>
            </Timeline.Item>
            <Timeline.Item title="git rebase feature/ppi-media">
              <Text color="dimmed" size="sm">
                Softwareentwickler ppi Media GmbH
              </Text>
              <Text size="xs" style={{ marginTop: 4 }}>
                2018 - 2019
              </Text>
            </Timeline.Item>
            <Timeline.Item title="git rebase feature/weluse">
              <Text color="dimmed" size="sm">
                Softwareentwickler weluse GmbH
              </Text>
              <Text size="xs" style={{ marginTop: 4 }}>
                2019 - heute
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="git rebase feature/webprojekt"
              lineVariant="dashed"
            >
              <Text color="dimmed" size="sm">
                Kursleitung, <br />
                opencampus
              </Text>
              <Text size="xs" style={{ marginTop: 4 }}>
                2020 - heute
              </Text>
            </Timeline.Item>
            <Timeline.Item title="git switch -c feature/future">
              <Text color="dimmed" size="sm">
                Softwareentwickler ???
              </Text>
              <Text size="xs" style={{ marginTop: 4 }}>
                ???
              </Text>
            </Timeline.Item>
          </Timeline>
        </Container>
      </Container>
    </>
  );
};

export default Home;
