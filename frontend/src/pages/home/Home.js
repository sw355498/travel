import React, { useState, useEffect, useCallback } from 'react'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import ScrollToTop from 'react-scroll-to-top'

//引入首頁組件
import HomeExcellentGuide from './excellent_guide/homeExcellentGuide'
import HomeGallryArea from './gallery_area/homeGallryArea'

// css引入
import '../../style/button.css'
import '../../style/fons.css'
import '../../style/reset.css'
import '../../style/home.css'
//data 引入
import HomeDropdownFilter from './home_banner/HomeDropdownFilter'
import API from '../../api'

function Home() {
  const [tribes, setTribes] = useState(null)
  const [lang, setLang] = useState(null)
  const fetchTribes = useCallback(async () => {
    API.fetchTribes().then(setTribes)
    API.fetchLangs().then(setLang)
  }, [])
  useEffect(() => {
    fetchTribes()
  }, [fetchTribes])
  return (
    <>
      <section className="banner">
        <div className="container ">
          {/* <div className="row d-flex flex-column">
            <div className="col-10"></div>
            <div className="col-2"></div>
          </div> */}
          <div className="row  d-flex align-items-center">
            <div className="col-md-5 ">
              <div className="banner-content d-flex flex-column">
                <Zoom>
                  <img
                    src="/images/img/花島（黑）.png"
                    alt=""
                    className="whitebird img-fluid "
                  />
                  <h2 className="first-h2 text-center">感受生活</h2>
                  <h2 className="first-h2 text-center">
                    帶領你認識花蓮深入部落
                  </h2>
                  {(tribes, lang) ? (
                    <HomeDropdownFilter tribes={tribes} langs={lang} />
                  ) : (
                    <div>loading....</div>
                  )}
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container home-aboutus ">
          <div className="row">
            <Fade left cascade>
              <div className="col-12">
                {' '}
                <img
                  src="images/img/aboutus-img.png"
                  alt=""
                  className="aboutus-img "
                />
              </div>
            </Fade>
            <div className="col-lg-6 col-md-3 "></div>
            <div className="col-lg-6 col-md-7">
              <p>
                原住民部落如能運用當地傳統工藝、文化及生活習俗配合豐富生態資源，導入文化體驗或深度文化旅行、生態旅遊將可帶動當地經濟，進而提升就業率。
              </p>
            </div>
          </div>
        </div>
      </section>
      {tribes ? <HomeGallryArea tribes={tribes} /> : <div>loading....</div>}
      <HomeExcellentGuide />
      <ScrollToTop smooth />
    </>
  )
}

export default Home
