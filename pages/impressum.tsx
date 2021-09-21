import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

const Impressum: NextPage = () => {
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

          <h1 className={styles.title}>Impressum</h1>

          <h3>Angaben gemäß § 5 TMG:</h3>

          <p>
            Sebastian Buck
            <br />
            Feldstraße 41
            <br />
            24105 Kiel
          </p>

          <h4>Kontakt:</h4>
          <table>
            <tr>
              <td>Telefon:</td>
              <td>0176 30 15 00 88</td>
            </tr>
            <tr>
              <td>E-Mail:</td>
              <td>mail@bastibuck.de</td>
            </tr>
          </table>
          <p>
            Quelle:{" "}
            <em>
              <a
                href="https://www.e-recht24.de/artikel/datenschutz/209.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.e-recht24.de
              </a>
            </em>
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.light}`}>
        <div className={styles.centeredBox}>
          <h3>Haftungsausschluss (Disclaimer)</h3>
          <p>
            <strong>Haftung für Inhalte</strong>
          </p>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
          <p>
            <strong>Haftung für Links</strong>
          </p>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
          <p>
            <strong>Urheberrecht</strong>
          </p>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Impressum;
