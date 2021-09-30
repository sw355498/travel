import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import ScrollUp from './component/scrollUp'
import Home from './pages/home/Home'
import Journey from './pages/journey/Journey'
import journeyInfo from './pages/journey_info/Journey_info'
import Header from '../src/component/Header'
import Footer from '../src/component/Footer'
import Guild from './pages/Guild'
import GuildInfo from './pages/GuildInfo'
import Shoppingcart from './pages/shoppingcart/Shoppingcart'
<<<<<<< HEAD
import Member from './pages/member/Member'

=======
import Pay from './pages/shoppingcart/Pay'
import Register from './pages/sign-in-up/Register'
import Login from './pages/sign-in-up/Login'
>>>>>>> 05e90e21f86f996f78059047d4b72efda168230d
import './style/header.css'
import './style/footer.css'

function App() {
  return (
    <>
<<<<<<< HEAD
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
=======
      <ScrollUp>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/journey" component={Journey} exact />
          <Route path="/journey_info/:id" component={journeyInfo} />
          <Route path="/Guild" component={Guild} />
          <Route path="/GuildInfo" component={GuildInfo} />
          <Route path="/Shoppingcart" component={Shoppingcart} />
          <Route path="/Pay" component={Pay} />
          <Route path="/Register" component={Register} />
          <Route path="/Login" component={Login} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </ScrollUp>
>>>>>>> 05e90e21f86f996f78059047d4b72efda168230d
    </>
  )
}

export default App
