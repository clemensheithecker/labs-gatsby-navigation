import styled from "@emotion/styled"

export const Header = styled.header`
  position: fixed;
  top: 1em;
  height: auto;
  width: calc(100% - 2em);

  @media (${props => props.theme.common.breakpoints.xLarge}) {
    width: calc(${props => props.theme.common.widths.xLarge} - 2em);
  }
`

export const Nav = styled.nav`
  padding: 0.6em 1em;
  border-radius: ${props => props.theme.common.corners.rounded1};
  font-size: ${props => props.theme.common.fonts.sizes.large};
  font-weight: ${props => props.theme.common.fonts.weights.normal};
  background-color: ${props =>
    props.darkColorScheme
      ? props.theme.dark.colors.gray1
      : props.theme.light.colors.gray1};
  box-shadow: ${props =>
    props.menuOpen ? props.theme.common.effects.shadow2 : "none"};

  @media (${props => props.theme.common.breakpoints.medium}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: none;
  }

  a {
    text-decoration: none;
    color: ${props =>
      props.darkColorScheme
        ? props.theme.dark.colors.primary1
        : props.theme.light.colors.primary1};
  }
`

export const NavLogoWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: ${props => props.theme.common.fonts.weights.semibold};

  a {
    white-space: nowrap;
  }

  @media (${props => props.theme.common.breakpoints.medium}) {
    flex: 0 0 auto;
  }
`

export const NavLinkWrapper = styled.ul`
  display: ${props => (props.menuOpen ? "block" : "none")};
  margin: 1em -0.5em;

  li {
    margin: 0.2em 0 0 0;
  }

  li:first-of-type {
    margin: 0;
  }

  @media (${props => props.theme.common.breakpoints.medium}) {
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    margin: 0 1em;

    li {
      margin: 0 0 0 1em;
    }

    li:first-of-type {
      margin: 0;
    }
  }

  @media (${props => props.theme.common.breakpoints.large}) {
    li {
      margin: 0 0 0 3em;
    }

    li:first-of-type {
      margin: 0;
    }
  }
`

export const NavLinkElement = styled.li`
  a {
    display: block;
    padding: 0.5em;
    border-radius: ${props => props.theme.common.corners.rounded2};

    :hover,
    :focus {
      background-color: ${props =>
        props.darkColorScheme
          ? props.theme.dark.colors.aGray2
          : props.theme.light.colors.aGray2};
    }

    :active {
      background-color: ${props =>
        props.darkColorScheme
          ? props.theme.dark.colors.aGray3
          : props.theme.light.colors.aGray3};
    }

    @media (${props => props.theme.common.breakpoints.medium}) {
      padding: 0.25em 0.5em;
    }
  }
`

export const NavButtonWrapper = styled.ul`
  display: ${props => (props.menuOpen ? "block" : "none")};
  margin: 0;

  @media (${props => props.theme.common.breakpoints.medium}) {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    padding: 0;

    li {
      margin: 0 0 0 0.5em;
    }

    li:first-of-type {
      margin: 0;
    }
  }

  hr {
    display: block;
    margin: 0 0 1em;
    border-color: ${props =>
      props.darkColorScheme
        ? props.theme.dark.colors.aGray3
        : props.theme.light.colors.aGray1};

    @media (${props => props.theme.common.breakpoints.medium}) {
      display: none;
    }
`

export const NavButton = styled.button`
  display: none;
  border-radius: ${props => props.theme.common.corners.rounded2};
  border: none;
  background-color: ${props =>
    props.subMenuOpen
      ? props.darkColorScheme
        ? props.theme.dark.colors.aGray2
        : props.theme.light.colors.aGray2
      : "transparent"};

  :hover,
  :focus {
    background-color: ${props =>
      props.darkColorScheme
        ? props.theme.dark.colors.aGray2
        : props.theme.light.colors.aGray2};
  }

  :active {
    background-color: ${props =>
      props.darkColorScheme
        ? props.theme.dark.colors.aGray3
        : props.theme.light.colors.aGray3};
  }

  @media (${props => props.theme.common.breakpoints.medium}) {
    display: flex;
    align-items: center;
  }

  svg {
    width: 1.5em;
  }
`

export const NavButtonMenu = styled(NavButton)`
  display: flex;
  margin: 0 -0.5em 0 0;

  @media (${props => props.theme.common.breakpoints.medium}) {
    display: none;
  }
`

export const NavSubMenu = styled.div`
  display: block;
  margin: 1em -0.5em 0.75em -0.5em;

  @media (${props => props.theme.common.breakpoints.medium}) {
    display: ${props => (props.subMenuOpen ? "block" : "none")};
    position: absolute;
    right: 0;
    margin: 1em -1em 0 0;
    width: 8em;
    padding: 0.6em 0.4em;
    border-radius: ${props => props.theme.common.corners.rounded2};
    background-color: ${props =>
      props.darkColorScheme
        ? props.theme.dark.colors.gray1
        : props.theme.light.colors.gray1};
    box-shadow: ${props => props.theme.common.effects.shadow1};
  }

  @media (${props => props.theme.common.breakpoints.small}) {
    display: block;
    margin: 1em -0.5em 0.25em -0.5em;
  }

  hr {
    display: none;
    margin: 0.5em 0;
    border-color: ${props =>
      props.darkColorScheme
        ? props.theme.dark.colors.aGray3
        : props.theme.light.colors.aGray1};

    @media (${props => props.theme.common.breakpoints.medium}) {
      display: block;
    }

    @media (${props => props.theme.common.breakpoints.small}) {
      display: none !important;
    }
  }
`

export const NavSubMenuButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (${props => props.theme.common.breakpoints.medium}) {
    display: block;
  }

  @media (${props => props.theme.common.breakpoints.small}) {
    display: block;
  }

  button {
    margin: 0 0 0 1em;

    @media (${props => props.theme.common.breakpoints.medium}) {
      margin: 0.2em 0 0 0;
    }

    @media (${props => props.theme.common.breakpoints.small}) {
      margin: 0.2em 0 0 0;
    }
  }

  button:first-of-type {
    margin: 0;
  }
`

export const NavSubMenuButton = styled.button`
  display: flex;
  align-items: center;
  width: auto;
  padding: 0.25em 0.625em 0.25em 0.375em;
  border-radius: ${props => props.theme.common.corners.rounded2};
  border: none;
  background-color: ${props =>
    props.highlighted
      ? props.darkColorScheme
        ? props.theme.dark.colors.aGray2
        : props.theme.light.colors.aGray2
      : "transparent"};

  :hover,
  :focus {
    background-color: ${props =>
      props.darkColorScheme
        ? props.theme.dark.colors.aGray2
        : props.theme.light.colors.aGray2};
  }

  :active {
    background-color: ${props =>
      props.darkColorScheme
        ? props.theme.dark.colors.aGray3
        : props.theme.light.colors.aGray3};
  }

  @media (${props => props.theme.common.breakpoints.medium}) {
    width: 100%;
    border-radius: ${props => props.theme.common.corners.rounded3};
  }

  @media (${props => props.theme.common.breakpoints.small}) {
    padding: 0.5em;
    width: 100%;
  }

  svg {
    margin: 0 1em 0 0;
    width: 1.5em;
  }
`

export const NavSubMenuLabel = styled.p`
  margin: 0 0 0.75em 0.5em;
  font-size: ${props => props.theme.common.fonts.sizes.small};
  font-weight: ${props => props.theme.common.fonts.weights.medium};
  color: ${props =>
    props.darkColorScheme
      ? props.theme.dark.colors.primary2
      : props.theme.light.colors.primary2};
`

export const NavOverlay = styled.button`
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: none;
  background-color: ${props =>
    props.darkColorScheme
      ? props.theme.dark.colors.overlay
      : props.theme.light.colors.overlay};
`

export const NavSubOverlay = styled(NavOverlay)`
  z-index: 0;
`
