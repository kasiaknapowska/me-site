import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.scss"
import Hero from "../components/hero/hero"
import Form from "../components/form/form"
import PopUp from "../components/popUp/popUp"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <PopUp link="/elektromagnetyczna-stymulacja-miesni" />
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
    <section className="container verticalPadding flexCenter">
      <div>
        <h2>Masz pytania? Wypełnij formularz</h2>
        <Form />
      </div>
    </section>
    {/* <div className={styles.textCenter}>
    
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))} */}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Medycyna Estetyczna Borczyk" />

export default IndexPage
