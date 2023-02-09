import React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const ModelowanieUst = () => {
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Modelowanie ust</h1>
        <section>
          <h2>
            Za pomocą małoinwazyjnego zabiegu można wymodelować kształt i kontur
            ust tak, by osiągnąć najbardziej naturalny efekt, bez sztucznego
            wypełnienia.
          </h2>
        </section>
        <section>
          <h3>Przywracanie objętości ust</h3>
          <p>
            Nowoczesna metoda modelowania ust z zastosowaniem preparatu o
            obniżonym stężeniu kwasu hialuronowego pozwala na naturalną korekcję
            i delikatne uwydatnienie objętości czerwieni wargowej, bez zmiany
            jej geometrii. Dzięki opatentowanej technologii preparat posiada
            wyjątkowo plastyczną i gładką teksturę umożliwiającą idealne
            rozprowadzenie w skórze i uzyskanie naturalnego efektu,
            dostosowanego do potrzeb Pacjentki (od efektów subtelnych do
            wolumetrycznych).
          </p>
        </section>
        <section>
          <h3>Efekty zabiegu</h3>
          <ul>
            <li>
              wymodelowanie czerwieni wargowej z zachowaniem miękkości i
              naturalności ust
            </li>
            <li>poprawa i uwydatnienie konturu,</li>
            <li>
              zwiększenie jędrności i objętości ust bez efektu sztucznego
              wypełnienia
            </li>
            <li>przywrócenie objętości ust utraconej z wiekiem,</li>
            <li>nawilżenie i wygładzenie ust,</li>
            <li>zniwelowanie zmarszczek palacza,</li>
            <li>uniesienie kącików ust,</li>
            <li>długotrwały efekt utrzymujący się nawet 6-12 miesięcy.</li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Modelowanie ust" description="Przywracanie naturalnej objętości ust bez efektu sztucznego wypełnienia. Zapraszamy do naszego gabinetu w Katowicach!"/>
export default ModelowanieUst
