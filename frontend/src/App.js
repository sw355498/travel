import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Journey from './pages/Journey'
import Shoppingcart from './pages/shoppingcart/Shoppingcart'
import JourneyInfo from './pages/Journey_info'

import Header from '../src/component/Header'
import Footer from '../src/component/Footer'
import Guild from './pages/Guild'
import GuildInfo from './pages/GuildInfo'

import './style/header.css'
import './style/footer.css'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/journey" component={Journey} />
        <Route path="/Shoppingcart" component={Shoppingcart} />
<<<<<<< HEAD
        <Route path="/Guild" component={Guild} />
        <Route path="/GuildInfo" component={GuildInfo} />
=======
        <Route path="/journey_info" component={JourneyInfo} />
>>>>>>> cart
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </>
  )
}

export default App
