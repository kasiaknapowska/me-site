import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import Cards from "../../components/cards/cards"

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
  const cardsImg = data.allFile.nodes

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
        <Cards cardsImg={cardsImg} cardsInfo={cardsInfo}/>
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

export const Head = () => <Seo title="Mezoterapia" description="Mezoterapia wykorzystuje naturalne zdolności organizmu do samoregeneracji. Zabiegi iniekcyjne stymulują naturalną przebudowę skóry dając efekt odmłodzenia i głębokiej rewitalizacji."/>
export default Mezoterapia
