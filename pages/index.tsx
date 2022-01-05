import React from "react";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
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
import { optionsQuery, OptionsResult } from "../queries/options";
import { Skill, skillsQuery, SkillsResult } from "../queries/skills";

import TypeWriter from "../components/TypeWriter";
import TimeLine from "../components/TimeLine";

import basti from "../assets/bastibuck.jpg";

const Home = ({
  cv,
  options,
  skills,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
        <Container size={620}>
          <Group
            position="center"
            sx={(theme) => ({ marginBlock: theme.spacing.md })}
          >
            {skills.map(({ title, from, to, description }) => (
              <React.Fragment key={title}>
                {description ? (
                  <Tooltip
                    label={description}
                    wrapLines
                    width={200}
                    withArrow
                    arrowSize={6}
                  >
                    <Badge variant="gradient" gradient={{ from, to }} size="lg">
                      {title}
                    </Badge>
                  </Tooltip>
                ) : (
                  <Badge variant="gradient" gradient={{ from, to }} size="lg">
                    {title}
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
  skills: Array<Skill & { from: string; to: string }>;
}> = async (_context) => {
  const options = await client.fetch<OptionsResult>(optionsQuery);
  const cv = await client.fetch<CVResult>(cvQuery);
  const skills = await client.fetch<SkillsResult>(skillsQuery);

  const skillsMap: { [skillTitle: string]: { from: string; to: string } } = {
    TypeScript: { from: "cyan", to: "indigo" },
    CSS: { from: "cyan", to: "indigo" },
    HTML: { from: "orange", to: "red" },
    "Next.js": { from: "green", to: "blue" },
    React: { from: "blue", to: "indigo" },
    Vue: { from: "green", to: "blue" },
    Testing: { from: "red", to: "orange" },
    REST: { from: "lime", to: "teal" },
    GraphQL: { from: "pink", to: "grape" },
    "Node.js": { from: "indigo", to: "green" },
    "Sanity.io": { from: "indigo", to: "red" },
    Tooling: { from: "lime", to: "teal" },
    "Agile Softwareentwicklung (Scrum)": { from: "grape", to: "pink" },
  };

  const fallbackGradient = { from: "teal", to: "lime" };

  const mappedSkills = skills.map((skill) => ({
    ...skill,
    ...(skillsMap[skill.title] || fallbackGradient),
  }));

  return {
    props: {
      options,
      cv,
      skills: mappedSkills,
    },
  };
};
