import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import basti from "../assets/bastibuck.jpg";

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
    <div>
      <Head>
        <title>Basti Buck</title>
        <meta
          name="description"
          content="Basti Buck ist Web-/Softwareentwickler aus Kiel"
        />
      </Head>

      <section>
        <div style={{ width: 300, aspectRatio: "1", position: "relative" }}>
          <Image
            src={basti}
            alt="Portraitfoto Basti Buck"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </div>
        <h1>Basti Buck</h1>
        <h2>
          <span>{text}</span>
          <Cursor cursorStyle="_" />
        </h2>
      </section>
    </div>
  );
};

export default Home;
