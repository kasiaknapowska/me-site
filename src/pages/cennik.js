import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const Cennik = ({ data }) => {
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Cennik</h1>
        <section>
          <a
            href={data.allFile.edges[0].node.publicURL}
            target="blank"
            className="btn btnSecondary"
            style={{ marginBottom: "2rem" }}
          >
            Pobierz cennik w wersji pdf
          </a>
        </section>
        <section>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Konsultacja estetyczna</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Konsultacja + ustalenie planu leczenia</td>
                <td>150 PLN</td>
              </tr>
              <tr>
                <td>Konsultacja w dniu zabiegu</td>
                <td>bezpłatnie</td>
              </tr>
              <tr>
                <td>Kontrola</td>
                <td>bezpłatnie</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Znieczulenie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Znieczulenie komputerowe</td>
                <td>bezpłatnie</td>
              </tr>
              <tr>
                <td>Podtlenek azotu</td>
                <td>261 PLN</td>
              </tr>
              <tr>
                <td>Maseczka do podtlenku azotu</td>
                <td>133 PLN</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Usuwanie zmarszczek mimicznych - toksyna</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Zmarszczki międzybrwiowe („lwie”)</td>
                <td>600 PLN</td>
              </tr>
              <tr>
                <td>Zmarszczki poprzeczne czoła</td>
                <td>600 PLN</td>
              </tr>
              <tr>
                <td>Zmarszczki wokół oczu („kurze łapki”)</td>
                <td>600 PLN</td>
              </tr>
              <tr>
                <td>Zmarszczki wokół ust („zmarszczki palacza”)</td>
                <td>400 PLN</td>
              </tr>
              <tr>
                <td>Kamienna bródka</td>
                <td>400 PLN</td>
              </tr>
              <tr>
                <td>Króliczy nos</td>
                <td>400 PLN</td>
              </tr>
              <tr>
                <td>2 okolice</td>
                <td>1.200 PLN</td>
              </tr>
              <tr>
                <td>3 okolice</td>
                <td>1.700 PLN</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Leczenie nadpotliwości</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pachy</td>
                <td>2.000 PLN</td>
              </tr>
              <tr>
                <td>Dłonie</td>
                <td>2.000 PLN</td>
              </tr>
              <tr>
                <td>Stopy</td>
                <td>3.000 PLN</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan="2">
                  Mezoterapia osoczem bogatopłytkowym Vital Injector 2
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Twarz</td>
                <td>1.000 PLN</td>
              </tr>
              <tr>
                <td>Szyja + dekolt</td>
                <td>500 PLN</td>
              </tr>
              <tr>
                <td>Włosy</td>
                <td>2.244 PLN</td>
              </tr>
              <tr>
                <td>Włosy - pakiet 4 zabiegi</td>
                <td>6.000 PLN</td>
              </tr>
              <tr>
                <td>Dłonie</td>
                <td>500 PLN</td>
              </tr>
              <tr>
                <td>Całość (twarz, szyja, dekolt, dłonie, włosy)</td>
                <td>4.144 PLN</td>
              </tr>
              <tr>
                <td>
                  Całość (twarz, szyja, dekolt, dłonie, włosy) - pakiet 4
                  zabiegi
                </td>
                <td>15.000 PLN</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Mezoterapia podciśnieniowa Vital Injector 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Twarz</td>
                <td>1.432 PLN</td>
              </tr>
              <tr>
                <td>Szyja + dekolt</td>
                <td>1.432 PLN</td>
              </tr>
              <tr>
                <td>Włosy</td>
                <td>1.432 PLN</td>
              </tr>
              <tr>
                <td>Dłonie</td>
                <td>1.432 PLN</td>
              </tr>
              <tr>
                <td>
                  Całość (twarz, szyja, dekolt, dłonie, włosy) - nie zawiera
                  ceny ampułek
                </td>
                <td>2.390 PLN</td>
              </tr>
              <tr>
                <td>Dodatkowa ampułka (pierwsza ampułka w cenie zabiegu)</td>
                <td>990 PLN</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Mezoterapia igłowa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Twarz</td>
                <td>800 PLN</td>
              </tr>
              <tr>
                <td>Szyja</td>
                <td>800 PLN</td>
              </tr>
              <tr>
                <td>Dekolt</td>
                <td>800 PLN</td>
              </tr>
              <tr>
                <td>Dłonie</td>
                <td>800 PLN</td>
              </tr>
              <tr>
                <td>Całość (twarz, szyja, dekolt)</td>
                <td>1.700 PLN</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Wypełnianie zmarszczek kwasem hialuronowym</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bruzdy nosowo-wargowe</td>
                <td>1.200 PLN</td>
              </tr>
              <tr>
                <td>Bruzdy marionetki, opadające kąciki ust</td>
                <td>1.200 PLN</td>
              </tr>
              <tr>
                <td>Zmarszczki palacza</td>
                <td>1.000 PLN</td>
              </tr>
              <tr>
                <td>Dodatkowa ampułka</td>
                <td>1.000 PLN</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Modelowanie ust</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Modelowanie ust</td>
                <td>1.200 PLN</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Hialuronidaza</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rozpuszczanie kwasu hialuronowego</td>
                <td>1.000 PLN</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan="2">
                  FRAXEL - redukcja blizn, rozstępów, odmładzanie
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Twarz</td>
                <td>1.500 PLN</td>
              </tr>
              <tr>
                <td>Czoło</td>
                <td>849 PLN</td>
              </tr>
              <tr>
                <td>Okolice oczu</td>
                <td>849 PLN</td>
              </tr>
              <tr>
                <td>Szyja</td>
                <td>1.500 PLN</td>
              </tr>
              <tr>
                <td>Dekolt</td>
                <td>1.500 PLN</td>
              </tr>
              <tr>
                <td>Dłonie</td>
                <td>849 PLN</td>
              </tr>
              <tr>
                <td>Rozstępy (1 okolica)</td>
                <td>1.500 PLN</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Dermapen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Zabieg Dermapen</td>
                <td>1.300 PLN</td>
              </tr>
              <tr>
                <td>Dodatkowa ampułka (pierwsza ampułka w cenie zabiegu)</td>
                <td>300 PLN</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Geneo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 zabieg Geneo</td>
                <td>350 PLN</td>
              </tr>
              <tr>
                <td>Pakiet 3 zabiegów</td>
                <td>950 PLN</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Pelleve</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reduckja zmarszczek na twarzy</td>
                <td>2.689 PLN</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Stymulator tkankowy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Stymulator tkankowy</td>
                <td>1.400 PLN</td>
              </tr>
              <tr>
                <td>
                  Dodatkowa strzykawka (pierwsza strzykawka w cenie zabiegu)
                </td>
                <td>1.000 PLN</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Fresh lift</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fresh lift</td>
                <td>1.200 PLN</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Elektromagnetyczna stymulacja mięśni</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Wzmocnienie mięśni brzucha lub pośladków EMSlimPRO (1 zabieg)
                </td>
                <td>500 PLN</td>
              </tr>
              <tr>
                <td>Pakiet 5 zabiegów</td>
                <td>1.900 PLN</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Lipoliza - usuwanie tłuszczu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lipoliza iniekcyjna</td>
                <td>1.300 PLN</td>
              </tr>
              <tr>
                <td>Dodatkowa ampułka (pierwsza ampułka w cenie zabiegu)</td>
                <td>300 PLN</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Peelingi medyczne</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Peeling wybielający</td>
                <td>600 PLN</td>
              </tr>
              <tr>
                <td>Pelling odmładzający</td>
                <td>600 PLN</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile(filter: { name: { eq: "cennik_me_01_2023" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`
export const Head = () => <Seo title="Cennik zabiegów medycyny estetycznej" />
export default Cennik
