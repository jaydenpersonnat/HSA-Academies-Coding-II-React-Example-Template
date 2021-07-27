import React from 'react'
import Home from './containers/Home'
import { TodoList } from './containers/TodoList'

const App = () => (
  <div className="App">
    <Home name="Clarissa"/>
    <Home name="Andrew"/>
    <TodoList/>
    <TodoList/>
    <TodoList/>
  </div>
)

export default App
