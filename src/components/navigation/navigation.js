import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { nav } from "./navigation.module.scss"
import logo from "../../images/me-logo.png"


const Navigation = () => {
  return (
    <nav className={`container ${nav}`}>
      <div>
      <Link>O nas</Link>
      <Link>Oferta</Link>
      <Link>Cennik</Link>
      </div>
     <div>
     {/* <StaticImage
        src="../../images/me-logo.png"
        loading="eager"
        // width={140}
        height={120}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="logo"
      /> */}
      <img style={{height: "120px"}} src={logo}/>
     </div>
      <div>
      <Link>Kontakt</Link>
      <Link>Zadzwoń 32 606 04 27</Link>
      </div>
    </nav>
  )
}

export default Navigation
