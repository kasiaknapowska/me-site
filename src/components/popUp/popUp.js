import { Link } from "gatsby"
import React from "react"
import { useState } from "react"

import {
  popUpBg,
  popUpContainer,
  closeIcon
} from "./popUp.module.scss"

const isBrowser = typeof window !== "undefined"

const PopUp = ({link, title, description}) => {
  const [showPopUp, setShowPopUp] = useState(true)

  function setShow() {
    if (isBrowser) {
      window.sessionStorage.setItem("popup", false)
    }
    setShowPopUp(false)
  }

  if (isBrowser) {
    return (
      <div
        className={popUpBg}
        style={{
          display: `${
            window.sessionStorage.getItem("popup") ||
            showPopUp.toString() === "false"
              ? "none"
              : "block"
          }`,
        }}
      >
        <div className={popUpContainer}>
            <div role="presentation" onClick={() => setShow()} className={closeIcon} >
         
                <span></span>
                <span></span>
            </div>
          <h2>{title}</h2>
          <p>{description}</p>

          <Link
            style={{marginTop: "1rem"}}
            className={`btn btnPrimary `}
            to={link}
          >
            Sprawdź
          </Link>
        </div>
      </div>
    )
  }
}

export default PopUp
