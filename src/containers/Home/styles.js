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
  color: ${({theme}) => theme.titleColor};
`

export const Page = styled.div`
  background-color: skyblue;
  /* background: url('https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png') */
`

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  background-color: skyblue;
  padding: 30px;

`
export const StyledButton = styled.button`
  padding: 10px;
  margin: 1px;
  border-radius: 10px;
  background-color: pink;
  transition: 0.3s;
  font-family: ${({theme}) => theme.font};

  &:hover {
    background-color: red;
    border-radius: 20px;
  }

`
export const StyledLink = styled(Link)`
  padding: 10px 5px 10px 5px;
  border: outset 2px gray;
  border-radius: 10px;
  background-color: pink;
  transition: 0.3s;
  font-family: ${({theme}) => theme.font};

  &:hover {
    background-color: red;
    border-radius: 20px;
  }
`

export const Centered = styled.div`
  text-align: center;
`