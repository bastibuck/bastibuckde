import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basti Buck</title>
        <meta
          name="description"
          content="Basti Buck ist Web-/Softwareentwickler aus Kiel"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Basti Buck</h1>
        <h2>Moin</h2>

        <p className={styles.description}>Web-/Softwareentwickler</p>

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
      </main>
    </div>
  );
};

export default Home;
