import styled from 'styled-components'

export const Title = styled.h1`
  color: ${props => props.primary ? props.theme.colors.primaryText : props.theme.colors.secondaryText};
  font-size: ${props => props.primary ? "1.5em" : "1em"};
  font-family: ${({theme}) => theme.fonts.titleFont.family};
  text-align: center;
  @media only screen and (max-width: 800px) {
    text-align: left;
    font-style: italic;
  }
`

export const Subtitle = styled(Title)`
  font-size: 0.8em;
`