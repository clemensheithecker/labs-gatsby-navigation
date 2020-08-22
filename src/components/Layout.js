import React, { useContext } from "react"

import ColorSchemeContext from "../contexts/ColorSchemeContext"
import { forms, sanitize, typography } from "emotion-sanitize"
import { Global, css } from "@emotion/core"
import useSystemColorScheme from "../hooks/useSystemColorScheme"
import { useTheme } from "emotion-theming"
import useWhatInput from "react-use-what-input"

import Footer from "./Footer"
import Navigation from "./Navigation"
import SEO from "./SEO"

const Layout = ({ children }) => {
  const { state, dispatch } = useContext(ColorSchemeContext)

  const theme = useTheme()
  const currentInput = useWhatInput("input")

  function updateColorScheme() {
    dispatch({ type: "AUTO_COLOR_SCHEME" })
  }

  useSystemColorScheme("dark", updateColorScheme)
  useSystemColorScheme("light", updateColorScheme)

  return (
    <>
      <SEO />
      <Global
        styles={css`
          ${sanitize}
          ${forms}
          ${typography}

          html {
            padding: 5em 1em 1em;
          }
          
          @media (${theme.common.breakpoints.xLarge}) {
            html {
              padding: 5em calc(50% - ((0.5 * ${
                theme.common.widths.xLarge
              }) - 1em)) 1em;
            }
          }

          html, body, #___gatsby, #gatsby-focus-wrapper {
            height: 100%;
          }

          #gatsby-focus-wrapper {
            display: flex;
            flex-direction: column;
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

          main {
            flex: 1 0 auto;
          }

          footer {
            flex-shrink: 0;
          }

          a {
            display: inline-flex;
            align-items: center;
            width: auto;
            text-decoration: none;
            color: ${
              state.darkColorScheme
                ? theme.dark.colors.link
                : theme.light.colors.link
            };
        
            :hover {
              text-decoration: underline;
            }
        
            svg {
              margin: 0 0.5em 0 0;
              width: 1.5em;
            }
          }

          a:focus, button:focus {
            ${
              currentInput !== "keyboard"
                ? "outline:none"
                : "outline: 0.2em solid ".concat(
                    state.darkColorScheme
                      ? theme.dark.colors.focus
                      : theme.light.colors.focus
                  )
            }
          }
      `}
      />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
