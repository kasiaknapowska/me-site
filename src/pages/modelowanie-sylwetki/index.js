import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import Cards from "../../components/cards/cards"

const cardsInfo = [
  {
    name: "Lipoliza",
    title: "Lipoliza iniekcyjna",
    details:
      "Rozpuszczanie i eliminacja tłuszczu z partii ciała najbardziej opornych na ćwiczenia fizyczne.",
    url: "lipoliza",
  },
  {
    name: "EMSlimPRO",
    title: "Stymulacja mięśni EMSlimPRO",
    details:
      "Elektromagnetyczne wzmacnianie mięśni brzucha i pośladków bez konieczności długotrwałych ćwiczeń.",
    url: "elektromagnetyczna-stymulacja-miesni",
  },
  {
    name: "Dietetyka",
    title: "Dietetyka kliniczna",
    details:
      "Utrzymanie efektów zabiegów wyszczuplających dzięki diecie celowaniej i zmianie stylu życia.",
    url: "/dietetyka",
  },
]

const ModelowanieSylwetki = ({ data }) => {
  const cardsImg = data.allFile.nodes

  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Modelowanie sylwetki</h1>
        <section>
          <h2>
            Zabiegi redukujące tkankę tłuszczową i stymulujące mięśnie oraz
            opieka dietetyka pomoże Ci w szybki sposób odzyskać szczupłą
            sylwetkę.
          </h2>
        </section>
        <section>
          <p>
            Jak wymodelować sylwetkę i cieszyć się z długotrwałych efektów?
            Najlepiej podejść do problemu kompleksowo! W naszym gabinecie
            wykonujemy zabiegi, które pozwalają usunąć nadmiar tkanki
            tłuszczowej z miejsc, które są najbardziej oporne na ćwiczenia
            fizyczne:
          </p>
          <ul>
            <li>
              elektromagnetyczna stymulacja mięśni brzucha i pośladków
            </li>
            <li>
              lipoliza iniekcyjna, czyli rozpuszczanie komórek tłuszczowych
            </li>
          </ul>
        </section>
        <section>
          <p>
            Aby pomóc naszym Pacjentom utrzymać efekty zabiegów wyszczuplających
            proponujemy opiekę dietetyka klinicznego, który zdiagnozuje
            indywidualne potrzeby organizmu, wykona szereg badań,
            dobierze skuteczną dietę celowaną, która nie wymaga wyrzeczeń, a
            także pomoże przejść proces zmiany stylu życia. To wszystko z korzyścią dla zdrowia i pięknej sylwetki.
          </p>
        </section>
        <Cards cardsImg={cardsImg} cardsInfo={cardsInfo}/>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile(
      filter: { relativeDirectory: { eq: "cardImages/modelowanieSylwetki" } }
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

export const Head = () => <Seo title="Modelowanie sylwetki" />
export default ModelowanieSylwetki
