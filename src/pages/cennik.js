import React from "react"
import { graphql } from "gatsby"

import { prices } from "../data/prices"
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
          {prices.map(table => (
            <table key={table.heading}>
              <thead>
                <tr>
                  <th colSpan="2">{table.heading}</th>
                </tr>
              </thead>
              <tbody>
                {table.body.map(el => (
                  <tr key={el.procedure}>
                    <td>{el.procedure}</td>
                    <td>{el.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile(filter: { name: { eq: "cennik_me_2023" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`
export const Head = () => <Seo title="Cennik zabiegów medycyny estetycznej" description="Sprawdź ceny zabiegów medycyny estetycznej w klinice Borczyk. Umów się na konsultację 32 606 04 27"/>
export default Cennik
