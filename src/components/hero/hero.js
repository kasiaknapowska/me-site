import React from 'react'
import { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {heroContainer, heroImg, heroTextContainer, btnHero, imgContainer} from "./hero.module.scss"
import { heroData } from '../../data/heroData'
import FBicon from "../../images/icon-color-fb.svg"
import SocialMedia from '../socialMedia/socialMedia'
import SlidesNav from '../slidesNav/slidesNav'
import SlidesDots from '../slidesDots/slidesDots'
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

const [currentIndex, setCurrentIndex] = useState(0)

const images = heroImages.allFile.nodes.map(el => getImage(el))
// const image = heroImages.allFile.nodes[0].childImageSharp.gatsbyImageData
const indexes = heroImages.allFile.nodes.map(el => el.name)
console.log(images)
console.log(indexes)


const goToPrevious = () => {
  const isFirstSlide = currentIndex === 0;
  const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
  setCurrentIndex(newIndex);
};
const goToNext = () => {
  const isLastSlide = currentIndex === images.length - 1;
  const newIndex = isLastSlide ? 0 : currentIndex + 1;
  setCurrentIndex(newIndex);
};
const goToSlide = (slideIndex) => {
  setCurrentIndex(slideIndex);
};


  return (
    <section className={heroContainer}> 

    <div className={imgContainer}>
      <GatsbyImage image={images[currentIndex]} alt="" className={heroImg}/>
      <SlidesNav goToNext={goToNext} goToPrevious={goToPrevious}/>
      <SlidesDots goToSlide={goToSlide} images={images} currentIndex={currentIndex}/>
    </div>
    <div className={heroTextContainer}>
      <h1>{heroData[currentIndex].title}</h1>
      <p>{heroData[currentIndex].text}</p>
      
    </div>
   <Link className={`btn btnPrimary ${btnHero}`} to={heroData[currentIndex].url}>sprawdź</Link>
   <SocialMedia type="side"/>
    </section>
  )
}

export default Hero