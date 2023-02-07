import React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const Pelleve = () => {
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Zabieg Pelleve</h1>
        <section>
          <h2>
            Innowacyjny system Pelleve odwraca oznaki starzenia bez konieczności
            używania igieł.
          </h2>
        </section>
        <section>
          <h3>Nieinwazyjne modelowanie twarzy</h3>
          <p>
            Pellevé to metoda nieinwazyjnego napinania skóry, stosowana w celu
            wygładzenia zmarszczek, poprawy jakości i jędrności skóry. Dzięki
            Pellevé w naturalny sposób przywracamy naszym pacjentom młody wygląd
            i pewność siebie.
          </p>
          <p>
            Metoda Pellevé nie wymaga wykonywania rozległych zabiegów
            chirurgicznych, ani stosowania znieczulenia. Zapewnia widoczne i
            trwałe efekty poprawy jakości skóry u wszystkich pacjentów.
          </p>
          <p>Metoda stosowana jest m.in. do leczenia:</p>
          <ul>
            <li>obwisłego podbródka,</li>
            <li>zmarszczek na czole i pomiędzy brwiami,</li>
            <li>zmarszczek wokół ust i oczu,</li>
            <li>nadmiaru skóry na górnej powiece,</li>
            <li>fałdów nosowo-wargowych.</li>
          </ul>
        </section>
        <section>
          <h3>Jak działa Pelleve?</h3>
          <p>
            Urządzenie w precyzyjny sposób dostarcza energii tkance skórnej
            dzięki zastosowaniu zaawansowanych technologii fal radiowych.
            Energia emitowana z głowicy Pellevé ogrzewa i delikatnie modyfikuje
            tkanki miękkie, podczas gdy system chłodzenia niweluje dyskomfort
            zapewniając bezbolesne przeprowadzenie zabiegu.
          </p>
        </section>
        <section>
          <h3>Efekty zabiegu</h3>
          <p>
            W efekcie działania fal radiowych dochodzi do kurczenia się,
            napinania oraz odbudowy włókien kolagenowych bez uszkadzania
            naskórka. W rezultacie widać wyraźną poprawę jakości i wyglądu skóry
            w bardzo krótkim czasie. Efekty leczenia widoczne są już po
            pierwszym zabiegu i utrzymują się nawet do 2 lat. Pełny efekt
            liftingu ujawnia się stopniowo w okresie 3 do 6 miesięcy w miarę
            napinania się skóry i formowania nowych włókien kolagenu. Ilość
            zabiegów dobierana jest indywidualnie dla każdego pacjenta po ocenie
            stanu skóry przez lekarza medycyny estetycznej. Pozwala to uzyskać
            pożądany rezultat, zgodny z wymaganiami pacjenta.
          </p>
        </section>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Zabieg Pelleve" />
export default Pelleve
