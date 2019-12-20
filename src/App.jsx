import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/' component={LandingPage} />
      </>
    )
  }
}

export default App