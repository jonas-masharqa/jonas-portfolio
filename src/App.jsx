import React from 'react'
import Sidebar from './Components/Sidebar'
import Projects from './Components/Projects'
import AboutMe from './Components/AboutMe'
import LandingPage from './Components/LandingPage'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Sidebar />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about" component={AboutMe} />
    </>
  )
}

export default App
