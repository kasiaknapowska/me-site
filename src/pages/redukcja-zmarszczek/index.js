import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { StaticImage, getImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import Card from "../../components/card/card"

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
  const cardImages = data.allFile.nodes

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

        <Link to="/kontakt" className="btn btnSecondary">
          Umów wizytę
        </Link>
        <section className="cardsContainer">
          {cardImages.map(el =>
            cardsInfo.map(info => {
              if (el.name.toLowerCase() === info.name.toLowerCase()) {
                const img = getImage(el)
                return (
                  <Card
                    key={el.name}
                    title={info.title}
                    details={info.details}
                    url={info.url}
                    img={img}
                  />
                )
              }
            })
          )}
        </section>
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
