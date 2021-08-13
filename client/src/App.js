import React from 'react'
import { BrowserRouter, Link, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Link to ='/'>
        <HomePage/>
      </Link>
    </Switch>
    </BrowserRouter>
  )
}

export default App
