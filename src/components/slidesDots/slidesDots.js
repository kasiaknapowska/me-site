import React from 'react'
import {dots, dot, dotActive} from "./slidesDots.module.scss"

const SlidesDots = ({images, goToSlide, currentIndex}) => {
  return (
    <div className={dots}>
          {images.map((image, imageIndex) => (
            <div
            role="presentation"
              key={imageIndex}
              onClick={() => goToSlide(imageIndex)}
              className={`${dot} ${imageIndex === currentIndex ? dotActive : ""}`}
            ></div>
          ))}
        </div>
  )
}

export default SlidesDots