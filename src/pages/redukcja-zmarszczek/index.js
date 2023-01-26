import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import Cards from "../../components/cards/cards"

const cardsInfo = [
  {
    name: "Kwas",
    title: "Kwas hialuronowy",
    details:
      "Koktajl nowej generacji do walki ze zmarszczkami mimicznymi i objawami starzenia skóry. Alternatywa dla popularnej toksyny.",
    url: "kwas-hialuronowy",
  },
  {
    name: "Biostymulator",
    title: "Biostymulator tkankowy",
    details: "Żel polinukleotydowy będący analogiem fizjologicznego DNA do głębokiej odbudowy i rekonstrukcji komórek skóry.",
    url: "biostymulator",
  },
  { name: "Toksyna", title: "Toksyna wygładzająca", details: "Stosowana jest do miejscowego usuwania głębokich zmarszczek mimicznych twarzy.", url: "toksyna" },
]

const RedukcjaZmarszczek = ({ data }) => {
  const cardsImg = data.allFile.nodes
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Redukcja zmarszczek</h1>

        <section>
          <h2>Jak skutecznie usunąć zmarszczki?</h2>
          <p>
            W zależności od rodzaju, głębokości i lokalizacji zmarszczek do ich
            usuwania wykorzystywane są 3 rodzaje preparatów - każdorazowo
            dobierane są one indywidualnie do potrzeb skóry Pacjenta oraz
            oczekiwanych rezultatów:{" "}
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

      <Cards cardsImg={cardsImg} cardsInfo={cardsInfo}/>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile(
      filter: { relativeDirectory: { eq: "cardImages/redukcjaZmarszczek" } }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

export const Head = () => <Seo title="Redukcja zmarszczek" />

export default RedukcjaZmarszczek
