import * as React from "react"

const Footer = () => {
  return (
    <>
      <footer>
        © {new Date().getFullYear()} &middot; Built by KKnapowska with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

export default Footer
