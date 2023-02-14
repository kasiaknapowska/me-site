import React from "react"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

const MezoterapiaPodcisnieniowa = () => {
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Mezoterapia podciśnieniowa</h1>
        <section>
          <h2>
            Chcesz odmłodzić skórę bez ryzyka siniaków po zabiegu? Mezoterapia
            podciśnieniowa będzie dla Ciebie idealna!
          </h2>
        </section>
       
        <section>
          <p>
            Innowacyjne urządzenie do mezoterapii pozwala na komfortowe i
            bezbolesne przeprowadzenie zabiegów mezoterapii przy zastosowaniu
            kwasu hialuronowego, osocza bogatopłytkowego, komórek macierzystych
            i wielu innych preparatów używanych do mezoterapii. Dodatkowo
            nowoczesne urządzenie pozwala na bezbolesne przeprowadzenie zabiegu
            leczenia nadpotliwości dłoni i pach, gdzie wymagane jest wykonanie
            licznych nakłuć skóry i metoda tradycyjna jest nieakceptowana przez
            wielu Pacjentów.
          </p>
        </section>
        <section>
          <h3>Mezoterapia podciśnieniowa a tradycyjna</h3>
          <p>
            Tradycyjna metoda mezoterapii opiera się na wykorzystaniu igły i
            strzykawki. Lekarz ręcznie wykonuje nakłucia, wprowadzając preparat
            w głębokie warstwy skóry. Przy mezoterapii tradycyjnej wykonuje się
            100-200 nakłuć. Nowoczesna metoda z zastosowaniem systemu VITAL
            INJECTOR umożliwia wykonanie w sposób bezbolesny i komfortowy dla
            Pacjenta 1.000 – 2.000 nakłuć o kontrolowanej głębokości. Pozwala to
            uzyskać lepsze rozprowadzenie preparatu i, co się z tym wiąże,
            lepszy efekt estetyczny.
          </p>
        </section>
        <section>
        <h3>Zalety mezoterapii podciśnieniowej</h3>
        <ul>
          <li>
          Bezbolesna aplikacja bez konieczności znieczulenia
          </li>
          <li>Brak krwiaków i siniaków po zabiegu</li>
          <li>
          Krótszy czas zabiegu przy maksymalnej efektywności
          </li>
          <li>Równomierne, precyzyjne rozprowadzenie preparatu bez pojawiania się grudek pod skórą</li>
          <li>
          Zwiększona 10-krotnie liczba iniekcji w porównaniu do metody tradycyjnej
          </li>
          <li>Automatyczna kontrola głębokości podania preparatu, co wpływa na końcowy efekt zabiegu</li>
          <li>Efektywne, w pełni kontrolowane podawanie preparatu</li>
        </ul>
        </section>
        <section>
        <h3>Efekty mezoterapii podciśnieniowej</h3>
        <ul>
          <li>
          Rewitalizacja i regeneracja skóry, poprawa jędrności i elastyczności
          </li>
          <li>Odmłodzenie i nawilżenie skóry</li>
          <li>
          Likwidacja zmarszczek
          </li>
          <li>Hamowanie wypadania włosów poprzez głębokie odżywienie cebulek włosowych</li>
          <li>
          Redukcja cellulitu i rozstępów, spłycenie blizn
          </li>
          <li>Zahamowanie starzenia skóry</li>
          <li>Leczenie nadpotliwości</li>
        </ul>
        </section>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Mezoterapia podciśnieniowa" description="Specjalistyczne urządzenie zwiększa efektywność zabiegu poprzez zwiększenie liczby iniekcji, równomierne rozprowadzanie preparatu w skórze i kontrolę głębokości nakłuć."/>
export default MezoterapiaPodcisnieniowa
