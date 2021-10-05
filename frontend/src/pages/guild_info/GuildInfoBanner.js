import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

const GuildInfoBanner = () => {
  const [guildData, setGuildData] = useState(null)
  const { guildId } = useParams()

  useEffect(() => {
    const getGuilds = async (guildId) => {
      let res = await axios.get(`http://localhost:3001/Guild/${guildId}`)
      let data = res.data
      setGuildData(data)
    }
    getGuilds()
  }, [])

  return guildData ? (
    <>
      {/* {guildData &&
        guildData.map((guild) => ( */}
      <div className="guilddt-banner position-relative td-mt-75">
        <img
          className="img-fluid guilddt-banner-img"
          src={`/images/data/導遊banner/${guildData.banner1}`}
          alt="banner-img"
        />
        <div className="container guilddt-banner-content position-absolute d-flex">
          <img
            className="quote"
            // src={`/images/data/導遊banner/${guildData.banner1}`}
            alt=""
          />
          <p className="guilddt-banner-text align-self-center">
            {guildData.intro}
          </p>
        </div>
      </div>
      {/* ))} */}
    </>
  ) : (
    <div> loading </div>
  )
}
export default GuildInfoBanner
