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
import Pay from './pages/shoppingcart/Pay'
import Register from './pages/sign-in-up/Register'
import './style/header.css'
import './style/footer.css'

function App() {
  return (
    <>
      <ScrollUp>
        <Header />
        <Switch>
          {/* Home跟journey路徑我改成我的版本，如影響到其他檔案我再改過 */}
          <Route path="/" component={Home} exact />
          <Route path="/journey" component={Journey} exact />
          <Route path="/journey_info/:id" component={journeyInfo} />
          <Route path="/Guild" component={Guild} />
          <Route path="/GuildInfo" component={GuildInfo} />
          <Route path="/Shoppingcart" component={Shoppingcart} />
          <Route path="/Pay" component={Pay} />
          <Redirect to="/" />
          <Route path="/Register" component={Register} />
        </Switch>
        <Footer />
      </ScrollUp>
    </>
  )
}

export default App
