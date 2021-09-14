import React from 'react'
import GuildItem from './guildItem'

function GuildList(props) {
  const { guilds, tags, stars } = props
  return (
    <section className="container guildlist-filter-result td-mb-25">
      <h2 className="filter-result-title">篩選結果：{tags.toString()}</h2>
      <div className="filter-result-box d-flex flex-wrap justify-content-evenly col-12">
        {guilds
          .filter((guild) => tags.some((tag) => guild.tribe.includes(tag)))
          .map((guild, i) => {
            return <GuildItem key={i} guild={guild} />
          })}
      </div>
    </section>
  )
}

export default GuildList
