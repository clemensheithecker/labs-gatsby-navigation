import React, { useContext } from "react"
import { Link } from "gatsby"

import { useTheme } from "emotion-theming"

import ColorSchemeContext from "../contexts/ColorSchemeContext"
import { NavLinkElement } from "../elements/NavigationElements"

const NavLink = ({ children, to, onClick }) => {
  const { state } = useContext(ColorSchemeContext)
  const theme = useTheme()

  return (
    <NavLinkElement darkColorScheme={state.darkColorScheme}>
      <Link
        to={to}
        onClick={onClick}
        activeStyle={{
          backgroundColor: `${
            state.darkColorScheme
              ? theme.dark.colors.aGray2
              : theme.light.colors.aGray2
          }`,
        }}
        partiallyActive={true}
      >
        {children}
      </Link>
    </NavLinkElement>
  )
}

export default NavLink
