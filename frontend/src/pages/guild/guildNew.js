import React, { useEffect, useState } from 'react'
import Rating from '../../component/Rating'
import GuildInfo from '../GuildInfo'
import { Link, Route } from 'react-router-dom'
import axios from 'axios'

function GuildNew() {
  const [newGuilds, setNewGuilds] = useState(null)

  useEffect(() => {
    const getNewGuilds = async () => {
      let res = await axios.get(`http://localhost:3001/Guild`, {
        withCredentials: true,
      })
      let data = res.data.slice(4, 7)
      console.log(data)
      setNewGuilds(data)
    }
    getNewGuilds()
  }, [])

  return (
    <>
      <section className="guildlist-new td-mb-25 overflow-hidden">
        <div class="container guildlist-new-box td-mt-25 ">
          <h2 class="guildlist-new-title ">新人導遊推薦</h2>
          <div class="guildlist-new-box d-flex flex-wrap justify-content-evenly">
            {newGuilds &&
              newGuilds.map((guild) => (
                <div
                  className="guildlist-new-item position-relative d-falign-items-center"
                  key={guild.id}
                >
                  <div class="guild-tribe position-absolute">{guild.tribe}</div>
                  {/* <!-- 上方導遊基本資料 --> */}
                  <div className="guildlist-new-main mx-auto d-flex flex-wrp flex-column align-items-center">
                    <div class="guild-info">
                      {/* 頭像 */}
                      <img
                        class="guild-info-avatar d-block mx-auto"
                        src={`/images/data/導遊圖片/${guild.avatar}`}
                        alt="guild-avatar"
                      />
                      <div class="guild-info-name text-center">
                        {guild.name}
                      </div>
                      <div className="guild-info-lan text-center">
                        {guild.language}
                      </div>

                      <div class="guild-info-stars mx-auto">
                        <Rating
                          rating={guild.rating}
                          amountRating={guild.amountRating}
                        ></Rating>
                      </div>
                    </div>
                    {/* <!-- 下方評價 --> */}
                    <div class="guild-interview">
                      {/* <p class="interview-title text-center"></p> */}
                      <p class="interview-content text-center">{guild.intro}</p>
                    </div>
                    {/* <!-- 預約button --> */}
                    <Link
                      to={`GuildInfo/${guild.id}`}
                      class="btn-booking text-white  d-flex align-items-center justify-content-center"
                      href="guild-intro.html"
                    >
                      預約
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default GuildNew
