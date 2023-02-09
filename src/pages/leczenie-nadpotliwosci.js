import React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const LeczenieNadpotliwosci = () => {
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Leczenie nadpotliwości</h1>
        <section>
          <h2>
            Nie musisz się więcej wstydzić… Istnieje prosty sposób na pozbycie
            się uciążliwego problemu!
          </h2>
        </section>
        <section>
          <h3>Toksyna w walce z potem</h3>
          <p>
            Preparat z zawartością specjalistycznej toksyny jest wykorzystywany
            nie tylko w celu redukcji zmarszczek. Właściwości preparatu,
            blokujące czynność gruczołów potowych, pozwalają skutecznie leczyć
            nadpotliwość, m.in. dłoni, pach, stóp. Leczenie polega na miejscowym
            wstrzykiwaniu substancji aktywnej w miejsca o zwiększonej
            potliwości. Procedurę wykonuje się w miejscowym znieczuleniu metodą
            tradycyjnych iniekcji lub z wykorzystaniem urządzenia do mezoterapii
            podciśnieniowej.
          </p>
        </section>
        <section>
          <h3>Efekty zabiegu</h3>
          <p>
            Zabieg przynosi bardzo dobre rezultaty a ryzyko powikłań jest
            minimalne. Efekty działania preparatu w leczeniu nadpotliwości
            widoczne są już po 3 dniach, natomiast pełne zahamowanie pocenia
            obserwuje się po 2-4 tygodniach. Zależnie od uwarunkowań
            indywidualnych rezultat terapii utrzymuje się przez 5-9 miesięcy.
          </p>
        </section>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Leczenie nadpotliwości" description="Nadmierne pocenie można skutecznie zredukować wykonując zabieg z zastosowaniem toksyny. Jeśli problem dotyczy także Ciebie - zgłoś się do nas!"/>
export default LeczenieNadpotliwosci
