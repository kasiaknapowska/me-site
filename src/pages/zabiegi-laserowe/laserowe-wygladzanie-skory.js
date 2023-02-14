import * as React from "react"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

const LaseroweWygladzanieSkory = () => (
  <Layout>
    <div className="container pageContainer">
      <h1>Laserowe wygładzanie skóry</h1>
      <section>
        <h2>
          Pewne niedoskonałości ciała potrafią wpłynąć na nasze dobre
          samopoczucie. Pozbądź się ich dzięki laseroterapii.
        </h2>
        <p>
          Gładka, jędrna skóra to oznaka młodości. Pewne niedoskonałości,
          nierówności często to stanowią problem zarówno estetyczny, jak i
          psychologiczny. Zwłaszcza wtedy, kiedy zmiany są duże i trudno je
          zamaskować.
        </p>
        <p>
          Dla poprawy wyglądu skóry stosujemy zabiegi, które pobudzają tkanki do
          regeneracji, odnawiają strukturę oraz wpływają korzystnie na koloryt
          skóry. Zabiegi laserowe zmniejszają zmiany, wygładzają je i
          uelastyczniają skórę.
        </p>
      </section>
      <section>
        <h3>Efekty zabiegu</h3>
        <p>
          Już po pierwszym zabiegu widać wyraźną poprawę kondycji skóry. Jednak
          do uzyskania rewelacyjnych efektów konieczne jest przeprowadzenie
          serii zabiegów. Podczas konsultacji wspólnie z lekarzem ustalisz ile
          zabiegów i w jakim czasie powinno być wykonanych, by uzyskać wymarzony
          efekt!
        </p>
        
      </section>
     
    </div>
  </Layout>
)

export const Head = () => <Seo title="Laserowe wygładzanie skóry" description="Seria zabiegów laserowych poprawia kondycję skóry, odnawia jej strukturę, wygładza i uelastycznia."/>

export default LaseroweWygladzanieSkory
