import React from 'react'
import { Title, Centered, TwoCol, Text } from '../Home/styles'
import NavBar from '../NavBar'
import { Container } from '../TodoList/components/styles'

const About = () => {
  return (
    <Centered>
      <NavBar/>
      <Container>
        <Title>About this site!</Title>
        <TwoCol>
          <img style={{width: '300px', margin: '50px'}} src="https://assets.website-files.com/5b2d564ed4bf81064e095701/5b314b940e3c09c32304c098_HSA_Logo%20(2).png"/>
          <Text>Basic React app created in summer 2021 as part of HSA Academies Coding Level II Academy. Used to teach the fundamentals of front-end development with React.js.</Text>
        </TwoCol>
      </Container>
    </Centered>
  )
}

export default About