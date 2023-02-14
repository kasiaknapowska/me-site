import * as React from "react"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

const LaserowyLiftingTwarzy = () => (
  <Layout>
    <div className="container pageContainer">
      <h1>Laserowy lifting twarzy</h1>
      <section>
        <h2>
          Zabiegi laserem frakcyjnym nie tylko poprawią kondycję Twojej skóry,
          ale także wymodelują kontur twarzy!
        </h2>
        <p>
          Z wiekiem rysy twarzy ulegają zmianie na skutek utraty warstwy
          podskórnej i tłuszczu. Z tego powodu tworzą się zagłębienia, zwisające
          fałdy skórne i zmarszczki. Aby przywrócić twarzy jej dawny kontur i
          objętość oraz wymodelować jej rysy można zastosować zabiegi estetyczne
          (modelowanie z wykorzystaniem biostymulatorów tkankowych, kompleksu
          liftingująco-przeciwzmarszczkowego) oraz zabiegi laserowe.
        </p>
      </section>
      <section>
        <h3>Efekty zabiegu laserowego</h3>
        <p>
          Efekty zabiegu laserowego widoczne są już po pierwszej wizycie w
          gabinecie. Laser pozwala uzyskać:
        </p>
        <ul>
          <li>
            <strong>Napięcie i podniesienie skóry</strong> – zabieg zwiększa napięcie skóry
            poprzez stymulację jej odbudowy. Dzięki temu oprawia się owal
            twarzy, modelują policzki, linia żuchwy i podbródek.
          </li>
          <li>
            <strong>Wyraźnie młodszy wygląd</strong> – regeneracja włókien kolagenowych likwiduje
            zwiotczałą skórę, m.in. opadające powieki i kąciki ust.
          </li>
        </ul>
      </section>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Laserowy lifting twarzy" description="Laser zwiększa napięcie skóry i stymuluje jej odbudowę jednocześnie poprawiając owal twarzy. Dzięki temu uzyskasz efekt liftingu bez konieczności wykonywania zabiegów chirurgicznych."/>

export default LaserowyLiftingTwarzy
