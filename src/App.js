import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import { TodoList } from './containers/TodoList'
import theme from './theme'

const userName = null

const App = () => (
  <BrowserRouter basename="/todo">
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {!!userName ? <Home name={userName} /> : <Home name="stranger" />}
          </Route>
          <Route path="/list" component={TodoList}/>
        </Switch>
      </div>
    </ThemeProvider>
  </BrowserRouter>
)

export default App