import { Link } from "gatsby"
import React from "react"
import { useState } from "react"

import logo from "../../icons/me-logo-diament.png"

import {
  popUpBg,
  popUpContainer,
  popUpIcon,
  closeIcon
} from "./popUp.module.scss"

const isBrowser = typeof window !== "undefined"

const PopUp = ({link}) => {
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
            <div onClick={() => setShow()} className={closeIcon} >
         
                <span></span>
                <span></span>
            </div>
          {/* <img src={logo} className={popUpIcon}/> */}
          <h2>Nowość! Zabieg modelowania sylwetki! </h2>
          <p>Nasze urządzenie wykona ćwiczenia mięśni za Ciebie! Odpowiednik 20.000 brzuszków podczas jednej 30-minutowej sesji! </p>

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
