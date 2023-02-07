import * as React from "react"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

const LaseroweOdmladzanieAntiAging = () => (
  <Layout>
    <div className="container pageContainer">
      <h1>Laserowy anti-aging</h1>
      <section>
        <h2>
          Laser pomoże usunąć wszelkie niedoskonałości, wygładzi i poprawi
          wygląd Twojej skóry.{" "}
        </h2>
        <p>
          Odmładzanie laserem frakcyjnym wykorzystuje nowoczesną technikę
          frakcjonowania, czyli mikrouszkadzania skóry. Wiązki lasera docierają
          poniżej powierzchni naskórka uszkadzając „kolumny” komórek. Zabiegi
          odmładzające pobudzają wewnętrzne, naturalne procesy regeneracyjne.
          Zabieg jest bardzo efektywny, jako że stymuluje skórę do samodzielnego
          rozpoczęcia procesów regeneracyjnych, co jest gwarancją głębokiej i
          skutecznej przebudowy skóry. Jednocześnie laser frakcyjny przenikając
          przez naskórek i unikając jego uszkodzenia powoduje, że Pacjenci
          błyskawicznie mogą wrócić do swoich codziennych zajęć, nie ryzykując
          długotrwałego leczenia ran pozabiegowych.
        </p>
      </section>
      <section>
        <h3>Efekty zabiegu</h3>
        <p>
          Laseroterapia pozwala uzyskać efekt odmłodzenia skóry. Wszelkie oznaki
          starzenia, takie jak wiotkość skóry, przebarwienia, drobne blizny,
          zmarszczki, utrata gęstości i jędrności skóry, mogą być skutecznie
          wyeliminowanie dając efekt odmłodzonej i wygładzonej skóry.
        </p>
        <p>
          Dla uzyskania pożądanych rezultatów konieczna jest seria kilku
          zabiegów w danej okolicy. O ilości zabiegów zadecyduje lekarz po
          badaniu stanu skóry. Skóra po zabiegu regeneruje się w bardzo szybkim
          tempie, jednak przebudowa skóry przebiega zgodnie z wewnętrznymi,
          indywidualnymi dla każdego organizmu procesami regeneracji. Dlatego
          też, mimo że pierwsze efekty zabiegów widać już po kilku dniach, to
          pełna poprawa wyglądu skóry jest widoczna po 2-3 miesiącach. Przy
          pomocy zabiegów odmładzania frakcyjnego możemy znakomicie poprawić
          kondycję skóry szyi, dekoltu, twarzy i dłoni, uzyskać efekty liftingu
          skóry.
        </p>
      </section>
      <section>
        <h3>Zalecenia po zabiegu</h3>
        <p>
          Podstawowym wymogiem pozabiegowym jest szczególna dbałość o skórę w
          zakresie jej ochrony przed promieniami słonecznymi. Zalecane jest
          używanie kremów z bardzo wysokimi filtrami (minimum 30) oraz unikanie
          kąpieli słonecznych i zbyt długiej ekspozycji skóry na słońce.
        </p>
      </section>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Laserowe odmładzanie anti-aging" />

export default LaseroweOdmladzanieAntiAging
