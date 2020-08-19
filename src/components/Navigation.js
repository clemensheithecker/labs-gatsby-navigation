import React, { useContext, useState } from "react"
import { Link } from "gatsby"

import { useTheme } from "emotion-theming"

import ColorSchemeContext from "../contexts/ColorSchemeContext"
import {
  Header,
  Nav,
  NavLogoWrapper,
  NavLinkWrapper,
  NavLink,
  NavButtonWrapper,
  NavOverlay,
} from "../elements/NavigationElements"
import LightSwitch from "./LightSwitch"
import MenuButton from "./MenuButton"
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
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Clemens Heithecker
            </Link>
            <MenuButton
              onClick={() => setMenuOpen(menuOpen ? false : true)}
              darkColorScheme={state.darkColorScheme}
              menuOpen={menuOpen}
            />
          </NavLogoWrapper>
          <NavLinkWrapper menuOpen={menuOpen}>
            <NavLink darkColorScheme={state.darkColorScheme}>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                activeStyle={{
                  backgroundColor: `${
                    state.darkColorScheme
                      ? theme.dark.colors.aGray2
                      : theme.light.colors.aGray2
                  }`,
                }}
                partiallyActive={true}
              >
                Contact
              </Link>
            </NavLink>
            <NavLink darkColorScheme={state.darkColorScheme}>
              <Link
                to="/education"
                onClick={() => setMenuOpen(false)}
                activeStyle={{
                  backgroundColor: `${
                    state.darkColorScheme
                      ? theme.dark.colors.aGray2
                      : theme.light.colors.aGray2
                  }`,
                }}
                partiallyActive={true}
              >
                Education
              </Link>
            </NavLink>
            <NavLink darkColorScheme={state.darkColorScheme}>
              <Link
                to="/journal"
                onClick={() => setMenuOpen(false)}
                activeStyle={{
                  backgroundColor: `${
                    state.darkColorScheme
                      ? theme.dark.colors.aGray2
                      : theme.light.colors.aGray2
                  }`,
                }}
                partiallyActive={true}
              >
                Journal
              </Link>
            </NavLink>
            <NavLink darkColorScheme={state.darkColorScheme}>
              <Link
                to="/projects"
                onClick={() => setMenuOpen(false)}
                activeStyle={{
                  backgroundColor: `${
                    state.darkColorScheme
                      ? theme.dark.colors.aGray2
                      : theme.light.colors.aGray2
                  }`,
                }}
                partiallyActive={true}
              >
                Projects
              </Link>
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
