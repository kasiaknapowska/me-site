import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { contactData } from "../../data/contactData"
import {
  nav,
  hamburger,
  logoMobile,
  logoDesktop,
  open,
  navOpen,
  ph,
} from "./navigation.module.scss"
import logo from "../../images/me-logo.png"

const Navigation = () => {
  const { phone } = contactData
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div
        role="presentation"
        onClick={() => setIsOpen(!isOpen)}
        className={`${hamburger} ${isOpen && open}`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Link className={logoMobile} to="/">
        <img src={logo} />
      </Link>
      <nav className={`${!isOpen && "container"} ${nav} ${isOpen && navOpen}`}>
        <div>
          <Link>O nas</Link>
          <Link>Oferta</Link>
          <Link>Cennik</Link>
        </div>
        <div>
          <Link className={logoDesktop} to="/">
            <img src={logo} />
          </Link>
        </div>
        <div>
          <Link>Cennik</Link>
          <Link>Kontakt</Link>
          <a className={ph} href={`tel:${phone}`}>
            Umów wizytę {phone}
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navigation
