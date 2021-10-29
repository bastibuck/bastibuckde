import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

const Datenschutz: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basti Buck</title>
        <meta
          name="description"
          content="Basti Buck ist Web-/Softwareentwickler aus Kiel"
        />
      </Head>

      <section className={`${styles.section} ${styles.left}`}>
        <div className={styles.centeredBox}>
          <Link href="/">
            <a className={styles.back}>&larr; zurück</a>
          </Link>

          <h1 className={styles.title}>Daten&shy;schutz&shy;erklärung</h1>

          <h3>Datenschutz</h3>

          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung. Die
            Nutzung unserer Website ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten (beispielsweise Name, Anschrift oder
            E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
            auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
            Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin,
            dass die Datenübertragung im Internet (z.B. bei der Kommunikation
            per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
            der Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </p>
          <p>
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten (beispielsweise Name, Anschrift oder
            E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
            auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
            Zustimmung nicht an Dritte weitergegeben.
          </p>
          <p>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
            bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
            Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
            nicht möglich.
          </p>

          <h3>Server-LogFiles</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch
            Informationen in so genannten Server-Log Files, die Ihr Browser
            automatisch an uns übermittelt. Dies sind:
          </p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
          </ul>
          <p>
            Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
            Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
            vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu
            prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige
            Nutzung bekannt werden.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Datenschutz;