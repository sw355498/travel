import React from 'react'
import GuildNewAvatar from '../../data/撒固兒部落/導遊１/導遊 1-1.png'
import GuildData from '../../data/guildData'
import Rating from '../../component/Rating'
import GuildInfo from '../GuildInfo'
import { Link, Route } from 'react-router-dom'

function GuildNew() {
  return (
    <>
      {/* !-- 新人導遊推薦 --> */}
      <section class="guildlist-new td-mb-25 overflow-hidden">
        <div class="container guildlist-new-box td-mt-25 ">
          <h2 class="guildlist-new-title ">新人導遊推薦</h2>
          <div class="guildlist-new-box d-flex flex-wrap justify-content-evenly">
            <Route path="/Guild:id" component={GuildInfo}></Route>
            {GuildData.map((guild) => (
              <>
                {/* <!-- 新人導遊item1 --> */}
                <div
                  class="guildlist-new-item position-relative d-falign-items-center"
                  key={guild.id}
                >
                  <div class="guild-tribe position-absolute">{guild.tribe}</div>
                  {/* <!-- 上方導遊基本資料 --> */}
                  <div class="guildlist-new-main mx-auto d-flex flex-wrp flex-column align-items-center">
                    <div class="guild-info">
                      <img
                        class="guild-info-avatar d-block mx-auto"
                        src={GuildNewAvatar}
                        alt="guild-avatar"
                      />
                      <div class="guild-info-name text-center">
                        {guild.name}
                      </div>
                      <div class="guild-info-stars mx-auto">
                        <Rating
                          rating={guild.rating}
                          amountRating={guild.amountRating}
                        ></Rating>

                        {/* <div class="stars-label-group">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div> */}
                      </div>
                    </div>
                    {/* <!-- 下方評價 --> */}
                    <div class="guild-interview">
                      <p class="interview-title text-center">
                        {guild.journey_name}
                      </p>
                      <p class="interview-content text-center">
                        {guild.journey_intro}
                      </p>
                    </div>
                    {/* <!-- 預約button --> */}
                    <Link
                      to="/GuildInfo"
                      class="btn-booking text-white  d-flex align-items-center justify-content-center"
                      href="guild-intro.html"
                    >
                      預約
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default GuildNew
