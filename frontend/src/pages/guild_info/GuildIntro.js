import React from 'react'
import GuildIntroImg1 from '../../data/水璉部落/導遊/導遊3.jpg'
import GuildIntroImg2 from '../../data/水璉部落/導遊/導遊4.jpg'
import GuildIntroImg3 from '../../data/水璉部落/導遊/導遊5.jpg'
import GuildIntroImg4 from '../../data/水璉部落/導遊/導遊6.jpg'

function GuildIntro() {
  return (
    // <!-- 導遊資料 -->
    <section class="guild-intro">
      {/* <!-- 導遊資料標題 --> */}
      <div class="guild-intro-title d-flex align-items-center justify-content-center position-relative mx-auto ">
        <h1>瓦丹的瘋狂冒險團</h1>
        <div class="guild-intro-title-review d-flex align-items-center">
          <div class="score">4.0</div>
          <div class="intro-title-star text-white">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <div class="review-num">(27)</div>
        </div>
      </div>
      {/* <!-- web版介紹 --> */}
      <div class="guild-intro-box  justify-content-around td-mb-75">
        {/* <!-- 導遊圖片 --> */}
        <div class="guild-intro-item-img td-mb-25">
          <div class="intro-item-img-t d-flex justify-content-between align-items-end">
            <img class="t-left" src={GuildIntroImg1} alt="guild-img" />
            <img class="t-right" src={GuildIntroImg2} alt="guild-img" />
          </div>
          <div class="intro-item-img-b d-flex align-items-start justify-content-between">
            <img class="b-left" src={GuildIntroImg3} alt="guild-img" />
            <img class="b-right" src={GuildIntroImg4} alt="guild-img" />
          </div>
        </div>
        {/* <!-- 導遊介紹 --> */}
        <div class="guild-intro-item-group d-flex flex-column td-mb-25">
          <div class="guild-intro-item-dt">
            <div class="guild-intro-tribe d-flex align-items-center">
              <div class="item-icon"></div>
              <div class="guild-intro-item-tribe">
                <p class="item-tribe-title">帶團部落</p>
                <p class="item-tribe-txt">靜浦步落</p>
              </div>
            </div>
            <div class="guild-intro-license d-flex align-items-center">
              <div class="item-icon"></div>
              <div class="guild-intro-item-license">
                <p class="item-license-title">證照</p>
                <p class="item-license-txt">華語導遊證照</p>
              </div>
            </div>
            <div class="guild-intro-lan d-flex align-items-center">
              <div class="item-icon"></div>
              <div class="guild-intro-item-lan">
                <p class="item-lan-title">語言</p>
                <p class="item-lan-txt">中文、英文</p>
              </div>
            </div>
            <button class="btn-consult text-white">諮詢</button>
          </div>
          {/* <!-- 影片 --> */}
          <div class="guild-intro-video ">
            <iframe
              src="https://www.youtube.com/embed/9viHdDVNNH0"
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* <!-- rwd版介紹 --> */}
      <div class="guild-intro-box-rwd justify-content-center td-mb-75">
        {/* <!-- 導遊介紹 --> */}
        <div class="guild-intro-item-group d-flex flex-column">
          <div class="guild-intro-item-dt mx-auto">
            <div class="guild-intro-tribe d-flex align-items-center">
              <div class="item-icon"></div>
              <div class="guild-intro-item-tribe">
                <p class="item-tribe-title">帶團部落</p>
                <p class="item-tribe-txt">靜浦步落</p>
              </div>
            </div>
            <div class="guild-intro-license d-flex align-items-center">
              <div class="item-icon"></div>
              <div class="guild-intro-item-license">
                <p class="item-license-title">證照</p>
                <p class="item-license-txt">華語導遊證照</p>
              </div>
            </div>
            <div class="guild-intro-lan d-flex align-items-center">
              <div class="item-icon"></div>
              <div class="guild-intro-item-lan">
                <p class="item-lan-title">語言</p>
                <p class="item-lan-txt">中文、英文</p>
              </div>
            </div>
            <button class="btn-consult text-white">諮詢</button>
          </div>
        </div>
        {/* <!-- 導遊圖片 --> */}
        <div class="guild-intro-item-img d-flex flex-column mx-auto">
          <img class="t-left td-mb-25" src={GuildIntroImg3} alt="" />
          <img class="t-right" src={GuildIntroImg4} alt="" />
        </div>
        {/* <!-- 影片 --> */}
        <div class="guild-intro-video td-mt-75">
          <iframe
            width="505"
            height="296"
            src="https://www.youtube.comembeddu6uL8LsDnA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-mediagyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}
export default GuildIntro
