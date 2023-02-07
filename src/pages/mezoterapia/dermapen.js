import React from "react"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

const Dermapen = () => {
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Dermapen</h1>
        <section>
          <h2>Wysoki poziom regeneracji skóry dzięki mezoterapii mikroigłowej</h2>
        </section>
        <section>
          <p>
            Dermapen to urządzenie wykorzystywane do mezoterapii mikroigłowej.
            Składa się z mikroigieł, które dzięki ruchom pulsacyjnym głowicy
            wykonują ok. 1300 nakłuć na sekundę skutecznie wprowadzając w skórę
            substancje odżywcze stymulujące odnowę tkanek. Dzięki regulowanej
            głębokości nakłuć od 0.5 do 3 mm jesteśmy w stanie dostosować zabieg
            do potrzeb Pacjenta oraz jego wrażliwości.
          </p>
          <p>
            Zabieg Dermapen obudza regenerację włókien kolagenu i elastyny
            poprzez mechaniczną stymulację skóry (nakłuwanie). Powstałe
            mikrourazy wykorzystują naturalne zdolności organizmu do naprawy
            oraz fizjologicznej indukcji kolagenu. Zabieg zwiększa również
            przepuszczalność skóry, dzięki czemu jest ona gotowa na przyjęcie
            specjalnie skoncentrowanych preparatów aktywnych.
          </p>
        </section>
        <section>
          <h3>Jak przebiega zabieg?</h3>
          <p>
            Skóra przed zabiegiem jest znieczulana kremem emla. Sam zabieg trwa
            w zależności od obszaru 15-30 minut. Każdorazowo zabieg jest
            wykonywany przy użyciu sterylnej jednorazowej głowicy z kilkunastoma
            bardzo cienkimi igłami wykonanymi ze stali chirurgicznej. Głębokość,
            na jaką nakłuwana jest skóra jest regulowana przez lekarza,
            wykonującego zabieg w zależności od obszaru i wskazań do zabiegu.
            Uzupełnieniem terapii są stosowane podczas zabiegu preparaty
            zawierające substancje odżywcze i rozświetlające.
          </p>
         
        </section>
        <section>
            <h3>Po zabiegu</h3>
            <p>
            Okres rekonwalescencji jest krótki. Po zabiegu może wystąpić
            podrażnienie skóry, które trwa nie dłużej niż 48 godzin.
            Bezpośrednio po zabiegu należy unikać ćwiczeń, alkoholu i gorących
            kąpieli oraz do tygodnia od zabiegu basenu, sauny oraz solarium.
            Przez okres kilku tygodni nie jest wskazane opalanie. Skórę należy
            dobrze nawilżać oraz stosować krem przeciwsłoneczny.
          </p>
          <p>
            Już po pierwszym zabiegu widoczna jest poprawa wyglądu skóry.
            Najlepsze efekty można uzyskać po wykonaniu serii zabiegów,
            najczęściej zalecane są 4-6 zabiegów co 2-3 tygodnie.
          </p>
        </section>
        <section>
          <h3>Efekty zabiegu</h3>
          <ul>
            <li>odżywienie skóry</li>
            <li>spłycenie zmarszczek</li>
            <li>poprawa kolorytu skóry</li>
            <li>redukcja przebarwień</li>
            <li>usunięcie drobnych blizn</li>
            <li>wygładzenie i rozświetlenie skóry </li>
            <li>poprawa elastyczności i napięcia skóry</li>
            <li>zmniejszenie porów</li>
            <li>redukcja rozstępów i blizn</li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Dermapen - mezoterapia mikroigłowa" />
export default Dermapen
