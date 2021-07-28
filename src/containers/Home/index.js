import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({ name }) => (
  <div>
    <h1>Hello {name}!</h1>
    <Link to="/list">Go to Todo List!</Link>
  </div>
)

export default Home