import React from 'react'
import {slideNavBtn, slidesNavContainer, previous, next} from "./slidesNav.module.scss"

const SlidesNav = ({goToNext, goToPrevious}) => {
  return (
    <div className={slidesNavContainer}>
    <div role="presentation" onClick={goToPrevious} className={slideNavBtn}><div className={previous}></div></div>
    <div role="presentation" onClick={goToNext} className={slideNavBtn}><div className={next}></div></div>
    </div>
  )
}

export default SlidesNav