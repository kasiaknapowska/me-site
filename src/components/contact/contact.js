import * as React from "react"
import { contactData } from "../../data/contactData"
// import {contact} from "./contact.module.scss"
const Contact = () => {
  const { address, email, phone } = contactData

  return (
    <>
          <span>{address}</span>
          <span>
            <a href={`mailto:${email}`}>{email}</a>
          </span>
          <span>
          <a href={`tel:${phone}`}>{phone}</a>
        </span>
    </>
  )
}

export default Contact
