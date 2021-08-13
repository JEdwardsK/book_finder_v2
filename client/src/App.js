import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route to ='/'>
        <HomePage/>
      </Route>
    </Switch>
    </BrowserRouter>
  )
}

export default App
