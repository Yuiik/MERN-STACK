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

function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <Switch>
      <Route exact path='/'>
        <div id='wrapper'>
          <Navbar />
          <div className='container-fluid p-0'>
            <Home />
            <Skills />
            <Portfolio />
            <Codepen />
          </div>
        </div>
      </Route>
    </Switch>
  )
}

export default App
