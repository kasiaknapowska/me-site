import * as React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Seo from "../components/seo"

import logo from "../icons/me-logo-diament.png"

const NotFoundPage = () => (
  <main className="notFound container">
    <motion.img
      src={logo}
      alt="logo"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    />
    <h1>Błąd 404</h1>
    <p>Strona, której szukasz, nie istnieje...</p>
    <Link to="/" className="btn btnSecondary">
      Przejdź do strony głównej
    </Link>
  </main>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
