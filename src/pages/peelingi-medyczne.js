import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const PeelingiMedyczne = () => {
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Peelingi medyczne</h1>
        <section>
          <h2>
            Zapewniają odnowę, nawilżenie i ujędrnienie skóry, usuwają
            przebarwienia i drobne niedoskonałości, dzięki czemu twarz wygląda
            młodo i promiennie!
          </h2>
        </section>
        <section>
          <h3>Jak działa peeling</h3>
          <p>
            Peeling medyczny polega na zastosowaniu preparatów zawierających
            kwasy organiczne, które w kontrolowany sposób złuszczają naskórek.
            Dzięki peelingowi skóra staje się gładsza, jaśniejsza, bardziej
            jędrna i odżywiona. Znikają z niej przebarwienia, niewielkie blizny,
            zmarszczki. Zabieg pozwala uzyskać efekt odmłodzenia i nawilżenia
            skóry. Peeling medyczny stosowany jest w ramach profilaktyki
            starzenia skóry oraz leczniczo – według wskazań lekarskich. Rodzaj
            peelingu jest dobierany przez lekarza indywidualnie do potrzeb skóry
            Pacjenta.
          </p>
        </section>
        <section>
          <h3>Peeling medyczny do skóry wrażliwej i trądzikowej</h3>
          <p>
            Peeling na bazie glukonolaktonu i kwasu migdałowego jest doskonale
            tolerowany przez skórę wrażliwą i działa silnie antyoksydacyjnie.
            Posiada zdolność do długotrwałego wiązania wody, dzięki czemu
            nawilża i ujędrnia skórę. Reguluje wydzielanie sebum, oczyszcza
            pory, redukuje przebarwienia i blizny potrądzikowe. Dodatkowo
            poprawia funkcje ochronne skóry.
          </p>
        </section>
        <section>
          <h3>Peeling do selektywnego odmładzania skóry</h3>
          <p>
            Peeling medyczny na bazie kwasu trójchlorooctowego, migdałowego i
            kojowego selektywnie stymuluje głębokie warstwy skóry właściwej bez
            mocnego uszkadzania zewnętrznych warstw naskórka. Oddziaływanie na
            wewnętrzne struktury skóry powoduje jej dogłębną przebudowę, dzięki
            czemu uzyskujemy silne zagęszczenie, wygładzenie i remodeling.
            Formuła peelingu stanowi doskonałe rozwiązanie do nieinwazyjnego
            liftingu i ujędrniania skóry oraz niwelowania jej niedoskonałości.
            Zabieg można stosować w połączeniu z innymi zabiegami medycyny
            estetycznej, co pozwala na intensyfikację i przedłużenie efektów
            terapii.
          </p>
          <p>Zalety peelingu selektywnego:</p>
          <ul>
            <li>możliwość całorocznego stosowania,</li>
            <li>selektywne oddziaływanie na głębokie warstwy skóry,</li>
            <li>wysoka tolerancja,</li>
            <li>brak dyskomfortu zabiegowego,</li>
            <li>brak podrażnienia skóry,</li>
            <li>
              efekty rozjaśnienia i poprawy napięcia skóry widoczne bezpośrednio
              po zabiegu,
            </li>
            <li>
              zabieg rewitalizacji, przebudowy i regeneracji nie wymagający
              użycia igieł.
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Peelingi medyczne" />
export default PeelingiMedyczne
