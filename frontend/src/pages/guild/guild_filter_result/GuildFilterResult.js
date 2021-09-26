import React, { useState } from 'react'
import GuildFilterBar from '../guild_filter_bar/GuildFilterBar'
import GuildList from '../guild_list/GuildList'
import GuildData from '../../../data/guildData'

// const getGuildData = async () => {
//   try {
//     let res = await axios.get('http://localhost:3001/Guild')
//     let data = res.data
//     console.log(data)
//   } catch (e) {
//     console.log(e)
//   }
// }

function GuildFilterResult({ tribes }, { languages }) {
  const [guilds, setGuilds] = useState(GuildData)
  const [displayGuilds, setDisplayGuilds] = useState(GuildData)
  const [tags, setTags] = useState(['靜浦部落'])
  const [lans, setLans] = useState(['中文'])
  const [stars, setStars] = useState(['5'])
  const tagTypes = [
    '靜浦部落',
    '新社部落',
    '太巴塱部落',
    '水璉部落',
    '奇美部落',
    '奇萊雅部落',
    '撒固兒部落',
  ]
  const lanTypes = ['中文', '英文']
  const starsTypes = ['5', '4', '3', '2', '1']

  return (
    <>
      <GuildFilterBar
        tagTypes={tagTypes}
        tags={tags}
        setTags={setTags}
        lanTypes={lanTypes}
        lans={lans}
        setLans={setLans}
        stars={stars}
        setStars={setStars}
        starsTypes={starsTypes}
      />
      <div className="container td-mt-75 filter-resultcontainer ">
        <GuildList
          tags={tags}
          lans={lans}
          stars={stars}
          guilds={displayGuilds}
        />
      </div>
    </>
  )
}

export default GuildFilterResult
