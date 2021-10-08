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
        {guilds.map((guild, i) => {
          return (
            <GuildItem
              key={i}
              guild={guild}
              // selected={product.status}
              // handleClick={handleClick}
            />
          )
        })}
      </div>
    </section>
  )
}

export default GuildList
