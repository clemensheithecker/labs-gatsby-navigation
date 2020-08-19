import React, { useContext, useEffect, useState } from "react"

import { Global, css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { forms, sanitize, typography } from "emotion-sanitize"

import ColorSchemeContext from "../contexts/ColorSchemeContext"
import Navigation from "./Navigation"
import SEO from "./SEO"

const Layout = ({ children }) => {
  const { state, dispatch } = useContext(ColorSchemeContext)
  const [systemColorScheme, setSystemColorScheme] = useState()

  const theme = useTheme()

  useEffect(() => {
    dispatch({ type: "AUTO_COLOR_SCHEME" })
  }, [dispatch, systemColorScheme])

  window.matchMedia("(prefers-color-scheme: dark)").addListener(function (e) {
    setSystemColorScheme(e.matches)
  })

  return (
    <div>
      <SEO />
      <Global
        styles={css`
          ${sanitize}
          ${forms}
          ${typography}

          html {
            padding: 5em 1em 1em;
            font-family: ${theme.common.fonts.main};
          }

          @media (${theme.common.breakpoints.xLarge}) {
            html {
              padding: 5em calc(50% - ((0.5 * ${
                theme.common.widths.xLarge
              }) - 1em)) 1em;
            }
          }

          body {
            color: ${
              state.darkColorScheme
                ? theme.dark.colors.primary1
                : theme.light.colors.primary1
            };
            background-color: ${
              state.darkColorScheme
                ? theme.dark.colors.background1
                : theme.light.colors.background1
            };
          }
      `}
      />
      <Navigation />
      {children}
    </div>
  )
}

export default Layout
