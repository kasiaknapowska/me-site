/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import "./layout.scss"
import SocialMedia from "../socialMedia/socialMedia"
import Footer from "../footer/footer"
import MobileContact from "../mobileContact/mobileContact"
import ScrollToTop from "../scrollToTop/scrollToTop"
import Cookie from "../cookie/cookie"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header />
      <main>{children}</main>
      <SocialMedia type="side" />
      <MobileContact/>
      <Footer/>
      <ScrollToTop/>
      <Cookie/>
    </>
  )
}

export default Layout
