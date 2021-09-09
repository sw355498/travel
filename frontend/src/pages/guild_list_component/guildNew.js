import React from 'react'
import GuildNewAvatar from '../../data/撒固兒部落/導遊１/導遊 1-1.png'

function GuildNew() {
  return (
    //  <!-- 新人導遊推薦 -->
    <section class="guildlist-new td-mb-25 overflow-hidden">
      <div class="container guildlist-new-box td-mt-25 ">
        <h2 class="guildlist-new-title ">新人導遊推薦</h2>
        <div class="guildlist-new-box d-flex flex-wrap justify-content-evenly">
          {/* <!-- 新人導遊item1 --> */}
          <div class="guildlist-new-item position-relative d-flex align-items-center">
            <div class="guild-tribe position-absolute">靜浦部落</div>
            {/* <!-- 上方導遊基本資料 --> */}
            <div class="guildlist-new-main mx-auto d-flex flex-wrp flex-column align-items-center">
              <div class="guild-info">
                <img
                  class="guild-info-avatar d-block mx-auto"
                  src={GuildNewAvatar}
                  alt="guild-avatar"
                />
                <div class="guild-info-name text-center">拉庫克</div>
                <div class="guild-info-stars mx-auto">
                  <div class="stars-label-group">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
              {/* <!-- 下方評價 --> */}
              <div class="guild-interview">
                <p class="interview-title text-center">花蓮獵人</p>
                <p class="interview-content text-center">
                  謝謝導遊的解說，這鋼旅程非常開心，下次要再來！
                </p>
              </div>
              {/* <!-- 預約button --> */}
              <a
                class="btn-booking text-white  d-flex align-items-center justify-content-center"
                href="guild-intro.html"
              >
                預約
              </a>
            </div>
          </div>
          {/* <!-- 新人導遊item2 --> */}
          <div class="guildlist-new-item position-relative d-flex align-items-center">
            <div class="guild-tribe position-absolute">靜浦部落</div>
            <div class="guildlist-new-main mx-auto d-flex flex-wrp flex-column align-items-center">
              {/* <!-- 上方導遊基本資料 --> */}
              <div class="guild-info">
                <img
                  class="guild-info-avatar d-block mx-auto"
                  src={GuildNewAvatar}
                  alt="guild-avatar"
                />
                <div class="guild-info-name text-center">拉庫克</div>
                <div class="guild-info-stars mx-auto">
                  <div class="stars-label-group">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
              {/* <!-- 下方評價 --> */}
              <div class="guild-interview">
                <p class="interview-title text-center">花蓮獵人</p>
                <p class="interview-content text-center">
                  謝謝導遊的解說，這鋼旅程非常開心，下次要再來！
                </p>
              </div>
              {/* <!-- 預約button --> */}
              <a
                class="btn-booking text-white d-flex align-items-center justify-content-center"
                href="guild-intro.html"
              >
                預約
              </a>
            </div>
          </div>
          {/* <!-- 新人導遊item3 --> */}
          <div class="guildlist-new-item position-relative d-flex align-items-center">
            <div class="guild-tribe position-absolute">靜浦部落</div>
            <div class="guildlist-new-main mx-auto d-flex flex-wrp flex-column align-items-center">
              {/* <!-- 上方導遊基本資料 --> */}
              <div class="guild-info">
                <img
                  class="guild-info-avatar d-block mx-auto"
                  src={GuildNewAvatar}
                  alt="guild-avatar"
                />
                <div class="guild-info-name text-center">拉庫克</div>
                <div class="guild-info-stars mx-auto">
                  <div class="stars-label-group">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
              {/* <!-- 下方評價 --> */}
              <div class="guild-interview">
                <p class="interview-title text-center">花蓮獵人</p>
                <p class="interview-content text-center">
                  謝謝導遊的解說，這鋼旅程非常開心，下次要再來！
                </p>
              </div>
              {/* <!-- 預約button --> */}
              <a
                class="btn-booking text-white d-flex align-items-center justify-content-center"
                href="guild-intro.html"
              >
                預約
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default GuildNew
