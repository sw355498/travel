import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
// import quote from '../../img/quotes.png'

// useEffect(() => {
//   const getGuilds = async () => {
//     let res = await axios.get('http://localhost:3001/Guild')
//   }
// }, [])

const GuildInfoBanner = () => {
  const { guildId } = useParams()
  const [guildData, setGuildData] = useState(null)

  useEffect(() => {
    const getGuilds = async () => {
      let res = await axios.get('http://localhost:3001/Guild' + guildId)
      let data = res.data
      setGuildData(data)
    }
    getGuilds(guildId)
  }, [guildId])

  return (
    <>
      {guildData &&
        guildData.map((guild) => (
          <div className="guilddt-banner position-relative td-mt-75">
            <img
              className="img-fluid guilddt-banner-img"
              src="/images/data/水璉部落/導遊/導遊2.jpg"
              alt="banner-img"
            />
            <div className="container guilddt-banner-content position-absolute d-flex">
              <img
                className="quote"
                src={`/images/data/導遊banner/${guild.banner1}`}
                alt=""
              />
              <p className="guilddt-banner-text align-self-center">
                {guild.intro}
              </p>
            </div>
          </div>
        ))}
    </>
  )
}
export default GuildInfoBanner
