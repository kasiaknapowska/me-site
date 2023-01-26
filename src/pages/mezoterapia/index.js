import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import Card from "../../components/card/card"

const cardsInfo = [
  {
    name: "VitalInjector",
    title: "Mezoterapia podciśnieniowa",
    details:
      "Zwiększona 10-krotnie liczba iniekcji w porównaniu do metody tradycyjnej pozwala uzyskać wysoką skuteczność mezoterapii.",
    url: "mezoterapia-podcisnieniowa",
  },
  {
    name: "Dermapen",
    title: "Mezoterapia Dermapen",
    details:
      "Mezoterapia mikroigłowa stymuluje naturalne zdolności organizmu do naprawy oraz fizjologicznej indukcji kolagenu.",
    url: "dermapen",
  },
  {
    name: "Komórki",
    title: "Osocze bogatopłytkowe",
    details:
      "Osocze pozyskiwane z krwi Pacjenta bogate w komórki macierzyste i czynniki wzrostu.",
    url: "osocze-bogatoplytkowe",
  },
]

const Mezoterapia = ({ data }) => {
  const cardImages = data.allFile.nodes
  console.log(cardImages)
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Mezoterapia</h1>
        <section>
          <h2>
          Odmładzanie, rewitalizacja oraz poprawa kondycji skóry.
          </h2>
        </section>
        <section>
          <p>
            Mezoterapia igłowa to rodzaj zabiegu odmładzającego, który polega na
            ostrzykiwaniu skóry małymi dawkami substancji leczniczych, koktajli
            na bazie kwasu hialuronowego, peptydów, nukleotydów lub osocza
            bogatego w komórki macierzyste uzyskiwanego z krwi pacjenta . Ilość
            zabiegów wymaganych do osiągnięcia pełnego efektu terapii ustalana
            jest indywidualnie podczas konsultacji z lekarzem.
          </p>
        </section>
        <section>
          <h3>Dla kogo?</h3>
          <p>
            Mezoterapia stosowana jest w celu rewitalizacji, odmładzania i
            liftingowania skóry. Już po pierwszym zabiegu widoczne są pierwsze
            efekty w postaci poprawy kondycji, elastyczności i gładkości skóry.
            Zanikają również drobne zmarszczki, a te głębsze ulegają spłyceniu.
            Zwykle mezoterapii poddawane są takie partie ciała jak: twarz,
            szyja, dekolt, dłonie. W tych miejscach skóra najszybciej traci swój
            blask. Metoda znajduje również zastosowanie w terapii łysienia oraz
            w usuwaniu cellulitu i rozstępów.
          </p>
          
        </section>
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
    allFile(filter: { relativeDirectory: { eq: "cardImages/mezoterapia" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

export const Head = () => <Seo title="Mezoterapia" />
export default Mezoterapia
