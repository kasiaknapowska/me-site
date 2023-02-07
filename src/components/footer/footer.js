import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../icons/me-logo-diament-white.png"
import Contact from "../contact/contact"
import SocialMedia from "../socialMedia/socialMedia"
import Submenu from "../submenu/submenu"
import {
  footer,
  logoContainer,
  footerLinksContainer,
  footerLink,
  footerBottom,
  footerContact,
} from "./footer.module.scss"
const Footer = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  return (
    <>
      <footer className={footer}>
        <div className="container">
          <div className="flex">
            <Link to="/" className={logoContainer}>
              <img src={logo} alt="logo"/>
              <span>Medycyna estetyczna borczyk</span>
            </Link>
            <div className={footerLinksContainer}>
              <Link className={footerLink} to="/o-nas">
                O nas
              </Link>
              <span
              role="button"
              tabIndex={0}
                className={footerLink}
                onClick={() => setIsSubmenuOpen(true)}
                onKeyDown={() => setIsSubmenuOpen(true)}
              >
                Zabiegi
              </span>
              <Link className={footerLink} to="/cennik">
                Cennik
              </Link>
            </div>
          </div>

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
      {isSubmenuOpen && 
      <Submenu setisSubmenuOpen={setIsSubmenuOpen}/>
      }
    </>
  )
}

export default Footer
