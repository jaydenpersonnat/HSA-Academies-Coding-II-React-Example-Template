import React from 'react'
import { Link } from 'react-router-dom'
import { Title, Subtitle, Page, NavBar, StyledButton, StyledLink, Centered } from './styles'
import { useState } from 'react'

const Home = ({ name }) => {

  return (
    <>
    <NavBar>
      <StyledLink to="/list">Go to Todo List!</StyledLink>
      <br/>
      <br/>
      <StyledButton>
        <Link to="/about">Go to About</Link>
      </StyledButton>
      <br/>
    </NavBar>
    <Page>
      <Title primary>Hello {name}!</Title>
      <Subtitle>Welcome to my website!</Subtitle>
      <Centered>
        <img style={{width: '500px'}} src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"/>
      </Centered>
    </Page>
    </>
  )
}

export default Home