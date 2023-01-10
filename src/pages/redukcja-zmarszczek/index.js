import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

const RedukcjaZmarszczek = () => (
  <Layout>
    <div className="container pageContainer">
      <h1>Redukcja zmarszczek</h1>

      <section>
        <h2>Jak skutecznie usunąć zmarszczki?</h2>
        <p>
          W zależności od rodzaju, głębokości i lokalizacji zmarszczek do ich
          usuwania wykorzystywane są 3 rodzaje preparatów - każdorazowo dobierane
          są one indywidualnie do potrzeb skóry Pacjenta oraz oczekiwanych rezultatów:{" "}
        </p>
        <ul>
          <li>
            Kompleks liftingująco-przeciwzmarszczkowy na bazie kwasu
            hialuronowego i peptydów,
          </li>
          <li>Biostymulator tkankowy na bazie polinukleotydów,</li>
          <li>Preparaty na bazie specjalistycznej toksyny.</li>
        </ul>
      </section>
      <Link to="/kontakt" className="btn btnSecondary">Umów wizytę</Link>
     
    </div>
  </Layout>
)

export const Head = () => <Seo title="Redukcja zmarszczek" />

export default RedukcjaZmarszczek
