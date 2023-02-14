import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import Cards from "../../components/cards/cards"

const cardsInfo = [
  {
    name: "Wygładzanie",
    title: "Wygładzanie skóry",
    details: "Seria zabiegów laserowych poprawia kondycję skóry, odnawia jej strukturę, wygładza i uelastycznia.",
    url: "laserowe-wygladzanie-skory",
  },
  {
    name: "Odmładzanie",
    title: "Laserowy anti-aging",
    details:
      "Laser pozwala uzyskać efekt odmłodzenia poprzez eliminację niedoskonałości i poprawę jędrności skóry.",
    url: "laserowe-odmladzanie-anti-aging",
  },
  { name: "Lifting", title: "Laserowy lifting twarzy", details: "Laser zwiększa napięcie skóry i stymuluje jej odbudowę jednocześnie poprawiając owal twarzy.", url: "laserowy-lifting-twarzy" },
]

const ZabiegiLaserowe = ({data}) => {
  const cardsImg = data.allFile.nodes
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Laserowe usuwanie niedoskonałości skóry</h1>
        <section>
          <h2>
            Laseroterapia to jedna z najskuteczniejszych metod pozbycia się
            blizn i roztępów oraz odmłodzenia skóry (anti-aging)
          </h2>
        </section>
        <section>
          <h3>Jak działa laser frakcyjny?</h3>
          <p>
            FRAXEL to laser, który za pomocą światła wytwarza impulsy i rozrzuca
            je równomiernie po skórze. Dziurkuje skórę tysiącami mikroskopijnych
            kolumn, które podgrzewają tkanki. Skóra zostaje zregenerowana oraz
            przystosowana do stymulacji nowego kolagenu. Obszary nienaruszonej
            strefy odbudowują odparowane miejsca powodując poprawę gęstości
            skóry, jej wygładzenie i odmłodzenie. Najlepsze rezultaty można
            osiągnąć po przeprowadzeniu 3-5 serii wykonanych w odstępach 3-5
            tygodni. W dużej mierze jest to uzależnione od miejsca zabiegu,
            rodzaju zmian na skórze i oczekiwań Pacjenta.
          </p>
        </section>
        <section>
          <h3>Wskazania do laseroterapii</h3>
          <ul>
            <li>rozstępy, blizny, przebarwienia,</li>
            <li>wiotkość skóry ramion, brzucha, po porodzie</li>
            <li>oznaki starzenia skóry twarzy, szyi, dekoltu, dłoni,</li>
            <li>drobne zmarszczki,</li>
            <li>utrata gęstości i sprężystości skóry,</li>
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
      filter: { relativeDirectory: { eq: "cardImages/zabiegiLaserowe" } }
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


export const Head = () => <Seo title="Zabiegi laserowe" description="Zapraszamy na zabiegi laserowe o działaniu anti-aging w Katowicach. Zadzwoń do nas 32 606 04 27. Usuwanie blizn, rozstępów, przebarwień, odnowa i ujędrnianie skóry."/>
export default ZabiegiLaserowe
