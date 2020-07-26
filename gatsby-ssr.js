import React from "react"
import ColorSchemeProvider from "./src/contexts/ColorSchemeProvider"
import Layout from "./src/components/Layout"

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export const wrapRootElement = ({ element }) => (
  <ColorSchemeProvider>{element}</ColorSchemeProvider>
)
