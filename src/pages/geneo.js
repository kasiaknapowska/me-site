import React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const Geneo = () => {
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Geneo</h1>
        <section>
          <h2>Chcesz pozbyć się niedoskonałości skóry?</h2>
        </section>
        <section>
          <p>
            GENEO wykorzystuje trzy sprawdzone klinicznie technologie, które
            pozwalają uzyskać efekt odmłodzonej, ujędrnionej i naturalnie
            wyglądającej skóry:
          </p>
          <ol>
            <li>
              {" "}
              Preparaty bogate w substancje odżywcze (kapsułki, żele, serum)
              zapewniają kompleksową pielęgnację i dotlenienie skóry od
              wewnątrz. Pozwalają dopasować zabieg do konkretnego rodzaju skóry
              oraz jej potrzeb.
            </li>
            <li>
              Głowica RF pobudza odnowę skóry stymulując produkcję włókien
              kolagenowych i elastyny. W bezpieczny i efektywny sposób ogrzewa
              skórę właściwą prowadząc do jej obkurczania i ujędrniania.
            </li>
            <li>
              Ultradźwięki poprawiają krążenie krwi w skórze, przyspieszają
              transport i wchłanianie składników aktywnych.
            </li>
          </ol>
        </section>
        <section>
          <h3>Efekty zabiegu</h3>
          <ul>
            <li>oczyszczanie i zbilansowanie skóry tłustej</li>
            <li>poprawa kolorytu skóry</li>
            <li>rewitalizacja i odmłodzenie skóry matowej</li>
            <li>nawilżenie skóry suchej</li>
            <li>wzmocnienie bariery ochronnej skóry</li>
            <li>rozświetlenie i odmłodzenie</li>
            <li>przywrócenie równowagi skóry</li>
            <li>wygładzenie i przywrócenie blasku skóry</li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}
export const Head = () => (
  <Seo title="Geneo - odmładzanie u ujędrnianie skóry" />
)
export default Geneo
