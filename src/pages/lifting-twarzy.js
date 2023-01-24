import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const LiftingTwarzy = () => {
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Lifting twarzy</h1>
        <section>
          <h2>
            Bezoperacyjny lifting twarzy sprawi, że znów poczujesz się młodo,
            bez konieczności długiej rekonwalescencji!
          </h2>
        </section>
        <section>
          <h3>Nieinwazyjne modelowanie twarzy</h3>
          <p>
            Lifting wolumetryczny twarzy to metoda, która pozwala w nieinwazyjny
            sposób przywrócić utraconą z wiekiem objętość twarzy. Zabieg
            poprawia kontur twarzy i szyi w miejscach, gdzie nastąpiła utrata
            tkanki tłuszczowej. Zwykle negatywne zmiany dotyczą okolic kości
            policzkowych, policzków, fałdów nosowo-wargowych i kącików ust. W
            tych miejscach na skutek zaniku tkanki podskórnej dochodzi do
            zapadania się skóry, co w efekcie tworzy zagłębienia, fałdy, bruzdy
            i zmarszczki. Zabieg można wykonać zarówno u osób młodych, by
            podkreślić ich naturalną urodę, jak i u osób starszych w celu
            zatuszowania powstających z wiekiem zagłębień skórnych i zmarszczek
            .
          </p>
        </section>
        <section>
          <h3>Jak przebiega zabieg?</h3>
          <p>
            Lifting wolumetryczny twarzy przeprowadzany jest za pomocą żelu z
            zawartością kwasu hialuronowego. Żel wstrzykiwany jest podskórnie,
            najczęściej w znieczuleniu miejscowym. Podczas iniekcji pacjent może
            odczuwać niewielkie “rozpieranie” tkanek. Żel jest odporny na
            działanie enzymów i wolnych rodników, dzięki czemu efekt jego
            działania utrzymuje się nawet do 2 lat. Zabieg jest bezpieczny i
            trwa zaledwie kilkanaście minut. Efekt jest natychmiastowy, a
            pacjent może powrócić do codziennych obowiązków.
          </p>
        </section>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Lifting twarzy" />
export default LiftingTwarzy
