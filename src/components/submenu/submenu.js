import { Link } from "gatsby"
import React from "react"
import { offerLinks } from "../../data/links"
import logo from "../../images/me-logo-diament-white.png"
import { submenu, arrow, submenuCol, lg } from "./submenu.module.scss"

const Submenu = ({ setisSubmenuOpen }) => {
  return (
    <div className={submenu}>
      <div className={arrow} onClick={() => setisSubmenuOpen(false)}>
        <div></div>
        <div></div>
      </div>
      <img src={logo} className={lg}/>
      <section>
      <div className={submenuCol}>
        {offerLinks.slice(0, offerLinks.length / 2).map(link => (
          <Link key={link.text} to={link.url}>{link.text}</Link>
        ))}
      </div>
      <div className={submenuCol}>
        {" "}
        {offerLinks.slice(offerLinks.length / 2).map(link => (
          <Link key={link.text} to={link.url}>{link.text}</Link>
        ))}
      </div>
      </section>
    </div>
  )
}

export default Submenu