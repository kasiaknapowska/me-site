import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { contactData } from "../../data/contactData"
import { navLinks, offerLinks } from "../../data/links"
import {
  nav,
  hamburger,
  logoMobile,
  logoDesktop,
  open,
  menuOpen,
  ph,
  offer
} from "./navigation.module.scss"
import logo from "../../images/me-logo.png"
import Submenu from "../submenu/submenu"

const Navigation = () => {
  const { phone } = contactData
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

function onHamburgerClick() {
  setIsMenuOpen(!isMenuOpen)
  setIsSubmenuOpen(false)
}

  return (
    <>
      <div
        role="presentation"
        onClick={() => onHamburgerClick()}
        className={`${hamburger} ${isMenuOpen && open}`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Link className={logoMobile} to="/">
        <img src={logo} />
      </Link>
      <nav className={`${!isMenuOpen && "container"} ${nav} ${isMenuOpen && menuOpen}`}>
        <div>
          <Link to="/o-nas">O nas</Link>
          <span className={offer} onClick={() => setIsSubmenuOpen(true)}>Oferta</span>
          <Link to="/cennik">Cennik</Link>
        </div>
        <div>
          <Link className={logoDesktop} to="/">
            <img src={logo} />
          </Link>
        </div>
        <div>
          <Link to="/cennik">Cennik</Link>
          <Link to="/kontakt">Kontakt</Link>
          <a className={ph} href={`tel:${phone}`}>
            Umów wizytę {phone}
          </a>
        </div>
      </nav>
      {isSubmenuOpen && 
      <Submenu setisSubmenuOpen={setIsSubmenuOpen}/>
      }
      {/* <nav className={`${!isMenuOpen && "container"} ${nav} ${isMenuOpen && menuOpen}`}>
        <div>
          {navLinks.slice(0, 3).map(link => (
            <Link to={link.url}>{link.text}</Link>
          ))}
        </div>
        <div>
          <Link className={logoDesktop} to="/">
            <img src={logo} />
          </Link>
        </div>
        <div>
          {navLinks.slice(2).map(link => (
            <Link to={link.url}>{link.text}</Link>
          ))}
          <a className={ph} href={`tel:${phone}`}>
            Umów wizytę {phone}
          </a>
        </div>
      </nav> */}
    </>
  )
}

export default Navigation
