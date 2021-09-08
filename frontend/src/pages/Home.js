import React from 'react'
import HomeAboutUs from './home_component/homeAboutUs'
import HomeBanner from './home_component/homeBanner'
import HomeExcellentGuide from './home_component/homeExcellentGuide'
import HomeGallryArea from './home_component/homeGallryArea'
import ScrollUp from '../component/scrollUp'

// css引入
import '../style/button.css'
import '../style/fons.css'
import '../style/reset.css'
import '../style/home.css'

function home() {
  return (
    <>
      <HomeBanner />
      <HomeAboutUs />
      <HomeGallryArea />
      <HomeExcellentGuide />
      <ScrollUp />
    </>
  )
}

export default home
