import React from "react"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

const OsoczeBogatoplytkowe = () => {
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Osocze bogatopłytkowe</h1>
        <section>
          <h2>
            Źródło piękna jest w Tobie. Intensywne odmłodzenie skóry z użyciem
            Twoich własnych czynników wzrostu i komórek macierzystych.
          </h2>
        </section>
        <section>
          <h3>Jak wygląda zabieg?</h3>
          <p>
            Podstawą zabiegu jest Twoja własna krew. Bezpośrednio po pobraniu
            zostaje ona odwirowana w separatorze komórkowym, dzięki któremu
            uzyskujemy wyodrębnione czynniki wzrostu i komórki macierzyste. Tak
            przygotowany materiał zostaje podany w skórę techniką mezoterapii.
            Dla Twojego komfortu można zastosować znieczulenie. Podczas zabiegu
            możesz czuć delikatne wkłucia oraz rozpieranie. Jeśli Twoja skóra
            potrzebuje intensywniejszej regeneracji, lekarz może zdecydować o
            iniekcji czynników wzrostu i komórek macierzystych zawieszonych w
            żelu uzyskanym z białek Twojej krwi. To zapewni dłuższą i silniejszą
            stymulację. Po zabiegu możesz wrócić do codziennych aktywności.
          </p>
        </section>
        <section>
          <h3>Dla kogo?</h3>
          <p>
            Mezoterapia osoczem bogatołytkowym jest idealnym zabiegiem
            profilaktycznym, regenerującym i stymulującym skórę, dzięki
            optymalnej ilości preparatu i maksymalnej koncentracji czynników
            wzrostu oraz komórek macierzystych. Przeznaczony jest dla każdego,
            kto w całkowicie naturalny sposób, bez wykorzystania sztucznych
            preparatów, chce poprawić swoją urodę, ujędrnieć i zrewitalizować
            skórę twarzy, szyi, dekoltu i dłoni, zredukować zmarszczki, usunąć
            rozstępy i blizny. Komórki macierzyste stosowane są również podczas
            terapii łysienia.
          </p>
        </section>
        <section>
          <h3>Po zabiegu</h3>
          <p>
            Tak jak w przypadku większości zabiegów iniekcyjnych po zabiegu
            możesz wrócić do codziennych aktywności. Mogą pojawić się niewielkie
            siniaki oraz reakcje takie jak obrzęk czy bolesność w miejscu
            iniekcji, które w ciągu kilku dni samoistnie ustąpią. Po wykonaniu
            serii zabiegów lekarz zaproponuje Ci kolejny zabieg podtrzymujący
            efekt, w zależności od potrzeb Twojej skóry.
          </p>
        </section>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Osocze bogatopłytkowe" description="Mezoterapia osoczem bogatym w komórki macierzyste, pozyskiwanym z krwi Pacjenta, to jedna z najskuteczniejszych metod odmłodzenia i regeneracji skóry, spłycenia zmarszczek i poprawy gęstości włosów."/>
export default OsoczeBogatoplytkowe
