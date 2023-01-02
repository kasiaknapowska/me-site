import * as React from "react"
import { Link } from "gatsby"
import { contactData } from "../../data/contactData"
import { headerInfo } from "./header.module.scss"
import Navigation from "../navigation/navigation"
const Header = () => {
  const { address, email, phone } = contactData

  return (
    <>
      <div className={headerInfo}>
        <div className="container">
          {" "}
          <span>{address}</span>
          <span>
            <a href={`mailto:${email}`}>{email}</a>
          </span>
          <span>
          <a href={`tel:${phone}`}>{phone}</a>
        </span>
        </div>
      </div>
      <Navigation/>
    </>
  )
}

export default Header
