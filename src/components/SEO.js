import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

import ColorSchemeContext from "../contexts/ColorSchemeContext"

import favicon from "../images/favicon.svg"
import faviconDark from "../images/favicon-dark.svg"

const SEO = ({ title, description }) => {
  const { state } = useContext(ColorSchemeContext)
  const [systemColorScheme, setSystemColorScheme] = useState()

  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  }

  window.matchMedia("(prefers-color-scheme: dark)").addListener(function (e) {
    setSystemColorScheme(e.matches)
  })

  return (
    <Helmet
      title={seo.title}
      titleTemplate={pathname === "/" ? "" : titleTemplate}
    >
      <meta name="robots" content="noindex" />
      <meta name="description" content={seo.description} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      <link
        rel="icon"
        type="image/svg+xml"
        href={systemColorScheme ? faviconDark : favicon}
      />
      <meta name="color-scheme" content="light dark" />
      <link rel="alternate icon" href="/favicon.ico" />
      <meta
        name="theme-color"
        content={state.darkColorScheme ? "#000" : "#fff"}
      />
    </Helmet>
  )
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
      }
    }
  }
`

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
}
