import React from 'react'
import Home from './containers/Home'
import { TodoList } from './containers/TodoList'
import About from './containers/About'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import theme from './theme'
import { ThemeProvider } from 'styled-components'


const App = () => (
  <BrowserRouter basename="/todo">
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/list" component={TodoList}/>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  </BrowserRouter>
)

export default App
