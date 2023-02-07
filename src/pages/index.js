import * as React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/hero"
import Cards from "../components/cards/cards"
import Form from "../components/form/form"
import PopUp from "../components/popUp/popUp"

const cardsInfo = [
  {
    name: "Dermapen",
    title: "Mezoterapia Dermapen",
    details:
      "Mezoterapia mikroigłowa stymuluje naturalne zdolności organizmu do naprawy oraz fizjologicznej indukcji kolagenu.",
    url: "mezoterapia/dermapen",
  },
  {
    name: "Komórki",
    title: "Komórki macierzyste",
    details:
      "Komórki macierzyste i czynniki wzrostu zawarte w osoczu bogatopłytkowym intensywnie regenerują i odmładzają skórę.",
      url: "mezoterapia/osocze-bogatoplytkowe"
  },
  {
    name: "Dietetyka",
    title: "Dietetyka kliniczna",
    details:
      "Utrzymanie efektów zabiegów wyszczuplających dzięki diecie celowaniej i zmianie stylu życia.",
    url: "dietetyka",
  },
  {
    name: "Zmarszczki",
    title: "Redukcja zmarszczek",
    details:
      "Usuwanie zmarszczek mimicznych oraz oznak starzenia skóry.",
    url: "redukcja-zmarszczek",
  },
]

const IndexPage = ({data}) => {
  const cardsImg = data.allFile.nodes


return (
  <Layout>
  <PopUp link="/modelowanie-sylwetki/elektromagnetyczna-stymulacja-miesni" title="Nowość! Zabieg modelowania sylwetki!" description="Nasze urządzenie wykona ćwiczenia mięśni za Ciebie! Odpowiednik 20.000 brzuszków podczas jednej 30-minutowej sesji!"/>
  <Hero />
  <section
    style={{
      width: "100%",
      minHeight: "100vh",
      padding: "8rem 0",
      backgroundColor: "rgba(189, 109, 160, 0.1)",
    }}
  >
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <h2>Gdy czujesz się młodo, wyglądasz młodziej… </h2>
        <p>
          Zadbamy kompleksowo nie tylko o Twój wygląd, ale również o zdrowie,
          uśmiech i samopoczucie. Zaproponujemy indywidualnie dobrany zestaw
          zabiegów, które wygładzą zmarszczki, intensywnie odżywią i odmłodzą
          skórę, wymodelują kontury twarzy oraz wyszczuplą sylwetkę. Wzmocnimy
          i zagęścimy Twoje włosy przy wykorzystaniu komórek macierzystych
          oraz wdrożymy postępowanie, które redukuje wypadanie włosów i
          stymuluje ich wzrost.
        </p>
      </div>
      <div style={{ alignSelf: "flex-end", marginTop: "3rem" }}>
        <h2>Poznamy potrzeby Twojego organizmu</h2>
        <p>
          Na podstawie badań i wywiadu medycznego uzupełnimy mikroelementy i
          florę bakteryjną zgodnie z indywidualnym zapotrzebowaniem. Nasz
          dietetyk zdiagnozuje problemy żywieniowe oraz wdroży dietę celowaną,
          która poprawi odporność, zmniejszy poziom stresu, pozwoli zachować
          szczupłą sylwetkę, odmłodzi oraz korzystnie wpłynie na jakość skóry,
          włosów, paznokci. Fizjoterapeuta zadba o Twój komfort, przywróci
          prawidłowe napięcie mięśniowe, zaktywizuje i rozluźni tkanki,
          poprawi mikrokrążenie. W efekcie zyskasz ogólną poprawę stanu
          psychofizycznego i redukcję zmęczenia co pozytywnie wpłynie na
          wygląd zewnętrzny!
        </p>
      </div>
    </div>
  </section>
  <div className="parallax"></div>
  <Cards cardsImg={cardsImg} cardsInfo={cardsInfo}/>
  <section className="container verticalPadding flexCenter">
    <div>
      <h2>Masz pytania? Wypełnij formularz</h2>
      <Form />
    </div>
  </section>
</Layout>
)
}

export const pageQuery = graphql`
  query {
    allFile(
      filter: { relativeDirectory: { eq: "cardImages/indexPage" } }
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

export const Head = () => <Seo title="Medycyna Estetyczna Borczyk" />

export default IndexPage
