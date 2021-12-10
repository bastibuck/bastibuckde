import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import basti from "../assets/bastibuck.jpg";
import { Container, Title } from "@mantine/core";

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
    </>
  );
};

export default Home;
