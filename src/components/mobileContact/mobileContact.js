import React from 'react'
import { contactData } from "../../data/contactData"
import IconPhoneWhite from "../../images/icon-phone-white.svg"
import IconMailWhite from "../../images/icon-mail-white.svg"
import {iconsContainer, iconButton} from "./mobileContact.module.scss"

const MobileContact = () => {
    const { email, phone } = contactData
  return (
    <div className={iconsContainer}>
<a href={`tel:${phone}`} className={iconButton}><img src={IconPhoneWhite} alt="zadzwoń"/></a>
<a href={`mailto:${email}`} className={iconButton}><img src={IconMailWhite} alt="napisz e-mail"/></a>
    </div>
  )
}

export default MobileContact