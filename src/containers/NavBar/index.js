import React from 'react'
import { Link } from 'react-router-dom'
import { Title, Subtitle, Page, NavBar, StyledButton, StyledLink, Centered } from './styles'
import { useState } from 'react'

const NavBar = () => {

  return (
    <>
      <StyledLink to="/list">Go to Todo List!</StyledLink>
      <StyledButton>
        <Link to="/about">Go to About</Link>
      </StyledButton>
    </>
  )
}

export default Home