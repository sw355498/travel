import React, { useState, useEffect } from 'react'
import LazyLoad from 'react-lazyload'
import GuildJourney from './guild_info/GuildJourney'
import ScrollToTop from 'react-scroll-to-top'
import JourneyCoustomerReview from './journey_info/coustomer_review/journeyCoustomerReview'
import axios from 'axios'
import { API_URL } from '../config'
//CSS
import '../style/guild-alluse.css'
import '../style/guild-intro.css'
import '../style/spacing.css'
import '../style/button.css'
import '../style/guild-intro.css'
import Rating from '../component/Rating'

function GuildInfo(props) {
  const [guildData, setGuildData] = useState(null)
  const id = props.match.params.id

  const [guildJourney, setGuildJourney] = useState(null)

  useEffect(() => {
    const getGuildData = async (id) => {
      let res = await axios.get(`${API_URL}/GuildInfo/${id}`, {
        withCredentials: true,
      })
      let data = res.data
      setGuildData(data)
      // console.log(data)
    }
    getGuildData(id)
  }, [id])

  //取出journey資料
  useEffect(() => {
    const getGuildJourney = async () => {
      let res = await axios.get(`http://localhost:3001/guild/journeys`, {
        withCredentials: true,
      })
      let data = res.data
      setGuildJourney(data)
    }
    getGuildJourney()
  }, [])

  return guildData && guildJourney ? (
    <>
      {/* banner */}
      <div className="guilddt-banner position-relative td-mt-75">
        <img
          className="img-fluid guilddt-banner-img"
          src={`/images/data/導遊banner/${guildData.banner1}`}
          alt="banner-img"
        />
        <div className="container guilddt-banner-content position-absolute d-flex">
          <img className="quote" src="/images/quotes.png" alt="" />
          <p className="guilddt-banner-text align-self-center">
            {guildData.intro}
          </p>
        </div>
      </div>
      <div className="container">
        {/* 導遊資料 */}
        <section className="guild-intro">
          {/* <!-- 導遊資料標題 --> */}
          <div className="guild-intro-title d-flex align-items-center justify-content-center position-relative mx-auto ">
            <h1>
              {guildData.name}
              {guildData.intro_title}
            </h1>
            <div className="guild-intro-title-review d-flex align-items-center">
              <div className="score">{`${guildData.rating}` + '.0'}</div>
              <Rating rating={guildData.rating} />
              <div className="review-num">
                {'(' + `${guildData.amountRating}` + ')'}
              </div>
            </div>
          </div>
          {/* <!-- web版介紹 --> */}
          <div className="guild-intro-box  justify-content-around td-mb-75">
            {/* <!-- 導遊圖片 --> */}
            <div className="guild-intro-item-img td-mb-25">
              <div className="intro-item-img-t d-flex justify-content-between align-items-end">
                <img
                  className="t-left"
                  src={`/images/data/導遊圖片/${guildData.img1}`}
                  alt="guild-img"
                />
                <img
                  className="t-right"
                  src={`/images/data/導遊圖片/${guildData.img2}`}
                  alt="guild-img"
                />
              </div>
              <div className="intro-item-img-b d-flex align-items-start justify-content-between">
                <img
                  className="b-left"
                  src={`/images/data/導遊圖片/${guildData.img3}`}
                  alt="guild-img"
                />
                <img
                  className="b-right"
                  src={`/images/data/導遊圖片/${guildData.img4}`}
                  alt="guild-img"
                />
              </div>
            </div>
            {/* <!-- 導遊介紹 --> */}
            <div className="guild-intro-item-group d-flex flex-column td-mb-25">
              <div className="guild-intro-item-dt">
                <div className="guild-intro-tribe d-flex align-items-center">
                  <div className="item-icon">
                    <i className="fas fa-map-signs"></i>
                  </div>
                  <div className="guild-intro-item-tribe">
                    <p className="item-tribe-title">帶團部落</p>
                    <p className="item-tribe-txt">{guildData.tribe}</p>
                  </div>
                </div>
                <div className="guild-intro-license d-flex align-items-center">
                  <div className="item-icon">
                    <i className="fas fa-id-badge"></i>
                  </div>
                  <div className="guild-intro-item-license">
                    <p className="item-license-title">證照</p>
                    <p className="item-license-txt">華語導遊證照</p>
                  </div>
                </div>
                <div className="guild-intro-lan d-flex align-items-center">
                  <div className="item-icon">
                    {' '}
                    <i class="fas fa-globe"></i>
                  </div>
                  <div className="guild-intro-item-lan">
                    <p className="item-lan-title">語言</p>
                    <p className="item-lan-txt">{guildData.language}</p>
                  </div>
                </div>
                {/* <button className="btn-consult text-white">預約</button> */}
              </div>
              {/* <!-- 影片 --> */}
              <div className="guild-intro-video ">
                <iframe
                  src={guildData.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          {/* <!-- rwd版介紹 --> */}
          <div className="guild-intro-box-rwd justify-content-center td-mb-75">
            {/* <!-- 導遊介紹 --> */}
            <div className="guild-intro-item-group d-flex flex-column">
              <div className="guild-intro-item-dt mx-auto">
                <div className="guild-intro-tribe d-flex align-items-center">
                  <div className="item-icon">
                    {' '}
                    <i className="fas fa-map-signs"></i>
                  </div>
                  <div className="guild-intro-item-tribe">
                    <p className="item-tribe-title">帶團部落</p>
                    <p className="item-tribe-txt">{guildData.tribe}</p>
                  </div>
                </div>
                <div className="guild-intro-license d-flex align-items-center">
                  <div className="item-icon">
                    <i className="fas fa-id-badge"></i>
                  </div>
                  <div className="guild-intro-item-license">
                    <p className="item-license-title">證照</p>
                    <p className="item-license-txt">華語導遊證照</p>
                  </div>
                </div>
                <div className="guild-intro-lan d-flex align-items-center">
                  <div className="item-icon">
                    {' '}
                    <i class="fas fa-globe"></i>
                  </div>
                  <div className="guild-intro-item-lan">
                    <p className="item-lan-title">語言</p>
                    <p className="item-lan-txt">{guildData.language}</p>
                  </div>
                </div>
                {/* <button className="btn-consult text-white">預約</button> */}
              </div>
            </div>
            {/* <!-- 導遊圖片 --> */}
            <div className="guild-intro-item-img d-flex flex-column mx-auto">
              <img
                className="t-left td-mb-25"
                src={`/images/data/導遊圖片/${guildData.img1}`}
                alt=""
              />
              <img
                className="t-right"
                src={`/images/data/導遊圖片/${guildData.img2}`}
                alt=""
              />
            </div>
            {/* <!-- 影片 --> */}
            <div className="guild-intro-video ">
              <iframe
                className="td-mt-75"
                src={guildData.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-mediagyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* 導遊行程 */}
        <GuildJourney guildData={guildData} guildJourney={guildJourney} />
        {/* 旅客評論 */}
        <LazyLoad>
          <JourneyCoustomerReview />
        </LazyLoad>
        <ScrollToTop smooth />
      </div>
    </>
  ) : (
    <div> loading </div>
  )
}

export default GuildInfo
