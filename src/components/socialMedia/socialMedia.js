import React from "react"
import PropTypes from "prop-types"
import {smIcon, smSideIcons, smMenuIcons, smFooterIcons} from "./socialMedia.module.scss"
import IconFB from "../../icons/icon-color-fb.svg"
import IconIN from "../../icons/icon-color-insta.svg"
import IconFBwhite from "../../icons/icon-fb.svg"
import IconINwhite from "../../icons/icon-insta.svg"

const SocialMedia = ({type}) => {
  return (
    <div className={`${type === "side" && smSideIcons} ${type === "menu" && smMenuIcons} ${type === "footer" && smFooterIcons}` }>
      <a
        href="https://pl-pl.facebook.com/MedycynaEstetycznaBorczyk/"
        target="blank"
        rel="noopener noreferrer"
      >
        <img src={type === "side" ? IconFB : IconFBwhite} className={smIcon} alt="facebook"/>
      </a>
      <a
        href="https://www.instagram.com/medycyna_estetyczna_borczyk"
        target="blank"
        rel="noopener noreferrer"
      >
         <img src={type === "side" ? IconIN : IconINwhite} className={smIcon} alt="instagram"/>
      </a>
    </div>
  )
}

SocialMedia.propTypes = {
    type: PropTypes.string,
  }
  
  SocialMedia.defaultProps = {
    type: `footer`,
  }

export default SocialMedia
