import React from 'react'
import { StyledLink, NavContainer } from '../Home/styles'

const NavBar = () => {

  return (
    <NavContainer>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/list">Todo List</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </NavContainer>
  )
}

export default NavBar