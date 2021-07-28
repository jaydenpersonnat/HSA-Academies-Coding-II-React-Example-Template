import React from 'react'
import Home from './containers/Home'
import { TodoList } from './containers/TodoList'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const username = "Clarissa"

const App = () => (
  <BrowserRouter basename="/todo">
    <div className="App">
      <Switch>
        <Route exact path="/">
          {(username) ? <Home name={username}/> : <Home name="stranger"/>}
        </Route>
        <Route path="/list" component={TodoList}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
