import React from 'react'
import guestAvatar from '../../data/靜浦部落/導遊/導遊1/何俊雄.jpg'
import ReviewImg from '../../data/太巴塱部落/行程1圖片/太巴朢1.png'
import order from '../../img/排序 icon.png'

function GuildReview() {
  return (
    // <!-- 旅客評價 -->
    <section className="guild-intro-guest td-mb-25 ">
      <div className="guild-intro-guest-title d-flex justify-content-between position-relative">
        <h1>旅客評價</h1>
        <button className="btn-sort justify-content-center position-absolute">
          <span>排序</span>
          <a href="">
            <img src={order} alt="button" />
          </a>
        </button>
      </div>
      <div className="intro-guest-box">
        {/* <!-- 旅客評價item1 --> */}
        <div className="intro-guest-item td-mb-75">
          {/* <!-- 旅客頭像/姓名/星等 --> */}
          <div className="intro-guest-info d-flex">
            <img className="avatar" src={guestAvatar} alt="guest-avatar" />
            <div className="intro-guest-dt ">
              <p className="intro-guest-dt-name">Cindy</p>
              <div className="intro-guest-stars stars-s">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
          {/* <!-- 旅客評價 --> */}
          <div className="intro-guest-review td-mb-25">
            <p className="intro-guest-review-txt">
              獨木舟好好玩，謝謝C大帶我們去玩。
            </p>
            <img src={ReviewImg} alt="" />
          </div>
          {/* <!-- 導遊回覆 --> */}
          <div className="intro-guest-reply d-flex align-items-center">
            <img className="avatar" src={guestAvatar} alt="" />
            <p>很開心你會喜歡，歡迎下次再來。</p>
          </div>
        </div>
        {/* <!-- 旅客評價item2 --> */}
        <div className="intro-guest-item">
          {/* <!-- 旅客頭像/姓名/星等 --> */}
          <div className="intro-guest-info d-flex">
            <img className="avatar" src={guestAvatar} alt="" />
            <div className="intro-guest-dt ">
              <p className="intro-guest-dt-name">Cindy</p>
              <div className="intro-guest-stars stars-s">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
          {/* <!-- 旅客評價 --> */}
          <div className="intro-guest-review td-mb-25">
            <p className="intro-guest-review-txt">
              獨木舟好好玩，謝謝C大帶我們去玩。
            </p>
            <img src={ReviewImg} alt="" />
          </div>
          {/* <!-- 導遊回覆 --> */}
          <div className="intro-guest-reply d-flex align-items-center">
            <img className="avatar" src={guestAvatar} alt="" />
            <p>很開心你會喜歡，歡迎下次再來。</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default GuildReview
