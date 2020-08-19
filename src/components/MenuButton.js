import React from "react"

import { NavButtonMenu } from "../elements/NavigationElements"
import { MenuOutline, MenuSolid, XOutline, XSolid } from "./Icons"

const MenuButton = props => {
  return (
    <NavButtonMenu
      onClick={props.onClick}
      darkColorScheme={props.darkColorScheme}
    >
      {props.darkColorScheme && props.menuOpen && <XSolid />}
      {props.darkColorScheme && !props.menuOpen && <MenuSolid />}
      {!props.darkColorScheme && props.menuOpen && <XOutline />}
      {!props.darkColorScheme && !props.menuOpen && <MenuOutline />}
    </NavButtonMenu>
  )
}

export default MenuButton
