import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import Journey from './pages/journey/Journey'
import JourneyInfo from './pages/journey_info/Journey_info'
import Header from '../src/component/Header'
import Footer from '../src/component/Footer'
import Guild from './pages/Guild'
import GuildInfo from './pages/GuildInfo'
import Shoppingcart from './pages/shoppingcart/Shoppingcart'
import Pay from './pages/shoppingcart/Pay'

import './style/header.css'
import './style/footer.css'

function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/journey">
            <Journey />
          </Route>

          <Route path="/journey_info">
            <JourneyInfo />
          </Route>

          <Route path="journey_info/:id?">
            <JourneyInfo />
          </Route>

          <Route path="/Guild">
            <Guild />
          </Route>

          <Route path="/GuildInfo">
            <GuildInfo />
          </Route>

          <Route path="/Shoppingcart">
            <Shoppingcart />
          </Route>

          <Route path="/Pay">
            <Pay />
          </Route>

          <Route exapt path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default App
