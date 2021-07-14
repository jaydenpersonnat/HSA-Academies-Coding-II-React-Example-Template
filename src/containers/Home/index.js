import React from 'react'
import { Title, Subtitle } from './styles'

const Home = ({ name }) => (
  <>
    <Title primary>
      Hello, {name}! Welcome to my webpage! :D
    </Title>
    <Subtitle>
      This is a subtitle!
    </Subtitle>
  </>
)

export default Home