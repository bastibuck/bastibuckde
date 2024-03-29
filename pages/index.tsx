import React, { useEffect, useState } from "react";
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
  SimpleGrid,
} from "@mantine/core";
import { useHover, useIntersection } from "@mantine/hooks";

import { cvQuery, CVResult } from "../queries/cv";
import { client } from "../queries/client";
import { optionsQuery, OptionsResult } from "../queries/options";
import { Skill, skillsQuery, SkillsResult } from "../queries/skills";
import { ProjectsResult, projectsQuery } from "../queries/projects";

import TypeWriter from "../components/TypeWriter";
import TimeLine from "../components/TimeLine";
import ProjectCard from "../components/ProjectCard";

import basti from "../assets/bastibuck.jpg";
import { HEADER_HEIGHT } from "./_app";

const Home = ({
  cv,
  options,
  skills,
  projects,
  locale,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [skillsInViewBefore, setSkillsInViewBefore] = useState(false);

  const [intersectionRef, observer] = useIntersection({
    threshold: 1,
  });

  const { hovered, ref: hoveredRef } = useHover();

  // hide initial opened skill tooltip
  useEffect(() => {
    if (skillsInViewBefore === false && (observer?.isIntersecting || hovered)) {
      if (observer?.isIntersecting) {
        setTimeout(() => {
          setSkillsInViewBefore(true);
        }, 900);
      }

      if (hovered) {
        setSkillsInViewBefore(true);
      }
    }
    return () => {};
  }, [skillsInViewBefore, observer?.isIntersecting, hovered]);

  const isEnglish = locale === "en";

  return (
    <>
      <Head>
        <title>Basti Buck</title>
        <meta
          name="description"
          content={
            isEnglish
              ? "Basti Buck is a web/software developer from Kiel, Germany"
              : "Basti Buck ist Web-/Softwareentwickler aus Kiel"
          }
        />
      </Head>

      <Center
        className="intro"
        sx={(theme) => ({
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
          position: "relative",
          background:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        })}
      >
        <Container fluid>
          <div
            style={{
              width: "clamp(250px, 50vw, 350px)",
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
              alt={
                isEnglish
                  ? "Portrait picture of Basti Buck"
                  : "Portraitfoto Basti Buck"
              }
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
            {isEnglish ? "Skills" : "Fähigkeiten"}
          </Title>
        </Container>
        <Container size={620} ref={hoveredRef}>
          <Group
            ref={intersectionRef}
            position="center"
            sx={(theme) => ({ marginBlock: theme.spacing.md })}
          >
            {skills.map(({ title, from, to, description, opened }) => (
              <React.Fragment key={title}>
                {description ? (
                  <Tooltip
                    label={description}
                    wrapLines
                    width={200}
                    withArrow
                    arrowSize={3}
                    opened={skillsInViewBefore === false ? opened : undefined}
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

      {projects.length > 0 ? (
        <Container fluid>
          <Paper padding={"xl"}>
            <Container size={1200}>
              <Title order={3} align="center" mb={"xl"}>
                Side Projects
              </Title>

              <SimpleGrid
                breakpoints={[{ minWidth: "sm", cols: 3 }]}
                spacing="md"
              >
                {projects.map((project) => (
                  <ProjectCard key={project._id} project={project} />
                ))}
              </SimpleGrid>
            </Container>
          </Paper>
        </Container>
      ) : null}

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
            {isEnglish ? "CV" : "Lebenslauf"}
          </Title>

          <TimeLine
            items={cv}
            forHire={Boolean(options?.forHire)}
            isEnglish={isEnglish}
          />
        </Container>
      </Container>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{
  cv: CVResult;
  options: OptionsResult;
  skills: Array<Skill & { from: string; to: string; opened?: boolean }>;
  projects: ProjectsResult;
  locale: string;
}> = async ({ locale = "de" }) => {
  const options = await client.fetch<OptionsResult>(optionsQuery, { locale });
  const cv = await client.fetch<CVResult>(cvQuery, { locale });
  const skills = await client.fetch<SkillsResult>(skillsQuery, { locale });
  const projects = await client.fetch<ProjectsResult>(projectsQuery, {
    locale,
  });

  const skillsMap: {
    [skillTitle: string]: { from: string; to: string; opened?: boolean };
  } = {
    TypeScript: { from: "cyan", to: "indigo" },
    CSS: { from: "cyan", to: "indigo" },
    HTML: { from: "orange", to: "red" },
    "Next.js": { from: "green", to: "blue" },
    React: { from: "blue", to: "indigo" },
    "Headless CMS": { from: "green", to: "blue" },
    Testing: { from: "red", to: "orange", opened: true },
    REST: { from: "lime", to: "teal" },
    GraphQL: { from: "pink", to: "grape" },
    "Node.js": { from: "indigo", to: "green" },
    "Sanity.io": { from: "indigo", to: "red" },
    Tooling: { from: "lime", to: "teal" },
    "Agile Softwareentwicklung (Scrum)": { from: "grape", to: "pink" },
    "Agile software development (Scrum)": { from: "grape", to: "pink" },
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
      projects,
      locale,
    },
  };
};
