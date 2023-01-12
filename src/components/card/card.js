import { Link } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import React from "react"
import { card, layer, content, cardImg, cardBtn } from "./card.module.scss"



const Card = ({title, details, url, img}) => {
  // console.log(img)
  return (
    <Link to={url}>
      <div className={card}>
      <div className={layer}></div>
      <div className={content}>
        <h2>{title}</h2>
        <p>{details}</p>
        <div className={`btn ${cardBtn}`} >Więcej</div>
      </div>
      <GatsbyImage image={img} alt={title} className={cardImg}/>
    </div>
    </Link>
  )
}

export default Card
