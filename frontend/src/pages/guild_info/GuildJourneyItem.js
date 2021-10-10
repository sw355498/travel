import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Rating from '../../component/Rating'
import axios from 'axios'

function GuildJourneyItem(props) {
  const { card, idx, tribeForJourney, guildJourneyItem } = props
  const tribeItem = card.tribe

  const tribeItemSplit = tribeItem.split(',')
  const tribefilterResult = tribeItemSplit.filter((item) =>
    item.includes(tribeForJourney.tirbe)
  )
  const getGuildJourney = async () => {
    let res = await axios.get(`http://localhost:3001/journeys/${idx}`, {
      withCredentials: true,
    })
    getGuildJourney(idx)
  }

  //轉化price to 貨幣型態
  const tranferPriceFormat = card.price
  const digitsRE = /(\d{3})(?=\d)/g

  function currency(value, currency, decimals) {
    value = parseFloat(value)
    if (!isFinite(value) || (!value && value !== 0)) return ''
    currency = currency != null ? currency : 'TWD'
    decimals = decimals != null ? decimals : 0
    var stringified = Math.abs(value).toFixed(decimals)
    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified
    var i = _int.length % 3
    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : ''
    var _float = decimals ? stringified.slice(-1 - decimals) : ''
    var sign = value < 0 ? '-' : ''
    return (
      sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float
    )
  }
  const PriceFormated = currency(tranferPriceFormat)

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
        <div className="guild-journey-content">
          {/* <!-- title部分 --> */}
          <div className="guild-journey-item-title">
            <div className="guild-journey-item-name">{card.name}</div>
            <div className="line"></div>
          </div>
          <div className="guild-journey-item-price ">
            <span>{PriceFormated}</span>
          </div>
          <div className="guild-journey-item-txt">
            {card.description}
            {/* <p dangerouslySetInnerHTML={{ __html: card.introname }}></p> */}
          </div>
        </div>
        <div className="guild-journey-review d-flex align-items-center">
          {/* <div className="guild-journey-review-title">評價：</div> */}
          <div className="guild-journey-review-score">
            {`${card.rating}` + '.0'}
          </div>
          <Rating rating={card.rating} />
          <div className="guild-journey-review-title">
            {/* {'(' + `${card.amountRating}` + ')'} */}
            {`${card.amountRating}` + '則評論'}
          </div>
        </div>
        <div className="guild-journey-act">
          {/* <a className="act-btn heart" href="">
              <img src="" alt="" />
            </a> */}
          {/* <button className="act-btn btn-detail">詳細</button> */}
          <Link
            className="td-btn-medium-w d-flex align-items-center justify-content-center guild-journey-detail-btn"
            to={`/journey_Info/${card._id}`}
          >
            詳細
          </Link>
          {/* <a className="act-btn heart" href="">
                <img src={collect} alt="" />
              </a> */}
        </div>
      </div>
    </div>
  )
}
export default GuildJourneyItem
