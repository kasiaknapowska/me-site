import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {heroContainer, heroImg, heroTextContainer, btnHero} from "./hero.module.scss"
import { heroData } from '../../data/heroData'

const Hero = () => {

  const heroImages = useStaticQuery(graphql`
  {
    allFile(
      filter: {sourceInstanceName: {eq: "heroImages"}}
    ) {
      nodes {
          relativePath
          id
          name
          childImageSharp {
            gatsbyImageData
          }
        }
    }
  }
`)
const images = heroImages.allFile.nodes.map(el => getImage(el))
// const image = heroImages.allFile.nodes[0].childImageSharp.gatsbyImageData
const indexes = heroImages.allFile.nodes.map(el => el.name)
// const index = heroImages.allFile.nodes[0].name
console.log(images)
console.log(indexes)
  return (
    <section className={heroContainer}> 
    <div>
      <GatsbyImage image={images[indexes[0]]} alt="" className={heroImg}/>
    </div>
    <div className={heroTextContainer}>
      <h1>{heroData[indexes[0]].title}</h1>
      <p>{heroData[indexes[0]].text}</p>
      
    </div>
   <Link className={`btn btnPrimary ${btnHero}`} to="/">sprawdź</Link>
    
    </section>
  )
}

export default Hero