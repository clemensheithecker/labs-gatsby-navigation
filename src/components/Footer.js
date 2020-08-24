import React, { useContext } from "react"

import ColorSchemeContext from "../contexts/ColorSchemeContext"

import { FooterContainer } from "../elements/commonElements"

const Footer = () => {
  const { state } = useContext(ColorSchemeContext)

  return (
    <FooterContainer darkColorScheme={state.darkColorScheme}>
      <p>
        This project was developed by Clemens Heithecker. Find the complete
        source code on{" "}
        <a href="https://github.com/clemensheithecker/labs-gatsby-navigation">
          github.com/clemensheithecker
        </a>
        .
      </p>
    </FooterContainer>
  )
}

export default Footer
