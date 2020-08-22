import React, { useContext, useState } from "react"
import { Link } from "gatsby"

import { useTheme } from "emotion-theming"

import ColorSchemeContext from "../contexts/ColorSchemeContext"
import {
  Header,
  Nav,
  NavLogoWrapper,
  NavLinkWrapper,
  NavButtonWrapper,
  NavOverlay,
} from "../elements/NavigationElements"
import LightSwitch from "./LightSwitch"
import MenuButton from "./MenuButton"
import NavLink from "./NavLink"
import useKey from "../hooks/useKey"
import useBreakpoint from "../hooks/useBreakpoint"

const Navigation = () => {
  const { state } = useContext(ColorSchemeContext)
  const [menuOpen, setMenuOpen] = useState(false)

  const theme = useTheme()

  function handleEscape() {
    if (menuOpen) {
      setMenuOpen(false)
    }
  }

  function handleBreakpoint() {
    if (menuOpen) {
      setMenuOpen(false)
    }
  }

  useKey("Escape", handleEscape)
  useBreakpoint(theme.common.breakpoints.medium, handleBreakpoint)

  return (
    <>
      <Header>
        <Nav darkColorScheme={state.darkColorScheme} menuOpen={menuOpen}>
          <NavLogoWrapper>
            <Link to="/" onClick={() => setMenuOpen(false)} lang="de">
              Clemens Heithecker
            </Link>
            <MenuButton
              onClick={() => setMenuOpen(menuOpen ? false : true)}
              darkColorScheme={state.darkColorScheme}
              menuOpen={menuOpen}
            />
          </NavLogoWrapper>
          <NavLinkWrapper menuOpen={menuOpen}>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
            <NavLink to="/education" onClick={() => setMenuOpen(false)}>
              Education
            </NavLink>
            <NavLink to="/journal" onClick={() => setMenuOpen(false)}>
              Journal
            </NavLink>
            <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </NavLink>
          </NavLinkWrapper>
          <NavButtonWrapper
            darkColorScheme={state.darkColorScheme}
            menuOpen={menuOpen}
          >
            <hr></hr>
            <LightSwitch
              closeMenu={() => setMenuOpen(false)}
              menuOpen={menuOpen}
            />
          </NavButtonWrapper>
        </Nav>
        {menuOpen && (
          <NavOverlay
            onClick={() => setMenuOpen(false)}
            tabIndex="-1"
            darkColorScheme={state.darkColorScheme}
          ></NavOverlay>
        )}
      </Header>
    </>
  )
}

export default Navigation
