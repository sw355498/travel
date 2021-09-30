import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import Journey from './pages/journey/Journey'
import JourneyInfo from './pages/journey_info/Journey_info'
import Header from '../src/component/Header'
import Footer from '../src/component/Footer'
import Guild from './pages/Guild'
import GuildInfo from './pages/GuildInfo'
import Shoppingcart from './pages/shoppingcart/Shoppingcart'
import Member from './pages/member/Member'

import './style/header.css'
import './style/footer.css'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/journey" component={Journey} />
        <Route path="/journey_info" component={JourneyInfo} />
        <Route path="/journey/:id" component={JourneyInfo} />
        <Route path="/Guild" component={Guild} />
        <Route path="/GuildInfo" component={GuildInfo} />
        <Route path="/Shoppingcart" component={Shoppingcart} />
        <Route path="/member" component={Member} />
        {/* <Route path="/member" component={member} /> */}
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  )
}

export default App
