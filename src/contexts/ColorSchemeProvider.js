import React from "react"
import ColorSchemeContext from "./ColorSchemeContext"
import useColorScheme from "./useColorScheme"

const ColorSchemeProvider = ({ children }) => {
  return (
    <ColorSchemeContext.Provider value={useColorScheme()}>
      {children}
    </ColorSchemeContext.Provider>
  )
}

export default ColorSchemeProvider
