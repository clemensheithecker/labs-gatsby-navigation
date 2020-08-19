import React from "react"

import ColorSchemeProvider from "./src/contexts/ColorSchemeProvider"
import Layout from "./src/components/Layout"

import { ThemeProvider } from "emotion-theming"
import { commonTheme } from "./src/themes/commonTheme"
import { darkColorScheme } from "./src/themes/darkColorScheme"
import { lightColorScheme } from "./src/themes/lightColorScheme"

const colorSchemes = {
  common: commonTheme,
  dark: darkColorScheme,
  light: lightColorScheme,
}

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export const wrapRootElement = ({ element }) => (
  <ColorSchemeProvider>
    <ThemeProvider theme={colorSchemes}>{element}</ThemeProvider>
  </ColorSchemeProvider>
)
