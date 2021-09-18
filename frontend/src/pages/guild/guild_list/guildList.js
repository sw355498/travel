import React from 'react'
import GuildItem from './guildItem'

function GuildList(props) {
  const { guilds, tags, lans, stars } = props
  return (
    <section className="container guildlist-filter-result td-mb-25">
      <h2 className="filter-result-title">
        篩選結果：{tags.toString()},{lans},{stars.toString() + '星'}
      </h2>
      <div className="filter-result-box d-flex flex-wrap justify-content-evenly col-12">
        {guilds

          .filter(
            (guild) =>
              lans.some((lan) => guild.lan.includes(lan)) &&
              tags.some((tag) => guild.tribe.includes(tag)) &&
              stars.some((star) => guild.rating.includes(star))
          )
          .map((guild, i) => {
            return <GuildItem key={i} guild={guild} />
          })}
      </div>
    </section>
  )
}

export default GuildList
