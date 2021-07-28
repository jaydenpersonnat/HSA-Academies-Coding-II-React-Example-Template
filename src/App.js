import React from 'react'
import Home from './containers/Home'
import { TodoList } from './containers/TodoList'

const username = "Clarissa"

const App = () => (
  <div className="App">
    {(username) ? <Home name={username}/> : <Home name="stranger"/>}
    {(3 < 5) ? <p>Math works!</p> : <p>Math doesn't work :(</p>}
    <Home name="Andrew"/>
    <TodoList/>
    <TodoList/>
    <TodoList/>
  </div>
)

export default App
