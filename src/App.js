import React, { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Portfolio from './pages/Portfolio'
import { Route, Switch } from 'react-router-dom'
import Codepen from './pages/Codepen'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Contact from './pages/Contact'

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Switch>
      <Route exact path='/'>
        <div id='wrapper'>
          <Navbar />
          <Home />
          <Skills />
          <Portfolio />
          <Codepen />
          <Contact />
        </div>
      </Route>
    </Switch>
  )
}

export default App
