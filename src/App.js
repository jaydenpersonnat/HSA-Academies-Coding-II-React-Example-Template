import React from 'react'
import Home from './containers/Home'
import { TodoList } from './containers/TodoList'

const userName = null

const App = () => (
  <div className="App">
    {!!userName ? <Home name={userName} /> : <Home name="stranger" />}
    <TodoList/>
  </div>
)

export default App