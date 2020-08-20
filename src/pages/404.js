import React, { useContext } from "react"
import { Link } from "gatsby"

import ColorSchemeContext from "../contexts/ColorSchemeContext"
import {
  ArrowNarrowLeftOutline,
  ArrowNarrowLeftSolid,
} from "../components/Icons"
import { Container } from "../elements/404Elements"
import SEO from "../components/SEO"

export default function PageNotFound() {
  const { state } = useContext(ColorSchemeContext)

  return (
    <Container darkColorScheme={state.darkColorScheme}>
      <SEO title="Page Not Found" description="Page not found" />
      <div>
        <h1>Page Not Found</h1>
        <h2>Code 404</h2>
        <p>The page you requested cannot be found.</p>
        <Link to="/">
          {!state.darkColorScheme && <ArrowNarrowLeftOutline />}
          {state.darkColorScheme && <ArrowNarrowLeftSolid />}
          <span>Back to Home</span>
        </Link>
      </div>
    </Container>
  )
}
