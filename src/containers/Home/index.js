import React from 'react'
import { Link } from 'react-router-dom'
import { Title, Subtitle, Page } from './styles'

const Home = ({ name }) => (
  <Page>
    <Title primary>Hello {name}!</Title>
    <Title className="testing">This is not a primary Title</Title>
    <Subtitle>Welcome to my website!</Subtitle>
    <Link to="/list">Go to Todo List!</Link>
  </Page>
)

export default Home