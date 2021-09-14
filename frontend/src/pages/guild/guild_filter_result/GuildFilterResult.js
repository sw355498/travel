import React, { useState } from 'react'
import GuildFilterBar from '../guild_filter_bar/GuildFilterBar'
import GuildList from '../guild_list/guildList'
import GuildData from '../../../data/guildData'

function GuildFilterResult({ tribe }) {
  // eslint-disable-next-line no-unused-vars
  const [guilds, setGuilds] = useState(GuildData)
  const [displayGuilds, setDisplayGuilds] = useState(GuildData)
  const [tags, setTags] = useState(['靜浦部落'])
  const [stars, setStars] = useState(['5'])
  const tagTypes = [
    '靜浦部落',
    '新社部落',
    '太巴塱部落',
    '水璉部落',
    '奇美部落',
    '奇萊雅部落',
    '撒固兒',
  ]

  const starsTypes = ['5', '4', '3', '2', '1']

  return (
    <>
      <GuildFilterBar
        tagTypes={tagTypes}
        tags={tags}
        setTags={setTags}
        stars={stars}
        setStars={setStars}
        starsTypes={starsTypes}
      />
      <div className="container td-mt-75 filter-resultcontainer ">
        <GuildList tags={tags} stars={stars} guilds={displayGuilds} />
      </div>
    </>
  )
}

export default GuildFilterResult
