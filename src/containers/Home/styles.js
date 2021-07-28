import styled from 'styled-components'

export const Title = styled.h1`
  color: ${props => props.primary ? 'palevioletred' : 'orange'};
  text-align: center;
  font-style: bold;
  font-size: ${props => props.primary ? '40pt' : '30pt'};
  font-family: sans-serif;
  
`

export const Subtitle = styled(Title)`
  font-style: italic;
  font-size: 20pt;
  color: black;
`


export const Page = styled.div`
  background-color: lightblue;
`