import * as React from "react"
import { headerContact } from "./header.module.scss"
import Navigation from "../navigation/navigation"
import Contact from "../contact/contact"
const Header = () => {


  return (
    <>
      <header className={headerContact}>
        <div className="container">
        <Contact/>
        </div>
      </header>
      <Navigation/>
    </>
  )
}

export default Header
