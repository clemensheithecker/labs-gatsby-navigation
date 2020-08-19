import React, { useContext, useState } from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

import ColorSchemeContext from "../contexts/ColorSchemeContext"
import {
  NavButton,
  NavSubMenu,
  NavSubMenuButtonWrapper,
  NavSubMenuButton,
  NavSubMenuLabel,
  NavSubOverlay,
} from "../elements/NavigationElements"
import {
  CircleOutline,
  CheckCircleOutline,
  CheckCircleSolid,
  MoonOutline,
  MoonSolid,
  SunOutline,
  SunSolid,
} from "./Icons"
import useKey from "../hooks/useKey"
import useBreakpoint from "../hooks/useBreakpoint"

const LightSwitch = props => {
  const { state, dispatch } = useContext(ColorSchemeContext)
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const closeMenu = props.closeMenu

  const theme = useTheme()

  function handleEscape() {
    console.log("Escape key is pressed")
    if (subMenuOpen) {
      setSubMenuOpen(false)
    }
  }

  function handleBreakpoint() {
    if (subMenuOpen) {
      setSubMenuOpen(false)
    }
  }

  useKey("Escape", handleEscape)
  useBreakpoint(theme.common.breakpoints.mediumAlt, handleBreakpoint)

  return (
    <span
      css={css`
        position: relative;
      `}
    >
      <NavButton
        onClick={() => setSubMenuOpen(subMenuOpen ? false : true)}
        darkColorScheme={state.darkColorScheme}
        subMenuOpen={subMenuOpen}
        css={css`
          position: relative;
          z-index: 10;
        `}
      >
        {!state.darkColorScheme && <MoonOutline />}
        {state.darkColorScheme && <SunSolid />}
      </NavButton>
      {subMenuOpen && (
        <NavSubOverlay
          onClick={() => setSubMenuOpen(false)}
          tabIndex="-1"
          darkColorScheme={state.darkColorScheme}
        ></NavSubOverlay>
      )}
      <NavSubMenu
        darkColorScheme={state.darkColorScheme}
        subMenuOpen={subMenuOpen}
      >
        <NavSubMenuLabel darkColorScheme={state.darkColorScheme}>
          Color scheme
        </NavSubMenuLabel>
        <NavSubMenuButtonWrapper>
          <NavSubMenuButton
            onClick={() => {
              dispatch({ type: "TOGGLE_COLOR_SCHEME" })
              setSubMenuOpen(false)
              closeMenu()
            }}
            disabled={!state.darkColorScheme}
            darkColorScheme={state.darkColorScheme}
            highlighted={!state.darkColorScheme}
          >
            {!state.darkColorScheme && <SunOutline />}
            {state.darkColorScheme && <SunSolid />}
            Light
          </NavSubMenuButton>
          <NavSubMenuButton
            onClick={() => {
              dispatch({ type: "TOGGLE_COLOR_SCHEME" })
              setSubMenuOpen(false)
              closeMenu()
            }}
            disabled={state.darkColorScheme}
            darkColorScheme={state.darkColorScheme}
            highlighted={state.darkColorScheme}
          >
            {!state.darkColorScheme && <MoonOutline />}
            {state.darkColorScheme && <MoonSolid />}
            Dark
          </NavSubMenuButton>
          <hr></hr>
          <NavSubMenuButton
            onClick={() => {
              dispatch({ type: "TOGGLE_AUTO_COLOR_SCHEME" })
              setSubMenuOpen(false)
              closeMenu()
            }}
            disabled={state.autoColorScheme}
            darkColorScheme={state.darkColorScheme}
          >
            {state.autoColorScheme ? (
              state.darkColorScheme ? (
                <CheckCircleSolid />
              ) : (
                <CheckCircleOutline />
              )
            ) : (
              <CircleOutline />
            )}
            Auto
          </NavSubMenuButton>
        </NavSubMenuButtonWrapper>
      </NavSubMenu>
    </span>
  )
}

export default LightSwitch
