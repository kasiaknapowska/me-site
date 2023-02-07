import React from 'react'
import { getImage } from "gatsby-plugin-image"
import Card from '../card/card'
import {cardsContainer} from "./cards.module.scss"

const Cards = ({cardsImg, cardsInfo}) => {
  return (
    <section className={cardsContainer}>
    {cardsImg.map(el =>
      cardsInfo.map(info => {
        if (el.name.toLowerCase() === info.name.toLowerCase()) {
          const img = getImage(el)
          return (
            <Card
              key={el.name}
              title={info.title}
              details={info.details}
              url={info.url}
              img={img}
            />
          )
        }
        
      })
    )}
  </section>
  )
}

export default Cards