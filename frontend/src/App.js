import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import Journey from './pages/journey/Journey'
import journeyInfo from './pages/journey_info/Journey_info'
import Header from '../src/component/Header'
import Footer from '../src/component/Footer'
import './style/header.css'
import './style/footer.css'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/journey" component={Journey} exact />
        <Route path="/journey_info/:id" component={journeyInfo} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  )
}

export default App
