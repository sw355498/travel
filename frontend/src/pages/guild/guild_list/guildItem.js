import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../../../component/Rating'

function GuildItem({ guild }) {
  return (
    <>
      {/* <!-- 篩選結果 --> */}
      {/* <section className="container guildlist-filter-result td-mb-25">
        <h2 className="filter-result-title">篩選結果：</h2> */}
      {/* <div className="filter-result-box d-flex flex-wrap justify-content-evenly col-12"> */}
      <div
        className="filter-result-item position-relative d-flex align-items-center"
        key={guild.id}
      >
        {/* 部落 */}
        <div className="guild-tribe position-absolute">{guild.tribe}</div>
        <div className="filter-result-item-main mx-auto d-flex flex-wrp flex-column align-items-center">
          {/* <!-- 上方導遊基本資料 --> */}
          <div className="guild-info">
            {/* 頭像 */}
            <img
              className="guild-info-avatar d-block mx-auto"
              src={`/images/${guild.img1}`}
              alt="guild-avatar"
            />
            {/* 姓名 */}
            <div className="guild-info-name text-center">{guild.name}</div>
            {/* 星等 */}
            <div className="guild-info-stars mx-auto">
              <Rating
                rating={guild.rating}
                amountRating={guild.amountRating}
              ></Rating>
            </div>
          </div>
          {/* <!-- 導遊下方評價 --> */}
          <div className="guild-interview">
            <p className="interview-title text-center ">
              <span>{guild.journey_name}</span>
            </p>
            <p className="interview-content text-center">
              {guild.journey_intro}
            </p>
          </div>
          {/* <!-- 預約button --> */}
          <Link
            to={`GuildInfo/${guild.id}`}
            className="btn-booking text-white  d-flex align-items-center justify-content-center"
          >
            詳細
          </Link>
        </div>
      </div>
      {/* </div> */}
      {/* </section> */}
    </>
  )
}
export default GuildItem
