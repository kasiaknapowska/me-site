import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import { contactData } from "../../data/contactData"

import {
  nav,
  hamburger,
  logoMobile,
  logoDesktop,
  open,
  menuOpen,
  ph,
  offer,
  menuLink
} from "./navigation.module.scss"
import logo from "../../icons/me-logo.png"
import Submenu from "../submenu/submenu"
import SocialMedia from "../socialMedia/socialMedia"

// const isBrowser = typeof window !== "undefined"

const Navigation = () => {

  const { phone } = contactData
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)


function onHamburgerClick() {
  setIsMenuOpen(!isMenuOpen)
  setIsSubmenuOpen(false)
}
function closeAllMenus() {
  setIsMenuOpen(false)
  setIsSubmenuOpen(false)
}

useEffect(() => {
  const html = document.querySelector("html");
  if (html) {
    html.style.overflow = isMenuOpen || isSubmenuOpen ? "hidden" : "auto";
  }
}, [isMenuOpen, isSubmenuOpen]);


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
        <img src={logo} alt="logo"/>
      </Link>
      <nav className={`${!isMenuOpen && "container"} ${nav} ${isMenuOpen && menuOpen}`}>
        <div>
          <Link className={menuLink} to="/o-nas">O nas</Link>
          <span role="presentation" className={offer} onClick={() => setIsSubmenuOpen(true)} >Oferta</span>
          <Link className={menuLink} to="/cennik">Cennik</Link>
        </div>
        <div>
          <Link className={logoDesktop} to="/">
            <img src={logo} alt="logo"/>
          </Link>
        </div>
        <div>
          <Link className={menuLink} to="/cennik">Cennik</Link>
          <Link className={menuLink} to="/kontakt">Kontakt</Link>
          <a className={ph} href={`tel:${phone}`}>
            Um??w wizyt?? {phone}
          </a>
          
        </div>
        <SocialMedia type="menu"/>
      </nav>
      {isSubmenuOpen && 
      <Submenu setisSubmenuOpen={setIsSubmenuOpen} closeAllMenus={closeAllMenus}/>
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
            Um??w wizyt?? {phone}
          </a>
        </div>
      </nav> */}
    </>
  )
}

export default Navigation
