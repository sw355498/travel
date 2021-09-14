import React from 'react'
import guildavatar from '../../data/奇美部落/導遊/導遊1.jpg'
import { Link } from 'react-router-dom'

function GuildResult() {
  return (
    // <!-- 篩選結果 -->
    <section className="container guildlist-filter-result td-mb-25">
      <h2 className="filter-result-title">篩選結果：</h2>
      <div className="filter-result-box d-flex flex-wrap justify-content-evenly col-12">
        {/* <!-- 導遊item1 --> */}
        <div className="filter-result-item position-relative d-flex align-items-center">
          <div className="guild-tribe position-absolute">靜浦部落</div>
          <div className="filter-result-item-main mx-auto d-flex flex-wrp flex-column align-items-center">
            {/* <!-- 上方導遊基本資料 --> */}
            <div className="guild-info">
              <img
                className="guild-info-avatar d-block mx-auto"
                src={guildavatar}
                alt="guild-avatar"
              />
              <div className="guild-info-name text-center">拉庫克</div>
              <div className="guild-info-stars mx-auto">
                <div className="stars-label-group">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            {/* <!-- 下方評價 --> */}
            <div className="guild-interview">
              <p className="interview-title text-center">花蓮獵人</p>
              <p className="interview-content text-center">
                謝謝導遊的解說，這鋼旅程非常開心，下次要再來！
              </p>
            </div>
            {/* <!-- 預約button --> */}
            <Link
              to="/GuildInfo"
              className="btn-booking text-white  d-flex align-items-center justify-content-center"
              href="guild-intro.html"
            >
              預約
            </Link>
          </div>
        </div>
        {/* <!-- 導遊item2 --> */}
        <div className="filter-result-item position-relative d-flex align-items-center">
          <div className="guild-tribe position-absolute">靜浦部落</div>
          <div className="filter-result-item-main mx-auto d-flex flex-column align-items-center">
            {/* <!-- 上方導遊基本資料 --> */}
            <div className="guild-info">
              <img
                className="guild-info-avatar d-block mx-auto"
                src={guildavatar}
                alt="guild-avatar"
              />
              <div className="guild-info-name text-center">拉庫克</div>
              <div className="guild-info-stars mx-auto">
                <div className="stars-label-group">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            {/* <!-- 下方評價 --> */}
            <div className="guild-interview">
              <p className="interview-title text-center">花蓮獵人</p>
              <p className="interview-content text-center">
                謝謝導遊的解說，這鋼旅程非常開心，下次要再來！
              </p>
            </div>
            {/* <!-- 預約button --> */}
            <Link
              to="/GuildInfo"
              className="btn-booking text-white  d-flex align-items-center justify-content-center"
              href="guild-intro.html"
            >
              預約
            </Link>
          </div>
        </div>
        {/* <!-- 導遊item3 --> */}
        <div className="filter-result-item position-relative d-flex align-items-center">
          <div className="guild-tribe position-absolute">靜浦部落</div>
          <div className="filter-result-item-main mx-auto d-flex flex-column align-items-center">
            {/* <!-- 上方導遊基本資料 --> */}
            <div className="guild-info">
              <img
                className="guild-info-avatar d-block mx-auto"
                src={guildavatar}
                alt="guild-avatar"
              />
              <div className="guild-info-name text-center">拉庫克</div>
              <div className="guild-info-stars mx-auto">
                <div className="stars-label-group">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            {/* <!-- 下方評價 --> */}
            <div className="guild-interview">
              <p className="interview-title text-center">花蓮獵人</p>
              <p className="interview-content text-center">
                謝謝導遊的解說，這鋼旅程非常開心，下次要再來！
              </p>
            </div>
            {/* <!-- 預約button --> */}
            <a
              className="btn-booking text-white d-flex align-items-center justify-content-center"
              href="guild-intro.html"
            >
              預約
            </a>
          </div>
        </div>
        {/* <!-- 導遊item4 --> */}
        <div className="filter-result-item position-relative d-flex align-items-center">
          <div className="guild-tribe position-absolute">靜浦部落</div>
          <div className="filter-result-item-main mx-auto d-flex flex-column align-items-center">
            {/* <!-- 上方導遊基本資料 --> */}
            <div className="guild-info">
              <img
                className="guild-info-avatar d-block mx-auto"
                src={guildavatar}
                alt="guild-avatar"
              />
              <div className="guild-info-name text-center">拉庫克</div>
              <div className="guild-info-stars mx-auto">
                <div className="stars-label-group">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            {/* <!-- 下方評價 --> */}
            <div className="guild-interview">
              <p className="interview-title text-center">花蓮獵人</p>
              <p className="interview-content text-center">
                謝謝導遊的解說，這鋼旅程非常開心，下次要再來！
              </p>
            </div>
            {/* <!-- 預約button --> */}
            <a
              className="btn-booking text-white  d-flex align-items-center justify-content-center"
              href="guild-intro.html"
            >
              預約
            </a>
          </div>
        </div>
        {/* <!-- 導遊item5 --> */}
        <div className="filter-result-item position-relative d-flex align-items-center">
          <div className="guild-tribe position-absolute">靜浦部落</div>
          <div className="filter-result-item-main mx-auto d-flex flex-column align-items-center">
            {/* <!-- 上方導遊基本資料 --> */}
            <div className="guild-info">
              <img
                className="guild-info-avatar d-block mx-auto"
                src={guildavatar}
                alt="guild-avatar"
              />
              <div className="guild-info-name text-center">拉庫克</div>
              <div className="guild-info-stars mx-auto">
                <div className="stars-label-group">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            {/* <!-- 下方評價 --> */}
            <div className="guild-interview">
              <p className="interview-title text-center">花蓮獵人</p>
              <p className="interview-content text-center">
                謝謝導遊的解說，這鋼旅程非常開心，下次要再來！
              </p>
            </div>
            {/* <!-- 預約button --> */}
            <a
              className="btn-booking text-white  d-flex align-items-center justify-content-center"
              href="guild-intro.html"
            >
              預約
            </a>
          </div>
        </div>
        {/* <!-- 導遊item6 --> */}
        <div className="filter-result-item position-relative d-flex align-items-center">
          <div className="guild-tribe position-absolute">靜浦部落</div>
          <div className="filter-result-item-main mx-auto d-flex flex-column align-items-center">
            {/* <!-- 上方導遊基本資料 --> */}
            <div className="guild-info">
              <img
                className="guild-info-avatar d-block mx-auto"
                src={guildavatar}
                alt="guild-avatar"
              />
              <div className="guild-info-name text-center">拉庫克</div>
              <div className="guild-info-stars mx-auto">
                <div className="stars-label-group">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            {/* <!-- 下方評價 --> */}
            <div className="guild-interview">
              <p className="interview-title text-center">花蓮獵人</p>
              <p className="interview-content text-center">
                謝謝導遊的解說，這鋼旅程非常開心，下次要再來！
              </p>
            </div>
            {/* <!-- 預約button --> */}
            <a
              className="btn-booking text-white  btn d-flex align-items-center justify-content-center"
              href="guild-intro.html"
            >
              預約
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default GuildResult
