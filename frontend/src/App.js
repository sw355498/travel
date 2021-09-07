import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Journey from './pages/Journey'
import Header from '../src/component/Header'
import Footer from '../src/component/Footer'
import './style/header.css'
import './style/footer.css'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/journey" component={Journey} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </>
  )
}

export default App
