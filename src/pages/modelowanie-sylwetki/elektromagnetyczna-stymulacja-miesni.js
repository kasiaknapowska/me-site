import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

const ElektromagnetycznaStymulacjaMiesni = () => {
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Elektromagnetyczna stymulacja mięśni</h1>
        <section>
          <h2>
            Chcesz wymodelować mięśnie bez konieczności uciążliwych ćwiczeń?
          </h2>
        </section>
        <section>
          <h3>Urządzenie EMSlimPRO wykona ćwiczenia za Ciebie!</h3>
          <p>
            Skoncentrowane pole elektromagnetyczne przechodzi nieinwazyjnie
            przez skórę i tłuszcz oddziałując z neuronami ruchowymi, które
            następnie wywołują supramaksymalne, ciągłe skurcze mięśni. Dzięki
            temu uzyskujemy zmniejszenie podskórnej warstwy tłuszczu oraz
            zwiększone napięcie mięśniowe.
          </p>
          <p>
            Zabieg nie wymaga podawania znieczulenia ani nakłuć. Nie powoduje
            dyskomfortu — Pacjenci mogą zrelaksować się, podczas gdy urządzenie
            wykonuje odpowiednik ponad 20.000 bezbolesnych brzuszków lub
            przysiadów.
          </p>
          <p>
            Już po 2 tygodniach i 4 zabiegach zobaczysz i poczujesz rezultaty!
            Jedna sesja zabiegu trwa ok. 30 minut. Zwykle wystarczą 2-3 zabiegi
            tygodniowo. Aby osiągnąć najlepsze rezultaty zaleca się wykonywać
            4-6 zabiegów tygodniowo.
          </p>
        </section>
        <section>
          <h3>Dla kogo?</h3>
          <p>
            Zabieg polecany jest osobom, które chcą wymodelować wzmocnić mięśnie
            brzucha i pośladków, lez nie mają dużo zapału, ochoty i czasu, by
            wykonywać ćwiczenia samodzielnie!
          </p>
        </section>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Elektromagnetyczna stymulacja mięśni" />
export default ElektromagnetycznaStymulacjaMiesni
