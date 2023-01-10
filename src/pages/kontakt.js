import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Form from "../components/form/form"
import { contactData } from "../data/contactData"

import {
  heroContainer,
  heroTextContainer,
} from "../components/hero/hero.module.scss"
import HomeIcon from "../images/icon-home.svg"
import PhoneIcon from "../images/icon-phone.svg"
import MailIcon from "../images/icon-mail.svg"

const Kontakt = () => (
  <Layout>
    <section
      // className="container flexContainer verticalSpace"
      className={`topPadding ${heroContainer}`}
    >
      <StaticImage
        src="../gabinetImages/Gabinet4.jpg"
        alt="Gabinet Medycyny Estetycznej Borczyk image"
        className="desktopImg"
        //   layout="fullWidth"
        loading="eager"
        quality={95}
        formats={["auto", "webp", "avif"]}
      />
      <div className={`container ${heroTextContainer}`}>
        <h2>Skontaktuj się z nami</h2>
        <h3>
          Masz pytania lub wątpliwości związane z zabiegiem? Zadzwoń do nas lub{" "}
          <Link to="#form" className="textLink">
            wypełnij formularz
          </Link>
          !
        </h3>
        <p>
          <img src={PhoneIcon} className="contactIcon" />
          {contactData.phone}
        </p>
        <p>
          <img src={MailIcon} className="contactIcon" />
          {contactData.email}
        </p>
        <p>
          <img src={HomeIcon} className="contactIcon" />
          {contactData.address}
        </p>

        <p>
          Gabinet jest czynny od poniedziałku do piątku w godzinach od 8:00 do
          20:00
        </p>
      </div>
    </section>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1276.017248979136!2d19.006454096818636!3d50.235260416464115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716cef99ed4a20b%3A0x5073b63895be5f73!2sMedycyna%20Estetyczna%20Borczyk!5e0!3m2!1spl!2spl!4v1673356633873!5m2!1spl!2spl"
      width="1920"
      height="1080"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>

    <section id="form" className="container verticalPadding flexCenter">
      <div>
        <h2>Formularz kontaktowy</h2>
        <Form />
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Skontaktuj się z nami" />

export default Kontakt
