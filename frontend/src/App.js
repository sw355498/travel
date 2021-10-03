import React, { useState, useEffect } from 'react'
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
import Oder from './pages/shoppingcart/Oder'
import Register from './pages/sign-in-up/Register'
import Login from './pages/sign-in-up/Login'
import { AuthContext } from './context/auth'
import { API_URL } from './config'
import axios from 'axios'
import Member from '../src/pages/member/Member'

import './style/header.css'
import './style/footer.css'

function App() {
  const [member, setMember] = useState(null)

  const setAuthMember = (m) => {
    setMember(m)
  }
  useEffect(() => {
    // 每次重新整理或開啟頁面時，都去確認一下是否在已經登入的狀態。
    const getMember = async () => {
      try {
        let result = await axios.get(`${API_URL}/member`, {
          withCredentials: true,
        })
        setMember(result.data)
      } catch (e) {}
    }
    getMember()
  }, [])

  return (
    <>
      <ScrollUp>
        <AuthContext.Provider value={{ member, setMember: setAuthMember }}>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/journey" component={Journey} exact />
            <Route path="/journey_info/:id" component={journeyInfo} />
            <Route path="/journey/:currentPage?">
              <Journey />
            </Route>
            <Route path="/Guild" component={Guild} />
            <Route path="/GuildInfo/:guildId" component={GuildInfo} />
            <Route path="/Shoppingcart" component={Shoppingcart}>
              <Shoppingcart member={member} />
            </Route>
            <Route path="/Pay" component={Pay}>
              <Pay member={member} />
            </Route>
            <Route path="/order_form/:oderPage?" component={Oder} />
            <Route path="/Register" component={Register} />
            <Route path="/Login" component={Login} />
            <Route path="/member" component={Member} />
            {/* <Route path="/member" component={member} /> */}
            <Redirect to="/" />
          </Switch>
          <Footer />
        </AuthContext.Provider>
      </ScrollUp>
    </>
  )
}

export default App
