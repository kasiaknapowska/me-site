import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

const Biostymulator = () => (
  <Layout>
    <div className="container pageContainer">
      <h1>Biostymulator tkankowy</h1>
      <section>
        <h2>
          Odbudowa komórkowa z wykorzystaniem biostymulatora tkankowego na bazie
          polinukleotydów
        </h2>
        <p>
          W celu głębokiej redermalizacji / odbudowy komórkowej skóry i
          rekonstrukcji struktury skóry stosujemy specjalistyczny żel
          polinukleotydowy. Preparat jest analogiem fizjologicznego DNA komórek
          skóry i stosowany jest do intensywnej odbudowy tkanek uszkodzonych
          przez czynniki zewnętrzne oraz zmienionych przez procesy starzenia
          chronologiczne i posłoneczne. Zawarte w preparacie kwasy nukleinowe
          pozwalają na naprawę uszkodzonej matrycy DNA komórek, przyspieszenie
          metabolizmu i proliferacji komórek tkanek oraz intensyfikację
          replikacji i odnowy komórek skóry. Działanie to koryguje zmiany skórne
          związane z wiekiem, przyspiesza i skutecznie wpływa na regenerację
          skóry, syntezę białek podporowych, odtwarzanie endogennego kwasu
          hialuronowego oraz zwiększenie poziomu nawilżenia i wypełnienia
          tkanek.
        </p>
        <p>Efekty zabiegu:</p>
        <ul>
          <li>Redermalizacja, lifting i remodeling skóry,</li>
          <li>
            Biorestrukturyzacja skóry wraz z naprawą uszkodzonej matrycy DNA,
          </li>
          <li>Hydratacja skóry.</li>
        </ul>
        <p>
          Biostymulator tkankowy wprowadzany jest poprzez iniekcje w miejsca, w
          których na skutek utraty kolagenu i substancji podporowych doszło do
          powstania zmarszczek i zagłębień. Aby uzyskać najlepsze efekty zabieg
          wykonywany jest w 3 seriach w odstępach co 3 tygodnie. Efekty
          utrzymują się przez 4 miesiące.
        </p>
      </section>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Biostymulator tkankowy" />

export default Biostymulator
