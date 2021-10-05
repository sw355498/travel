import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Rating from '../../component/Rating'
import axios from 'axios'

function GuildJourneyItem(props) {
  const { card, idx, tribeForJourney, guildJourneyItem } = props
  const tribeItem = card.tribe
  // console.log('tribeItem', tribeItem)

  const tribeItemSplit = tribeItem.split(',')
  // console.log(tribeItemSplit)
  // console.log(tribeForJourney.tribe)
  // const tribefilterResult = tribeItemSplit.filter((item) =>
  //   item.includes(tribeForJourney.tirbe)
  // )
  const getGuildJourney = async () => {
    let res = await axios.get(`http://localhost:3001/journeys/${idx}`, {
      withCredentials: true,
    })
    getGuildJourney(idx)
  }

  return (
    <div className="guild-journey-item td-mb-25 position-relative">
      <img
        className="guild-journey-img"
        src={`/images/data/小banner圖/${card.banner_img}`}
        alt="行程照片"
      />
      {/* <!-- 白色bg --> */}
      <div className="guild-journey-item-bg ">
        <div className="guild-journey-tribe position-absolute">
          <i className="fas fa-tags"></i>
          <span>{card.tribe}</span>
        </div>
        {/* <!-- 內容 --> */}
        <div className="guild-journey-content position-relative">
          {/* <!-- title部分 --> */}
          <div className="guild-journey-item-title">
            <div className="guild-journey-item-name">{card.name}</div>
            <div className="line"></div>
          </div>
          <div className="guild-journey-item-price ">
            <span>{card.price}</span>
          </div>
          <div className="guild-journey-item-txt">
            <p dangerouslySetInnerHTML={{ __html: card.introname }}></p>
          </div>
          <div className="guild-journey-act">
            {/* <a className="act-btn heart" href="">
              <img src="" alt="" />
            </a> */}
            {/* <button className="act-btn btn-detail">詳細</button> */}
            <Link
              className="act-btn btn-booking-md"
              to={`/journey_Info/${card._id}`}
            >
              詳細
            </Link>
            {/* <a className="act-btn heart" href="">
                <img src={collect} alt="" />
              </a> */}
          </div>
          <div className="guild-journey-review d-flex align-items-center">
            <div className="guild-journey-review-title">評價：</div>
            <div className="guild-journey-review-score">{card.rating}</div>
            <Rating rating={card.rating} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default GuildJourneyItem
