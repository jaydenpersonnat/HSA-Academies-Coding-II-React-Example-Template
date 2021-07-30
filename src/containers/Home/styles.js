import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Title = styled.h1`
  color: ${props => props.primary ? props.theme.titleColor : props.theme.textColor};
  text-align: center;
  font-style: bold;
  font-size: ${props => props.primary ? props.theme.size.title : props.theme.size.subtitle};
  font-family: ${({theme}) => theme.font};
`

export const Subtitle = styled(Title)`
  font-style: italic;
  font-size: ${({theme}) => theme.size.subtitle};
  color: ${({theme}) => theme.color.title};
`

export const Page = styled.div`
  background-color: ${({theme}) => theme.color.insert};
  color: ${({theme}) => theme.color.text}
  /* background: url('https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png') */
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({theme}) => theme.color.insert};
  padding: 30px;
`

export const TwoCol = styled.div`
  display: flex;
  justify-content: center;
`

export const Text = styled.p`
  color: ${({theme}) => theme.color.text};
  font-family: ${({theme}) => theme.font};
  font-size: ${({theme}) => theme.size.text};
  margin: 50px;
  text-align: left;
`

export const StyledButton = styled.button`
  padding: 10px;
  margin: auto 20px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.color.light};
  transition: 0.3s;
  font-family: ${({theme}) => theme.font};

  &:hover {
    background-color: blue;
    border-radius: 20px;
    color: white;
  }
`

export const StyledLink = styled(Link)`
padding: 10px 5px 10px 5px;
margin: auto 20px;
border: outset 2px gray;
border-radius: 10px;
background-color: ${({theme}) => theme.color.light};
color: ${({theme}) => theme.color.dark};
transition: 0.3s;
font-family: ${({theme}) => theme.font};

  &:hover {
    background-color: ${({theme}) => theme.color.dark};
    color: ${({theme}) => theme.color.light};
    border-radius: 20px;
  }
`

export const Centered = styled.div`
  text-align: center;
`