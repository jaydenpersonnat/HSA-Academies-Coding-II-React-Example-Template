import React from 'react'
import { Title, Subtitle } from './styles'
import { Link } from 'react-router-dom'

const Home = ({ name }) => (
  <>
    <Title primary>
      Hello, {name}! Welcome to my webpage! :D
    </Title>
    <Subtitle>
      This is a subtitle!
    </Subtitle>
    <Link to="/list">Go to Todo List</Link>
  </>
)

export default Home