import React from "react";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";

import basti from "../assets/bastibuck.jpg";
import { Center, Container, Title } from "@mantine/core";
import { cvQuery, CVResult } from "../queries/cv";
import { client } from "../queries/client";

import TypeWriter from "../components/TypeWriter";
import TimeLine from "../components/TimeLine";
import { optionsQuery, OptionsResult } from "../queries/options";

const Home = ({
  cv,
  options,
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
              : theme.colors["cyan"][1],
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
