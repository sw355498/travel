import React from 'react'
//引入首頁組件
import HomeAboutUs from './About_us/homeAboutUs'
import HomeBanner from './home_banner/homeBanner'
import HomeExcellentGuide from './excellent_guide/homeExcellentGuide'
import HomeGallryArea from './gallery_area/homeGallryArea'
import ScrollUp from '../../component/scrollUp'

// css引入
import '../../style/button.css'
import '../../style/fons.css'
import '../../style/reset.css'
import '../../style/home.css'

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
