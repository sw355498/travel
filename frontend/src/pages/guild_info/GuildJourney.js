import React from 'react'
import GuildJourney1 from '../../data/新社部落/大圖/新社部落.jpg'
import GuildJourney2 from '../../data/新社部落/大圖/族群裡原生生物.jpg'
import collect from '../../img/collect.png'

function GuildJourney() {
  return (
    // <!-- 體驗行程 -->
    <section className="guild-journey td-mb-75 d-flex flex-column">
      <h1 className="guild-journey-title">體驗行程</h1>
      {/* <!-- 體驗行程1 --> */}
      <div className="guild-journey-item td-mb-25 position-relative">
        <img className="guild-journey-img" src={GuildJourney1} alt="" />
        {/* <!-- 白色bg --> */}
        <div className="guild-journey-item-bg ">
          <div className="guild-journey-tribe position-absolute">
            <i className="fas fa-tags"></i>
            <span>靜浦部落</span>
          </div>
          {/* <!-- 內容 --> */}
          <div className="guild-journey-content position-relative">
            {/* <!-- title部分 --> */}
            <div className="guild-journey-item-title">
              <div className="guild-journey-item-name">
                花蓮｜獵人學校特色體驗
              </div>
              <div className="line"></div>
            </div>
            <div className="guild-journey-item-price ">
              <span>NT$1800</span>
            </div>
            <div className="guild-journey-item-txt">
              <p>
                一場旅行，見證一包鹽、一把刀就能在山林生存的強大技能。跟著耆老獵人進入獵場、在山裡生活，沒有安排好的橋段，穿梭在山林中親身體驗獵人的日常。真實走入，一樣發生在這塊土地上另一群人的生活。
              </p>
            </div>
            <div className="guild-journey-act">
              <a className="act-btn heart" href="">
                <img src={collect} alt="" />
              </a>
              {/* <button className="act-btn btn-detail">詳細</button> */}
              <button className="act-btn btn-booking-md">詳細</button>
              {/* <a className="act-btn heart" href="">
                <img src={collect} alt="" />
              </a> */}
            </div>
            <div className="guild-journey-review d-flex align-items-center">
              <div className="guild-journey-review-title">評價：</div>
              <div className="guild-journey-review-score">4.0</div>
              <div className="guild-journey-review-star stars-s">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- 體驗行程2 --> */}
      <div className="guild-journey-item td-mb-25 position-relative">
        <img className="guild-journey-img" src={GuildJourney2} alt="" />
        {/* <!-- 白色bg --> */}
        <div className="guild-journey-item-bg ">
          <div className="guild-journey-tribe position-absolute">
            <i className="fas fa-tags"></i>
            <span>靜浦部落</span>
          </div>
          {/* <!-- 內容 --> */}
          <div className="guild-journey-content position-relative">
            {/* <!-- title部分 --> */}
            <div className="guild-journey-item-title">
              <div className="guild-journey-item-name">
                花蓮｜獵人學校特色體驗
              </div>
              <div className="line"></div>
            </div>
            <div className="guild-journey-item-price ">
              <span>NT$1800</span>
            </div>
            <div className="guild-journey-item-txt">
              <p>
                一場旅行，見證一包鹽、一把刀就能在山林生存的強大技能。跟著耆老獵人進入獵場、在山裡生活，沒有安排好的橋段，穿梭在山林中親身體驗獵人的日常。真實走入，一樣發生在這塊土地上另一群人的生活。
              </p>
            </div>
            <div className="guild-journey-act">
              {/* <button className="act-btn btn-detail">詳細</button> */}
              <a className="act-btn heart" href="">
                <img src={collect} alt="" />
              </a>
              <button className="act-btn btn-booking-md">詳細</button>
              {/* <a className="act-btn heart" href="">
                <img src={collect} alt="" />
              </a> */}
            </div>
            <div className="guild-journey-review d-flex align-items-center">
              <div className="guild-journey-review-title">評價：</div>
              <div className="guild-journey-review-score">4.0</div>
              <div className="guild-journey-review-star stars-s">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default GuildJourney
