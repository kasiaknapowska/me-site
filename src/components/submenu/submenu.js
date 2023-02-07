import { Link } from "gatsby"
import React from "react"
import { offerLinks } from "../../data/links"
import logo from "../../icons/me-logo-diament-white.png"
import { submenu, arrow, submenuList, submenuCol, lg } from "./submenu.module.scss"

const Submenu = ({ setisSubmenuOpen, closeAllMenus }) => {
  return (
    <div id="submenu" className={submenu}>
      <div role="presentation" className={arrow} onClick={() => setisSubmenuOpen(false)}>
        <div></div>
        <div></div>
      </div>
      <img src={logo} className={lg} alt="logo"/>
      <section className={submenuList}>
      <div className={submenuCol}>
        {offerLinks.slice(0, offerLinks.length / 3).map(link => (
          <Link key={link.text} to={`/${link.url}`} onClick={() => closeAllMenus()}>{link.text}</Link>
        ))}
      </div>
      <div className={submenuCol}>
        {" "}
        {offerLinks.slice(offerLinks.length / 3, offerLinks.length / 3 + offerLinks.length / 3).map(link => (
          <Link key={link.text} to={`/${link.url}`}>{link.text}</Link>
        ))}
      </div>
      <div className={submenuCol}>
        {" "}
        {offerLinks.slice(offerLinks.length / 3 + offerLinks.length / 3).map(link => (
          <Link key={link.text} to={`/${link.url}`}>{link.text}</Link>
        ))}
      </div>
      </section>
    </div>
  )
}

export default Submenu
