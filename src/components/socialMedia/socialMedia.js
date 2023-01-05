import React from "react"
import PropTypes from "prop-types"
import {smIcon, smSideIcons, smMenuIcons, smFooterIcons} from "./socialMedia.module.scss"
import IconFB from "../../images/icon-color-fb.svg"
import IconIN from "../../images/icon-color-insta.svg"
import IconFBwhite from "../../images/icon-fb.svg"
import IconINwhite from "../../images/icon-insta.svg"

const SocialMedia = ({type}) => {
  return (
    <div className={`${type === "side" && smSideIcons} ${type === "menu" && smMenuIcons} ${type === "footer" && smFooterIcons}` }>
      <a
        href="https://pl-pl.facebook.com/MedycynaEstetycznaBorczyk/"
        target="blank"
        rel="noopener noreferrer"
      >
        <img src={type === "side" ? IconFB : IconFBwhite} className={smIcon} />
      </a>
      <a
        href="https://www.instagram.com/medycyna_estetyczna_borczyk"
        target="blank"
        rel="noopener noreferrer"
      >
         <img src={type === "side" ? IconIN : IconINwhite} className={smIcon} />
      </a>
    </div>
  )
}

// SocialMedia.propTypes = {
//     type: PropTypes.string,
//   }
  
//   SocialMedia.defaultProps = {
//     type: `footer`,
//   }

export default SocialMedia
