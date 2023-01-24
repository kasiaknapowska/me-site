import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import Card from "../../components/card/card"

const cardsInfo = [
  {
    name: "Wygładzanie",
    title: "Wygładzanie skóry",
    details: "Żel polinukleotydowy będący analogiem fizjologicznego DNA do głębokiej odbudowy i rekonstrukcji komórek skóry.",
    url: "laserowe-wygladzanie-skory",
  },
  {
    name: "Odmładzanie",
    title: "Laserowy anti-aging",
    details:
      "Laser pozwala uzyskać efekt odmłodzenia poprzez eliminację niedoskonałości i poprawę jędrności skóry.",
    url: "laserowe-odmladzanie-anti-aging",
  },
  { name: "Lifting", title: "Laserowy lifting twarzy", details: "Stosowana jest do miejscowego usuwania głębokich zmarszczek mimicznych twarzy.", url: "laserowy-lifting-twarzy" },
]

const ZabiegiLaserowe = ({data}) => {
  const cardImages = data.allFile.nodes
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


export const Head = () => <Seo title="Zabiegi laserowe" />
export default ZabiegiLaserowe
