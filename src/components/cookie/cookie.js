import React from "react"
import CookieConsent from "react-cookie-consent"
import {
  cookieContainer,
  cookieContent,
  cookieButton,
} from "./cookie.module.scss"
const Cookie = () => {
  return (
    <CookieConsent
      debug={true}
      disableStyles={true}
      buttonText="Zgoda"
      buttonClasses={`btn ${cookieButton}`}
      contentClasses={cookieContent}
      containerClasses={cookieContainer}
    >
      Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym
      poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich
      użycie.
    </CookieConsent>
  )
}

export default Cookie
