import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 0;

  @media (${props => props.theme.common.breakpoints.medium}) {
    padding: 4em 0;
  }

  h2 {
    margin: -0.5em 0 0 0;
    font-size: 1.2em;
    color: ${props =>
      props.darkColorScheme
        ? props.theme.dark.colors.primary2
        : props.theme.light.colors.primary2};
  }

  p {
    margin: 1.5em 0;
  }
`
