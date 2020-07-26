import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import ColorSchemeContext from "../contexts/ColorSchemeContext"

const Layout = ({ children }) => {
  const { state, dispatch } = useContext(ColorSchemeContext)
  const [systemColorScheme, setSystemColorScheme] = useState()

  useEffect(() => {
    dispatch({ type: "AUTO_COLOR_SCHEME" })
  }, [dispatch, systemColorScheme])

  window.matchMedia("(prefers-color-scheme: dark)").addListener(function (e) {
    setSystemColorScheme(e.matches)
  })

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/journal">Journal</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
      <p>
        The current color scheme is: {state.darkColorScheme ? "dark" : "light"}
      </p>
      <p>Auto color scheme is: {state.autoColorScheme ? "on" : "off"}</p>
      <button onClick={() => dispatch({ type: "TOGGLE_COLOR_SCHEME" })}>
        Toggle Dark Mode
      </button>
      {window.matchMedia && (
        <button
          onClick={() => dispatch({ type: "TOGGLE_AUTO_COLOR_SCHEME" })}
          disabled={state.autoColorScheme}
        >
          Enable Auto Color Scheme
        </button>
      )}
      <hr></hr>
      {children}
    </div>
  )
}

export default Layout
