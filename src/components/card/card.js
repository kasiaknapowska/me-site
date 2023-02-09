import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { card, layer, cardImg, cardBtn } from "./card.module.scss"

const Card = ({ title, details, url, img }) => {
  // console.log(img)
  return (
    <Link to={url}>
      <motion.div
        className={card}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        // viewport={{ once: true }}
        // whileHover={{scale: 1.05}}
   
      >
        <div className={layer}></div>
        <div>
          <h2>{title}</h2>
          <p>{details}</p>
          <div className={`btn ${cardBtn}`}>Więcej</div>
        </div>
        <GatsbyImage image={img} alt={title} className={cardImg} />
      </motion.div>
    </Link>
  )
}

export default Card
