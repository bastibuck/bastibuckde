import React from "react";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";

import basti from "../assets/bastibuck.jpg";
import {
  Center,
  Container,
  Title,
  Badge,
  Group,
  Paper,
  Blockquote,
  Tooltip,
} from "@mantine/core";
import { cvQuery, CVResult } from "../queries/cv";
import { client } from "../queries/client";

import TypeWriter from "../components/TypeWriter";
import TimeLine from "../components/TimeLine";
import { optionsQuery, OptionsResult } from "../queries/options";

const Home = ({
  cv,
  options,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const skills = [
    {
      text: "TypeScript",
      from: "cyan",
      to: "indigo",
      tooltip: "Type-safety 😍",
    },
    { text: "JavaScript", from: "yellow", to: "red" },
    { text: "CSS", from: "cyan", to: "indigo" },
    { text: "HTML", from: "orange", to: "red" },

    {
      text: "NextJS",
      from: "green",
      to: "blue",
      tooltip: "Definitiv meine aktuelle Go-To-Solution für ein Projekt :) ",
    },
    {
      text: "React",
      from: "blue",
      to: "indigo",
      tooltip:
        "Unter Verwendung vieler bekannter Erweiterungen wie react-query, formik, Framer motion, etc.",
    },
    { text: "Vue", from: "green", to: "blue" },

    {
      text: "Testing",
      from: "red",
      to: "orange",
      tooltip:
        "Automatisiertes Software-Testing unter anderem mit Jest, Testing-Library und Cypress",
    },

    { text: "REST", from: "lime", to: "teal" },
    {
      text: "GraphQL",
      from: "pink",
      to: "grape",
      tooltip: "'Schema first' begeistert und überzeugt mich",
    },
    { text: "NodeJS", from: "indigo", to: "green" },
    { text: "Sanity.io", from: "indigo", to: "green" },

    {
      text: "Agile Softwareentwicklung (Scrum)",
      from: "grape",
      to: "pink",
    },
    {
      text: "Tooling",
      from: "lime",
      to: "teal",
      tooltip:
        "eslint, prettier, husky, lint-staged, codegen, VS-Code Snippets, ... - Das Entwickler-Leben einfacher zu machen, liegt mir am Herzen",
    },
  ];

  return (
    <>
      <Head>
        <title>Basti Buck</title>
        <meta
          name="description"
          content="Basti Buck ist Web-/Softwareentwickler aus Kiel"
        />
      </Head>

      <Center
        sx={(theme) => ({
          height: "100vh",
          background:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        })}
      >
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
            <TypeWriter words={options?.typewriterWords ?? []} />
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
              : theme.fn.lighten(theme.colors["cyan"][1], 0.5),
        })}
      >
        <Container size={450}>
          <Title order={3} align="center">
            Fähigkeiten
          </Title>
        </Container>
        <Container size={700}>
          <Group
            position="center"
            sx={(theme) => ({ marginBlock: theme.spacing.md })}
          >
            {skills.map(({ text, from, to, tooltip }) => (
              <React.Fragment key={text}>
                {tooltip ? (
                  <Tooltip
                    label={tooltip}
                    wrapLines
                    width={200}
                    withArrow
                    arrowSize={6}
                  >
                    <Badge variant="gradient" gradient={{ from, to }} size="lg">
                      {text}
                    </Badge>
                  </Tooltip>
                ) : (
                  <Badge variant="gradient" gradient={{ from, to }} size="lg">
                    {text}
                  </Badge>
                )}
              </React.Fragment>
            ))}
          </Group>
        </Container>
      </Container>

      <Container fluid>
        <Paper padding={40}>
          <Center>
            <Blockquote
              color="cyan"
              cite="– Steve Jobs"
              styles={(theme) => ({
                inner: { fontSize: theme.fontSizes.lg },
              })}
            >
              Stay hungry. Stay foolish.
            </Blockquote>
          </Center>
        </Paper>
      </Container>

      <Container
        fluid
        sx={(theme) => ({
          padding: theme.spacing.xl,
          background:
            theme.colorScheme === "dark"
              ? theme.colors["dark"][6]
              : theme.fn.lighten(theme.colors["cyan"][1], 0.5),
        })}
      >
        <Container size={450}>
          <Title order={3} sx={(theme) => ({ marginBottom: theme.spacing.md })}>
            Lebenslauf
          </Title>

          <TimeLine items={cv} forHire={Boolean(options?.forHire)} />
        </Container>
      </Container>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{
  cv: CVResult;
  options: OptionsResult;
}> = async (_context) => {
  const options = await client.fetch<OptionsResult>(optionsQuery);
  const cv = await client.fetch<CVResult>(cvQuery);

  return {
    props: {
      options,
      cv,
    },
  };
};
