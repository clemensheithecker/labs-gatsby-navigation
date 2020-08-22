import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 0;

  @media (${props => props.theme.common.breakpoints.medium}) {
    padding: 4em 0;
  }

  p {
    margin: 1.5em 0;
  }
`

export const FooterContainer = styled.footer`
  flex-shrink: 0;
  margin: 2em -1em -1em -1em;
  padding: 1em;
  background-color: ${props =>
    props.darkColorScheme
      ? props.theme.dark.colors.background2
      : props.theme.light.colors.background2};

  @media (${props => props.theme.common.breakpoints.medium}) {
    margin: 2em 0 -1em 0;
    padding: 1em 4em;
  }
`
