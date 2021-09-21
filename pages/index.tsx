import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [counter, setCounter] = useState(0);

  const typewriterWords = [
    "Web-/Softwareentwickler",
    "Outdoor-Enthusiast",
    "Hobbykoch",
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
    <div className={styles.container}>
      <Head>
        <title>Basti Buck</title>
        <meta
          name="description"
          content="Basti Buck ist Web-/Softwareentwickler aus Kiel"
        />
      </Head>

      <section className={styles.section}>
        <h1 className={styles.title}>Basti Buck</h1>
        <h2 className={styles.description}>
          <span>{text}</span>
          <Cursor cursorStyle="_" />
        </h2>
      </section>

      <section className={`${styles.section} ${styles.light}`}>
        <div className={styles.grid}>
          <a href="https://github.com/bastibuck" className={styles.card}>
            <h2>GitHub &rarr;</h2>
            <p>Ein Haufen Side-Projects</p>
          </a>

          <a href="mailto:mail@bastibuck.de" className={styles.card}>
            <h2>E-Mail &rarr;</h2>
            <p>The old fashioned way</p>
          </a>

          <a href="https://twitter.com/bastibuck" className={styles.card}>
            <h2>Twitter &rarr;</h2>
            <p>Chirp chirp</p>
          </a>

          <a
            href="https://www.linkedin.com/in/bastibuck"
            className={styles.card}
          >
            <h2>LinkedIn &rarr;</h2>
            <p>Business oder so</p>
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link href="/impressum">
          <a>Impressum</a>
        </Link>

        <Link href="/datenschutz">
          <a>Datenschutz</a>
        </Link>
      </footer>
    </div>
  );
};

export default Home;
