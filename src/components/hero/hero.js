import React from "react"
import { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"
import { heroData } from "../../data/heroData"

import SlidesNav from "../slidesNav/slidesNav"
import SlidesDots from "../slidesDots/slidesDots"
import {
  heroContainer,
  heroImg,
  img,
  heroTextContainer,
  btnHero,
  imgContainer,
} from "./hero.module.scss"

const Hero = () => {
  const heroImages = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "heroImages" } }) {
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
  const [image, setImage] = useState(
    heroImages.allFile.nodes[0].childImageSharp.gatsbyImageData
  )
  const [moveDirection, setMoveDirection] = useState("toTheLeft")

  const images = heroImages.allFile.nodes.map(el => getImage(el))
  // const indexes = heroImages.allFile.nodes.map(el => el.name)
  // console.log(indexes)

  useEffect(() => {
    heroImages.allFile.nodes.forEach(el => {
      if (el.name === currentIndex.toString()) {
        setImage(getImage(el))
      }
    })
  }, [currentIndex, heroImages.allFile.nodes])

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setMoveDirection("toTheRight")
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setMoveDirection("toTheLeft")
  }
  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex)
    currentIndex < slideIndex ? setMoveDirection("toTheLeft") : setMoveDirection("toTheRight")
  }

  return (
    <motion.section
      className={`topPadding ${heroContainer}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className={imgContainer}>
        <AnimatePresence>
          <motion.div
            className={heroImg}
            initial={{ x: moveDirection === "toTheLeft" ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ease: "easeOut"}}
            key={currentIndex}
            
          >
            <GatsbyImage image={image} alt="" className={img} />
          </motion.div>
        </AnimatePresence>
        <SlidesNav goToNext={goToNext} goToPrevious={goToPrevious} />
        <SlidesDots
          goToSlide={goToSlide}
          images={images}
          currentIndex={currentIndex}
        />
      </div>
      <div className={`container ${heroTextContainer}`}>
        <h1 className="heroH1">{heroData[currentIndex].title}</h1>
        <p>{heroData[currentIndex].text}</p>
      </div>
      <Link
        className={`btn btnPrimary ${btnHero}`}
        to={heroData[currentIndex].url}
      >
        sprawdź
      </Link>
      
    </motion.section>
  )
}

export default Hero
