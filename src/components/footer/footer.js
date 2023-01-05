import { Link } from "gatsby"
import * as React from "react"
import logo from "../../images/me-logo-diament-white.png"
import Contact from "../contact/contact"
import SocialMedia from "../socialMedia/socialMedia"
import {
  footer,
  logoContainer,
  lg,
  footerBottom,
  footerContact,
} from "./footer.module.scss"
const Footer = () => {
  return (
    <>
      <footer className={footer}>
        <div className="container">
          <Link to="/" className={logoContainer}>
            <img src={logo} />
            <span>Medycyna estetyczna borczyk</span>
          </Link>

          <section className={footerContact}>
            <Contact />
          </section>
          <SocialMedia type="footer" />
          <p className={footerBottom}>
            © {new Date().getFullYear()} &middot; Built by KKnapowska with
            {` `}
            <a
              href="https://www.gatsbyjs.com"
              target="blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
